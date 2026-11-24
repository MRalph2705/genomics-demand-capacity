# Day 8: Step 3 (SQL weekly): the idea and the first two parts

*Planned for Tue 17 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Understand backlog, learn the pattern, and write the four weekly counts.

**Files you will touch:** `guide/03_sql_weekly.md`, `sql/03_weekly_summary.sql` (you write it over Days 8 to 10), new `scratch/step3.sql`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 20 min: Think first, on paper

Open `guide/03_sql_weekly.md`. Read down to **The pattern**. Answer on paper:

1. What is a **backlog**? Write it as a sum: *samples that have arrived* minus *samples that have been sequenced*, both counted up to the end of the week. Why is it not "referrals minus sequenced"? (A referral has no sample yet.)
2. If no sample was sequenced in one week, what must that week show: a zero, or no row? Which one breaks a running total?
3. The capacity file has 90 weeks. Why does the view show only 78? (Look at `data/capacity_weekly.csv`'s last 12 rows, and read the brief.)

## 20 to 35 min: Run and read the pattern

1. `python guide/examples/run_library_sql.py`. Find the weekly table.
2. Open `guide/examples/library_sql.sql` and read **Pattern 2** (`vw_WeeklyLoans`). Find the four ideas:
   1. One small `GROUP BY` CTE **per measure** (`Borrowed`, `Returned`).
   2. A calendar table is the **left** side. Every week is there. Each measure is `LEFT JOIN`ed on and wrapped in `COALESCE(x, 0)`.
   3. A running total: `SUM(x) OVER (ORDER BY week ROWS UNBOUNDED PRECEDING)`. The frame is written out.
   4. A moving average with `ROWS BETWEEN 2 PRECEDING AND CURRENT ROW`, guarded by `CASE WHEN COUNT(*) OVER (same frame) = 3`.
3. Close it.

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 8: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 35 to 40 min: Read your brief and one detail

1. Open `sql/03_weekly_summary.sql`. Read the comment: nine output columns, and three facts.
2. Open `sql/01_create_tables.sql` and find `ReferredWeek AS CAST(DATEADD(DAY, (DATEDIFF(DAY, 0, ReferredDate) / 7) * 7, 0) AS DATE)`. This gives the **Monday** of the week. Question: why `DATEDIFF(DAY, 0, ...)` and not `DATEPART(WEEKDAY, ...)`? (Hint: look up `SET DATEFIRST`: the setting changes what "day 1 of the week" means. [DATEDIFF doc](https://learn.microsoft.com/sql/t-sql/functions/datediff-transact-sql).)

## 40 to 57 min: Parts 1 and 2 in a scratch file

Make a file `scratch/step3.sql`. You will run it with a new switch:

```
python run_sql.py --clean scratch/step3.sql
```
`--clean` fills the table `dbo.Referrals` with the **known-good clean rows**, so you can build Step 3 without depending on your Step 2. (Without `--clean` that table is empty.) Your Step 3 query reads `dbo.Referrals`, exactly as the final file will. The table already has the Monday-of-week columns `ReferredWeek`, `SampleReceivedWeek`, `SequencedWeek`, `ReportedWeek`.

**Part 1: referrals per week.** Type this:

```sql
WITH Referred AS (
    SELECT r.ReferredWeek AS WeekStart, COUNT(*) AS Referrals
    FROM dbo.Referrals AS r
    GROUP BY r.ReferredWeek
)
SELECT * FROM Referred ORDER BY WeekStart;
```
Run it. **You should see 78 rows**, starting `2025-01-06  101`, `2025-01-13  99`, `2025-01-20  90`, `2025-01-27  85`.

**Part 2: the other three measures.** Write three more CTEs of the same shape, and run each one **alone** first (change the last line to `SELECT * FROM <that CTE>`):
- `Received`: count by `SampleReceivedWeek`, skipping rows where `SampleReceivedDate IS NULL`, named `SamplesReceived`.
- `Sequenced`: count by `SequencedWeek`, skipping rows with no `SequencedDate`.
- `Reported`: count by `ReportedWeek`, skipping rows with no `ReportedDate`.

Why run each alone? When a join later goes wrong you will not know which piece is broken. Small steps find the bug.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 8, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 9: open `daily/day-09.md`. Part 3: join to the capacity calendar, keep 78 weeks.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 7](day-07.md)  [Day 9 >](day-09.md)
