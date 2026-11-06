import numpy as np
import pandas as pd
import pytest

from dcap import config
from dcap.forecast import backtest, capacity_gap, forecast_demand, weeks_to_clear
from dcap.metrics import week_start, weekly_table
from dcap.simulate import daily_capacities, simulate_referrals, weekly_capacity


def test_week_start_is_the_monday():
    dates = pd.Series(pd.to_datetime(["2025-01-06", "2025-01-09", "2025-01-12"]))   # Mon, Thu, Sun
    assert set(week_start(dates)) == {pd.Timestamp("2025-01-06")}


def test_daily_capacities_add_up_to_the_weekly_figure():
    assert daily_capacities(103) == [21, 21, 21, 20, 20]
    assert sum(daily_capacities(61)) == 61


def test_weeks_to_clear():
    assert weeks_to_clear(50, [100, 100], [90, 90], extra_capacity=0) is None
    assert weeks_to_clear(50, [100, 100, 100], [100, 100, 100], extra_capacity=30) == 2


def test_forecast_starts_the_week_after_the_history():
    demand = pd.Series(range(30), index=pd.date_range("2025-01-06", periods=30, freq="7D"), dtype=float)
    forecast = forecast_demand(demand, 3, "naive_last")
    assert list(forecast.index) == list(pd.date_range("2025-08-04", periods=3, freq="7D"))
    assert (forecast == 29).all()


def test_backtest_ranks_a_perfect_straight_line_first():
    demand = pd.Series(np.arange(60, dtype=float) + 100)
    scores = backtest(demand)
    assert scores.loc[0, "method"] == "linear_trend_26"
    assert scores.loc[0, "mae"] == pytest.approx(0, abs=1e-6)


def test_capacity_gap_is_demand_minus_capacity():
    index = pd.date_range("2026-07-06", periods=2, freq="7D")
    forecast = pd.Series([120.0, 120.0], index=index)
    capacity = pd.Series([125, 112], index=index)
    assert list(capacity_gap(forecast, capacity)["gap"]) == [-5.0, 8.0]


@pytest.fixture(scope="module")
def clean_data():
    return simulate_referrals()


def test_simulation_is_repeatable(clean_data):
    assert clean_data.equals(simulate_referrals())


def test_lab_never_sequences_more_than_its_capacity(clean_data):
    capacity = weekly_capacity(config.N_WEEKS + config.FORECAST_WEEKS)
    weekly = weekly_table(clean_data.assign(**{c: pd.to_datetime(clean_data[c]) for c in
                          ["referred_date", "sample_received_date", "sequenced_date", "reported_date"]}), capacity)
    assert (weekly["sequenced"] <= weekly["capacity"]).all()


def test_backlog_is_never_negative_and_urgent_goes_first(clean_data):
    data = clean_data.dropna(subset=["sequenced_date"]).copy()
    data["wait"] = (pd.to_datetime(data["sequenced_date"]) - pd.to_datetime(data["sample_received_date"])).dt.days
    assert (data["wait"] >= 0).all()
    assert data.groupby("priority")["wait"].mean()["urgent"] < data.groupby("priority")["wait"].mean()["routine"]
