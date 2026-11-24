/*
    WORKED EXAMPLE (a different subject): the library loans, in T-SQL.
    Same patterns as the genomics project. Run it:   python guide/examples/run_library_sql.py
    Read it, close it, then write your own for the genomics tables. Do not copy and paste.
*/

-- Pattern 1: type the text, standardise, keep one row per id, give each bad row ONE reason.
CREATE OR ALTER VIEW dbo.vw_LoansChecked
AS
WITH Typed AS (
    SELECT
        LTRIM(RTRIM(l.LoanID))                               AS LoanID,
        TRY_CONVERT(DATE, NULLIF(l.Borrowed, ''))            AS Borrowed,
        CASE LOWER(LTRIM(RTRIM(l.ItemType)))
            WHEN 'book' THEN 'Book'
            WHEN 'dvd'  THEN 'DVD'
        END                                                  AS ItemType,          -- NULL when unknown
        LOWER(LTRIM(RTRIM(l.MemberType)))                    AS MemberType,
        TRY_CONVERT(DATE, NULLIF(l.Returned, ''))            AS Returned
    FROM dbo.Loans_Raw AS l
),
Numbered AS (
    SELECT t.*, ROW_NUMBER() OVER (PARTITION BY t.LoanID ORDER BY t.Borrowed, t.Returned) AS RowInId
    FROM Typed AS t
)
SELECT
    n.LoanID, n.Borrowed, n.ItemType, n.MemberType, n.Returned,
    CASE                                                     -- the FIRST WHEN that is true wins
        WHEN n.ItemType IS NULL                              THEN 'unknown item_type'
        WHEN n.MemberType NOT IN ('adult', 'child', 'teen')  THEN 'unknown member_type'
        WHEN n.Borrowed IS NULL                              THEN 'missing borrowed date'
        WHEN n.Returned < n.Borrowed                         THEN 'returned before borrowed'
    END AS RejectReason
FROM Numbered AS n
WHERE n.RowInId = 1;
GO

SELECT n.RejectReason, COUNT(*) AS Loans
FROM dbo.vw_LoansChecked AS n
WHERE n.RejectReason IS NOT NULL
GROUP BY n.RejectReason
ORDER BY n.RejectReason;
GO

-- Pattern 2: every week must appear (start from the calendar), 0 when nothing happened, running total.
CREATE OR ALTER VIEW dbo.vw_WeeklyLoans
AS
WITH Borrowed AS (
    SELECT c.BorrowedWeek AS WeekStart, COUNT(*) AS Borrowed
    FROM dbo.LoansClean AS c
    GROUP BY c.BorrowedWeek
),
Returned AS (
    SELECT c.ReturnedWeek AS WeekStart, COUNT(*) AS Returned
    FROM dbo.LoansClean AS c
    WHERE c.Returned IS NOT NULL
    GROUP BY c.ReturnedWeek
),
Weekly AS (
    SELECT k.WeekStart, COALESCE(b.Borrowed, 0) AS Borrowed, COALESCE(r.Returned, 0) AS Returned
    FROM dbo.Calendar AS k
    LEFT JOIN Borrowed AS b ON b.WeekStart = k.WeekStart
    LEFT JOIN Returned AS r ON r.WeekStart = k.WeekStart
)
SELECT
    w.WeekStart, w.Borrowed, w.Returned,
    SUM(w.Borrowed) OVER (ORDER BY w.WeekStart ROWS UNBOUNDED PRECEDING)
      - SUM(w.Returned) OVER (ORDER BY w.WeekStart ROWS UNBOUNDED PRECEDING) AS ItemsOut,
    CASE WHEN COUNT(*) OVER (ORDER BY w.WeekStart ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) = 3
         THEN ROUND(AVG(CAST(w.Borrowed AS DECIMAL(9, 2))) OVER (ORDER BY w.WeekStart ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 1)
    END AS Borrowed3WkAvg
FROM Weekly AS w;
GO
SELECT * FROM dbo.vw_WeeklyLoans ORDER BY WeekStart;
GO

-- Pattern 3: only loans old enough to be judged; share on time; median.
CREATE OR ALTER VIEW dbo.vw_Judgeable
AS
WITH Rules AS (
    SELECT 'Book' AS ItemType, 14 AS LoanDays
    UNION ALL
    SELECT 'DVD', 7
)
SELECT c.ItemType, r.LoanDays, DATEDIFF(DAY, c.Borrowed, c.Returned) AS DaysOut     -- NULL when not returned
FROM dbo.LoansClean AS c
INNER JOIN Rules AS r ON r.ItemType = c.ItemType
WHERE c.Borrowed <= DATEADD(DAY, -r.LoanDays, CAST('2025-03-31' AS DATE));
GO
SELECT
    j.ItemType,
    COUNT(*) AS Loans,
    ROUND(100.0 * SUM(CASE WHEN j.DaysOut <= j.LoanDays THEN 1 ELSE 0 END) / COUNT(*), 1) AS PctOnTime
FROM dbo.vw_Judgeable AS j
GROUP BY j.ItemType
ORDER BY j.ItemType;
SELECT DISTINCT j.ItemType,
       PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY j.DaysOut) OVER (PARTITION BY j.ItemType) AS MedianDaysOut
FROM dbo.vw_Judgeable AS j
ORDER BY j.ItemType;
