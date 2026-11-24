# Day 12: Step 4: percentage within target, median and p90 (parts 2 and 3)

*Planned for Sat 21 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Compute the share within target, and the median and 90th percentile, per month and priority.

**Files you will touch:** `scratch/step4.sql`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 10 min: Three traps (read, do not skip)

1. `100 * SUM(...) / COUNT(*)` is whole-number maths in T-SQL. Start with **`100.0 *`**.
2. In T-SQL, `PERCENTILE_CONT` needs `OVER`. It returns one value **per row**. Use `SELECT DISTINCT` to get one row per group. (In other databases it is a normal aggregate; do not carry the habit.) [PERCENTILE_CONT doc](https://learn.microsoft.com/en-us/sql/t-sql/functions/percentile-cont-transact-sql).
3. `NULL <= 14` is not true. An unreported referral has `DaysToReport = NULL`, so `CASE WHEN DaysToReport <= TargetDays THEN 1 ELSE 0 END` gives 0 for it. That is the behaviour you want. Be able to say **why it works**.

## 10 to 30 min: Part 2. Percentage within target

In yesterday's `scratch/step4.sql` replace the last line (`SELECT Priority, COUNT(*) ...`) with the query below, and run it with `python run_sql.py --clean scratch/step4.sql`:
```sql
SELECT e.ReferralMonth, e.Priority, COUNT(*) AS Referrals,
       ROUND(100.0 * SUM(CASE WHEN e.DaysToReport <= e.TargetDays THEN 1 ELSE 0 END) / COUNT(*), 1) AS PctWithinTarget
FROM Eligible AS e
GROUP BY e.ReferralMonth, e.Priority
ORDER BY e.Priority DESC, e.ReferralMonth;
```
Type it yourself and read every line. (`DESC` puts `urgent` before `routine`: look at the letters.)
**The first rows of the finished answer are:**

| month | priority | referrals | % within target |
|---|---|---|---|
| 2025-01-01 | urgent | 56 | 100.0 |
| 2025-02-01 | urgent | 58 | 100.0 |
| 2025-03-01 | urgent | 73 | 100.0 |

(35 rows in all: 18 months for urgent and 17 for routine. Routine stops a month earlier because its target is longer, so the latest routine month is not old enough to judge. Compare your first rows with the table above.)

## 30 to 50 min: Part 3. Median and p90

```sql
SELECT DISTINCT
    e.ReferralMonth, e.Priority,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY e.DaysToReport) OVER (PARTITION BY e.Priority, e.ReferralMonth) AS MedianDays,
    PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY e.DaysToReport) OVER (PARTITION BY e.Priority, e.ReferralMonth) AS P90Days
FROM Eligible AS e
ORDER BY e.Priority DESC, e.ReferralMonth;
```
Type it. You should get **35 rows**. Now **break it on purpose**: remove the word `DISTINCT` and run it. **You get 8,035 rows** (one per eligible referral). Why? Put `DISTINCT` back.
Questions to answer on paper:
- Rows not yet reported have no `DaysToReport`. What does `PERCENTILE_CONT` do with them? (It ignores NULLs.)
- Why are the median and the 90th percentile useful next to a percentage? (A percentage tells you *how many* missed; a percentile tells you *how late* the slow ones are.)

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 12: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 50 to 57 min: Put it into the real file

Open `sql/04_turnaround.sql`. Keep the brief comment. Write: the view `dbo.vw_EligibleForTarget` (the `Params`, `Targets` and eligible `SELECT` from your scratch, without the final count line; the view's columns are `Priority, TargetDays, ReferralMonth, DaysToReport`), `;`, `GO`, then the two selects reading `FROM dbo.vw_EligibleForTarget AS e`. Do **not** run the check yet. That is tomorrow.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 12, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 13: open `daily/day-13.md`. Run `python check.py 4` and fix.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 11](day-11.md)  [Day 13 >](day-13.md)
