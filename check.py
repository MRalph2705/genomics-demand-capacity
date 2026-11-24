"""Check your work, one step at a time.

    python check.py            which steps pass
    python check.py 5          run the checks for step 5 and show the first problem
    python check.py all        run everything

Windows: use  py check.py
"""
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
STEPS = {
    1: ("Look at the data (notes/findings.py)", "test_01_findings.py"),
    2: ("SQL: clean and load (sql/02_clean_load.sql)", "test_02_sql_clean.py"),
    3: ("SQL: weekly summary (sql/03_weekly_summary.sql)", "test_03_sql_weekly.py"),
    4: ("SQL: turnaround (sql/04_turnaround.sql)", "test_04_sql_turnaround.py"),
    5: ("Python: clean (dcap/clean.py)", "test_05_py_clean.py"),
    6: ("Python: weekly table (dcap/metrics.py)", "test_06_py_weekly.py"),
    7: ("Python: turnaround (dcap/metrics.py)", "test_07_py_turnaround.py"),
    8: ("Python: forecast (dcap/forecast.py)", "test_08_py_forecast.py"),
    9: ("Python: the pipeline (run_pipeline.py)", "test_09_py_pipeline.py"),
    10: ("SQL and Python agree", "test_10_agree.py"),
}


def run_step(number, verbose):
    title, filename = STEPS[number]
    done = subprocess.run([sys.executable, "-m", "pytest", f"checks/{filename}", "-q", "-x", "--tb=short", "--no-header"],
                          cwd=ROOT, capture_output=True, text=True)
    text = done.stdout + done.stderr
    passed = done.returncode == 0
    if verbose:
        print(f"\nSTEP {number}: {title}")
        if passed:
            print("  PASSED." + (" Now open the finished version and compare (the guide says what to look for)." if number in range(2, 10) else ""))
        else:
            show(text)
    return passed, text


def show(text):
    if "NotImplementedError" in text:
        match = re.search(r"NotImplementedError: (.*)", text)
        print("  NOT WRITTEN YET:", match.group(1) if match else "")
        return
    lines = [ln for ln in text.splitlines() if ln.strip()]
    keep = [ln for ln in lines if ln.startswith(("E ", "FAILED", "ERROR")) or "Error" in ln or ln.lstrip().startswith(">")]
    for ln in (keep or lines)[:14]:
        print("  " + ln[:220])
    print("  Read the FIRST message only. Fix that one thing, then run the check again.")


def main(argv):
    if not argv:
        print("YOUR PROGRESS")
        for number, (title, _) in STEPS.items():
            passed, text = run_step(number, verbose=False)
            state = "PASSED " if passed else ("not yet" if ("NotImplementedError" in text or "empty" in text or "not answered" in text) else "FAILING")
            print(f"  Step {number:>2}  {state}  {title}")
        print("\nWork on one step:  python check.py <number>")
        return 0
    if argv[0] == "all":
        return 0 if all(run_step(n, True)[0] for n in STEPS) else 1
    if argv[0].isdigit() and int(argv[0]) in STEPS:
        return 0 if run_step(int(argv[0]), True)[0] else 1
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
