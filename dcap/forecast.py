"""STEP 8 (Python): forecast weekly demand, test the methods, and compare demand with capacity.

You write the bodies. The names, inputs and outputs are the contract: the checks call them.
"""
import numpy as np
import pandas as pd

HOLDOUT_WEEKS = 12


def naive_last(history, horizon):
    """history: numpy array of past weekly values. Return a numpy array of `horizon` values, each equal to the last value."""
    raise NotImplementedError("Step 8: write naive_last")


def moving_average_4(history, horizon):
    """Return `horizon` values, each equal to the mean of the last 4 values of history."""
    raise NotImplementedError("Step 8: write moving_average_4")


def linear_trend_26(history, horizon):
    """Fit a straight line to the last 26 values (np.polyfit, degree 1) and extend it `horizon` weeks forward.

    The first forecast value is the point on the line one step after the last of the 26 weeks.
    """
    raise NotImplementedError("Step 8: write linear_trend_26")


METHODS = {"naive_last": naive_last, "moving_average_4": moving_average_4, "linear_trend_26": linear_trend_26}


def backtest(demand, holdout=HOLDOUT_WEEKS):
    """Hide the last `holdout` weeks of the demand Series, forecast them with each method, and score the methods.

    Return a DataFrame with columns method, mae, mape_pct, sorted with the smallest mae first, index 0, 1, 2.
      mae       mean absolute error
      mape_pct  mean of |error| / actual, times 100
    """
    raise NotImplementedError("Step 8: write backtest")


def forecast_demand(demand, horizon, method_name):
    """Forecast `horizon` weeks beyond the end of the demand Series with METHODS[method_name].

    Return a Series named "forecast_demand", values rounded to 1 decimal.
    Its index is weekly dates (every 7 days) starting the week AFTER the last date of demand.
    """
    raise NotImplementedError("Step 8: write forecast_demand")


def capacity_gap(forecast, planned_capacity):
    """Return a DataFrame, indexed like the forecast, with columns:
      forecast_demand, planned_capacity (looked up by week), gap = forecast_demand - planned_capacity (1 decimal).
    A positive gap means demand is above capacity.
    """
    raise NotImplementedError("Step 8: write capacity_gap")


def weeks_to_clear(backlog, demand_by_week, capacity_by_week, extra_capacity):
    """How many weeks until the backlog reaches zero? Return the week number (1 is the first), or None.

    Each week:  waiting = max(0, waiting + demand - (capacity + extra_capacity)).
    Start with waiting = backlog. Return None if it is not zero by the end of the given weeks.
    """
    raise NotImplementedError("Step 8: write weeks_to_clear")
