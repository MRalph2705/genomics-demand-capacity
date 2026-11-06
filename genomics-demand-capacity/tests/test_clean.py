import pandas as pd
import pytest

from dcap.clean import clean_referrals, find_reject_reasons, normalise_text

COLUMNS = ["referral_id", "referred_date", "test_type", "priority",
           "sample_received_date", "sequenced_date", "reported_date"]


def make_frame(*rows):
    frame = pd.DataFrame(rows, columns=COLUMNS)
    for column in COLUMNS[1:2] + COLUMNS[4:]:
        frame[column] = pd.to_datetime(frame[column])
    return frame


GOOD = ("R1", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-10")


def test_good_row_is_kept():
    clean, rejected, counts = clean_referrals(make_frame(GOOD))
    assert len(clean) == 1 and rejected.empty
    assert counts["rows_loaded"] == 1


def test_exact_duplicates_are_removed_and_counted():
    clean, _, counts = clean_referrals(make_frame(GOOD, GOOD))
    assert len(clean) == 1
    assert counts["exact_duplicates_removed"] == 1


def test_same_id_with_different_data_keeps_the_first():
    changed = ("R1", "2025-01-06", "Rapid", "routine", "2025-01-07", "2025-01-08", "2025-01-10")
    clean, _, counts = clean_referrals(make_frame(GOOD, changed))
    assert counts["repeated_ids_removed"] == 1
    assert clean.loc[0, "priority"] == "urgent"


def test_messy_text_is_normalised():
    frame = normalise_text(make_frame(("R1", "2025-01-06", " cancer PANEL ", " URGENT", None, None, None)))
    assert frame.loc[0, "test_type"] == "Cancer panel"
    assert frame.loc[0, "priority"] == "urgent"


@pytest.mark.parametrize("row, reason", [
    (("R1", "2025-01-06", "Unknown test", "urgent", None, None, None), "unknown test_type"),
    (("R1", "2025-01-06", "Rapid", "someday", None, None, None), "unknown priority"),
    (("R1", None, "Rapid", "urgent", None, None, None), "missing referred_date"),
    (("R1", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-07"), "reported_date before sequenced_date"),
    (("R1", "2025-01-06", "Rapid", "urgent", None, "2025-01-08", None), "sequenced_date without sample_received_date"),
])
def test_bad_rows_get_a_reason(row, reason):
    frame = normalise_text(make_frame(row))
    assert find_reject_reasons(frame).iloc[0] == reason


def test_rejected_rows_are_kept_with_their_reason():
    bad = ("R2", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-07")
    clean, rejected, counts = clean_referrals(make_frame(GOOD, bad))
    assert list(clean["referral_id"]) == ["R1"]
    assert list(rejected["referral_id"]) == ["R2"]
    assert rejected["reject_reason"].iloc[0] == "reported_date before sequenced_date"
    assert counts["rows_read"] == counts["rows_loaded"] + counts["rows_rejected"]
