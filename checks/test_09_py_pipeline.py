import shutil
import subprocess
import sys
from pathlib import Path

import pandas as pd
import pytest

from harness import expected

ROOT = Path(__file__).resolve().parent.parent


@pytest.fixture(scope="module")
def output(tmp_path_factory):
    work = tmp_path_factory.mktemp("run") / "project"
    shutil.copytree(ROOT, work, ignore=shutil.ignore_patterns("output", "__pycache__", ".pytest_cache", ".git", ".venv"))
    done = subprocess.run([sys.executable, "run_pipeline.py"], cwd=work, capture_output=True, text=True, timeout=300)
    assert done.returncode == 0, "run_pipeline.py failed:\n" + (done.stderr or done.stdout)[-1500:]
    return work / "output", done.stdout + done.stderr


def test_it_logs_what_it_did(output):
    assert "rejected" in output[1].lower() or "loaded" in output[1].lower(), "Log the row counts so a run can be audited."


def test_all_files_exist(output):
    for name in ["rejected_rows.csv", "weekly_summary.csv", "forecast.csv", "scenarios.csv", "turnaround_by_month.csv",
                 "demand_capacity.png", "turnaround.png"]:
        assert (output[0] / name).exists(), f"output/{name} was not written"


def test_rejected_rows(output):
    rejected = pd.read_csv(output[0] / "rejected_rows.csv")
    assert len(rejected) == 15 and "reject_reason" in rejected.columns


def test_weekly_summary(output):
    got = pd.read_csv(output[0] / "weekly_summary.csv")
    want = expected("weekly_summary.csv")
    assert list(got.columns) == list(want.columns), f"weekly_summary.csv columns: {list(got.columns)}"
    assert (got["week_start"] == want["week_start"]).all()
    for column in want.columns[1:]:
        a, b = got[column].to_numpy(dtype=float), want[column].to_numpy(dtype=float)
        assert ((abs(a - b) < 0.101) | (pd.isna(a) & pd.isna(b))).all(), column


def test_forecast_and_scenarios(output):
    got, want = pd.read_csv(output[0] / "forecast.csv"), expected("forecast.csv")
    assert list(got.columns) == list(want.columns) and (got["week_start"] == want["week_start"]).all()
    assert got["gap"].to_numpy() == pytest.approx(want["gap"].to_numpy())
    got, want = pd.read_csv(output[0] / "scenarios.csv"), expected("scenarios.csv")
    assert list(got.columns) == list(want.columns)
    assert ((got["weeks_to_clear_backlog"] == want["weeks_to_clear_backlog"]) | (got["weeks_to_clear_backlog"].isna() & want["weeks_to_clear_backlog"].isna())).all()


def test_turnaround(output):
    got, want = pd.read_csv(output[0] / "turnaround_by_month.csv"), expected("turnaround_by_month.csv")
    key = ["priority", "month"]
    got, want = got.sort_values(key).reset_index(drop=True), want.sort_values(key).reset_index(drop=True)
    assert len(got) == len(want) and (got["referrals"] == want["referrals"]).all()
    assert (abs(got["pct_within_target"] - want["pct_within_target"]) < 0.11).all()
