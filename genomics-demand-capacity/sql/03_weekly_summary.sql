/*
    One row per week: demand, work done, capacity, utilisation, backlog and a 4-week average.
    Backlog = samples that have arrived but have not been sequenced by the end of the week.
    Same measures as dcap/metrics.py (weekly_table).
*/

CREATE OR ALTER VIEW dbo.vw_WeeklySummary
AS
WITH Referred AS (
    SELECT r.ReferredWeek AS WeekStart, COUNT(*) AS Referrals
    FROM dbo.Referrals AS r
    GROUP BY r.ReferredWeek
),
Received AS (
    SELECT r.SampleReceivedWeek AS WeekStart, COUNT(*) AS SamplesReceived
    FROM dbo.Referrals AS r
    WHERE r.SampleReceivedDate IS NOT NULL
    GROUP BY r.SampleReceivedWeek
),
Sequenced AS (
    SELECT r.SequencedWeek AS WeekStart, COUNT(*) AS Sequenced
    FROM dbo.Referrals AS r
    WHERE r.SequencedDate IS NOT NULL
    GROUP BY r.SequencedWeek
),
Reported AS (
    SELECT r.ReportedWeek AS WeekStart, COUNT(*) AS Reported
    FROM dbo.Referrals AS r
    WHERE r.ReportedDate IS NOT NULL
    GROUP BY r.ReportedWeek
),
Weekly AS (
    SELECT
        c.WeekStart,
        COALESCE(rf.Referrals, 0)       AS Referrals,
        COALESCE(rc.SamplesReceived, 0) AS SamplesReceived,
        COALESCE(sq.Sequenced, 0)       AS Sequenced,
        COALESCE(rp.Reported, 0)        AS Reported,
        c.SequencingCapacity            AS Capacity
    FROM dbo.CapacityWeekly AS c
    LEFT JOIN Referred  AS rf ON rf.WeekStart = c.WeekStart
    LEFT JOIN Received  AS rc ON rc.WeekStart = c.WeekStart
    LEFT JOIN Sequenced AS sq ON sq.WeekStart = c.WeekStart
    LEFT JOIN Reported  AS rp ON rp.WeekStart = c.WeekStart
    -- 78 weeks of history. The capacity file also holds 12 planned weeks after that.
    WHERE c.WeekStart < DATEADD(WEEK, 78, (SELECT MIN(c2.WeekStart) FROM dbo.CapacityWeekly AS c2))
)
SELECT
    w.WeekStart,
    w.Referrals,
    w.SamplesReceived,
    w.Sequenced,
    w.Reported,
    w.Capacity,
    ROUND(CAST(w.Sequenced AS DECIMAL(9, 3)) / w.Capacity, 3) AS Utilisation,
    SUM(w.SamplesReceived) OVER (ORDER BY w.WeekStart ROWS UNBOUNDED PRECEDING)
      - SUM(w.Sequenced)   OVER (ORDER BY w.WeekStart ROWS UNBOUNDED PRECEDING)  AS BacklogEnd,
    CASE
        WHEN COUNT(*) OVER (ORDER BY w.WeekStart ROWS BETWEEN 3 PRECEDING AND CURRENT ROW) = 4
        THEN ROUND(AVG(CAST(w.Referrals AS DECIMAL(9, 2)))
                   OVER (ORDER BY w.WeekStart ROWS BETWEEN 3 PRECEDING AND CURRENT ROW), 1)
    END AS Referrals4WkAvg        -- NULL for the first three weeks, which have fewer than 4 weeks behind them
FROM Weekly AS w;
GO

SELECT * FROM dbo.vw_WeeklySummary ORDER BY WeekStart;
