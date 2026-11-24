import pandas as pd
from harness import build_database, expected, lower_columns, run_script


def get_results():
    con = build_database(with_clean=True)
    results = run_script(con, "04_turnaround.sql")
    pct = next((lower_columns(r) for r in results if "pctwithintarget" in [c.lower() for c in r.columns]), None)
    spread = next((lower_columns(r) for r in results if "mediandays" in [c.lower() for c in r.columns]), None)
    return con, pct, spread


def prepare(frame, month_col="referralmonth"):
    frame = frame.copy()
    frame[month_col] = pd.to_datetime(frame[month_col])
    return frame.sort_values(["priority", month_col]).reset_index(drop=True)


def test_the_view_holds_only_eligible_referrals():
    con, _, _ = get_results()
    view = lower_columns(con.execute("SELECT * FROM dbo.vw_EligibleForTarget").fetchdf())
    assert {"priority", "targetdays", "referralmonth", "daystoreport"} <= set(view.columns), \
        f"The view needs Priority, TargetDays, ReferralMonth, DaysToReport. You have {list(view.columns)}"
    want = expected("turnaround_by_month.csv")["referrals"].sum()
    assert len(view) == want, f"The view should hold {want} eligible referrals. It holds {len(view)}. Check the eligibility rule."


def test_share_within_target():
    _, pct, _ = get_results()
    assert pct is not None, "No SELECT with a PctWithinTarget column was found (Part 2)."
    want = expected("turnaround_by_month.csv").rename(columns={"month": "referralmonth"})
    got, want = prepare(pct), prepare(want)
    assert len(got) == len(want), f"Expected {len(want)} rows (one per priority and month). You have {len(got)}."
    assert (got["referrals"].to_numpy() == want["referrals"].to_numpy()).all(), "Referrals counts differ"
    assert (abs(got["pctwithintarget"].astype(float).to_numpy() - want["pct_within_target"].to_numpy()) < 0.11).all(), "PctWithinTarget differs"


def test_median_and_p90():
    _, _, spread = get_results()
    assert spread is not None, "No SELECT with a MedianDays column was found (Part 3)."
    want = expected("turnaround_by_month.csv").rename(columns={"month": "referralmonth"})
    got, want = prepare(spread.drop_duplicates()), prepare(want)
    assert len(got) == len(want), f"Expected {len(want)} rows. You have {len(got)} (did you remove repeated rows with DISTINCT?)"
    assert (abs(got["mediandays"].astype(float).to_numpy() - want["median_days"].to_numpy()) < 0.01).all(), "MedianDays differs"
    assert (abs(got["p90days"].astype(float).to_numpy() - want["p90_days"].to_numpy()) < 0.11).all(), "P90Days differs"


def test_the_rules_on_a_small_table():
    """Hand-made rows. The first referral is on 2025-01-06, so the data ends on 2026-07-06."""
    con = build_database()
    con.executemany(
        "INSERT INTO dbo.Referrals (ReferralID, ReferredDate, TestType, Priority, ReportedDate) VALUES (?, ?, 'Rapid', ?, ?)",
        [("A", "2025-01-06", "urgent", "2025-01-10"),     # 4 days: within the 14-day target
         ("B", "2025-01-07", "urgent", None),             # old and never reported: NOT within target
         ("C", "2025-01-08", "urgent", "2025-02-20"),     # 43 days: late
         ("D", "2026-07-03", "urgent", None),             # too recent to judge: must not be counted
         ("E", "2025-01-06", "routine", "2025-02-10")])   # 35 days: within the 42-day target
    results = run_script(con, "04_turnaround.sql")
    pct = next(lower_columns(r) for r in results if "pctwithintarget" in [c.lower() for c in r.columns]).set_index("priority")
    spread = next(lower_columns(r) for r in results if "mediandays" in [c.lower() for c in r.columns]).drop_duplicates().set_index("priority")
    assert int(pct.loc["urgent", "referrals"]) == 3, "D is too recent to count. B (never reported) must count."
    assert float(pct.loc["urgent", "pctwithintarget"]) == 33.3, "Only A is within target. B (not reported) is not."
    assert float(pct.loc["routine", "pctwithintarget"]) == 100.0
    assert float(spread.loc["urgent", "mediandays"]) == 23.5 and abs(float(spread.loc["urgent", "p90days"]) - 39.1) < 0.11


def test_no_integer_division_in_the_percentage():
    """A rule check. In T-SQL, 1 / 3 is 0 (whole numbers). DuckDB gives 0.333, so the checker cannot see the mistake.
    Start the sum with 100.0 (a decimal) so the division is decimal."""
    from harness import column_expression, uses_decimal_arithmetic
    expression = column_expression("04_turnaround.sql", "PctWithinTarget")
    assert uses_decimal_arithmetic(expression), \
        f"PctWithinTarget: on SQL Server this would use whole-number arithmetic. Use 100.0 * ... Your expression: {expression.strip()[:150]}"
