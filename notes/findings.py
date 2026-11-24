"""STEP 1: what is in the raw data?  Replace each None with the answer you found.

Look at data/referrals_raw.csv and data/capacity_weekly.csv. Use SQL (python run_sql.py) or pandas.
Run:  python check.py 1
"""
rows_in_file = None                       # data rows in referrals_raw.csv (not counting the header line)
exact_duplicate_rows = None               # rows that are an exact copy of an earlier row
distinct_referral_ids = None              # different values of referral_id
first_referred_date = None                # the earliest referred_date, as text 'YYYY-MM-DD'
last_referred_date = None                 # the latest referred_date, as text 'YYYY-MM-DD'
rows_with_messy_test_type = None          # rows whose test_type is not EXACTLY 'Rare disease', 'Cancer panel' or 'Rapid'
rows_reported_before_sequenced = None     # after removing exact duplicates: reported_date earlier than sequenced_date
rows_without_sample_received_date = None  # after removing exact duplicates: sample_received_date is empty
weeks_in_capacity_file = None             # rows in capacity_weekly.csv
lowest_weekly_capacity = None             # the smallest sequencing_capacity
