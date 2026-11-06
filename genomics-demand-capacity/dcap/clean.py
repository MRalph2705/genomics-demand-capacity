"""Load the raw referral file, find the faults and split the rows into clean and rejected."""
import logging

import pandas as pd

from dcap import config

log = logging.getLogger(__name__)

DATE_COLUMNS = ["referred_date", "sample_received_date", "sequenced_date", "reported_date"]
STAGE_ORDER = DATE_COLUMNS            # each stage must not be earlier than the one before it


def load_referrals(path):
    """Read the raw CSV. Dates become datetimes. Empty dates become NaT."""
    return pd.read_csv(path, parse_dates=DATE_COLUMNS, dtype={"referral_id": "string"})


def normalise_text(frame):
    """Return a copy with test_type and priority trimmed and in the standard spelling."""
    result = frame.copy()
    canonical = {name.lower(): name for name in config.TEST_TYPES}
    result["test_type"] = result["test_type"].str.strip().str.lower().map(canonical)
    result["priority"] = result["priority"].str.strip().str.lower()
    return result


def find_reject_reasons(frame):
    """Return a Series that holds the reason for each bad row, or an empty string for a good row."""
    reasons = pd.Series("", index=frame.index, dtype="string")

    def flag(mask, reason):
        newly_flagged = mask & (reasons == "")          # keep the FIRST reason for each row
        reasons.loc[newly_flagged] = reason

    flag(frame["test_type"].isna(), "unknown test_type")
    flag(~frame["priority"].isin(config.PRIORITIES), "unknown priority")
    flag(frame["referred_date"].isna(), "missing referred_date")
    for earlier, later in zip(STAGE_ORDER, STAGE_ORDER[1:]):
        flag(frame[later].notna() & frame[earlier].isna(), f"{later} without {earlier}")
        flag(frame[later] < frame[earlier], f"{later} before {earlier}")
    return reasons


def clean_referrals(raw):
    """Return (clean, rejected, counts). Rejected rows keep a reject_reason column."""
    counts = {"rows_read": len(raw)}

    deduplicated = raw.drop_duplicates()
    counts["exact_duplicates_removed"] = len(raw) - len(deduplicated)

    repeated_ids = deduplicated["referral_id"].duplicated(keep="first")
    counts["repeated_ids_removed"] = int(repeated_ids.sum())
    deduplicated = deduplicated[~repeated_ids]

    normalised = normalise_text(deduplicated)
    reasons = find_reject_reasons(normalised)
    is_bad = reasons != ""

    rejected = normalised[is_bad].assign(reject_reason=reasons[is_bad])
    clean = normalised[~is_bad].reset_index(drop=True)
    counts["rows_rejected"] = len(rejected)
    counts["rows_loaded"] = len(clean)

    log.info("read %(rows_read)s rows | duplicates %(exact_duplicates_removed)s | "
             "repeated ids %(repeated_ids_removed)s | rejected %(rows_rejected)s | loaded %(rows_loaded)s", counts)
    return clean, rejected, counts
