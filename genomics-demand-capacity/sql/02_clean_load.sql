/*
    Clean the raw referrals and load them.
    Same rules as dcap/clean.py:
      1. remove repeated referral ids
      2. standardise the text columns
      3. reject rows with an unknown value or with dates in the wrong order
    One difference: when an id appears twice with different data, Python keeps the first row in
    the file. SQL has no file order, so this script keeps the row with the earliest dates.
*/

CREATE OR ALTER VIEW dbo.vw_ReferralsChecked
AS
WITH Typed AS (
    SELECT
        LTRIM(RTRIM(r.ReferralID))                                   AS ReferralID,
        TRY_CONVERT(DATE, NULLIF(r.ReferredDate, ''))                AS ReferredDate,
        CASE LOWER(LTRIM(RTRIM(r.TestType)))
            WHEN 'rare disease' THEN 'Rare disease'
            WHEN 'cancer panel' THEN 'Cancer panel'
            WHEN 'rapid'        THEN 'Rapid'
        END                                                          AS TestType,      -- NULL when unknown
        LOWER(LTRIM(RTRIM(r.Priority)))                              AS Priority,
        TRY_CONVERT(DATE, NULLIF(r.SampleReceivedDate, ''))          AS SampleReceivedDate,
        TRY_CONVERT(DATE, NULLIF(r.SequencedDate, ''))               AS SequencedDate,
        TRY_CONVERT(DATE, NULLIF(r.ReportedDate, ''))                AS ReportedDate
    FROM dbo.Referrals_Raw AS r
),
Numbered AS (
    SELECT
        t.*,
        ROW_NUMBER() OVER (
            PARTITION BY t.ReferralID
            ORDER BY t.ReferredDate, t.SampleReceivedDate, t.SequencedDate, t.ReportedDate
        ) AS RowInId
    FROM Typed AS t
)
SELECT
    n.ReferralID, n.ReferredDate, n.TestType, n.Priority,
    n.SampleReceivedDate, n.SequencedDate, n.ReportedDate,
    CASE
        WHEN n.TestType IS NULL                                              THEN 'unknown test_type'
        WHEN n.Priority NOT IN ('urgent', 'routine')                         THEN 'unknown priority'
        WHEN n.ReferredDate IS NULL                                          THEN 'missing referred_date'
        WHEN n.SampleReceivedDate < n.ReferredDate                           THEN 'sample_received_date before referred_date'
        WHEN n.SequencedDate IS NOT NULL AND n.SampleReceivedDate IS NULL    THEN 'sequenced_date without sample_received_date'
        WHEN n.SequencedDate < n.SampleReceivedDate                          THEN 'sequenced_date before sample_received_date'
        WHEN n.ReportedDate IS NOT NULL AND n.SequencedDate IS NULL          THEN 'reported_date without sequenced_date'
        WHEN n.ReportedDate < n.SequencedDate                                THEN 'reported_date before sequenced_date'
    END AS RejectReason
FROM Numbered AS n
WHERE n.RowInId = 1;
GO

INSERT INTO dbo.Referrals (ReferralID, ReferredDate, TestType, Priority, SampleReceivedDate, SequencedDate, ReportedDate)
SELECT c.ReferralID, c.ReferredDate, c.TestType, c.Priority, c.SampleReceivedDate, c.SequencedDate, c.ReportedDate
FROM dbo.vw_ReferralsChecked AS c
WHERE c.RejectReason IS NULL;

INSERT INTO dbo.Referrals_Rejected (ReferralID, RejectReason)
SELECT c.ReferralID, c.RejectReason
FROM dbo.vw_ReferralsChecked AS c
WHERE c.RejectReason IS NOT NULL;
GO

-- Row counts, so a load that loses rows cannot go unnoticed.
SELECT
    (SELECT COUNT(*) FROM dbo.Referrals_Raw)      AS RowsRead,
    (SELECT COUNT(*) FROM dbo.Referrals)          AS RowsLoaded,
    (SELECT COUNT(*) FROM dbo.Referrals_Rejected) AS RowsRejected;

SELECT x.RejectReason, COUNT(*) AS Rows
FROM dbo.Referrals_Rejected AS x
GROUP BY x.RejectReason
ORDER BY COUNT(*) DESC;
