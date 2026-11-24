"""Step 10: do your SQL and your Python give the SAME numbers? Run python run_pipeline.py first."""
import pandas as pd
import pytest
from harness import ROOT, build_database, lower_columns, run_script

OUT = ROOT / "output"


@pytest.fixture(autouse=True)
def need_output():
    if not (OUT / "weekly_summary.csv").exists() or not (OUT / "rejected_rows.csv").exists():
        pytest.fail("output/ is empty. Run  python run_pipeline.py  first (step 9).")


@pytest.fixture(scope="module")
def sql_results():
    con = build_database()                                  # raw data only: your SQL must do the cleaning itself
    run_script(con, "02_clean_load.sql")
    run_script(con, "03_weekly_summary.sql")
    results = run_script(con, "04_turnaround.sql")
    weekly = lower_columns(con.execute("SELECT * FROM dbo.vw_WeeklySummary ORDER BY WeekStart").fetchdf())
    pct = next(lower_columns(r) for r in results if "pctwithintarget" in [c.lower() for c in r.columns])
    return weekly, pct


def test_clean_counts_agree():
    con = build_database()
    run_script(con, "02_clean_load.sql")
    loaded = con.execute("SELECT COUNT(*) FROM dbo.Referrals").fetchone()[0]
    rejected = con.execute("SELECT COUNT(*) FROM dbo.Referrals_Rejected").fetchone()[0]
    py_rejected = pd.read_csv(OUT / "rejected_rows.csv")
    assert rejected == len(py_rejected), f"SQL rejects {rejected} rows, Python rejects {len(py_rejected)}"
    assert loaded == 8677


def test_weekly_figures_agree(sql_results):
    weekly_sql, _ = sql_results
    weekly_py = pd.read_csv(OUT / "weekly_summary.csv")
    assert len(weekly_sql) == len(weekly_py)
    pairs = {"referrals": "referrals", "samplesreceived": "samples_received", "sequenced": "sequenced",
             "reported": "reported", "capacity": "capacity", "backlogend": "backlog_end"}
    for sql_name, py_name in pairs.items():
        assert (weekly_sql[sql_name].astype(int).to_numpy() == weekly_py[py_name].to_numpy()).all(), f"{py_name}: SQL and Python differ"
    for sql_name, py_name, tol in [("utilisation", "utilisation", 0.0011), ("referrals4wkavg", "referrals_4wk_avg", 0.101)]:
        a, b = weekly_sql[sql_name].astype(float).to_numpy(), weekly_py[py_name].to_numpy(dtype=float)
        assert ((abs(a - b) < tol) | (pd.isna(a) & pd.isna(b))).all(), f"{py_name}: SQL and Python differ"


def test_turnaround_cohorts_agree(sql_results):
    _, pct_sql = sql_results
    py = pd.read_csv(OUT / "turnaround_by_month.csv", parse_dates=["month"]).sort_values(["priority", "month"]).reset_index(drop=True)
    sql = pct_sql.assign(referralmonth=pd.to_datetime(pct_sql["referralmonth"])).sort_values(["priority", "referralmonth"]).reset_index(drop=True)
    assert len(sql) == len(py)
    assert (sql["referrals"].to_numpy() == py["referrals"].to_numpy()).all()
    assert (abs(sql["pctwithintarget"].astype(float).to_numpy() - py["pct_within_target"].to_numpy()) < 0.11).all()
