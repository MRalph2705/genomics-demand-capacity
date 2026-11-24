"""The drill bank for drill.py: short writing tasks, each checked by hidden tests.

Each drill has:
  id, lesson (the course lesson that teaches it), level, title
  imports, sig (the def line), doc (what to write)
  skeleton  (level A only: code with ___ blanks to fill in)
  solution, tests, hint

Levels fade as you get better. A = fill the blanks. B = signature and docstring only. C = blank page.
A drill you pass comes back with less help (see drill.py).
You do not need to read this file to use the drills. Reading the solutions before you try defeats the point.
"""

DRILLS = [
 # ------------------------------------------------------------------ warm-ups (lessons 1.2, 1.3)
 {"id": "d00a-describe", "lesson": "1.2", "level": "A", "title": "An f-string line",
  "imports": "", "sig": "def describe(name, count):",
  "doc": "Return text like 'Ana has 3 referrals' for describe('Ana', 3). Use an f-string.",
  "skeleton": 'def describe(name, count):\n    return f"{___} has {___} referrals"\n',
  "solution": 'def describe(name, count):\n    return f"{name} has {count} referrals"\n',
  "tests": '''
f = need("describe")
check(f("Ana", 3) == "Ana has 3 referrals", 'describe("Ana", 3) should be "Ana has 3 referrals", but you got %r' % (f("Ana", 3),))
check(f("Bo", 0) == "Bo has 0 referrals", 'describe("Bo", 0) should be "Bo has 0 referrals"')
''',
  "hint": "An f-string starts with f and puts names in braces: f\"{name} is here\"."},

 {"id": "d00b-last-two", "lesson": "1.3", "level": "B", "title": "Slice the end of a list",
  "imports": "", "sig": "def last_two(items):",
  "doc": "Return the last two items of the list as a new list. If there is only one item, return a list with that one item.",
  "solution": "def last_two(items):\n    return items[-2:]\n",
  "tests": '''
f = need("last_two")
check(f([1, 2, 3]) == [2, 3], "last_two([1, 2, 3]) should be [2, 3]")
check(f([5]) == [5], "last_two([5]) should be [5]")
check(f(["a", "b"]) == ["a", "b"], 'last_two(["a", "b"]) should be ["a", "b"]')
''',
  "hint": "A negative index counts from the end. items[-1] is the last item. A slice items[-2:] starts at the second from the end."},

 {"id": "d00c-sorted-desc", "lesson": "1.3", "level": "B", "title": "Sort without changing the original",
  "imports": "", "sig": "def sorted_desc(items):",
  "doc": "Return a new list with the items sorted from biggest to smallest. The list that was passed in must not change.",
  "solution": "def sorted_desc(items):\n    return sorted(items, reverse=True)\n",
  "tests": '''
f = need("sorted_desc")
data = [3, 1, 2]
res = f(data)
check(res == [3, 2, 1], "sorted_desc([3, 1, 2]) should be [3, 2, 1], but you got %r" % (res,))
check(data == [3, 1, 2], "You changed the list that was passed in. It should still be [3, 1, 2]. Remember: .sort() changes the list and returns None; sorted() makes a new one.")
''',
  "hint": "sorted(items, reverse=True) returns a new list. items.sort() changes the original and returns None."},

 # ------------------------------------------------------------------ Python core
 {"id": "d01-count-vowels", "lesson": "1.4", "level": "A", "title": "Loop and count",
  "imports": "", "sig": "def count_vowels(text):",
  "doc": "Return how many vowels (a, e, i, o, u) are in text. Capital letters count too.",
  "skeleton": 'def count_vowels(text):\n    total = 0\n    for ch in text.lower():\n        if ch ___ "aeiou":\n            total ___ 1\n    return total\n',
  "solution": 'def count_vowels(text):\n    total = 0\n    for ch in text.lower():\n        if ch in "aeiou":\n            total += 1\n    return total\n',
  "tests": '''
f = need("count_vowels")
check(f("hello") == 2, 'count_vowels("hello") should be 2')
check(f("") == 0, 'count_vowels("") should be 0')
check(f("XYZ") == 0, 'count_vowels("XYZ") should be 0')
check(f("AEIOU") == 5, 'count_vowels("AEIOU") should be 5 (capitals count)')
''',
  "hint": "Loop over the letters. Add 1 to a total each time the letter is in the string 'aeiou'. Lower-case the text first."},

 {"id": "d02-total-over", "lesson": "1.4", "level": "A", "title": "Sum with a condition",
  "imports": "", "sig": "def total_over(numbers, limit):",
  "doc": "Return the sum of the numbers that are bigger than limit.",
  "skeleton": "def total_over(numbers, limit):\n    total = 0\n    for n in numbers:\n        if n ___ limit:\n            total = total ___ n\n    return total\n",
  "solution": "def total_over(numbers, limit):\n    total = 0\n    for n in numbers:\n        if n > limit:\n            total = total + n\n    return total\n",
  "tests": '''
f = need("total_over")
check(f([1, 5, 10], 4) == 15, "total_over([1, 5, 10], 4) should be 15")
check(f([1, 2], 5) == 0, "total_over([1, 2], 5) should be 0")
check(f([], 0) == 0, "total_over([], 0) should be 0")
check(f([5, 5], 5) == 0, "5 is not bigger than 5, so total_over([5, 5], 5) should be 0")
''',
  "hint": "Start total at 0. For each number, if it is bigger than the limit, add it to the total."},

 {"id": "d03-first-negative", "lesson": "1.5", "level": "B", "title": "Find the first negative",
  "imports": "", "sig": "def first_negative(numbers):",
  "doc": "Return the index (position) of the first negative number. If there is none, return -1.",
  "solution": "def first_negative(numbers):\n    for i, n in enumerate(numbers):\n        if n < 0:\n            return i\n    return -1\n",
  "tests": '''
f = need("first_negative")
check(f([3, -1, -5]) == 1, "first_negative([3, -1, -5]) should be 1")
check(f([1, 2]) == -1, "first_negative([1, 2]) should be -1")
check(f([]) == -1, "first_negative([]) should be -1")
check(f([-2]) == 0, "first_negative([-2]) should be 0")
''',
  "hint": "enumerate(numbers) gives (position, value) pairs. Return the position as soon as you see a negative. Return -1 only after the loop."},

 {"id": "d04-word-counts", "lesson": "1.6", "level": "B", "title": "Count with a dictionary",
  "imports": "", "sig": "def word_counts(text):",
  "doc": "Return a dict that says how many times each word appears in text. Lower-case the words. Split on spaces.",
  "solution": "def word_counts(text):\n    counts = {}\n    for word in text.lower().split():\n        counts[word] = counts.get(word, 0) + 1\n    return counts\n",
  "tests": '''
f = need("word_counts")
check(f("a b a") == {"a": 2, "b": 1}, 'word_counts("a b a") should be {"a": 2, "b": 1}, but you got %r' % (f("a b a"),))
check(f("Go go GO") == {"go": 3}, 'word_counts("Go go GO") should be {"go": 3}')
check(f("") == {}, 'word_counts("") should be {}')
''',
  "hint": "counts[word] = counts.get(word, 0) + 1. The 0 is what you get for a word you have not seen yet."},

 {"id": "d05-squares-of-evens", "lesson": "1.7", "level": "B", "title": "A list comprehension",
  "imports": "", "sig": "def squares_of_evens(numbers):",
  "doc": "Return a list of the squares of the even numbers, in the same order. Use a list comprehension.",
  "solution": "def squares_of_evens(numbers):\n    return [n * n for n in numbers if n % 2 == 0]\n",
  "tests": '''
f = need("squares_of_evens")
check(f([1, 2, 3, 4]) == [4, 16], "squares_of_evens([1, 2, 3, 4]) should be [4, 16]")
check(f([1, 3]) == [], "squares_of_evens([1, 3]) should be []")
check(f([0, -2]) == [0, 4], "squares_of_evens([0, -2]) should be [0, 4]")
''',
  "hint": "[expression for item in items if condition]. An even number has n % 2 == 0."},

 {"id": "d06-invert", "lesson": "1.7", "level": "B", "title": "A dict comprehension",
  "imports": "", "sig": "def invert(d):",
  "doc": "Return a new dict that swaps keys and values. Assume every value appears only once.",
  "solution": "def invert(d):\n    return {v: k for k, v in d.items()}\n",
  "tests": '''
f = need("invert")
check(f({"a": 1, "b": 2}) == {1: "a", 2: "b"}, 'invert({"a": 1, "b": 2}) should be {1: "a", 2: "b"}')
check(f({}) == {}, "invert({}) should be {}")
''',
  "hint": "{new_key: new_value for k, v in d.items()}. Here the new key is v and the new value is k."},

 {"id": "d07-add-item", "lesson": "1.8", "level": "B", "title": "The mutable default trap",
  "imports": "", "sig": "def add_item(item, bucket=None):",
  "doc": "Put item at the end of bucket and return bucket. If no bucket is given, start a brand new empty list on every call (not one shared list).",
  "solution": "def add_item(item, bucket=None):\n    if bucket is None:\n        bucket = []\n    bucket.append(item)\n    return bucket\n",
  "tests": '''
f = need("add_item")
check(f(1) == [1], "add_item(1) should be [1]")
check(f(2) == [2], "add_item(2) should be [2]. A second call with no bucket must start a new list. Do not use bucket=[] as the default.")
mine = [1]
check(f(3, mine) == [1, 3], "add_item(3, [1]) should be [1, 3]")
check(mine == [1, 3], "The list you passed in should be the one that grows.")
''',
  "hint": "Default to None. Inside the function: if bucket is None, make a new list. Then append."},

 {"id": "d08-safe-int", "lesson": "1.10", "level": "B", "title": "try / except",
  "imports": "", "sig": "def safe_int(text, default=0):",
  "doc": "Return int(text). If text cannot be turned into a whole number (bad text, or None), return default instead.",
  "solution": "def safe_int(text, default=0):\n    try:\n        return int(text)\n    except (ValueError, TypeError):\n        return default\n",
  "tests": '''
f = need("safe_int")
check(f("12") == 12, 'safe_int("12") should be 12')
check(f("x") == 0, 'safe_int("x") should be 0')
check(f(None) == 0, "safe_int(None) should be 0. int(None) raises TypeError, not ValueError.")
check(f("x", -1) == -1, 'safe_int("x", -1) should be -1')
check(f("4.5") == 0, 'safe_int("4.5") should be 0 because int("4.5") fails')
''',
  "hint": "try: return int(text). Catch both ValueError (bad text) and TypeError (None) with except (ValueError, TypeError)."},

 {"id": "d09-read-rows", "lesson": "1.9", "level": "B", "title": "Read CSV text",
  "imports": "import csv\nimport io", "sig": "def read_rows(text):",
  "doc": "text is CSV text with a header row. Return a list of dicts, one per data row, using csv.DictReader.",
  "solution": "import csv\nimport io\n\n\ndef read_rows(text):\n    return list(csv.DictReader(io.StringIO(text)))\n",
  "tests": '''
f = need("read_rows")
rows = f("id,n\\nR1,3\\nR2,4\\n")
check(isinstance(rows, list) and len(rows) == 2, "You should get a list with 2 rows, but you got %r" % (rows,))
check(dict(rows[0]) == {"id": "R1", "n": "3"}, "The first row should be {'id': 'R1', 'n': '3'}, but you got %r" % (rows[0],))
check(dict(rows[1]) == {"id": "R2", "n": "4"}, "The second row should be {'id': 'R2', 'n': '4'}")
check(f("id,n\\n") == [], "A file with only a header should give []")
''',
  "hint": "csv.DictReader needs a file-like object. io.StringIO(text) turns text into one. Wrap the reader in list()."},

 {"id": "d10-total-n", "lesson": "1.9", "level": "C", "title": "Read JSON text",
  "imports": "import json", "sig": "def total_n(json_text):",
  "doc": "json_text is JSON text like '[{\"n\": 3}, {\"n\": 4}]'. Return the sum of the n values.",
  "solution": "import json\n\n\ndef total_n(json_text):\n    return sum(item[\"n\"] for item in json.loads(json_text))\n",
  "tests": '''
f = need("total_n")
check(f('[{"n": 3}, {"n": 4}]') == 7, 'total_n(\\'[{"n": 3}, {"n": 4}]\\') should be 7')
check(f("[]") == 0, 'total_n("[]") should be 0')
check(f('[{"n": 10, "x": 1}]') == 10, "Other keys must be ignored")
''',
  "hint": "json.loads(text) turns JSON text into Python lists and dicts. Then add up item['n'] for each item."},

 {"id": "d11-days-between", "lesson": "2.9", "level": "B", "title": "Days between two dates",
  "imports": "from datetime import datetime", "sig": "def days_between(a, b):",
  "doc": "a and b are dates as text, like '2025-01-06'. Return the number of whole days from a to b. The answer is negative if b is earlier than a.",
  "solution": "from datetime import datetime\n\n\ndef days_between(a, b):\n    fmt = \"%Y-%m-%d\"\n    return (datetime.strptime(b, fmt) - datetime.strptime(a, fmt)).days\n",
  "tests": '''
f = need("days_between")
check(f("2025-01-06", "2025-01-13") == 7, 'days_between("2025-01-06", "2025-01-13") should be 7')
check(f("2025-01-13", "2025-01-06") == -7, "It should be -7 when b is earlier")
check(f("2025-03-01", "2025-03-01") == 0, "The same day should give 0")
check(f("2025-02-27", "2025-03-02") == 3, "From 27 Feb to 2 Mar 2025 is 3 days")
''',
  "hint": "datetime.strptime(text, '%Y-%m-%d') turns text into a date. Subtract two dates and take .days."},

 {"id": "d12-week-start", "lesson": "2.9", "level": "C", "title": "Find the Monday",
  "imports": "from datetime import datetime, timedelta", "sig": "def week_start(day_text):",
  "doc": "Given a date as text like '2025-01-08', return the date of the Monday of that week, as text in the same form ('2025-01-06').",
  "solution": "from datetime import datetime, timedelta\n\n\ndef week_start(day_text):\n    d = datetime.strptime(day_text, \"%Y-%m-%d\")\n    return (d - timedelta(days=d.weekday())).strftime(\"%Y-%m-%d\")\n",
  "tests": '''
f = need("week_start")
check(f("2025-01-08") == "2025-01-06", 'week_start("2025-01-08") should be "2025-01-06" (a Wednesday)')
check(f("2025-01-06") == "2025-01-06", "A Monday should give itself")
check(f("2025-01-12") == "2025-01-06", "Sunday 12 Jan belongs to the week starting Monday 6 Jan")
check(f("2025-01-13") == "2025-01-13", "Monday 13 Jan should give itself")
''',
  "hint": "d.weekday() is 0 for Monday and 6 for Sunday. Subtract that many days with timedelta. Turn it back into text with strftime."},

 # ------------------------------------------------------------------ pandas
 {"id": "d13-select-urgent", "lesson": "3.2", "level": "A", "title": "A True/False mask",
  "imports": "import pandas as pd", "sig": "def select_urgent(df):",
  "doc": "Return only the rows where urgency is 'urgent'.",
  "skeleton": 'import pandas as pd\n\n\ndef select_urgent(df):\n    return df[df["urgency"] ___ "urgent"]\n',
  "solution": 'import pandas as pd\n\n\ndef select_urgent(df):\n    return df[df["urgency"] == "urgent"]\n',
  "tests": '''
f = need("select_urgent")
df = pd.DataFrame({"id": ["R1", "R2", "R3"], "urgency": ["urgent", "routine", "urgent"]})
res = f(df)
check(res["id"].tolist() == ["R1", "R3"], "You should get the rows R1 and R3, but you got %r" % (res["id"].tolist(),))
''',
  "hint": "A comparison like df['urgency'] == 'urgent' gives a mask. df[mask] keeps the True rows."},

 {"id": "d14-clean-text", "lesson": "3.2", "level": "B", "title": "Clean text columns",
  "imports": "import pandas as pd", "sig": "def clean_text(df):",
  "doc": "Return a COPY of df in which test_type has spaces removed from both ends and is Title Case, and urgency is lower case. The df that was passed in must not change.",
  "solution": 'import pandas as pd\n\n\ndef clean_text(df):\n    out = df.copy()\n    out["test_type"] = out["test_type"].str.strip().str.title()\n    out["urgency"] = out["urgency"].str.lower()\n    return out\n',
  "tests": '''
f = need("clean_text")
df = pd.DataFrame({"test_type": [" genome ", "EXOME"], "urgency": ["URGENT", "Routine"]})
res = f(df)
check(res["test_type"].tolist() == ["Genome", "Exome"], "test_type should be ['Genome', 'Exome'], but you got %r" % (res["test_type"].tolist(),))
check(res["urgency"].tolist() == ["urgent", "routine"], "urgency should be ['urgent', 'routine'], but you got %r" % (res["urgency"].tolist(),))
check(df["test_type"].tolist() == [" genome ", "EXOME"], "You changed the df that was passed in. Work on df.copy().")
''',
  "hint": "out = df.copy(). Then out['test_type'] = out['test_type'].str.strip().str.title(). Return out."},

 {"id": "d15-flag-bad-order", "lesson": "3.2", "level": "B", "title": "A mask from two date columns",
  "imports": "import pandas as pd", "sig": "def flag_bad_order(df):",
  "doc": "Return a True/False Series that is True for rows where the sample date is BEFORE the referred date. (Both columns are dates.)",
  "solution": 'import pandas as pd\n\n\ndef flag_bad_order(df):\n    return df["sample"] < df["referred"]\n',
  "tests": '''
f = need("flag_bad_order")
df = pd.DataFrame({"referred": pd.to_datetime(["2025-01-06", "2025-01-13"]), "sample": pd.to_datetime(["2025-01-08", "2025-01-12"])})
res = f(df)
check(list(res) == [False, True], "You should get [False, True], but you got %r" % (list(res),))
''',
  "hint": "Compare the two columns with <. The result is one True or False per row."},

 {"id": "d16-days-to-sample", "lesson": "3.1", "level": "B", "title": "Add a column from two dates",
  "imports": "import pandas as pd", "sig": "def add_days_to_sample(df):",
  "doc": "Return a copy of df with a new column days_to_sample: the whole days from referred to sample. (Both are date columns. A missing sample date gives a missing value.)",
  "solution": 'import pandas as pd\n\n\ndef add_days_to_sample(df):\n    out = df.copy()\n    out["days_to_sample"] = (out["sample"] - out["referred"]).dt.days\n    return out\n',
  "tests": '''
f = need("add_days_to_sample")
df = pd.DataFrame({"referred": pd.to_datetime(["2025-01-06", "2025-01-07"]), "sample": pd.to_datetime(["2025-01-08", None])})
res = f(df)
check("days_to_sample" in res.columns, "The result needs a column called days_to_sample")
vals = res["days_to_sample"].tolist()
check(vals[0] == 2, "The first row should be 2 days, but you got %r" % (vals[0],))
check(pd.isna(vals[1]), "A missing sample date should give a missing value")
check("days_to_sample" not in df.columns, "You changed the df that was passed in. Use a copy.")
''',
  "hint": "Subtract the two date columns, then .dt.days turns each gap into a whole number."},

 {"id": "d17-mean-by-urgency", "lesson": "3.3", "level": "B", "title": "groupby and mean",
  "imports": "import pandas as pd", "sig": "def mean_days_by_urgency(df):",
  "doc": "Return a dict of the mean days_to_report for each urgency, rounded to 1 place, like {'routine': 25.3, 'urgent': 13.0}. Missing values are skipped.",
  "solution": 'import pandas as pd\n\n\ndef mean_days_by_urgency(df):\n    return df.groupby("urgency")["days_to_report"].mean().round(1).to_dict()\n',
  "tests": '''
f = need("mean_days_by_urgency")
df = pd.DataFrame({"urgency": ["urgent", "routine", "routine", "urgent", "routine", "routine"], "days_to_report": [12, 30, 20, 14, None, 26]})
res = f(df)
check(res == {"routine": 25.3, "urgent": 13.0}, "You should get {'routine': 25.3, 'urgent': 13.0}, but you got %r" % (res,))
''',
  "hint": "df.groupby('urgency')['days_to_report'].mean(), then .round(1), then .to_dict()."},

 {"id": "d18-rows-by-type", "lesson": "3.3", "level": "B", "title": "size, not count",
  "imports": "import pandas as pd", "sig": "def rows_by_type(df):",
  "doc": "Return a dict of how many ROWS each test_type has, like {'Exome': 3}. A row counts even if its days_to_report is missing.",
  "solution": 'import pandas as pd\n\n\ndef rows_by_type(df):\n    return df.groupby("test_type").size().to_dict()\n',
  "tests": '''
f = need("rows_by_type")
df = pd.DataFrame({"test_type": ["Genome", "Exome", "Panel", "Exome", "Genome", "Exome"], "days_to_report": [12, 30, 20, 14, None, 26]})
res = f(df)
check(res == {"Exome": 3, "Genome": 2, "Panel": 1}, "You should get {'Exome': 3, 'Genome': 2, 'Panel': 1}, but you got %r. Hint: Genome has a row with a missing value." % (res,))
''',
  "hint": "size() counts rows. count() on one column skips its missing values."},

 {"id": "d19-summary-table", "lesson": "3.3", "level": "B", "title": "Named aggregation",
  "imports": "import pandas as pd", "sig": "def summary_table(df):",
  "doc": "Return a DataFrame with one row per test_type and exactly these columns: test_type, n (the number of referral_id values), mean_days (the mean of days_to_report). test_type must be a normal column, not the index.",
  "solution": 'import pandas as pd\n\n\ndef summary_table(df):\n    return df.groupby("test_type").agg(\n        n=("referral_id", "count"),\n        mean_days=("days_to_report", "mean"),\n    ).reset_index()\n',
  "tests": '''
f = need("summary_table")
df = pd.DataFrame({"referral_id": ["R1", "R2", "R3", "R4", "R5", "R6"], "test_type": ["Genome", "Exome", "Panel", "Exome", "Genome", "Exome"], "days_to_report": [12, 30, 20, 14, None, 26]})
res = f(df)
check(list(res.columns) == ["test_type", "n", "mean_days"], "The columns should be ['test_type', 'n', 'mean_days'], but you got %r" % (list(res.columns),))
rows = res.round(2).values.tolist()
check(rows == [["Exome", 3, 23.33], ["Genome", 2, 12.0], ["Panel", 1, 20.0]], "The rows should be [['Exome', 3, 23.33], ['Genome', 2, 12.0], ['Panel', 1, 20.0]], but you got %r" % (rows,))
''',
  "hint": "df.groupby('test_type').agg(n=('referral_id', 'count'), mean_days=('days_to_report', 'mean')).reset_index()"},

 {"id": "d20-group-mean", "lesson": "3.3", "level": "B", "title": "transform",
  "imports": "import pandas as pd", "sig": "def add_group_mean(df):",
  "doc": "Return a copy of df with a new column type_mean: for each row, the mean days_to_report of that row's test_type.",
  "solution": 'import pandas as pd\n\n\ndef add_group_mean(df):\n    out = df.copy()\n    out["type_mean"] = out.groupby("test_type")["days_to_report"].transform("mean")\n    return out\n',
  "tests": '''
f = need("add_group_mean")
df = pd.DataFrame({"test_type": ["Exome", "Genome", "Exome"], "days_to_report": [30, 12, 20]})
res = f(df)
check("type_mean" in res.columns, "The result needs a column called type_mean")
check(res["type_mean"].tolist() == [25.0, 12.0, 25.0], "type_mean should be [25.0, 12.0, 25.0], but you got %r" % (res["type_mean"].tolist(),))
check(len(res) == 3, "You should keep all 3 rows, one per original row (use transform, not agg)")
''',
  "hint": "transform gives one value per original row. groupby('test_type')['days_to_report'].transform('mean')."},

 {"id": "d21-share-late", "lesson": "3.3", "level": "B", "title": "A share, with missing values",
  "imports": "import pandas as pd", "sig": "def share_late(df, limit):",
  "doc": "Return the share (from 0 to 1, rounded to 2 places) of rows whose days_to_report is above limit. Count only rows that HAVE a days_to_report.",
  "solution": 'import pandas as pd\n\n\ndef share_late(df, limit):\n    days = df["days_to_report"].dropna()\n    return round((days > limit).mean(), 2)\n',
  "tests": '''
f = need("share_late")
df = pd.DataFrame({"days_to_report": [10, 20, 30, None]})
res = f(df, 15)
check(res == 0.67, "With limit 15, 2 of the 3 filled rows are late, so the answer is 0.67, but you got %r. The missing row must not count." % (res,))
check(f(pd.DataFrame({"days_to_report": [1, 2]}), 5) == 0.0, "Nothing is above 5, so the answer should be 0.0")
''',
  "hint": "Drop the missing values first. Then (days > limit).mean() is the share of True values."},

 {"id": "d22-dedupe", "lesson": "3.2", "level": "B", "title": "Remove exact duplicates",
  "imports": "import pandas as pd", "sig": "def dedupe(df):",
  "doc": "Return a pair (clean, n_removed): df without exact duplicate rows (keep the first of each), and how many rows were removed.",
  "solution": 'import pandas as pd\n\n\ndef dedupe(df):\n    clean = df.drop_duplicates()\n    return clean, len(df) - len(clean)\n',
  "tests": '''
f = need("dedupe")
df = pd.DataFrame({"id": ["R1", "R2", "R1", "R3", "R2"], "n": [1, 2, 1, 3, 2]})
clean, removed = f(df)
check(clean["id"].tolist() == ["R1", "R2", "R3"], "clean should keep R1, R2, R3 in order, but you got %r" % (clean["id"].tolist(),))
check(removed == 2, "2 rows were removed, but you returned %r" % (removed,))
check(len(df) == 5, "You changed the df that was passed in")
''',
  "hint": "df.drop_duplicates() returns a new frame. The number removed is len(df) - len(clean)."},

 {"id": "d23-checked-merge", "lesson": "3.4", "level": "C", "title": "A merge that checks itself",
  "imports": "import pandas as pd", "sig": "def checked_merge(ref, cap):",
  "doc": "ref and cap both have a week column. Return ref merged with cap on week, keeping EVERY row of ref. If cap has the same week twice, it must raise pandas' MergeError instead of quietly adding rows.",
  "solution": 'import pandas as pd\n\n\ndef checked_merge(ref, cap):\n    return ref.merge(cap, on="week", how="left", validate="one_to_one")\n',
  "tests": '''
f = need("checked_merge")
ref = pd.DataFrame({"week": [1, 2, 3, 4], "referrals": [101, 99, 90, 85]})
cap = pd.DataFrame({"week": [1, 2, 3], "capacity": [95, 95, 100]})
res = f(ref, cap)
check(len(res) == 4, "You should keep all 4 referral weeks, but you got %d rows" % len(res))
check(int(res["capacity"].isna().sum()) == 1, "Week 4 has no capacity, so exactly 1 capacity should be missing")
dup = pd.DataFrame({"week": [1, 1, 2, 3], "capacity": [95, 95, 95, 100]})
try:
    f(ref, dup)
except pd.errors.MergeError:
    pass
else:
    raise AssertionError("A repeated week in cap should raise MergeError. Use validate='one_to_one' in the merge.")
''',
  "hint": "ref.merge(cap, on='week', how='left', validate='one_to_one')."},

 {"id": "d24-weeks-over", "lesson": "3.4", "level": "B", "title": "Merge, then compare",
  "imports": "import pandas as pd", "sig": "def weeks_over(ref, cap):",
  "doc": "ref has week and referrals. cap has week and capacity. Return a list of the week values where referrals are above capacity. A week with no capacity row is not counted.",
  "solution": 'import pandas as pd\n\n\ndef weeks_over(ref, cap):\n    both = ref.merge(cap, on="week", how="left")\n    return both.loc[both["referrals"] > both["capacity"], "week"].tolist()\n',
  "tests": '''
f = need("weeks_over")
ref = pd.DataFrame({"week": [1, 2, 3, 4], "referrals": [80, 104, 97, 110]})
cap = pd.DataFrame({"week": [1, 2, 3], "capacity": [100, 100, 100]})
res = f(ref, cap)
check(res == [2], "Only week 2 is over capacity (104 > 100). Week 4 has no capacity. You got %r" % (res,))
check(f(ref, pd.DataFrame({"week": [1, 2, 3, 4], "capacity": [10, 10, 200, 200]})) == [1, 2], "With those capacities, weeks 1 and 2 are over")
''',
  "hint": "Left merge on week. Then df.loc[mask, 'week'].tolist(). A comparison with a missing value is False, so it drops out by itself."},

 {"id": "d25-add-naive", "lesson": "3.5", "level": "B", "title": "Last week's value",
  "imports": "import pandas as pd", "sig": "def add_naive(df):",
  "doc": "Return a copy of df sorted by wk (oldest first), with a new column naive: the referrals of the week before. The first week has no value.",
  "solution": 'import pandas as pd\n\n\ndef add_naive(df):\n    out = df.sort_values("wk").copy()\n    out["naive"] = out["referrals"].shift(1)\n    return out\n',
  "tests": '''
f = need("add_naive")
df = pd.DataFrame({"wk": [3, 1, 2], "referrals": [90, 100, 120]})
res = f(df)
check(res["wk"].tolist() == [1, 2, 3], "The result should be sorted by wk, but wk is %r" % (res["wk"].tolist(),))
vals = res["naive"].tolist()
check(pd.isna(vals[0]) and vals[1:] == [100.0, 120.0], "naive should be [nan, 100.0, 120.0], but you got %r. Sort BEFORE you shift." % (vals,))
''',
  "hint": "Sort first: df.sort_values('wk'). Then out['referrals'].shift(1)."},

 {"id": "d26-add-avg3", "lesson": "3.5", "level": "C", "title": "A forecast that does not peek",
  "imports": "import pandas as pd", "sig": "def add_avg3(df):",
  "doc": "Return a copy of df sorted by wk with a new column avg3: the mean of the THREE weeks before each week (never including the week itself). The first three weeks have no value.",
  "solution": 'import pandas as pd\n\n\ndef add_avg3(df):\n    out = df.sort_values("wk").copy()\n    out["avg3"] = out["referrals"].shift(1).rolling(3).mean()\n    return out\n',
  "tests": '''
f = need("add_avg3")
df = pd.DataFrame({"wk": [1, 2, 3, 4, 5], "referrals": [100, 120, 90, 110, 104]})
res = f(df)
vals = res["avg3"].round(1).tolist()
check(all(pd.isna(v) for v in vals[:3]), "The first three weeks should be missing, but you got %r" % (vals,))
check(vals[3:] == [103.3, 106.7], "Week 4 should be 103.3 (mean of 100, 120, 90) and week 5 106.7, but you got %r" % (vals[3:],))
df2 = df.copy()
df2.loc[4, "referrals"] = 9999
check(f(df2)["avg3"].iloc[-1] == res["avg3"].iloc[-1], "LEAK: changing week 5's real number changed week 5's forecast. Use shift(1) before rolling.")
''',
  "hint": "shift(1) first, then rolling(3).mean(). Without the shift, the week is in its own average."},

 {"id": "d27-add-seasonal", "lesson": "3.6", "level": "B", "title": "Same point, one cycle ago",
  "imports": "import pandas as pd", "sig": "def add_seasonal(df, season):",
  "doc": "Return a copy of df sorted by wk with a new column seasonal: the referrals from `season` weeks earlier. Weeks that have no value that far back stay missing.",
  "solution": 'import pandas as pd\n\n\ndef add_seasonal(df, season):\n    out = df.sort_values("wk").copy()\n    out["seasonal"] = out["referrals"].shift(season)\n    return out\n',
  "tests": '''
f = need("add_seasonal")
df = pd.DataFrame({"wk": [1, 2, 3, 4, 5, 6], "referrals": [10, 20, 30, 40, 11, 21]})
res = f(df, 4)
vals = res["seasonal"].tolist()
check(all(pd.isna(v) for v in vals[:4]) and vals[4:] == [10.0, 20.0], "With season 4, weeks 5 and 6 should be 10.0 and 20.0, and weeks 1 to 4 missing, but you got %r" % (vals,))
res52 = f(df, 52)
check(res52["seasonal"].isna().all(), "With season 52 and only 6 weeks, every value should be missing")
''',
  "hint": "shift(season) moves the column down by that many rows."},

 {"id": "d28-running-total", "lesson": "3.5", "level": "B", "title": "A running total",
  "imports": "import pandas as pd", "sig": "def add_running_total(df):",
  "doc": "Return a copy of df sorted by wk with a new column running: the total of referrals so far (including this week).",
  "solution": 'import pandas as pd\n\n\ndef add_running_total(df):\n    out = df.sort_values("wk").copy()\n    out["running"] = out["referrals"].cumsum()\n    return out\n',
  "tests": '''
f = need("add_running_total")
df = pd.DataFrame({"wk": [2, 1, 3], "referrals": [99, 101, 90]})
res = f(df)
check(res["running"].tolist() == [101, 200, 290], "running should be [101, 200, 290], but you got %r. Sort by wk first." % (res["running"].tolist(),))
''',
  "hint": "Sort by wk, then cumsum() on the referrals column."},

 {"id": "d29-mae", "lesson": "3.7", "level": "B", "title": "Mean absolute error",
  "imports": "import pandas as pd", "sig": "def mae(actual, forecast):",
  "doc": "actual and forecast are pandas Series of the same length. Return the mean absolute error, using only the rows where BOTH have a value.",
  "solution": 'import pandas as pd\n\n\ndef mae(actual, forecast):\n    err = (actual - forecast).abs()\n    return err.mean()\n',
  "tests": '''
f = need("mae")
a = pd.Series([100, 120, 90])
b = pd.Series([110, 100, 85])
check(abs(f(a, b) - 35 / 3) < 1e-9, "mae should be 11.666..., but you got %r" % (f(a, b),))
c = pd.Series([None, 100.0, 80.0])
check(abs(f(a, c) - 15.0) < 1e-9, "Rows where the forecast is missing must be skipped. mae should be 15.0, but you got %r" % (f(a, c),))
''',
  "hint": "(actual - forecast).abs().mean(). A missing value makes that row's error missing, and mean() skips it."},

 {"id": "d30-bias", "lesson": "3.7", "level": "B", "title": "Which way do you miss?",
  "imports": "import pandas as pd", "sig": "def bias(actual, forecast):",
  "doc": "Return the mean of (forecast - actual) over the rows where both exist. A negative answer means the forecast is usually too low.",
  "solution": 'import pandas as pd\n\n\ndef bias(actual, forecast):\n    return (forecast - actual).mean()\n',
  "tests": '''
f = need("bias")
a = pd.Series([100, 120, 90])
b = pd.Series([110, 100, 85])
check(abs(f(a, b) - (-5.0)) < 1e-9, "bias should be -5.0 (errors +10, -20, -5), but you got %r" % (f(a, b),))
check(abs(f(a, pd.Series([None, 100.0, 80.0])) - (-15.0)) < 1e-9, "Rows with a missing forecast must be skipped. bias should be -15.0")
''',
  "hint": "Forecast minus actual (in that order), then mean()."},

 {"id": "d31-split-by-time", "lesson": "3.7", "level": "B", "title": "Cut by time, never shuffle",
  "imports": "import pandas as pd", "sig": "def split_by_time(df, n_test):",
  "doc": "Sort df by wk (oldest first). Return a pair (history, test) where test is the LAST n_test rows and history is everything before them. Do not shuffle.",
  "solution": 'import pandas as pd\n\n\ndef split_by_time(df, n_test):\n    ordered = df.sort_values("wk")\n    return ordered.iloc[:-n_test], ordered.iloc[-n_test:]\n',
  "tests": '''
f = need("split_by_time")
df = pd.DataFrame({"wk": [5, 1, 3, 2, 4, 6], "referrals": [1, 2, 3, 4, 5, 6]})
history, test = f(df, 2)
check(test["wk"].tolist() == [5, 6], "test should be weeks [5, 6], but you got %r" % (test["wk"].tolist(),))
check(history["wk"].tolist() == [1, 2, 3, 4], "history should be weeks [1, 2, 3, 4], but you got %r" % (history["wk"].tolist(),))
''',
  "hint": "Sort first. Then .iloc[:-n_test] is everything but the last n_test rows, and .iloc[-n_test:] is the last n_test rows."},

 {"id": "d32-compare-methods", "lesson": "3.7", "level": "C", "title": "Fair comparison table",
  "imports": "import pandas as pd", "sig": "def compare_methods(df, methods):",
  "doc": "df has a column called referrals (the real numbers) and one forecast column for each name in methods. Keep only the rows where referrals AND every method have a value. Return a DataFrame with the columns method, mae and bias (forecast minus actual), one row per method in the order given, rounded to 2 places.",
  "solution": 'import pandas as pd\n\n\ndef compare_methods(df, methods):\n    usable = df.dropna(subset=["referrals"] + list(methods))\n    rows = []\n    for m in methods:\n        err = usable[m] - usable["referrals"]\n        rows.append({"method": m, "mae": err.abs().mean(), "bias": err.mean()})\n    return pd.DataFrame(rows).round(2)\n',
  "tests": '''
f = need("compare_methods")
nan = float("nan")
df = pd.DataFrame({
    "referrals": [100, 120, 90, 110, 104, 126, 94, 116, 108, 130, 98, 120],
    "naive": [nan, 100, 120, 90, 110, 104, 126, 94, 116, 108, 130, 98],
    "avg3": [nan, nan, nan, 103.33333333333333, 106.66666666666667, 101.33333333333333, 113.33333333333333, 108.0, 112.0, 106.0, 118.0, 112.0],
    "seasonal": [nan, nan, nan, nan, 100, 120, 90, 110, 104, 126, 94, 116],
})
res = f(df, ["naive", "avg3", "seasonal"])
check(list(res.columns) == ["method", "mae", "bias"], "The columns should be ['method', 'mae', 'bias'], but you got %r" % (list(res.columns),))
check(res["method"].tolist() == ["naive", "avg3", "seasonal"], "The methods should come in the order given")
check(res["mae"].tolist() == [20.75, 13.83, 4.5], "mae should be [20.75, 13.83, 4.5], but you got %r. Score every method on the SAME rows (drop rows where any is missing)." % (res["mae"].tolist(),))
check(res["bias"].tolist() == [-1.25, -2.33, -4.5], "bias should be [-1.25, -2.33, -4.5], but you got %r" % (res["bias"].tolist(),))
''',
  "hint": "df.dropna(subset=[...]) first. Then for each method: err = usable[m] - usable['referrals']; mae is err.abs().mean(); bias is err.mean(). Build a list of dicts, then pd.DataFrame(rows).round(2)."},

 {"id": "d33-forecast-report", "lesson": "3.7", "level": "C", "title": "The whole pipeline from text",
  "imports": "import io\nimport pandas as pd", "sig": "def forecast_report(text):",
  "doc": "text is CSV text with the columns wk and referrals. Sort by wk. Make three forecast columns: naive (last week), avg3 (mean of the 3 weeks before) and seasonal (4 weeks earlier). Score them on the SAME rows. Return a DataFrame with the columns method, mae and bias (forecast minus actual), rounded to 2 places, in the order naive, avg3, seasonal.",
  "solution": 'import io\nimport pandas as pd\n\n\ndef forecast_report(text):\n    df = pd.read_csv(io.StringIO(text)).sort_values("wk")\n    df["naive"] = df["referrals"].shift(1)\n    df["avg3"] = df["referrals"].shift(1).rolling(3).mean()\n    df["seasonal"] = df["referrals"].shift(4)\n    usable = df.dropna()\n    rows = []\n    for m in ["naive", "avg3", "seasonal"]:\n        err = usable[m] - usable["referrals"]\n        rows.append({"method": m, "mae": err.abs().mean(), "bias": err.mean()})\n    return pd.DataFrame(rows).round(2)\n',
  "tests": '''
f = need("forecast_report")
text = "wk,referrals\\n1,100\\n2,120\\n3,90\\n4,110\\n5,104\\n6,126\\n7,94\\n8,116\\n9,108\\n10,130\\n11,98\\n12,120\\n"
res = f(text)
check(list(res.columns) == ["method", "mae", "bias"], "The columns should be ['method', 'mae', 'bias'], but you got %r" % (list(res.columns),))
check(res["method"].tolist() == ["naive", "avg3", "seasonal"], "The methods should be naive, avg3, seasonal in that order")
check(res["mae"].tolist() == [20.75, 13.83, 4.5], "mae should be [20.75, 13.83, 4.5], but you got %r" % (res["mae"].tolist(),))
check(res["bias"].tolist() == [-1.25, -2.33, -4.5], "bias should be [-1.25, -2.33, -4.5], but you got %r" % (res["bias"].tolist(),))
shuffled = "wk,referrals\\n3,90\\n1,100\\n2,120\\n4,110\\n5,104\\n6,126\\n7,94\\n8,116\\n9,108\\n10,130\\n11,98\\n12,120\\n"
check(f(shuffled)["mae"].tolist() == [20.75, 13.83, 4.5], "Rows in the wrong order must give the same answer. Sort by wk before you shift.")
''',
  "hint": "Read with pd.read_csv(io.StringIO(text)), sort_values('wk'), build the three columns with shift and rolling, dropna(), then loop over the three names to build the table."},
]
