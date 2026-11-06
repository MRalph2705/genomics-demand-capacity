"""Run the whole analysis: load, check, measure, forecast, write results and charts."""
import logging
import sys
from pathlib import Path

import pandas as pd

from dcap import config
from dcap.charts import plot_demand_capacity, plot_turnaround
from dcap.clean import clean_referrals, load_referrals
from dcap.forecast import backtest, capacity_gap, forecast_demand, weeks_to_clear
from dcap.metrics import turnaround_by_cohort, weekly_table

log = logging.getLogger(__name__)

EXTRA_CAPACITY_OPTIONS = (0, 10, 20, 30, 40)


def main():
    logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(levelname)s %(message)s")
    output = Path(config.OUTPUT_DIR)
    output.mkdir(exist_ok=True)

    raw = load_referrals(config.RAW_FILE)
    clean, rejected, counts = clean_referrals(raw)
    rejected.to_csv(output / "rejected_rows.csv", index=False, date_format="%Y-%m-%d")
    for reason, count in rejected["reject_reason"].value_counts().items():
        log.info("rejected %s rows: %s", count, reason)

    capacity = pd.read_csv(config.CAPACITY_FILE, parse_dates=["week_start"])
    weekly = weekly_table(clean, capacity)
    weekly.to_csv(output / "weekly_summary.csv", date_format="%Y-%m-%d")

    scores = backtest(weekly["referrals"])
    best = scores.loc[0, "method"]
    log.info("backtest on the last 12 weeks:\n%s", scores.round(1).to_string(index=False))
    log.info("best method: %s", best)

    forecast = forecast_demand(weekly["referrals"], config.FORECAST_WEEKS, best)
    planned = capacity.set_index("week_start")["sequencing_capacity"]
    gap = capacity_gap(forecast, planned)
    gap.to_csv(output / "forecast.csv", index_label="week_start", date_format="%Y-%m-%d")

    backlog_now = int(weekly["backlog_end"].iloc[-1])
    options = pd.DataFrame({
        "extra_capacity_per_week": EXTRA_CAPACITY_OPTIONS,
        "weeks_to_clear_backlog": [weeks_to_clear(backlog_now, gap["forecast_demand"], gap["planned_capacity"], extra)
                                   for extra in EXTRA_CAPACITY_OPTIONS]})
    options.to_csv(output / "scenarios.csv", index=False)
    log.info("backlog now: %s samples\n%s", backlog_now, options.to_string(index=False))

    cohorts = turnaround_by_cohort(clean)
    cohorts.to_csv(output / "turnaround_by_month.csv", index=False, date_format="%Y-%m-%d")

    plot_demand_capacity(weekly, gap, output / "demand_capacity.png")
    plot_turnaround(cohorts, output / "turnaround.png")
    log.info("wrote results and charts to %s", output)


if __name__ == "__main__":
    main()
