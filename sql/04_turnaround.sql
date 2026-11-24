/*
    STEP 4 (SQL): turnaround against a target.      WRITE THIS FILE.

    The targets are ASSUMPTIONS for this exercise, not NHS standards: urgent 14 days, routine 42 days.

    Part 1. A view  dbo.vw_EligibleForTarget  with one row per ELIGIBLE referral and these columns:
        Priority, TargetDays, ReferralMonth (the first day of the referral month), DaysToReport
      - DaysToReport = days from ReferredDate to ReportedDate. NULL if not reported yet.
      - Eligible = old enough to have met its target by the end of the data:
            ReferredDate <= DataEnd - TargetDays
        where DataEnd = the first ReferredDate in dbo.Referrals + 78 weeks.
        (Without this rule, recent referrals look late only because they have not finished.)

    Part 2. A SELECT from the view, one row per ReferralMonth and Priority, with columns:
        ReferralMonth, Priority, Referrals (count), PctWithinTarget (0 to 100, 1 decimal)
      A referral is within target when DaysToReport <= TargetDays. Not reported = NOT within target.
      Order: urgent first, then routine; months in date order.

    Part 3. A second SELECT with columns:
        ReferralMonth, Priority, MedianDays, P90Days
      Use PERCENTILE_CONT(0.5) and PERCENTILE_CONT(0.9) ... WITHIN GROUP (ORDER BY DaysToReport) OVER (PARTITION BY ...).
      Rows not yet reported have no DaysToReport and are left out of the percentiles automatically.
      Same ordering as Part 2.

    Run:  python check.py 4
*/
