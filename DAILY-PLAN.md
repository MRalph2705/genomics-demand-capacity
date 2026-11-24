# Your plan (updated Tue 17 Nov): two tracks, one hour, no calendar

**Read `STAY-ON-TRACK.md` first.** It is the system that keeps you going. This file is the overview of the project track.

## The shape of every hour (2 to 3 pm)

| Minutes | Track | What |
|---|---|---|
| 0 to 15 | **Recall and write** | About 5 minutes of cards on the Recall tab, then 10 minutes on `python drill.py` (one writing task, checked for you). |
| 15 to 35 | **Python block** | The next lesson sitting on the study site. See `PYTHON-BLOCKS.md`. |
| 35 to 60 | **Project** | The next day page in `daily/`. Each page has a PAUSE POINT, so one page takes two or three of these 25-minute sittings. |

The old rule 'one session = one day' is gone. **Sessions are an ordered list. You always do the next unticked item in `notes/tracker.md`.** Missing a day moves nothing else. There is no 'behind', only 'next'.

The 42 sessions below are the project track, in order. Rough finish at ~80% of days done: see the milestone dates in `STAY-ON-TRACK.md`.

**Start here for the project: open the day page in the `daily/` folder (Day 1 is `daily/day-01.md`).** The list below is the overview.

## Rules

- **Stop at 3 pm, even mid-step.** Leave a failing test on purpose and write down the next action. Tomorrow starts in 30 seconds, not 15 minutes.
- **Stuck for 15 minutes?** Open the hints one at a time, in order. Not before.
- **A check fails and you think the check is wrong?** Tell your tutor. Do not edit the checks.
- **If you run over on a step:** the 'Step' sessions are guesses. Take another session. Do not rush a step to keep the date.
- **If you miss a few days:** read your last progress line, run `python check.py`, and carry on. Do not re-do old steps. If you miss more than a week, spend the first 15 minutes re-reading your own code.
- **Python from a blank page is your weakest skill.** That is why the Python sessions are 2 to 3 hours of work split in pieces, and why Phase D exists. Do not skip the blank-page sessions.
- **Keep one file open:** `gotchas-cheatsheet.md`. Add every mistake you make to it, in your own words.

## What the checker can and cannot do

- It tells you whether your answer is right, one failure at a time. It cannot tell you whether your code is clear.
- SQL checks run your T-SQL in DuckDB, not SQL Server. They test logic. Phase E (optional) is where SQL Server comes in, and I have not run that step on a real server.
- Project sessions 15 to 19 repeat the pandas lessons that are also in your Python block track (`PYTHON-BLOCKS.md`). If you did them there, tick them here and skip. Both rely on Module 3 lessons. 3.1 to 3.5 are on your site now, and so are two forecasting lessons (3.6 baselines and 3.7 backtesting) that the forecast step uses.

## The sessions


### Phase 0: Set up and understand the data

**Session 1: Set up and read the story**

**Full step-by-step page: [Day 1](daily/day-01.md)**

- Unzip the project. In a terminal inside the folder: pip install -r requirements.txt, then python check.py (Windows: py). Every step should say 'not yet'. That is correct.
- Read START-HERE.md, then guide/00_the_story_and_the_data.md.
- On paper, draw the four stages: referred, sample received, sequenced, reported. Under it write: capacity, backlog, turnaround in one line each.
- Open data/ and look at the raw CSV in a text editor. Do not open it in Excel yet. Excel changes dates and drops leading zeros.
- **Done when:** You can say the business problem in 3 sentences without looking. python check.py runs and shows all steps 'not yet'.

**Session 2: Step 1: look at the data (questions 1 to 5)**

**Full step-by-step page: [Day 2](daily/day-02.md)**

- Read guide/01 'Think first'. Write your guesses on paper BEFORE you look at any numbers.
- Read 'The tools'. Use run_sql.py or pandas to explore.
- Answer questions 1 to 5 in notes/findings.py (rows, duplicates, distinct ids, first and last date, messy test types).
- **Done when:** Questions 1 to 5 filled in. Compare your paper guesses with the real numbers. Note one thing that surprised you.

**Session 3: Step 1: finish and check**

**Full step-by-step page: [Day 3](daily/day-03.md)**

