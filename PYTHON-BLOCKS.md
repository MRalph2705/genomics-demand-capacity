# Python blocks: the 20-minute track

Each hour starts with 15 minutes of **Recall and write**: about 5 minutes of cards on the Recall tab of your study site, then 10 minutes on `python drill.py` (see below). Then 20 minutes of Python, taken from the lessons on your study site. The project (25 minutes) comes after. The blocks are what make the project Python steps (Step 5 onwards) doable. Skip nothing in this order.

## Recall comes first, so a block no longer needs its own recall step

The Recall tab asks you closed-book questions on lessons you chose. Questions you get right come back after 1, 2, 4, 8, 16 and then 32 days. Questions you miss come back tomorrow. That is what stops old lessons fading. When you finish a block's Sitting B, tick that lesson on the site (Course page). Its questions can then go into your Recall quiz.

## Writing drills: the fix for "I can recall it but I cannot write it"

Recall cards check what you remember. They do not teach your hands to write code. That needs writing, in small pieces, often, with feedback. So every day you also run:

    python drill.py

in the project folder. It gives you one short task, makes a file for you to edit, and checks your code with hidden tests when you run `python drill.py check`. The tests tell you what failed, not the answer. Spend about 10 minutes.

- **A drill unlocks when you tick Sitting A of its lesson** in `notes/tracker.md`. (Lessons 1.2 and 1.3 are open from the start.)
- **The help fades.** The first time, a task may give you a skeleton with `___` blanks. When it comes back it has only the function name and a description. The time after that, an empty page. That is the point: writing from a blank page gets easier because the scaffolding is taken away a little at a time.
- **Spacing.** A drill you pass comes back after 1, 2, 4, 8, 16 and then 32 days. A drill you miss comes back tomorrow with a fresh file.
- **Stuck?** `python drill.py hint` (after you have run `check` once). After two failed checks you can run `python drill.py solution`. Or run `python drill.py stop`: it stops for today and gives you a wall note to write. Stopping at 10 minutes is part of the plan.
- `python drill.py list` shows every drill and where you are. `python drill.py more` gives another one today.
- Always **type**, never paste. Your fingers are what you are training.

Each drill also lists the lesson it practises, so when you are stuck you know where to go back to.

## How one lesson is done: two sittings

A lesson on the site has these sections: **1. Picture, 2. Predict first, 3. Explanation, 4. Worked example, 5. Question and answer, Mixed practice (A, B, C), 6. Build it from a blank page, 7. Teach it back, 8. Self-check.**

**Sitting A: learn it (20 min)**
| Min | Do |
|---|---|
| 0 to 3 | Section 2, **Predict first**. Write your answer on paper before you reveal it. |
| 3 to 10 | Section 3, **Explanation**. Read it. Do not skim. |
| 10 to 17 | Section 4, **Worked example**. **Type it** into a file, run it, check you get the same output. |
| 17 to 20 | Section 5, **Question and answer**. Answer on paper first. Tick "Sitting A done". |

**Sitting B: prove it (20 min), the next day**
| Min | Do |
|---|---|
| 0 to 8 | **Mixed practice** A, B, C. Write your answer before you open anything. |
| 8 to 17 | Section 6, **Build it from a blank page**. Empty file. No looking. |
| 17 to 20 | Section 7, say the **Teach it back** answer out loud. Add a line to `notes/wins.md`. |

If the build task in Sitting B is not finished, that is your **first thing next day**. Do not move on with a gap. Redoing a blank-page task two or three days later is what makes it stick. Python from a blank page is your weakest skill, so these sittings matter more than any other part. If a sitting runs past 20 minutes, stop at the end of the section you are in and carry on the next day.

## The order (the project's critical path)

Lessons that the genomics project needs, in order. The other course lessons (classes, decorators, generators, typing, dataclasses) are valuable, but you do not need them for this project, so they come **after** M3.

| # | Lesson on the site | Why it is here |
|---|---|---|
| 1 | 1.4 Conditions and loops | Every function in Step 5 uses them |
| 2 | 1.5 Functions | The whole project is functions with contracts |
| 3 | 1.6 Count items with a dictionary | Same idea as `value_counts` and groupby |
| 4 | 1.7 List, dict and set comprehensions | Reading other people's code |
| 5 | 1.8 Mutable default arguments | A classic interview trap |
| 6 | 1.9 Files: text, CSV and JSON | `read_csv` makes sense after this |
| 7 | 1.10 try/except and the order of except blocks | The pipeline must fail cleanly |
| 8 | 1.11 Scripts, imports and virtual environments | `run_pipeline.py` and `pip install` |
| 9 | 2.9 Dates, times and time zones | Week starts, "old enough to judge" |
| 10 | 2.7 Logging | Step 9 pipeline logs |
| 11 | 3.1 DataFrames and Series | Step 5 |
| 12 | 3.2 Select and filter | Step 5 |
| 13 | 3.3 groupby and aggregates | Steps 6 and 7 |
| 14 | 3.4 merge and join | Step 6 |
| 15 | 3.5 rolling, shift, rank and cumsum | Steps 6 and 8 |
| 16 | 3.6 Forecast baselines | Step 8: the forecast you must beat |
| 17 | 3.7 Backtesting and error measures | Step 8: scoring the forecast fairly. Also the heart of your work training post, if you get it |

Optional but recommended once M3 is done: 2.8 Testing with pytest (so you can write your own tests in Phase D), then 2.1 to 2.6.

If you did lessons 1.1 to 1.3 earlier, you are starting at row 1. If you are unsure whether you did a lesson properly, do its **Self-check** first (section 8). If you get any wrong, redo the lesson's Sitting B.

## Spaced repeat (the part that makes it stick)

Every Friday spend the 20 minutes doing a **blank-page task** from a lesson you did in the previous two weeks (pick the build task of any lesson, or the mixed-practice task you found hardest). If it takes more than 15 minutes, redo that lesson's Sitting B next week.

## Tracking

Tick each sitting in `notes/tracker.md`.
