"""Forecast weekly demand, test the methods on recent weeks and compare demand to capacity."""
import numpy as np
import pandas as pd

HOLDOUT_WEEKS = 12


def naive_last(history, horizon):
    """Repeat the last value."""
    return np.repeat(history[-1], horizon)


def moving_average_4(history, horizon):
    """Repeat the mean of the last four weeks."""
    return np.repeat(history[-4:].mean(), horizon)


def linear_trend_26(history, horizon):
    """Extend a straight line fitted to the last 26 weeks."""
    recent = history[-26:]
    slope, intercept = np.polyfit(np.arange(len(recent)), recent, deg=1)
    future_x = np.arange(len(recent), len(recent) + horizon)
    return intercept + slope * future_x


METHODS = {"naive_last": naive_last, "moving_average_4": moving_average_4, "linear_trend_26": linear_trend_26}


def backtest(demand, holdout=HOLDOUT_WEEKS):
    """Hide the last weeks, forecast them with each method and return the errors."""
    values = demand.to_numpy(dtype=float)
    history, actual = values[:-holdout], values[-holdout:]
    rows = []
    for name, method in METHODS.items():
        predicted = method(history, holdout)
        rows.append({"method": name,
                     "mae": float(np.mean(np.abs(actual - predicted))),
                     "mape_pct": float(np.mean(np.abs(actual - predicted) / actual) * 100)})
    return pd.DataFrame(rows).sort_values("mae").reset_index(drop=True)


def forecast_demand(demand, horizon, method_name):
    """Return a Series of forecast demand for the next weeks."""
    predicted = METHODS[method_name](demand.to_numpy(dtype=float), horizon)
    future_index = pd.date_range(demand.index[-1] + pd.Timedelta(weeks=1), periods=horizon, freq="7D")
    return pd.Series(predicted.round(1), index=future_index, name="forecast_demand")


def capacity_gap(forecast, planned_capacity):
    """Return forecast demand, planned capacity and the gap (positive = demand above capacity)."""
    table = pd.DataFrame({"forecast_demand": forecast,
                          "planned_capacity": planned_capacity.reindex(forecast.index)})
    table["gap"] = (table["forecast_demand"] - table["planned_capacity"]).round(1)
    return table


def weeks_to_clear(backlog, demand_by_week, capacity_by_week, extra_capacity):
    """Return how many weeks until the backlog reaches zero, or None if it does not within the forecast."""
    waiting = float(backlog)
    for week, (demand, capacity) in enumerate(zip(demand_by_week, capacity_by_week), start=1):
        waiting = max(0.0, waiting + demand - (capacity + extra_capacity))
        if waiting == 0:
            return week
    return None
