"""Weekly demand, capacity, backlog and turnaround measures."""
import pandas as pd

from dcap import config


def week_start(dates):
    """Return the Monday of the week for each date."""
    return (dates - pd.to_timedelta(dates.dt.weekday, unit="D")).dt.normalize()


def count_by_week(dates, name):
    """Count how many dates fall in each week. Missing dates are ignored."""
    return week_start(dates.dropna()).value_counts().rename(name)


def weekly_table(clean, capacity):
    """Return one row per week with demand, work done, capacity, utilisation and backlog.

    Backlog is the number of samples that have arrived but have not yet been sequenced
    at the end of the week.
    """
    weeks = capacity.set_index("week_start")["sequencing_capacity"]
    history = weeks.index[: config.N_WEEKS]
    table = pd.concat([
        count_by_week(clean["referred_date"], "referrals"),
        count_by_week(clean["sample_received_date"], "samples_received"),
        count_by_week(clean["sequenced_date"], "sequenced"),
        count_by_week(clean["reported_date"], "reported"),
    ], axis=1, sort=False).reindex(history).fillna(0).astype(int)

    table.index.name = "week_start"
    table["capacity"] = weeks.loc[history]
    table["utilisation"] = (table["sequenced"] / table["capacity"]).round(3)
    table["backlog_end"] = table["samples_received"].cumsum() - table["sequenced"].cumsum()
    table["referrals_4wk_avg"] = table["referrals"].rolling(4).mean().round(1)
    return table


def turnaround_by_cohort(clean):
    """Return the share of referrals reported within target, by referral month and priority.

    A referral is only counted when it is old enough to have met its target by the last date
    in the data. Without this rule, recent referrals look late only because they have not
    finished yet.
    """
    cutoff = clean["referred_date"].min() + pd.Timedelta(weeks=config.N_WEEKS)
    pieces = []
    for priority, target in config.TARGET_DAYS.items():
        group = clean[(clean["priority"] == priority)
                      & (clean["referred_date"] <= cutoff - pd.Timedelta(days=target))].copy()
        group["days_to_report"] = (group["reported_date"] - group["referred_date"]).dt.days
        group["within_target"] = group["days_to_report"].le(target)       # NaN days -> False
        group["month"] = group["referred_date"].dt.to_period("M").dt.to_timestamp()
        summary = group.groupby("month").agg(
            referrals=("referral_id", "size"),
            pct_within_target=("within_target", "mean"),
            median_days=("days_to_report", "median"),
            p90_days=("days_to_report", lambda days: days.quantile(0.9)),
        )
        summary["priority"] = priority
        summary["target_days"] = target
        pieces.append(summary.reset_index())
    result = pd.concat(pieces, ignore_index=True)
    result["pct_within_target"] = (result["pct_within_target"] * 100).round(1)
    return result
