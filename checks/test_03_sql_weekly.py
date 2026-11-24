import pandas as pd
import pytest
from harness import build_database, expected, lower_columns, run_script

MAP = {"weekstart": "week_start", "referrals": "referrals", "samplesreceived": "samples_received",
       "sequenced": "sequenced", "reported": "reported", "capacity": "capacity", "utilisation": "utilisation",
       "backlogend": "backlog_end", "referrals4wkavg": "referrals_4wk_avg"}


def get_view():
    con = build_database(with_clean=True)
    run_script(con, "03_weekly_summary.sql")
    return con, lower_columns(con.execute("SELECT * FROM dbo.vw_WeeklySummary ORDER BY WeekStart").fetchdf())


def test_columns_and_rows():
    _, view = get_view()
    assert list(view.columns) == list(MAP), f"Columns should be {list(MAP)}. You have {list(view.columns)}"
    assert len(view) == 78, f"The view should show the 78 weeks of history only. It shows {len(view)}."


def test_values_match_the_known_good_answer():
    _, view = get_view()
    want = expected("weekly_summary.csv", parse_dates=["week_start"])
    assert (pd.to_datetime(view["weekstart"]).to_numpy() == want["week_start"].to_numpy()).all(), "WeekStart values differ"
    for sql_name, name in MAP.items():
        if sql_name == "weekstart":
            continue
        a, b = view[sql_name].astype(float).to_numpy(), want[name].to_numpy(dtype=float)
        tolerance = 0.101 if name == "referrals_4wk_avg" else 0.0011 if name == "utilisation" else 0.0
        same = ((abs(a - b) <= tolerance) | (pd.isna(a) & pd.isna(b))).all()
        assert same, f"{name} is wrong in at least one week. First difference: week {int((~((abs(a - b) <= tolerance) | (pd.isna(a) & pd.isna(b)))).argmax()) + 1}"


def test_a_week_with_no_referrals_still_appears_with_zero():
    con, _ = get_view()
    con.execute("""DELETE FROM dbo.Referrals WHERE DATE '2025-03-03' IN
                   (ReferredWeek, SampleReceivedWeek, SequencedWeek, ReportedWeek)""")        # nothing at all happens that week
    view = lower_columns(con.execute("SELECT * FROM dbo.vw_WeeklySummary ORDER BY WeekStart").fetchdf())
    row = view[pd.to_datetime(view["weekstart"]) == "2025-03-03"]
    assert len(view) == 78 and len(row) == 1, "A week with no referrals must still have a row (hint: start from the capacity table)."
    assert int(row["referrals"].iloc[0]) == 0 and int(row["sequenced"].iloc[0]) == 0


@pytest.mark.parametrize("alias", ["Utilisation", "Referrals4WkAvg"])
def test_no_integer_division_or_integer_average(alias):
    """A rule check. In T-SQL, 7 / 2 is 3 (whole numbers) and AVG of whole numbers is a whole number.
    DuckDB gives 3.5 in both, so the checker cannot see the mistake. SQL Server would give wrong figures.
    Cast one side to DECIMAL (or multiply by 1.0) so the arithmetic is decimal."""
    from harness import column_expression, uses_decimal_arithmetic
    expression = column_expression("03_weekly_summary.sql", alias)
    assert uses_decimal_arithmetic(expression), \
        f"{alias}: on SQL Server this would use whole-number arithmetic. Cast to DECIMAL first. Your expression: {expression.strip()[:150]}"
