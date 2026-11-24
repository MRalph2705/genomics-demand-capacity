# Day 14: Blank-page session: rebuild from memory

*Planned for Mon 23 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Find out what you really know, without looking, then fix the gaps.

**Files you will touch:** A new empty file `scratch/blank_1.sql`, and `gotchas-cheatsheet.md` (your cheat sheet).

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 10 min: The rules

- **Do not open** `sql/02_clean_load.sql`, `sql/03_...`, `sql/04_...`, or the guide. Close them.
- You may look at `guide/examples/library_sql.sql` (a different subject) if you are truly stuck after 10 minutes.
- Wrong is fine. The mistakes tell us what to teach next.

## 10 to 35 min: Task A (from a blank file)

Create `scratch/blank_1.sql`. Write, from memory, a query on `dbo.Referrals_Raw` that returns **one row per ReferralID** (so the 25 repeats disappear) with these columns: `ReferralID` (trimmed), `ReferredDate` (a real date, empty becomes NULL), `Priority` (trimmed, lower case) and `RowInId`. Keep only `RowInId = 1`. Then end it with a `COUNT(*)`.

Run it: `python run_sql.py scratch/blank_1.sql`. **You should get 8692.**

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 14: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 35 to 50 min: Task B (small)

Write a second query, from memory, on `dbo.CapacityWeekly`: for each week, the **running total of capacity** and the **average capacity over this week and the 3 before it, NULL for the first 3 weeks**. (You wrote the same idea in Step 3.) Check that the row count is 90 and the first four averages are NULL.

## 50 to 57 min: Learn from it

1. Now (only now) open your Step 2 and Step 3 files and compare. On paper write **the five mistakes you made most** across Days 5 to 12, in your own words. Add them to `gotchas-cheatsheet.md`.
2. Write one sentence each for: what is `ROW_NUMBER` for? What does `ROWS UNBOUNDED PRECEDING` mean? What does `NULLIF(x, '')` do?
3. If Task A or B took you more than 25 minutes, **repeat the one you got wrong tomorrow** before moving on. Do not rush into pandas.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 14, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 15: open `daily/day-15.md` (course lesson 3.1). Not written yet if this line is still here: tell your tutor.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 13](day-13.md)  [Day 15 >](day-15.md)
