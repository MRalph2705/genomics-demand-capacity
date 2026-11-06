/*
    Demand and capacity: create the tables and load the two CSV files.
    Target: SQL Server 2017 or later (BULK INSERT with FORMAT = 'CSV').
    Change the two file paths below to where you saved the files.
*/

DROP TABLE IF EXISTS dbo.Referrals_Raw;
DROP TABLE IF EXISTS dbo.Referrals_Rejected;
DROP TABLE IF EXISTS dbo.Referrals;
DROP TABLE IF EXISTS dbo.CapacityWeekly;
GO

-- Staging: every column is text, so a bad value can never stop the load.
CREATE TABLE dbo.Referrals_Raw (
    ReferralID          VARCHAR(20),
    ReferredDate        VARCHAR(20),
    TestType            VARCHAR(50),
    Priority            VARCHAR(20),
    SampleReceivedDate  VARCHAR(20),
    SequencedDate       VARCHAR(20),
    ReportedDate        VARCHAR(20)
);

-- Clean table: real types and a primary key.
-- The week columns give the Monday of each date. DATEDIFF counts days from 1900-01-01,
-- which was a Monday, so the result does not depend on the DATEFIRST setting.
CREATE TABLE dbo.Referrals (
    ReferralID          CHAR(7)      NOT NULL CONSTRAINT PK_Referrals PRIMARY KEY,
    ReferredDate        DATE         NOT NULL,
    TestType            VARCHAR(20)  NOT NULL,
    Priority            VARCHAR(10)  NOT NULL,
    SampleReceivedDate  DATE         NULL,
    SequencedDate       DATE         NULL,
    ReportedDate        DATE         NULL,
    ReferredWeek        AS CAST(DATEADD(DAY, (DATEDIFF(DAY, 0, ReferredDate) / 7) * 7, 0) AS DATE),
    SampleReceivedWeek  AS CAST(DATEADD(DAY, (DATEDIFF(DAY, 0, SampleReceivedDate) / 7) * 7, 0) AS DATE),
    SequencedWeek       AS CAST(DATEADD(DAY, (DATEDIFF(DAY, 0, SequencedDate) / 7) * 7, 0) AS DATE),
    ReportedWeek        AS CAST(DATEADD(DAY, (DATEDIFF(DAY, 0, ReportedDate) / 7) * 7, 0) AS DATE),
    CONSTRAINT CK_Referrals_Priority CHECK (Priority IN ('urgent', 'routine'))
);

CREATE TABLE dbo.Referrals_Rejected (
    ReferralID          VARCHAR(20),
    RejectReason        VARCHAR(60) NOT NULL
);

CREATE TABLE dbo.CapacityWeekly (
    WeekStart           DATE NOT NULL CONSTRAINT PK_CapacityWeekly PRIMARY KEY,
    SequencingCapacity  INT  NOT NULL
);
GO

BULK INSERT dbo.Referrals_Raw
FROM 'C:\data\referrals_raw.csv'
WITH (FORMAT = 'CSV', FIRSTROW = 2, CODEPAGE = '65001');

-- The capacity file has its own layout, so it goes through a temporary text table first.
CREATE TABLE #CapacityRaw (WeekStart VARCHAR(20), SequencingCapacity VARCHAR(20));
BULK INSERT #CapacityRaw
FROM 'C:\data\capacity_weekly.csv'
WITH (FORMAT = 'CSV', FIRSTROW = 2, CODEPAGE = '65001');

INSERT INTO dbo.CapacityWeekly (WeekStart, SequencingCapacity)
SELECT
    CAST(c.WeekStart AS DATE),
    CAST(c.SequencingCapacity AS INT)
FROM #CapacityRaw AS c;
DROP TABLE #CapacityRaw;
