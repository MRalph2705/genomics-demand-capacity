# Step 6 (Python): The weekly table

**Goal:** the same weekly table as Step 3, in pandas.

**File to write:** `dcap/metrics.py` (`week_start`, `count_by_week`, `weekly_table`)   **Check:** `python check.py 6`   **Time:** about 3 hours
**You need:** `groupby` / `value_counts`, `reindex`, `cumsum`, `rolling`

The check does not depend on Step 5. It loads the known-good clean rows for you.

## Think first

1. "The Monday of a date's week": how do you get it from a date? (Hint: what does `dt.weekday` return for a Monday? For a Sunday?)
2. If you count referrals per week with `value_counts`, what happens to a week with no referrals? What must you do about it?
3. Backlog is *cumulative arrivals minus cumulative sequenced*. Which pandas method gives a cumulative total?

## The pattern (a different subject)

`guide/examples/library_python.py`: `monday_of`, `per_week` and `weekly_loans`.

Notice:
- `monday_of` subtracts `weekday` days (`pd.to_timedelta(..., unit="D")`) and then `.dt.normalize()` to remove the time.
- `per_week` ignores missing dates (`dropna`) and names the result.
- `weekly_loans` joins the counts with `pd.concat(..., axis=1)`, then `reindex`es to **every week** and `fillna(0)`. A running total uses `cumsum()`. A moving average uses `rolling(n).mean()`.
- The first weeks of a rolling mean are NaN. That is correct, not a bug.

## Your task

Write the three functions. Read each docstring. Build `weekly_table` in this order, printing the result as you go:
1. The four count series.
2. Join them, line up to the 78 history weeks, fill gaps with 0, make them whole numbers.
3. Add `capacity`, `utilisation`.
4. Add `backlog_end`, `referrals_4wk_avg`.

## Hints (open one at a time)

<details><summary>week_start</summary>

`dates - pd.to_timedelta(dates.dt.weekday, unit="D")`, then remove the time.
</details>

<details><summary>count_by_week</summary>

Drop missing dates, turn each into its Monday, count each Monday (`value_counts`), give the result the name.
</details>

<details><summary>weekly_table: lining up the weeks</summary>

The capacity table has 90 weeks. Set `week_start` as its index and take the first `config.N_WEEKS`. `reindex` the joined counts to exactly those weeks. `fillna(0)` then `astype(int)` (the counts become decimals when a week is missing, so convert back).
</details>

<details><summary>weekly_table: rounding</summary>

`.round(3)` for utilisation and `.round(1)` for the 4-week average. Do not round the backlog: it is a count.
</details>

## Common mistakes (all caught)

- Week starting on Sunday, or off by a day.
- Backlog built from *referrals* instead of *samples received*.
- Using all 90 weeks (the last 12 are plans, not history).
- A rolling window of 3 instead of 4.
- Counts that are decimals (`12.0`).

## Compare

Open `genomics-demand-capacity/dcap/metrics.py`. Is there an easier way to count by week? What does `sort=False` in `concat` do? What if I forget it?

## Say it aloud

*"I make sure every week has a row, even when nothing happened, otherwise the running total would skip weeks. Backlog is cumulative samples received minus cumulative samples sequenced, at the end of each week."*

Write in `notes/decisions.md`: **how do you know your backlog is right?** (Hint: the end value must equal samples received minus samples sequenced over all the history. Work it out from the clean data.)

Next: [Step 7: Python turnaround](07_python_turnaround.md)