- Answer questions 6 to 10 in notes/findings.py.
- python check.py 1. Fix only the FIRST message, run again.
- Say the 'Say it aloud' answer out loud, once, to the wall.
- **Done when:** check 1 passes. You can explain why 'empty' is not always a fault.


### Phase A: SQL (Steps 2 to 4). Needs no pandas

**Session 4: Step 2: read, think, run the library example**

**Full step-by-step page: [Day 4](daily/day-04.md)**

- Read guide/02 'Think first' and answer on paper. Read 'The T-SQL trap you must know'.
- Run guide/examples/run_library_sql.py. Read library_sql.sql slowly. Do not copy it. It is the same idea on a different subject.
- Open sql/02_clean_load.sql and read the brief twice. Write the six build parts (the guide lists them) on a sticky note.
- **Done when:** You can explain: why the raw table is all text, why TRY_CONVERT, why '' must go through NULLIF first. No code written yet.

**Session 5: Step 2: select, convert, spell (parts 1 to 3)**

**Full step-by-step page: [Day 5](daily/day-05.md)**

- Part 1: select the columns as trimmed text. Run with python run_sql.py.
- Part 2: add the type conversions with TRY_CONVERT, with NULLIF inside every one.
- Part 3: standard spellings for test type and priority (CASE).
- **Done when:** run_sql.py prints sensible rows. Dates are dates, bad dates are NULL, not errors.

**Session 6: Step 2: ROW_NUMBER and reject reasons (parts 4 and 5)**

**Full step-by-step page: [Day 6](daily/day-06.md)**

- Part 4: ROW_NUMBER() OVER (PARTITION BY id ORDER BY ...) and keep one row per id.
- Part 5: RejectReason with CASE. First reason wins, so the order of WHEN lines matters.
- Hints are one at a time and only after 15 stuck minutes.
- **Done when:** Duplicates are dropped, and bad rows have a reason. Count the reasons and see if it matches your Step 1 notes.

**Session 7: Step 2: finish, check, compare**

**Full step-by-step page: [Day 7](daily/day-07.md)**

- Part 6: the view, the two INSERTs and the count SELECT.
- python check.py 2. First message only.
- Open the finished project's version and compare. Write one entry in notes/decisions.md. Say it aloud.
- **Done when:** check 2 passes. One decisions.md entry written.

**Session 8: Step 3: weekly table (pattern, parts 1 and 2)**

**Full step-by-step page: [Day 8](daily/day-08.md)**

- Read guide/03 'Think first' (what is a backlog as a sum?). Run the library pattern.
- Read why the Monday-of-week columns use DATEDIFF(DAY, 0, ...) and not DATEPART(WEEKDAY, ...).
- Part 1: referrals per week as one CTE. Part 2: the other three measures.
- **Done when:** Four weekly counts, each run on its own and looking right.

**Session 9: Step 3: join capacity and utilisation (parts 3 and 4)**

**Full step-by-step page: [Day 9](daily/day-09.md)**

- Part 3: LEFT JOIN to dbo.CapacityWeekly. Keep only the first 78 weeks.
- Part 4: utilisation = work done / capacity. Watch for integer division (the check looks for it).
- **Done when:** 78 rows. A week with no referrals still shows, with 0, not missing.

**Session 10: Step 3: backlog and the 4-week average (part 5), check**

**Full step-by-step page: [Day 10](daily/day-10.md)**

- Part 5: backlog = cumulative samples received minus cumulative sequenced, using a window with a frame. Then the 4-week rolling average.
- python check.py 3. Compare with the finished version. decisions.md entry. Say it aloud.
- **Done when:** check 3 passes. You can explain ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW in your own words.

**Session 11: Step 4: eligible referrals**

**Full step-by-step page: [Day 11](daily/day-11.md)**

- Read guide/04 'Think first' (fairness: is a 10-day-old routine referral without a result late?). Write the rule in your own words.
- Build the view of ELIGIBLE referrals only (old enough to judge). Targets: urgent 14 days, routine 42 days. They are assumptions, not NHS standards.
- **Done when:** The view holds only referrals old enough to judge. You can say why the latest months would look terrible otherwise.

**Session 12: Step 4: percentage and median/p90**

**Full step-by-step page: [Day 12](daily/day-12.md)**

- Join to the small rules table. SUM(CASE ...) for the share within target. Watch integer division.
- PERCENTILE_CONT for the median and 90th percentile.
- **Done when:** Percentage and the two percentiles come out by month and priority.

