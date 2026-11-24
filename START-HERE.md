# Build the demand-and-capacity project yourself

This is a guided build. **You write the code.** The guide shows you how to think, gives hints when you are stuck, and a checker tells you at once if a step is right.

At the end you will have a project you can explain line by line, because you built it. That is what an interviewer wants to see.

**Working one hour a day? Read `STAY-ON-TRACK.md` first, then follow `notes/tracker.md`. Start each hour with Recall (15 minutes): about 5 minutes of cards on the study site, then 10 minutes of code writing with `python drill.py`. Project pages are in `daily/` (start at `daily/day-01.md`); the Python lessons are in `PYTHON-BLOCKS.md`.** (Old note: open `daily/day-01.md` and then one `daily/day-NN.md` page a day. `DAILY-PLAN.md` is the overview. It splits every step into 60-minute sessions. Log each session in `notes/progress.md`.**

## What you build

A small data pipeline for a (made-up) genomic testing laboratory. It answers: *can the lab keep up with the referrals it gets, how long do patients wait, and how much extra capacity clears the queue?* You build it twice, in **SQL Server T-SQL** and in **Python (pandas)**, and prove both give the same numbers.

The data is synthetic. No real patient data. Keep it that way.

## The steps

| Step | You do | When | My estimate |
|---|---|---|---|
| 0 | Read the story and the data | now | 20 min |
| 1 | Look at the data and answer 10 questions | now | 1 h |
| 2 | SQL: clean and load | now | 2–3 h |
| 3 | SQL: weekly demand, capacity, backlog | now | 2–3 h |
| 4 | SQL: turnaround against a target | now | 2–3 h |
| 5 | Python: clean | after course Module 3 (pandas) | 3 h |
| 6 | Python: weekly table | after Module 3 | 3 h |
| 7 | Python: turnaround | after Module 3 | 2 h |
| 8 | Python: forecast | after Module 3 | 3 h |
| 9 | Python: the pipeline | after Module 3 | 2 h |
| 10 | Prove SQL and Python agree | after step 9 | 1 h |
| 11 | README and interview practice | last | 2–3 h |
| 12 | Optional: load it into a real SQL Server from Python | after Module 4 | 3 h |

About 25–30 hours. These are estimates, not measurements. Tell me your real times.

## Set up (10 minutes)

```
pip install -r requirements.txt
python check.py
```
Windows: use `py` instead of `python`. The second command shows every step as "not yet". That is correct.

## How each step works

1. Open `guide/<step>.md`. Read **Think first** and answer on paper.
2. Read **The pattern**: it shows the same idea on a different subject (a library). Run the example. Do not copy it.
3. Write your code in the file named in the step.
4. `python check.py <step number>`. Read the **first** message only. Fix that one thing. Run again.
5. Stuck for 15 minutes? Open the hints **one at a time**, in order.
6. When it passes, open the finished version (the `genomics-demand-capacity` folder from before) and **compare**. The guide says what to look for.
7. Write one entry in `notes/decisions.md`. Then say the "Say it aloud" answer out loud.

## Rules that make it work

- Type the code yourself. Do not paste.
- Do the steps in order.
- The checks only say whether the answer is right. They cannot say whether your code is clear. Read your own code the next day, as a stranger would.
- If a check fails and you think the check is wrong, tell your tutor. Do not change the check.

## What the checks cannot do

- The SQL checks run your T-SQL in **DuckDB**, not SQL Server (DuckDB is a different database). They test your logic. SQL Server is stricter in places, so run the finished SQL on a real SQL Server before you claim it works there. `guide/12_stage_c_sql_server.md` says how.
- They cannot judge style, naming or comments.

## Files

| Path | What it is |
|---|---|
| `guide/` | The step guides and the worked examples (`guide/examples/`) |
| `dcap/clean.py`, `metrics.py`, `forecast.py` | **You write these.** Each function has a brief. |
| `dcap/config.py`, `charts.py` | Given. Settings, and the two charts. |
| `sql/01_create_tables.sql` | Given. Tables and the load. |
| `sql/02…04` | **You write these.** |
| `run_pipeline.py` | **You write `main()`.** |
| `notes/` | Your answers (`findings.py`) and your reasons (`decisions.md`). |
| `checks/` | The tests. Do not edit. |
| `run_sql.py` | Run a T-SQL query on the data, to explore. |
| `drill.py` | One short code-writing task a day, checked for you. Run `python drill.py`. |
