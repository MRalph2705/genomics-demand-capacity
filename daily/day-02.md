# Day 2: Step 1: look at the data (questions 1 to 5)

*Planned for Wed 11 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Answer the first five of the ten questions about the raw file, with SQL.

**Files you will touch:** `notes/findings.py` (you edit it), `notes/progress.md`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 15 min: Guess first (this is the habit)

Open `notes/progress.md`. At the bottom, under a new heading **My guesses**, write your answers to these **before** you look at any numbers:

1. How many rows do you think are in `referrals_raw.csv`? (A number, a rough one is fine.)
2. Is every `referral_id` unique? (yes or no)
3. What do you think is wrong with the file? (You were told it is dirty.)
4. Which columns can be empty, and is empty always a fault?

Save. Now you can look. (Why? If you only look, you never notice when you are surprised.)

## 15 to 20 min: Meet the file you will edit

Open `notes/findings.py`. You will see ten lines like this:

```python
rows_in_file = None                       # data rows in referrals_raw.csv (not counting the header line)
exact_duplicate_rows = None
distinct_referral_ids = None
first_referred_date = None
last_referred_date = None
...
```

Your job over Days 2 and 3 is to replace each `None` with the answer. A number goes in as a number (`rows_in_file = 123`). A date goes in as text in quotes (`first_referred_date = "2025-01-06"` is the *shape*, not the answer).

Today: the first **five**: `rows_in_file`, `exact_duplicate_rows`, `distinct_referral_ids`, `first_referred_date`, `last_referred_date`.

## 20 to 50 min: Count with SQL

You query a table called `dbo.Referrals_Raw`. Every column in it is text. Its columns are `ReferralID, ReferredDate, TestType, Priority, SampleReceivedDate, SequencedDate, ReportedDate`. You run a query like this, from the terminal, in the project folder:

```
python run_sql.py "SELECT COUNT(*) AS n FROM dbo.Referrals_Raw"
```

**Question 1: how many data rows are in the file (not counting the header line)?**
The query above counts the rows in the table. Run it. Write the number in `notes/findings.py` as `rows_in_file`. Save the file.

**Question 2: how many rows are an exact copy of an earlier row?** ("Exact" means every one of the 7 columns is the same.)
Run this:
```
python run_sql.py "SELECT COUNT(*) AS n FROM (SELECT DISTINCT * FROM dbo.Referrals_Raw) AS d"
```
`SELECT DISTINCT *` keeps one of each different row. So: **rows in file minus this number = exact duplicates.** Do the subtraction on paper. Write it as `exact_duplicate_rows`.

**Question 3: how many different `referral_id` values are there?**
```
python run_sql.py "SELECT COUNT(DISTINCT ReferralID) AS n FROM dbo.Referrals_Raw"
```
Write it as `distinct_referral_ids`.

**Look at your own three numbers.** Is the third number the same as the "distinct rows" number from Question 2? If yes, what does that tell you about the repeated rows? (Write one sentence on paper. This matters on Day 6.)

**Questions 4 and 5: the first and last referred date.** Dates here are text. Sorting text only works as dates if **every date has the same format**. Check that first:
```
python run_sql.py "SELECT LEN(ReferredDate) AS length_of_text, COUNT(*) AS n FROM dbo.Referrals_Raw GROUP BY LEN(ReferredDate)"
```
If you get **one row** (all the same length, 10 characters, like `2025-01-06`) then text sorting is safe. Then:
```
python run_sql.py "SELECT MIN(ReferredDate) AS first_date, MAX(ReferredDate) AS last_date FROM dbo.Referrals_Raw"
```
Write the two dates **in quotes** into `first_referred_date` and `last_referred_date`.

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 2: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 50 to 57 min: Check

In the terminal:
```
python check.py 1
```
The check stops at the **first** problem and shows only that one. Today the right result is a message saying **`rows_with_messy_test_type is not answered yet`**. That means your first five all passed (that item is Question 6, which is tomorrow). If instead it names one of your five, with "That is not right. Look again at how you counted", fix that one only:
- Did you write a date without quotes, or a number with quotes?
- For Question 2, did you do rows minus distinct rows (not the other way round)?
- Run the query again and read the number carefully.

Compare with your **My guesses** in `progress.md`. Write one line under them: **Which guess was wrong? What surprised me?**

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 2, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 3: open `daily/day-03.md`. Questions 6 to 10 in `notes/findings.py`.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 1](day-01.md)  [Day 3 >](day-03.md)
