# Step 5 (Python): Clean

**Goal:** the same cleaning as Step 2, now in pandas, in small functions you can test one by one.

**File to write:** `dcap/clean.py`   **Check:** `python check.py 5`   **Time:** about 3 hours
**You need:** course Module 3 (pandas basics), plus functions and dictionaries from Modules 1–2

## Think first

1. Your SQL cleaned in one view. In Python, why split it into four small functions (`load`, `normalise`, `find reasons`, `clean`)? (What can you test with a four-line table that you cannot test with 8,000 rows?)
2. In SQL a row got one reason: the first `WHEN` that was true. How do you get "the first reason wins" with a column of reasons in pandas?
3. Which functions must **not** change their input? Why does that matter when someone calls them twice?

## The pattern (a different subject)

`guide/examples/library_python.py` does the same job for library loans. Run it: `python guide/examples/library_python.py`.

Notice the **shape**:
- `load_loans(text)`: one job. Read, parse dates, give the id a text type.
- `tidy(frame)`: starts with `frame.copy()`. Returns a new frame.
- `find_problems(frame)`: starts with a column of empty strings. A tiny helper `flag(mask, reason)` writes the reason **only where no reason has been written yet**. That is "first wins".
- `clean_loans(raw)`: calls the others in order and returns `(clean, rejected, counts)`. It counts every step.

Close it. The genomics version has more stages (a loop over neighbouring pairs of dates), and its own rules.

## Your task

Write the four functions in `dcap/clean.py`. Each has a brief in its docstring. The names, arguments and results are fixed because the checks call them. Do them **in the order they appear** and run `python check.py 5` after each. The first failing check names the next thing to do.

## Hints (open one at a time)

<details><summary>load_referrals</summary>

One call to `pd.read_csv` with two options: which columns to parse as dates, and a `dtype` for the id.
</details>

<details><summary>normalise_text</summary>

`frame.copy()` first. For the test type: strip spaces, make it lower case, then `.map()` with a dictionary from lower-case spelling to the standard spelling. A value not in the dictionary becomes NaN, which is what you want.
</details>

<details><summary>find_reject_reasons: the first-wins helper</summary>

Start with `reasons = pd.Series("", index=frame.index)`. Write a helper inside the function: `flag(mask, reason)` sets `reasons[mask & (reasons == "")] = reason`. Call it once per rule, in the order of the docstring.
</details>

<details><summary>find_reject_reasons: the date rules</summary>

`zip(STAGE_ORDER, STAGE_ORDER[1:])` gives the neighbouring pairs `(referred, received)`, `(received, sequenced)`, `(sequenced, reported)`. For each pair there are two rules. Use an f-string for the reason text: `f"{later} before {earlier}"`.
A comparison with NaT is False, so you do not need a special case for empty dates in the "before" rule.
</details>

<details><summary>clean_referrals</summary>

`raw.drop_duplicates()` removes exact copies. For repeated ids use `duplicated(keep="first")` on the id column and keep the rows where it is False. Count after each step (`len(before) - len(after)`). `rejected = frame[bad].assign(reject_reason=reasons[bad])`. For the clean frame use `reset_index(drop=True)`.
</details>

## Common mistakes (all caught by the checks)

- Changing the input frame. Always `.copy()` first.
- Checking the rules in a different order, so a row gets its second reason.
- `<=` where it should be `<`. Same-day dates are fine.
- Rejecting a row because a *later* date is empty. Not every referral has finished.
- Forgetting `reset_index`, so the clean frame has gaps in its index.

## Compare

Open `genomics-demand-capacity/dcap/clean.py`. Look at: how does it count? How long is each function? Which names are clearer than yours? Did you find a simpler way than the reference?

## Say it aloud

*"Each rule is a boolean mask. A helper writes the reason only where none has been written yet, so each bad row gets exactly one reason, the first that applies. Bad rows are kept with the reason, and the counts add up: read = duplicates + repeated ids + rejected + loaded."*

Write in `notes/decisions.md`: **why keep rejected rows instead of deleting them?**

Next: [Step 6: Python weekly table](06_python_weekly.md)
