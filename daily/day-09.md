# Day 9: Step 3: join the capacity calendar and utilisation (parts 3 and 4)

*Planned for Wed 18 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Make every week appear, keep exactly 78, and add utilisation without the integer-division trap.

**Files you will touch:** `scratch/step3.sql`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 10 min: Think

- You will start from `dbo.CapacityWeekly` and `LEFT JOIN` the four measures **to it**. If you started from a measure, or used `INNER JOIN`, what would happen to a week with no events?
- `7 / 2` in T-SQL is **3**, not 3.5. Whole number divided by whole number is a whole number. `AVG` of whole numbers is too. You will see why this matters in Part 4.

## 10 to 35 min: Part 3. Join, and keep 78 weeks

In `scratch/step3.sql` add a CTE called `Weekly` that:
1. selects from `dbo.CapacityWeekly AS c`,
2. `LEFT JOIN`s `Referred`, `Received`, `Sequenced` and `Reported` on the week,
3. returns `WeekStart`, the four measures each wrapped as `COALESCE(x.measure, 0)`, and `c.SequencingCapacity AS Capacity`,
4. keeps only the first 78 weeks: `WHERE c.WeekStart < DATEADD(WEEK, 78, <the first week in the capacity file>)`. The first week is `(SELECT MIN(WeekStart) FROM dbo.CapacityWeekly)`. (Read Hint 2 in `guide/03` only if you are stuck for 15 minutes.)

End with `SELECT * FROM Weekly ORDER BY WeekStart;` and run it.
**You should see 78 rows.** Check:
```sql
SELECT COUNT(*) AS weeks FROM Weekly;
```
Is any measure NULL? There should be no NULL (that is what `COALESCE` is for).

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 9: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 35 to 55 min: Part 4. Utilisation

Utilisation = work done divided by capacity = `Sequenced / Capacity`, rounded to 3 decimals.

1. **Predict first, on paper.** Suppose one week has `Sequenced = 46` and `Capacity = 100`. On SQL Server what is `46 / 100`? (Answer: **0**. Whole number divided by whole number gives a whole number, so the fraction is thrown away.) And `ROUND(46 / 100, 3)`? Still 0.
2. Write the safe version: `ROUND(CAST(w.Sequenced AS DECIMAL(9, 3)) / w.Capacity, 3)`. Run it. **Week 1 should show 0.460, week 2 0.930, week 3 1.000.**
3. Now run the wrong version too, `ROUND(w.Sequenced / w.Capacity, 3)`, side by side. **You will see the SAME numbers.** That is the trap. DuckDB (the checker's database) divides properly. SQL Server would give 0. So the checker cannot see this mistake, and it only checks that you wrote a `CAST` or a decimal like `1.0`. (This is documented T-SQL behaviour. I have not run it on a real SQL Server.)
4. On paper, one sentence: why is a mistake that gives the right answer in one database and the wrong answer in another dangerous? How would you protect yourself? (Answer: write decimal arithmetic on purpose, and test on the real server too.)

## 55 to 57 min

Save `scratch/step3.sql`.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 9, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 10: open `daily/day-10.md`. Part 5: backlog and the 4-week average, then move into `sql/03_weekly_summary.sql` and run check 3.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 8](day-08.md)  [Day 10 >](day-10.md)
