"""STEP 5 (Python): load the raw referral file, find the faults, split the rows into clean and rejected.

You write the bodies. The names, inputs and outputs below are the contract: the checks call them.
"""
import logging

import pandas as pd

from dcap import config

log = logging.getLogger(__name__)

DATE_COLUMNS = ["referred_date", "sample_received_date", "sequenced_date", "reported_date"]
STAGE_ORDER = DATE_COLUMNS            # each stage must not be earlier than the one before it


def load_referrals(path):
    """Read the raw CSV file and return a DataFrame.

    - The four DATE_COLUMNS become datetimes. An empty date becomes NaT.
    - referral_id is read as text (dtype "string").
    - Same 7 columns as the file, same row order.
    """
    raise NotImplementedError("Step 5: write load_referrals")


def normalise_text(frame):
    """Return a COPY of the frame with the two text columns standardised. Do not change the input.

    - test_type: trim spaces, ignore case, then use the standard spelling from config.TEST_TYPES.
      A value that matches none of them becomes missing (NaN).
    - priority: trim spaces and use lower case. An unknown value stays as it is (it is rejected later).
    """
    raise NotImplementedError("Step 5: write normalise_text")


def find_reject_reasons(frame):
    """Return a Series (same index as the frame) with the reason each row is bad, or "" for a good row.

    The frame has already been through normalise_text. A row gets ONE reason: the first that applies.
    Check in this order, and use these exact words:
      1. "unknown test_type"           test_type is missing
      2. "unknown priority"            priority is not in config.PRIORITIES
      3. "missing referred_date"       referred_date is missing
      4. for each neighbouring pair (earlier, later) in STAGE_ORDER, in order:
           f"{later} without {earlier}"   later is present but earlier is missing
           f"{later} before {earlier}"    later is a date before earlier
         e.g. "reported_date before sequenced_date"
    A missing date is allowed when the later stages are also missing (not every referral has finished).
    """
    raise NotImplementedError("Step 5: write find_reject_reasons")


def clean_referrals(raw):
    """Return (clean, rejected, counts).

    Steps, in this order:
      1. remove rows that are exact copies of an earlier row           -> counts["exact_duplicates_removed"]
      2. remove later rows whose referral_id was already seen (keep the first) -> counts["repeated_ids_removed"]
      3. normalise_text, then find_reject_reasons
      4. rejected = the bad rows, with a new column "reject_reason"    -> counts["rows_rejected"]
         clean    = the good rows, index reset to 0, 1, 2, ...          -> counts["rows_loaded"]
    counts is a dict with exactly these keys:
      rows_read, exact_duplicates_removed, repeated_ids_removed, rows_rejected, rows_loaded
    Write ONE log line (log.info) with all the counts. Never drop a row without counting it.
    """
    raise NotImplementedError("Step 5: write clean_referrals")
