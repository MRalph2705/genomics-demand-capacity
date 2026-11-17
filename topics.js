window.SITE = {
 "title": "Data Engineering Study Site",
 "generated": "2026-11-06",
 "defaultStart": "2026-10-27",
 "defaultPace": 4,
 "totalLessons": 108,
 "builtLessons": 27,
 "sources": {
  "B": "Data with Baraa (SQL Server). Read: his 12-chapter SQL roadmap and the project READMEs. Not watched.",
  "Z": "DataTalks.Club Data Engineering Zoomcamp (Alexey Grigorev). Read: the course page and module list.",
  "D": "Microsoft DP-700 Fabric Data Engineer. Read: the official skills-measured list.",
  "O": "Claude's own knowledge. Lessons are written here. They are not copies of any course."
 },
 "assumedNote": "SQL lessons assume these ideas from your earlier SQL days. They are planned as refresher lessons in the T-SQL modules (modules 5 and 6). Tell Claude if any is new.",
 "milestones": [
  {
   "date": "2027-06-21",
   "label": "Summer 2027: your target for first Data Engineer applications (from your roadmap)"
  }
 ],
 "notes": [
  "The Zoomcamp page says cohorts start 'around January each year'. It gives no exact 2027 date. Check the DataTalks.Club site before you plan around it."
 ]
};
window.SYLLABUS = [
 {
  "id": "M1",
  "no": 1,
  "title": "Python core for data work",
  "basis": "O. Meets the Zoomcamp prerequisite 'basic coding'. Every lesson is written to be typed from a blank page.",
  "lessons": [
   {
    "id": "py-types",
    "no": "1.1",
    "title": "Values, types and variables",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-strings",
    "no": "1.2",
    "title": "Strings and f-strings",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-lists-tuples",
    "no": "1.3",
    "title": "Lists and tuples",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-control",
    "no": "1.4",
    "title": "Conditions and loops",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-functions",
    "no": "1.5",
    "title": "Functions",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-dict-count",
    "no": "1.6",
    "title": "Count items with a dictionary",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-comprehensions",
    "no": "1.7",
    "title": "List, dict and set comprehensions",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-mutable-default",
    "no": "1.8",
    "title": "Mutable default arguments",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-files",
    "no": "1.9",
    "title": "Files: text, CSV and JSON",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-except-order",
    "no": "1.10",
    "title": "try/except and the order of except blocks",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-scripts",
    "no": "1.11",
    "title": "Scripts, imports and virtual environments",
    "status": "built",
    "src": "O"
   }
  ]
 },
 {
  "id": "M2",
  "no": 2,
  "title": "Python for engineers",
  "basis": "O.",
  "lessons": [
   {
    "id": "py-generators",
    "no": "2.1",
    "title": "Generators and lists",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-classes",
    "no": "2.2",
    "title": "Classes: objects, attributes and methods",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-class-property",
    "no": "2.3",
    "title": "Classes, @property and __repr__",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-dataclasses",
    "no": "2.4",
    "title": "Dataclasses",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-decorators",
    "no": "2.5",
    "title": "Decorators and closures",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-typing",
    "no": "2.6",
    "title": "Type hints",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-logging",
    "no": "2.7",
    "title": "Logging",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-pytest",
    "no": "2.8",
    "title": "Testing with pytest",
    "status": "built",
    "src": "O"
   },
   {
    "id": "py-datetime",
    "no": "2.9",
    "title": "Dates, times and time zones",
    "status": "built",
    "src": "O"
   }
  ]
 },
 {
  "id": "M7",
  "no": 3,
  "title": "pandas and data quality",
  "basis": "O, D (duplicates, missing and late data).",
  "lessons": [
   {
    "id": "pd-basics",
    "no": "3.1",
    "title": "DataFrames and Series",
    "status": "built",
    "src": "O"
   },
   {
    "id": "pd-select",
    "no": "3.2",
    "title": "Select and filter",
    "status": "built",
    "src": "O"
   },
   {
    "id": "pd-groupby",
    "no": "3.3",
    "title": "groupby and aggregates",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pd-merge",
    "no": "3.4",
    "title": "merge and join",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pd-window",
    "no": "3.5",
    "title": "rolling, shift and rank",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pd-dtypes",
    "no": "3.6",
    "title": "dtypes and missing values",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pd-dedupe",
    "no": "3.7",
    "title": "Duplicates and late-arriving data",
    "status": "planned",
    "src": "D, O"
   },
   {
    "id": "pd-parquet",
    "no": "3.8",
    "title": "Parquet files",
    "status": "planned",
    "src": "O"
   }
  ]
 },
 {
  "id": "M6",
  "no": 4,
  "title": "Python and SQL Server together",
  "basis": "O. No course found covers this. Includes the SQL Server set-up lesson, so you can connect from Python. Portfolio project 2 (demand and capacity) uses this module and the one before.",
  "lessons": [
   {
    "id": "sql-setup",
    "no": "4.1",
    "title": "Set up SQL Server Express and SSMS",
    "status": "planned",
    "src": "B ch.1"
   },
   {
    "id": "pysql-connect",
    "no": "4.2",
    "title": "Connect with pyodbc",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pysql-params",
    "no": "4.3",
    "title": "Parameterised queries",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pysql-sqlalchemy",
    "no": "4.4",
    "title": "SQLAlchemy Core",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pysql-pandas",
    "no": "4.5",
    "title": "pandas read_sql and to_sql",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pysql-bulk",
    "no": "4.6",
    "title": "Bulk loads and fast_executemany",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pysql-secrets",
    "no": "4.7",
    "title": "Config and secrets",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pysql-upsert",
    "no": "4.8",
    "title": "Repeatable loads: MERGE and upserts",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pysql-test-log",
    "no": "4.9",
    "title": "Logging and testing an ETL job",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "pysql-capstone",
    "no": "4.10",
    "title": "Capstone 1: Python ETL into your warehouse",
    "status": "planned",
    "src": "O"
   }
  ]
 },
 {
  "id": "M3",
  "no": 5,
  "title": "T-SQL queries on SQL Server",
  "basis": "B (roadmap chapters 1 to 8) plus O.",
  "lessons": [
   {
    "id": "sql-select",
    "no": "5.1",
    "title": "SELECT, WHERE, ORDER BY and TOP",
    "status": "planned",
    "src": "B ch.2, 5"
   },
   {
    "id": "sql-ddl-dml",
    "no": "5.2",
    "title": "CREATE, ALTER, DROP, INSERT, UPDATE and DELETE",
    "status": "planned",
    "src": "B ch.3, 4"
   },
   {
    "id": "sql-joins",
    "no": "5.3",
    "title": "Joins",
    "status": "planned",
    "src": "B ch.6"
   },
   {
    "id": "sql-set-ops",
    "no": "5.4",
    "title": "UNION, EXCEPT and INTERSECT",
    "status": "planned",
    "src": "B ch.6"
   },
   {
    "id": "sql-row-functions",
    "no": "5.5",
    "title": "String, date, NULL, CASE and CAST functions",
    "status": "planned",
    "src": "B ch.7"
   },
   {
    "id": "sql-aggregates",
    "no": "5.6",
    "title": "Aggregates and GROUP BY",
    "status": "planned",
    "src": "B ch.8"
   },
   {
    "id": "sql-where-having",
    "no": "5.7",
    "title": "WHERE, HAVING and the logical order",
    "status": "built",
    "src": ""
   },
   {
    "id": "sql-window-ranking",
    "no": "5.8",
    "title": "Ranking and value window functions",
    "status": "planned",
    "src": "B ch.8"
   },
   {
    "id": "sql-window-frames",
    "no": "5.9",
    "title": "Window frames and LAST_VALUE",
    "status": "built",
    "src": ""
   },
   {
    "id": "sql-percentile",
    "no": "5.10",
    "title": "PERCENTILE_CONT and PERCENTILE_DISC",
    "status": "built",
    "src": ""
   },
   {
    "id": "sql-rollup-grouping",
    "no": "5.11",
    "title": "ROLLUP and GROUPING",
    "status": "built",
    "src": ""
   }
  ]
 },
 {
  "id": "M4",
  "no": 6,
  "title": "Advanced T-SQL and performance",
  "basis": "B (roadmap chapters 9 and 10) plus O.",
  "lessons": [
   {
    "id": "sql-subqueries",
    "no": "6.1",
    "title": "Subqueries",
    "status": "planned",
    "src": "B ch.9"
   },
   {
    "id": "sql-ctes",
    "no": "6.2",
    "title": "CTEs and recursive CTEs",
    "status": "planned",
    "src": "B ch.9"
   },
   {
    "id": "sql-views-temp",
    "no": "6.3",
    "title": "Views, temp tables and table variables",
    "status": "planned",
    "src": "B ch.9"
   },
   {
    "id": "sql-correlated-vs-window",
    "no": "6.4",
    "title": "Correlated subquery or window function",
    "status": "built",
    "src": ""
   },
   {
    "id": "sql-stored-procs",
    "no": "6.5",
    "title": "Stored procedures and triggers",
    "status": "planned",
    "src": "B ch.9"
   },
   {
    "id": "sql-indexes",
    "no": "6.6",
    "title": "Indexes: clustered, nonclustered, covering",
    "status": "planned",
    "src": "B ch.10"
   },
   {
    "id": "sql-exec-plans",
    "no": "6.7",
    "title": "Execution plans and STATISTICS IO and TIME",
    "status": "planned",
    "src": "B ch.10, O"
   },
   {
    "id": "sql-sargable",
    "no": "6.8",
    "title": "Writing queries an index can use",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "sql-partitions",
    "no": "6.9",
    "title": "Partitioning",
    "status": "planned",
    "src": "B ch.10"
   },
   {
    "id": "sql-transactions",
    "no": "6.10",
    "title": "Transactions, locks and isolation",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "sql-plan-cache",
    "no": "6.11",
    "title": "Parameter sniffing and the plan cache",
    "status": "planned",
    "src": "O"
   }
  ]
 },
 {
  "id": "M5",
  "no": 7,
  "title": "Build a data warehouse in SQL Server",
  "basis": "B (the SQL Data Warehouse project: bronze, silver, gold; and the analytics project) plus O, D (loading patterns).",
  "lessons": [
   {
    "id": "dw-architecture",
    "no": "7.1",
    "title": "OLTP and OLAP, layers and the medallion design",
    "status": "planned",
    "src": "B"
   },
   {
    "id": "dw-setup",
    "no": "7.2",
    "title": "Project setup, naming rules and Git",
    "status": "planned",
    "src": "B"
   },
   {
    "id": "dw-bronze",
    "no": "7.3",
    "title": "Bronze: load raw files with BULK INSERT",
    "status": "planned",
    "src": "B"
   },
   {
    "id": "dw-silver",
    "no": "7.4",
    "title": "Silver: clean and standardise",
    "status": "planned",
    "src": "B"
   },
   {
    "id": "dw-gold",
    "no": "7.5",
    "title": "Gold: dimensions, facts and a star schema",
    "status": "planned",
    "src": "B"
   },
   {
    "id": "dw-quality",
    "no": "7.6",
    "title": "Data quality checks",
    "status": "planned",
    "src": "B, D"
   },
   {
    "id": "dw-docs",
    "no": "7.7",
    "title": "Data model docs and a data catalogue",
    "status": "planned",
    "src": "B"
   },
   {
    "id": "dw-analysis",
    "no": "7.8",
    "title": "Explore and analyse: the six stages",
    "status": "planned",
    "src": "B"
   },
   {
    "id": "dw-incremental",
    "no": "7.9",
    "title": "Full and incremental loads, late data",
    "status": "planned",
    "src": "D, O"
   }
  ]
 },
 {
  "id": "M8",
  "no": 8,
  "title": "Engineering toolbox",
  "basis": "Z (module 1) plus O.",
  "lessons": [
   {
    "id": "eng-cli",
    "no": "8.1",
    "title": "The command line",
    "status": "planned",
    "src": "Z, O"
   },
   {
    "id": "eng-git",
    "no": "8.2",
    "title": "Git and GitHub",
    "status": "planned",
    "src": "Z, O"
   },
   {
    "id": "eng-docker",
    "no": "8.3",
    "title": "Docker basics",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "eng-compose",
    "no": "8.4",
    "title": "Docker Compose and Postgres in Docker",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "eng-terraform",
    "no": "8.5",
    "title": "Infrastructure as code with Terraform",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "eng-gcp",
    "no": "8.6",
    "title": "GCP basics",
    "status": "planned",
    "src": "Z"
   }
  ]
 },
 {
  "id": "M9",
  "no": 9,
  "title": "Orchestration and ingestion",
  "basis": "Z (module 2), D (orchestrate processes).",
  "lessons": [
   {
    "id": "orch-concepts",
    "no": "9.1",
    "title": "Schedules, idempotence and backfills",
    "status": "planned",
    "src": "Z, D"
   },
   {
    "id": "orch-kestra",
    "no": "9.2",
    "title": "Kestra flows",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "orch-params",
    "no": "9.3",
    "title": "Parameters and triggers",
    "status": "planned",
    "src": "Z, D"
   },
   {
    "id": "orch-lake",
    "no": "9.4",
    "title": "Ingest to a data lake",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "orch-incremental",
    "no": "9.5",
    "title": "Incremental patterns",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "orch-reliability",
    "no": "9.6",
    "title": "Retries, alerts and monitoring",
    "status": "planned",
    "src": "D"
   }
  ]
 },
 {
  "id": "M10",
  "no": 10,
  "title": "Cloud warehouse and analytics engineering",
  "basis": "Z (modules 3 to 5).",
  "lessons": [
   {
    "id": "bq-basics",
    "no": "10.1",
    "title": "BigQuery basics",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "bq-partition",
    "no": "10.2",
    "title": "Partitioning and clustering",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "dbt-models",
    "no": "10.3",
    "title": "dbt models",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "dbt-tests",
    "no": "10.4",
    "title": "dbt tests and docs",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "dbt-incremental",
    "no": "10.5",
    "title": "dbt incremental models",
    "status": "planned",
    "src": "Z, O"
   },
   {
    "id": "plat-bruin",
    "no": "10.6",
    "title": "Data platforms with Bruin",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "bi-dash",
    "no": "10.7",
    "title": "Dashboards",
    "status": "planned",
    "src": "Z"
   }
  ]
 },
 {
  "id": "M11",
  "no": 11,
  "title": "Microsoft Fabric track",
  "basis": "D (all three skill areas). Needs a Fabric account. Access not checked.",
  "lessons": [
   {
    "id": "fab-workspace",
    "no": "11.1",
    "title": "Workspaces, OneLake and settings",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "fab-stores",
    "no": "11.2",
    "title": "Lakehouse or warehouse: choose a data store",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "fab-pipelines",
    "no": "11.3",
    "title": "Pipelines, Dataflow Gen2 and notebooks",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "fab-pyspark",
    "no": "11.4",
    "title": "Transform with PySpark and T-SQL",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "fab-kql",
    "no": "11.5",
    "title": "KQL and Eventstream",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "fab-security",
    "no": "11.6",
    "title": "Security and governance",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "fab-lifecycle",
    "no": "11.7",
    "title": "Version control and deployment pipelines",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "fab-monitor",
    "no": "11.8",
    "title": "Monitor and optimise",
    "status": "planned",
    "src": "D"
   },
   {
    "id": "fab-practice",
    "no": "11.9",
    "title": "DP-700 practice review",
    "status": "planned",
    "src": "D"
   }
  ]
 },
 {
  "id": "M12",
  "no": 12,
  "title": "Spark and Kafka",
  "basis": "Z (modules 6 and 7).",
  "lessons": [
   {
    "id": "spark-basics",
    "no": "12.1",
    "title": "Spark and DataFrames",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "spark-sql",
    "no": "12.2",
    "title": "Spark SQL, GroupBy and joins",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "spark-tuning",
    "no": "12.3",
    "title": "Spark performance",
    "status": "planned",
    "src": "Z, D"
   },
   {
    "id": "kafka-basics",
    "no": "12.4",
    "title": "Kafka basics",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "kafka-streams",
    "no": "12.5",
    "title": "Kafka Streams and KSQL",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "kafka-schemas",
    "no": "12.6",
    "title": "Schemas with Avro",
    "status": "planned",
    "src": "Z"
   }
  ]
 },
 {
  "id": "M13",
  "no": 13,
  "title": "Capstone and job readiness",
  "basis": "Z (capstone) plus O.",
  "lessons": [
   {
    "id": "cap-design",
    "no": "13.1",
    "title": "Design the capstone",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "cap-build",
    "no": "13.2",
    "title": "Build the pipeline",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "cap-docs",
    "no": "13.3",
    "title": "Documents, dashboard and presentation",
    "status": "planned",
    "src": "Z"
   },
   {
    "id": "interview",
    "no": "13.4",
    "title": "SQL and Python interview practice",
    "status": "planned",
    "src": "O"
   },
   {
    "id": "portfolio",
    "no": "13.5",
    "title": "Portfolio and CV",
    "status": "planned",
    "src": "O"
   }
  ]
 }
];
window.TOPICS = [
 {
  "id": "py-types",
  "track": "Python",
  "title": "Values, types and variables",
  "minutes": 35,
  "summary": "A variable is a name for a value. Every value has a type.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 250\" role=\"img\" aria-label=\"Five variable names, each pointing to a value with a type.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"t1\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"8\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"55\" y=\"31\" text-anchor=\"middle\">price</text><line class=\"ar\" x1=\"110\" y1=\"25\" x2=\"168\" y2=\"25\" marker-end=\"url(#t1)\"/><rect class=\"bxa\" x=\"170\" y=\"8\" width=\"150\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"245\" y=\"31\" text-anchor=\"middle\">19.99</text><rect class=\"bxg\" x=\"350\" y=\"8\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"405\" y=\"31\" text-anchor=\"middle\">float</text><rect class=\"bx\" x=\"0\" y=\"52\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"55\" y=\"75\" text-anchor=\"middle\">qty</text><line class=\"ar\" x1=\"110\" y1=\"69\" x2=\"168\" y2=\"69\" marker-end=\"url(#t1)\"/><rect class=\"bxa\" x=\"170\" y=\"52\" width=\"150\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"245\" y=\"75\" text-anchor=\"middle\">3</text><rect class=\"bxg\" x=\"350\" y=\"52\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"405\" y=\"75\" text-anchor=\"middle\">int</text><rect class=\"bx\" x=\"0\" y=\"96\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"55\" y=\"119\" text-anchor=\"middle\">name</text><line class=\"ar\" x1=\"110\" y1=\"113\" x2=\"168\" y2=\"113\" marker-end=\"url(#t1)\"/><rect class=\"bxa\" x=\"170\" y=\"96\" width=\"150\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"245\" y=\"119\" text-anchor=\"middle\">&quot;pen&quot;</text><rect class=\"bxg\" x=\"350\" y=\"96\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"405\" y=\"119\" text-anchor=\"middle\">str</text><rect class=\"bx\" x=\"0\" y=\"140\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"55\" y=\"163\" text-anchor=\"middle\">paid</text><line class=\"ar\" x1=\"110\" y1=\"157\" x2=\"168\" y2=\"157\" marker-end=\"url(#t1)\"/><rect class=\"bxa\" x=\"170\" y=\"140\" width=\"150\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"245\" y=\"163\" text-anchor=\"middle\">True</text><rect class=\"bxg\" x=\"350\" y=\"140\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"405\" y=\"163\" text-anchor=\"middle\">bool</text><rect class=\"bx\" x=\"0\" y=\"184\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"55\" y=\"207\" text-anchor=\"middle\">note</text><line class=\"ar\" x1=\"110\" y1=\"201\" x2=\"168\" y2=\"201\" marker-end=\"url(#t1)\"/><rect class=\"bxa\" x=\"170\" y=\"184\" width=\"150\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"245\" y=\"207\" text-anchor=\"middle\">None</text><rect class=\"bxg\" x=\"350\" y=\"184\" width=\"110\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"405\" y=\"207\" text-anchor=\"middle\">NoneType</text><text class=\"tx tm\" x=\"55\" y=\"238\" text-anchor=\"middle\" font-size=\"11\">name</text><text class=\"tx tm\" x=\"245\" y=\"238\" text-anchor=\"middle\" font-size=\"11\">value</text><text class=\"tx tm\" x=\"405\" y=\"238\" text-anchor=\"middle\" font-size=\"11\">type of the value</text></svg>",
   "caption": "Each name points to a value. Each value has a type."
  },
  "predict": {
   "q": "x = 7 / 2. What value does x hold? Is it an int or a float?",
   "reveal": "3.5. It is a float. The / sign always gives a float. Even 6 / 3 gives 2.0."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A variable is a name that points to a value.",
     "The sign = stores a value in a name. Read it as 'set to'. price = 10 means: price is set to 10.",
     "Every value has a type. The type decides what you can do with the value.",
     "Five types matter first: int (a whole number), float (a number with a decimal point), str (text in quotes), bool (True or False) and None (no value)."
    ]
   },
   {
    "h": "Run code",
    "p": [
     "Save code in a file that ends in .py. Run it with: python file.py.",
     "print() shows a value on the screen.",
     "A line that starts with # is a comment. Python ignores it.",
     "type(x) tells you the type of x."
    ]
   },
   {
    "h": "Operators",
    "p": [
     "Use + - * / to add, subtract, multiply and divide.",
     "The / sign always gives a float. 6 / 3 gives 2.0.",
     "Use // for division that drops the decimal part. 7 // 2 gives 3.",
     "Use % for the remainder. 7 % 2 gives 1.",
     "Use ** for a power. 2 ** 3 gives 8.",
     "A comparison gives a bool. These are the signs: == != < > <= >=.",
     "One = stores a value. Two == compare two values. Mixing them up is a common mistake."
    ]
   },
   {
    "h": "Text and numbers",
    "p": [
     "Quotes make text. '3' is a str. 3 is an int.",
     "The + sign joins two strings: '3' + '4' gives '34'.",
     "The + sign cannot join a str and an int. It raises TypeError.",
     "Use int() or float() to turn text into a number. Use str() to turn a number into text."
    ]
   },
   {
    "h": "Floats",
    "p": [
     "A float stores an approximation. 0.1 + 0.2 gives 0.30000000000000004.",
     "Use round(value, 2) to show money with 2 decimal places.",
     "For exact money, store pence as an int, or use a decimal type in the database."
    ]
   },
   {
    "h": "Names",
    "p": [
     "A name has letters, digits and underscores. It cannot start with a digit.",
     "Names are case sensitive. Price and price are two different names.",
     "Use lowercase names with underscores, such as unit_price."
    ]
   }
  ],
  "example": {
   "title": "A price calculation written the way a colleague would want to read it",
   "code": "# Fixed numbers get a name in UPPER_CASE, so nobody has to guess what 12 or 0.2 means.\nVAT_RATE = 0.2\nITEMS_PER_BOX = 12\n\nunit_price = 19.99\nquantity = 3\nproduct_name = \"pen\"\nis_paid = True\ndiscount_code = None          # None means \"no value yet\"\n\nnet_total = unit_price * quantity\ngross_total = net_total * (1 + VAT_RATE)\nprint(product_name, quantity, unit_price)\nprint(round(gross_total, 2))  # round only when you show a number, never in the middle of a calculation\nprint(type(unit_price), type(quantity), type(product_name), type(is_paid), type(discount_code))\n\nstock = 1_250                 # underscores make big numbers readable\nprint(stock // ITEMS_PER_BOX, stock % ITEMS_PER_BOX, stock / ITEMS_PER_BOX)\nprint(\"3\" + \"4\", int(\"3\") + 4)    # text joins, numbers add: convert first\nprint(0.1 + 0.2, round(0.1 + 0.2, 2))",
   "notes": [
    "Names say what the value means (unit_price, not p). Variables and functions use snake_case (PEP 8).",
    "A fixed number gets a UPPER_CASE name at the top. This removes magic numbers and gives one place to change them.",
    "Round only for display. Rounding in the middle of a calculation adds small errors.",
    "Never compare floats with ==. 0.1 + 0.2 is not exactly 0.3. Compare with a tolerance, or use whole numbers such as pence.",
    "One statement on each line, and a comment that says why, not what."
   ],
   "output": "pen 3 19.99\n71.96\n<class 'float'> <class 'int'> <class 'str'> <class 'bool'> <class 'NoneType'>\n104 2 104.16666666666667\n34 7\n0.30000000000000004 0.3"
  },
  "qa": {
   "q": "age = '30'. What does print(age + 5) do? How do you make it show 35?",
   "a": "It raises TypeError: can only concatenate str (not \"int\") to str. The variable age holds text. Convert it first: print(int(age) + 5)."
  },
  "build": {
   "task": "Write a script from a blank page. A shop sells 4 items at 12.5 each. Add 20% VAT. Print the net total, the VAT and the gross total, each on its own line. Then print the type of the gross total.",
   "hint": "Store qty, unit_price and vat_rate in variables first. Do each sum on its own line.",
   "check": "You should see 50.0, 10.0 and 60.0, and then <class 'float'>."
  },
  "teach": "Explain in 4 sentences the difference between '3' + '4' and 3 + 4. Use the words 'str' and 'int'.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What does 7 // 2 give?",
    "a": "3."
   },
   {
    "q": "Which type does 6 / 3 give?",
    "a": "A float: 2.0."
   }
  ],
  "mixed": [
   {
    "title": "A. Price a parcel",
    "task": "A parcel weighs 2.75 kg. The rate is 3.2 pounds for each kg. Print the cost. Then print the cost rounded to 2 decimal places.",
    "hint": "Store the weight and the rate in variables. Multiply them. Use round(value, 2).",
    "setup": "",
    "sql": "weight = 2.75\nrate = 3.2\ncost = weight * rate\nprint(cost)\nprint(round(cost, 2))",
    "output": "8.8\n8.8",
    "lang": "python"
   },
   {
    "title": "B. Boxes and leftovers",
    "task": "There are 47 items. A box holds 12 items. Print the number of full boxes. Then print the number of items left over.",
    "hint": "Use // for whole boxes. Use % for the remainder.",
    "setup": "",
    "sql": "items = 47\nper_box = 12\nprint(items // per_box)\nprint(items % per_box)",
    "output": "3\n11",
    "lang": "python"
   },
   {
    "title": "C. Fix a type error",
    "task": "This code fails. Say what the error is and why. Then fix it so it prints 7.5.",
    "hint": "qty holds text. Convert it with int() before you multiply.",
    "setup": "",
    "sql": "qty = \"3\"\nprice = 2.5\nprint(int(qty) * price)",
    "output": "7.5",
    "lang": "python",
    "broken": "qty = \"3\"\nprice = 2.5\nprint(qty * price)",
    "brokenOutput": "TypeError: can't multiply sequence by non-int of type 'float'"
   }
  ],
  "prereqs": [],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.1",
  "num": 1
 },
 {
  "id": "py-strings",
  "track": "Python",
  "title": "Strings and f-strings",
  "minutes": 35,
  "summary": "A string is text. Slices, methods and f-strings let you clean and show it.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 204\" role=\"img\" aria-label=\"The string ORD-1042-uk with index numbers and three slices.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"t2\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tm\" x=\"30\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">0</text><rect class=\"bx\" x=\"10\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"30\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">O</text><text class=\"tx tm\" x=\"75\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">1</text><rect class=\"bx\" x=\"55\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"75\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">R</text><text class=\"tx tm\" x=\"120\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">2</text><rect class=\"bx\" x=\"100\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"120\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">D</text><text class=\"tx tm\" x=\"165\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">3</text><rect class=\"bx\" x=\"145\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"165\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">-</text><text class=\"tx tm\" x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">4</text><rect class=\"bx\" x=\"190\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">1</text><text class=\"tx tm\" x=\"255\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">5</text><rect class=\"bx\" x=\"235\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"255\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">0</text><text class=\"tx tm\" x=\"300\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">6</text><rect class=\"bx\" x=\"280\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"300\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">4</text><text class=\"tx tm\" x=\"345\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">7</text><rect class=\"bx\" x=\"325\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"345\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">2</text><text class=\"tx tm\" x=\"390\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">8</text><rect class=\"bx\" x=\"370\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"390\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">-</text><text class=\"tx tm\" x=\"435\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">9</text><rect class=\"bx\" x=\"415\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"435\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">u</text><text class=\"tx tm\" x=\"480\" y=\"18\" text-anchor=\"middle\" font-size=\"11\">10</text><rect class=\"bx\" x=\"460\" y=\"24\" width=\"40\" height=\"36\" rx=\"6\"/><text class=\"tx tb\" x=\"480\" y=\"48\" text-anchor=\"middle\" font-size=\"15\">k</text><rect class=\"bxa\" x=\"10\" y=\"68\" width=\"130\" height=\"10\" rx=\"4\"/><text class=\"tx tb\" x=\"10\" y=\"92\" text-anchor=\"start\" font-size=\"12\">code[0:3]  gives  ORD</text><rect class=\"bxg\" x=\"190\" y=\"104\" width=\"175\" height=\"10\" rx=\"4\"/><text class=\"tx tb\" x=\"190\" y=\"128\" text-anchor=\"start\" font-size=\"12\">code[4:8]  gives  1042</text><rect class=\"bxw\" x=\"415\" y=\"140\" width=\"85\" height=\"10\" rx=\"4\"/><text class=\"tx tb\" x=\"415\" y=\"164\" text-anchor=\"start\" font-size=\"12\">code[-2:]  gives  uk</text><text class=\"tx tm\" x=\"10\" y=\"192\" text-anchor=\"start\" font-size=\"12\">A slice stops before its end index.</text></svg>",
   "caption": "Each character has an index. A slice stops before its end index."
  },
  "predict": {
   "q": "What does print('3' + '4') show?",
   "reveal": "34. The + sign joins two strings. It does not add them."
  },
  "explain": [
   {
    "h": "Index and slice",
    "p": [
     "A string is a row of characters. Each character has an index. The first index is 0.",
     "text[0] gives the first character. text[-1] gives the last.",
     "A slice text[2:5] gives the characters from index 2 up to, but not including, index 5.",
     "text[:3] starts at the start. text[3:] runs to the end.",
     "len(text) gives the number of characters.",
     "A string cannot change in place. Every method gives a new string."
    ]
   },
   {
    "h": "Cleaning methods",
    "p": [
     ".strip() removes spaces at both ends.",
     ".upper() and .lower() change the case.",
     ".replace(old, new) swaps text.",
     ".split(sep) cuts a string into a list of parts.",
     "sep.join(list) joins a list into one string.",
     ".startswith(x) and the word in give True or False."
    ]
   },
   {
    "h": "f-strings",
    "p": [
     "Put f before the quote. Put a value in braces: f'Hello {name}'.",
     "A format code follows a colon. {price:.2f} shows 2 decimal places.",
     "{n:,} adds commas: 1200 becomes 1,200.",
     "{rate:.1%} shows a percentage: 0.256 becomes 25.6%.",
     "{name:<8} pads the text to 8 characters, left aligned."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "A method such as strip or upper does not change the original. Save the result: clean = raw.strip().",
     "A slice stops before the end index. code[4:8] has 4 characters, not 5.",
     "An f-string needs the f. Without it, Python prints the braces as they are."
    ]
   }
  ],
  "example": {
   "title": "Parse, clean and format an order code",
   "code": "ORDER_CODE = \"ORD-1042-uk\"\nSEPARATOR = \"-\"\n\nparts = ORDER_CODE.split(SEPARATOR)               # ['ORD', '1042', 'uk']\nprint(parts[0], int(parts[1]), parts[2].upper())\nprint(ORDER_CODE[0:3], ORDER_CODE[-2:], ORDER_CODE[4:8], len(ORDER_CODE))\n\nclean_name = \"  pen  \".strip().upper()            # chain methods: read left to right\nprint(clean_name)\nprint(ORDER_CODE.replace(\"-\", \"_\"), \"uk\" in ORDER_CODE, ORDER_CODE.startswith(\"ORD\"))\nprint(SEPARATOR.join(parts))\n\nname = \"pen\"\nprice = 2.5\nquantity = 1200\nshare = 0.256\nprint(f\"{name:<8}|{price:.2f}|{quantity:,}|{share:.1%}\")   # one f-string, formats inside the braces",
   "notes": [
    "Use f-strings for all formatting. Do not build text with + and str(). F-strings are shorter and cannot hide a type error.",
    "Put the separator in one named constant. A change then happens in one place.",
    "Methods return a NEW string. Chain them (strip, then upper) instead of making a temporary variable for each step.",
    "Use startswith and in for checks. They say what you mean. Slicing and comparing is harder to read.",
    "Lesson 1.3 shows tuple unpacking: prefix, number, country = ORDER_CODE.split(SEPARATOR). It replaces the three index lines."
   ],
   "output": "ORD 1042 UK\nORD uk 1042 11\nPEN\nORD_1042_uk True True\nORD-1042-uk\npen     |2.50|1,200|25.6%"
  },
  "qa": {
   "q": "code = 'uk-2024-q3'. Which slice gives 2024? How do you show the code in capital letters?",
   "a": "code[3:7] gives 2024. code.upper() gives UK-2024-Q3."
  },
  "build": {
   "task": "A raw order id is ' ord-1042 '. From a blank page: clean it, print it in capitals, then print its number part plus 1 as an int.",
   "hint": "Use strip, upper, split and int. Save each result in a variable.",
   "check": "You should see ORD-1042 and then 1043."
  },
  "teach": "Explain in 4 sentences what code[4:8] gives and why it stops at index 7.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What is the first index of a string?",
    "a": "0."
   },
   {
    "q": "Does name.upper() change name?",
    "a": "No. It gives a new string. Save it in a variable to keep it."
   }
  ],
  "mixed": [
   {
    "title": "A. A message with formats",
    "task": "customer is 'Acme', amount is 1234.5 and rate is 0.2. Print: Acme owes 1,234.50 (VAT 20.0%). Use one f-string.",
    "hint": "Format codes: :,.2f for money with commas and 2 decimal places, :.1% for a percentage.",
    "setup": "",
    "sql": "customer = \"Acme\"\namount = 1234.5\nrate = 0.2\nprint(f\"{customer} owes {amount:,.2f} (VAT {rate:.1%})\")",
    "output": "Acme owes 1,234.50 (VAT 20.0%)",
    "lang": "python"
   },
   {
    "title": "B. Take an id apart",
    "task": "The id is 'ORD-1042-UK'. Print the prefix, the number as an int, and the country in lowercase.",
    "hint": "split('-') gives three parts. Use int() on the middle part and lower() on the last part.",
    "setup": "",
    "sql": "order_id = \"ORD-1042-UK\"\nprefix, number, country = order_id.split(\"-\")\nprint(prefix)\nprint(int(number))\nprint(country.lower())",
    "output": "ORD\n1042\nuk",
    "lang": "python"
   },
   {
    "title": "C. Clean a name",
    "task": "The raw name is '  Birch & Co  '. Print it cleaned and in capitals. Then print True or False: does it contain the sign &?",
    "hint": "strip() then upper(). Use the word in for the test.",
    "setup": "",
    "sql": "raw = \"  Birch & Co  \"\nclean = raw.strip().upper()\nprint(clean)\nprint(\"&\" in clean)",
    "output": "BIRCH & CO\nTrue",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.2",
  "num": 2
 },
 {
  "id": "py-lists-tuples",
  "track": "Python",
  "title": "Lists and tuples",
  "minutes": 40,
  "summary": "A list holds values in order and can change. A tuple holds values in order and cannot change.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 228\" role=\"img\" aria-label=\"A list with indexes and a slice. Two names for one list, and a real copy.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"t3\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"14\" text-anchor=\"start\" font-size=\"12\">orders = [120, 40, 80, 200]</text><text class=\"tx tm\" x=\"45\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">0  /  -4</text><rect class=\"bx\" x=\"0\" y=\"40\" width=\"90\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"45\" y=\"63\" text-anchor=\"middle\">120</text><text class=\"tx tm\" x=\"145\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">1  /  -3</text><rect class=\"bx\" x=\"100\" y=\"40\" width=\"90\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"145\" y=\"63\" text-anchor=\"middle\">40</text><text class=\"tx tm\" x=\"245\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">2  /  -2</text><rect class=\"bx\" x=\"200\" y=\"40\" width=\"90\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"245\" y=\"63\" text-anchor=\"middle\">80</text><text class=\"tx tm\" x=\"345\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">3  /  -1</text><rect class=\"bx\" x=\"300\" y=\"40\" width=\"90\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"345\" y=\"63\" text-anchor=\"middle\">200</text><rect class=\"bxa\" x=\"100\" y=\"82\" width=\"190\" height=\"8\" rx=\"3\"/><text class=\"tx ta tb\" x=\"100\" y=\"106\" text-anchor=\"start\" font-size=\"12\">orders[1:3]  gives  [40, 80]</text><line class=\"ln\" x1=\"0\" y1=\"122\" x2=\"520\" y2=\"122\"/><text class=\"tx tw tb\" x=\"0\" y=\"144\" text-anchor=\"start\" font-size=\"12\">b = a  (same list)</text><rect class=\"bx\" x=\"0\" y=\"154\" width=\"50\" height=\"28\" rx=\"8\"/><text class=\"tx tb\" x=\"25\" y=\"173\" text-anchor=\"middle\">a</text><rect class=\"bx\" x=\"0\" y=\"190\" width=\"50\" height=\"28\" rx=\"8\"/><text class=\"tx tb\" x=\"25\" y=\"209\" text-anchor=\"middle\">b</text><rect class=\"bxw\" x=\"130\" y=\"168\" width=\"120\" height=\"36\" rx=\"8\"/><text class=\"tx\" x=\"190\" y=\"191\" text-anchor=\"middle\">[1, 2, 3]</text><line class=\"ar\" x1=\"50\" y1=\"168\" x2=\"128\" y2=\"182\" marker-end=\"url(#t3)\"/><line class=\"ar\" x1=\"50\" y1=\"204\" x2=\"128\" y2=\"192\" marker-end=\"url(#t3)\"/><text class=\"tx tg tb\" x=\"280\" y=\"144\" text-anchor=\"start\" font-size=\"12\">b = a.copy()  (two lists)</text><rect class=\"bx\" x=\"280\" y=\"154\" width=\"50\" height=\"28\" rx=\"8\"/><text class=\"tx tb\" x=\"305\" y=\"173\" text-anchor=\"middle\">a</text><rect class=\"bx\" x=\"280\" y=\"190\" width=\"50\" height=\"28\" rx=\"8\"/><text class=\"tx tb\" x=\"305\" y=\"209\" text-anchor=\"middle\">b</text><rect class=\"bxg\" x=\"390\" y=\"154\" width=\"120\" height=\"28\" rx=\"8\"/><text class=\"tx\" x=\"450\" y=\"173\" text-anchor=\"middle\">[1, 2, 3]</text><rect class=\"bxg\" x=\"390\" y=\"190\" width=\"120\" height=\"28\" rx=\"8\"/><text class=\"tx\" x=\"450\" y=\"209\" text-anchor=\"middle\">[1, 2, 3, 9]</text><line class=\"ar\" x1=\"330\" y1=\"168\" x2=\"388\" y2=\"168\" marker-end=\"url(#t3)\"/><line class=\"ar\" x1=\"330\" y1=\"204\" x2=\"388\" y2=\"204\" marker-end=\"url(#t3)\"/></svg>",
   "caption": "Top: list indexes and a slice. Bottom: b = a shares one list. A copy makes two lists."
  },
  "predict": {
   "q": "code = 'ORD-1042'. What does print(code[0:3]) show?",
   "reveal": "ORD. The slice starts at index 0 and stops before index 3."
  },
  "explain": [
   {
    "h": "Lists",
    "p": [
     "A list holds values in order. Write it with square brackets: [120, 40, 80].",
     "A list can change. A string cannot.",
     "Indexes work like strings. orders[0] is the first value. orders[-1] is the last.",
     "A slice gives a new list: orders[1:3].",
     "append(x) adds one value at the end. pop() removes the last value and gives it to you.",
     "len, sum, min and max work on a list of numbers.",
     "The word in tests if a value is in the list."
    ]
   },
   {
    "h": "Sorting",
    "p": [
     "sorted(list) gives a new sorted list. The original stays the same.",
     "list.sort() sorts the list in place. It returns None.",
     "Add reverse=True to sort from high to low."
    ]
   },
   {
    "h": "Tuples",
    "p": [
     "A tuple uses round brackets: (10, 20). It cannot change.",
     "Use a tuple for a fixed record, such as ('Acme', 3, 12.5).",
     "Unpacking gives each name one value: name, qty, price = record.",
     "A one-value tuple needs a comma: (5,). Without the comma, (5) is just the number 5.",
     "A trailing comma makes a tuple even without brackets: x = 5, makes a tuple."
    ]
   },
   {
    "h": "Shared lists",
    "p": [
     "b = a does not copy the list. Both names point to the same list.",
     "A change through b also shows in a.",
     "Make a real copy with a.copy() or a[:]."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "x = orders.sort() sets x to None. Use sorted(orders) when you need a new list.",
     "orders[10] on a list of 4 values raises IndexError.",
     "orders.append(5) changes the list. It does not return the list."
    ]
   }
  ],
  "example": {
   "title": "Lists that change, copies that do not, tuples as records",
   "code": "orders = [120, 40, 80, 200]\norders.append(60)                                   # append changes the list in place\nprint(orders[0], orders[-1], orders[1:3], len(orders))\nprint(sum(orders), min(orders), max(orders))        # built-ins: do not write a loop for these\n\ntop_two = sorted(orders, reverse=True)[:2]          # sorted() returns a NEW list; orders is untouched\nprint(top_two, orders)\nlast = orders.pop()                                 # pop changes the list AND returns the item\nprint(last, 80 in orders)\n\ncustomer, quantity, unit_price = (\"Acme\", 3, 12.5)  # unpack a tuple into named parts\nprint(customer, quantity * unit_price)\nprint(type((5)), type((5,)))                        # the comma makes the tuple\n\nalias = orders                                      # a second name for the SAME list\nsnapshot = orders.copy()                            # a separate list with the same values\nalias.append(999)\nprint(orders[-1], snapshot[-1], orders == snapshot)",
   "notes": [
    "Use the built-ins sum, min, max, len and sorted. They are shorter, faster and easier to trust than a hand-written loop.",
    "Prefer sorted(x) to x.sort() when you also need the original order. A function that returns a new value is easier to reason about.",
    "Use a tuple for a fixed record and unpack it into names. quantity * unit_price reads better than record[1] * record[2].",
    "Know when two names point at one list. Use .copy() when you need a separate list.",
    "Use negative indexes (orders[-1]) for the end. Do not compute len(orders) - 1."
   ],
   "output": "120 60 [40, 80] 5\n500 40 200\n[200, 120] [120, 40, 80, 200, 60]\n60 True\nAcme 37.5\n<class 'int'> <class 'tuple'>\n999 200 False"
  },
  "qa": {
   "q": "scores = [3, 1, 2]. result = scores.sort(). What does print(result) show? How do you get a sorted copy?",
   "a": "None. The sort method changes the list in place and returns None. Use sorted(scores) to get a new sorted list."
  },
  "build": {
   "task": "prices = [12.5, 8.0, 20.0, 5.5]. From a blank page print: the cheapest price, the dearest price, the total, and the two dearest prices from high to low. Then print prices again to show it did not change.",
   "hint": "Use min, max, sum and sorted with reverse=True and a slice.",
   "check": "You should see 5.5, 20.0, 46.0, [20.0, 12.5] and then [12.5, 8.0, 20.0, 5.5]."
  },
  "teach": "Explain in 5 sentences why changing b also changes a after b = a.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What does sorted(x) do to x?",
    "a": "Nothing. It returns a new list."
   },
   {
    "q": "How do you write a tuple with one value?",
    "a": "(5,) with a comma."
   }
  ],
  "mixed": [
   {
    "title": "A. Remove and report",
    "task": "Remove the last order from the list. Print the removed amount. Print the total of the orders that are left.",
    "hint": "pop() removes the last value and returns it.",
    "setup": "orders = [120, 40, 80, 200]",
    "sql": "removed = orders.pop()\nprint(removed)\nprint(sum(orders))",
    "output": "200\n240",
    "lang": "python"
   },
   {
    "title": "B. Unpack a record",
    "task": "Unpack the tuple into three names. Print one line in this form: Acme: 3 x 12.50 = 37.50.",
    "hint": "name, qty, price = record. Use an f-string with :.2f.",
    "setup": "record = (\"Acme\", 3, 12.5)",
    "sql": "name, qty, price = record\nprint(f\"{name}: {qty} x {price:.2f} = {qty * price:.2f}\")",
    "output": "Acme: 3 x 12.50 = 37.50",
    "lang": "python"
   },
   {
    "title": "C. A backup that changes",
    "task": "The backup should still be [1, 2, 3]. Say what the code prints and why. Then fix it.",
    "hint": "b = a does not copy. Use .copy().",
    "setup": "",
    "sql": "orders = [1, 2, 3]\nbackup = orders.copy()\norders.append(4)\nprint(backup)\nprint(orders)",
    "output": "[1, 2, 3]\n[1, 2, 3, 4]",
    "lang": "python",
    "broken": "orders = [1, 2, 3]\nbackup = orders\norders.append(4)\nprint(backup)",
    "brokenOutput": "[1, 2, 3, 4]"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.3",
  "num": 3
 },
 {
  "id": "py-control",
  "track": "Python",
  "title": "Conditions and loops",
  "minutes": 40,
  "summary": "if chooses what to run. for repeats code for each value. Together they build totals, counts and labels.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 236\" role=\"img\" aria-label=\"A for loop with an if test inside it, and a total that grows on every pass.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"t4\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bxa\" x=\"0\" y=\"8\" width=\"190\" height=\"36\" rx=\"8\"/><text class=\"tx tb\" x=\"95\" y=\"31\" text-anchor=\"middle\" font-size=\"12\">for amount in amounts:</text><line class=\"ar\" x1=\"95\" y1=\"44\" x2=\"95\" y2=\"78\" marker-end=\"url(#t4)\"/><rect class=\"bx\" x=\"10\" y=\"80\" width=\"170\" height=\"36\" rx=\"8\"/><text class=\"tx tb\" x=\"95\" y=\"103\" text-anchor=\"middle\" font-size=\"12\">amount &gt;= 100 ?</text><line class=\"ar\" x1=\"180\" y1=\"98\" x2=\"238\" y2=\"98\" marker-end=\"url(#t4)\"/><text class=\"tx tg tb\" x=\"209\" y=\"90\" text-anchor=\"middle\" font-size=\"11\">True</text><rect class=\"bxg\" x=\"240\" y=\"80\" width=\"220\" height=\"36\" rx=\"8\"/><text class=\"tx\" x=\"350\" y=\"103\" text-anchor=\"middle\" font-size=\"12\">large = large + 1</text><line class=\"ar\" x1=\"95\" y1=\"116\" x2=\"95\" y2=\"150\" marker-end=\"url(#t4)\"/><text class=\"tx tm\" x=\"104\" y=\"138\" text-anchor=\"start\" font-size=\"11\">False: skip</text><rect class=\"bx\" x=\"10\" y=\"152\" width=\"170\" height=\"36\" rx=\"8\"/><text class=\"tx\" x=\"95\" y=\"175\" text-anchor=\"middle\" font-size=\"12\">total = total + amount</text><line class=\"ar\" x1=\"350\" y1=\"116\" x2=\"350\" y2=\"205\"/><line class=\"ar\" x1=\"350\" y1=\"205\" x2=\"270\" y2=\"205\"/><line class=\"ar\" x1=\"270\" y1=\"205\" x2=\"4\" y2=\"205\" marker-end=\"url(#t4)\"/><line class=\"ar\" x1=\"4\" y1=\"205\" x2=\"4\" y2=\"26\"/><line class=\"ar\" x1=\"4\" y1=\"26\" x2=\"0\" y2=\"26\" marker-end=\"url(#t4)\"/><text class=\"tx tm\" x=\"140\" y=\"222\" text-anchor=\"middle\" font-size=\"11\">next value: back to the top</text><line class=\"ar\" x1=\"180\" y1=\"170\" x2=\"238\" y2=\"170\" marker-end=\"url(#t4)\"/><rect class=\"bx\" x=\"240\" y=\"152\" width=\"220\" height=\"36\" rx=\"8\"/><text class=\"tx\" x=\"350\" y=\"175\" text-anchor=\"middle\" font-size=\"11\">after the loop: print(total, large)</text></svg>",
   "caption": "A loop visits each value. The if test decides which line runs."
  },
  "predict": {
   "q": "items = [10, 20, 30]. What do print(items[-1]) and print(len(items)) show?",
   "reveal": "30 and 3."
  },
  "explain": [
   {
    "h": "Conditions",
    "p": [
     "if runs a block only when the test is True.",
     "elif means 'else if'. else runs when no test was True.",
     "A colon ends the if line. The block under it is indented by 4 spaces.",
     "Combine tests with and, or and not.",
     "An empty list, an empty string, 0 and None count as False. This is called truthiness."
    ]
   },
   {
    "h": "for loops",
    "p": [
     "for x in items: runs the block once for each value.",
     "range(n) gives 0 to n - 1. range(1, 4) gives 1, 2, 3.",
     "enumerate(items) gives the index and the value together.",
     "zip(a, b) walks two lists in step.",
     "break stops the loop. continue skips to the next value.",
     "while runs as long as its test is True. Make sure the test can become False."
    ]
   },
   {
    "h": "The accumulator pattern",
    "p": [
     "Start a variable before the loop: total = 0.",
     "Change it inside the loop: total = total + amount.",
     "total += amount is a short way to write the same line.",
     "Use the result after the loop.",
     "This pattern builds totals, counts, the largest value and flags."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "A missing colon gives SyntaxError. A wrong indent gives IndentationError.",
     "Set total = 0 before the loop. If you set it inside the loop, it resets on every pass.",
     "Use == in a test. Use = only to store a value.",
     "A while loop with a test that never turns False runs forever."
    ]
   }
  ],
  "example": {
   "title": "Totals, labels and a loop that stops, with no index juggling",
   "code": "LARGE_LIMIT = 100\nMEDIUM_LIMIT = 50\n\namounts = [120, 40, 80, 200, 60]\ntotal = 0\nlarge_count = 0\nfor amount in amounts:                    # loop over the values, not over range(len(amounts))\n    total += amount\n    if amount >= LARGE_LIMIT:\n        large_count += 1\nprint(total, large_count, round(total / len(amounts), 1))\n\nfor position, amount in enumerate(amounts, start=1):   # enumerate gives the counter for free\n    if amount >= LARGE_LIMIT:\n        label = \"large\"\n    elif amount >= MEDIUM_LIMIT:\n        label = \"medium\"\n    else:\n        label = \"small\"\n    print(position, amount, label)\n\ncustomers = [\"Acme\", \"Birch\", \"Cobalt\"]\nfor customer, amount in zip(customers, amounts):       # zip walks two lists together\n    print(f\"{customer}: {amount}\")\n\nfor amount in amounts:\n    if amount > 150:\n        print(\"first over 150:\", amount)\n        break                                          # stop as soon as the answer is known\n\nif not []:                                             # an empty list is falsy\n    print(\"nothing to process\")\nprint(bool([]), bool([0]), bool(\"\"), bool(None), bool(0))",
   "notes": [
    "Loop over the items themselves. range(len(x)) with x[i] is the habit of someone coming from another language.",
    "enumerate(items, start=1) gives a counter and an item. zip pairs two lists. Both avoid index variables.",
    "Use += for an accumulator: total += amount. It is shorter and the intent is clear.",
    "Name the limits (LARGE_LIMIT). The if/elif chain then reads like the business rule.",
    "Use truthiness: if not items: instead of if len(items) == 0:. Break as soon as you have the answer."
   ],
   "output": "500 2 100.0\n1 120 large\n2 40 small\n3 80 medium\n4 200 large\n5 60 medium\nAcme: 120\nBirch: 40\nCobalt: 80\nfirst over 150: 200\nnothing to process\nFalse True False False False"
  },
  "qa": {
   "q": "What does this code print?\ncount = 0\nfor n in [5, 12, 7, 20, 3]:\n    if n > 6:\n        count = count + 1\nprint(count)",
   "a": "3. The values 12, 7 and 20 are above 6."
  },
  "build": {
   "task": "amounts = [120, 40, 80, 200, 60]. From a blank page print on one line: the total, the average to 1 decimal place, how many amounts are above the average, and the index of the largest amount.",
   "hint": "Loop once for the total. Loop again with enumerate for the count and the largest index.",
   "check": "You should see: 500 100.0 2 3."
  },
  "teach": "Explain in 5 sentences why total = 0 must come before the loop.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What does range(1, 4) give?",
    "a": "1, 2, 3."
   },
   {
    "q": "How does an empty list count in an if test?",
    "a": "As False."
   }
  ],
  "mixed": [
   {
    "title": "A. Count the bands",
    "task": "Count how many amounts are large (100 or more), medium (50 to 99) and small (under 50). Print the three counts on one line.",
    "hint": "Use three counters that start at 0. Use if, elif and else in one loop.",
    "setup": "amounts = [120, 40, 80, 200, 60, 50]",
    "sql": "large = 0\nmedium = 0\nsmall = 0\nfor amount in amounts:\n    if amount >= 100:\n        large += 1\n    elif amount >= 50:\n        medium += 1\n    else:\n        small += 1\nprint(large, medium, small)",
    "output": "2 3 1",
    "lang": "python"
   },
   {
    "title": "B. Find the first match",
    "task": "Find the first amount over 150. Print its position (index) and its value. Stop the loop as soon as you find it.",
    "hint": "Use enumerate. Use break after the print.",
    "setup": "amounts = [120, 40, 80, 200, 60, 50]",
    "sql": "for i, amount in enumerate(amounts):\n    if amount > 150:\n        print(i, amount)\n        break",
    "output": "3 200",
    "lang": "python"
   },
   {
    "title": "C. Walk two lists",
    "task": "Print one line for each customer in this form: Acme owes 120.00. Use zip.",
    "hint": "for name, amount in zip(customers, amounts). Use an f-string with :.2f.",
    "setup": "customers = [\"Acme\", \"Birch\", \"Cobalt\"]\namounts = [120, 40, 200]",
    "sql": "for name, amount in zip(customers, amounts):\n    print(f\"{name} owes {amount:.2f}\")",
    "output": "Acme owes 120.00\nBirch owes 40.00\nCobalt owes 200.00",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.4",
  "num": 4
 },
 {
  "id": "py-functions",
  "track": "Python",
  "title": "Functions",
  "minutes": 40,
  "summary": "A function packs code into a named tool. It takes inputs and returns an output.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 226\" role=\"img\" aria-label=\"A function takes inputs, returns an output, and keeps its own names inside.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"t5\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"8\" width=\"170\" height=\"32\" rx=\"8\"/><text class=\"tx\" x=\"85\" y=\"29\" text-anchor=\"middle\" font-size=\"12\">qty = 3</text><line class=\"ar\" x1=\"170\" y1=\"24\" x2=\"218\" y2=\"62\" marker-end=\"url(#t5)\"/><rect class=\"bx\" x=\"0\" y=\"50\" width=\"170\" height=\"32\" rx=\"8\"/><text class=\"tx\" x=\"85\" y=\"71\" text-anchor=\"middle\" font-size=\"12\">unit_price = 10</text><line class=\"ar\" x1=\"170\" y1=\"66\" x2=\"218\" y2=\"62\" marker-end=\"url(#t5)\"/><rect class=\"bxa\" x=\"0\" y=\"92\" width=\"170\" height=\"32\" rx=\"8\"/><text class=\"tx\" x=\"85\" y=\"113\" text-anchor=\"middle\" font-size=\"12\">vat_rate = 0.2 (default)</text><line class=\"ar\" x1=\"170\" y1=\"108\" x2=\"218\" y2=\"62\" marker-end=\"url(#t5)\"/><rect class=\"bxg\" x=\"220\" y=\"20\" width=\"170\" height=\"86\" rx=\"8\"/><text class=\"tx tb\" x=\"305\" y=\"42\" text-anchor=\"middle\" font-size=\"12\">def total_price(...)</text><text class=\"tx\" x=\"305\" y=\"62\" text-anchor=\"middle\" font-size=\"11\">net = qty * unit_price</text><text class=\"tx\" x=\"305\" y=\"80\" text-anchor=\"middle\" font-size=\"11\">return net * (1 + vat_rate)</text><line class=\"ar\" x1=\"390\" y1=\"62\" x2=\"432\" y2=\"62\" marker-end=\"url(#t5)\"/><rect class=\"bxa\" x=\"434\" y=\"40\" width=\"86\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"477\" y=\"66\" text-anchor=\"middle\">36.0</text><line class=\"ln\" x1=\"0\" y1=\"140\" x2=\"520\" y2=\"140\"/><text class=\"tx tb\" x=\"0\" y=\"162\" text-anchor=\"start\" font-size=\"12\">Scope</text><rect class=\"bxg\" x=\"0\" y=\"172\" width=\"240\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"120\" y=\"197\" text-anchor=\"middle\" font-size=\"12\">inside: net exists (local)</text><rect class=\"bxw\" x=\"270\" y=\"172\" width=\"250\" height=\"40\" rx=\"8\" stroke-dasharray=\"5 4\"/><text class=\"tx tw\" x=\"395\" y=\"197\" text-anchor=\"middle\" font-size=\"12\">outside: print(net) is NameError</text></svg>",
   "caption": "Inputs go in. return sends one result out. Names made inside stay inside."
  },
  "predict": {
   "q": "total = 0. for n in [1, 2, 3]: total = total + n. What is total after the loop?",
   "reveal": "6. The loop adds 1, then 2, then 3."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A function is a named block of code. You call it by name.",
     "def starts a function. The line ends with a colon. The body is indented.",
     "Parameters are the names in the brackets. Arguments are the values you pass in.",
     "return sends a value back to the caller. The function stops at return."
    ]
   },
   {
    "h": "Calling a function",
    "p": [
     "A positional argument goes by position: total_price(3, 10).",
     "A keyword argument goes by name: total_price(3, 10, vat_rate=0).",
     "A default value is used when you give no argument: vat_rate=0.2.",
     "Put parameters with defaults after parameters without defaults.",
     "Use only numbers, text, True, False or None as defaults. A later lesson explains why."
    ]
   },
   {
    "h": "Return values",
    "p": [
     "A function with no return gives back None.",
     "print shows a value. return gives it back. They are different.",
     "return a, b returns a tuple. Unpack it: low, high = min_max(values)."
    ]
   },
   {
    "h": "Docstrings",
    "p": [
     "A docstring is a text in triple quotes on the first line inside a function.",
     "It says what the function does and what it returns. Keep it to one short line when you can.",
     "help(total_price) and your editor show the docstring. You can read it with total_price.__doc__.",
     "A good docstring says what and why. It does not repeat the code."
    ]
   },
   {
    "h": "Scope",
    "p": [
     "A name made inside a function is local. It does not exist outside.",
     "Pass values in with parameters. Send values out with return.",
     "Avoid the global keyword. It makes code hard to follow."
    ]
   },
   {
    "h": "lambda and sort keys",
    "p": [
     "A lambda is a small function in one line: lambda o: o[1].",
     "sorted(items, key=...) uses the key function to decide the order.",
     "Use a lambda only for short, simple rules. Use def for anything longer."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "Forget return and the caller gets None.",
     "total_price without brackets is the function itself, not its result.",
     "Give each function one job and a clear verb name."
    ]
   }
  ],
  "example": {
   "title": "Small functions with one job, a docstring and clear arguments",
   "code": "VAT_RATE = 0.2\n\n\ndef total_price(quantity, unit_price, vat_rate=VAT_RATE):\n    \"\"\"Return the price including VAT.\"\"\"\n    net = quantity * unit_price\n    return net * (1 + vat_rate)\n\n\ndef min_max(values):\n    \"\"\"Return the lowest and the highest value.\"\"\"\n    return min(values), max(values)\n\n\nprint(total_price(3, 10))\nprint(total_price(quantity=3, unit_price=10, vat_rate=0))   # keyword arguments say what each number is\n\nlow, high = min_max([4, 9, 2])\nprint(low, high)\n\n\ndef show_total(price):\n    total = price * 2          # forgot to return it\n\n\nprint(show_total(5))           # None\n\norders = [(\"Acme\", 120), (\"Birch\", 40), (\"Cobalt\", 200)]\nprint(sorted(orders, key=lambda order: order[1], reverse=True))\nprint(max(orders, key=lambda order: order[1]))              # the biggest order, no sorting needed\nprint(total_price.__doc__)",
   "notes": [
    "A function does one job and has a verb name: total_price, min_max. Two blank lines go between functions (PEP 8).",
    "Write a docstring: a text in triple quotes on the first line. It says what the function returns. Tools and help() show it (PEP 257).",
    "A function takes its inputs as parameters and gives its output with return. It does not read or change names outside itself.",
    "Use keyword arguments when a call has several numbers. total_price(quantity=3, unit_price=10) cannot be misread.",
    "Name the lambda parameter (order), not x. Use max(..., key=...) when you only need the biggest item. Sorting everything is wasted work."
   ],
   "output": "36.0\n30\n2 9\nNone\n[('Cobalt', 200), ('Acme', 120), ('Birch', 40)]\n('Cobalt', 200)\nReturn the price including VAT."
  },
  "qa": {
   "q": "def add_vat(price):\n    price * 1.2\nWhat does print(add_vat(10)) show? How do you fix it?",
   "a": "None. The function works out 12.0 but does not return it. Write return price * 1.2."
  },
  "build": {
   "task": "From a blank page write band(amount) and summarise(amounts). band returns 'large' for 100 or more, 'medium' for 50 or more, and 'small' otherwise. summarise returns the count and the total of a list. Test band with 120, 60 and 10. Test summarise with [120, 40, 80].",
   "hint": "band needs if, elif and else with a return in each. summarise returns two values separated by a comma.",
   "check": "You should see: large medium small, then 3 240."
  },
  "teach": "Explain in 5 sentences the difference between print and return.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What does a function without return give back?",
    "a": "None."
   },
   {
    "q": "What does key=lambda o: o[1] do in sorted?",
    "a": "It sorts by the second value of each item."
   }
  ],
  "mixed": [
   {
    "title": "A. Add VAT to a list",
    "task": "Write apply_vat(prices, rate). It returns a new list with each price multiplied by (1 + rate). Test it with [10, 20] and 0.2.",
    "hint": "Start with an empty list. Loop. Append. Return the list after the loop.",
    "setup": "",
    "sql": "def apply_vat(prices, rate):\n    result = []\n    for price in prices:\n        result.append(price * (1 + rate))\n    return result\n\nprint(apply_vat([10, 20], 0.2))",
    "output": "[12.0, 24.0]",
    "lang": "python"
   },
   {
    "title": "B. Shipping with defaults",
    "task": "Write shipping(weight, rate_per_kg=2.5, minimum=5.0). It returns the cost: weight times rate, but never less than the minimum. Test with weights 1 and 4, and then 4 with rate_per_kg=3.",
    "hint": "Use max(weight * rate_per_kg, minimum).",
    "setup": "",
    "sql": "def shipping(weight, rate_per_kg=2.5, minimum=5.0):\n    return max(weight * rate_per_kg, minimum)\n\nprint(shipping(1))\nprint(shipping(4))\nprint(shipping(4, rate_per_kg=3))",
    "output": "5.0\n10.0\n12",
    "lang": "python"
   },
   {
    "title": "C. The two biggest orders",
    "task": "Print the names of the two biggest orders, biggest first. Use sorted with a key.",
    "hint": "Sort by o[1] with reverse=True. Slice the first 2. Take o[0] from each.",
    "setup": "orders = [(\"Acme\", 120), (\"Birch\", 40), (\"Cobalt\", 200), (\"Delta\", 80)]",
    "sql": "top = sorted(orders, key=lambda o: o[1], reverse=True)[:2]\nfor name, amount in top:\n    print(name)",
    "output": "Cobalt\nAcme",
    "lang": "python"
   },
   {
    "title": "D. A name that does not exist",
    "task": "This code stops with an error on the last line. Say what the error is and why. Then fix it so it prints 10.",
    "hint": "net only exists inside the function. Save the returned value in a variable.",
    "setup": "",
    "sql": "def total(price):\n    net = price * 2\n    return net\n\nresult = total(5)\nprint(result)",
    "output": "10",
    "lang": "python",
    "broken": "def total(price):\n    net = price * 2\n    return net\n\ntotal(5)\nprint(net)",
    "brokenOutput": "NameError: name 'net' is not defined"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.5",
  "num": 5
 },
 {
  "id": "py-dict-count",
  "track": "Python",
  "title": "Count items with a dictionary",
  "minutes": 30,
  "summary": "A tally is a dictionary that counts how many times each value appears.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 200\" role=\"img\" aria-label=\"Three panels showing a tally dictionary after each of three orders.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m1\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"8\" width=\"160\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"80\" y=\"30\" text-anchor=\"middle\">Order 1: shipped</text><line class=\"ar\" x1=\"80\" y1=\"42\" x2=\"80\" y2=\"70\" marker-end=\"url(#m1)\"/><text class=\"tx\" x=\"80\" y=\"64\" text-anchor=\"start\"></text><rect class=\"bx\" x=\"0\" y=\"74\" width=\"160\" height=\"92\" rx=\"8\"/><text class=\"tx tm\" x=\"10\" y=\"92\" text-anchor=\"start\" font-size=\"11\">tally</text><rect class=\"bxa\" x=\"10\" y=\"96\" width=\"140\" height=\"22\" rx=\"5\"/><text class=\"tx\" x=\"80\" y=\"112\" text-anchor=\"middle\">shipped: 1</text><text class=\"tx tm\" x=\"80\" y=\"186\" text-anchor=\"middle\" font-size=\"12\">Not in tally: set to 1</text><rect class=\"bx\" x=\"180\" y=\"8\" width=\"160\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"260\" y=\"30\" text-anchor=\"middle\">Order 2: pending</text><line class=\"ar\" x1=\"260\" y1=\"42\" x2=\"260\" y2=\"70\" marker-end=\"url(#m1)\"/><text class=\"tx\" x=\"260\" y=\"64\" text-anchor=\"start\"></text><rect class=\"bx\" x=\"180\" y=\"74\" width=\"160\" height=\"92\" rx=\"8\"/><text class=\"tx tm\" x=\"190\" y=\"92\" text-anchor=\"start\" font-size=\"11\">tally</text><rect class=\"bx\" x=\"190\" y=\"96\" width=\"140\" height=\"22\" rx=\"5\"/><text class=\"tx\" x=\"260\" y=\"112\" text-anchor=\"middle\">shipped: 1</text><rect class=\"bxa\" x=\"190\" y=\"122\" width=\"140\" height=\"22\" rx=\"5\"/><text class=\"tx\" x=\"260\" y=\"138\" text-anchor=\"middle\">pending: 1</text><text class=\"tx tm\" x=\"260\" y=\"186\" text-anchor=\"middle\" font-size=\"12\">Not in tally: set to 1</text><rect class=\"bx\" x=\"360\" y=\"8\" width=\"160\" height=\"34\" rx=\"8\"/><text class=\"tx tb\" x=\"440\" y=\"30\" text-anchor=\"middle\">Order 3: shipped</text><line class=\"ar\" x1=\"440\" y1=\"42\" x2=\"440\" y2=\"70\" marker-end=\"url(#m1)\"/><text class=\"tx\" x=\"440\" y=\"64\" text-anchor=\"start\"></text><rect class=\"bx\" x=\"360\" y=\"74\" width=\"160\" height=\"92\" rx=\"8\"/><text class=\"tx tm\" x=\"370\" y=\"92\" text-anchor=\"start\" font-size=\"11\">tally</text><rect class=\"bxa\" x=\"370\" y=\"96\" width=\"140\" height=\"22\" rx=\"5\"/><text class=\"tx\" x=\"440\" y=\"112\" text-anchor=\"middle\">shipped: 2</text><rect class=\"bx\" x=\"370\" y=\"122\" width=\"140\" height=\"22\" rx=\"5\"/><text class=\"tx\" x=\"440\" y=\"138\" text-anchor=\"middle\">pending: 1</text><text class=\"tx tm\" x=\"440\" y=\"186\" text-anchor=\"middle\" font-size=\"12\">In tally: add 1</text></svg>",
   "caption": "The tally after each order. The highlighted line changes at that step."
  },
  "predict": {
   "q": "The tally is empty. The next order has the status 'shipped'. Does the code add 1 to an existing count, or create a new count?",
   "reveal": "It creates a new count. The key 'shipped' is not in the tally yet, so the else branch sets it to 1."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A dictionary stores pairs. Each pair has a key and a value.",
     "A tally is a dictionary where each key is an item and each value is a count.",
     "Use a tally to count orders by status, sales by region, or errors by type."
    ]
   },
   {
    "h": "How it works",
    "p": [
     "Start with an empty dictionary.",
     "Read one row at a time.",
     "Take the key from the row.",
     "Ask if the key is already in the tally.",
     "If it is, add 1 to its count.",
     "If it is not, set its count to 1.",
     "After the loop, return the tally."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "Check the tally, not the row. The test is: key in tally.",
     "A row has its own keys, such as 'id' and 'status'. A status value is never one of them. The test is always false and every count stays at 1.",
     "Put the return after the loop. A return inside the loop stops the function after the first row.",
     "Return the tally. Do not return the loop variable.",
     "End the def line with a colon."
    ]
   }
  ],
  "example": {
   "title": "Count orders by status",
   "code": "def count_by_status(orders):\n    \"\"\"Return a dict that says how many orders have each status.\"\"\"\n    counts = {}\n    for order in orders:\n        status = order[\"status\"]\n        counts[status] = counts.get(status, 0) + 1     # ask the TALLY, with 0 as the starting value\n    return counts\n\n\norders = [\n    {\"id\": 1, \"status\": \"shipped\"},\n    {\"id\": 2, \"status\": \"pending\"},\n    {\"id\": 3, \"status\": \"shipped\"},\n]\ncounts = count_by_status(orders)\nprint(counts)\nfor status, count in sorted(counts.items()):            # a fixed order makes output easy to compare\n    print(f\"{status:<8}{count}\")",
   "notes": [
    "counts.get(status, 0) + 1 is the whole tally pattern in one line. It replaces the if/else that checks whether the key exists.",
    "Check the tally, never the row. 'status in order' asks about the row's keys and gives a wrong answer without an error.",
    "Sort before you print, so the output is the same on every run and easy to test.",
    "The function returns the dict and prints nothing. A caller can then test it, print it or save it.",
    "Python also has collections.Counter for this job. Learn the hand-written pattern first. Counter is a shortcut for the same idea."
   ],
   "output": "{'shipped': 2, 'pending': 1}\npending 1\nshipped 2"
  },
  "qa": {
   "q": "What does the function return for the customers Acme, Birch, Acme, Acme?",
   "a": "{'Acme': 3, 'Birch': 1}. Acme is new on order 1, so its count is set to 1. Orders 3 and 4 find Acme in the tally, so the count goes to 2 and then 3. Birch is new once."
  },
  "build": {
   "task": "Write count_by_customer(orders) from a blank page. Each row looks like {'id': 1, 'customer': 'Acme'}. For the sample rows Acme, Birch, Acme it must return {'Acme': 2, 'Birch': 1}.",
   "hint": "Start with counts = {} and a for loop. Then write the if and else.",
   "check": "Run it on the sample. Then run it on an empty list. It must return {}."
  },
  "teach": "Explain the counting pattern in 5 sentences. Say what the code asks at each row. Write it for a person who has never seen code.",
  "mistakes": [
   "Wrote 'customer in order' instead of 'customer in count' (2026-10-26).",
   "Wrote 'return customer' inside the loop (2026-10-26).",
   "Missed the colon on the def line (2026-10-26)."
  ],
  "selfCheck": [
   {
    "q": "Which test is correct: 'status in order' or 'status in counts'?",
    "a": "'status in counts'. The tally remembers what the code has seen. The row does not."
   },
   {
    "q": "Where does the return line go?",
    "a": "After the loop. Inside the loop, the function stops after the first row."
   }
  ],
  "mixed": [
   {
    "title": "A. Count, then sort",
    "task": "Count the orders for each customer. Print one line for each customer: the name and the count. Show the highest count first. If two counts are equal, sort by name.",
    "hint": "Build the tally first. Then sort counts.items() with a key. A key can return a tuple. Use a minus sign to sort a number from high to low.",
    "setup": "orders = [\n    {\"id\": 1, \"customer\": \"Acme\", \"amount\": 120.0},\n    {\"id\": 2, \"customer\": \"Birch\", \"amount\": 40.0},\n    {\"id\": 3, \"customer\": \"Acme\", \"amount\": 80.0},\n    {\"id\": 4, \"customer\": \"Cobalt\", \"amount\": 200.0},\n    {\"id\": 5, \"customer\": \"Birch\", \"amount\": 60.0},\n    {\"id\": 6, \"customer\": \"Acme\", \"amount\": 50.0},\n]",
    "sql": "counts = {}\nfor order in orders:\n    customer = order[\"customer\"]\n    if customer in counts:\n        counts[customer] = counts[customer] + 1\n    else:\n        counts[customer] = 1\nfor name, n in sorted(counts.items(), key=lambda kv: (-kv[1], kv[0])):\n    print(name, n)",
    "output": "Acme 3\nBirch 2\nCobalt 1",
    "lang": "python"
   },
   {
    "title": "B. Add up, not count",
    "task": "Find the total amount for each customer. Print the dictionary.",
    "hint": "The pattern is the same. Add the amount instead of 1. The method dict.get(key, 0) gives 0 when the key is missing.",
    "setup": "orders = [\n    {\"id\": 1, \"customer\": \"Acme\", \"amount\": 120.0},\n    {\"id\": 2, \"customer\": \"Birch\", \"amount\": 40.0},\n    {\"id\": 3, \"customer\": \"Acme\", \"amount\": 80.0},\n    {\"id\": 4, \"customer\": \"Cobalt\", \"amount\": 200.0},\n    {\"id\": 5, \"customer\": \"Birch\", \"amount\": 60.0},\n    {\"id\": 6, \"customer\": \"Acme\", \"amount\": 50.0},\n]",
    "sql": "totals = {}\nfor order in orders:\n    customer = order[\"customer\"]\n    totals[customer] = totals.get(customer, 0) + order[\"amount\"]\nprint(totals)",
    "output": "{'Acme': 250.0, 'Birch': 100.0, 'Cobalt': 200.0}",
    "lang": "python"
   },
   {
    "title": "C. Show only repeat customers",
    "task": "Build the count for each customer. Then print the name and count of each customer who has 2 or more orders. Use a loop and an if.",
    "hint": "Loop over counts.items(). Print only when n >= 2.",
    "setup": "orders = [\n    {\"id\": 1, \"customer\": \"Acme\", \"amount\": 120.0},\n    {\"id\": 2, \"customer\": \"Birch\", \"amount\": 40.0},\n    {\"id\": 3, \"customer\": \"Acme\", \"amount\": 80.0},\n    {\"id\": 4, \"customer\": \"Cobalt\", \"amount\": 200.0},\n    {\"id\": 5, \"customer\": \"Birch\", \"amount\": 60.0},\n    {\"id\": 6, \"customer\": \"Acme\", \"amount\": 50.0},\n]",
    "sql": "counts = {}\nfor order in orders:\n    customer = order[\"customer\"]\n    counts[customer] = counts.get(customer, 0) + 1\nfor name, n in counts.items():\n    if n >= 2:\n        print(name, n)",
    "output": "Acme 3\nBirch 2",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.6",
  "num": 6
 },
 {
  "id": "py-comprehensions",
  "track": "Python",
  "title": "List, dict and set comprehensions",
  "minutes": 35,
  "summary": "A comprehension builds a list, dict or set from a loop in one line.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 228\" role=\"img\" aria-label=\"A for loop with append next to the same job as a list comprehension, with each part labelled.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"t6\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"14\" text-anchor=\"start\" font-size=\"12\">Loop</text><text class=\"tx\" x=\"0\" y=\"36\" text-anchor=\"start\" font-size=\"12\">large = []</text><text class=\"tx\" x=\"0\" y=\"56\" text-anchor=\"start\" font-size=\"12\">for o in orders:</text><text class=\"tx\" x=\"0\" y=\"76\" text-anchor=\"start\" font-size=\"12\">    if o[&quot;amount&quot;] &gt;= 100:</text><text class=\"tx\" x=\"0\" y=\"96\" text-anchor=\"start\" font-size=\"12\">        large.append(o[&quot;id&quot;])</text><line class=\"ln\" x1=\"0\" y1=\"130\" x2=\"520\" y2=\"130\"/><text class=\"tx tb\" x=\"0\" y=\"152\" text-anchor=\"start\" font-size=\"12\">Comprehension: same result in one line</text><rect class=\"bx\" x=\"0\" y=\"164\" width=\"14\" height=\"32\" rx=\"6\"/><text class=\"tx\" x=\"7.0\" y=\"185\" text-anchor=\"middle\" font-size=\"11\">[</text><rect class=\"bxg\" x=\"14\" y=\"164\" width=\"78\" height=\"32\" rx=\"6\"/><text class=\"tx\" x=\"53.0\" y=\"185\" text-anchor=\"middle\" font-size=\"11\">o[&quot;id&quot;]</text><rect class=\"bxa\" x=\"94\" y=\"164\" width=\"124\" height=\"32\" rx=\"6\"/><text class=\"tx\" x=\"156.0\" y=\"185\" text-anchor=\"middle\" font-size=\"11\">for o in orders</text><rect class=\"bxw\" x=\"220\" y=\"164\" width=\"192\" height=\"32\" rx=\"6\"/><text class=\"tx\" x=\"316.0\" y=\"185\" text-anchor=\"middle\" font-size=\"11\">if o[&quot;amount&quot;] &gt;= 100</text><rect class=\"bx\" x=\"414\" y=\"164\" width=\"14\" height=\"32\" rx=\"6\"/><text class=\"tx\" x=\"421.0\" y=\"185\" text-anchor=\"middle\" font-size=\"11\">]</text><text class=\"tx tg\" x=\"53\" y=\"216\" text-anchor=\"middle\" font-size=\"11\">what goes in</text><text class=\"tx ta\" x=\"156\" y=\"216\" text-anchor=\"middle\" font-size=\"11\">the loop</text><text class=\"tx tw\" x=\"316\" y=\"216\" text-anchor=\"middle\" font-size=\"11\">the filter (at the end)</text></svg>",
   "caption": "The loop and the comprehension do the same job. Each part has a place."
  },
  "predict": {
   "q": "squares = []. for n in [1, 2, 3]: squares.append(n * n). What is squares?",
   "reveal": "[1, 4, 9]. The loop adds 1 times 1, then 2 times 2, then 3 times 3."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A list comprehension builds a list in one line: [expression for item in items].",
     "It does the same job as a for loop with append.",
     "Add if at the end to keep only some items: [x for x in items if test]."
    ]
   },
   {
    "h": "How to read it",
    "p": [
     "Read it in this order: first for item in items, then if test, then the expression.",
     "The expression is what goes into the new list.",
     "Use a conditional expression to choose a value: 'large' if a >= 100 else 'small'."
    ]
   },
   {
    "h": "Dict and set comprehensions",
    "p": [
     "A dict comprehension uses braces and a colon: {key: value for ...}.",
     "A set comprehension uses braces and no colon: {x for x in items}.",
     "A set keeps each value one time. Its order is not guaranteed."
    ]
   },
   {
    "h": "With sum, min, max and sorted",
    "p": [
     "sum([a for a in amounts if a >= 100]) adds only the large amounts.",
     "sorted({c for c in customers}) gives the unique customers in order."
    ]
   },
   {
    "h": "When not to use one",
    "p": [
     "Use a loop when the body is long or has several steps.",
     "Use a loop when you need side effects, such as printing or writing a file.",
     "One for and one if are easy to read. More than that is not."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "The if goes at the end of the comprehension. It is easy to put it in the wrong place.",
     "A comprehension builds a new list. It does not change the old one."
    ]
   }
  ],
  "example": {
   "title": "Six comprehensions, each doing one clear job",
   "code": "LARGE_LIMIT = 100\nVAT_RATE = 0.2\n\norders = [\n    {\"id\": 1, \"customer\": \"Acme\", \"amount\": 120},\n    {\"id\": 2, \"customer\": \"Birch\", \"amount\": 40},\n    {\"id\": 3, \"customer\": \"Acme\", \"amount\": 80},\n    {\"id\": 4, \"customer\": \"Cobalt\", \"amount\": 200},\n    {\"id\": 5, \"customer\": \"Birch\", \"amount\": 60},\n    {\"id\": 6, \"customer\": \"Acme\", \"amount\": 50},\n]\namounts = [order[\"amount\"] for order in orders]\nlarge_ids = [order[\"id\"] for order in orders if order[\"amount\"] >= LARGE_LIMIT]\namounts_with_vat = [round(amount * (1 + VAT_RATE), 2) for amount in amounts]\nlabels = [\"large\" if amount >= LARGE_LIMIT else \"small\" for amount in amounts]\namount_by_id = {order[\"id\"]: order[\"amount\"] for order in orders}      # a lookup table\ncustomers = sorted({order[\"customer\"] for order in orders})           # a set removes duplicates\nprint(amounts)\nprint(large_ids)\nprint(amounts_with_vat)\nprint(labels)\nprint(amount_by_id)\nprint(customers)\nprint(sum([amount for amount in amounts if amount >= LARGE_LIMIT]))",
   "notes": [
    "Name the loop variable after what it is: order, amount. A single letter makes a long comprehension hard to read.",
    "One comprehension builds one thing. If you need two loops and an if inside, write a normal for loop.",
    "Use a dict comprehension for a lookup table and a set comprehension for unique values. The right container saves later code.",
    "Name the limits (LARGE_LIMIT, VAT_RATE) so the filter reads like the rule.",
    "A comprehension builds a whole list in memory. For one pass over a huge file, lesson 2.1 shows the generator version."
   ],
   "output": "[120, 40, 80, 200, 60, 50]\n[1, 4]\n[144.0, 48.0, 96.0, 240.0, 72.0, 60.0]\n['large', 'small', 'small', 'large', 'small', 'small']\n{1: 120, 2: 40, 3: 80, 4: 200, 5: 60, 6: 50}\n['Acme', 'Birch', 'Cobalt']\n320"
  },
  "qa": {
   "q": "What does [n * n for n in range(1, 6) if n % 2 == 1] return? Why?",
   "a": "[1, 9, 25]. The loop visits 1 to 5. The if keeps the odd numbers 1, 3 and 5. The expression squares each one."
  },
  "build": {
   "task": "Use the list orders from the example. In two lines, with no for statement, build: a sorted list of the unique customers who have an order of 100 or more, and a dict that maps each order id to its amount for orders under 100.",
   "hint": "A set comprehension inside sorted(). A dict comprehension with an if at the end.",
   "check": "You should see ['Acme', 'Cobalt'] and {2: 40, 3: 80, 5: 60, 6: 50}."
  },
  "teach": "Explain in 4 sentences how you turn a for loop with append into a list comprehension.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "Where does the if go in a list comprehension?",
    "a": "At the end, after the for part."
   },
   {
    "q": "Which brackets make a set comprehension?",
    "a": "Braces with no colon."
   }
  ],
  "mixed": [
   {
    "title": "A. Filter a tally",
    "task": "Build the count of orders for each customer with a loop. Then make a new dict with a comprehension. It keeps only the customers with 2 or more orders.",
    "hint": "Loop first. Then {c: n for c, n in counts.items() if n >= 2}.",
    "setup": "orders = [\n    {\"id\": 1, \"customer\": \"Acme\", \"amount\": 120.0},\n    {\"id\": 2, \"customer\": \"Birch\", \"amount\": 40.0},\n    {\"id\": 3, \"customer\": \"Acme\", \"amount\": 80.0},\n    {\"id\": 4, \"customer\": \"Cobalt\", \"amount\": 200.0},\n    {\"id\": 5, \"customer\": \"Birch\", \"amount\": 60.0},\n    {\"id\": 6, \"customer\": \"Acme\", \"amount\": 50.0},\n]",
    "sql": "counts = {}\nfor order in orders:\n    customer = order[\"customer\"]\n    counts[customer] = counts.get(customer, 0) + 1\nrepeat = {c: n for c, n in counts.items() if n >= 2}\nprint(repeat)",
    "output": "{'Acme': 3, 'Birch': 2}",
    "lang": "python"
   },
   {
    "title": "B. Loop to comprehension",
    "task": "The loop above builds a list of upper case customer names for the large orders. Print that list. Then rewrite the loop as one list comprehension and print it. The two lists must match.",
    "hint": "[expression for order in orders if test].",
    "setup": "orders = [\n    {\"id\": 1, \"customer\": \"Acme\", \"amount\": 120.0},\n    {\"id\": 2, \"customer\": \"Birch\", \"amount\": 40.0},\n    {\"id\": 3, \"customer\": \"Acme\", \"amount\": 80.0},\n    {\"id\": 4, \"customer\": \"Cobalt\", \"amount\": 200.0},\n    {\"id\": 5, \"customer\": \"Birch\", \"amount\": 60.0},\n    {\"id\": 6, \"customer\": \"Acme\", \"amount\": 50.0},\n]\n\nlabels = []\nfor order in orders:\n    if order[\"amount\"] >= 100:\n        labels.append(order[\"customer\"].upper())",
    "sql": "print(labels)\nlabels2 = [o[\"customer\"].upper() for o in orders if o[\"amount\"] >= 100]\nprint(labels2)\nprint(labels == labels2)",
    "output": "['ACME', 'COBALT']\n['ACME', 'COBALT']\nTrue",
    "lang": "python"
   },
   {
    "title": "C. Swap keys and values",
    "task": "Make a new dict where the prices are the keys and the item names are the values.",
    "hint": "Use prices.items() and a dict comprehension.",
    "setup": "prices = {\"pen\": 2.5, \"ink\": 10.0}",
    "sql": "swapped = {v: k for k, v in prices.items()}\nprint(swapped)",
    "output": "{2.5: 'pen', 10.0: 'ink'}",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.7",
  "num": 7
 },
 {
  "id": "py-mutable-default",
  "track": "Python",
  "title": "Mutable default arguments",
  "minutes": 30,
  "summary": "A default list is made once. All calls without that argument share it.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 244\" role=\"img\" aria-label=\"Left: two calls share one list. Right: each call makes a new list.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m2\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tw tb\" x=\"0\" y=\"14\" text-anchor=\"start\">Bug: cart=[]</text><rect class=\"bxw\" x=\"0\" y=\"24\" width=\"245\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"122\" y=\"46\" text-anchor=\"middle\" font-size=\"12\">def add_item(item, cart=[])</text><line class=\"ar\" x1=\"122\" y1=\"58\" x2=\"122\" y2=\"92\" marker-end=\"url(#m2)\"/><rect class=\"bxw\" x=\"52\" y=\"96\" width=\"140\" height=\"46\" rx=\"8\"/><text class=\"tx tb\" x=\"122\" y=\"116\" text-anchor=\"middle\">ONE list</text><text class=\"tx tm\" x=\"122\" y=\"133\" text-anchor=\"middle\" font-size=\"11\">made when def runs</text><rect class=\"bx\" x=\"0\" y=\"190\" width=\"112\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"56\" y=\"207\" text-anchor=\"middle\" font-size=\"12\">Call 1</text><text class=\"tx tm\" x=\"56\" y=\"222\" text-anchor=\"middle\" font-size=\"11\">adds &#x27;Laptop&#x27;</text><rect class=\"bx\" x=\"133\" y=\"190\" width=\"112\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"189\" y=\"207\" text-anchor=\"middle\" font-size=\"12\">Call 2</text><text class=\"tx tm\" x=\"189\" y=\"222\" text-anchor=\"middle\" font-size=\"11\">adds &#x27;Mouse&#x27;</text><line class=\"ar\" x1=\"56\" y1=\"190\" x2=\"90\" y2=\"144\" marker-end=\"url(#m2)\"/><line class=\"ar\" x1=\"189\" y1=\"190\" x2=\"156\" y2=\"144\" marker-end=\"url(#m2)\"/><text class=\"tx tw\" x=\"122\" y=\"184\" text-anchor=\"middle\" font-size=\"11\">[&#x27;Laptop&#x27;, &#x27;Mouse&#x27;]</text><text class=\"tx tg tb\" x=\"275\" y=\"14\" text-anchor=\"start\">Fix: cart=None</text><rect class=\"bxg\" x=\"275\" y=\"24\" width=\"245\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"397\" y=\"46\" text-anchor=\"middle\" font-size=\"12\">def add_item(item, cart=None)</text><rect class=\"bx\" x=\"275\" y=\"100\" width=\"112\" height=\"54\" rx=\"8\"/><text class=\"tx tb\" x=\"331\" y=\"120\" text-anchor=\"middle\" font-size=\"12\">Call 1</text><text class=\"tx tm\" x=\"331\" y=\"138\" text-anchor=\"middle\" font-size=\"11\">new list</text><rect class=\"bx\" x=\"408\" y=\"100\" width=\"112\" height=\"54\" rx=\"8\"/><text class=\"tx tb\" x=\"464\" y=\"120\" text-anchor=\"middle\" font-size=\"12\">Call 2</text><text class=\"tx tm\" x=\"464\" y=\"138\" text-anchor=\"middle\" font-size=\"11\">new list</text><line class=\"ar\" x1=\"331\" y1=\"58\" x2=\"331\" y2=\"98\" marker-end=\"url(#m2)\"/><line class=\"ar\" x1=\"464\" y1=\"58\" x2=\"464\" y2=\"98\" marker-end=\"url(#m2)\"/><rect class=\"bxg\" x=\"275\" y=\"190\" width=\"112\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"331\" y=\"212\" text-anchor=\"middle\" font-size=\"12\">[&#x27;Laptop&#x27;]</text><rect class=\"bxg\" x=\"408\" y=\"190\" width=\"112\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"464\" y=\"212\" text-anchor=\"middle\" font-size=\"12\">[&#x27;Mouse&#x27;]</text><line class=\"ar\" x1=\"331\" y1=\"154\" x2=\"331\" y2=\"188\" marker-end=\"url(#m2)\"/><line class=\"ar\" x1=\"464\" y1=\"154\" x2=\"464\" y2=\"188\" marker-end=\"url(#m2)\"/></svg>",
   "caption": "Left: both calls use the same list. Right: each call makes its own list."
  },
  "predict": {
   "q": "def add_item(item, cart=[]) adds the item to cart and returns cart. You call add_item('Laptop'), then add_item('Mouse'). What does the second call return?",
   "reveal": "['Laptop', 'Mouse']. Both calls use the same list."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "Python sets a default value when it runs the def line. It does this one time.",
     "A list is mutable. A function can change it.",
     "If the default is a list, all calls that skip the argument use the same list."
    ]
   },
   {
    "h": "How it works",
    "p": [
     "Python runs the line def add_item(item, cart=[]).",
     "Python makes one empty list and stores it with the function.",
     "Call 1 gives no cart. The function uses the stored list and adds 'Laptop'.",
     "Call 2 gives no cart. The function uses the same stored list. It now holds 'Laptop' and 'Mouse'."
    ]
   },
   {
    "h": "The fix",
    "p": [
     "Use None as the default.",
     "Inside the function, test if cart is None.",
     "If it is, make a new list. Each call then gets its own list."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "No error appears. The output is wrong, and only from the second call.",
     "The problem applies to lists, dictionaries and sets.",
     "The problem does not apply to numbers, strings or None. These cannot change in place."
    ]
   }
  ],
  "example": {
   "title": "The bug, and the pattern that avoids it",
   "code": "def add_item_buggy(item, cart=[]):\n    \"\"\"BUG: the default list is made once, when def runs, and every call shares it.\"\"\"\n    cart.append(item)\n    return cart\n\n\nprint(add_item_buggy(\"Laptop\"))\nprint(add_item_buggy(\"Mouse\"))         # the first call's item is still there\n\n\ndef add_item(item, cart=None):\n    \"\"\"Add the item to the cart. Start a new cart when none is given.\"\"\"\n    if cart is None:                   # None is the signal for \"make a fresh one\"\n        cart = []\n    cart.append(item)\n    return cart\n\n\nprint(add_item(\"Laptop\"))\nprint(add_item(\"Mouse\"))",
   "notes": [
    "A default value is created ONCE, when def runs. A list or dict default is therefore shared by every call.",
    "The standard fix is a None default and a new list inside the function. Write 'is None', not '== None'.",
    "Use only numbers, text, True, False and None as defaults. Linters flag a list or dict default for this reason.",
    "A docstring that names the trap (BUG, or Start a new cart) helps the next reader."
   ],
   "output": "['Laptop']\n['Laptop', 'Mouse']\n['Laptop']\n['Mouse']"
  },
  "qa": {
   "q": "def log(msg, entries=[]) appends msg to entries and returns entries. You call log('a'), then log('b'). What does the second call return? How do you fix it?",
   "a": "['a', 'b']. Change the default to None. Inside the function write: if entries is None: entries = []."
  },
  "build": {
   "task": "Write add_item(item, cart=None) so a call without a cart starts a new list.",
   "hint": "Test with: if cart is None.",
   "check": "Call it three times without a cart. No result may contain items from another call."
  },
  "teach": "Explain in 4 sentences why cart=[] is shared between calls. Use the words 'def line' and 'one list'.",
  "mistakes": [
   "Logged in the warm-up on 2026-09-30. Review it again."
  ],
  "selfCheck": [
   {
    "q": "Does the same problem happen with a default of 0?",
    "a": "No. A number cannot change in place. Each call starts with 0."
   },
   {
    "q": "When does Python make the default list?",
    "a": "When it runs the def line, one time."
   }
  ],
  "mixed": [
   {
    "title": "A. Fix a shared list",
    "task": "The code below should print ['A'] and then ['B']. Run it in your head. Say what it prints. Then rewrite add_order so it prints ['A'] and then ['B'].",
    "hint": "Use None as the default. Make the new list inside the function.",
    "setup": "",
    "sql": "def add_order(order, orders=None):\n    if orders is None:\n        orders = []\n    orders.append(order)\n    return orders\n\nprint(add_order(\"A\"))\nprint(add_order(\"B\"))",
    "output": "['A']\n['B']",
    "lang": "python",
    "broken": "def add_order(order, orders=[]):\n    orders.append(order)\n    return orders\n\nprint(add_order(\"A\"))\nprint(add_order(\"B\"))",
    "brokenOutput": "['A']\n['A', 'B']"
   },
   {
    "title": "B. Fix a shared dictionary",
    "task": "Each call should start with an empty tally. It should print {'a': 1} and then {'b': 1}. Say what the code below prints. Then fix it.",
    "hint": "The same rule applies to dictionaries. Use None. Make the new dict inside the function.",
    "setup": "",
    "sql": "def tally(word, counts=None):\n    if counts is None:\n        counts = {}\n    counts[word] = counts.get(word, 0) + 1\n    return counts\n\nprint(tally(\"a\"))\nprint(tally(\"b\"))",
    "output": "{'a': 1}\n{'b': 1}",
    "lang": "python",
    "broken": "def tally(word, counts={}):\n    counts[word] = counts.get(word, 0) + 1\n    return counts\n\nprint(tally(\"a\"))\nprint(tally(\"b\"))",
    "brokenOutput": "{'a': 1}\n{'a': 1, 'b': 1}"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.8",
  "num": 8
 },
 {
  "id": "py-files",
  "track": "Python",
  "title": "Files: text, CSV and JSON",
  "minutes": 45,
  "summary": "Open a file with with. Read CSV rows as dictionaries. Remember that CSV values arrive as text.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 214\" role=\"img\" aria-label=\"A CSV file is read into rows of text values, converted to numbers, totalled, and saved as JSON.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"t7\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"10\" width=\"96\" height=\"62\" rx=\"8\"/><text class=\"tx tb\" x=\"48\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">orders.csv</text><text class=\"tx tm\" x=\"48\" y=\"54\" text-anchor=\"middle\" font-size=\"9\">text on disk</text><line class=\"ar\" x1=\"96\" y1=\"41\" x2=\"104\" y2=\"41\" marker-end=\"url(#t7)\"/><rect class=\"bxa\" x=\"104\" y=\"10\" width=\"96\" height=\"62\" rx=\"8\"/><text class=\"tx tb\" x=\"152\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">csv.DictReader</text><text class=\"tx tm\" x=\"152\" y=\"54\" text-anchor=\"middle\" font-size=\"9\">reads rows</text><line class=\"ar\" x1=\"200\" y1=\"41\" x2=\"208\" y2=\"41\" marker-end=\"url(#t7)\"/><rect class=\"bxw\" x=\"208\" y=\"10\" width=\"96\" height=\"62\" rx=\"8\"/><text class=\"tx tb\" x=\"256\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">rows</text><text class=\"tx tm\" x=\"256\" y=\"54\" text-anchor=\"middle\" font-size=\"9\">list of dicts, values are str</text><line class=\"ar\" x1=\"304\" y1=\"41\" x2=\"312\" y2=\"41\" marker-end=\"url(#t7)\"/><rect class=\"bxa\" x=\"312\" y=\"10\" width=\"96\" height=\"62\" rx=\"8\"/><text class=\"tx tb\" x=\"360\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">float(row[...])</text><text class=\"tx tm\" x=\"360\" y=\"54\" text-anchor=\"middle\" font-size=\"9\">make numbers</text><line class=\"ar\" x1=\"408\" y1=\"41\" x2=\"416\" y2=\"41\" marker-end=\"url(#t7)\"/><rect class=\"bxg\" x=\"416\" y=\"10\" width=\"96\" height=\"62\" rx=\"8\"/><text class=\"tx tb\" x=\"464\" y=\"34\" text-anchor=\"middle\" font-size=\"11\">totals</text><text class=\"tx tm\" x=\"464\" y=\"54\" text-anchor=\"middle\" font-size=\"9\">dict of floats</text><line class=\"ar\" x1=\"480\" y1=\"72\" x2=\"480\" y2=\"108\" marker-end=\"url(#t7)\"/><rect class=\"bxg\" x=\"300\" y=\"110\" width=\"180\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"390\" y=\"135\" text-anchor=\"middle\" font-size=\"12\">json.dumps(totals)</text><line class=\"ar\" x1=\"300\" y1=\"130\" x2=\"262\" y2=\"130\" marker-end=\"url(#t7)\"/><rect class=\"bx\" x=\"100\" y=\"110\" width=\"160\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"180\" y=\"135\" text-anchor=\"middle\" font-size=\"12\">totals.json (text)</text><text class=\"tx tm\" x=\"0\" y=\"182\" text-anchor=\"start\" font-size=\"12\">with open(...) as f:  Python closes the file when the block ends.</text><text class=\"tx tw\" x=\"0\" y=\"202\" text-anchor=\"start\" font-size=\"12\">CSV and JSON are both text. CSV numbers arrive as str.</text></svg>",
   "caption": "A CSV file is text. Convert the values before you do sums."
  },
  "predict": {
   "q": "row = {'id': '1', 'amount': '120'}. What does print(type(row['amount'])) show?",
   "reveal": "<class 'str'>. The amount is the text '120', not the number 120."
  },
  "explain": [
   {
    "h": "Text files",
    "p": [
     "open(path) gives a file object. Use it with with, so Python closes the file for you.",
     "Mode 'r' reads. Mode 'w' writes and replaces the file. Mode 'a' adds to the end.",
     "Add encoding='utf-8' so special characters read correctly.",
     "A loop over a file gives one line at a time. Each line ends with a newline. Use line.strip()."
    ]
   },
   {
    "h": "Import",
    "p": [
     "import csv loads a module. A module is code that someone else wrote.",
     "Put imports at the top of the file. Use the module name: csv.DictReader.",
     "A later lesson explains imports in full."
    ]
   },
   {
    "h": "CSV",
    "p": [
     "csv.DictReader gives each row as a dictionary. The first row of the file gives the keys.",
     "Open a CSV file with newline=''. This is a rule of the csv module.",
     "Every value from a CSV file is a str. Convert it: float(row['amount']).",
     "csv.DictWriter writes dictionaries. Call writeheader() first, then writerow() for each row."
    ]
   },
   {
    "h": "JSON",
    "p": [
     "JSON stores nested data as text. Python lists and dicts match JSON arrays and objects.",
     "json.dumps(obj) makes text. json.loads(text) makes objects. json.dump and json.load work with files.",
     "JSON keys are always text. The int key 1 becomes '1'.",
     "JSON has no tuple. A tuple becomes a list."
    ]
   },
   {
    "h": "Practice without a real file",
    "p": [
     "io.StringIO(text) makes a fake file from a string. Use it to test code before you have a file.",
     "For a real file, replace io.StringIO(raw) with open('orders.csv', newline='')."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "Adding an int to a str raises TypeError. Convert CSV values first.",
     "Mode 'w' erases the old file. Check the file name first.",
     "On Windows, a path with backslashes needs a raw string, such as r'C:\\data\\x.csv', or forward slashes."
    ]
   }
  ],
  "example": {
   "title": "Read a CSV, total it, write CSV and JSON with real files",
   "code": "import csv\nimport io\nimport json\n\nORDERS_FILE = \"orders.csv\"\n\nwith open(ORDERS_FILE, newline=\"\", encoding=\"utf-8\") as file:     # with closes the file for you\n    rows = list(csv.DictReader(file))\nprint(rows[0])\nprint(type(rows[0][\"amount\"]))                                    # every value from a CSV is text\n\ntotals = {}\nfor row in rows:\n    customer = row[\"customer\"]\n    totals[customer] = totals.get(customer, 0) + float(row[\"amount\"])   # convert where you use it\nprint(totals)\n\nwith open(\"totals.csv\", \"w\", newline=\"\", encoding=\"utf-8\") as file:\n    writer = csv.DictWriter(file, fieldnames=[\"customer\", \"total\"])\n    writer.writeheader()\n    for customer, total in totals.items():\n        writer.writerow({\"customer\": customer, \"total\": total})\n\nwith open(\"totals.json\", \"w\", encoding=\"utf-8\") as file:\n    json.dump({\"totals\": totals}, file, indent=2)\n\nwith open(\"totals.csv\", newline=\"\", encoding=\"utf-8\") as file:\n    print(file.read().splitlines())\nwith open(\"totals.json\", encoding=\"utf-8\") as file:\n    print(json.load(file)[\"totals\"][\"Acme\"])\n\n# io.StringIO is a file that lives in memory. It is how the examples in this course feed text to csv.\nsample = list(csv.DictReader(io.StringIO(\"id,customer,amount\\n1,Acme,120\\n\")))\nprint(sample[0][\"customer\"])",
   "notes": [
    "Always open files with 'with'. It closes the file even when an error happens.",
    "Always pass encoding='utf-8', and newline='' for CSV. The defaults differ between Windows and other systems, and this is a classic source of broken files.",
    "csv.DictReader gives each row as a dict with the header names. row['amount'] is clearer than row[2].",
    "Every CSV value is text. Convert it once, at the place you use it, and fail loudly if it is bad.",
    "Keep file names in a constant. Real projects use pathlib for paths. You will meet it in a later module."
   ],
   "output": "$ python example.py\n{'id': '1', 'customer': 'Acme', 'amount': '120'}\n<class 'str'>\n{'Acme': 200.0, 'Birch': 40.0}\n['customer,total', 'Acme,200.0', 'Birch,40.0']\n200.0\nAcme"
  },
  "qa": {
   "q": "A row from DictReader is {'id': '1', 'amount': '120'}. You run total = 0 and then total = total + row['amount']. What happens? How do you fix it?",
   "a": "It raises TypeError: unsupported operand type(s) for +: 'int' and 'str'. The CSV value is text. Fix it: total = total + float(row['amount'])."
  },
  "build": {
   "task": "From a blank page: make a file orders.csv with the columns id, customer, amount and 4 rows. Write a script that reads it, totals the amount for each customer, and writes the totals to totals.json. Open totals.json and check it.",
   "hint": "Use open('orders.csv', newline='') with csv.DictReader. Use the tally pattern with float(). Use json.dump with indent=2.",
   "check": "totals.json shows each customer once, with the correct total."
  },
  "teach": "Explain in 5 sentences why a CSV amount of 120 is not the number 120 when you first read it.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What type is every value from csv.DictReader?",
    "a": "str."
   },
   {
    "q": "What does mode 'w' do to an old file?",
    "a": "It erases it and starts a new file."
   }
  ],
  "mixed": [
   {
    "title": "A. Read, convert, filter",
    "task": "Read raw as a CSV. Make the amount a float in every row. Print the ids of the rows with an amount of 100 or more.",
    "hint": "Use csv.DictReader(io.StringIO(raw)). A list comprehension can build the new rows.",
    "setup": "import csv\nimport io\n\nraw = \"id,customer,amount\\n1,Acme,120\\n2,Birch,40\\n3,Acme,80\\n4,Cobalt,200\\n\"",
    "sql": "rows = list(csv.DictReader(io.StringIO(raw)))\nrows = [{\"id\": r[\"id\"], \"amount\": float(r[\"amount\"])} for r in rows]\nprint([r[\"id\"] for r in rows if r[\"amount\"] >= 100])",
    "output": "['1', '4']",
    "lang": "python"
   },
   {
    "title": "B. Write a CSV",
    "task": "Write totals as a CSV with the columns customer and total. Use a StringIO as the file. Print the lines.",
    "hint": "DictWriter, writeheader, then writerow for each pair. Use out.getvalue().splitlines().",
    "setup": "import csv\nimport io\n\ntotals = {\"Acme\": 200.0, \"Birch\": 40.0}",
    "sql": "out = io.StringIO()\nwriter = csv.DictWriter(out, fieldnames=[\"customer\", \"total\"])\nwriter.writeheader()\nfor customer, total in totals.items():\n    writer.writerow({\"customer\": customer, \"total\": total})\nprint(out.getvalue().splitlines())",
    "output": "['customer,total', 'Acme,200.0', 'Birch,40.0']",
    "lang": "python"
   },
   {
    "title": "C. A JSON round trip",
    "task": "Turn data into JSON text. Print it. Turn the text back into Python and print the result. Say what changed.",
    "hint": "json.dumps then json.loads. Look at the key 1 and the tuple.",
    "setup": "import json\n\ndata = {1: \"a\", \"pair\": (1, 2)}",
    "sql": "text = json.dumps(data)\nprint(text)\nback = json.loads(text)\nprint(back)",
    "output": "{\"1\": \"a\", \"pair\": [1, 2]}\n{'1': 'a', 'pair': [1, 2]}",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-comprehensions",
    "title": "List, dict and set comprehensions",
    "no": "1.7"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.9",
  "num": 9
 },
 {
  "id": "py-except-order",
  "track": "Python",
  "title": "try/except and the order of except blocks",
  "minutes": 30,
  "summary": "Python runs the first except block that matches. Put specific errors first.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 214\" role=\"img\" aria-label=\"An error falls through except blocks from the top. The first match runs.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m4\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"10\" width=\"170\" height=\"36\" rx=\"8\"/><text class=\"tx tb\" x=\"85\" y=\"33\" text-anchor=\"middle\">Exception</text><rect class=\"bx\" x=\"0\" y=\"96\" width=\"170\" height=\"36\" rx=\"8\"/><text class=\"tx\" x=\"85\" y=\"119\" text-anchor=\"middle\" font-size=\"12\">InsufficientFundsError</text><line class=\"ar\" x1=\"85\" y1=\"96\" x2=\"85\" y2=\"48\" marker-end=\"url(#m4)\"/><text class=\"tx tm\" x=\"95\" y=\"76\" text-anchor=\"start\" font-size=\"11\">is a kind of</text><rect class=\"bxw\" x=\"220\" y=\"6\" width=\"220\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"330\" y=\"28\" text-anchor=\"middle\" font-size=\"12\">raise InsufficientFundsError</text><line class=\"ar\" x1=\"330\" y1=\"40\" x2=\"330\" y2=\"66\" marker-end=\"url(#m4)\"/><rect class=\"bxa\" x=\"220\" y=\"68\" width=\"220\" height=\"38\" rx=\"8\"/><text class=\"tx tb\" x=\"330\" y=\"92\" text-anchor=\"middle\" font-size=\"13\">except Exception:</text><text class=\"tx ta tb\" x=\"450\" y=\"92\" text-anchor=\"start\" font-size=\"12\">MATCH</text><text class=\"tx ta\" x=\"330\" y=\"124\" text-anchor=\"middle\" font-size=\"12\">Python stops here. It prints: general</text><rect class=\"bx\" x=\"220\" y=\"146\" width=\"220\" height=\"38\" rx=\"8\" stroke-dasharray=\"5 4\"/><text class=\"tx tm\" x=\"330\" y=\"170\" text-anchor=\"middle\" font-size=\"12\">except InsufficientFundsError:</text><text class=\"tx tw\" x=\"330\" y=\"200\" text-anchor=\"middle\" font-size=\"12\">Never reached. No warning appears.</text></svg>",
   "caption": "An error is checked against each except block from the top. The first match runs."
  },
  "predict": {
   "q": "try: raise InsufficientFundsError(...). The first block is except Exception. The second block is except InsufficientFundsError. Which block runs?",
   "reveal": "The first block, except Exception. InsufficientFundsError is a kind of Exception, so the first block matches. The second block can never run."
  },
  "explain": [
   {
    "h": "Your own error types",
    "p": [
     "You can make your own error type. It is a class that inherits from Exception.",
     "For now, copy this class. The text in triple quotes is a docstring. Lesson 1.5 explained it.",
     "class InsufficientFundsError(Exception):  then, on the next line, indented: a docstring.",
     "Classes have their own lesson later. You only need the one line here."
    ]
   },
   {
    "h": "What it is",
    "p": [
     "try runs code that can fail. except runs when the code raises an error.",
     "A custom exception is a class that you make. It inherits from Exception.",
     "Python checks each except block from top to bottom."
    ]
   },
   {
    "h": "How it works",
    "p": [
     "The code raises an error.",
     "Python compares the error with the first except block.",
     "If the error matches, Python runs that block and ignores all other blocks.",
     "A match includes subclasses. InsufficientFundsError is a kind of Exception, so except Exception matches it."
    ]
   },
   {
    "h": "The rule",
    "p": [
     "Put the most specific exceptions first.",
     "Put except Exception last, as the general catch.",
     "If a general block is first, the specific blocks after it can never run.",
     "else runs when no error is raised. finally always runs."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "Python shows no warning for a block that can never run."
    ]
   }
  ],
  "example": {
   "title": "Catch the error you expect, in the right order",
   "code": "class InsufficientFundsError(Exception):\n    \"\"\"Raised when a withdrawal is larger than the balance.\"\"\"      # a docstring is enough: no pass needed\n\n\ndef parse_amount(text):\n    \"\"\"Return the amount as a float, or None when the text is not a number.\"\"\"\n    try:\n        return float(text)\n    except ValueError:                 # catch only the error you expect\n        return None\n\n\nprint([parse_amount(text) for text in [\"12.5\", \"abc\", \"7\"]])\n\n# Wrong order: Exception catches everything first, so the specific block never runs.\ntry:\n    raise InsufficientFundsError(\"low\")\nexcept Exception:\n    print(\"general\")\nexcept InsufficientFundsError:\n    print(\"specific\")\n\n# Right order: the most specific error first, the general one last.\ntry:\n    raise InsufficientFundsError(\"low\")\nexcept InsufficientFundsError:\n    print(\"specific\")\nexcept Exception:\n    print(\"general\")",
   "notes": [
    "Catch the narrowest error you can: except ValueError. A bare except or except Exception hides real bugs.",
    "Keep the try block small. Only the line that can fail goes inside it.",
    "Python checks except blocks from the top. The first match runs. Put the specific error first and the general one last.",
    "Custom errors are classes that inherit from Exception. A docstring explains when to raise it.",
    "Return a clear value (None here) or raise a clear error. Never let the program carry on with a silent wrong answer."
   ],
   "output": "[12.5, None, 7.0]\ngeneral\nspecific"
  },
  "qa": {
   "q": "try: int('abc'). The first block is except Exception: print('A'). The second block is except ValueError: print('B'). What prints? How do you fix it?",
   "a": "A prints. int('abc') raises ValueError, which is a kind of Exception, so the first block matches. Put except ValueError before except Exception."
  },
  "build": {
   "task": "Write safe_ratio(a, b) that returns a / b. Use three except blocks: ZeroDivisionError returns 'Cannot divide by zero', TypeError returns 'Numbers only', and Exception returns 'Unexpected'.",
   "hint": "Put ZeroDivisionError and TypeError first. Put Exception last.",
   "check": "safe_ratio(1, 0) gives 'Cannot divide by zero'. safe_ratio('a', 2) gives 'Numbers only'. safe_ratio(1, 2) gives 0.5."
  },
  "teach": "Explain in 4 sentences why the order of except blocks matters.",
  "mistakes": [
   "Predicted 'specific' when the answer was 'general' (2026-10-12)."
  ],
  "selfCheck": [
   {
    "q": "Is ZeroDivisionError a kind of Exception?",
    "a": "Yes. Built-in errors like this inherit from Exception."
   },
   {
    "q": "When does finally run?",
    "a": "Always, with or without an error."
   }
  ],
  "mixed": [
   {
    "title": "A. A custom error that is also a ValueError",
    "task": "Say what the code below prints for the three inputs. One result is wrong for the job. Fix the code so '-3' prints negative and 'abc' prints not a number.",
    "hint": "NegativeAmountError is a kind of ValueError. Which block must come first?",
    "setup": "",
    "sql": "class NegativeAmountError(ValueError):\n    pass\n\ndef parse_amount(text):\n    value = float(text)\n    if value < 0:\n        raise NegativeAmountError(text)\n    return value\n\nfor text in [\"12.5\", \"abc\", \"-3\"]:\n    try:\n        print(parse_amount(text))\n    except NegativeAmountError:\n        print(\"negative\")\n    except ValueError:\n        print(\"not a number\")",
    "output": "12.5\nnot a number\nnegative",
    "lang": "python",
    "broken": "class NegativeAmountError(ValueError):\n    pass\n\ndef parse_amount(text):\n    value = float(text)\n    if value < 0:\n        raise NegativeAmountError(text)\n    return value\n\nfor text in [\"12.5\", \"abc\", \"-3\"]:\n    try:\n        print(parse_amount(text))\n    except ValueError:\n        print(\"not a number\")\n    except NegativeAmountError:\n        print(\"negative\")",
    "brokenOutput": "12.5\nnot a number\nnot a number"
   },
   {
    "title": "B. Read a file and skip bad rows",
    "task": "The text raw is a small CSV file. Read it with csv.DictReader. Add up the amount for each customer. If an amount is not a number, do not stop. Save the id of that row in a list. Print the totals, then the list of bad ids.",
    "hint": "Use io.StringIO(raw) in place of a file. Put float() inside try. The error to catch is ValueError. The id is a string.",
    "setup": "import csv\nimport io\n\nraw = \"id,customer,amount\\n1,Acme,120\\n2,Birch,abc\\n3,Acme,80\\n4,Cobalt,\\n5,Birch,60\\n\"",
    "sql": "totals = {}\nbad = []\nfor row in csv.DictReader(io.StringIO(raw)):\n    try:\n        amount = float(row[\"amount\"])\n    except ValueError:\n        bad.append(row[\"id\"])\n        continue\n    customer = row[\"customer\"]\n    totals[customer] = totals.get(customer, 0) + amount\nprint(totals)\nprint(bad)",
    "output": "{'Acme': 200.0, 'Birch': 60.0}\n['2', '4']",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.10",
  "num": 10
 },
 {
  "id": "py-scripts",
  "track": "Python",
  "title": "Scripts, imports and virtual environments",
  "minutes": 40,
  "summary": "A script has a clear shape. Imports bring code in. A virtual environment keeps each project's packages apart.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 214\" role=\"img\" aria-label=\"The parts of a command line, and the difference between running a file and importing it.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"t8\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"8\" width=\"80\" height=\"34\" rx=\"6\"/><text class=\"tx tb\" x=\"40.0\" y=\"30\" text-anchor=\"middle\" font-size=\"12\">python</text><rect class=\"bxa\" x=\"90\" y=\"8\" width=\"90\" height=\"34\" rx=\"6\"/><text class=\"tx tb\" x=\"135.0\" y=\"30\" text-anchor=\"middle\" font-size=\"12\">tool.py</text><rect class=\"bxg\" x=\"190\" y=\"8\" width=\"110\" height=\"34\" rx=\"6\"/><text class=\"tx tb\" x=\"245.0\" y=\"30\" text-anchor=\"middle\" font-size=\"12\">orders.csv</text><rect class=\"bxw\" x=\"310\" y=\"8\" width=\"150\" height=\"34\" rx=\"6\"/><text class=\"tx tb\" x=\"385.0\" y=\"30\" text-anchor=\"middle\" font-size=\"12\">--threshold 100</text><line class=\"ar\" x1=\"40\" y1=\"42\" x2=\"40\" y2=\"66\" marker-end=\"url(#t8)\"/><text class=\"tx tm\" x=\"40\" y=\"82\" text-anchor=\"middle\" font-size=\"10\">runs the file</text><line class=\"ar\" x1=\"135\" y1=\"42\" x2=\"135\" y2=\"66\" marker-end=\"url(#t8)\"/><text class=\"tx tm\" x=\"135\" y=\"82\" text-anchor=\"middle\" font-size=\"10\">__name__ is &#x27;__main__&#x27;</text><line class=\"ar\" x1=\"245\" y1=\"42\" x2=\"245\" y2=\"66\" marker-end=\"url(#t8)\"/><text class=\"tx tm\" x=\"245\" y=\"82\" text-anchor=\"middle\" font-size=\"10\">args.filename</text><line class=\"ar\" x1=\"385\" y1=\"42\" x2=\"385\" y2=\"66\" marker-end=\"url(#t8)\"/><text class=\"tx tm\" x=\"385\" y=\"82\" text-anchor=\"middle\" font-size=\"10\">args.threshold = 100.0</text><line class=\"ln\" x1=\"0\" y1=\"104\" x2=\"520\" y2=\"104\"/><rect class=\"bxg\" x=\"0\" y=\"118\" width=\"250\" height=\"58\" rx=\"8\"/><text class=\"tx tb\" x=\"125\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">python tool.py</text><text class=\"tx\" x=\"125\" y=\"160\" text-anchor=\"middle\" font-size=\"12\">main() runs</text><rect class=\"bxw\" x=\"270\" y=\"118\" width=\"250\" height=\"58\" rx=\"8\"/><text class=\"tx tb\" x=\"395\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">import tool  (from another file)</text><text class=\"tx\" x=\"395\" y=\"160\" text-anchor=\"middle\" font-size=\"11\">__name__ is &#x27;tool&#x27;. main() does not run.</text><text class=\"tx tm\" x=\"0\" y=\"202\" text-anchor=\"start\" font-size=\"12\">.venv keeps this project&#x27;s packages apart from every other project.</text></svg>",
   "caption": "Each word on the command line has a job. Running a file is not the same as importing it."
  },
  "predict": {
   "q": "int('abc') runs. Which error does Python raise?",
   "reveal": "ValueError. The text 'abc' is not a valid whole number."
  },
  "explain": [
   {
    "h": "Script shape",
    "p": [
     "Put imports at the top, then functions, then a main() function.",
     "End the file with: if __name__ == '__main__': main().",
     "When you run python tool.py, __name__ is '__main__'. The code under the if runs.",
     "When another file imports tool, __name__ is 'tool'. The code under the if does not run.",
     "This lets you reuse the functions without running the whole script."
    ]
   },
   {
    "h": "Imports",
    "p": [
     "import csv loads a module. Use csv.DictReader.",
     "from csv import DictReader loads one name. Use DictReader directly.",
     "Your own file helpers.py is a module. Keep it in the same folder and write import helpers.",
     "Do not name your file csv.py or json.py. It hides the standard module of the same name."
    ]
   },
   {
    "h": "Command line arguments",
    "p": [
     "argparse reads the words you type after the script name.",
     "A positional argument is required: parser.add_argument('filename').",
     "An option starts with two dashes: --threshold. Give it a type and a default.",
     "parser.parse_args() returns an object. Read args.filename and args.threshold.",
     "To test, pass a list: parser.parse_args(['orders.csv', '--threshold', '100'])."
    ]
   },
   {
    "h": "Virtual environments",
    "p": [
     "A virtual environment is a private folder of packages for one project.",
     "Create it: python -m venv .venv.",
     "Activate it on Windows: .venv\\Scripts\\activate. On Mac or Linux: source .venv/bin/activate.",
     "Install a package: pip install pandas. Save the list: pip freeze > requirements.txt.",
     "Rebuild it later: pip install -r requirements.txt."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "Run the script from the folder that holds your data file, or give the full path.",
     "A package installed outside the virtual environment is not visible inside it."
    ]
   }
  ],
  "example": {
   "title": "A small command line tool with a clear structure",
   "code": "\"\"\"List the orders at or above a threshold.\"\"\"\nimport argparse\nimport csv\n\nDEFAULT_THRESHOLD = 100.0\n\n\ndef read_orders(path):\n    \"\"\"Read a CSV file and return one dict per row, with the amount as a float.\"\"\"\n    orders = []\n    with open(path, newline=\"\", encoding=\"utf-8\") as file:\n        for row in csv.DictReader(file):\n            row[\"amount\"] = float(row[\"amount\"])       # convert once, here\n            orders.append(row)\n    return orders\n\n\ndef filter_large(orders, threshold):\n    \"\"\"Return the orders with an amount at or above the threshold.\"\"\"\n    return [order for order in orders if order[\"amount\"] >= threshold]\n\n\ndef parse_args():\n    parser = argparse.ArgumentParser(description=\"List the large orders in a CSV file.\")\n    parser.add_argument(\"filename\", help=\"CSV file with id, customer and amount columns\")\n    parser.add_argument(\"--threshold\", type=float, default=DEFAULT_THRESHOLD,\n                        help=\"smallest amount to show (default: %(default)s)\")\n    return parser.parse_args()\n\n\ndef main():\n    args = parse_args()\n    for order in filter_large(read_orders(args.filename), args.threshold):\n        print(f\"{order['id']:<4}{order['customer']:<8}{order['amount']:>8.2f}\")\n\n\nif __name__ == \"__main__\":\n    main()",
   "notes": [
    "Split the script into functions that each do one job: read, filter, parse the arguments, run. Each can be tested alone.",
    "if __name__ == '__main__': main() lets another file import the functions without running the tool.",
    "argparse gives you --help and clear errors for free. Write a help text for each argument.",
    "Convert types once, at the edge (read_orders). The rest of the code works with real numbers.",
    "A module docstring on the first line says what the file is for. Imports come next, standard library first (PEP 8)."
   ],
   "output": "$ python tool.py orders.csv --threshold 100\n1   Acme      120.00\n4   Cobalt    200.00"
  },
  "qa": {
   "q": "What is __name__ when you run python tool.py? What is it when another file runs import tool?",
   "a": "It is '__main__' when you run the file. It is 'tool' when another file imports it."
  },
  "build": {
   "task": "From a blank page: make a project folder and a virtual environment. Write tool.py so it reads orders.csv and prints the top N orders by amount. Add an option --top with the default 3. Run it with --top 2.",
   "hint": "Use sorted with key=lambda r: float(r['amount']) and reverse=True. Slice the result with [:args.top].",
   "check": "With the sample file from the example, --top 2 prints the 200 order and the 120 order."
  },
  "teach": "Explain in 5 sentences why the if __name__ line is useful.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "How do you create a virtual environment?",
    "a": "python -m venv .venv"
   },
   {
    "q": "How do you read the --threshold option in code?",
    "a": "args.threshold, after args = parser.parse_args()."
   }
  ],
  "mixed": [
   {
    "title": "A. Add an option",
    "task": "Build a parser with a positional filename and an option --vat (float, default 0.2). Test it with parse_args on the list ['orders.csv', '--vat', '0.1']. Print args.filename and args.vat.",
    "hint": "parser.add_argument('--vat', type=float, default=0.2). Pass the list to parse_args.",
    "setup": "import argparse",
    "sql": "parser = argparse.ArgumentParser()\nparser.add_argument(\"filename\")\nparser.add_argument(\"--vat\", type=float, default=0.2)\nargs = parser.parse_args([\"orders.csv\", \"--vat\", \"0.1\"])\nprint(args.filename, args.vat)",
    "output": "orders.csv 0.1",
    "lang": "python"
   },
   {
    "title": "B. A yes or no flag",
    "task": "Add the flag --verbose that is False when you leave it out and True when you give it. Test both cases. Print each result.",
    "hint": "action='store_true'. Call parse_args twice, once with [] and once with ['--verbose'].",
    "setup": "import argparse",
    "sql": "parser = argparse.ArgumentParser()\nparser.add_argument(\"--verbose\", action=\"store_true\")\nprint(parser.parse_args([]).verbose)\nprint(parser.parse_args([\"--verbose\"]).verbose)",
    "output": "False\nTrue",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-comprehensions",
    "title": "List, dict and set comprehensions",
    "no": "1.7"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   },
   {
    "id": "py-except-order",
    "title": "try/except and the order of except blocks",
    "no": "1.10"
   }
  ],
  "assumed": [],
  "module": "M1",
  "lessonNo": "1.11",
  "num": 11
 },
 {
  "id": "py-generators",
  "track": "Python",
  "title": "Generators and lists",
  "minutes": 35,
  "summary": "A list keeps its values. A generator gives each value once, then it is empty.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 232\" role=\"img\" aria-label=\"A list keeps its values. A generator is used up after one pass.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m3\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"14\" text-anchor=\"start\">List  [ ]  stores the values</text><rect class=\"bxg\" x=\"0\" y=\"24\" width=\"62\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"31\" y=\"46\" text-anchor=\"middle\">9.0</text><rect class=\"bxg\" x=\"70\" y=\"24\" width=\"62\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"101\" y=\"46\" text-anchor=\"middle\">22.5</text><rect class=\"bxg\" x=\"140\" y=\"24\" width=\"62\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"171\" y=\"46\" text-anchor=\"middle\">7.2</text><rect class=\"bxg\" x=\"210\" y=\"24\" width=\"62\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"241\" y=\"46\" text-anchor=\"middle\">36.0</text><text class=\"tx tm\" x=\"300\" y=\"46\" text-anchor=\"start\" font-size=\"12\">read it as often as you like</text><line class=\"ln\" x1=\"0\" y1=\"78\" x2=\"520\" y2=\"78\"/><text class=\"tx tb\" x=\"0\" y=\"100\" text-anchor=\"start\">Generator  ( )  gives one value at a time</text><rect class=\"bxa\" x=\"0\" y=\"112\" width=\"150\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"75\" y=\"137\" text-anchor=\"middle\" font-size=\"11\">p * 0.9 for p in prices</text><line class=\"ar\" x1=\"150\" y1=\"132\" x2=\"188\" y2=\"132\" marker-end=\"url(#m3)\"/><rect class=\"bx\" x=\"190\" y=\"112\" width=\"110\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"245\" y=\"137\" text-anchor=\"middle\" font-size=\"12\">list(gen)  #1</text><line class=\"ar\" x1=\"300\" y1=\"132\" x2=\"338\" y2=\"132\" marker-end=\"url(#m3)\"/><rect class=\"bxg\" x=\"340\" y=\"112\" width=\"180\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"430\" y=\"137\" text-anchor=\"middle\" font-size=\"11\">[9.0, 22.5, 7.2, 36.0]</text><rect class=\"bxw\" x=\"0\" y=\"176\" width=\"150\" height=\"40\" rx=\"8\" stroke-dasharray=\"5 4\"/><text class=\"tx tw\" x=\"75\" y=\"201\" text-anchor=\"middle\" font-size=\"11\">used up: nothing left</text><line class=\"ar\" x1=\"150\" y1=\"196\" x2=\"188\" y2=\"196\" marker-end=\"url(#m3)\"/><rect class=\"bx\" x=\"190\" y=\"176\" width=\"110\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"245\" y=\"201\" text-anchor=\"middle\" font-size=\"12\">list(gen)  #2</text><line class=\"ar\" x1=\"300\" y1=\"196\" x2=\"338\" y2=\"196\" marker-end=\"url(#m3)\"/><rect class=\"bxw\" x=\"340\" y=\"176\" width=\"180\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"430\" y=\"201\" text-anchor=\"middle\" font-size=\"12\">[]   (no error)</text></svg>",
   "caption": "A list can be read many times. A generator is used up after one full pass."
  },
  "predict": {
   "q": "gen = (p * 0.9 for p in prices). You run list(gen) two times. What does the second call return?",
   "reveal": "[]. The first call used all the values. A generator cannot go back, and Python raises no error."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A list comprehension uses square brackets. It builds the full list in memory.",
     "A generator expression uses round brackets. It builds nothing at first. It gives one value when asked.",
     "A function with yield also returns a generator.",
     "A generator is a one-way pass. After the last value, it is empty."
    ]
   },
   {
    "h": "How it works",
    "p": [
     "print(gen) shows a generator object. It does not show values.",
     "list(gen) asks for every value. The generator gives them and reaches the end.",
     "A second list(gen) finds no values. It returns []."
    ]
   },
   {
    "h": "When to use each",
    "p": [
     "Use a list when you read the values more than once.",
     "Use a generator when you read the values once and the data is large.",
     "To read a generator twice, make a new one. Or save it one time with list(gen)."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "Square and round brackets look similar. They behave differently.",
     "A second loop over a used generator does nothing. No error appears."
    ]
   }
  ],
  "example": {
   "title": "A generator that yields one value at a time",
   "code": "prices = [10, 25, 8, 40]\n\ndiscounted = (price * 0.9 for price in prices)    # nothing is calculated yet\nprint(sum(discounted))                           # sum pulls the values through, one by one\nprint(list(discounted))                          # []: a generator is used up after one pass\n\n\ndef large_prices(values, limit):\n    \"\"\"Yield the values above the limit, one at a time.\"\"\"\n    for value in values:\n        if value > limit:\n            yield value\n\n\nprint(list(large_prices(prices, 20)))\nprint(sum(price for price in prices if price > 20))   # no extra brackets when it is the only argument",
   "notes": [
    "A generator makes values on demand. It never holds the whole list in memory. This is how you process a file that is bigger than your RAM.",
    "A generator is used up after one pass. If you need two passes, make a list or make the generator again.",
    "Use a generator expression inside sum, min, max and any. Write sum(x for x in items), with no list brackets, so no list is built.",
    "A function with yield is a generator function. Give it a docstring that says what it yields."
   ],
   "output": "74.7\n[]\n[25, 40]\n65"
  },
  "qa": {
   "q": "gen = (n * 2 for n in [1, 2, 3]); first = list(gen); second = list(gen). What are first and second?",
   "a": "first is [2, 4, 6]. second is []. The first list() used all the values."
  },
  "build": {
   "task": "Write prices_with_vat(prices, rate=0.2) as a generator function with yield. Then show that a second list() of the same generator returns [].",
   "hint": "Use: for p in prices, then yield p * (1 + rate).",
   "check": "prices_with_vat([10, 25]) gives [12.0, 30.0] the first time and [] the second time."
  },
  "teach": "Explain in 5 sentences why the second list(gen) is empty. Use the words 'one-way'.",
  "mistakes": [
   "Predicted that a list comprehension also returns [] on the second read (2026-10-06). It does not."
  ],
  "selfCheck": [
   {
    "q": "Which brackets make a generator expression?",
    "a": "Round brackets ( )."
   },
   {
    "q": "Can you loop over a list twice?",
    "a": "Yes. A list keeps its values."
   }
  ],
  "mixed": [
   {
    "title": "A. A generator function in use",
    "task": "Write a generator function large_orders(orders, threshold). It yields each order with an amount at or above the threshold. Then print the sum of the amounts of orders of 100 or more.",
    "hint": "Use for, if and yield. Pass a generator expression to sum(): sum(o['amount'] for o in large_orders(orders, 100)).",
    "setup": "orders = [\n    {\"id\": 1, \"customer\": \"Acme\", \"amount\": 120.0},\n    {\"id\": 2, \"customer\": \"Birch\", \"amount\": 40.0},\n    {\"id\": 3, \"customer\": \"Acme\", \"amount\": 80.0},\n    {\"id\": 4, \"customer\": \"Cobalt\", \"amount\": 200.0},\n    {\"id\": 5, \"customer\": \"Birch\", \"amount\": 60.0},\n    {\"id\": 6, \"customer\": \"Acme\", \"amount\": 50.0},\n]",
    "sql": "def large_orders(orders, threshold):\n    for order in orders:\n        if order[\"amount\"] >= threshold:\n            yield order\n\nprint(sum(o[\"amount\"] for o in large_orders(orders, 100)))",
    "output": "320.0",
    "lang": "python"
   },
   {
    "title": "B. Used up twice",
    "task": "A new analyst wants the total and the average amount. Say what the code below prints. Then rewrite it so it prints the total, and then the average (total divided by count).",
    "hint": "Make a list once with square brackets. Then use sum() and len() on the list.",
    "setup": "orders = [\n    {\"id\": 1, \"customer\": \"Acme\", \"amount\": 120.0},\n    {\"id\": 2, \"customer\": \"Birch\", \"amount\": 40.0},\n    {\"id\": 3, \"customer\": \"Acme\", \"amount\": 80.0},\n    {\"id\": 4, \"customer\": \"Cobalt\", \"amount\": 200.0},\n    {\"id\": 5, \"customer\": \"Birch\", \"amount\": 60.0},\n    {\"id\": 6, \"customer\": \"Acme\", \"amount\": 50.0},\n]",
    "sql": "amounts = [o[\"amount\"] for o in orders]\nprint(sum(amounts))\nprint(sum(amounts) / len(amounts))",
    "output": "550.0\n91.66666666666667",
    "lang": "python",
    "broken": "amounts = (o[\"amount\"] for o in orders)\nprint(sum(amounts))\nprint(sum(amounts))",
    "brokenOutput": "550.0\n0"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-comprehensions",
    "title": "List, dict and set comprehensions",
    "no": "1.7"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.1",
  "num": 12
 },
 {
  "id": "py-classes",
  "track": "Python",
  "title": "Classes: objects, attributes and methods",
  "minutes": 45,
  "summary": "A class is a plan. Each object keeps its own data. Methods work on that data.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 208\" role=\"img\" aria-label=\"A class is a plan. Each object made from it has its own values. A subclass inherits from it.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m2a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bxg\" x=\"0\" y=\"8\" width=\"210\" height=\"100\" rx=\"8\"/><text class=\"tx tb\" x=\"105\" y=\"28\" text-anchor=\"middle\" font-size=\"12\">class Order  (the plan)</text><text class=\"tx\" x=\"105\" y=\"52\" text-anchor=\"middle\" font-size=\"11\">__init__(self, customer)</text><text class=\"tx\" x=\"105\" y=\"72\" text-anchor=\"middle\" font-size=\"11\">add_item(self, name, qty, price)</text><text class=\"tx\" x=\"105\" y=\"92\" text-anchor=\"middle\" font-size=\"11\">total(self)</text><rect class=\"bxa\" x=\"290\" y=\"8\" width=\"230\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"405\" y=\"26\" text-anchor=\"middle\" font-size=\"12\">a = Order(&#x27;Acme&#x27;)</text><text class=\"tx\" x=\"405\" y=\"43\" text-anchor=\"middle\" font-size=\"11\">a.customer = &#x27;Acme&#x27;   a.items = [ ]</text><rect class=\"bxa\" x=\"290\" y=\"64\" width=\"230\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"405\" y=\"82\" text-anchor=\"middle\" font-size=\"12\">b = Order(&#x27;Birch&#x27;)</text><text class=\"tx\" x=\"405\" y=\"99\" text-anchor=\"middle\" font-size=\"11\">b.customer = &#x27;Birch&#x27;   b.items = [ ]</text><line class=\"ar\" x1=\"210\" y1=\"36\" x2=\"288\" y2=\"30\" marker-end=\"url(#m2a)\"/><line class=\"ar\" x1=\"210\" y1=\"80\" x2=\"288\" y2=\"86\" marker-end=\"url(#m2a)\"/><text class=\"tx tm\" x=\"250\" y=\"14\" text-anchor=\"middle\" font-size=\"11\">make</text><line class=\"ln\" x1=\"0\" y1=\"128\" x2=\"520\" y2=\"128\"/><rect class=\"bxw\" x=\"0\" y=\"142\" width=\"210\" height=\"50\" rx=\"8\"/><text class=\"tx tb\" x=\"105\" y=\"162\" text-anchor=\"middle\" font-size=\"12\">class RushOrder(Order)</text><text class=\"tx\" x=\"105\" y=\"181\" text-anchor=\"middle\" font-size=\"11\">adds fee, reuses the rest</text><line class=\"ar\" x1=\"105\" y1=\"142\" x2=\"105\" y2=\"110\" marker-end=\"url(#m2a)\"/><text class=\"tx tm\" x=\"118\" y=\"128\" text-anchor=\"start\" font-size=\"11\">inherits</text><text class=\"tx tb\" x=\"232\" y=\"160\" text-anchor=\"start\" font-size=\"12\">self is the object the method</text><text class=\"tx tb\" x=\"232\" y=\"176\" text-anchor=\"start\" font-size=\"12\">is called on.</text><text class=\"tx\" x=\"232\" y=\"194\" text-anchor=\"start\" font-size=\"11\">a.total() runs total with self = a.</text></svg>",
   "caption": "One plan, many objects. Each object has its own values. A subclass reuses the plan."
  },
  "predict": {
   "q": "class Counter:\n    def __init__(self):\n        self.n = 0\n\n    def hit(self):\n        self.n = self.n + 1\n\nc = Counter()\nc.hit()\nc.hit()\nprint(c.n)\nWhat does the last line print?",
   "reveal": "2. __init__ sets n to 0. Each call to hit adds 1 to the n of this one object."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A class is a plan for objects. An object holds data and has methods.",
     "The data in an object is stored in attributes. self.customer is an attribute.",
     "A method is a function that belongs to a class. Its first parameter is self.",
     "You make an object by calling the class: a = Order('Acme')."
    ]
   },
   {
    "h": "self and __init__",
    "p": [
     "self is the object that the method works on. Python passes it for you.",
     "In a.total(), Python runs total with self set to a. You do not write self in the call.",
     "__init__ runs when the object is made. It sets the first attributes.",
     "Write self. before every attribute: self.items. Without self. the name is only a local variable."
    ]
   },
   {
    "h": "Each object has its own data",
    "p": [
     "Make a new list inside __init__: self.items = [ ]. Each object then gets its own list.",
     "Two objects do not share attributes. a.items is not b.items."
    ]
   },
   {
    "h": "Inheritance",
    "p": [
     "A subclass takes everything from its parent class. Write the parent in brackets: class RushOrder(Order).",
     "A subclass __init__ must accept every value the parent needs, plus its own.",
     "super().__init__(customer) runs the parent __init__. super().total() runs the parent method.",
     "isinstance(b, Order) is True when b is an Order or a subclass of Order."
    ]
   },
   {
    "h": "Your own errors",
    "p": [
     "raise stops the code and sends an error: raise ValueError('too much').",
     "A custom error is a small subclass: class InsufficientFundsError(Exception): pass.",
     "except catches it by name, exactly as in the try/except lesson."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "Forget self in def: def total(): fails with a TypeError when you call a.total().",
     "Forget self. in front of an attribute: items = [ ] makes a local name and loses it.",
     "Write __init without the closing underscores. Python then does not treat it as the constructor."
    ]
   }
  ],
  "example": {
   "title": "Order and RushOrder: one plan, one subclass",
   "code": "class Order:\n    \"\"\"A customer order made of items.\"\"\"\n\n    def __init__(self, customer):\n        self.customer = customer\n        self.items = []                      # every order gets its own list\n\n    def add_item(self, name, quantity, unit_price):\n        self.items.append((name, quantity, unit_price))\n\n    def total(self):\n        \"\"\"Return the sum of quantity * unit price for all items.\"\"\"\n        return sum(quantity * unit_price for _, quantity, unit_price in self.items)\n\n\nclass RushOrder(Order):\n    \"\"\"An order with a fixed rush fee on top.\"\"\"\n\n    def __init__(self, customer, fee):\n        super().__init__(customer)           # let the parent set up what it owns\n        self.fee = fee\n\n    def total(self):\n        return super().total() + self.fee    # reuse the parent's rule, then add to it\n\n\nstandard = Order(\"Acme\")\nstandard.add_item(\"pen\", 10, 2.5)\nstandard.add_item(\"ink\", 2, 10)\nrush = RushOrder(\"Birch\", 5)\nrush.add_item(\"desk\", 1, 120)\nprint(standard.customer, standard.total())\nprint(rush.customer, rush.total())\nprint(isinstance(rush, Order), isinstance(standard, RushOrder))\nanother = Order(\"Acme\")\nprint(another.items, standard.items is another.items)",
   "notes": [
    "Class names use PascalCase. Methods and attributes use snake_case (PEP 8). A class has a docstring.",
    "Create mutable attributes (self.items = []) inside __init__, so each object has its own. A shared list is the same trap as a mutable default.",
    "A subclass calls super().__init__ and super().total() to reuse the parent. It does not copy the parent's code.",
    "Keep methods short, with one job. A method that returns a value (total) is easier to test than one that prints.",
    "Prefer small classes with clear names. If a class only holds data, lesson 2.4 shows a shorter way: a dataclass."
   ],
   "output": "Acme 45.0\nBirch 125\nTrue False\n[] False"
  },
  "qa": {
   "q": "class Box:\n    def describe():\n        return \"a box\"\n\nprint(Box().describe())\nWhat does this do? How do you fix it?",
   "a": "It raises TypeError: Box.describe() takes 0 positional arguments but 1 was given. Python passes the object as the first argument. Write def describe(self):."
  },
  "build": {
   "task": "From a blank page write class Account with __init__(self, owner, balance=0), deposit(amount) and withdraw(amount). withdraw raises ValueError('insufficient funds') when the amount is more than the balance. Then write SavingsAccount(Account) with an extra rate and a method add_interest() that adds balance * rate. Test: Account('Ann', 100) deposit 50 gives 150. withdraw 500 raises ValueError. SavingsAccount('Ben', 200, 0.1) after add_interest has balance 220.0.",
   "hint": "SavingsAccount.__init__(self, owner, balance, rate) calls super().__init__(owner, balance) and then sets self.rate. Catch the error with try/except ValueError in your test.",
   "check": "You should see 150, then the text insufficient funds, then 220.0."
  },
  "teach": "Explain in 5 sentences what self is and why a method needs it.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "Where do you make a list that each object must own?",
    "a": "Inside __init__, as self.items = [ ]."
   },
   {
    "q": "What does super().__init__(customer) do?",
    "a": "It runs the __init__ of the parent class, so the parent sets its attributes."
   },
   {
    "q": "Do you write self when you call a method?",
    "a": "No. Python passes it. You write it only in the def line."
   }
  ],
  "mixed": [
   {
    "title": "A. Stock item with a sale method",
    "task": "Write class Item with name and stock (the number in stock). Add a method sell(qty). It lowers stock by qty. It raises ValueError('not enough stock') if qty is more than stock. Make Item('pen', 10). Sell 4. Print the stock. Then try to sell 20 inside try/except ValueError and print the error text.",
    "hint": "Use self.stock. The check goes before the subtraction. In the except line, use as e and print(e).",
    "setup": "",
    "sql": "class Item:\n    def __init__(self, name, stock):\n        self.name = name\n        self.stock = stock\n\n    def sell(self, qty):\n        if qty > self.stock:\n            raise ValueError(\"not enough stock\")\n        self.stock = self.stock - qty\n\n\npen = Item(\"pen\", 10)\npen.sell(4)\nprint(pen.stock)\ntry:\n    pen.sell(20)\nexcept ValueError as e:\n    print(e)",
    "output": "6\nnot enough stock",
    "lang": "python"
   },
   {
    "title": "B. Fix the class",
    "task": "This code has two errors. Say what Python reports first. Then fix both so it prints 1.",
    "hint": "One method is missing self in its def line. One attribute is missing the self. prefix.",
    "setup": "",
    "sql": "class Counter:\n    def __init__(self):\n        self.n = 0\n\n    def hit(self):\n        self.n = self.n + 1\n\nc = Counter()\nc.hit()\nprint(c.n)",
    "output": "1",
    "lang": "python",
    "broken": "class Counter:\n    def __init__(self):\n        n = 0\n\n    def hit():\n        self.n = self.n + 1\n\nc = Counter()\nc.hit()\nprint(c.n)",
    "brokenOutput": "TypeError: Counter.hit() takes 0 positional arguments but 1 was given"
   },
   {
    "title": "C. A subclass with super",
    "task": "A class Person has name. Write class Customer(Person) with a credit limit. Customer.describe() returns the name and the limit, like: Acme (limit 500). Person has its own describe() that returns just the name. Print both for Person('Ann') and Customer('Acme', 500).",
    "hint": "Customer.__init__(self, name, limit) calls super().__init__(name). describe in Customer can call super().describe().",
    "setup": "",
    "sql": "class Person:\n    def __init__(self, name):\n        self.name = name\n\n    def describe(self):\n        return self.name\n\n\nclass Customer(Person):\n    def __init__(self, name, limit):\n        super().__init__(name)\n        self.limit = limit\n\n    def describe(self):\n        return f\"{super().describe()} (limit {self.limit})\"\n\n\nprint(Person(\"Ann\").describe())\nprint(Customer(\"Acme\", 500).describe())",
    "output": "Ann\nAcme (limit 500)",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-except-order",
    "title": "try/except and the order of except blocks",
    "no": "1.10"
   },
   {
    "id": "py-generators",
    "title": "Generators and lists",
    "no": "2.1"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.2",
  "num": 13
 },
 {
  "id": "py-class-property",
  "track": "Python",
  "title": "Classes, @property and __repr__",
  "minutes": 40,
  "summary": "A property is read without brackets. __repr__ must return a string.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 226\" role=\"img\" aria-label=\"Reading a property without brackets gives its value. Brackets cause an error.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m5\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"8\" width=\"210\" height=\"118\" rx=\"8\"/><text class=\"tx tb\" x=\"105\" y=\"28\" text-anchor=\"middle\">Order object</text><rect class=\"bx\" x=\"14\" y=\"38\" width=\"182\" height=\"26\" rx=\"5\"/><text class=\"tx\" x=\"105\" y=\"56\" text-anchor=\"middle\">qty = 3</text><rect class=\"bx\" x=\"14\" y=\"70\" width=\"182\" height=\"26\" rx=\"5\"/><text class=\"tx\" x=\"105\" y=\"88\" text-anchor=\"middle\">unit_price = 10</text><rect class=\"bxa\" x=\"14\" y=\"102\" width=\"182\" height=\"18\" rx=\"5\" stroke-dasharray=\"5 4\"/><text class=\"tx\" x=\"105\" y=\"115\" text-anchor=\"middle\" font-size=\"10\">total  (property: qty * unit_price)</text><rect class=\"bxg\" x=\"240\" y=\"8\" width=\"280\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"252\" y=\"27\" text-anchor=\"start\" font-size=\"12\">order.total</text><text class=\"tx tm\" x=\"252\" y=\"44\" text-anchor=\"start\" font-size=\"11\">30   (no brackets)</text><rect class=\"bxw\" x=\"240\" y=\"62\" width=\"280\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"252\" y=\"81\" text-anchor=\"start\" font-size=\"12\">order.total()</text><text class=\"tx tm\" x=\"252\" y=\"98\" text-anchor=\"start\" font-size=\"11\">TypeError: 30 is not callable</text><rect class=\"bxg\" x=\"240\" y=\"116\" width=\"280\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"252\" y=\"135\" text-anchor=\"start\" font-size=\"12\">repr(order)</text><text class=\"tx tm\" x=\"252\" y=\"152\" text-anchor=\"start\" font-size=\"11\">Order(&#x27;Acme&#x27;, total=30)</text><rect class=\"bxw\" x=\"240\" y=\"170\" width=\"280\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"252\" y=\"189\" text-anchor=\"start\" font-size=\"12\">__repr__ with no return</text><text class=\"tx tm\" x=\"252\" y=\"206\" text-anchor=\"start\" font-size=\"11\">TypeError: non-string</text><line class=\"ar\" x1=\"210\" y1=\"70\" x2=\"238\" y2=\"30\" marker-end=\"url(#m5)\"/><line class=\"ar\" x1=\"210\" y1=\"76\" x2=\"238\" y2=\"84\" marker-end=\"url(#m5)\"/><line class=\"ar\" x1=\"210\" y1=\"82\" x2=\"238\" y2=\"138\" marker-end=\"url(#m5)\"/></svg>",
   "caption": "Read a property without brackets. Brackets try to call the value."
  },
  "predict": {
   "q": "class Order has a method total marked @property that returns qty * unit_price. The order has qty 3 and unit_price 10. What does print(order.total()) do?",
   "reveal": "It raises TypeError: 'int' object is not callable. order.total already gives 30. The brackets then try to call 30 like a function."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A class is a plan for objects. An object holds data in attributes.",
     "__init__ sets the attributes when you make the object.",
     "@property makes a method behave like an attribute. You read it without brackets.",
     "__repr__ returns the text that Python shows for the object."
    ]
   },
   {
    "h": "How it works",
    "p": [
     "order = Order('Acme', 3, 10) calls __init__.",
     "order.total runs the total method and gives 30.",
     "Python works out the value each time you read it. If qty changes, total changes."
    ]
   },
   {
    "h": "Rules",
    "p": [
     "Read a property without brackets.",
     "__init__ and __repr__ have two underscores on each side. A name with fewer underscores is an ordinary method. Python does not use it as the constructor.",
     "__repr__ must return a string. If it builds the string but has no return, Python raises TypeError.",
     "A subclass __init__ must accept every value its parent needs, plus its own. It passes the parent values to super().__init__()."
    ]
   }
  ],
  "example": {
   "title": "A property for a derived value, and a useful repr",
   "code": "class Order:\n    \"\"\"One order line.\"\"\"\n\n    def __init__(self, customer, quantity, unit_price):\n        self.customer = customer\n        self.quantity = quantity\n        self.unit_price = unit_price\n\n    @property\n    def total(self):\n        \"\"\"The order total. It is worked out each time you read it.\"\"\"\n        return self.quantity * self.unit_price\n\n    def __repr__(self):\n        return f\"Order({self.customer!r}, total={self.total})\"\n\n\norder = Order(\"Acme\", 3, 10)\nprint(order.total)\nprint(order)\norder.quantity = 4              # change an input ...\nprint(order.total)              # ... and the property is always up to date",
   "notes": [
    "Store the inputs and work out the rest. A property (total) cannot go out of date. A copied attribute can.",
    "Read a property without brackets: order.total. A property that is expensive or can fail should be a method.",
    "__repr__ is for developers. It should look like the code that makes the object. !r puts quote marks around text.",
    "Always return the string from __repr__. Building it without return gives None and a TypeError."
   ],
   "output": "30\nOrder('Acme', total=30)\n40"
  },
  "qa": {
   "q": "class Invoice has __repr__ with only this line: f\"Invoice({self.amount})\". There is no return. What does print(Invoice(250)) do?",
   "a": "It raises TypeError: __str__ returned non-string (type NoneType). Without return, the method gives None. Add return before the f-string."
  },
  "build": {
   "task": "Write class Invoice with __init__(self, amount, vat_rate), a property total (amount * (1 + vat_rate)), and a __repr__ that returns text like Invoice(250, total=300.0).",
   "hint": "Do not put brackets after total. Put return in __repr__.",
   "check": "Invoice(250, 0.2).total gives 300.0. print(Invoice(250, 0.2)) shows Invoice(250, total=300.0)."
  },
  "teach": "Explain in 5 sentences the difference between order.total and order.total().",
  "mistakes": [
   "Predicted 30 for order.total() (2026-10-12). It raises TypeError.",
   "Predicted the __repr__ without return would print normally (2026-09-30).",
   "Wrote __init without the closing underscores earlier in the course."
  ],
  "selfCheck": [
   {
    "q": "Do you write brackets after a property?",
    "a": "No."
   },
   {
    "q": "What must __repr__ do at the end?",
    "a": "Return a string."
   }
  ],
  "mixed": [
   {
    "title": "A. A class with a list, a property and a sort",
    "task": "Write class Order. It starts with a customer name and an empty list of items. The method add_item(name, qty, price) saves one item. The property total is the sum of qty times price. __repr__ returns text like Order('Acme', total=45.0). Make three orders. Print them from highest total to lowest.",
    "hint": "Make the list inside __init__, not as a default. Use sorted(list, key=lambda o: o.total, reverse=True). Do not write brackets after total.",
    "setup": "",
    "sql": "class Order:\n    def __init__(self, customer):\n        self.customer = customer\n        self.items = []\n\n    def add_item(self, name, qty, price):\n        self.items.append((name, qty, price))\n\n    @property\n    def total(self):\n        return sum(qty * price for _, qty, price in self.items)\n\n    def __repr__(self):\n        return f\"Order({self.customer!r}, total={self.total})\"\n\n\na = Order(\"Acme\")\na.add_item(\"pen\", 10, 2.5)\na.add_item(\"ink\", 2, 10)\nb = Order(\"Birch\")\nb.add_item(\"desk\", 1, 120)\nc = Order(\"Cobalt\")\nc.add_item(\"pad\", 4, 5)\nprint(sorted([a, b, c], key=lambda o: o.total, reverse=True))",
    "output": "[Order('Birch', total=120), Order('Acme', total=45.0), Order('Cobalt', total=20)]",
    "lang": "python"
   },
   {
    "title": "B. Fix the repr and the call",
    "task": "This code has two errors. Say what Python reports for the first one. Fix both so it prints 300.0 and then Invoice(250, total=300.0).",
    "hint": "A property is read without brackets. __repr__ must return the text.",
    "setup": "",
    "sql": "class Invoice:\n    def __init__(self, amount, vat_rate):\n        self.amount = amount\n        self.vat_rate = vat_rate\n\n    @property\n    def total(self):\n        return self.amount * (1 + self.vat_rate)\n\n    def __repr__(self):\n        return f\"Invoice({self.amount}, total={self.total})\"\n\n\ninv = Invoice(250, 0.2)\nprint(inv.total)\nprint(inv)",
    "output": "300.0\nInvoice(250, total=300.0)",
    "lang": "python",
    "broken": "class Invoice:\n    def __init__(self, amount, vat_rate):\n        self.amount = amount\n        self.vat_rate = vat_rate\n\n    @property\n    def total(self):\n        return self.amount * (1 + self.vat_rate)\n\n    def __repr__(self):\n        f\"Invoice({self.amount}, total={self.total})\"\n\n\ninv = Invoice(250, 0.2)\nprint(inv.total())\nprint(inv)",
    "brokenOutput": "TypeError: 'float' object is not callable"
   }
  ],
  "prereqs": [
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-classes",
    "title": "Classes: objects, attributes and methods",
    "no": "2.2"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.3",
  "num": 14
 },
 {
  "id": "py-dataclasses",
  "track": "Python",
  "title": "Dataclasses",
  "minutes": 35,
  "summary": "A dataclass writes __init__, __repr__ and __eq__ for you. You list the fields.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 172\" role=\"img\" aria-label=\"A dataclass turns three field lines into an init, a repr and an equality method.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m2b\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bxg\" x=\"0\" y=\"8\" width=\"230\" height=\"98\" rx=\"8\"/><text class=\"tx tb\" x=\"115\" y=\"28\" text-anchor=\"middle\" font-size=\"12\">@dataclass</text><text class=\"tx\" x=\"115\" y=\"48\" text-anchor=\"middle\" font-size=\"12\">class Order:</text><text class=\"tx\" x=\"115\" y=\"68\" text-anchor=\"middle\" font-size=\"12\">id: int   customer: str</text><text class=\"tx\" x=\"115\" y=\"88\" text-anchor=\"middle\" font-size=\"12\">amount: float</text><line class=\"ar\" x1=\"230\" y1=\"57\" x2=\"300\" y2=\"23\" marker-end=\"url(#m2b)\"/><rect class=\"bxa\" x=\"302\" y=\"8\" width=\"218\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"312\" y=\"28\" text-anchor=\"start\" font-size=\"12\">__init__</text><text class=\"tx\" x=\"400\" y=\"28\" text-anchor=\"start\" font-size=\"11\">sets the fields</text><line class=\"ar\" x1=\"230\" y1=\"57\" x2=\"300\" y2=\"59\" marker-end=\"url(#m2b)\"/><rect class=\"bxa\" x=\"302\" y=\"44\" width=\"218\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"312\" y=\"64\" text-anchor=\"start\" font-size=\"12\">__repr__</text><text class=\"tx\" x=\"400\" y=\"64\" text-anchor=\"start\" font-size=\"11\">Order(id=1, ...)</text><line class=\"ar\" x1=\"230\" y1=\"57\" x2=\"300\" y2=\"95\" marker-end=\"url(#m2b)\"/><rect class=\"bxa\" x=\"302\" y=\"80\" width=\"218\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"312\" y=\"100\" text-anchor=\"start\" font-size=\"12\">__eq__</text><text class=\"tx\" x=\"400\" y=\"100\" text-anchor=\"start\" font-size=\"11\">compares fields</text><text class=\"tx tb\" x=\"0\" y=\"134\" text-anchor=\"start\" font-size=\"12\">You write the fields. Python writes the three methods.</text><text class=\"tx tw tb\" x=\"0\" y=\"156\" text-anchor=\"start\" font-size=\"12\">A list field needs field(default_factory=list), not = [ ].</text></svg>",
   "caption": "You write the fields. The decorator writes the methods."
  },
  "predict": {
   "q": "from dataclasses import dataclass\n\n@dataclass\nclass Parcel:\n    id: int\n    tags: list = []\nWhat happens when Python reads this class?",
   "reveal": "It raises ValueError: mutable default <class 'list'> for field tags is not allowed: use default_factory. This is the mutable default problem again. A dataclass stops it for you."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A dataclass is a class made mostly of data. You list the fields. Python writes the rest.",
     "Put @dataclass above the class. It writes __init__, __repr__ and __eq__.",
     "A field line has a name and a type hint: amount: float. A type hint is the part after the colon.",
     "Python does not check the hint when the code runs. The next lessons show a tool that does."
    ]
   },
   {
    "h": "Defaults",
    "p": [
     "A field with a simple default: rate: float = 0.2. Fields with defaults go last.",
     "A list or dict default needs field(default_factory=list). Each object then gets a new list.",
     "tags: list = [ ] is refused with a ValueError."
    ]
   },
   {
    "h": "Useful features",
    "p": [
     "Two dataclass objects are equal when all fields are equal.",
     "@dataclass(frozen=True) makes the object read-only. Changing a field raises an error.",
     "asdict(obj) turns the object into a dict. Use it with json.dumps.",
     "You can still add methods and @property to a dataclass."
    ]
   },
   {
    "h": "Where you use them",
    "p": [
     "Turn each CSV row into one dataclass object. Convert the types once, in one place.",
     "Then the rest of the code uses order.amount as a float, not text.",
     "A dataclass is a clear record type for data you load, move and save."
    ]
   }
  ],
  "example": {
   "title": "CSV rows into dataclass objects, with the types fixed in one place",
   "code": "from dataclasses import asdict, dataclass, field\nimport csv\nimport io\nimport json\n\n\n@dataclass\nclass Order:\n    \"\"\"One order line from the orders file.\"\"\"\n\n    id: int\n    customer: str\n    amount: float\n    tags: list = field(default_factory=list)   # each order gets its own list\n\n\ndef order_from_row(row):\n    \"\"\"Convert one CSV row (all text) into an Order with real types.\"\"\"\n    return Order(id=int(row[\"id\"]), customer=row[\"customer\"], amount=float(row[\"amount\"]))\n\n\nraw = \"id,customer,amount\\n1,Acme,120\\n2,Birch,40\\n\"\norders = [order_from_row(row) for row in csv.DictReader(io.StringIO(raw))]\nprint(orders[0])\nprint(orders[0] == Order(1, \"Acme\", 120.0))        # equality compares every field\norders[1].tags.append(\"late\")\nprint(orders[0].tags, orders[1].tags)\nprint(json.dumps(asdict(orders[1])))",
   "notes": [
    "A dataclass names and types every field, and writes __init__, __repr__ and __eq__ for you. Less code, fewer bugs.",
    "Put the conversion from text to real types in ONE function (order_from_row). The rest of the program then works with typed data.",
    "Use keyword arguments when you build an object with several fields. Order(id=..., amount=...) cannot swap two values by mistake.",
    "Use field(default_factory=list) for a list or dict field. A plain [] default is refused, for the same reason as in lesson 1.8.",
    "Use @dataclass(frozen=True) for records that must not change. asdict turns a record into a dict for JSON."
   ],
   "output": "Order(id=1, customer='Acme', amount=120.0, tags=[])\nTrue\n[] ['late']\n{\"id\": 2, \"customer\": \"Birch\", \"amount\": 40.0, \"tags\": [\"late\"]}"
  },
  "qa": {
   "q": "from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Point:\n    x: int\n    y: int\n\np = Point(1, 2)\np.x = 5\nWhat happens?",
   "a": "It raises FrozenInstanceError: cannot assign to field 'x'. A frozen dataclass is read-only."
  },
  "build": {
   "task": "From a blank page write a dataclass Trip with id (int), km (float) and rate (float, default 0.45), and a property cost that returns km * rate. Read these rows with csv: id,km  then 1,10  2,4  3,25. Make a Trip for each row. Print the trips from the highest cost to the lowest.",
   "hint": "Put the dataclass on top. Use csv.DictReader with io.StringIO. Convert with int() and float(). Sort with key=lambda t: t.cost and reverse=True.",
   "check": "The order is trip 3 (cost 11.25), trip 1 (4.5), trip 2 (1.8)."
  },
  "teach": "Explain in 5 sentences what @dataclass writes for you and why that is useful for CSV rows.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "How do you give a dataclass field an empty list as its default?",
    "a": "tags: list = field(default_factory=list)."
   },
   {
    "q": "What does frozen=True do?",
    "a": "It makes the object read-only. Changing a field raises an error."
   },
   {
    "q": "Does Python check that amount: float really holds a float?",
    "a": "No. The hint is not checked when the code runs."
   }
  ],
  "mixed": [
   {
    "title": "A. Rows to records, then totals",
    "task": "Make a dataclass Line with sku (str), qty (int) and price (float). Read these rows with csv: sku,qty,price  then A1,3,2.5  B2,1,10  A1,2,2.5. Make a Line for each row. Print the total value of all lines. Then print the quantity for each sku in a dict.",
    "hint": "Convert qty with int() and price with float(). For the dict, loop and use dict.get(sku, 0) + qty.",
    "setup": "",
    "sql": "from dataclasses import dataclass\nimport csv\nimport io\n\nraw = \"sku,qty,price\\nA1,3,2.5\\nB2,1,10\\nA1,2,2.5\\n\"\n\n\n@dataclass\nclass Line:\n    sku: str\n    qty: int\n    price: float\n\n\nlines = [Line(r[\"sku\"], int(r[\"qty\"]), float(r[\"price\"])) for r in csv.DictReader(io.StringIO(raw))]\nprint(sum(l.qty * l.price for l in lines))\nby_sku = {}\nfor l in lines:\n    by_sku[l.sku] = by_sku.get(l.sku, 0) + l.qty\nprint(by_sku)",
    "output": "22.5\n{'A1': 5, 'B2': 1}",
    "lang": "python"
   },
   {
    "title": "B. Fix the shared list",
    "task": "This code fails when Python reads the class. Say what the error is. Fix it. Then make two baskets, add one item to the first and show that the second stays empty.",
    "hint": "Import field from dataclasses. Use field(default_factory=list).",
    "setup": "",
    "sql": "from dataclasses import dataclass, field\n\n\n@dataclass\nclass Basket:\n    owner: str\n    items: list = field(default_factory=list)\n\n\na = Basket(\"Ann\")\nb = Basket(\"Bo\")\na.items.append(\"pen\")\nprint(a)\nprint(b)",
    "output": "Basket(owner='Ann', items=['pen'])\nBasket(owner='Bo', items=[])",
    "lang": "python",
    "broken": "from dataclasses import dataclass\n\n@dataclass\nclass Basket:\n    owner: str\n    items: list = []\n\na = Basket(\"Ann\")\nprint(a)",
    "brokenOutput": "ValueError: mutable default <class 'list'> for field items is not allowed: use default_factory"
   },
   {
    "title": "C. A read-only record to JSON",
    "task": "Make a frozen dataclass Rate with currency (str) and value (float). Make Rate('EUR', 1.17). Try to change value to 2.0 inside try/except and print the name of the error type. Then print the record as JSON.",
    "hint": "Use except Exception as e and print(type(e).__name__). Use json.dumps(asdict(rate)).",
    "setup": "",
    "sql": "from dataclasses import dataclass, asdict\nimport json\n\n\n@dataclass(frozen=True)\nclass Rate:\n    currency: str\n    value: float\n\n\nrate = Rate(\"EUR\", 1.17)\ntry:\n    rate.value = 2.0\nexcept Exception as e:\n    print(type(e).__name__)\nprint(json.dumps(asdict(rate)))",
    "output": "FrozenInstanceError\n{\"currency\": \"EUR\", \"value\": 1.17}",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-comprehensions",
    "title": "List, dict and set comprehensions",
    "no": "1.7"
   },
   {
    "id": "py-mutable-default",
    "title": "Mutable default arguments",
    "no": "1.8"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   },
   {
    "id": "py-classes",
    "title": "Classes: objects, attributes and methods",
    "no": "2.2"
   },
   {
    "id": "py-class-property",
    "title": "Classes, @property and __repr__",
    "no": "2.3"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.4",
  "num": 15
 },
 {
  "id": "py-decorators",
  "track": "Python",
  "title": "Decorators and closures",
  "minutes": 45,
  "summary": "A closure remembers values. A decorator wraps a function to add steps around it.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 212\" role=\"img\" aria-label=\"A decorator wraps a function. The wrapper runs extra steps around the original call.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m2c\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"36\" text-anchor=\"start\" font-size=\"12\">total_price(3, 10)</text><line class=\"ar\" x1=\"120\" y1=\"30\" x2=\"168\" y2=\"30\" marker-end=\"url(#m2c)\"/><rect class=\"bxa\" x=\"170\" y=\"6\" width=\"220\" height=\"196\" rx=\"10\"/><text class=\"tx tb\" x=\"280\" y=\"24\" text-anchor=\"middle\" font-size=\"12\">wrapper  (from @log_calls)</text><rect class=\"bx\" x=\"190\" y=\"36\" width=\"180\" height=\"32\" rx=\"8\"/><text class=\"tx\" x=\"280\" y=\"57\" text-anchor=\"middle\" font-size=\"12\">print &#x27;calling ...&#x27;</text><line class=\"ar\" x1=\"280\" y1=\"68\" x2=\"280\" y2=\"78\" marker-end=\"url(#m2c)\"/><rect class=\"bxg\" x=\"190\" y=\"78\" width=\"180\" height=\"32\" rx=\"8\"/><text class=\"tx\" x=\"280\" y=\"99\" text-anchor=\"middle\" font-size=\"12\">func(*args, **kwargs)</text><line class=\"ar\" x1=\"280\" y1=\"110\" x2=\"280\" y2=\"120\" marker-end=\"url(#m2c)\"/><rect class=\"bx\" x=\"190\" y=\"120\" width=\"180\" height=\"32\" rx=\"8\"/><text class=\"tx\" x=\"280\" y=\"141\" text-anchor=\"middle\" font-size=\"12\">print &#x27;returned ...&#x27;</text><line class=\"ar\" x1=\"280\" y1=\"152\" x2=\"280\" y2=\"162\" marker-end=\"url(#m2c)\"/><rect class=\"bx\" x=\"190\" y=\"162\" width=\"180\" height=\"32\" rx=\"8\"/><text class=\"tx\" x=\"280\" y=\"183\" text-anchor=\"middle\" font-size=\"12\">return result</text><line class=\"ar\" x1=\"390\" y1=\"184\" x2=\"438\" y2=\"184\" marker-end=\"url(#m2c)\"/><text class=\"tx tb\" x=\"444\" y=\"188\" text-anchor=\"start\" font-size=\"12\">36.0</text><text class=\"tx tw tb\" x=\"0\" y=\"100\" text-anchor=\"start\" font-size=\"12\">@log_calls</text><text class=\"tx tm\" x=\"0\" y=\"118\" text-anchor=\"start\" font-size=\"11\">means</text><text class=\"tx\" x=\"0\" y=\"136\" text-anchor=\"start\" font-size=\"11\">total_price =</text><text class=\"tx\" x=\"0\" y=\"152\" text-anchor=\"start\" font-size=\"11\">log_calls(total_price)</text></svg>",
   "caption": "The wrapper runs before and after the real function. The caller does not notice."
  },
  "predict": {
   "q": "def make_adder(n):\n    def add(x):\n        return x + n\n    return add\n\nadd5 = make_adder(5)\nprint(add5(10))\nWhat does this print?",
   "reveal": "15. The inner function add remembers n from the call that made it. This is a closure."
  },
  "explain": [
   {
    "h": "Functions are values",
    "p": [
     "A function is a value. You can store it, pass it and return it.",
     "A function inside a function is a nested function.",
     "A closure is a nested function that remembers names from the outer function. add remembers n."
    ]
   },
   {
    "h": "*args and **kwargs",
    "p": [
     "*args collects extra positional arguments into a tuple.",
     "**kwargs collects extra keyword arguments into a dict.",
     "func(*args, **kwargs) passes them on unchanged. A wrapper needs this to accept any call."
    ]
   },
   {
    "h": "A decorator",
    "p": [
     "A decorator is a function that takes a function and returns a new function.",
     "@log_calls above def total_price means total_price = log_calls(total_price).",
     "The new function is the wrapper. It runs your extra steps and calls the original.",
     "Always return the result of the original call, or the caller gets None."
    ]
   },
   {
    "h": "functools.wraps",
    "p": [
     "Without @functools.wraps(func), the wrapper hides the name of the original function.",
     "Put @functools.wraps(func) on the wrapper. The name and the docstring then stay correct."
    ]
   },
   {
    "h": "A decorator with an argument",
    "p": [
     "@retry(3) needs one more level. retry(3) returns the decorator. The decorator returns the wrapper.",
     "Read it from the outside in: retry gets the number, decorator gets the function, wrapper gets the call.",
     "Data jobs use this for retries, logging and timing."
    ]
   }
  ],
  "example": {
   "title": "A logging decorator and a retry decorator",
   "code": "import functools\n\n\ndef log_calls(func):\n    \"\"\"Print each call to func with its arguments and its result.\"\"\"\n    @functools.wraps(func)                           # keeps the name and docstring of func\n    def wrapper(*args, **kwargs):\n        print(f\"calling {func.__name__} with {args} {kwargs}\")\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__} returned {result}\")\n        return result                                # never forget to return the result\n    return wrapper\n\n\n@log_calls\ndef total_price(quantity, unit_price, vat_rate=0.2):\n    \"\"\"Return the price including VAT.\"\"\"\n    return round(quantity * unit_price * (1 + vat_rate), 2)\n\n\ntotal_price(3, 10, vat_rate=0)\nprint(total_price.__name__)\n\n\ndef retry(times):\n    \"\"\"Call the function up to `times` times while it raises ConnectionError.\"\"\"\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(1, times + 1):\n                try:\n                    return func(*args, **kwargs)\n                except ConnectionError:              # retry only the error that can pass by itself\n                    print(f\"attempt {attempt} failed\")\n            raise ConnectionError(\"gave up\")\n        return wrapper\n    return decorator\n\n\nattempts_made = []\n\n\n@retry(3)\ndef fetch():\n    attempts_made.append(1)\n    if len(attempts_made) < 3:\n        raise ConnectionError(\"down\")\n    return \"data\"\n\n\nprint(fetch())",
   "notes": [
    "Always use @functools.wraps(func) on the wrapper. Without it the name, docstring and help of the original function are lost.",
    "Accept *args and **kwargs in the wrapper and pass them on unchanged. The decorator then works on any function.",
    "Return the result of the call. Forgetting it turns every decorated function into one that returns None.",
    "Retry only errors that can pass by themselves (ConnectionError). Never retry on a bare except: it hides real bugs.",
    "A decorator is the right tool for a rule that applies to many functions: logging, timing, retry, checks."
   ],
   "output": "calling total_price with (3, 10) {'vat_rate': 0}\ntotal_price returned 30\ntotal_price\nattempt 1 failed\nattempt 2 failed\ndata"
  },
  "qa": {
   "q": "import functools\n\ndef log_calls(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper\n\n@log_calls\ndef total_price(qty):\n    return qty\n\nprint(total_price.__name__)\nWhat does this print? Why?",
   "a": "It prints wrapper. The decorator replaced total_price with the wrapper function, and the wrapper has its own name. Add @functools.wraps(func) above def wrapper to keep the name total_price."
  },
  "build": {
   "task": "From a blank page write a decorator audit that adds the name of each called function to a list called audit_log. Decorate two functions, for example add(a, b) and shout(text). Call each one. The return values must stay correct. Then print audit_log and the __name__ of one decorated function.",
   "hint": "Make audit_log a list outside the decorator. Use *args and **kwargs in the wrapper. Return the result. Use functools.wraps.",
   "check": "audit_log shows the two names in the order of the calls. The __name__ is the original name, not wrapper."
  },
  "teach": "Explain in 5 sentences what @log_calls above a function really does.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What is a closure?",
    "a": "A nested function that remembers names from the outer function."
   },
   {
    "q": "What do *args and **kwargs collect?",
    "a": "Extra positional arguments (as a tuple) and extra keyword arguments (as a dict)."
   },
   {
    "q": "What happens if the wrapper does not return the result?",
    "a": "The caller gets None instead of the real result."
   }
  ],
  "mixed": [
   {
    "title": "A. Count the calls",
    "task": "Write a decorator count_calls. It counts how many times the function runs. Keep the count on the wrapper as wrapper.calls. Decorate a function square(n). Call it three times. Print the count.",
    "hint": "Set wrapper.calls = 0 after you define the wrapper. Add 1 inside the wrapper. Return the result of the call.",
    "setup": "",
    "sql": "import functools\n\n\ndef count_calls(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        wrapper.calls += 1\n        return func(*args, **kwargs)\n    wrapper.calls = 0\n    return wrapper\n\n\n@count_calls\ndef square(n):\n    return n * n\n\n\nprint(square(2), square(3), square(4))\nprint(square.calls)",
    "output": "4 9 16\n3",
    "lang": "python"
   },
   {
    "title": "B. Check the input",
    "task": "Write a decorator require_positive. It checks that the first argument is more than 0. If not, it raises ValueError('must be positive'). Decorate net_to_gross(net) that returns net * 1.2. Call it with 100 and with -5. Catch the error and print its text.",
    "hint": "In the wrapper, check args[0] before you call func. Remember to return the result.",
    "setup": "",
    "sql": "import functools\n\n\ndef require_positive(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        if args[0] <= 0:\n            raise ValueError(\"must be positive\")\n        return func(*args, **kwargs)\n    return wrapper\n\n\n@require_positive\ndef net_to_gross(net):\n    return net * 1.2\n\n\nprint(net_to_gross(100))\ntry:\n    net_to_gross(-5)\nexcept ValueError as e:\n    print(e)",
    "output": "120.0\nmust be positive",
    "lang": "python"
   },
   {
    "title": "C. Fix the decorator",
    "task": "This prints something unexpected. Say what and why. Fix it so it prints HELLO ANN.",
    "hint": "Two lines work out a value but never send it back.",
    "setup": "",
    "sql": "def shout(func):\n    def wrapper(*args, **kwargs):\n        text = func(*args, **kwargs)\n        return text.upper()\n    return wrapper\n\n\n@shout\ndef greet(name):\n    return \"hello \" + name\n\n\nprint(greet(\"ann\"))",
    "output": "HELLO ANN",
    "lang": "python",
    "broken": "def shout(func):\n    def wrapper(*args, **kwargs):\n        text = func(*args, **kwargs)\n        text.upper()\n    return wrapper\n\n@shout\ndef greet(name):\n    return \"hello \" + name\n\nprint(greet(\"ann\"))",
    "brokenOutput": "None"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   },
   {
    "id": "py-except-order",
    "title": "try/except and the order of except blocks",
    "no": "1.10"
   },
   {
    "id": "py-classes",
    "title": "Classes: objects, attributes and methods",
    "no": "2.2"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.5",
  "num": 16
 },
 {
  "id": "py-typing",
  "track": "Python",
  "title": "Type hints",
  "minutes": 35,
  "summary": "A type hint says what a function expects and returns. A checker finds mismatches before you run.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 200\" role=\"img\" aria-label=\"Python ignores type hints when it runs. mypy reads them and reports mismatches before you run.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m2d\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bxg\" x=\"0\" y=\"40\" width=\"170\" height=\"60\" rx=\"8\"/><text class=\"tx tb\" x=\"85\" y=\"62\" text-anchor=\"middle\" font-size=\"12\">report.py</text><text class=\"tx\" x=\"85\" y=\"82\" text-anchor=\"middle\" font-size=\"11\">def add_vat(price: float)</text><line class=\"ar\" x1=\"170\" y1=\"60\" x2=\"268\" y2=\"28\" marker-end=\"url(#m2d)\"/><line class=\"ar\" x1=\"170\" y1=\"82\" x2=\"268\" y2=\"124\" marker-end=\"url(#m2d)\"/><rect class=\"bxa\" x=\"270\" y=\"6\" width=\"250\" height=\"50\" rx=\"8\"/><text class=\"tx tb\" x=\"395\" y=\"26\" text-anchor=\"middle\" font-size=\"12\">python report.py</text><text class=\"tx\" x=\"395\" y=\"44\" text-anchor=\"middle\" font-size=\"11\">ignores hints, runs the code</text><rect class=\"bxw\" x=\"270\" y=\"100\" width=\"250\" height=\"60\" rx=\"8\"/><text class=\"tx tb\" x=\"395\" y=\"120\" text-anchor=\"middle\" font-size=\"12\">mypy report.py  (before running)</text><text class=\"tx\" x=\"395\" y=\"140\" text-anchor=\"middle\" font-size=\"11\">reads hints, reports mismatches</text><text class=\"tx tb\" x=\"0\" y=\"186\" text-anchor=\"start\" font-size=\"12\">A hint is a promise. Only a checker holds you to it.</text></svg>",
   "caption": "Python runs the code and ignores hints. mypy reads the hints and reports problems first."
  },
  "predict": {
   "q": "def double(n: int) -> int:\n    return n * 2\n\nprint(double(\"ab\"))\nPython 3 runs this. The hint says n is an int. What does it print?",
   "reveal": "abab. Python does not check the hint. The text 'ab' times 2 is 'abab'. The mistake stays hidden."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A type hint is a note about the type of a value. You write it after a colon: price: float.",
     "-> float after the brackets is the hint for the return value.",
     "Python does not check hints when the code runs. Wrong code still runs.",
     "A checker such as mypy reads the hints and reports mismatches. It does not run your code."
    ]
   },
   {
    "h": "Common hints",
    "p": [
     "Simple types: int, float, str, bool.",
     "Lists and dicts: list[str] is a list of text. dict[str, float] is a dict with text keys and float values.",
     "A tuple of fixed shape: tuple[int, str].",
     "A value that can be None: dict | None. This needs Python 3.10 or newer. Older code writes Optional[dict]."
    ]
   },
   {
    "h": "Why a data engineer uses them",
    "p": [
     "A function with hints states its inputs and its output. A reader does not have to guess.",
     "mypy finds the case where a function can return None and the caller forgets to check.",
     "Editors use hints to suggest names and to warn you.",
     "Dataclasses and many data libraries read hints. You already used them in the dataclass lesson."
    ]
   },
   {
    "h": "Run mypy",
    "p": [
     "Install it in your virtual environment: pip install mypy.",
     "Run it on a file: mypy report.py. It prints one line for each problem, with the line number.",
     "On the example below, mypy reports line 18 and line 20. Line 18 passes a str where a float is expected. Line 20 uses the result without a check for None.",
     "Fix line 20 with if found is not None: before you use found."
    ]
   },
   {
    "h": "Rules",
    "p": [
     "Add hints to function parameters and return values first. Skip hints on simple local variables.",
     "Do not fight the checker with the word Any. Fix the code or the hint.",
     "Hints are a promise. They are not a test. You still need tests."
    ]
   }
  ],
  "example": {
   "title": "Hints that Python ignores and mypy checks",
   "code": "VAT_RATE = 0.2\n\n\ndef add_vat(price: float, rate: float = VAT_RATE) -> float:\n    \"\"\"Return the price with VAT added.\"\"\"\n    return price * (1 + rate)\n\n\ndef find_customer(orders: list[dict], customer: str) -> dict | None:\n    \"\"\"Return the first order for the customer, or None when there is none.\"\"\"\n    for order in orders:\n        if order[\"customer\"] == customer:\n            return order\n    return None\n\n\nprint(add_vat(10))\nprint(add_vat(\"10\", 2))\nfound = find_customer([{\"customer\": \"Acme\", \"amount\": 5}], \"Acme\")\nprint(found[\"amount\"])",
   "notes": [
    "Hint every function parameter and return value. Skip hints on simple local variables: the checker can infer them.",
    "Write X | None when a function can return nothing. mypy then forces the caller to check, which prevents the classic None crash.",
    "Use the specific type: list[Order], not list. A reader and the checker then know what is inside.",
    "Run mypy in your checks, next to pytest. A hint that nothing checks is only a comment.",
    "Avoid Any. It switches the checker off for that value. Fix the hint instead."
   ],
   "output": "12.0\n101010\n5"
  },
  "qa": {
   "q": "def find_customer(orders: list[dict], customer: str) -> dict | None:\n    ...\nresult = find_customer(orders, \"Zed\")\nprint(result[\"amount\"])\nZed is not in orders. What happens when you run this? What does mypy say before you run it?",
   "a": "At run time it raises TypeError: 'NoneType' object is not subscriptable, because the function returned None. mypy reports Value of type 'dict[Any, Any] | None' is not indexable, before you run anything. Fix it with if result is not None:."
  },
  "build": {
   "task": "From a blank page write a dataclass Line with sku (str), qty (int) and price (float). Write total(lines: list[Line]) -> float that returns the sum of qty * price. Write find_line(lines: list[Line], sku: str) -> Line | None. Print the total for two lines. Print find_line for a missing sku and check the result with is None before you read it. Run mypy on the file.",
   "hint": "Install mypy with pip install mypy. Use if line is None: print('not found') else: print(line.qty).",
   "check": "The file runs and mypy prints: Success: no issues found in 1 source file."
  },
  "teach": "Explain in 5 sentences why Python runs code with wrong hints and what mypy adds.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "Does Python stop a wrong type hint at run time?",
    "a": "No. Hints are not checked when the code runs."
   },
   {
    "q": "How do you write a hint for a dict or None?",
    "a": "dict | None on Python 3.10 or newer."
   },
   {
    "q": "What does mypy do?",
    "a": "It reads the hints and reports mismatches without running the code."
   }
  ],
  "mixed": [
   {
    "title": "A. Add hints to a small program",
    "task": "Add type hints to every parameter and return value. Then run the code. average takes a list of floats and returns a float. label takes a float and returns text: 'high' for 100 or more, otherwise 'low'. Print average([80.0, 120.0]) and its label.",
    "hint": "def average(values: list[float]) -> float. Use sum(values) / len(values).",
    "setup": "",
    "sql": "def average(values: list[float]) -> float:\n    return sum(values) / len(values)\n\n\ndef label(value: float) -> str:\n    if value >= 100:\n        return \"high\"\n    return \"low\"\n\n\navg = average([80.0, 120.0])\nprint(avg, label(avg))",
    "output": "100.0 high",
    "lang": "python"
   },
   {
    "title": "B. Handle the None result",
    "task": "find_price(prices, sku) returns the price or None. The code below crashes for a missing sku. Add a check so it prints 'no price' for a missing sku, and the price for a known one. Update the hint on the return value.",
    "hint": "The return hint must be float | None. Use price = find_price(...), then if price is None.",
    "setup": "",
    "sql": "def find_price(prices: dict[str, float], sku: str) -> float | None:\n    return prices.get(sku)\n\n\nprices = {\"A1\": 2.5}\nfor sku in [\"A1\", \"Z9\"]:\n    price = find_price(prices, sku)\n    if price is None:\n        print(\"no price\")\n    else:\n        print(price * 2)",
    "output": "5.0\nno price",
    "lang": "python",
    "broken": "def find_price(prices: dict[str, float], sku: str) -> float:\n    return prices.get(sku)\n\n\nprices = {\"A1\": 2.5}\nprint(find_price(prices, \"A1\") * 2)\nprint(find_price(prices, \"Z9\") * 2)",
    "brokenOutput": "5.0\nTypeError: unsupported operand type(s) for *: 'NoneType' and 'int'"
   },
   {
    "title": "C. A hint that does not protect you",
    "task": "Say what this prints, and why Python does not stop it. Fix the call so the result is 12.",
    "hint": "Convert the text to an int before you call the function.",
    "setup": "",
    "sql": "def pack(qty: int) -> int:\n    return qty * 3\n\n\nprint(pack(int(\"4\")))",
    "output": "12",
    "lang": "python",
    "broken": "def pack(qty: int) -> int:\n    return qty * 3\n\n\nprint(pack(\"4\"))",
    "brokenOutput": "444"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   },
   {
    "id": "py-dataclasses",
    "title": "Dataclasses",
    "no": "2.4"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.6",
  "num": 17
 },
 {
  "id": "py-logging",
  "track": "Python",
  "title": "Logging",
  "minutes": 35,
  "summary": "Logging records what a job did, with a level for each message. It replaces print in real jobs.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 206\" role=\"img\" aria-label=\"Five log levels. A set level hides everything below it.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m2e\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"8\" width=\"190\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"14\" y=\"28\" text-anchor=\"start\" font-size=\"12\">DEBUG</text><text class=\"tx tm\" x=\"176\" y=\"28\" text-anchor=\"end\" font-size=\"12\">10</text><rect class=\"bxg\" x=\"0\" y=\"46\" width=\"190\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"14\" y=\"66\" text-anchor=\"start\" font-size=\"12\">INFO</text><text class=\"tx tm\" x=\"176\" y=\"66\" text-anchor=\"end\" font-size=\"12\">20</text><rect class=\"bxa\" x=\"0\" y=\"84\" width=\"190\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"14\" y=\"104\" text-anchor=\"start\" font-size=\"12\">WARNING</text><text class=\"tx tm\" x=\"176\" y=\"104\" text-anchor=\"end\" font-size=\"12\">30</text><rect class=\"bxa\" x=\"0\" y=\"122\" width=\"190\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"14\" y=\"142\" text-anchor=\"start\" font-size=\"12\">ERROR</text><text class=\"tx tm\" x=\"176\" y=\"142\" text-anchor=\"end\" font-size=\"12\">40</text><rect class=\"bxa\" x=\"0\" y=\"160\" width=\"190\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"14\" y=\"180\" text-anchor=\"start\" font-size=\"12\">CRITICAL</text><text class=\"tx tm\" x=\"176\" y=\"180\" text-anchor=\"end\" font-size=\"12\">50</text><line class=\"ln\" x1=\"0\" y1=\"45\" x2=\"210\" y2=\"45\"/><text class=\"tx tb\" x=\"218\" y=\"40\" text-anchor=\"start\" font-size=\"11\">INFO and above are shown</text><text class=\"tx tm\" x=\"218\" y=\"26\" text-anchor=\"start\" font-size=\"11\">hidden</text><text class=\"tx\" x=\"218\" y=\"100\" text-anchor=\"start\" font-size=\"11\">log.info(&#x27;loaded %s rows&#x27;, n)</text><text class=\"tx tg tb\" x=\"218\" y=\"120\" text-anchor=\"start\" font-size=\"11\">INFO:etl:loaded 2 rows</text><text class=\"tx\" x=\"218\" y=\"160\" text-anchor=\"start\" font-size=\"11\">log.exception(&#x27;failed&#x27;)</text><text class=\"tx tw tb\" x=\"218\" y=\"180\" text-anchor=\"start\" font-size=\"11\">ERROR line + the traceback</text></svg>",
   "caption": "Each message has a level. The level you set decides which messages appear."
  },
  "predict": {
   "q": "import logging\nlogging.info(\"hello\")\nlogging.warning(\"careful\")\nYou have not set up anything. What appears?",
   "reveal": "Only WARNING:root:careful appears. The default level is WARNING, so the info message is hidden. The text goes to the error stream, not to normal output."
  },
  "explain": [
   {
    "h": "Why not print",
    "p": [
     "A job that runs at night has nobody watching. You read its record the next morning.",
     "print has no levels and no names. You cannot turn it down when the job is noisy.",
     "logging gives each message a level, a name and an optional time. You choose where it goes."
    ]
   },
   {
    "h": "Levels",
    "p": [
     "DEBUG for detail while you build. INFO for normal progress. WARNING for a problem you handled.",
     "ERROR for a failure. CRITICAL for a failure that stops the whole job.",
     "You set a level. Messages below that level are hidden."
    ]
   },
   {
    "h": "Set up once",
    "p": [
     "Call logging.basicConfig(...) once, at the start of the program.",
     "level=logging.INFO shows INFO and above. format says what each line looks like.",
     "stream=sys.stdout sends the lines to normal output. filename='etl.log' sends them to a file.",
     "log = logging.getLogger('etl') gives you a named logger. Use the same name for one part of the job."
    ]
   },
   {
    "h": "Write good messages",
    "p": [
     "Write log.warning('bad amount %r in row %s', value, row_id). Do not build the text with an f-string.",
     "Logging fills in the %r and %s only if the message is shown. That saves work.",
     "Put numbers in the message: how many rows were read, how many were rejected.",
     "In an except block, call log.exception('failed'). It adds the full traceback. log.error does not."
    ]
   },
   {
    "h": "Rules",
    "p": [
     "Do not log passwords or customer data.",
     "Do not call basicConfig in a library or in a function. Call it once in the main program.",
     "Log at the start and the end of each step, with row counts."
    ]
   }
  ],
  "example": {
   "title": "A module logger, configured once in main",
   "code": "import logging\nimport sys\n\nlog = logging.getLogger(__name__)         # one logger per module, named after the module\n\n\ndef count_valid_rows(rows):\n    \"\"\"Return how many rows have a numeric amount. Log each bad row.\"\"\"\n    valid = 0\n    for row in rows:\n        try:\n            float(row[\"amount\"])\n        except ValueError:\n            log.warning(\"bad amount %r in row %s\", row[\"amount\"], row[\"id\"])\n        else:\n            valid += 1                       # else runs only when no error was raised\n    log.info(\"loaded %s of %s rows\", valid, len(rows))\n    return valid\n\n\ndef main():\n    logging.basicConfig(stream=sys.stdout, level=logging.INFO, format=\"%(levelname)s %(message)s\")\n    log.debug(\"this line is hidden\")\n    rows = [{\"id\": \"1\", \"amount\": \"120\"}, {\"id\": \"2\", \"amount\": \"abc\"}, {\"id\": \"3\", \"amount\": \"80\"}]\n    count_valid_rows(rows)\n\n\nif __name__ == \"__main__\":\n    main()",
   "notes": [
    "Each module gets log = logging.getLogger(__name__). Only the main program calls basicConfig. A library never configures logging.",
    "Pass values as arguments: log.warning('bad amount %r', value). Do not use an f-string. The text is built only when the message is shown.",
    "Log the counts: rows read, rows rejected, rows loaded. They are the first thing you look at when a nightly job is wrong.",
    "Use the right level: INFO for progress, WARNING for a problem you handled, ERROR for a failure. Use log.exception inside except to keep the traceback.",
    "try / except / else keeps the success path in else, so only the risky line sits inside try."
   ],
   "output": "WARNING bad amount 'abc' in row 2\nINFO loaded 2 of 3 rows"
  },
  "qa": {
   "q": "try:\n    1 / 0\nexcept ZeroDivisionError:\n    log.error(\"failed\")\nWhat is missing compared with log.exception(\"failed\")? ",
   "a": "The traceback. log.exception writes the same message at ERROR level and adds the full traceback. log.error writes only the message."
  },
  "build": {
   "task": "From a blank page take a function that reads a list of order dicts and checks each amount. Add logging: INFO at the start with the row count, WARNING for each negative amount (with the row id), and INFO at the end with the number of good rows. Set the level to INFO and send the lines to normal output. Run it with one negative row. Then change the level to WARNING and run it again.",
   "hint": "Call logging.basicConfig(stream=sys.stdout, level=logging.INFO, format='%(levelname)s %(message)s') once. Use %s in the messages.",
   "check": "With INFO you see three kinds of lines. With WARNING you see only the warning line."
  },
  "teach": "Explain in 5 sentences why a nightly job should log with levels and not print.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "Which level is the default?",
    "a": "WARNING. INFO and DEBUG are hidden until you set a lower level."
   },
   {
    "q": "Why write log.info('rows %s', n) and not log.info(f'rows {n}')?",
    "a": "Logging builds the text only if the message is shown. It also keeps the message pattern constant."
   },
   {
    "q": "Which call adds the traceback inside an except block?",
    "a": "log.exception(...)."
   }
  ],
  "mixed": [
   {
    "title": "A. Log the progress of a load",
    "task": "Set up logging to normal output at INFO level with the format '%(levelname)s %(message)s'. Process these amounts: 120, -5, 40. Log INFO 'read 3 rows' first. Log a WARNING for each negative amount. At the end log INFO with the number of good rows.",
    "hint": "Import logging and sys. Use logging.basicConfig(stream=sys.stdout, level=logging.INFO, format=...). Use %s in the messages.",
    "setup": "",
    "sql": "import logging\nimport sys\n\nlogging.basicConfig(stream=sys.stdout, level=logging.INFO, format=\"%(levelname)s %(message)s\")\nlog = logging.getLogger(\"load\")\n\namounts = [120, -5, 40]\nlog.info(\"read %s rows\", len(amounts))\ngood = 0\nfor amount in amounts:\n    if amount < 0:\n        log.warning(\"negative amount %s\", amount)\n    else:\n        good = good + 1\nlog.info(\"good rows: %s\", good)",
    "output": "INFO read 3 rows\nWARNING negative amount -5\nINFO good rows: 2",
    "lang": "python"
   },
   {
    "title": "B. Why is the INFO line missing?",
    "task": "Say what this prints and why the first message is missing. Fix it so both lines appear.",
    "hint": "The default level is WARNING. Set the level in basicConfig.",
    "setup": "",
    "sql": "import logging\nimport sys\n\nlogging.basicConfig(stream=sys.stdout, level=logging.INFO, format=\"%(levelname)s %(message)s\")\nlog = logging.getLogger(\"etl\")\nlog.info(\"start\")\nlog.warning(\"one row skipped\")",
    "output": "INFO start\nWARNING one row skipped",
    "lang": "python",
    "broken": "import logging\nimport sys\n\nlogging.basicConfig(stream=sys.stdout, format=\"%(levelname)s %(message)s\")\nlog = logging.getLogger(\"etl\")\nlog.info(\"start\")\nlog.warning(\"one row skipped\")",
    "brokenOutput": "WARNING one row skipped"
   },
   {
    "title": "C. One summary line with the right level",
    "task": "A job has results ok = 8 and failed = 2. Log one summary line: 'done: 8 ok, 2 failed'. Use INFO when failed is 0 and ERROR when failed is more than 0. Use the format '%(levelname)s %(message)s' and normal output.",
    "hint": "Choose the method with an if: log.error(...) or log.info(...). Use the same message pattern in both.",
    "setup": "",
    "sql": "import logging\nimport sys\n\nlogging.basicConfig(stream=sys.stdout, level=logging.INFO, format=\"%(levelname)s %(message)s\")\nlog = logging.getLogger(\"job\")\n\nok = 8\nfailed = 2\nif failed > 0:\n    log.error(\"done: %s ok, %s failed\", ok, failed)\nelse:\n    log.info(\"done: %s ok, %s failed\", ok, failed)",
    "output": "ERROR done: 8 ok, 2 failed",
    "lang": "python"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   },
   {
    "id": "py-except-order",
    "title": "try/except and the order of except blocks",
    "no": "1.10"
   },
   {
    "id": "py-scripts",
    "title": "Scripts, imports and virtual environments",
    "no": "1.11"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.7",
  "num": 18
 },
 {
  "id": "py-pytest",
  "track": "Python",
  "title": "Testing with pytest",
  "minutes": 45,
  "summary": "A test is a small function with assert. pytest finds the tests, runs them and counts the passes.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 180\" role=\"img\" aria-label=\"pytest finds test files and test functions, runs them, and reports how many passed.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m2f\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bxg\" x=\"0\" y=\"8\" width=\"170\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"85\" y=\"26\" text-anchor=\"middle\" font-size=\"12\">etl.py</text><text class=\"tx\" x=\"85\" y=\"43\" text-anchor=\"middle\" font-size=\"11\">band(), clean_amount()</text><rect class=\"bxa\" x=\"0\" y=\"70\" width=\"170\" height=\"66\" rx=\"8\"/><text class=\"tx tb\" x=\"85\" y=\"88\" text-anchor=\"middle\" font-size=\"12\">test_etl.py</text><text class=\"tx\" x=\"85\" y=\"106\" text-anchor=\"middle\" font-size=\"11\">def test_band(): assert ...</text><text class=\"tx\" x=\"85\" y=\"124\" text-anchor=\"middle\" font-size=\"11\">def test_load(tmp_path): ...</text><line class=\"ar\" x1=\"85\" y1=\"70\" x2=\"85\" y2=\"54\" marker-end=\"url(#m2f)\"/><text class=\"tx tm\" x=\"98\" y=\"64\" text-anchor=\"start\" font-size=\"11\">imports</text><line class=\"ar\" x1=\"170\" y1=\"103\" x2=\"238\" y2=\"103\" marker-end=\"url(#m2f)\"/><rect class=\"bxw\" x=\"240\" y=\"78\" width=\"130\" height=\"50\" rx=\"8\"/><text class=\"tx tb\" x=\"305\" y=\"100\" text-anchor=\"middle\" font-size=\"12\">pytest -q</text><text class=\"tx\" x=\"305\" y=\"118\" text-anchor=\"middle\" font-size=\"11\">finds test_*</text><line class=\"ar\" x1=\"370\" y1=\"103\" x2=\"410\" y2=\"103\" marker-end=\"url(#m2f)\"/><rect class=\"bxg\" x=\"412\" y=\"82\" width=\"108\" height=\"42\" rx=\"8\"/><text class=\"tx tb\" x=\"466\" y=\"108\" text-anchor=\"middle\" font-size=\"12\">6 passed</text><text class=\"tx tb\" x=\"0\" y=\"164\" text-anchor=\"start\" font-size=\"12\">Names that start with test_ are tests. Other names are ignored.</text></svg>",
   "caption": "pytest finds test_ files and test_ functions. Everything else is ignored."
  },
  "predict": {
   "q": "assert 2 + 2 == 5\nWhat happens when Python runs this line?",
   "reveal": "It raises AssertionError. assert checks a claim. If the claim is False, the program stops with an error. If the claim is True, nothing happens."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A test runs your code on a known input and checks the result.",
     "assert is the check: assert band(120) == 'large'. A False claim raises AssertionError.",
     "pytest is a tool that finds your tests, runs them and shows which passed.",
     "Install it in your virtual environment: pip install pytest."
    ]
   },
   {
    "h": "How pytest finds tests",
    "p": [
     "It looks for files named test_*.py. It runs functions named test_*.",
     "Other names are ignored. A helper function that does not start with test_ is never run.",
     "Run it in the project folder: pytest -q. The -q option keeps the output short.",
     "A dot means one test passed. F means one failed."
    ]
   },
   {
    "h": "Useful tools",
    "p": [
     "@pytest.mark.parametrize runs one test with many inputs. Each input counts as one test.",
     "with pytest.raises(ValueError): checks that the code inside raises that error.",
     "tmp_path is a built-in folder for one test. Add a name with tmp_path / 'file.txt'. pytest deletes it later.",
     "pytest.approx(0.3) compares floats. 0.1 + 0.2 == 0.3 is False, because floats are not exact."
    ]
   },
   {
    "h": "Rules",
    "p": [
     "Test the code that holds your rules: cleaning, banding, parsing, joins.",
     "One test checks one idea. Give it a name that says what it checks.",
     "Write a test for each bug you find. The bug then cannot come back."
    ]
   }
  ],
  "example": {
   "title": "A module and its tests",
   "code": "# etl.py\n\"\"\"Cleaning and banding rules for order amounts.\"\"\"\n\nLARGE_LIMIT = 100\nMEDIUM_LIMIT = 50\n\n\ndef clean_amount(text):\n    \"\"\"Turn text such as ' 1,234.50 ' into the float 1234.5.\"\"\"\n    return float(text.strip().replace(\",\", \"\"))\n\n\ndef band(amount):\n    \"\"\"Return 'large', 'medium' or 'small' for an amount.\"\"\"\n    if amount >= LARGE_LIMIT:\n        return \"large\"\n    if amount >= MEDIUM_LIMIT:\n        return \"medium\"\n    return \"small\"\n\n\ndef load_amounts(path):\n    \"\"\"Read one amount per line and skip blank lines.\"\"\"\n    with open(path, encoding=\"utf-8\") as file:\n        return [clean_amount(line) for line in file if line.strip()]\n\n# test_etl.py\nimport pytest\nfrom etl import band, clean_amount, load_amounts\n\n\ndef test_clean_amount_removes_spaces_and_commas():\n    assert clean_amount(\" 1,234.50 \") == 1234.5\n\n\n@pytest.mark.parametrize(\"amount, expected\", [(120, \"large\"), (60, \"medium\"), (10, \"small\")])\ndef test_band(amount, expected):\n    assert band(amount) == expected\n\n\ndef test_clean_amount_rejects_text():\n    with pytest.raises(ValueError):\n        clean_amount(\"abc\")\n\n\ndef test_load_amounts_skips_blank_lines(tmp_path):\n    path = tmp_path / \"amounts.txt\"\n    with open(path, \"w\", encoding=\"utf-8\") as file:\n        file.write(\"10\\n20.5\\n\\n\")\n    assert load_amounts(path) == [10.0, 20.5]\n\n\ndef helper_not_a_test():\n    assert False",
   "notes": [
    "A test name says what is checked: test_clean_amount_rejects_text. A failing test then explains itself.",
    "One test checks one idea. parametrize runs the same check on many inputs without copy and paste.",
    "Test the edges: the values at exactly 100 and 50, blank lines, bad text. Bugs live at the edges.",
    "tmp_path gives each test its own clean folder, so tests never depend on files on your machine.",
    "Keep the rules (limits, cleaning) in a small module with no printing. Such code is easy to test."
   ],
   "output": "$ pytest -q\n......   [100%]\n6 passed"
  },
  "qa": {
   "q": "A test file has five def lines. Four names start with test_. One is helper_not_a_test. One of the four tests uses parametrize with three inputs. How many tests does pytest run?",
   "a": "Six. The helper is ignored. The three plain tests count once each. The parametrized test counts three times. 3 + 3 = 6."
  },
  "build": {
   "task": "From a blank page write a small file rules.py with two functions from your earlier lessons, for example band(amount) and a cleaning function. Write test_rules.py. It needs at least one plain test, one parametrize test with three inputs and one pytest.raises test. Run pytest -q.",
   "hint": "Put both files in the same folder. In the test file write from rules import band. Name each test function test_something.",
   "check": "pytest -q prints a line of dots and then N passed, where N counts every parametrized input."
  },
  "teach": "Explain in 5 sentences how pytest decides what to run and what a dot means.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What does assert do when the claim is False?",
    "a": "It raises AssertionError."
   },
   {
    "q": "Does pytest run a function called check_band?",
    "a": "No. Only names that start with test_ are run."
   },
   {
    "q": "Why use pytest.approx for floats?",
    "a": "Floats are not exact. approx allows a tiny difference."
   }
  ],
  "mixed": [
   {
    "title": "A. Write the checks",
    "task": "band(amount) returns 'large' for 100 or more, 'medium' for 50 or more, otherwise 'small'. Write plain assert lines for 120, 60, 10 and for the edge values 100 and 50. If all pass, print 'all checks passed'.",
    "hint": "Test the edges. The rule says 100 or more, so band(100) is large.",
    "setup": "",
    "sql": "def band(amount):\n    if amount >= 100:\n        return \"large\"\n    if amount >= 50:\n        return \"medium\"\n    return \"small\"\n\n\nassert band(120) == \"large\"\nassert band(60) == \"medium\"\nassert band(10) == \"small\"\nassert band(100) == \"large\"\nassert band(50) == \"medium\"\nprint(\"all checks passed\")",
    "output": "all checks passed",
    "lang": "python"
   },
   {
    "title": "B. Read the failure",
    "task": "Say what this prints. The test is wrong, not the function. Fix the test.",
    "hint": "The function makes the text uppercase. The test expects lowercase.",
    "setup": "",
    "sql": "def clean(text):\n    return text.strip().upper()\n\n\nassert clean(\" ab \") == \"AB\", \"clean should give uppercase\"\nprint(\"ok\")",
    "output": "ok",
    "lang": "python",
    "broken": "def clean(text):\n    return text.strip().upper()\n\n\nassert clean(\" ab \") == \"ab\", \"clean should give uppercase\"\nprint(\"ok\")",
    "brokenOutput": "AssertionError: clean should give uppercase"
   },
   {
    "title": "C. Compare floats safely",
    "task": "Say why this fails. Fix it with pytest.approx.",
    "hint": "import pytest. Then compare with pytest.approx(0.3).",
    "setup": "",
    "sql": "import pytest\n\ntotal = 0.1 + 0.2\nassert total == pytest.approx(0.3)\nprint(\"ok\")",
    "output": "ok",
    "lang": "python",
    "broken": "total = 0.1 + 0.2\nassert total == 0.3\nprint(\"ok\")",
    "brokenOutput": "AssertionError:"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   },
   {
    "id": "py-except-order",
    "title": "try/except and the order of except blocks",
    "no": "1.10"
   },
   {
    "id": "py-scripts",
    "title": "Scripts, imports and virtual environments",
    "no": "1.11"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.8",
  "num": 19
 },
 {
  "id": "py-datetime",
  "track": "Python",
  "title": "Dates, times and time zones",
  "minutes": 45,
  "summary": "Parse text into dates, add time with timedelta, and keep time zones correct. Store UTC.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 216\" role=\"img\" aria-label=\"Adding one day on a London clock across the March change gives a 23 hour gap in UTC.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m2g\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"20\" text-anchor=\"start\" font-size=\"12\">London wall clock</text><rect class=\"bxa\" x=\"0\" y=\"28\" width=\"200\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"100\" y=\"52\" text-anchor=\"middle\" font-size=\"12\">Sat 28 Mar 12:00  (UTC+0)</text><line class=\"ar\" x1=\"200\" y1=\"48\" x2=\"318\" y2=\"48\" marker-end=\"url(#m2g)\"/><text class=\"tx tm\" x=\"260\" y=\"40\" text-anchor=\"middle\" font-size=\"11\">+ 1 day</text><rect class=\"bxa\" x=\"320\" y=\"28\" width=\"200\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"420\" y=\"52\" text-anchor=\"middle\" font-size=\"12\">Sun 29 Mar 12:00  (UTC+1)</text><text class=\"tx tb\" x=\"0\" y=\"108\" text-anchor=\"start\" font-size=\"12\">The same two moments in UTC</text><rect class=\"bxg\" x=\"0\" y=\"116\" width=\"200\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"100\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">28 Mar 12:00 UTC</text><line class=\"ar\" x1=\"200\" y1=\"136\" x2=\"318\" y2=\"136\" marker-end=\"url(#m2g)\"/><text class=\"tx tw tb\" x=\"260\" y=\"128\" text-anchor=\"middle\" font-size=\"11\">23 hours</text><rect class=\"bxg\" x=\"320\" y=\"116\" width=\"200\" height=\"40\" rx=\"8\"/><text class=\"tx\" x=\"420\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">29 Mar 11:00 UTC</text><text class=\"tx tb\" x=\"0\" y=\"184\" text-anchor=\"start\" font-size=\"12\">The clocks went forward on 29 March. One calendar day was only 23 hours.</text><text class=\"tx\" x=\"0\" y=\"202\" text-anchor=\"start\" font-size=\"12\">Store UTC. Convert to local time only when you show it.</text></svg>",
   "caption": "Adding one day on a London clock across the March change is 23 real hours."
  },
  "predict": {
   "q": "from datetime import datetime\ndatetime.strptime(\"27/10/2026\", \"%m/%d/%Y\")\nWhat happens?",
   "reveal": "It raises ValueError: time data '27/10/2026' does not match format '%m/%d/%Y'. The format says month first. There is no month 27."
  },
  "explain": [
   {
    "h": "The types",
    "p": [
     "date holds a day. datetime holds a day and a time. timedelta holds a length of time.",
     "date(2026, 12, 25) - date(2026, 10, 27) gives a timedelta. Its .days is 59.",
     "datetime + timedelta(days=7) gives a new datetime. The original does not change."
    ]
   },
   {
    "h": "Text to date and back",
    "p": [
     "strptime reads text: datetime.strptime('27/10/2026 14:30', '%d/%m/%Y %H:%M').",
     "strftime writes text: d.strftime('%Y-%m-%d').",
     "%d is the day. %m is the month. %Y is the four digit year. %H is the hour. %M is the minute.",
     "A wrong format raises ValueError. Write the format to match the text exactly.",
     "ISO text such as 2026-10-27T14:30:00+00:00 is the safest format. Use fromisoformat and isoformat."
    ]
   },
   {
    "h": "Naive and aware",
    "p": [
     "A naive datetime has no time zone. An aware datetime has one.",
     "You cannot compare a naive and an aware value. Python raises TypeError.",
     "Use zoneinfo for zones: ZoneInfo('Europe/London'). On Windows run pip install tzdata once.",
     "datetime.now(timezone.utc) gives the current time as an aware UTC value."
    ]
   },
   {
    "h": "Daylight saving",
    "p": [
     "UK clocks go forward on the last Sunday of March. In 2026 that is 29 March.",
     "Adding timedelta(days=1) to an aware London time moves the clock by one calendar day.",
     "The gap in real time can be 23 hours. Convert both values to UTC to measure real time.",
     "Subtracting two values with the same zone uses the clock. Subtracting values from different zones uses real time."
    ]
   },
   {
    "h": "Rules for data jobs",
    "p": [
     "Store and move times in UTC. Convert to local time only when you show them.",
     "Keep the time zone with the data. A time without a zone is a guess.",
     "Name the format for each source file. Day first and month first look the same for the 1st to the 12th."
    ]
   }
  ],
  "example": {
   "title": "Parse day-first text as London time and keep UTC for storage",
   "code": "from datetime import date, datetime, timedelta, timezone\nfrom zoneinfo import ZoneInfo\n\nLONDON = ZoneInfo(\"Europe/London\")\nINPUT_FORMAT = \"%d/%m/%Y %H:%M\"            # day first: say the format once, in one place\n\n\ndef parse_london(text):\n    \"\"\"Parse day-first text as a London time and return an aware datetime.\"\"\"\n    return datetime.strptime(text, INPUT_FORMAT).replace(tzinfo=LONDON)\n\n\ndef to_utc(moment):\n    \"\"\"Convert an aware datetime to UTC.\"\"\"\n    return moment.astimezone(timezone.utc)\n\n\nopened = parse_london(\"27/10/2026 14:30\")\nprint(opened, opened.strftime(\"%Y-%m-%d\"))\nprint((date(2026, 12, 25) - date(2026, 10, 27)).days)\n\nstart = parse_london(\"28/03/2026 12:00\")\nnext_day = start + timedelta(days=1)       # one calendar day on the London clock\nprint(start)\nprint(next_day)\nprint(next_day - start)                    # same zone: the clock difference\nprint(to_utc(next_day) - to_utc(start))    # UTC: the real time that passed\nprint(to_utc(next_day))",
   "notes": [
    "Store and exchange times in UTC. Convert to a local zone only when you show a time to a person.",
    "Never use a naive datetime in a data pipeline. Attach the zone at the edge, as parse_london does.",
    "Put the format string in one named constant. Day-first and month-first look the same for the 1st to the 12th.",
    "Use zoneinfo for zones. Do not add a fixed number of hours by hand: the offset changes with daylight saving.",
    "To measure real elapsed time, convert both values to UTC first."
   ],
   "output": "2026-10-27 14:30:00+00:00 2026-10-27\n59\n2026-03-28 12:00:00+00:00\n2026-03-29 12:00:00+01:00\n1 day, 0:00:00\n23:00:00\n2026-03-29 11:00:00+00:00"
  },
  "qa": {
   "q": "from datetime import datetime, timezone\na = datetime(2026, 10, 27, 12, 0)\nb = datetime(2026, 10, 27, 13, 0, tzinfo=timezone.utc)\nprint(a < b)\nWhat does this do? Why?",
   "a": "It raises TypeError: can't compare offset-naive and offset-aware datetimes. a has no time zone. b has one. Give a a zone first, for example tzinfo=timezone.utc."
  },
  "build": {
   "task": "From a blank page: two London times are '28/03/2026 12:00' and '29/03/2026 12:00' (day first). Parse both. Make them aware with ZoneInfo('Europe/London'). Convert both to UTC. Print the hours between them. Then print the first time in New York time as ISO text.",
   "hint": "Use strptime, then .replace(tzinfo=london). Subtract the UTC values and use .total_seconds() / 3600.",
   "check": "The gap is 23.0 hours. The New York time of the first value is 2026-03-28T08:00:00-04:00."
  },
  "teach": "Explain in 5 sentences why you store times in UTC.",
  "mistakes": [],
  "selfCheck": [
   {
    "q": "What is the difference between a naive and an aware datetime?",
    "a": "An aware datetime carries a time zone. A naive one does not."
   },
   {
    "q": "How long is a London day when the clocks go forward?",
    "a": "23 hours."
   },
   {
    "q": "Which format text reads 27/10/2026 as day first?",
    "a": "%d/%m/%Y."
   }
  ],
  "mixed": [
   {
    "title": "A. Parse day-first dates and sort them",
    "task": "These dates are day first: '03/11/2026', '25/12/2025', '01/02/2026'. Parse them, sort them from oldest to newest and print each one as ISO text.",
    "hint": "Use datetime.strptime(text, '%d/%m/%Y').date(). sorted() works on dates. Use .isoformat().",
    "setup": "",
    "sql": "from datetime import datetime\n\ntexts = [\"03/11/2026\", \"25/12/2025\", \"01/02/2026\"]\ndates = sorted(datetime.strptime(t, \"%d/%m/%Y\").date() for t in texts)\nfor d in dates:\n    print(d.isoformat())",
    "output": "2025-12-25\n2026-02-01\n2026-11-03",
    "lang": "python"
   },
   {
    "title": "B. Convert a meeting time",
    "task": "A meeting is at 15:00 on 5 October 2026 in New York. Print the time in London and in UTC, both as ISO text.",
    "hint": "Make the datetime with tzinfo=ZoneInfo('America/New_York'). Then use astimezone(ZoneInfo('Europe/London')) and astimezone(timezone.utc).",
    "setup": "",
    "sql": "from datetime import datetime, timezone\nfrom zoneinfo import ZoneInfo\n\nmeeting = datetime(2026, 10, 5, 15, 0, tzinfo=ZoneInfo(\"America/New_York\"))\nprint(meeting.astimezone(ZoneInfo(\"Europe/London\")).isoformat())\nprint(meeting.astimezone(timezone.utc).isoformat())",
    "output": "2026-10-05T20:00:00+01:00\n2026-10-05T19:00:00+00:00",
    "lang": "python"
   },
   {
    "title": "C. Fix the comparison",
    "task": "Say what error this raises. The load time is UTC but the code forgot to say so. Fix it. It should print True.",
    "hint": "Give loaded the same zone: tzinfo=timezone.utc.",
    "setup": "",
    "sql": "from datetime import datetime, timezone\n\nloaded = datetime(2026, 10, 27, 9, 0, tzinfo=timezone.utc)\ndeadline = datetime(2026, 10, 27, 17, 0, tzinfo=timezone.utc)\nprint(loaded < deadline)",
    "output": "True",
    "lang": "python",
    "broken": "from datetime import datetime, timezone\n\nloaded = datetime(2026, 10, 27, 9, 0)\ndeadline = datetime(2026, 10, 27, 17, 0, tzinfo=timezone.utc)\nprint(loaded < deadline)",
    "brokenOutput": "TypeError: can't compare offset-naive and offset-aware datetimes"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-control",
    "title": "Conditions and loops",
    "no": "1.4"
   },
   {
    "id": "py-functions",
    "title": "Functions",
    "no": "1.5"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   },
   {
    "id": "py-except-order",
    "title": "try/except and the order of except blocks",
    "no": "1.10"
   }
  ],
  "assumed": [],
  "module": "M2",
  "lessonNo": "2.9",
  "num": 20
 },
 {
  "id": "pd-basics",
  "track": "Python",
  "title": "DataFrames and Series",
  "minutes": 45,
  "summary": "Load a CSV into a DataFrame, read it, add a column, and do sums on whole columns with no loop.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 228\" role=\"img\" aria-label=\"A DataFrame is a table. One column of it is a Series.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m3a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"16\" text-anchor=\"start\" font-size=\"12\">DataFrame = a table. Each column is a Series.</text><rect class=\"bxa\" x=\"0\" y=\"28\" width=\"140\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"12\">referral_id</text><rect class=\"bx\" x=\"0\" y=\"62\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"70\" y=\"80\" text-anchor=\"middle\" font-size=\"11\">R1</text><rect class=\"bx\" x=\"0\" y=\"92\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"11\">R2</text><rect class=\"bx\" x=\"0\" y=\"122\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"70\" y=\"140\" text-anchor=\"middle\" font-size=\"11\">R3</text><rect class=\"bxg\" x=\"150\" y=\"28\" width=\"140\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"220\" y=\"48\" text-anchor=\"middle\" font-size=\"12\">urgency</text><rect class=\"bxg\" x=\"150\" y=\"62\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"220\" y=\"80\" text-anchor=\"middle\" font-size=\"11\">urgent</text><rect class=\"bxg\" x=\"150\" y=\"92\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"220\" y=\"110\" text-anchor=\"middle\" font-size=\"11\">routine</text><rect class=\"bxg\" x=\"150\" y=\"122\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"220\" y=\"140\" text-anchor=\"middle\" font-size=\"11\">routine</text><rect class=\"bxa\" x=\"300\" y=\"28\" width=\"140\" height=\"30\" rx=\"8\"/><text class=\"tx tb\" x=\"370\" y=\"48\" text-anchor=\"middle\" font-size=\"12\">referred_date</text><rect class=\"bx\" x=\"300\" y=\"62\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"370\" y=\"80\" text-anchor=\"middle\" font-size=\"11\">2025-01-06</text><rect class=\"bx\" x=\"300\" y=\"92\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"370\" y=\"110\" text-anchor=\"middle\" font-size=\"11\">2025-01-07</text><rect class=\"bx\" x=\"300\" y=\"122\" width=\"140\" height=\"26\" rx=\"8\"/><text class=\"tx\" x=\"370\" y=\"140\" text-anchor=\"middle\" font-size=\"11\">2025-01-09</text><text class=\"tx tb\" x=\"220\" y=\"172\" text-anchor=\"middle\" font-size=\"12\">df[&quot;urgency&quot;]  is one Series</text><text class=\"tx\" x=\"0\" y=\"196\" text-anchor=\"start\" font-size=\"12\">df[[&quot;referral_id&quot;, &quot;urgency&quot;]]  is a smaller DataFrame</text><text class=\"tx tb\" x=\"0\" y=\"214\" text-anchor=\"start\" font-size=\"12\">One operation on a Series works on every row. No loop.</text></svg>",
   "caption": "A DataFrame is a table. One column is a Series. One operation covers every row."
  },
  "predict": {
   "q": "import pandas as pd\ndf = pd.DataFrame({\"id\": [\"R1\", \"R2\"], \"n\": [3, 4]})\nprint(df[\"n\"] * 2)\nWhat does it print? Is there a loop?",
   "reveal": "It prints a Series: 6 and 8, each with its row number (0 and 1) on the left, then Name: n, dtype: int64. There is no loop. pandas applies the multiply to every row for you."
  },
  "explain": [
   {
    "h": "What pandas gives you",
    "p": [
     "pandas holds a table in memory. You have used csv.DictReader and a loop for this. pandas does the same work in one line.",
     "A DataFrame is the table. A Series is one column of it. Install with pip install pandas, then import pandas as pd.",
     "The output on these pages comes from pandas 3.0.5. Older versions word some error messages a little differently. The ideas are the same."
    ]
   },
   {
    "h": "Read a CSV",
    "p": [
     "pd.read_csv('file.csv') reads a file. For text you already have in memory, wrap it: pd.read_csv(io.StringIO(text)). Lesson 1.9 showed StringIO.",
     "pandas guesses each column type. A date column comes in as plain text unless you say so.",
     "Say so with parse_dates=['referred_date']. Now date sums work.",
     "Say how to read a column that looks like a number but is not one: dtype={'id': str}. Without it, the id 007 becomes the number 7. The zeros are lost for good."
    ]
   },
   {
    "h": "Look before you work",
    "p": [
     "df.shape gives (rows, columns). df.head() shows the first five rows. df.columns lists the names.",
     "df['urgency'] is one column, a Series. df[['referral_id', 'urgency']] with two brackets is a smaller DataFrame.",
     "df['urgency'].tolist() turns a Series into a plain Python list. Use it when you want to print or compare.",
     "df['test_type'].value_counts() counts each value. It is the tally from lesson 1.6 in one call."
    ]
   },
   {
    "h": "Whole-column sums",
    "p": [
     "df['n'] * 2 doubles every row. df['a'] - df['b'] subtracts row by row. You never write the loop.",
     "A new column is just an assignment: df['days'] = (df['sample'] - df['referred']).dt.days.",
     "Subtracting two date columns gives time gaps. .dt.days turns each gap into a whole number of days.",
     "A date that is missing is NaT. A number that is missing is NaN. A gap that touches a missing date is missing too. Counting them: df['x'].isna().sum().",
     "mean(), sum(), min() and max() skip the missing values. So the mean of three days with one missing is the mean of the two that exist."
    ]
   },
   {
    "h": "Habits",
    "p": [
     "Check shape and head straight after every load. A wrong separator or a missing header shows up at once.",
     "Say the types you want when you read. Do not trust the guess for dates and for ids."
    ]
   }
  ],
  "example": {
   "title": "Load, add a column, count",
   "code": "import io\nimport pandas as pd\n\ntext = \"\"\"referral_id,test_type,urgency,referred_date,sample_received\nR1,Genome,urgent,2025-01-06,2025-01-08\nR2,Exome,routine,2025-01-07,\nR3,Panel,routine,2025-01-09,2025-01-13\nR4,Exome,urgent,2025-01-10,2025-01-11\n\"\"\"\ndf = pd.read_csv(io.StringIO(text), parse_dates=[\"referred_date\", \"sample_received\"])\n\nprint(df.shape)\nprint(df[\"urgency\"].tolist())\nprint(df[[\"referral_id\", \"urgency\"]])\n\ndf[\"days_to_sample\"] = (df[\"sample_received\"] - df[\"referred_date\"]).dt.days\nprint(df[[\"referral_id\", \"days_to_sample\"]])\nprint(df[\"days_to_sample\"].mean())\nprint(df[\"sample_received\"].isna().sum())\nprint(df[\"test_type\"].value_counts())",
   "output": "(4, 5)\n['urgent', 'routine', 'routine', 'urgent']\n  referral_id  urgency\n0          R1   urgent\n1          R2  routine\n2          R3  routine\n3          R4   urgent\n  referral_id  days_to_sample\n0          R1             2.0\n1          R2             NaN\n2          R3             4.0\n3          R4             1.0\n2.3333333333333335\n1\ntest_type\nExome     2\nGenome    1\nPanel     1\nName: count, dtype: int64"
  },
  "qa": {
   "q": "import io\nimport pandas as pd\ndf = pd.read_csv(io.StringIO(\"id\\n007\\n012\\n\"))\nprint(df[\"id\"].tolist())\nWhat prints? How do you keep the zeros?",
   "a": "It prints [7, 12]. pandas read the ids as numbers, so the leading zeros are gone. Read with dtype={'id': str}. Then it prints ['007', '012']."
  },
  "build": {
   "task": "From a blank page: read the text below with pandas. Parse both date columns. Add a column days_to_report that is the days between referred and reported. Print the mean of that column, then print how many reports are missing.\n\nid,referred,reported\nR1,2025-02-03,2025-02-20\nR2,2025-02-04,\nR3,2025-02-10,2025-02-24",
   "hint": "pd.read_csv(io.StringIO(text), parse_dates=['referred', 'reported']). Then (df['reported'] - df['referred']).dt.days. Missing: df['reported'].isna().sum().",
   "check": "The mean is 15.5 (17 days and 14 days; the missing one is skipped). The count of missing reports is 1."
  },
  "teach": "Explain in 5 sentences why pandas is faster to write than a loop over csv.DictReader, and name one thing a loop still does better.",
  "mistakes": [
   "Forgetting parse_dates, then subtracting. The columns are text, so you get TypeError.",
   "Reading ids as numbers. 007 becomes 7. Use dtype={'id': str}.",
   "Writing a loop over rows for a sum on a column. df['a'] - df['b'] already does it for every row."
  ],
  "selfCheck": [
   {
    "q": "What is the difference between a DataFrame and a Series?",
    "a": "A DataFrame is a table. A Series is one column of it."
   },
   {
    "q": "How do you read a date column so you can subtract it?",
    "a": "parse_dates=['column_name'] in read_csv."
   },
   {
    "q": "What does mean() do with missing values?",
    "a": "It skips them."
   }
  ],
  "mixed": [
   {
    "title": "A. Load and add a column",
    "task": "TEXT holds a CSV. Read it with pandas (wrap it in io.StringIO), parsing referred and sample as dates. Add days_to_sample. Print the mean, then print the days_to_sample column as a list.",
    "hint": "import io, pandas as pd. Then pd.read_csv(io.StringIO(TEXT), parse_dates=['referred', 'sample']).",
    "setup": "TEXT = \"\"\"id,test_type,urgency,referred,sample\nR1,Genome,urgent,2025-01-06,2025-01-08\nR2,Exome,routine,2025-01-07,2025-01-12\nR3,Panel,routine,2025-01-09,2025-01-13\nR4,Exome,urgent,2025-01-10,2025-01-11\n\"\"\"\n",
    "sql": "import io\nimport pandas as pd\n\ndf = pd.read_csv(io.StringIO(TEXT), parse_dates=[\"referred\", \"sample\"])\ndf[\"days_to_sample\"] = (df[\"sample\"] - df[\"referred\"]).dt.days\nprint(df[\"days_to_sample\"].mean())\nprint(df[\"days_to_sample\"].tolist())",
    "output": "3.0\n[2, 5, 4, 1]",
    "lang": "python"
   },
   {
    "title": "B. The dates are text",
    "task": "This crashes. Say why. Fix it so it prints the days as a list.",
    "hint": "The columns were read as text. Tell read_csv which columns are dates.",
    "setup": "TEXT = \"\"\"id,test_type,urgency,referred,sample\nR1,Genome,urgent,2025-01-06,2025-01-08\nR2,Exome,routine,2025-01-07,2025-01-12\nR3,Panel,routine,2025-01-09,2025-01-13\nR4,Exome,urgent,2025-01-10,2025-01-11\n\"\"\"\n",
    "sql": "import io\nimport pandas as pd\n\ndf = pd.read_csv(io.StringIO(TEXT), parse_dates=[\"referred\", \"sample\"])\ndf[\"days\"] = (df[\"sample\"] - df[\"referred\"]).dt.days\nprint(df[\"days\"].tolist())",
    "output": "[2, 5, 4, 1]",
    "lang": "python",
    "broken": "import io\nimport pandas as pd\n\ndf = pd.read_csv(io.StringIO(TEXT))\ndf[\"days\"] = (df[\"sample\"] - df[\"referred\"]).dt.days\nprint(df[\"days\"].tolist())",
    "brokenOutput": "TypeError: unsupported operand type(s) for -: 'str' and 'str'"
   },
   {
    "title": "C. The vanishing zeros",
    "task": "Say what this prints and what is wrong. Fix it so the ids keep their zeros.",
    "hint": "Pass dtype={'id': str} to read_csv.",
    "setup": "IDS = \"id\\n007\\n012\\n\"\n",
    "sql": "import io\nimport pandas as pd\n\ndf = pd.read_csv(io.StringIO(IDS), dtype={\"id\": str})\nprint(df[\"id\"].tolist())",
    "output": "['007', '012']",
    "lang": "python",
    "broken": "import io\nimport pandas as pd\n\ndf = pd.read_csv(io.StringIO(IDS))\nprint(df[\"id\"].tolist())",
    "brokenOutput": "[7, 12]"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-dict-count",
    "title": "Count items with a dictionary",
    "no": "1.6"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   }
  ],
  "assumed": [],
  "module": "M7",
  "lessonNo": "3.1",
  "num": 21
 },
 {
  "id": "pd-select",
  "track": "Python",
  "title": "Select and filter",
  "minutes": 50,
  "summary": "Keep the rows you want with a True or False mask, clean text with .str, and change a copy without touching the original.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 214\" role=\"img\" aria-label=\"A comparison makes a True or False for each row. Rows marked True are kept.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m3b\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"16\" text-anchor=\"start\" font-size=\"12\">df[&quot;urgency&quot;] == &quot;urgent&quot;</text><text class=\"tx tm\" x=\"250\" y=\"16\" text-anchor=\"start\" font-size=\"11\">the mask</text><text class=\"tx tb\" x=\"340\" y=\"16\" text-anchor=\"start\" font-size=\"12\">df[mask]</text><rect class=\"bxg\" x=\"0\" y=\"28\" width=\"200\" height=\"28\" rx=\"8\"/><text class=\"tx\" x=\"12\" y=\"47\" text-anchor=\"start\" font-size=\"12\">R1   urgent</text><rect class=\"bxg\" x=\"250\" y=\"28\" width=\"70\" height=\"28\" rx=\"8\"/><text class=\"tx tb\" x=\"285\" y=\"47\" text-anchor=\"middle\" font-size=\"12\">True</text><line class=\"ar\" x1=\"204\" y1=\"42\" x2=\"246\" y2=\"42\" marker-end=\"url(#m3b)\"/><rect class=\"bxg\" x=\"340\" y=\"28\" width=\"180\" height=\"28\" rx=\"8\"/><text class=\"tx\" x=\"352\" y=\"47\" text-anchor=\"start\" font-size=\"12\">R1   urgent</text><rect class=\"bx\" x=\"0\" y=\"62\" width=\"200\" height=\"28\" rx=\"8\"/><text class=\"tx\" x=\"12\" y=\"81\" text-anchor=\"start\" font-size=\"12\">R2   routine</text><rect class=\"bxa\" x=\"250\" y=\"62\" width=\"70\" height=\"28\" rx=\"8\"/><text class=\"tx tb\" x=\"285\" y=\"81\" text-anchor=\"middle\" font-size=\"12\">False</text><line class=\"ar\" x1=\"204\" y1=\"76\" x2=\"246\" y2=\"76\" marker-end=\"url(#m3b)\"/><text class=\"tx tm\" x=\"430\" y=\"81\" text-anchor=\"middle\" font-size=\"11\">dropped</text><rect class=\"bx\" x=\"0\" y=\"96\" width=\"200\" height=\"28\" rx=\"8\"/><text class=\"tx\" x=\"12\" y=\"115\" text-anchor=\"start\" font-size=\"12\">R3   routine</text><rect class=\"bxa\" x=\"250\" y=\"96\" width=\"70\" height=\"28\" rx=\"8\"/><text class=\"tx tb\" x=\"285\" y=\"115\" text-anchor=\"middle\" font-size=\"12\">False</text><line class=\"ar\" x1=\"204\" y1=\"110\" x2=\"246\" y2=\"110\" marker-end=\"url(#m3b)\"/><text class=\"tx tm\" x=\"430\" y=\"115\" text-anchor=\"middle\" font-size=\"11\">dropped</text><rect class=\"bxg\" x=\"0\" y=\"130\" width=\"200\" height=\"28\" rx=\"8\"/><text class=\"tx\" x=\"12\" y=\"149\" text-anchor=\"start\" font-size=\"12\">R4   urgent</text><rect class=\"bxg\" x=\"250\" y=\"130\" width=\"70\" height=\"28\" rx=\"8\"/><text class=\"tx tb\" x=\"285\" y=\"149\" text-anchor=\"middle\" font-size=\"12\">True</text><line class=\"ar\" x1=\"204\" y1=\"144\" x2=\"246\" y2=\"144\" marker-end=\"url(#m3b)\"/><rect class=\"bxg\" x=\"340\" y=\"130\" width=\"180\" height=\"28\" rx=\"8\"/><text class=\"tx\" x=\"352\" y=\"149\" text-anchor=\"start\" font-size=\"12\">R4   urgent</text><text class=\"tx tb\" x=\"0\" y=\"182\" text-anchor=\"start\" font-size=\"12\">A mask is one True or False per row. True rows stay.</text><text class=\"tx\" x=\"0\" y=\"200\" text-anchor=\"start\" font-size=\"12\">Join masks with &amp;  |  ~  and put each test in brackets.</text></svg>",
   "caption": "A comparison gives a True or False for each row. Rows marked True are kept."
  },
  "predict": {
   "q": "import pandas as pd\ndf = pd.DataFrame({\"id\": [\"R1\", \"R2\", \"R3\"], \"urgency\": [\"urgent\", \"routine\", \"urgent\"]})\nprint(df[df[\"urgency\"] == \"urgent\"][\"id\"].tolist())\nWhat prints?",
   "reveal": "It prints ['R1', 'R3']. The comparison makes a mask: True, False, True. df[mask] keeps the True rows. Then ['id'] picks one column."
  },
  "explain": [
   {
    "h": "The mask",
    "p": [
     "df['urgency'] == 'urgent' does not give one answer. It gives one True or False per row. That list is a mask.",
     "df[mask] keeps the rows where the mask is True. This is the pandas WHERE.",
     "Any comparison works: >, <, ==, !=. Comparing two date columns row by row works too: df['sample'] < df['referred'].",
     "Give the mask a name, such as bad_order. The code then reads like a sentence."
    ]
   },
   {
    "h": "Combine masks",
    "p": [
     "Use & for and, | for or, ~ for not. Do not use the words and, or, not. They fail with ValueError on a Series.",
     "Put every test in brackets: (df['a'] == 1) & (df['b'] == 2). Without brackets & binds first and you get an error (TypeError or ValueError, depending on your data).",
     "df['x'].isin(['Genome', 'Exome']) is the pandas IN. ~df['x'].isin([...]) is NOT IN."
    ]
   },
   {
    "h": "loc: rows and columns together",
    "p": [
     "df.loc[mask, ['id', 'test_type']] keeps the masked rows and only those columns.",
     "df.loc[mask, 'flag'] = 'late' changes only those rows of one column. loc is the safe way to write.",
     "Why not df[mask]['flag'] = 'late'? That writes into a temporary copy. The real table does not change. pandas warns you (SettingWithCopyWarning in older versions, ChainedAssignmentError in pandas 3). The table still does not change.",
     "So: read with df[mask]. Write with df.loc[mask, column] = value."
    ]
   },
   {
    "h": "Clean text with .str",
    "p": [
     "df['x'].str.strip() removes spaces at both ends. .str.lower(), .str.upper(), .str.title() change the case. .str.replace('-', ' ') swaps text.",
     "These are the string methods from lesson 1.2, run on every row. You get a new Series. Assign it back: df['x'] = df['x'].str.strip().",
     "Also .str.contains('abc') gives a mask, and .str.startswith('R').",
     "Clean the text first, then filter. ' Genome ' and 'genome' are two different values until you do."
    ]
   },
   {
    "h": "Copy before you change",
    "p": [
     "good = df[~bad_order].copy() makes a separate table. You can add columns to good and df stays as it was.",
     "Always end a filtered frame with .copy() when you plan to change it.",
     "Keep the rejects too: rejects = df[bad_order]. Counting what you drop is part of data quality work."
    ]
   }
  ],
  "example": {
   "title": "Clean text, then filter",
   "code": "import io\nimport pandas as pd\n\ntext = \"\"\"referral_id,test_type,urgency,referred_date,sample_received\nR1, Genome ,URGENT,2025-01-06,2025-01-08\nR2,exome,routine,2025-01-07,\nR3,Panel,Routine,2025-01-09,2025-01-13\nR4,Exome,urgent,2025-01-10,2025-01-11\nR5,Genome,routine,2025-01-13,2025-01-12\n\"\"\"\ndf = pd.read_csv(io.StringIO(text), parse_dates=[\"referred_date\", \"sample_received\"])\n\ndf[\"test_type\"] = df[\"test_type\"].str.strip().str.title()\ndf[\"urgency\"] = df[\"urgency\"].str.lower()\n\nurgent = df[df[\"urgency\"] == \"urgent\"]\nprint(urgent[\"referral_id\"].tolist())\n\nbad_order = df[\"sample_received\"] < df[\"referred_date\"]\nprint(df.loc[bad_order, \"referral_id\"].tolist())\n\nwanted = df[\"test_type\"].isin([\"Genome\", \"Exome\"]) & ~bad_order\nprint(df.loc[wanted, [\"referral_id\", \"test_type\"]])\n\ngood = df[~bad_order].copy()\ngood[\"flag\"] = \"ok\"\nprint(len(df), len(good))\nprint(df.columns.tolist())",
   "output": "['R1', 'R4']\n['R5']\n  referral_id test_type\n0          R1    Genome\n1          R2     Exome\n3          R4     Exome\n5 4\n['referral_id', 'test_type', 'urgency', 'referred_date', 'sample_received']"
  },
  "qa": {
   "q": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3], \"b\": [3, 2, 1]})\nprint(df[df[\"a\"] > 1 & df[\"b\"] > 1])\nWhat happens? Why? How do you fix it?",
   "a": "It raises ValueError: the truth value of a Series is ambiguous. & binds tighter than >, so Python works out 1 & df['b'] first and then chains the comparisons. With text columns the same slip gives TypeError. Put each test in brackets: df[(df['a'] > 1) & (df['b'] > 1)]."
  },
  "build": {
   "task": "From a blank page: read the text below. Clean test_type (strip spaces, title case) and urgency (lower case). Parse both dates. Build a mask for rows where the sample came before the referral. Print the ids of those rows. Then print the ids of the urgent Genome or Exome rows that are not in that mask.\n\nid,test_type,urgency,referred,sample\nR1, Genome ,URGENT,2025-01-06,2025-01-08\nR2,exome,routine,2025-01-07,2025-01-12\nR3,Panel,Routine,2025-01-09,2025-01-13\nR4,EXOME,Urgent,2025-01-10,2025-01-11\nR5,Genome,urgent,2025-01-13,2025-01-12",
   "hint": "bad = df['sample'] < df['referred']. Then df.loc[(df['urgency'] == 'urgent') & df['test_type'].isin(['Genome', 'Exome']) & ~bad, 'id'].tolist().",
   "check": "The first print is ['R5']. The second is ['R1', 'R4']."
  },
  "teach": "Explain in 5 sentences what a mask is and why you put brackets round each test when you combine them.",
  "mistakes": [
   "Using and / or instead of & / |. You get ValueError: the truth value of a Series is ambiguous.",
   "Forgetting brackets round each test. You get ValueError or TypeError, and the message does not mention brackets.",
   "df[mask]['col'] = value. It changes a temporary copy. Use df.loc[mask, 'col'] = value.",
   "Filtering before cleaning the text. ' Genome ' does not equal 'Genome'."
  ],
  "selfCheck": [
   {
    "q": "What does df[df['x'] == 1] do?",
    "a": "It makes a True or False mask, one per row, and keeps the rows that are True."
   },
   {
    "q": "Which three symbols join masks?",
    "a": "& for and, | for or, ~ for not."
   },
   {
    "q": "How do you change one column for some rows safely?",
    "a": "df.loc[mask, 'column'] = value."
   }
  ],
  "mixed": [
   {
    "title": "A. Clean, then filter",
    "task": "TEXT has messy text. Read it, parse the dates, strip and title-case test_type, lower-case urgency. Print the ids of rows that are urgent and a Genome or Exome test.",
    "hint": "df['x'].str.strip().str.title(). Then a mask: (df['urgency'] == 'urgent') & df['test_type'].isin([...]).",
    "setup": "TEXT = \"\"\"id,test_type,urgency,referred,sample\nR1, Genome ,URGENT,2025-01-06,2025-01-08\nR2,exome,routine,2025-01-07,2025-01-12\nR3,Panel,Routine,2025-01-09,2025-01-13\nR4,EXOME,Urgent,2025-01-10,2025-01-11\nR5,Genome,urgent,2025-01-13,2025-01-12\n\"\"\"\n",
    "sql": "import io\nimport pandas as pd\n\ndf = pd.read_csv(io.StringIO(TEXT), parse_dates=[\"referred\", \"sample\"])\ndf[\"test_type\"] = df[\"test_type\"].str.strip().str.title()\ndf[\"urgency\"] = df[\"urgency\"].str.lower()\nmask = (df[\"urgency\"] == \"urgent\") & df[\"test_type\"].isin([\"Genome\", \"Exome\"])\nprint(df.loc[mask, \"id\"].tolist())",
    "output": "['R1', 'R4', 'R5']",
    "lang": "python"
   },
   {
    "title": "B. Brackets",
    "task": "This crashes. Fix it so it prints the ids where n is above 3 and below 8.",
    "hint": "Put each test in its own brackets.",
    "setup": "",
    "sql": "import pandas as pd\n\ndf = pd.DataFrame({\"id\": [\"R1\", \"R2\", \"R3\"], \"n\": [1, 5, 9]})\nprint(df.loc[(df[\"n\"] > 3) & (df[\"n\"] < 8), \"id\"].tolist())",
    "output": "['R2']",
    "lang": "python",
    "broken": "import pandas as pd\n\ndf = pd.DataFrame({\"id\": [\"R1\", \"R2\", \"R3\"], \"n\": [1, 5, 9]})\nprint(df[df[\"n\"] > 3 & df[\"n\"] < 8][\"id\"].tolist())",
    "brokenOutput": "ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all()."
   },
   {
    "title": "C. Write with loc",
    "task": "The aim is a flag column that says reject for rows where the sample came before the referral. The code prints no flag column. Say why, then fix it so the rejected ids print.",
    "hint": "df[bad]['flag'] writes into a temporary copy. Use df.loc[bad, 'flag'] = 'reject'.",
    "setup": "TEXT = \"\"\"id,test_type,urgency,referred,sample\nR1, Genome ,URGENT,2025-01-06,2025-01-08\nR2,exome,routine,2025-01-07,2025-01-12\nR3,Panel,Routine,2025-01-09,2025-01-13\nR4,EXOME,Urgent,2025-01-10,2025-01-11\nR5,Genome,urgent,2025-01-13,2025-01-12\n\"\"\"\n",
    "sql": "import io\nimport pandas as pd\n\ndf = pd.read_csv(io.StringIO(TEXT), parse_dates=[\"referred\", \"sample\"])\nbad = df[\"sample\"] < df[\"referred\"]\ndf.loc[bad, \"flag\"] = \"reject\"\nprint(df.loc[df[\"flag\"] == \"reject\", \"id\"].tolist())",
    "output": "['R5']",
    "lang": "python",
    "broken": "import io\nimport pandas as pd\n\ndf = pd.read_csv(io.StringIO(TEXT), parse_dates=[\"referred\", \"sample\"])\nbad = df[\"sample\"] < df[\"referred\"]\ndf[bad][\"flag\"] = \"reject\"\nprint(df.columns.tolist())",
    "brokenOutput": "['id', 'test_type', 'urgency', 'referred', 'sample']"
   }
  ],
  "prereqs": [
   {
    "id": "py-types",
    "title": "Values, types and variables",
    "no": "1.1"
   },
   {
    "id": "py-strings",
    "title": "Strings and f-strings",
    "no": "1.2"
   },
   {
    "id": "py-lists-tuples",
    "title": "Lists and tuples",
    "no": "1.3"
   },
   {
    "id": "py-files",
    "title": "Files: text, CSV and JSON",
    "no": "1.9"
   },
   {
    "id": "pd-basics",
    "title": "DataFrames and Series",
    "no": "3.1"
   }
  ],
  "assumed": [],
  "module": "M7",
  "lessonNo": "3.2",
  "num": 22
 },
 {
  "id": "sql-where-having",
  "track": "SQL",
  "title": "WHERE, HAVING and the logical order",
  "minutes": 35,
  "summary": "WHERE filters rows before grouping. HAVING filters groups after grouping.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 200\" role=\"img\" aria-label=\"The logical order of SQL clauses: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m6\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><rect class=\"bx\" x=\"0\" y=\"10\" width=\"78\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"39\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">FROM</text><text class=\"tx tm\" x=\"39\" y=\"72\" text-anchor=\"middle\" font-size=\"11\">tables</text><line class=\"ar\" x1=\"78\" y1=\"30\" x2=\"88\" y2=\"30\" marker-end=\"url(#m6)\"/><rect class=\"bxa\" x=\"88\" y=\"10\" width=\"78\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"127\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">WHERE</text><text class=\"tx tm\" x=\"127\" y=\"72\" text-anchor=\"middle\" font-size=\"11\">single</text><text class=\"tx tm\" x=\"127\" y=\"86\" text-anchor=\"middle\" font-size=\"11\">rows</text><line class=\"ar\" x1=\"166\" y1=\"30\" x2=\"176\" y2=\"30\" marker-end=\"url(#m6)\"/><rect class=\"bx\" x=\"176\" y=\"10\" width=\"78\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"215\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">GROUP BY</text><text class=\"tx tm\" x=\"215\" y=\"72\" text-anchor=\"middle\" font-size=\"11\">makes</text><text class=\"tx tm\" x=\"215\" y=\"86\" text-anchor=\"middle\" font-size=\"11\">groups</text><line class=\"ar\" x1=\"254\" y1=\"30\" x2=\"264\" y2=\"30\" marker-end=\"url(#m6)\"/><rect class=\"bxa\" x=\"264\" y=\"10\" width=\"78\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"303\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">HAVING</text><text class=\"tx tm\" x=\"303\" y=\"72\" text-anchor=\"middle\" font-size=\"11\">whole</text><text class=\"tx tm\" x=\"303\" y=\"86\" text-anchor=\"middle\" font-size=\"11\">groups</text><line class=\"ar\" x1=\"342\" y1=\"30\" x2=\"352\" y2=\"30\" marker-end=\"url(#m6)\"/><rect class=\"bx\" x=\"352\" y=\"10\" width=\"78\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"391\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">SELECT</text><text class=\"tx tm\" x=\"391\" y=\"72\" text-anchor=\"middle\" font-size=\"11\">aliases</text><text class=\"tx tm\" x=\"391\" y=\"86\" text-anchor=\"middle\" font-size=\"11\">start here</text><line class=\"ar\" x1=\"430\" y1=\"30\" x2=\"440\" y2=\"30\" marker-end=\"url(#m6)\"/><rect class=\"bx\" x=\"440\" y=\"10\" width=\"78\" height=\"40\" rx=\"8\"/><text class=\"tx tb\" x=\"479\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">ORDER BY</text><text class=\"tx tm\" x=\"479\" y=\"72\" text-anchor=\"middle\" font-size=\"11\">can use</text><text class=\"tx tm\" x=\"479\" y=\"86\" text-anchor=\"middle\" font-size=\"11\">aliases</text><text class=\"tx tm\" x=\"0\" y=\"128\" text-anchor=\"start\" font-size=\"12\">Runs in this order. You type SELECT first, but it runs fifth.</text><rect class=\"bxa\" x=\"0\" y=\"142\" width=\"250\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"125\" y=\"161\" text-anchor=\"middle\" font-size=\"12\">WHERE sees rows</text><text class=\"tx\" x=\"125\" y=\"178\" text-anchor=\"middle\" font-size=\"11\">It cannot use AVG(): no groups yet.</text><rect class=\"bxa\" x=\"270\" y=\"142\" width=\"250\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"395\" y=\"161\" text-anchor=\"middle\" font-size=\"12\">HAVING sees groups</text><text class=\"tx\" x=\"395\" y=\"178\" text-anchor=\"middle\" font-size=\"11\">It can use AVG(). Repeat the expression.</text></svg>",
   "caption": "SQL Server runs the clauses in this order, not the order you type them."
  },
  "predict": {
   "q": "Table Visits has Ward and WaitMins. A: 10, 50. B: 20, 20. C: 90, 70. The query uses WHERE WaitMins > 15, GROUP BY Ward, HAVING AVG(WaitMins) > 30. Which wards come back?",
   "reveal": "A (average 50) and C (average 80). WHERE removes the visit of 10 minutes first. Then A has one visit of 50. B has an average of 20, so HAVING removes it."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "SQL Server runs the clauses in a fixed logical order. This is not the order you type.",
     "The order is FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY."
    ]
   },
   {
    "h": "WHERE and HAVING",
    "p": [
     "WHERE filters single rows before grouping.",
     "WHERE cannot use an aggregate such as AVG. No groups exist yet.",
     "HAVING filters groups after GROUP BY.",
     "HAVING is the place to filter on an aggregate, for example AVG(WaitMins) > 30.",
     "Write the full expression in HAVING. The alias from SELECT does not exist yet."
    ]
   },
   {
    "h": "Window functions",
    "p": [
     "A window function runs at the SELECT stage. WHERE and HAVING cannot see its alias.",
     "To filter on it, put the query in a CTE. Then filter in the outer query."
    ]
   },
   {
    "h": "Common mistakes",
    "p": [
     "WHERE AVG(WaitMins) > 30 gives an error. Use HAVING.",
     "A bare column in SELECT that is not in GROUP BY gives an error. Wrap it in an aggregate such as SUM.",
     "In SQL Server, AVG of an integer column returns an integer. It drops the decimals. Cast the column to a decimal type if you need them."
    ]
   }
  ],
  "example": {
   "title": "Wards with a high average wait",
   "code": "-- Wards whose average wait is above 30 minutes, counting only visits longer than 15 minutes.\nSELECT\n    v.Ward,\n    AVG(v.WaitMins) AS AvgWait\nFROM dbo.Visits AS v\nWHERE v.WaitMins > 15            -- row filter: runs before grouping\nGROUP BY v.Ward\nHAVING AVG(v.WaitMins) > 30      -- group filter: needs the aggregate, so it cannot go in WHERE\nORDER BY v.Ward;",
   "notes": [
    "Uppercase keywords, one clause on each line and indented columns make the logical order of the query easy to see.",
    "Qualify the table with its schema (dbo.Visits) and every column with an alias (v.Ward). This avoids ambiguity when the query grows a join.",
    "Comment the WHY of each filter. WHERE and HAVING are different stages, and the comment says which one runs first.",
    "End the statement with a semicolon and always give ORDER BY when order matters. Without it SQL Server does not promise any order.",
    "In SQL Server, AVG of an integer column returns an integer. Use AVG(CAST(v.WaitMins AS DECIMAL(9, 2))) when you need decimals."
   ],
   "output": "Ward | AvgWait\nA    | 50\nC    | 80"
  },
  "qa": {
   "q": "Show each ward with an average wait above 30 minutes. Count only visits longer than 15 minutes.",
   "a": "Use WHERE WaitMins > 15 for the rows. Use GROUP BY Ward. Use HAVING AVG(WaitMins) > 30 for the groups. The query in the example does this."
  },
  "build": {
   "task": "Table Visits. Write one query that shows, for each ward, the number of visits and the average wait. Ignore visits of 10 minutes or less. Keep only wards with 2 or more visits and an average wait above 25.",
   "hint": "Row filters go in WHERE. Aggregate filters go in HAVING. You can use COUNT(*) in HAVING.",
   "check": "With the sample data, only ward C returns: 2 visits, average 80."
  },
  "teach": "Explain in 5 sentences why WHERE cannot use AVG(). Use the words 'row' and 'group'.",
  "mistakes": [
   "Standing weakness: WHERE versus HAVING.",
   "Put a bare MinstoTriage in SELECT with GROUP BY and no SUM (2026-10-06)."
  ],
  "selfCheck": [
   {
    "q": "Which clause runs first, WHERE or HAVING?",
    "a": "WHERE."
   },
   {
    "q": "Can HAVING use the alias that SELECT defines?",
    "a": "No. SELECT runs after HAVING. Repeat the full expression."
   }
  ],
  "mixed": [
   {
    "title": "A. Filter rows and groups together",
    "task": "Ignore visits of 10 minutes or less. For each ward show the number of visits and the average wait, rounded to 1 decimal place. Keep wards with at least 2 visits and an average above 30. Show the highest average first.",
    "hint": "Row filter in WHERE. Both group filters in HAVING. Multiply by 1.0 so the average keeps its decimals.",
    "table": "V2",
    "tableData": "VisitID | Ward | Triage | WaitMins\n1 | A | 1 | 10\n2 | A | 2 | 50\n3 | A | 2 | 60\n4 | B | 1 | 20\n5 | B | 2 | 20\n6 | C | 1 | 90\n7 | C | 2 | 70\n8 | C | 2 | 40",
    "sql": "SELECT Ward, COUNT(*) AS Visits, ROUND(AVG(WaitMins * 1.0), 1) AS AvgWait\nFROM V2\nWHERE WaitMins > 10\nGROUP BY Ward\nHAVING COUNT(*) >= 2 AND AVG(WaitMins * 1.0) > 30\nORDER BY AvgWait DESC;",
    "output": "Ward | Visits | AvgWait\nC | 3 | 66.7\nA | 2 | 55.0",
    "rowCount": 2
   },
   {
    "title": "B. Compare each group to the whole table",
    "task": "Show the wards whose average wait is above the average wait of all visits. Show the ward and its average, rounded to 1 decimal place.",
    "hint": "A CTE gives one row per ward. A subquery in WHERE gives the overall average.",
    "table": "V2",
    "tableData": "VisitID | Ward | Triage | WaitMins\n1 | A | 1 | 10\n2 | A | 2 | 50\n3 | A | 2 | 60\n4 | B | 1 | 20\n5 | B | 2 | 20\n6 | C | 1 | 90\n7 | C | 2 | 70\n8 | C | 2 | 40",
    "sql": "WITH w AS (\n    SELECT Ward, AVG(WaitMins * 1.0) AS AvgWait\n    FROM V2\n    GROUP BY Ward\n)\nSELECT Ward, ROUND(AvgWait, 1) AS AvgWait\nFROM w\nWHERE AvgWait > (SELECT AVG(WaitMins * 1.0) FROM V2)\nORDER BY Ward;",
    "output": "Ward | AvgWait\nC | 66.7",
    "rowCount": 1
   }
  ],
  "prereqs": [],
  "assumed": [
   {
    "label": "SELECT, WHERE, ORDER BY",
    "lesson": "sql-select"
   },
   {
    "label": "GROUP BY with aggregates such as SUM and AVG",
    "lesson": "sql-aggregates"
   },
   {
    "label": "CTEs (WITH ... AS)",
    "lesson": "sql-ctes"
   },
   {
    "label": "a subquery inside SELECT or WHERE",
    "lesson": "sql-subqueries"
   }
  ],
  "module": "M3",
  "lessonNo": "5.7",
  "num": 23
 },
 {
  "id": "sql-window-frames",
  "track": "SQL",
  "title": "Window frames and LAST_VALUE",
  "minutes": 40,
  "summary": "The frame decides which rows a window function can see. The default frame stops at the current row.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 258\" role=\"img\" aria-label=\"Window frames over four rows: a moving frame, the default frame, and the full frame.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m7\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tm\" x=\"65\" y=\"14\" text-anchor=\"middle\" font-size=\"11\">VisitID 1</text><rect class=\"bx\" x=\"10\" y=\"20\" width=\"110\" height=\"36\" rx=\"8\"/><text class=\"tx tb\" x=\"65\" y=\"44\" text-anchor=\"middle\" font-size=\"15\">10</text><text class=\"tx tm\" x=\"189\" y=\"14\" text-anchor=\"middle\" font-size=\"11\">VisitID 2</text><rect class=\"bx\" x=\"134\" y=\"20\" width=\"110\" height=\"36\" rx=\"8\"/><text class=\"tx tb\" x=\"189\" y=\"44\" text-anchor=\"middle\" font-size=\"15\">50</text><text class=\"tx tm\" x=\"313\" y=\"14\" text-anchor=\"middle\" font-size=\"11\">VisitID 3</text><rect class=\"bx\" x=\"258\" y=\"20\" width=\"110\" height=\"36\" rx=\"8\"/><text class=\"tx tb\" x=\"313\" y=\"44\" text-anchor=\"middle\" font-size=\"15\">30</text><text class=\"tx tm\" x=\"437\" y=\"14\" text-anchor=\"middle\" font-size=\"11\">VisitID 4</text><rect class=\"bx\" x=\"382\" y=\"20\" width=\"110\" height=\"36\" rx=\"8\"/><text class=\"tx tb\" x=\"437\" y=\"44\" text-anchor=\"middle\" font-size=\"15\">70</text><rect class=\"bxa\" x=\"10\" y=\"66\" width=\"358\" height=\"10\" rx=\"4\"/><text class=\"tx ta tb\" x=\"10\" y=\"96\" text-anchor=\"start\" font-size=\"12\">Row 3 with  ROWS BETWEEN 2 PRECEDING AND CURRENT ROW</text><text class=\"tx\" x=\"10\" y=\"113\" text-anchor=\"start\" font-size=\"12\">sees 10, 50, 30   average = 30</text><rect class=\"bxw\" x=\"10\" y=\"132\" width=\"234\" height=\"10\" rx=\"4\"/><text class=\"tx tw tb\" x=\"10\" y=\"162\" text-anchor=\"start\" font-size=\"12\">Row 2 with the default frame (ends at the current row)</text><text class=\"tx\" x=\"10\" y=\"179\" text-anchor=\"start\" font-size=\"12\">LAST_VALUE sees 10, 50   it returns 50, not 70</text><rect class=\"bxg\" x=\"10\" y=\"198\" width=\"482\" height=\"10\" rx=\"4\"/><text class=\"tx tg tb\" x=\"10\" y=\"228\" text-anchor=\"start\" font-size=\"11\">Fix: ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</text><text class=\"tx\" x=\"10\" y=\"245\" text-anchor=\"start\" font-size=\"12\">LAST_VALUE sees 10, 50, 30, 70   it returns 70 on every row</text></svg>",
   "caption": "Ward A has waits 10, 50, 30, 70. The bar shows the rows the function sees."
  },
  "predict": {
   "q": "Ward A waits are 10, 50, 30, 70 in VisitID order. LAST_VALUE(WaitMins) OVER (PARTITION BY Ward ORDER BY VisitID) has no frame. What does row 2 return?",
   "reveal": "50. The default frame ends at the current row, so the last value it sees is the current row's value."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A window function calculates over a set of rows. This set is the window.",
     "PARTITION BY splits the rows into groups.",
     "ORDER BY puts the rows in order inside each group.",
     "The frame picks which rows, around the current row, the function can see."
    ]
   },
   {
    "h": "Frame syntax",
    "p": [
     "Write ROWS BETWEEN start AND end.",
     "The boundaries are UNBOUNDED PRECEDING, n PRECEDING, CURRENT ROW, n FOLLOWING and UNBOUNDED FOLLOWING.",
     "n must be a number that you type in the query. A variable does not work."
    ]
   },
   {
    "h": "The default frame",
    "p": [
     "A window with ORDER BY and no frame uses RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW.",
     "FIRST_VALUE reads the start of the window. It works with this default.",
     "LAST_VALUE reads the end of the window. The end is the current row. So LAST_VALUE returns the current row's own value.",
     "To get the true last value, write ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING."
    ]
   },
   {
    "h": "Useful frames",
    "p": [
     "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW averages the current row and the two rows before it.",
     "The first rows have fewer than two earlier rows. The average uses the rows that exist.",
     "ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING sees every earlier row but not the current row."
    ]
   }
  ],
  "example": {
   "title": "Moving average and LAST_VALUE",
   "code": "SELECT\n    w.VisitID,\n    AVG(w.WaitMins) OVER (\n        PARTITION BY w.Ward\n        ORDER BY w.VisitID\n        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW         -- this row and the 2 before it\n    ) AS Moving3,\n    LAST_VALUE(w.WaitMins) OVER (\n        PARTITION BY w.Ward\n        ORDER BY w.VisitID                               -- no frame: the default stops at the current row\n    ) AS LastDefault,\n    LAST_VALUE(w.WaitMins) OVER (\n        PARTITION BY w.Ward\n        ORDER BY w.VisitID\n        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING   -- the whole partition\n    ) AS LastFull\nFROM dbo.W AS w\nORDER BY w.VisitID;",
   "notes": [
    "Write each OVER clause on several lines: PARTITION BY, ORDER BY and the frame each get a line. A one-line OVER is hard to review.",
    "Always write the frame explicitly (ROWS BETWEEN ...). The default frame is a known trap. LAST_VALUE with the default frame returns the current row.",
    "Use ROWS, not RANGE, unless you want ties treated together. ROWS is faster and its meaning is exact.",
    "Give every output column a clear alias (Moving3, LastDefault) so the result can be read without the query.",
    "Comment the frame at the point where it can mislead. The comment is for the next person, and for you in six months."
   ],
   "output": "VisitID | Moving3 | LastDefault | LastFull\n1       | 10      | 10          | 70\n2       | 30      | 50          | 70\n3       | 30      | 30          | 70\n4       | 50      | 70          | 70"
  },
  "qa": {
   "q": "For row 3 of ward A (waits 10, 50, 30, 70), what does AVG(WaitMins) return with ROWS BETWEEN 2 PRECEDING AND CURRENT ROW?",
   "a": "30. The frame holds rows 1, 2 and 3: 10, 50 and 30. The sum is 90. The average is 30."
  },
  "build": {
   "task": "Use table W (ward A waits 10, 50, 30, 70). Write one query. For each visit it must show two things. First, the average of this visit and the two visits before it. Second, the true last wait in the ward.",
   "hint": "You need two window functions. The second one needs a full frame.",
   "check": "The Moving3 column is 10, 30, 30, 50. The last-wait column is 70 on every row."
  },
  "teach": "Explain in 5 sentences why LAST_VALUE returns the current row with the default frame.",
  "mistakes": [
   "LAST_VALUE default frame is on the cheat sheet. Check it again before you use LAST_VALUE.",
   "Wrote 'current_row AND preceding' and 'N preceding' instead of 'UNBOUNDED PRECEDING AND 1 PRECEDING' (2026-09-30)."
  ],
  "selfCheck": [
   {
    "q": "Which frame gives every earlier row but not the current row?",
    "a": "ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING."
   },
   {
    "q": "Can the number in '2 PRECEDING' be a variable?",
    "a": "No. It must be a number typed in the query."
   }
  ],
  "mixed": [
   {
    "title": "A. Running total and change",
    "task": "For each visit show the running total of waits in its ward, and the change from the previous visit in the same ward. The first visit in a ward has no change.",
    "hint": "SUM() with a frame that ends at CURRENT ROW. LAG() for the previous row. Both use PARTITION BY Ward ORDER BY VisitID.",
    "table": "F",
    "tableData": "VisitID | Ward | WaitMins\n1 | A | 10\n2 | A | 50\n3 | A | 30\n4 | A | 70\n5 | B | 20\n6 | B | 40\n7 | B | 20",
    "sql": "SELECT VisitID, Ward, WaitMins,\n       SUM(WaitMins) OVER (PARTITION BY Ward ORDER BY VisitID\n           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS RunningTotal,\n       WaitMins - LAG(WaitMins) OVER (PARTITION BY Ward ORDER BY VisitID) AS ChangeFromPrev\nFROM F\nORDER BY VisitID;",
    "output": "VisitID | Ward | WaitMins | RunningTotal | ChangeFromPrev\n1 | A | 10 | 10 | NULL\n2 | A | 50 | 60 | 40\n3 | A | 30 | 90 | -20\n4 | A | 70 | 160 | 40\n5 | B | 20 | 20 | NULL\n6 | B | 40 | 60 | 20\n7 | B | 20 | 80 | -20",
    "rowCount": 7
   },
   {
    "title": "B. Filter on a window result",
    "task": "Show only the visits whose wait is above the average of the visit itself and the 2 visits before it, in the same ward. Show the moving average, rounded to 1 decimal place.",
    "hint": "WHERE cannot see a window alias. Put the window query in a CTE, then filter in the outer query.",
    "table": "F",
    "tableData": "VisitID | Ward | WaitMins\n1 | A | 10\n2 | A | 50\n3 | A | 30\n4 | A | 70\n5 | B | 20\n6 | B | 40\n7 | B | 20",
    "sql": "WITH m AS (\n    SELECT VisitID, Ward, WaitMins,\n           AVG(WaitMins * 1.0) OVER (PARTITION BY Ward ORDER BY VisitID\n               ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS Moving3\n    FROM F\n)\nSELECT VisitID, Ward, WaitMins, ROUND(Moving3, 1) AS Moving3\nFROM m\nWHERE WaitMins > Moving3\nORDER BY VisitID;",
    "output": "VisitID | Ward | WaitMins | Moving3\n2 | A | 50 | 30.0\n4 | A | 70 | 50.0\n6 | B | 40 | 30.0",
    "rowCount": 3
   }
  ],
  "prereqs": [],
  "assumed": [
   {
    "label": "OVER, PARTITION BY and ranking functions such as RANK and LAG",
    "lesson": "sql-window-ranking"
   },
   {
    "label": "CTEs (WITH ... AS)",
    "lesson": "sql-ctes"
   }
  ],
  "module": "M3",
  "lessonNo": "5.9",
  "num": 24
 },
 {
  "id": "sql-percentile",
  "track": "SQL",
  "title": "PERCENTILE_CONT and PERCENTILE_DISC",
  "minutes": 30,
  "summary": "CONT blends two values. DISC returns a value that exists in the data.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 272\" role=\"img\" aria-label=\"Number line showing PERCENTILE_CONT interpolating and PERCENTILE_DISC picking a real value.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m8\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"16\" text-anchor=\"start\">Values 10, 20, 30, 40</text><line class=\"ln\" x1=\"30\" y1=\"60\" x2=\"490\" y2=\"60\"/><circle class=\"dot\" cx=\"60\" cy=\"60\" r=\"7\"/><text class=\"tx\" x=\"60\" y=\"40\" text-anchor=\"middle\">10</text><circle class=\"dot\" cx=\"180\" cy=\"60\" r=\"7\"/><text class=\"tx\" x=\"180\" y=\"40\" text-anchor=\"middle\">20</text><circle class=\"dot\" cx=\"300\" cy=\"60\" r=\"7\"/><text class=\"tx\" x=\"300\" y=\"40\" text-anchor=\"middle\">30</text><circle class=\"dot\" cx=\"420\" cy=\"60\" r=\"7\"/><text class=\"tx\" x=\"420\" y=\"40\" text-anchor=\"middle\">40</text><text class=\"tx tb\" x=\"0\" y=\"122\" text-anchor=\"start\" font-size=\"12\">Percentile 0.5</text><circle class=\"dotg\" cx=\"180\" cy=\"60\" r=\"12\"/><line class=\"ar\" x1=\"180\" y1=\"150\" x2=\"180\" y2=\"76\" marker-end=\"url(#m8)\"/><text class=\"tx tg tb\" x=\"180\" y=\"168\" text-anchor=\"middle\" font-size=\"12\">DISC = 20</text><text class=\"tx tm\" x=\"180\" y=\"183\" text-anchor=\"middle\" font-size=\"11\">a real value</text><rect class=\"dia\" x=\"234\" y=\"54\" width=\"12\" height=\"12\" transform=\"rotate(45 240 60)\"/><line class=\"ar\" x1=\"240\" y1=\"150\" x2=\"240\" y2=\"76\" marker-end=\"url(#m8)\"/><text class=\"tx ta tb\" x=\"250\" y=\"168\" text-anchor=\"start\" font-size=\"12\">CONT = 25</text><text class=\"tx tm\" x=\"250\" y=\"183\" text-anchor=\"start\" font-size=\"11\">blended: between 20 and 30</text><line class=\"ln\" x1=\"0\" y1=\"200\" x2=\"520\" y2=\"200\"/><text class=\"tx tb\" x=\"0\" y=\"222\" text-anchor=\"start\" font-size=\"12\">Percentile 0.75</text><text class=\"tx\" x=\"0\" y=\"242\" text-anchor=\"start\" font-size=\"12\">DISC = 30 (first value that reaches 75%).</text><text class=\"tx\" x=\"0\" y=\"260\" text-anchor=\"start\" font-size=\"12\">CONT = 32.5 (a quarter of the way from 30 to 40).</text></svg>",
   "caption": "The values 10, 20, 30, 40. CONT can land between values. DISC always lands on one."
  },
  "predict": {
   "q": "The values are 10, 20, 30, 40. What does PERCENTILE_DISC(0.5) return?",
   "reveal": "20. Each value holds 25% of the rows. The share at or below 20 is 50%. That is the first value that reaches 0.5."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A percentile is the value below which a given share of the data falls.",
     "The median is the 0.5 percentile.",
     "SQL Server has two functions: PERCENTILE_CONT and PERCENTILE_DISC."
    ]
   },
   {
    "h": "PERCENTILE_CONT",
    "p": [
     "CONT means continuous. It blends the two nearest values.",
     "The position is p x (n - 1), counting from 0. For 4 values and p = 0.5, the position is 1.5. That is halfway between 20 and 30, so the result is 25.",
     "The result may be a number that is not in your data."
    ]
   },
   {
    "h": "PERCENTILE_DISC",
    "p": [
     "DISC means discrete. It returns a value that exists in the column.",
     "Sort the values. Work out the share of rows at or below each value.",
     "Return the first value whose share reaches the percentile you asked for.",
     "For 0.5 on 10, 20, 30, 40 the shares are 25%, 50%, 75% and 100%. The first to reach 50% is 20."
    ]
   },
   {
    "h": "Syntax",
    "p": [
     "Write PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY column) OVER (...).",
     "ORDER BY goes inside WITHIN GROUP. It names the column to measure.",
     "Add PARTITION BY inside OVER to get one result per group. The words PARTITION BY are required.",
     "A window function returns the same value on every row. Add DISTINCT to get one row per group."
    ]
   },
   {
    "h": "Which one to use",
    "p": [
     "Use DISC when the answer must be a value that really happened, such as a wait time of a real patient.",
     "Use CONT when a smooth statistical estimate is acceptable."
    ]
   }
  ],
  "example": {
   "title": "Median and quartiles of 10, 20, 30, 40",
   "code": "-- PERCENTILE_CONT blends values. PERCENTILE_DISC returns a value that really exists.\nSELECT DISTINCT                                   -- OVER () repeats one answer on every row\n    PERCENTILE_CONT(0.5)  WITHIN GROUP (ORDER BY p.x) OVER () AS ContMedian,\n    PERCENTILE_DISC(0.5)  WITHIN GROUP (ORDER BY p.x) OVER () AS DiscMedian,\n    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY p.x) OVER () AS ContQ3,\n    PERCENTILE_DISC(0.75) WITHIN GROUP (ORDER BY p.x) OVER () AS DiscQ3\nFROM dbo.P AS p;",
   "notes": [
    "Line up the repeated pattern. Columns that do the same thing in the same layout are quick to check by eye.",
    "Choose CONT or DISC on purpose, and say why in a comment. CONT can return a value that is not in the data. DISC never does.",
    "PERCENTILE_CONT needs WITHIN GROUP and OVER. Use PARTITION BY inside OVER for one answer per group.",
    "DISTINCT here only removes the repeated rows that OVER () creates. The result is one row."
   ],
   "output": "ContMedian | DiscMedian | ContQ3 | DiscQ3\n25         | 20         | 32.5   | 30"
  },
  "qa": {
   "q": "The values are 10, 20, 30, 40. What do PERCENTILE_CONT(0.75) and PERCENTILE_DISC(0.75) return?",
   "a": "32.5 and 30. For CONT the position is 0.75 x 3 = 2.25. That is a quarter of the way from 30 to 40. For DISC the share at or below 30 is 75%, so 30 is the first value that reaches 0.75."
  },
  "build": {
   "task": "Table Visits. Write a query that returns each ward with its median wait using PERCENTILE_DISC, and also using PERCENTILE_CONT.",
   "hint": "Use OVER (PARTITION BY Ward) and DISTINCT.",
   "check": "A: 10 and 30. B: 20 and 20. C: 70 and 80 (DISC then CONT)."
  },
  "teach": "Explain in 5 sentences when you would choose DISC over CONT. Give one example.",
  "mistakes": [
   "Answered 30 for PERCENTILE_DISC(0.5) on 10, 20, 30, 40 (2026-10-12). The answer is 20.",
   "Chose CONT for 'a time a real patient spent' (2026-10-12). It needs DISC.",
   "Wrote OVER (TriageCategory) without PARTITION BY (2026-10-06)."
  ],
  "selfCheck": [
   {
    "q": "Which function can return a number that is not in the data?",
    "a": "PERCENTILE_CONT."
   },
   {
    "q": "Where does ORDER BY go?",
    "a": "Inside WITHIN GROUP, not inside OVER."
   }
  ],
  "prereqs": [],
  "assumed": [
   {
    "label": "OVER, PARTITION BY and ranking functions such as RANK and LAG",
    "lesson": "sql-window-ranking"
   },
   {
    "label": "GROUP BY with aggregates such as SUM and AVG",
    "lesson": "sql-aggregates"
   }
  ],
  "module": "M3",
  "lessonNo": "5.10",
  "num": 25
 },
 {
  "id": "sql-rollup-grouping",
  "track": "SQL",
  "title": "ROLLUP and GROUPING",
  "minutes": 40,
  "summary": "ROLLUP adds subtotal and grand total rows. GROUPING shows which rows are subtotals.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 228\" role=\"img\" aria-label=\"ROLLUP adds year subtotal rows and one grand total row above the detail rows.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m9\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tb\" x=\"0\" y=\"14\" text-anchor=\"start\" font-size=\"12\">Detail rows   GROUPING(Ward) = 0</text><rect class=\"bx\" x=\"0\" y=\"22\" width=\"120\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"60\" y=\"44\" text-anchor=\"middle\" font-size=\"12\">2024 | A | 100</text><rect class=\"bx\" x=\"130\" y=\"22\" width=\"120\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"190\" y=\"44\" text-anchor=\"middle\" font-size=\"12\">2024 | B | 200</text><rect class=\"bx\" x=\"260\" y=\"22\" width=\"120\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"320\" y=\"44\" text-anchor=\"middle\" font-size=\"12\">2025 | A | 300</text><rect class=\"bx\" x=\"390\" y=\"22\" width=\"120\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"450\" y=\"44\" text-anchor=\"middle\" font-size=\"12\">2025 | NULL | 50</text><text class=\"tx tm\" x=\"520\" y=\"74\" text-anchor=\"end\" font-size=\"11\">2025 NULL is real data</text><line class=\"ar\" x1=\"130\" y1=\"58\" x2=\"130\" y2=\"96\" marker-end=\"url(#m9)\"/><line class=\"ar\" x1=\"390\" y1=\"58\" x2=\"390\" y2=\"96\" marker-end=\"url(#m9)\"/><text class=\"tx tb\" x=\"150\" y=\"90\" text-anchor=\"start\" font-size=\"12\">Subtotals: GROUPING(Ward) = 1</text><rect class=\"bxa\" x=\"40\" y=\"104\" width=\"180\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"130\" y=\"126\" text-anchor=\"middle\" font-size=\"12\">2024 | NULL | 300</text><rect class=\"bxa\" x=\"300\" y=\"104\" width=\"180\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"390\" y=\"126\" text-anchor=\"middle\" font-size=\"12\">2025 | NULL | 350</text><line class=\"ar\" x1=\"130\" y1=\"140\" x2=\"250\" y2=\"176\" marker-end=\"url(#m9)\"/><line class=\"ar\" x1=\"390\" y1=\"140\" x2=\"270\" y2=\"176\" marker-end=\"url(#m9)\"/><rect class=\"bxg\" x=\"170\" y=\"180\" width=\"180\" height=\"34\" rx=\"8\"/><text class=\"tx\" x=\"260\" y=\"202\" text-anchor=\"middle\" font-size=\"12\">NULL | NULL | 650</text><text class=\"tx tg tb\" x=\"360\" y=\"202\" text-anchor=\"start\" font-size=\"12\">grand total</text></svg>",
   "caption": "Detail rows, then subtotals for each year, then one grand total."
  },
  "predict": {
   "q": "Table R has 4 rows: (2024, A, 100), (2024, B, 200), (2025, A, 300), (2025, NULL, 50). How many rows does GROUP BY ROLLUP (Yr, Ward) return?",
   "reveal": "7 rows. There are 4 detail rows, 2 year subtotals and 1 grand total."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A normal GROUP BY gives one row for each group.",
     "ROLLUP adds subtotal rows and a grand total to the same result.",
     "ROLLUP (a, b) makes three levels: (a, b), then (a), then ()."
    ]
   },
   {
    "h": "How it works",
    "p": [
     "Subtotal rows show NULL in the column that was rolled up.",
     "The order of columns matters. ROLLUP (Yr, Ward) gives a subtotal for each year. ROLLUP (Ward, Yr) gives a subtotal for each ward.",
     "Repeat the full expression in GROUP BY, for example YEAR(Arrived_DTTM). The alias does not exist yet.",
     "Every other column in SELECT must be inside an aggregate such as SUM."
    ]
   },
   {
    "h": "GROUPING",
    "p": [
     "A real NULL in your data looks the same as a subtotal NULL.",
     "GROUPING(column) returns 1 when the NULL is a subtotal marker. It returns 0 when the value is real, even if the value is NULL.",
     "Give GROUPING the raw column name. Do not give it an alias or an aggregate.",
     "A year subtotal and the grand total both give GROUPING(Ward) = 1. Add GROUPING(Yr) to tell them apart."
    ]
   }
  ],
  "example": {
   "title": "Subtotals with labels",
   "code": "SELECT\n    r.Yr,\n    CASE\n        WHEN GROUPING(r.Ward) = 1 THEN 'All wards'          -- a subtotal row, not real data\n        ELSE ISNULL(r.Ward, 'Unknown')                      -- a real NULL in the data\n    END AS WardLabel,\n    SUM(r.Mins) AS Total,\n    GROUPING(r.Ward) AS IsWardSubtotal\nFROM dbo.R AS r\nGROUP BY ROLLUP (r.Yr, r.Ward)\nORDER BY GROUPING(r.Yr), r.Yr, GROUPING(r.Ward), r.Ward;    -- subtotals after their detail rows",
   "notes": [
    "Use GROUPING() to tell a subtotal NULL from a real NULL. Testing 'Ward IS NULL' would mix them up.",
    "Write the labels in a CASE with one WHEN on each line. The branches are then easy to read and to change.",
    "Put GROUPING() in ORDER BY. Subtotals then follow their detail rows and the grand total is last. Without it, NULL sorts first in SQL Server.",
    "Every column in the SELECT is either in GROUP BY, or wrapped in an aggregate (SUM). A bare column is an error.",
    "The Yr column shows NULL on the grand total row. Add a label for it in a report."
   ],
   "output": "Yr   | WardLabel | Total | IsWardSubtotal\n2024 | A         | 100   | 0\n2024 | B         | 200   | 0\n2024 | All wards | 300   | 1\n2025 | Unknown   | 50    | 0\n2025 | A         | 300   | 0\n2025 | All wards | 350   | 1\nNULL | All wards | 650   | 1"
  },
  "qa": {
   "q": "In the output above, which rows have GROUPING(Ward) = 1?",
   "a": "The two year subtotals (300 and 350) and the grand total (650). The row (2025, Unknown, 50) has 0 because its NULL is real data."
  },
  "build": {
   "task": "Table R. Write a query with ROLLUP (Yr, Ward) and SUM(Mins). Add a label column: 'All wards' for subtotal rows, 'Unknown' for a real NULL, and the ward name otherwise.",
   "hint": "Use CASE WHEN GROUPING(Ward) = 1 ... and ISNULL for the real NULL.",
   "check": "You get 7 rows. Only the row (2025, Unknown, 50) is labelled Unknown."
  },
  "teach": "Explain in 5 sentences why GROUPING is needed when the data can contain NULL.",
  "mistakes": [
   "Put a bare MinstoTriage in SELECT with no SUM (2026-10-06).",
   "Wrote OVER (Triagecatgeory): a misspelt column name and a missing PARTITION BY (2026-10-06)."
  ],
  "selfCheck": [
   {
    "q": "What does GROUPING return for a subtotal row?",
    "a": "1."
   },
   {
    "q": "Does ROLLUP (Ward, Yr) give the same subtotals as ROLLUP (Yr, Ward)?",
    "a": "No. The first gives a subtotal for each ward. The second gives a subtotal for each year."
   }
  ],
  "mixed": [
   {
    "title": "A. Subtotals with clear labels",
    "task": "Show the total Mins for each year and ward. Add a subtotal for each year and one grand total. Label subtotal rows 'All wards' and 'All years'. Label a real NULL ward 'Unknown'. Sort so each subtotal sits under its year and the grand total is last.",
    "hint": "Use ROLLUP (Yr, Ward). Use GROUPING(Ward) and GROUPING(Yr) inside CASE. Sort with GROUPING() first.",
    "table": "E",
    "tableData": "Yr | Ward | Triage | Mins\n2024 | A | 1 | 10\n2024 | A | 2 | 20\n2024 | B | 1 | 30\n2024 | B | 2 | 40\n2025 | A | 1 | 50\n2025 | A | 2 | 60\n2025 | B | 1 | 70\n2025 | NULL | 2 | 80",
    "sql": "SELECT CASE WHEN GROUPING(Yr) = 1 THEN 'All years' ELSE CAST(Yr AS VARCHAR) END AS YearLabel,\n       CASE WHEN GROUPING(Ward) = 1 THEN 'All wards' ELSE COALESCE(Ward, 'Unknown') END AS WardLabel,\n       SUM(Mins) AS Total\nFROM E\nGROUP BY ROLLUP (Yr, Ward)\nORDER BY GROUPING(Yr), Yr, GROUPING(Ward), COALESCE(Ward, 'Unknown');",
    "output": "YearLabel | WardLabel | Total\n2024 | A | 30\n2024 | B | 70\n2024 | All wards | 100\n2025 | A | 110\n2025 | B | 70\n2025 | Unknown | 80\n2025 | All wards | 260\nAll years | All wards | 360",
    "rowCount": 8
   },
   {
    "title": "B. Keep only big totals",
    "task": "Use the query from task A. Keep only the rows where the total is more than 100.",
    "hint": "A filter on SUM() goes in HAVING. HAVING runs after GROUP BY and ROLLUP.",
    "table": "E",
    "tableData": "Yr | Ward | Triage | Mins\n2024 | A | 1 | 10\n2024 | A | 2 | 20\n2024 | B | 1 | 30\n2024 | B | 2 | 40\n2025 | A | 1 | 50\n2025 | A | 2 | 60\n2025 | B | 1 | 70\n2025 | NULL | 2 | 80",
    "sql": "SELECT CASE WHEN GROUPING(Yr) = 1 THEN 'All years' ELSE CAST(Yr AS VARCHAR) END AS YearLabel,\n       CASE WHEN GROUPING(Ward) = 1 THEN 'All wards' ELSE COALESCE(Ward, 'Unknown') END AS WardLabel,\n       SUM(Mins) AS Total\nFROM E\nGROUP BY ROLLUP (Yr, Ward)\nHAVING SUM(Mins) > 100\nORDER BY GROUPING(Yr), Yr, GROUPING(Ward), COALESCE(Ward, 'Unknown');",
    "output": "YearLabel | WardLabel | Total\n2025 | A | 110\n2025 | All wards | 260\nAll years | All wards | 360",
    "rowCount": 3
   },
   {
    "title": "C. Subtotals only",
    "task": "Show only the subtotal rows and the grand total. Do not show the detail rows.",
    "hint": "A detail row has GROUPING(Ward) = 0. A subtotal and the grand total have GROUPING(Ward) = 1.",
    "table": "E",
    "tableData": "Yr | Ward | Triage | Mins\n2024 | A | 1 | 10\n2024 | A | 2 | 20\n2024 | B | 1 | 30\n2024 | B | 2 | 40\n2025 | A | 1 | 50\n2025 | A | 2 | 60\n2025 | B | 1 | 70\n2025 | NULL | 2 | 80",
    "sql": "SELECT CASE WHEN GROUPING(Yr) = 1 THEN 'All years' ELSE CAST(Yr AS VARCHAR) END AS YearLabel,\n       CASE WHEN GROUPING(Ward) = 1 THEN 'All wards' ELSE COALESCE(Ward, 'Unknown') END AS WardLabel,\n       SUM(Mins) AS Total\nFROM E\nGROUP BY ROLLUP (Yr, Ward)\nHAVING GROUPING(Ward) = 1\nORDER BY GROUPING(Yr), Yr, GROUPING(Ward), COALESCE(Ward, 'Unknown');",
    "output": "YearLabel | WardLabel | Total\n2024 | All wards | 100\n2025 | All wards | 260\nAll years | All wards | 360",
    "rowCount": 3
   },
   {
    "title": "D. Percent of the grand total",
    "task": "Show each row of task A with a column PctOfAll. PctOfAll is the row total divided by the grand total, times 100, rounded to 1 decimal place.",
    "hint": "Put the ROLLUP query in a CTE and keep GROUPING(Yr) and GROUPING(Ward) as columns. The grand total row has both equal to 1. Read it with a subquery.",
    "table": "E",
    "tableData": "Yr | Ward | Triage | Mins\n2024 | A | 1 | 10\n2024 | A | 2 | 20\n2024 | B | 1 | 30\n2024 | B | 2 | 40\n2025 | A | 1 | 50\n2025 | A | 2 | 60\n2025 | B | 1 | 70\n2025 | NULL | 2 | 80",
    "sql": "WITH r AS (\n    SELECT GROUPING(Yr) AS gy, GROUPING(Ward) AS gw, Yr, Ward, SUM(Mins) AS Total\n    FROM E\n    GROUP BY ROLLUP (Yr, Ward)\n)\nSELECT CASE WHEN gy = 1 THEN 'All years' ELSE CAST(Yr AS VARCHAR) END AS YearLabel,\n       CASE WHEN gw = 1 THEN 'All wards' ELSE COALESCE(Ward, 'Unknown') END AS WardLabel,\n       Total,\n       ROUND(Total * 100.0 / (SELECT Total FROM r WHERE gy = 1 AND gw = 1), 1) AS PctOfAll\nFROM r\nORDER BY gy, Yr, gw, COALESCE(Ward, 'Unknown');",
    "output": "YearLabel | WardLabel | Total | PctOfAll\n2024 | A | 30 | 8.3\n2024 | B | 70 | 19.4\n2024 | All wards | 100 | 27.8\n2025 | A | 110 | 30.6\n2025 | B | 70 | 19.4\n2025 | Unknown | 80 | 22.2\n2025 | All wards | 260 | 72.2\nAll years | All wards | 360 | 100.0",
    "rowCount": 8
   }
  ],
  "prereqs": [],
  "assumed": [
   {
    "label": "GROUP BY with aggregates such as SUM and AVG",
    "lesson": "sql-aggregates"
   },
   {
    "label": "CASE WHEN",
    "lesson": "sql-row-functions"
   },
   {
    "label": "COALESCE, ISNULL and CAST",
    "lesson": "sql-row-functions"
   },
   {
    "label": "CTEs (WITH ... AS)",
    "lesson": "sql-ctes"
   }
  ],
  "module": "M3",
  "lessonNo": "5.11",
  "num": 26
 },
 {
  "id": "sql-correlated-vs-window",
  "track": "SQL",
  "title": "Correlated subquery or window function",
  "minutes": 40,
  "summary": "A correlated subquery runs once per outer row. A window function makes one pass.",
  "picture": {
   "svg": "<svg viewBox=\"0 0 520 266\" role=\"img\" aria-label=\"A correlated subquery runs once per outer row. A window function makes one pass.\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"m10\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"mk\" d=\"M0 0 L10 5 L0 10 z\"/></marker></defs><text class=\"tx tw tb\" x=\"0\" y=\"14\" text-anchor=\"start\">Correlated subquery</text><rect class=\"bx\" x=\"0\" y=\"28\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"28\" y=\"41\" text-anchor=\"middle\" font-size=\"10\">row 1</text><line class=\"ar\" x1=\"56\" y1=\"37\" x2=\"100\" y2=\"37\" marker-end=\"url(#m10)\"/><rect class=\"bxw\" x=\"102\" y=\"28\" width=\"130\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"167\" y=\"41\" text-anchor=\"middle\" font-size=\"10\">inner scan</text><rect class=\"bx\" x=\"0\" y=\"52\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"28\" y=\"65\" text-anchor=\"middle\" font-size=\"10\">row 2</text><line class=\"ar\" x1=\"56\" y1=\"61\" x2=\"100\" y2=\"61\" marker-end=\"url(#m10)\"/><rect class=\"bxw\" x=\"102\" y=\"52\" width=\"130\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"167\" y=\"65\" text-anchor=\"middle\" font-size=\"10\">inner scan</text><rect class=\"bx\" x=\"0\" y=\"76\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"28\" y=\"89\" text-anchor=\"middle\" font-size=\"10\">row 3</text><line class=\"ar\" x1=\"56\" y1=\"85\" x2=\"100\" y2=\"85\" marker-end=\"url(#m10)\"/><rect class=\"bxw\" x=\"102\" y=\"76\" width=\"130\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"167\" y=\"89\" text-anchor=\"middle\" font-size=\"10\">inner scan</text><rect class=\"bx\" x=\"0\" y=\"100\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"28\" y=\"113\" text-anchor=\"middle\" font-size=\"10\">row 4</text><line class=\"ar\" x1=\"56\" y1=\"109\" x2=\"100\" y2=\"109\" marker-end=\"url(#m10)\"/><rect class=\"bxw\" x=\"102\" y=\"100\" width=\"130\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"167\" y=\"113\" text-anchor=\"middle\" font-size=\"10\">inner scan</text><rect class=\"bx\" x=\"0\" y=\"124\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"28\" y=\"137\" text-anchor=\"middle\" font-size=\"10\">row 5</text><line class=\"ar\" x1=\"56\" y1=\"133\" x2=\"100\" y2=\"133\" marker-end=\"url(#m10)\"/><rect class=\"bxw\" x=\"102\" y=\"124\" width=\"130\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"167\" y=\"137\" text-anchor=\"middle\" font-size=\"10\">inner scan</text><text class=\"tx tm\" x=\"0\" y=\"158\" text-anchor=\"start\" font-size=\"12\">5 outer rows = 5 inner scans</text><text class=\"tx tg tb\" x=\"270\" y=\"14\" text-anchor=\"start\">Window function</text><rect class=\"bx\" x=\"270\" y=\"28\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"298\" y=\"41\" text-anchor=\"middle\" font-size=\"10\">row 1</text><rect class=\"bx\" x=\"270\" y=\"52\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"298\" y=\"65\" text-anchor=\"middle\" font-size=\"10\">row 2</text><rect class=\"bx\" x=\"270\" y=\"76\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"298\" y=\"89\" text-anchor=\"middle\" font-size=\"10\">row 3</text><rect class=\"bx\" x=\"270\" y=\"100\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"298\" y=\"113\" text-anchor=\"middle\" font-size=\"10\">row 4</text><rect class=\"bx\" x=\"270\" y=\"124\" width=\"56\" height=\"18\" rx=\"4\"/><text class=\"tx\" x=\"298\" y=\"137\" text-anchor=\"middle\" font-size=\"10\">row 5</text><line class=\"ar arg\" x1=\"340\" y1=\"34\" x2=\"340\" y2=\"140\" marker-end=\"url(#m10)\"/><rect class=\"bxg\" x=\"356\" y=\"64\" width=\"164\" height=\"52\" rx=\"8\"/><text class=\"tx tb\" x=\"438\" y=\"86\" text-anchor=\"middle\" font-size=\"12\">one ordered pass</text><text class=\"tx\" x=\"438\" y=\"104\" text-anchor=\"middle\" font-size=\"12\">over the data</text><text class=\"tx tm\" x=\"270\" y=\"158\" text-anchor=\"start\" font-size=\"12\">5 rows = 1 pass</text><line class=\"ln\" x1=\"0\" y1=\"176\" x2=\"520\" y2=\"176\"/><text class=\"tx tb\" x=\"0\" y=\"198\" text-anchor=\"start\" font-size=\"12\">Your case study (2,325 rows)</text><rect class=\"bxw\" x=\"0\" y=\"208\" width=\"250\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"125\" y=\"227\" text-anchor=\"middle\" font-size=\"12\">Before: 6,233,958 reads</text><text class=\"tx\" x=\"125\" y=\"244\" text-anchor=\"middle\" font-size=\"12\">61,785 ms</text><rect class=\"bxg\" x=\"270\" y=\"208\" width=\"250\" height=\"44\" rx=\"8\"/><text class=\"tx tb\" x=\"395\" y=\"227\" text-anchor=\"middle\" font-size=\"12\">After: 9,470 reads</text><text class=\"tx\" x=\"395\" y=\"244\" text-anchor=\"middle\" font-size=\"12\">16 ms</text></svg>",
   "caption": "The bottom boxes are your own measured result from Portfolio Project 1."
  },
  "predict": {
   "q": "A table has 2,325 rows. A correlated subquery refers to the outer row. How many times does SQL Server run the inner query?",
   "reveal": "Once for each outer row: 2,325 times. Your STATISTICS IO output showed Scan count 2325 on the Worktable."
  },
  "explain": [
   {
    "h": "What it is",
    "p": [
     "A correlated subquery uses a value from the outer query. SQL Server cannot calculate it one time and reuse it.",
     "It runs the inner query again for each outer row. This is called row by row processing (RBAR).",
     "The query looks like one set-based statement. It runs like a loop."
    ]
   },
   {
    "h": "The window function",
    "p": [
     "A window function calculates the same result in one ordered pass.",
     "Turn the correlated conditions into window clauses. 'Same ward' becomes PARTITION BY Ward. 'Earlier visits' becomes ORDER BY VisitID with a frame that ends at 1 PRECEDING.",
     "Both versions return NULL for the first visit of each ward. There is nothing earlier to average."
    ]
   },
   {
    "h": "Why the speed changes",
    "p": [
     "The correlated version scans the table many times. The work grows with the square of the row count.",
     "The window version reads the table once.",
     "In your case study, reads fell from 6,233,958 to 9,470. Time fell from 61,785 ms to 16 ms."
    ]
   },
   {
    "h": "A second step you identified",
    "p": [
     "A covering index on (AdmittingWard, VisitID) with WaitTimeMinutes in INCLUDE supports the window query.",
     "You could not create it because of permissions. Record it as identified, not applied."
    ]
   }
  ],
  "example": {
   "title": "Same result, two methods",
   "code": "-- Method 1: correlated subquery. It runs once for every outer row.\nSELECT\n    v.VisitID,\n    (\n        SELECT AVG(v2.WaitMins)\n        FROM dbo.V AS v2\n        WHERE v2.Ward = v.Ward\n          AND v2.VisitID < v.VisitID               -- only earlier visits in the same ward\n    ) AS AvgPrior\nFROM dbo.V AS v\nORDER BY v.VisitID;\n\n-- Method 2: window function. One pass over the data.\nSELECT\n    v.VisitID,\n    AVG(v.WaitMins) OVER (\n        PARTITION BY v.Ward\n        ORDER BY v.VisitID\n        ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING   -- everything before this row\n    ) AS AvgPrior\nFROM dbo.V AS v\nORDER BY v.VisitID;",
   "notes": [
    "Prefer the window function. It reads the table once. The correlated subquery runs again for every outer row, which is slow on large tables.",
    "Use different aliases for the inner and outer table (v2 and v). Reusing one alias is a common source of wrong results.",
    "Write the same rule in the same words in both methods. The comments name what the frame and the WHERE clause mean.",
    "Check the first rows of a 'previous rows' calculation. They have no earlier rows, so the result is NULL, not 0."
   ],
   "output": "VisitID | AvgPrior\n1       | NULL\n2       | NULL\n3       | 10\n4       | 20\n5       | 40"
  },
  "qa": {
   "q": "Rewrite this correlated subquery as a window function: (SELECT MAX(v2.WaitMins) FROM V v2 WHERE v2.Ward = v.Ward AND v2.VisitID < v.VisitID).",
   "a": "MAX(WaitMins) OVER (PARTITION BY Ward ORDER BY VisitID ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING). For table V it gives NULL, NULL, 10, 30, 40."
  },
  "build": {
   "task": "Table V. Count the earlier visits in the same ward for each visit. Write it as a correlated subquery with COUNT(*), then as a window function.",
   "hint": "Use COUNT(*) OVER with the same PARTITION BY, ORDER BY and frame.",
   "check": "Both give 0, 0, 1, 2, 1 for VisitID 1 to 5."
  },
  "teach": "Explain in 6 sentences why 2,325 rows took 62 seconds. Use the words 'once per row'.",
  "mistakes": [
   "Named LAG first when the task needed an aggregate window function (2026-09-30).",
   "Used PARTITION BY VisitID, which makes one group per row (2026-09-30)."
  ],
  "selfCheck": [
   {
    "q": "What does PARTITION BY VisitID do if VisitID is unique?",
    "a": "It makes one group per row, so the window holds one row."
   },
   {
    "q": "Which frame excludes the current row?",
    "a": "ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING."
   }
  ],
  "prereqs": [
   {
    "id": "sql-window-frames",
    "title": "Window frames and LAST_VALUE",
    "no": "5.9"
   }
  ],
  "assumed": [
   {
    "label": "a subquery inside SELECT or WHERE",
    "lesson": "sql-subqueries"
   },
   {
    "label": "OVER, PARTITION BY and ranking functions such as RANK and LAG",
    "lesson": "sql-window-ranking"
   },
   {
    "label": "GROUP BY with aggregates such as SUM and AVG",
    "lesson": "sql-aggregates"
   }
  ],
  "module": "M4",
  "lessonNo": "6.4",
  "num": 27
 }
];