**Session 13: Step 4: check and Stage A review**

**Full step-by-step page: [Day 13](daily/day-13.md)**

- python check.py 4. Compare. decisions.md entry. Say it aloud.
- Run python check.py. Steps 1 to 4 should be green. Read guide/04 'Stage A is done'.
- **Done when:** Steps 1 to 4 all pass. Stage A (SQL) is finished.

**Session 14: Blank-page session: rebuild a piece from memory**

**Full step-by-step page: [Day 14](daily/day-14.md)**

- Close all guides. Open an empty .sql file. Write from memory the ROW_NUMBER keep-one-per-id CTE for dbo.Referrals_Raw (just that part).
- Stuck? Look at the library example, not your own answer. Then write it again without looking.
- Write on paper the five mistakes you made most in Steps 2 to 4.
- **Done when:** You wrote it without looking. You have a written list of your five most common mistakes.


### Phase B: pandas, then Python (Steps 5 to 9)

**Session 15: Course lesson 3.1: DataFrames and Series**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- On the study site: lesson 3.1. Do predict, read, run the example, do the three mixed tasks A to C, then the blank-page build task.
- Type every example. Do not paste.
- **Done when:** You did the 3.1 build task from a blank page. Tick 3.1 in the tracker.

**Session 16: Course lesson 3.2: select and filter**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Lesson 3.2: masks, &, |, ~, isin, .str, .loc, .copy().
- Do the mixed tasks and the build task from a blank page.
- **Done when:** 3.2 build task done from a blank page. Say what a mask is in 3 sentences.

**Session 17: Course lesson 3.3: groupby and aggregates**

- Lesson 3.3 on the study site (groupby, named aggregation, size versus count, transform). Do both sittings. Do not skip it.
- **Done when:** 3.3 done. Tick it in the tracker.

**Session 18: Course lesson 3.4: merge**

- Lesson 3.4 on the study site (merge and join, how, validate, and the duplicate-key trap).
- **Done when:** 3.4 done.

**Session 19: Course lesson 3.5: rolling, shift, rank, cumsum**

- Lesson 3.5 on the study site. Step 6 needs cumsum and rolling.
- **Done when:** 3.5 done. You are ready for Step 5. (Lessons 3.6 forecast baselines and 3.7 backtesting come before the forecast step. They are in `PYTHON-BLOCKS.md`.)

**Session 20: Step 5: read, think, pattern**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- guide/05 'Think first' on paper. Run the library_python.py pattern.
- Read dcap/clean.py: the four stub functions and their docstring contracts. Say in your own words what each must return.
- **Done when:** You can explain why the cleaning is four small functions.

**Session 21: Step 5: load_referrals and normalise_text**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Write load_referrals (dtype and parse_dates) and normalise_text (strip, case, spellings).
- python check.py 5 and read only the first failure. normalise_text must not change its input (use .copy()).
- **Done when:** The first six or seven checks in step 5 pass.

**Session 22: Step 5: find_reject_reasons**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- First reason wins. Think: how do you make 'first one that is true' with a column in pandas? (Hints in the guide, one at a time.)
- python check.py 5.
- **Done when:** The reject-reason checks pass, including same-day dates.

**Session 23: Step 5: clean_referrals, check, compare**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Write clean_referrals: duplicates, reject reasons, keep rejects, reset the index.
- python check.py 5 all green. Compare. decisions.md. Say it aloud.
- **Done when:** check 5 passes.

