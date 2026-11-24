# Day 11: Step 4 (SQL turnaround): the fairness rule and the eligible view

*Planned for Fri 20 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Understand why only some referrals may be judged, and build the view of those referrals.

**Files you will touch:** `guide/04_sql_turnaround.md`, `sql/04_turnaround.sql`, new `scratch/step4.sql`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 20 min: Think first, on paper

Open `guide/04_sql_turnaround.md`, read to **The pattern**. Imagine it is 1 July. A routine referral was made on 25 June. It has no result yet. The target is 42 days.

1. Is that a failure? (No, you cannot tell yet.) If you count it as late, what happens to the latest months on your chart?
2. So which referrals may you judge? Write the rule in your own words. The guide's version: *a referral can be judged only if it is old enough that its target date has already passed by the end of the data.*
3. An old referral that was **never** reported: within target, or not?

Say your rule out loud. Interviewers like this detail.

## 20 to 30 min: Run and read the pattern

1. `python guide/examples/run_library_sql.py`, find `PctOnTime`.
2. In `guide/examples/library_sql.sql` read **Pattern 3**: a small `Rules` CTE holds loan days per item type with `UNION ALL`; a join gives each loan its own limit; a `WHERE` keeps only loans old enough to judge; `SUM(CASE WHEN ...)` over `COUNT(*)` gives the share. Close it.

## 30 to 40 min: Read your brief and numbers

Open `sql/04_turnaround.sql`. Three parts. Write on paper:
- Targets (assumptions, **not NHS standards**): urgent **14** days, routine **42** days.
- `DataEnd` = the first referral date + 78 weeks. (For this data: first date 2025-01-06, so DataEnd is 2026-07-06.)
- Eligible when `ReferredDate <= DataEnd - TargetDays`.

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 11: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 40 to 57 min: Part 1. The view

Make `scratch/step4.sql` and run it with `python run_sql.py --clean scratch/step4.sql` (`--clean` fills `dbo.Referrals` with the known-good clean rows, as on Day 8). Type this:

```sql
WITH Params  AS (SELECT DATEADD(WEEK, 78, MIN(r.ReferredDate)) AS DataEnd FROM dbo.Referrals AS r),
Targets AS (SELECT 'urgent' AS Priority, 14 AS TargetDays UNION ALL SELECT 'routine', 42),
Eligible AS (
    SELECT r.Priority, t.TargetDays,
           DATEFROMPARTS(YEAR(r.ReferredDate), MONTH(r.ReferredDate), 1) AS ReferralMonth,
           DATEDIFF(DAY, r.ReferredDate, r.ReportedDate) AS DaysToReport
    FROM dbo.Referrals AS r
    INNER JOIN Targets AS t ON t.Priority = r.Priority
    CROSS JOIN Params AS p
    WHERE r.ReferredDate <= DATEADD(DAY, -t.TargetDays, p.DataEnd)
)
SELECT Priority, COUNT(*) AS n FROM Eligible GROUP BY Priority ORDER BY Priority DESC;
```
Read every line and say out loud what it does (this is Hint 1 in `guide/04`, so try to explain it in your own words).

**You should see:** `urgent 1216` and `routine 6819`. That is 8,035 eligible referrals out of the 8,677 clean ones.

Now do **one experiment** so the rule sticks: change `42` to `1`, run it again. **Routine goes up to 7420.** Why? (A shorter target means more referrals are old enough to judge.) Change it back to `42`.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 11, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 12: open `daily/day-12.md`. Parts 2 and 3: PctWithinTarget, then median and p90.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 10](day-10.md)  [Day 12 >](day-12.md)
