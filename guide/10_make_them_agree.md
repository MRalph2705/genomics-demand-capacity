# Step 10: Prove SQL and Python agree

**Goal:** show that your SQL and your Python give the same numbers. This is the strongest thing in the project.

**Check:** `python check.py 10`   **Time:** about 1 hour   **Do first:** `python run_pipeline.py` (Step 9)

## Think first

Two independent versions that agree are strong evidence that both are right. Two that disagree mean at least one is wrong. Why is "I wrote it twice and they match" better evidence than "I wrote it once and it looks right"?

## What the check does

1. Starts from the **raw** data. It runs *your* `02_clean_load.sql`, `03_weekly_summary.sql` and `04_turnaround.sql` in DuckDB.
2. Compares: the number of rejected rows; every weekly figure (referrals, samples received, sequenced, reported, capacity, utilisation, backlog, 4-week average); and every turnaround cohort (priority, month, count, share within target).
3. Compares them with the files your Python pipeline wrote in `output/`.

Notes on rounding: SQL `ROUND` rounds half **up**; pandas rounds half to **even**. So 97.25 may become 97.3 in SQL and 97.2 in pandas. The check allows one last digit. That is a real thing to know, and a good thing to mention.

## If a check fails

Do **not** change the check. Find out which side is wrong:

1. Which figure differs, in which week or cohort?
2. Work it out by hand for that one week from `data/referrals_raw.csv`.
3. Fix the side that is wrong. Run both again.

This is how real reconciliation work goes. Write what you found in `notes/decisions.md`.

## Say it aloud

*"I wrote the cleaning, the weekly table and the turnaround measure in both T-SQL and Python, and a check compares every weekly figure and every cohort. They agree. Rounding is the one difference: SQL rounds half up and pandas rounds half to even, so I allow one unit in the last digit."*

Next: [Step 11: README and interview](11_readme_and_interview.md)
