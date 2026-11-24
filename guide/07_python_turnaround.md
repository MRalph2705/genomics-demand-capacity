# Step 7 (Python): Turnaround

**Goal:** the same turnaround measure as Step 4, in pandas.

**File to write:** `dcap/metrics.py` (`turnaround_by_cohort`)   **Check:** `python check.py 7`   **Time:** about 2 hours
**You need:** boolean masks, `groupby().agg()` with named results, `quantile`, `dt.to_period`

## Think first

This is the same fairness rule as Step 4. Before you code, write the rule in your own words on paper. Then answer: **what is the result for a referral that is old enough but has not been reported?** (Within target? In the median?)

Then check your answers against the brief in the docstring.

## The pattern (a different subject)

`guide/examples/library_python.py`, function `on_time_share`.

Notice:
- A loop over the rules (`for item_type, days in LOAN_DAYS.items()`), one group at a time.
- The "old enough" filter is a boolean mask: `borrowed <= data_end - pd.Timedelta(days=days)`.
- `days_out` is a difference of two dates; `.dt.days` turns it into a number. Not returned = NaN.
- `.le(days)` is "less than or equal". With NaN it gives **False**, so not-returned counts as not on time. The mean of True/False is the share.
- `median()` skips NaN by itself.

Close it. Yours groups by month as well, and needs a 90th percentile.

## Your task

Write `turnaround_by_cohort`. The docstring has the rules and the exact column names.

## Hints (open one at a time)

<details><summary>Hint 1: the loop</summary>

For each `(priority, target)` in `config.TARGET_DAYS.items()`: filter, work out days to report, work out within-target, group by month, collect the pieces, join them at the end with `pd.concat`.
</details>

<details><summary>Hint 2: the month</summary>

`df["referred_date"].dt.to_period("M").dt.to_timestamp()` gives the first day of the month.
</details>

<details><summary>Hint 3: the groupby</summary>

`groupby("month").agg(referrals=(col, "size"), pct_within_target=(col, "mean"), ...)`. For the 90th percentile pass a small function: `lambda days: days.quantile(0.9)`.
</details>

<details><summary>Hint 4: the percentage</summary>

The mean of True/False is 0 to 1. Multiply by 100 and round to 1 decimal at the end.
</details>

## Common mistakes (all caught)

- Not applying the "old enough" rule. The small-table check shows this.
- Counting an unreported referral as within target (`isna()` mixed in).
- `month` as a period or a date string, not a Timestamp of the first day.
- Changing the input frame (adding columns to it).

## Compare

Open `genomics-demand-capacity/dcap/metrics.py`. Do you loop over priorities or do something else? Can it be done without a loop? Is the loop clearer or not?

## Say it aloud

Same answer as Step 4, now in Python: *"Only referrals old enough to have met their target are counted, and an unreported old referral counts as a miss."* Add: *"I wrote a tiny table by hand to test each rule on its own, because the real data happens to contain no unreported referral that is old enough to judge, so a test on the full data cannot catch that mistake."*

That last sentence is true: the checks do that for you. Be ready to explain why a hand-made test table matters.

Next: [Step 8: Python forecast](08_python_forecast.md)
