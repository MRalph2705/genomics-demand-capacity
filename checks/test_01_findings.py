import importlib

import pytest

EXPECTED = dict(
    rows_in_file=8717, exact_duplicate_rows=25, distinct_referral_ids=8692,
    first_referred_date="2025-01-06", last_referred_date="2026-07-03",
    rows_with_messy_test_type=10, rows_reported_before_sequenced=15,
    rows_without_sample_received_date=78, weeks_in_capacity_file=90, lowest_weekly_capacity=60)


@pytest.mark.parametrize("name", list(EXPECTED))
def test_finding(name):
    findings = importlib.import_module("notes.findings")
    value = getattr(findings, name)
    assert value is not None, f"notes/findings.py: {name} is not answered yet"
    assert str(value) == str(EXPECTED[name]), f"{name}: you wrote {value!r}. That is not right. Look again at how you counted."
