/*
    STEP 2 (SQL): clean the raw referrals and load them.      WRITE THIS FILE.

    Input:  dbo.Referrals_Raw   (all text, straight from the CSV; made by 01_create_tables.sql)
    Output: 1. a view   dbo.vw_ReferralsChecked
            2. rows inserted into dbo.Referrals            (the good rows)
            3. rows inserted into dbo.Referrals_Rejected   (the bad rows, with the reason)
            4. a SELECT that shows the row counts

    The view has ONE row per ReferralID and these columns:
        ReferralID, ReferredDate, TestType, Priority,
        SampleReceivedDate, SequencedDate, ReportedDate, RejectReason
      - Text columns are trimmed. TestType uses the standard spelling:
        'Rare disease', 'Cancer panel', 'Rapid'. Anything else becomes NULL. Priority is lower case.
      - The date columns are real DATEs. An empty text becomes NULL (use TRY_CONVERT and NULLIF).
      - If a ReferralID appears more than once, keep ONE row (ROW_NUMBER).
      - RejectReason is NULL for a good row. For a bad row it is the FIRST of these that applies,
        in this order, with these exact words:
            'unknown test_type'                              TestType is NULL
            'unknown priority'                               Priority is not 'urgent' or 'routine'
            'missing referred_date'
            'sample_received_date before referred_date'
            'sequenced_date without sample_received_date'    sequenced is present, sample received is NULL
            'sequenced_date before sample_received_date'
            'reported_date without sequenced_date'
            'reported_date before sequenced_date'

    Then: INSERT the rows with RejectReason IS NULL into dbo.Referrals, and the others into
    dbo.Referrals_Rejected (ReferralID, RejectReason).
    Last: one SELECT with three numbers: RowsRead (dbo.Referrals_Raw), RowsLoaded, RowsRejected.

    Use GO between the view and the INSERTs (CREATE VIEW must be the first statement in its batch).
    Expected on the real file: read 8717, loaded 8677, rejected 15.   Run:  python check.py 2
*/
