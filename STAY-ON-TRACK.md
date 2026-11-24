# Stay on track: the system

Goal: be genuinely able to build a pipeline like this one, and talk about it in the NHS genomics interview. This file is for the days you do not feel like it, and for the walls you hit. Read it once now. Come back to it on a bad day.

## 1. Why the old plan broke (so we do not repeat it)

- It was built like a calendar. One day missed felt like "behind", and "behind" feels bad, so more days were missed.
- Each day was a full hour of new, hard material with nothing easy in it.
- When you hit something hard there was no pre-decided next move, so you stopped.

The fixes are below. None needs willpower. They are rules decided **now** so you do not have to decide at 2:20 pm when you are stuck.

## 2. The shape of the hour

| Minutes | Track | What |
|---|---|---|
| 0 to 15 | Recall and write | About 5 minutes of cards on the Recall tab (closed-book questions on old lessons). Then about 10 minutes on `python drill.py`: one short task where you write the code and it is checked for you |
| 15 to 35 | Python block | Next sitting in `PYTHON-BLOCKS.md` (a lesson on the study site) |
| 35 to 60 | Project | Next day page in `daily/` (each has a PAUSE POINT, so one page is about two sittings) |

You always do **the next unticked item** in `notes/tracker.md`. There is no "behind", only "next".

## 3. The minimum day (never zero)

On a bad day, a tired day, a day when you only have a few minutes: do **only** this.

1. Open the Recall tab on the study site and answer **5 cards**. (about 5 min). When you finish 5, the site ticks your minimum day for you.
2. Write the progress line in `notes/progress.md`. (1 min)

Got 10 more minutes? Run `python drill.py`. Got 20 more? Add the Python block. Got the whole hour? Do all three parts. But five cards and a line is a real day.

That counts as a day. Tick it. **The rule is: never miss two days in a row.** One missed day is normal. A second one in a row is how a habit dies. If you miss one, the next day is a minimum day, not a catch-up day.

## 4. The brick-wall protocol

A wall = you have been stuck on the same thing for more than a couple of minutes. The motivation drop comes from not knowing what to do next. So decide it in advance:

| Time stuck | Do this |
|---|---|
| 0 to 5 min | Read the error message **slowly, out loud**. The last line says what went wrong. The line number above says where. Shrink the problem: delete code until it works, then add a line at a time. |
| 5 to 10 min | Print the thing you are unsure about (`print(x)`, `print(type(x))`, `print(df.head())`). Look at what it really is, not what you think it is. |
| 10 to 15 min | Open the **first hint** in the guide. Only the first. |
| At 15 min | **Stop. Write a wall note** (below). Then switch to something else for the rest of the sitting, from the *other* track, or the next easy item. Do not sit and stare. |

**Wall note** (put it at the bottom of `notes/progress.md`):
```
WALL, <date>: I was trying to ______. I expected ______. I got ______ (paste the last error line).
I already tried ______ and ______.
```
Then send it to me, in this chat. Writing the note is half the fix, because it makes you say exactly what is wrong. I will reply with the cause and the next step, not just the answer. Your job after is to **retype** the fix, not paste it.

Two things to remember:
- Hitting a wall is not evidence you are bad at this. It is what the work is. Data engineers hit one every day.
- A wall that you solve is a **win**. Write it in `notes/wins.md` (next section). Those are your interview stories ("tell me about a problem you debugged").

## 5. Wins log

Open `notes/wins.md`. After every sitting write one line: *something I can do now that I could not do last week.* Examples: "I wrote a ROW_NUMBER query without looking." "I understood why my mask failed." On a bad day, **read the whole file before you start**. It is the evidence against the voice that says you are not getting anywhere.

## 6. Make starting easy

- **Fixed cue.** The 2:02 pm notification is the cue. When it arrives, you open the folder and the terminal **before** you decide whether you feel like it. Most of the resistance is in the first two minutes.
- **Leave a trap for yourself.** The last thing you do each day is write the first action for tomorrow in `notes/progress.md` and leave one test failing. You start by fixing a known thing, not by deciding what to do.
- **Short beats long.** Twenty minutes every day beats two hours on Sunday. Memory needs the gaps and the repeats.
- **Remove friction.** Keep the terminal and the editor open on the project folder. Pin the study site in your browser.

## 7. Weekly review (10 minutes, Sundays)

On Sunday evening you get a reminder. Open `notes/progress.md` and answer in three lines (to yourself, or to me in the chat):

1. How many days did I do something, out of 7? (Aim for 5. Do not aim for 7.)
2. What was my biggest wall, and did I solve it?
3. What is the one thing I will do first on Monday?

Send me those three lines if you want. I will adjust the plan if the pattern shows a problem (too long, too hard, wrong time).

## 8. Milestones (dates move, the order does not)

Dates assume you do about 80% of days. Missing a milestone date is information, not failure: tell me and we re-plan.

| # | Milestone | Rough date |
|---|---|---|
| M1 | SQL half passes checks 1 to 4, and is uploaded to GitHub | Tue 15 Dec |
| M2 | Python blocks done up to pandas (lesson 3.5) | Fri 18 Dec |
| M3 | Python half passes checks 5 to 9, pipeline runs | Sun 10 Jan |
| M4 | Check 10, README written, repo public, mock interview done | Sun 17 Jan |
| M5 | A second project of your own (Phase D) | Sun 31 Jan |

When a milestone is reached, tick it in `notes/tracker.md`, upload to GitHub, and **tell me**. Seeing a public repo grow is the best motivator there is.

## 9. Why you are doing this (write it)

At the top of `notes/tracker.md` write three sentences: **Why I want the NHS genomics data engineer job.** Read it when the wall is high. When the real advert is live, paste it to me and I will map each requirement to the lessons you have already done, so you can see how much is already covered.

## 10. What I can and cannot do

- I can write the plan, the pages and the reminders, and fix anything that is unclear or wrong.
- The reminders **prompt** you. They cannot make you start, and they cannot see your files, so they do not know what you did.
- I cannot see your progress unless you tell me. A one-line message ("did Day 3, stuck on X", or "missed three days") is enough, and I will treat it as data, not as a failure.
