# Day 4: Step 2 (SQL clean): read and learn the pattern

*Planned for Fri 13 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Understand exactly what you will build on Days 5 to 7, using a different subject (a library).

**Files you will touch:** `guide/02_sql_clean.md`, `guide/examples/library_sql.sql`, `sql/02_clean_load.sql` (read only today).

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 20 min: Think first, on paper

Open `guide/02_sql_clean.md`. Read only down to **The pattern**. Answer these three on paper in your own words:

1. The raw table holds **only text**. Why is that a good idea for a load? (What happens to the whole load if one date says `31/02/2025`?)
2. A row is bad. You can delete it, fix it, or keep it aside with a reason. Which one lets you **explain the numbers later**?
3. A row breaks two rules. How many reasons should it get? Which one?

Check yourself against the "Say it aloud" paragraph at the bottom of the guide **after** you have written your answers.

## 20 to 40 min: Run and read the library example

1. In the terminal: `python guide/examples/run_library_sql.py`. It prints several small tables. Find the one that lists reject reasons.
2. Open `guide/examples/library_sql.sql`. Read **Pattern 1** only (the first view, `vw_LoansChecked`). Find these **five ideas**, and put a finger (or a comment on paper) on each:
   1. The `Typed` CTE turns text into types in one place.
   2. `CASE LOWER(LTRIM(RTRIM(x))) WHEN ... END` gives standard spellings. There is **no ELSE**, so an unknown value becomes NULL.
   3. `ROW_NUMBER() OVER (PARTITION BY id ORDER BY ...)` numbers the copies of each id. `WHERE RowInId = 1` keeps one.
   4. A `CASE WHEN ... THEN 'reason'` gives one reason per row. The **first true WHEN wins**, so the order of the lines matters.
   5. `RejectReason IS NULL` means "good row".
3. Close the file. Do not copy anything.

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 4: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 40 to 52 min: Read your brief

1. Open `sql/02_clean_load.sql`. The whole brief is a comment (between `/*` and `*/`) at the top. Read it twice.
2. On paper, write the **8 reject reasons in order** (this order is what you will type on Day 6). Under each, write which column it is about.
3. Read the box **The T-SQL trap you must know** in `guide/02`. In one sentence: why must every date go through `NULLIF(x, '')` before `TRY_CONVERT`? (On SQL Server converting empty text to a date gives 1900-01-01, not NULL. The checker cannot see this mistake, so only you can prevent it.)

## 52 to 57 min: Read the official words (optional, 5 minutes)

- [TRY_CONVERT](https://learn.microsoft.com/en-us/sql/t-sql/functions/try-convert-transact-sql)
- [NULLIF](https://learn.microsoft.com/sql/t-sql/language-elements/nullif-transact-sql)
- [ROW_NUMBER](https://learn.microsoft.com/en-us/sql/t-sql/functions/row-number-transact-sql)

(These are Microsoft's own pages. I confirmed the links exist but have not read every line of them.)

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 4, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 5: open `daily/day-05.md`. Create `scratch/step2.sql` and write Part 1.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 3](day-03.md)  [Day 5 >](day-05.md)
