# Archive — retired anviinnovate.com subdomains

Snapshots of sites that were live on `*.anviinnovate.com` and have been removed
from AWS. Captured from their production S3 buckets immediately before deletion,
on 2026-10-06.

These are **deployed artifacts**, not build sources. For three of the four, no
source was ever committed anywhere and none could be found on disk — this
snapshot is the only remaining copy.

| Directory | Was live at | Source available elsewhere? |
|---|---|---|
| `psoriasis/` | psoriasis.anviinnovate.com | No. Content site, "Psoriasis Care & Diet Hub". |
| `faceguard/` | faceguard.anviinnovate.com | No web source. An old Android APK exists at `~/Documents/ProjectsBySunil/TVApp_Face_Recog/`. |
| `expense/` | expense.anviinnovate.com | Built from CFN stack `expense-tracker`. Local dirs `~/Documents/myExpenses` and `ExpenseReports` are not git repos. |
| `health-deployed/` | health.anviinnovate.com | Yes — the real source is committed in this repo at `health/`, `health-api/`, `docs/health-assistant/`. This is just the deployed build. |

To restore any of them: create a bucket, `aws s3 sync` the directory up, put a
CloudFront distribution and an ACM certificate in front, and add the DNS record.
