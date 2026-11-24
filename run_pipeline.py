"""STEP 9 (Python): run the whole analysis and write the results.

Write main(). When it runs, it must create these files in the output folder (config.OUTPUT_DIR):
  rejected_rows.csv          the rejected rows with their reject_reason
  weekly_summary.csv         weekly_table(...), index written as week_start, dates as YYYY-MM-DD
  forecast.csv               capacity_gap(...), index written as week_start, dates as YYYY-MM-DD
  scenarios.csv              columns extra_capacity_per_week, weeks_to_clear_backlog
  turnaround_by_month.csv    turnaround_by_cohort(...), dates as YYYY-MM-DD
  demand_capacity.png        plot_demand_capacity(weekly, gap, path)      (given in dcap/charts.py)
  turnaround.png             plot_turnaround(cohorts, path)               (given in dcap/charts.py)

The order of work:
  1. set up logging so the log lines print          2. create the output folder
  3. load and clean the referrals (write the rejects, log how many for each reason)
  4. read the capacity file (parse week_start as dates) and build the weekly table
  5. backtest, choose the best method (smallest mae), forecast config.FORECAST_WEEKS weeks
  6. planned capacity = the sequencing_capacity column, indexed by week_start
  7. the gap table; then weeks_to_clear for each option in EXTRA_CAPACITY_OPTIONS
     (backlog now = the last backlog_end; demand and capacity come from the gap table)
  8. turnaround by cohort           9. the two charts
Keep main() short: one line per idea, with the work done in the dcap modules.
"""
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
    raise NotImplementedError("Step 9: write main")


if __name__ == "__main__":
    main()
