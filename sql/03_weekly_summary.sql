/*
    STEP 3 (SQL): one row per week.      WRITE THIS FILE.

    Make a view  dbo.vw_WeeklySummary  with these columns:
        WeekStart        the Monday of the week
        Referrals        referrals made that week            (0 if none)
        SamplesReceived  samples that arrived that week      (0 if none)
        Sequenced        samples sequenced that week         (0 if none)
        Reported         results reported that week          (0 if none)
        Capacity         SequencingCapacity for that week
        Utilisation      Sequenced / Capacity, rounded to 3 decimals
        BacklogEnd       samples received so far MINUS samples sequenced so far, at the end of the week
        Referrals4WkAvg  average Referrals over this week and the 3 before it, 1 decimal.
                         NULL for the first 3 weeks.

    Facts you need:
      - dbo.Referrals has week columns: ReferredWeek, SampleReceivedWeek, SequencedWeek, ReportedWeek
        (the Monday of each date; 01_create_tables.sql made them).
      - dbo.CapacityWeekly has WeekStart and SequencingCapacity for 90 weeks:
        78 weeks of history, then 12 planned weeks. The view must show ONLY the first 78.
      - A week with no events must still appear, with 0.

    Last line of the file:  SELECT * FROM dbo.vw_WeeklySummary ORDER BY WeekStart;
    Run:  python check.py 3
*/
