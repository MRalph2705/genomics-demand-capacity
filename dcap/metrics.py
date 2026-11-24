"""STEPS 6 and 7 (Python): weekly demand, capacity, backlog and turnaround.

You write the bodies. The names, inputs and outputs are the contract: the checks call them.
"""
import pandas as pd

from dcap import config


def week_start(dates):
    """Return, for each date in the Series, the Monday of its week (time 00:00)."""
    raise NotImplementedError("Step 6: write week_start")


def count_by_week(dates, name):
    """Count how many dates fall in each week.

    dates: a Series of datetimes. Missing dates (NaT) are ignored.
    Return a Series named `name`. The index holds the Monday of each week. The values are the counts.
    """
    raise NotImplementedError("Step 6: write count_by_week")


def weekly_table(clean, capacity):
    """Return one row per week of HISTORY.

    clean:    the clean referrals (dates are datetimes).
    capacity: a DataFrame with columns week_start and sequencing_capacity. It holds the history
              AND the planned weeks after it. Use only the first config.N_WEEKS weeks.

    The result is indexed by week_start (the index is named "week_start") and has these columns, in this order:
      referrals          referrals made that week                     (whole numbers, 0 if none)
      samples_received   samples that arrived that week               (whole numbers, 0 if none)
      sequenced          samples sequenced that week                  (whole numbers, 0 if none)
      reported           results reported that week                   (whole numbers, 0 if none)
      capacity           sequencing_capacity for that week
      utilisation        sequenced / capacity, rounded to 3 decimals
      backlog_end        samples received so far minus samples sequenced so far, at the end of the week
      referrals_4wk_avg  mean of referrals over this week and the 3 before it, rounded to 1 decimal
                         (missing for the first 3 weeks)
    """
    raise NotImplementedError("Step 6: write weekly_table")


def turnaround_by_cohort(clean):
    """Return the share of referrals reported within target, by month of referral and priority.

    Columns: month, referrals, pct_within_target, median_days, p90_days, priority, target_days
      month              the first day of the referral month (a Timestamp)
      referrals          how many referrals are in the cohort
      pct_within_target  0 to 100, rounded to 1 decimal
      median_days        median days from referral to report (reported referrals only)
      p90_days           90th percentile of the same (use quantile(0.9))
      priority, target_days   from config.TARGET_DAYS

    Rules:
      - days to report = reported_date minus referred_date, in days.
      - A referral is within target when days <= target. A referral not yet reported is NOT within target.
      - Count a referral only if it is old enough to have met its target by the end of the data:
            referred_date <= cutoff - target days
        where cutoff = the first referred_date in the data + config.N_WEEKS weeks.
        (Without this rule recent referrals look late only because they have not finished.)
    One row per priority and month.
    """
    raise NotImplementedError("Step 7: write turnaround_by_cohort")
