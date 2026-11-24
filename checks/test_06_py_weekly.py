import pandas as pd
import pytest

from dcap import config
from dcap.metrics import count_by_week, week_start, weekly_table
from harness import expected

DATES = ["referred_date", "sample_received_date", "sequenced_date", "reported_date"]


def test_week_start_is_the_monday():
    dates = pd.Series(pd.to_datetime(["2025-01-06", "2025-01-09", "2025-01-12", "2025-01-13"]))   # Mon, Thu, Sun, Mon
    assert list(week_start(dates)) == [pd.Timestamp("2025-01-06")] * 3 + [pd.Timestamp("2025-01-13")]


def test_week_start_removes_the_time():
    dates = pd.Series(pd.to_datetime(["2025-01-09 15:30"]))
    assert week_start(dates).iloc[0] == pd.Timestamp("2025-01-06")


def test_count_by_week_counts_and_ignores_missing():
    dates = pd.Series(pd.to_datetime(["2025-01-06", "2025-01-07", None, "2025-01-14"]))
    result = count_by_week(dates, "n")
    assert result.name == "n"
    assert result.to_dict() == {pd.Timestamp("2025-01-06"): 2, pd.Timestamp("2025-01-13"): 1}


@pytest.fixture(scope="module")
def inputs():
    clean = expected("clean_referrals.csv", parse_dates=DATES)
    capacity = pd.read_csv("data/capacity_weekly.csv", parse_dates=["week_start"])
    return clean, capacity


def test_weekly_table_shape_and_columns(inputs):
    table = weekly_table(*inputs)
    assert table.index.name == "week_start"
    assert list(table.columns) == ["referrals", "samples_received", "sequenced", "reported", "capacity",
                                   "utilisation", "backlog_end", "referrals_4wk_avg"]
    assert len(table) == config.N_WEEKS == 78, "One row per week of HISTORY (the first 78 weeks), not the planned weeks"


def test_weekly_table_values(inputs):
    table = weekly_table(*inputs)
    want = expected("weekly_summary.csv", parse_dates=["week_start"]).set_index("week_start")
    assert (table.index == want.index).all()
    for column in ["referrals", "samples_received", "sequenced", "reported", "capacity", "backlog_end"]:
        assert (table[column].to_numpy() == want[column].to_numpy()).all(), f"{column} is wrong. First wrong week: " \
            f"{table.index[(table[column].to_numpy() != want[column].to_numpy()).argmax()].date()}"
    assert (abs(table["utilisation"] - want["utilisation"]) < 0.0011).all(), "utilisation is wrong (sequenced / capacity, 3 decimals)"
    both_missing = table["referrals_4wk_avg"].isna() & want["referrals_4wk_avg"].isna()
    assert (both_missing | (abs(table["referrals_4wk_avg"] - want["referrals_4wk_avg"]) < 0.101)).all(), "referrals_4wk_avg is wrong"
    assert table["referrals_4wk_avg"].isna().sum() == 3


def test_weekly_table_counts_are_whole_numbers(inputs):
    table = weekly_table(*inputs)
    for column in ["referrals", "samples_received", "sequenced", "reported"]:
        assert pd.api.types.is_integer_dtype(table[column]), f"{column} should be whole numbers"


def test_weekly_table_does_not_change_its_inputs(inputs):
    clean, capacity = inputs
    before_clean, before_capacity = clean.copy(), capacity.copy()
    weekly_table(clean, capacity)
    pd.testing.assert_frame_equal(clean, before_clean)
    pd.testing.assert_frame_equal(capacity, before_capacity)
