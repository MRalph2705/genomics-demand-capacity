"""Settings for the project. Every number that is an assumption has a name here."""
from datetime import date

SEED = 42
START_DATE = date(2025, 1, 6)          # a Monday: the first day of week 1
N_WEEKS = 78                           # weeks of history
FORECAST_WEEKS = 12                    # weeks to forecast beyond the history

# Demand: referrals per week, before the holiday factor.
BASE_WEEKLY_DEMAND = 95
DEMAND_GROWTH_PER_WEEK = 0.45
URGENT_SHARE = 0.15

TEST_TYPES = ("Rare disease", "Cancer panel", "Rapid")
TEST_TYPE_WEIGHTS = (0.50, 0.35, 0.15)
PRIORITIES = ("urgent", "routine")

# Capacity: samples the lab can sequence per week.
BASE_WEEKLY_CAPACITY = 100
NEW_SEQUENCER_WEEK = 52                # week number when a second sequencer goes live
CAPACITY_AFTER_NEW_SEQUENCER = 135

# Holiday factors multiply both demand and capacity.
CHRISTMAS_FACTOR = 0.6
AUGUST_FACTOR = 0.9

# ASSUMED turnaround targets for this exercise. They are NOT real NHS standards.
TARGET_DAYS = {"urgent": 14, "routine": 42}

# Dirt added to the raw file on purpose, so the pipeline has something to find.
N_DUPLICATE_ROWS = 25
N_BAD_ORDER_ROWS = 15
N_MESSY_TEXT_ROWS = 10

RAW_FILE = "data/referrals_raw.csv"
CAPACITY_FILE = "data/capacity_weekly.csv"
OUTPUT_DIR = "output"
