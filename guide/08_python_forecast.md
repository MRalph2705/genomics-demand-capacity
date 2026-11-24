# Step 8 (Python): Forecast

**Goal:** forecast the next 12 weeks of demand, **test** the forecast methods, compare demand with capacity, and answer "how much extra capacity clears the backlog?"

**File to write:** `dcap/forecast.py`   **Check:** `python check.py 8`   **Time:** about 3 hours
**You need:** numpy basics, `np.polyfit`, `pd.date_range`, a `for` loop with `enumerate`

## Think first

1. How do you know a forecast is any good? You can not test it on the future. What can you do with the weeks you already have?
2. Three simple methods: repeat the last week; average the last four weeks; extend a straight line through the last 26 weeks. Which do you think will win? Write your guess. (You may be wrong. That is fine, and it is the point.)
3. A more complicated model is not always better. How would an interviewer react to "I used the simplest method that won the test"?

## The pattern (a different subject)

`guide/examples/library_python.py`: `repeat_last`, `average_of_last_3` and `weeks_until_zero`.

Notice:
- A forecast method takes `(history, horizon)` and returns an array of `horizon` numbers.
- `np.repeat(value, horizon)` repeats a value.
- `weeks_until_zero` is a loop. Each week the queue changes by (arrivals − departures) and can not go below zero (`max(0, ...)`). It returns the week number when the queue hits zero, or `None`.

The **backtest** is the new idea. Hide the last 12 weeks, forecast them from the rest, compare with what really happened, and score each method. The score:
- **MAE**: the mean of `|actual − forecast|`. "On average we are out by X referrals a week."
- **MAPE**: the same, as a percentage of the actual value.

## Your task

Write the seven functions in the order they appear. They are small. `backtest` is the one that needs thought.

## Hints (open one at a time)

<details><summary>The three methods</summary>

`history` is a numpy array. `history[-1]` is the last value. `history[-4:]` is the last four. For the line: `np.polyfit(x, y, deg=1)` returns `(slope, intercept)`; use `x = np.arange(26)` and forecast at `x = 26, 27, ...`.
</details>

<details><summary>backtest</summary>

Split the values: all but the last 12 (history), and the last 12 (actual). Loop over `METHODS.items()`. For each, forecast 12 weeks from the history. Compute the two errors. Collect dictionaries into a DataFrame. Sort by `mae`, then `reset_index(drop=True)`.
</details>

<details><summary>forecast_demand</summary>

Look up the method with `METHODS[method_name]`. The dates start **one week after** `demand.index[-1]`: `pd.date_range(start, periods=horizon, freq="7D")`. Round to 1 decimal.
</details>

<details><summary>weeks_to_clear</summary>

`for week, (demand, capacity) in enumerate(zip(...), start=1)`. Update `waiting`. If it is 0, return `week`. After the loop return `None`. Test it with small numbers on paper first.
</details>

## Common mistakes (all caught)

- A forecast that starts on the last week of history, not the week after.
- Counting weeks from 0.
- Sorting the backtest the wrong way (the **smallest** error wins).
- Forgetting the extra capacity in `capacity + extra`.

## Compare

Open `genomics-demand-capacity/dcap/forecast.py` and its README section. The finished version found that "repeat the last value" won on this data. Did yours? If not, find out why before you move on.

## Say it aloud

*"I hid the last 12 weeks, forecast them with three simple methods, and kept the one with the lowest error. On this data the simplest, repeating the last value, won, with an average error of about 11.5 referrals a week (9%). A more complex model was not justified. The data has a seasonal dip in August that these methods can't see, so the forecast overstates August. With two or more years of history I would model seasons."*

Check every number in that answer against **your** output before you say it. If yours differs, say yours.

Write in `notes/decisions.md`: **why did the simplest method win, and what would change your mind?**

Next: [Step 9: the pipeline](09_python_pipeline.md)
