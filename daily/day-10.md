# Day 10: Step 3: backlog, the 4-week average, check (part 5)

*Planned for Thu 19 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Finish the weekly view, put it in the real file, and pass `python check.py 3`.

**Files you will touch:** `scratch/step3.sql`, `sql/03_weekly_summary.sql`, `notes/decisions.md`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 25 min: Part 5. Backlog and the 4-week average

1. **Backlog at end of week** = (samples received so far) minus (samples sequenced so far). Write one running total for each:
   ```sql
   SUM(w.SamplesReceived) OVER (ORDER BY w.WeekStart ROWS UNBOUNDED PRECEDING)
   ```
   and subtract the same for `Sequenced`. Always write `ROWS`, not the default `RANGE`.
2. **Referrals4WkAvg**: the average of `Referrals` over this week and the 3 before it, 1 decimal, and **NULL for the first 3 weeks**. The frame is `ROWS BETWEEN 3 PRECEDING AND CURRENT ROW`. Guard it with `CASE WHEN COUNT(*) OVER (the same frame) = 4 THEN ... END`. Inside the average use `CAST(w.Referrals AS DECIMAL(9, 2))` (the same whole-number trap: `AVG` of whole numbers is a whole number).

Run it with `python run_sql.py --clean scratch/step3.sql`. **The first four weeks must be:**

| WeekStart | Referrals | Seq. | Backlog end | 4-wk avg |
|---|---|---|---|---|
| 2025-01-06 | 101 | 46 | 4 | NULL |
| 2025-01-13 | 99 | 93 | 2 | NULL |
| 2025-01-20 | 90 | 100 | 1 | NULL |
| 2025-01-27 | 85 | 87 | 0 | 93.8 |

(Utilisation for those weeks: 0.46, 0.93, 1.0, 0.87. The last week's backlog is 103.)

## 25 to 40 min: Move it into the real file

1. Open `sql/03_weekly_summary.sql`. Keep the comment at the top.
2. Write `CREATE OR ALTER VIEW dbo.vw_WeeklySummary AS` and under it copy **your own scratch query** (the CTEs `Referred, Received, Sequenced, Reported, Weekly` and the final select). It already reads `dbo.Referrals` and its week columns, so nothing needs changing. Type, do not paste the idea from the guide.
3. The final select must return exactly these columns, in this order: `WeekStart, Referrals, SamplesReceived, Sequenced, Reported, Capacity, Utilisation, BacklogEnd, Referrals4WkAvg`.
4. End the view with `;` then a line `GO`, and as the very last line of the file: `SELECT * FROM dbo.vw_WeeklySummary ORDER BY WeekStart;`

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 10: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 40 to 52 min: Check

```
python check.py 3
```
4 tests. Read the first failure only:
- "columns and rows": wrong column names or not 78 rows.
- "week with no referrals": you used `INNER JOIN` or started from a measure. The fix is in Hint 3.
- "integer division": add the `CAST ... AS DECIMAL` (or a `1.0 *`) in `Utilisation` and in the average.

## 52 to 57 min: Compare and note

1. Open the finished version's `sql/03_weekly_summary.sql`. What is the same? Four CTEs or one? Is the number 78 written in the SQL? Where would you move it if the history length changed?
2. `notes/decisions.md`: add a **Step 3** heading and answer: **why does backlog use samples received and not referrals?**
3. Say it aloud: *"The weekly view starts from the capacity calendar and left-joins each measure, so a week with no events still shows zero. Backlog is cumulative samples received minus cumulative samples sequenced, using window functions with an explicit frame. I cast to decimal because T-SQL divides whole numbers as whole numbers."*

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 10, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 11: open `daily/day-11.md`. Step 4, the fairness rule and the eligible view.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 9](day-09.md)  [Day 11 >](day-11.md)
