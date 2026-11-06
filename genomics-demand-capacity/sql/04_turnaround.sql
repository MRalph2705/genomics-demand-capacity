/*
    Turnaround against an ASSUMED target, by month of referral and priority.
    The targets are assumptions for this exercise, not NHS standards.
    A referral only counts when it is old enough to have met its target by the end of the data.
    Without that rule, recent referrals look late only because they have not finished yet.
*/

CREATE OR ALTER VIEW dbo.vw_EligibleForTarget
AS
WITH Params AS (
    SELECT DATEADD(WEEK, 78, MIN(r.ReferredDate)) AS DataEnd
    FROM dbo.Referrals AS r
),
Targets AS (
    SELECT 'urgent' AS Priority, 14 AS TargetDays
    UNION ALL
    SELECT 'routine', 42
)
SELECT
    r.Priority,
    t.TargetDays,
    DATEFROMPARTS(YEAR(r.ReferredDate), MONTH(r.ReferredDate), 1) AS ReferralMonth,
    DATEDIFF(DAY, r.ReferredDate, r.ReportedDate)                 AS DaysToReport    -- NULL when not reported yet
FROM dbo.Referrals AS r
INNER JOIN Targets AS t ON t.Priority = r.Priority
CROSS JOIN Params  AS p
WHERE r.ReferredDate <= DATEADD(DAY, -t.TargetDays, p.DataEnd);
GO

-- 1. Share reported within target.
SELECT
    e.ReferralMonth,
    e.Priority,
    COUNT(*) AS Referrals,
    ROUND(100.0 * SUM(CASE WHEN e.DaysToReport <= e.TargetDays THEN 1 ELSE 0 END) / COUNT(*), 1) AS PctWithinTarget
FROM dbo.vw_EligibleForTarget AS e
GROUP BY e.ReferralMonth, e.Priority
ORDER BY e.Priority DESC, e.ReferralMonth;      -- DESC puts 'urgent' before 'routine'

-- 2. Median and 90th percentile of the days to report (reported referrals only).
--    PERCENTILE_CONT needs OVER, so DISTINCT removes the repeated rows.
SELECT DISTINCT
    e.ReferralMonth,
    e.Priority,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY e.DaysToReport)
        OVER (PARTITION BY e.Priority, e.ReferralMonth) AS MedianDays,
    PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY e.DaysToReport)
        OVER (PARTITION BY e.Priority, e.ReferralMonth) AS P90Days
FROM dbo.vw_EligibleForTarget AS e
ORDER BY e.Priority DESC, e.ReferralMonth;
