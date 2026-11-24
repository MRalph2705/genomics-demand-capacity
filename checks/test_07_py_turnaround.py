import pandas as pd

from dcap.metrics import turnaround_by_cohort
from harness import expected

DATES = ["referred_date", "sample_received_date", "sequenced_date", "reported_date"]


def test_turnaround_by_cohort():
    clean = expected("clean_referrals.csv", parse_dates=DATES)
    got = turnaround_by_cohort(clean)
    want = expected("turnaround_by_month.csv", parse_dates=["month"])
    assert set(want.columns) <= set(got.columns), f"Missing columns: {sorted(set(want.columns) - set(got.columns))}"
    key = ["priority", "month"]
    got = got.sort_values(key).reset_index(drop=True)
    want = want.sort_values(key).reset_index(drop=True)
    assert len(got) == len(want), f"Expected {len(want)} rows (one per priority and month). You have {len(got)}. " \
        "Did you leave out the 'old enough' rule?"
    assert (pd.to_datetime(got["month"]).to_numpy() == want["month"].to_numpy()).all(), "month should be the FIRST DAY of the month"
    assert (got["referrals"].to_numpy() == want["referrals"].to_numpy()).all(), "referrals differ"
    assert (got["target_days"].to_numpy() == want["target_days"].to_numpy()).all()
    assert (abs(got["pct_within_target"] - want["pct_within_target"]) < 0.11).all(), "pct_within_target differs"
    assert (abs(got["median_days"] - want["median_days"]) < 0.01).all(), "median_days differs"
    assert (abs(got["p90_days"] - want["p90_days"]) < 0.11).all(), "p90_days differs"


def test_it_does_not_change_its_input():
    clean = expected("clean_referrals.csv", parse_dates=DATES)
    before = clean.copy()
    turnaround_by_cohort(clean)
    pd.testing.assert_frame_equal(clean, before)


def test_the_rules_on_a_small_table():
    """Hand-made rows, so you can see each rule work. The first referral is on 2025-01-06, so the data ends on 2026-07-06."""
    rows = [   # id, referred, priority, reported
        ("A", "2025-01-06", "urgent", "2025-01-10"),     # 4 days: within the 14-day target
        ("B", "2025-01-07", "urgent", None),             # old, never reported: NOT within target
        ("C", "2025-01-08", "urgent", "2025-02-20"),     # 43 days: late
        ("D", "2026-07-03", "urgent", None),             # too recent to judge: must not be counted
        ("E", "2025-01-06", "routine", "2025-02-10"),    # 35 days: within the 42-day target
    ]
    clean = pd.DataFrame(rows, columns=["referral_id", "referred_date", "priority", "reported_date"])
    clean["referred_date"] = pd.to_datetime(clean["referred_date"])
    clean["reported_date"] = pd.to_datetime(clean["reported_date"])
    got = turnaround_by_cohort(clean).set_index("priority")
    urgent, routine = got.loc["urgent"], got.loc["routine"]
    assert urgent["referrals"] == 3, "D is too recent to count. B (never reported) must count."
    assert urgent["pct_within_target"] == 33.3, "Only A is within target. B (not reported) is not."
    assert urgent["median_days"] == 23.5 and abs(urgent["p90_days"] - 39.1) < 0.11, "Days are for reported referrals only"
    assert routine["referrals"] == 1 and routine["pct_within_target"] == 100.0
    assert pd.Timestamp(urgent["month"]) == pd.Timestamp("2025-01-01")
