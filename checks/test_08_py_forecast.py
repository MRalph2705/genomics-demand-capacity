import numpy as np
import pandas as pd
import pytest

from dcap.forecast import (backtest, capacity_gap, forecast_demand, linear_trend_26, moving_average_4,
                           naive_last, weeks_to_clear)
from harness import expected


def test_the_three_methods():
    history = np.arange(1.0, 11.0)
    assert list(naive_last(history, 3)) == [10.0] * 3
    assert list(moving_average_4(history, 2)) == [8.5, 8.5]
    line = np.arange(30) * 2.0 + 1                       # 1, 3, 5, ... 59
    assert linear_trend_26(line, 3) == pytest.approx([61.0, 63.0, 65.0])


def test_weeks_to_clear():
    assert weeks_to_clear(50, [100, 100], [90, 90], extra_capacity=0) is None
    assert weeks_to_clear(50, [100, 100, 100], [100, 100, 100], extra_capacity=30) == 2
    assert weeks_to_clear(0, [100], [100], extra_capacity=0) == 1


def test_forecast_starts_the_week_after_the_history():
    demand = pd.Series(range(30), index=pd.date_range("2025-01-06", periods=30, freq="7D"), dtype=float)
    forecast = forecast_demand(demand, 3, "naive_last")
    assert list(forecast.index) == list(pd.date_range("2025-08-04", periods=3, freq="7D"))
    assert (forecast == 29).all() and forecast.name == "forecast_demand"


def test_forecast_is_rounded_to_one_decimal():
    demand = pd.Series([1.0, 2.0, 2.0, 2.0, 2.01], index=pd.date_range("2025-01-06", periods=5, freq="7D"))
    forecast = forecast_demand(demand, 1, "moving_average_4")
    assert forecast.iloc[0] == round(float(np.mean([2.0, 2.0, 2.0, 2.01])), 1)


def test_backtest_ranks_a_perfect_straight_line_first():
    scores = backtest(pd.Series(np.arange(60, dtype=float) + 100))
    assert list(scores.columns) == ["method", "mae", "mape_pct"]
    assert scores.loc[0, "method"] == "linear_trend_26"
    assert scores.loc[0, "mae"] == pytest.approx(0, abs=1e-6)
    assert list(scores.index) == [0, 1, 2]


def test_backtest_on_the_real_weekly_demand():
    demand = expected("weekly_summary.csv", parse_dates=["week_start"]).set_index("week_start")["referrals"]
    got, want = backtest(demand), expected("backtest.csv")
    assert list(got["method"]) == list(want["method"])
    assert got["mae"].to_numpy() == pytest.approx(want["mae"].to_numpy())
    assert got["mape_pct"].to_numpy() == pytest.approx(want["mape_pct"].to_numpy())


def test_capacity_gap_is_demand_minus_capacity():
    index = pd.date_range("2026-07-06", periods=2, freq="7D")
    gap = capacity_gap(pd.Series([120.0, 120.0], index=index), pd.Series([125, 112], index=index))
    assert list(gap.columns) == ["forecast_demand", "planned_capacity", "gap"]
    assert list(gap["gap"]) == [-5.0, 8.0]


def test_forecast_gap_and_scenarios_on_the_real_data():
    weekly = expected("weekly_summary.csv", parse_dates=["week_start"]).set_index("week_start")
    capacity = pd.read_csv("data/capacity_weekly.csv", parse_dates=["week_start"]).set_index("week_start")["sequencing_capacity"]
    forecast = forecast_demand(weekly["referrals"], 12, "naive_last")
    gap = capacity_gap(forecast, capacity)
    want = expected("forecast.csv", parse_dates=["week_start"]).set_index("week_start")
    assert (gap.index == want.index).all()
    assert gap["forecast_demand"].to_numpy() == pytest.approx(want["forecast_demand"].to_numpy())
    assert gap["planned_capacity"].to_numpy() == pytest.approx(want["planned_capacity"].to_numpy())
    assert gap["gap"].to_numpy() == pytest.approx(want["gap"].to_numpy())
    backlog = int(weekly["backlog_end"].iloc[-1])
    scenarios = expected("scenarios.csv")
    for extra, weeks in zip(scenarios["extra_capacity_per_week"], scenarios["weeks_to_clear_backlog"]):
        result = weeks_to_clear(backlog, gap["forecast_demand"], gap["planned_capacity"], extra)
        assert (result is None and pd.isna(weeks)) or result == weeks, f"extra {extra}: expected {weeks}, got {result}"
