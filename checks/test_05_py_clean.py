import pandas as pd
import pytest

from dcap import config
from dcap.clean import clean_referrals, find_reject_reasons, load_referrals, normalise_text
from harness import expected

COLUMNS = ["referral_id", "referred_date", "test_type", "priority",
           "sample_received_date", "sequenced_date", "reported_date"]
DATES = ["referred_date", "sample_received_date", "sequenced_date", "reported_date"]


def make_frame(*rows):
    frame = pd.DataFrame(rows, columns=COLUMNS)
    for column in DATES:
        frame[column] = pd.to_datetime(frame[column])
    return frame


GOOD = ("R1", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-10")


def test_load_referrals_reads_dates_and_text():
    raw = load_referrals(config.RAW_FILE)
    assert list(raw.columns) == COLUMNS and len(raw) == 8717
    for column in DATES:
        assert pd.api.types.is_datetime64_any_dtype(raw[column]), f"{column} should be a datetime column"
    assert raw["reported_date"].isna().sum() > 0, "Empty dates should be NaT"
    assert str(raw["referral_id"].dtype) in ("string", "str", "object"), "referral_id should be text"
    assert raw.loc[0, "referral_id"] == "R000001"


def test_a_good_row_is_kept():
    clean, rejected, counts = clean_referrals(make_frame(GOOD))
    assert len(clean) == 1 and rejected.empty
    assert counts == {"rows_read": 1, "exact_duplicates_removed": 0, "repeated_ids_removed": 0, "rows_rejected": 0, "rows_loaded": 1}


def test_exact_duplicates_are_removed_and_counted():
    clean, _, counts = clean_referrals(make_frame(GOOD, GOOD))
    assert len(clean) == 1 and counts["exact_duplicates_removed"] == 1


def test_same_id_with_different_data_keeps_the_first():
    changed = ("R1", "2025-01-06", "Rapid", "routine", "2025-01-07", "2025-01-08", "2025-01-10")
    clean, _, counts = clean_referrals(make_frame(GOOD, changed))
    assert counts["repeated_ids_removed"] == 1 and counts["exact_duplicates_removed"] == 0
    assert clean.loc[0, "priority"] == "urgent"


def test_messy_text_is_normalised():
    frame = normalise_text(make_frame(("R1", "2025-01-06", " cancer PANEL ", " URGENT", None, None, None)))
    assert frame.loc[0, "test_type"] == "Cancer panel"
    assert frame.loc[0, "priority"] == "urgent"


def test_unknown_test_type_becomes_missing_and_unknown_priority_stays():
    frame = normalise_text(make_frame(("R1", "2025-01-06", "Mystery", "Someday", None, None, None)))
    assert pd.isna(frame.loc[0, "test_type"])
    assert frame.loc[0, "priority"] == "someday"


def test_normalise_text_does_not_change_its_input():
    original = make_frame(("R1", "2025-01-06", " rapid ", " URGENT", None, None, None))
    before = original.copy()
    normalise_text(original)
    pd.testing.assert_frame_equal(original, before)


@pytest.mark.parametrize("row, reason", [
    (("R1", "2025-01-06", "Unknown test", "urgent", None, None, None), "unknown test_type"),
    (("R1", "2025-01-06", "Rapid", "someday", None, None, None), "unknown priority"),
    (("R1", None, "Rapid", "urgent", None, None, None), "missing referred_date"),
    (("R1", "2025-01-06", "Rapid", "urgent", "2025-01-05", None, None), "sample_received_date before referred_date"),
    (("R1", "2025-01-06", "Rapid", "urgent", None, "2025-01-08", None), "sequenced_date without sample_received_date"),
    (("R1", "2025-01-06", "Rapid", "urgent", "2025-01-08", "2025-01-07", None), "sequenced_date before sample_received_date"),
    (("R1", "2025-01-06", "Rapid", "urgent", "2025-01-07", None, "2025-01-09"), "reported_date without sequenced_date"),
    (("R1", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-07"), "reported_date before sequenced_date"),
    (("R1", "2025-01-06", "Rapid", "urgent", None, None, None), ""),
    (("R1", "2025-01-06", "Rapid", "urgent", "2025-01-07", None, None), ""),
    (("R1", "2025-01-06", "Rapid", "urgent", "2025-01-06", "2025-01-06", "2025-01-06"), ""),   # everything on one day is fine
])
def test_reject_reasons(row, reason):
    frame = normalise_text(make_frame(row))
    assert find_reject_reasons(frame).iloc[0] == reason


def test_a_row_gets_only_the_first_reason():
    frame = normalise_text(make_frame(("R1", "2025-01-06", "Mystery", "someday", None, None, None)))
    assert find_reject_reasons(frame).iloc[0] == "unknown test_type"


def test_rejected_rows_are_kept_with_their_reason():
    bad = ("R2", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-07")
    clean, rejected, counts = clean_referrals(make_frame(GOOD, bad))
    assert list(clean["referral_id"]) == ["R1"] and list(rejected["referral_id"]) == ["R2"]
    assert rejected["reject_reason"].iloc[0] == "reported_date before sequenced_date"
    assert counts["rows_read"] == counts["rows_loaded"] + counts["rows_rejected"]


def test_clean_index_is_reset():
    bad = ("R0", "2025-01-06", "Rapid", "urgent", "2025-01-07", "2025-01-08", "2025-01-07")
    clean, _, _ = clean_referrals(make_frame(bad, GOOD))
    assert list(clean.index) == [0]


def test_clean_referrals_does_not_change_the_raw_frame():
    raw = make_frame(GOOD, GOOD, ("R2", "2025-01-06", " rapid", "urgent", None, None, None))
    before = raw.copy()
    clean_referrals(raw)
    pd.testing.assert_frame_equal(raw, before)


def test_on_the_real_file():
    raw = load_referrals(config.RAW_FILE)
    clean, rejected, counts = clean_referrals(raw)
    assert counts == {"rows_read": 8717, "exact_duplicates_removed": 25, "repeated_ids_removed": 0,
                      "rows_rejected": 15, "rows_loaded": 8677}
    assert rejected["reject_reason"].value_counts().to_dict() == {"reported_date before sequenced_date": 15}
    want = expected("clean_referrals.csv", parse_dates=DATES)
    assert list(clean["referral_id"]) == list(want["referral_id"])
    assert list(clean["test_type"]) == list(want["test_type"]) and list(clean["priority"]) == list(want["priority"])
    for column in DATES:
        assert (clean[column].fillna(pd.Timestamp(0)).to_numpy() == want[column].fillna(pd.Timestamp(0)).to_numpy()).all(), column
