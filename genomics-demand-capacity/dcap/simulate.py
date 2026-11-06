"""Make a synthetic referral file by simulating a lab queue.

Referrals arrive on weekdays. Samples reach the lab a few days later. Each weekday the lab
sequences as many samples as its capacity allows: urgent first, then the oldest. Reports
follow a few days after sequencing. Because the data come from a queue, backlog and
turnaround times behave like the real thing.
"""
import heapq
from datetime import date, timedelta

import numpy as np
import pandas as pd

from dcap import config

PRIORITY_RANK = {"urgent": 0, "routine": 1}
SAMPLE_LAG_DAYS = {"urgent": (1, 2), "routine": (1, 5)}      # (low, high) days
REPORT_LAG_DAYS = {"urgent": (2, 5), "routine": (5, 20)}


def holiday_factor(week_start):
    """Return the holiday factor for the week that starts on week_start."""
    in_christmas_weeks = (week_start.month == 12 and week_start.day >= 22) or (
        week_start.month == 1 and week_start.day <= 4)
    if in_christmas_weeks:
        return config.CHRISTMAS_FACTOR
    if week_start.month == 8:
        return config.AUGUST_FACTOR
    return 1.0


def weekly_capacity(n_weeks):
    """Return a DataFrame of planned sequencing capacity for each week."""
    starts = [config.START_DATE + timedelta(weeks=w) for w in range(n_weeks)]
    capacity = []
    for week_number, start in enumerate(starts):
        base = (config.CAPACITY_AFTER_NEW_SEQUENCER if week_number >= config.NEW_SEQUENCER_WEEK
                else config.BASE_WEEKLY_CAPACITY)
        capacity.append(int(round(base * holiday_factor(start))))
    return pd.DataFrame({"week_start": pd.to_datetime(starts), "sequencing_capacity": capacity})


def next_weekday(day):
    """Move a Saturday or Sunday to the following Monday."""
    while day.weekday() >= 5:
        day += timedelta(days=1)
    return day


def daily_capacities(weekly):
    """Split a weekly capacity over five weekdays, e.g. 103 -> [21, 21, 21, 20, 20]."""
    base, extra = divmod(weekly, 5)
    return [base + (1 if i < extra else 0) for i in range(5)]


def simulate_referrals(seed=config.SEED):
    """Return a clean DataFrame with one row per referral."""
    rng = np.random.default_rng(seed)
    cutoff = config.START_DATE + timedelta(weeks=config.N_WEEKS)
    capacity = weekly_capacity(config.N_WEEKS)["sequencing_capacity"].tolist()

    referrals = []
    for week_number in range(config.N_WEEKS):
        week_start = config.START_DATE + timedelta(weeks=week_number)
        mean_week = (config.BASE_WEEKLY_DEMAND + config.DEMAND_GROWTH_PER_WEEK * week_number) * holiday_factor(week_start)
        for weekday in range(5):
            day = week_start + timedelta(days=weekday)
            for _ in range(rng.poisson(mean_week / 5)):
                priority = "urgent" if rng.random() < config.URGENT_SHARE else "routine"
                test_type = rng.choice(config.TEST_TYPES, p=config.TEST_TYPE_WEIGHTS)
                low, high = SAMPLE_LAG_DAYS[priority]
                received = next_weekday(day + timedelta(days=int(rng.integers(low, high + 1))))
                referrals.append({"referred_date": day, "test_type": str(test_type), "priority": priority,
                                  "sample_received_date": received if received < cutoff else None})

    for number, row in enumerate(referrals, start=1):
        row["referral_id"] = f"R{number:06d}"

    waiting = []                      # a heap of (rank, received date, id)
    arrivals = {}
    for index, row in enumerate(referrals):
        if row["sample_received_date"] is not None:
            arrivals.setdefault(row["sample_received_date"], []).append(index)
    for row in referrals:
        row["sequenced_date"] = None
        row["reported_date"] = None

    day = config.START_DATE
    while day < cutoff:
        if day.weekday() < 5:
            for index in arrivals.get(day, []):
                row = referrals[index]
                heapq.heappush(waiting, (PRIORITY_RANK[row["priority"]], day, index))
            week_number = (day - config.START_DATE).days // 7
            slots = daily_capacities(capacity[week_number])[day.weekday()]
            for _ in range(min(slots, len(waiting))):
                _, _, index = heapq.heappop(waiting)
                row = referrals[index]
                row["sequenced_date"] = day
                low, high = REPORT_LAG_DAYS[row["priority"]]
                reported = next_weekday(day + timedelta(days=int(rng.integers(low, high + 1))))
                row["reported_date"] = reported if reported < cutoff else None
        day += timedelta(days=1)

    columns = ["referral_id", "referred_date", "test_type", "priority",
               "sample_received_date", "sequenced_date", "reported_date"]
    return pd.DataFrame(referrals, columns=columns)


def make_messy(clean, seed=config.SEED):
    """Return a copy of the clean data with realistic faults added."""
    rng = np.random.default_rng(seed + 1)
    messy = clean.copy()
    date_columns = ["referred_date", "sample_received_date", "sequenced_date", "reported_date"]
    for column in date_columns:
        messy[column] = pd.to_datetime(messy[column])

    reported = messy.index[messy["reported_date"].notna()].to_numpy()
    for index in rng.choice(reported, size=config.N_BAD_ORDER_ROWS, replace=False):
        messy.loc[index, "reported_date"] = messy.loc[index, "sequenced_date"] - pd.Timedelta(days=3)

    for index in rng.choice(messy.index.to_numpy(), size=config.N_MESSY_TEXT_ROWS, replace=False):
        messy.loc[index, "test_type"] = rng.choice([" rapid", "CANCER PANEL ", "rare disease"])

    duplicates = messy.sample(n=config.N_DUPLICATE_ROWS, random_state=seed)
    return pd.concat([messy, duplicates], ignore_index=True)
