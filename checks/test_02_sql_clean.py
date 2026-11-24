import pandas as pd
from harness import RAW_COLUMNS, build_database, run_script


def test_clean_load_on_the_real_file():
    con = build_database()
    run_script(con, "02_clean_load.sql")
    view = con.execute("SELECT * FROM dbo.vw_ReferralsChecked").fetchdf()
    assert {c.lower() for c in view.columns} == {c.lower() for c in RAW_COLUMNS} | {"rejectreason"}, \
        f"The view needs exactly these columns: {RAW_COLUMNS + ['RejectReason']}. You have {list(view.columns)}"
    assert len(view) == 8692, f"The view should have one row per ReferralID (8692). It has {len(view)}."
    assert view["ReferralID"].is_unique
    assert set(view["TestType"].dropna()) <= {"Rare disease", "Cancer panel", "Rapid"}, "TestType must use the standard spellings"
    assert set(view["Priority"].dropna()) <= {"urgent", "routine"}
    reasons = view["RejectReason"].dropna().value_counts().to_dict()
    assert reasons == {"reported_date before sequenced_date": 15}, f"Reject reasons on the real file: {reasons}"

    loaded = con.execute("SELECT COUNT(*), COUNT(DISTINCT ReferralID) FROM dbo.Referrals").fetchone()
    rejected = con.execute("SELECT COUNT(*) FROM dbo.Referrals_Rejected").fetchone()[0]
    assert loaded == (8677, 8677), f"dbo.Referrals should hold 8677 rows. It holds {loaded[0]}."
    assert rejected == 15, f"dbo.Referrals_Rejected should hold 15 rows. It holds {rejected}."


def test_the_count_select():
    con = build_database()
    results = run_script(con, "02_clean_load.sql")
    last = next((r for r in results if "rowsread" in [c.lower() for c in r.columns]), None)
    assert last is not None, "The file needs a SELECT that shows RowsRead, RowsLoaded, RowsRejected."
    assert [c.lower() for c in last.columns] == ["rowsread", "rowsloaded", "rowsrejected"]
    assert tuple(int(v) for v in last.iloc[0]) == (8717, 8677, 15)


MINI = [   # id, referred, test_type, priority, received, sequenced, reported, expected reason (None = good)
    ("A", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-10", None),
    ("B", "2025-01-06", "Foo", "urgent", "", "", "", "unknown test_type"),
    ("C", "2025-01-06", "Rapid", "someday", "", "", "", "unknown priority"),
    ("D", "", "Rapid", "urgent", "", "", "", "missing referred_date"),
    ("E", "2025-01-06", "Rapid", "urgent", "2025-01-05", "", "", "sample_received_date before referred_date"),
    ("F", "2025-01-06", "Rapid", "urgent", "", "2025-01-08", "", "sequenced_date without sample_received_date"),
    ("G", "2025-01-06", "Rapid", "urgent", "2025-01-08", "2025-01-07", "", "sequenced_date before sample_received_date"),
    ("H", "2025-01-06", "Rapid", "urgent", "2025-01-07", "", "2025-01-09", "reported_date without sequenced_date"),
    ("I", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-07", "reported_date before sequenced_date"),
    ("K", "2025-01-06", " CANCER panel ", " Routine", "2025-01-07", "", "", None),
    ("L", "2025-01-06", "Rare disease", "routine", "", "", "", None),
    ("M", "2025-01-06", "Foo", "someday", "", "", "", "unknown test_type"),
    ("N", "2025-01-06", "Rapid", "urgent", "2025-01-06", "2025-01-06", "2025-01-06", None),   # all on one day: allowed
]


def test_each_rule_fires_on_a_small_table():
    con = build_database()
    run_script(con, "02_clean_load.sql")
    con.execute("DELETE FROM dbo.Referrals_Raw")
    rows = [r[:7] for r in MINI] + [MINI[0][:7]]        # the A row appears twice: an exact duplicate
    con.executemany("INSERT INTO dbo.Referrals_Raw VALUES (?, ?, ?, ?, ?, ?, ?)", rows)
    view = con.execute("SELECT * FROM dbo.vw_ReferralsChecked").fetchdf()
    assert len(view) == len(MINI), f"One row per ReferralID expected ({len(MINI)}). Got {len(view)}."
    got = {r.ReferralID: (None if pd.isna(r.RejectReason) else r.RejectReason) for r in view.itertuples()}
    for row in MINI:
        assert got[row[0]] == row[7], f"Row {row[0]} should have reason {row[7]!r}. Yours: {got[row[0]]!r}"


def test_empty_text_is_turned_into_null_before_converting():
    """A rule check, not a result check. DuckDB turns '' into NULL by itself, but SQL Server turns '' into 1900-01-01.
    So the checker cannot see this mistake. Always write NULLIF(column, '') inside every TRY_CONVERT."""
    import re

    from harness import script_text
    text = script_text("02_clean_load.sql")
    total = len(re.findall(r"TRY_CONVERT\s*\(", text))
    wrapped = len(re.findall(r"TRY_CONVERT\s*\(\s*\w+(?:\s*\(\s*\d+\s*\))?\s*,\s*NULLIF", text))
    assert total > 0, "Convert the text columns with TRY_CONVERT (a bad value must give NULL, not stop the load)."
    assert wrapped == total, (f"{total - wrapped} of your {total} TRY_CONVERT calls do not start with NULLIF(column, ''). "
                              "On SQL Server an empty text converts to 1900-01-01, not NULL.")