**Session 24: Step 6: week_start and count_by_week**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- guide/06 'Think first'. Pattern. Write week_start (the Monday of a date's week) and count_by_week.
- python check.py 6.
- **Done when:** week_start and count_by_week tests pass.

**Session 25: Step 6: weekly_table**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Write weekly_table: counts, capacity join, utilisation, cumsum backlog, rolling 4-week average. Same table as your SQL Step 3.
- **Done when:** weekly_table values test passes.

**Session 26: Step 6: finish, compare, buffer**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Finish check 6. Compare. decisions.md entry. Say it aloud. Use spare time to re-read your own code as a stranger would.
- **Done when:** check 6 passes.

**Session 27: Step 7: turnaround in pandas**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- guide/07 'Think first'. Write turnaround_by_cohort: masks, groupby().agg() with named results, quantile, dt.to_period.
- python check.py 7. Compare. decisions.md. Say it aloud.
- **Done when:** check 7 passes. Same fairness rule as SQL Step 4.

**Session 28: Step 8: forecast, the three methods**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- guide/08 'Think first'. Write your guess for the winning method on paper.
- Write naive_last, moving_average_4, linear_trend_26.
- **Done when:** The three-methods test passes.

**Session 29: Step 8: backtest and forecast_demand**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Write backtest (HOLDOUT_WEEKS = 12) and forecast_demand. Which method won? Was your guess right?
- **Done when:** The backtest tests pass.

**Session 30: Step 8: capacity gap and weeks to clear**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Write capacity_gap and weeks_to_clear. python check.py 8. Compare. decisions.md. Say it aloud.
- **Done when:** check 8 passes.

**Session 31: Step 9: the pipeline (main)**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- guide/09 'Think first'. Write main() in run_pipeline.py as small calls to the functions you wrote. Add logging.
- **Done when:** python run_pipeline.py runs from start to finish.

**Session 32: Step 9: check and read your own output**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- python check.py 9. Look at the files in output/: charts, reject file, row counts. Is anything odd?
- **Done when:** check 9 passes. You can explain what each output file is for.


### Phase C: prove it and present it (Steps 10 and 11)

**Session 33: Step 10: prove SQL and Python agree**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- python run_pipeline.py, then python check.py 10. If they disagree, one is wrong. Find which. The guide has a 'If a check fails' list.
- **Done when:** check 10 passes.

**Session 34: Step 11: README part 1**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Run the pipeline. Fill every [YOUR WORDS] in README.md using YOUR numbers. Keep the synthetic-data warning and the 'targets are assumptions' line.
- **Done when:** README has no [YOUR WORDS] left.

**Session 35: Step 11: 60-second story and interview questions**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Write your 60-second story. Answer the Part 3 questions out loud, then in writing for the two you found hardest.
- **Done when:** You can tell the project in 60 seconds without notes.

**Session 36: Step 11: be honest, mock interview, upload**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Read Part 4 (be honest about how you built it). Do Part 5 (the mock interview).
- Upload to GitHub using the web UI steps at the end of guide/11.
- **Done when:** The repo is public and the README renders. python check.py all is green.


### Phase D: build a similar project yourself (the real test)

**Session 37: Pick a new theme and write the brief**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Pick a different service with demand, capacity and waiting: imaging scans, outpatient clinic, a help desk, a call centre.
- Write a one-page brief: the question, the stages, the columns you would need, the three measures, what 'old enough to judge' means for you. No code.
- **Done when:** A one-page brief you could hand to someone else.

**Session 38: Make the data and look at it**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Adapt make_data.py in the finished project to make a small messy file for your theme (or ask your tutor for one). Do Step 1 on it: ten questions of your own.
- **Done when:** You wrote ten findings with numbers.

**Session 39: Clean it, in SQL or Python (your choice)**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Build the clean step from a blank page. Write your own tiny tests with 4-row tables.
- **Done when:** Your clean step passes your own tests. Rejects are kept with a reason.

**Session 40: Weekly table**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Build the weekly demand, capacity, backlog table from a blank page.
- **Done when:** Your weekly table matches a hand-calculated week.

**Session 41: Turnaround and forecast**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Build the turnaround measure with the fairness rule, and a backtested forecast.
- **Done when:** You can say which method won and by how much.

**Session 42: Pipeline, README and a 10-minute talk**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- One command runs it. Write a short README. Explain it out loud for 10 minutes, as in an interview.
- **Done when:** You built something similar from a blank page, with your own tests. That is the goal.


### Optional, after course Module 4: run it on SQL Server

**Session 43: Step 12: SQL Server (optional)**

*Full day page: being written. It will appear in `daily/` before you reach it.*

- Follow guide/12_stage_c_sql_server.md. You need a SQL Server you may break (Developer edition or Docker), never a work or live server. This step has no automatic check and I have not run it on a real server.
- **Done when:** Your T-SQL ran on a real server and the weekly table matches your Python output.

## After the plan

You will be able to: clean messy data with kept rejects; build weekly demand, capacity and backlog in SQL and in pandas; judge turnaround fairly; backtest a forecast; wire a logged pipeline; and prove two versions agree. That is the shape of most junior data engineering work.
