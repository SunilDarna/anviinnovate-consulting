#!/usr/bin/env python3
"""
Anvi Innovate AI Academy — 102 mandatory practice scenarios.

Every scenario is traced to a real production case study that was retrieved and
adversarially fact-checked (see ../research/ai-case-studies-v1.0.html).

Emits:  scenarios-v1.0.json   (machine-readable, feeds the academy site)
        scenarios-v1.0.html   (print-ready catalogue)

Run:    python3 build_scenarios.py
"""
import json, os, html, collections

VERSION = "1.0"
HERE = os.path.dirname(os.path.abspath(__file__))

SIZES = {
    "micro": ("Micro", "30–45 min", 0.6),
    "build": ("Build", "2–3 h", 2.0),
    "ship":  ("Ship",  "6–8 h", 7.0),
}

UNITS = [
    ("U1",  "First working AI"),
    ("U2",  "Python &amp; data for AI"),
    ("U3",  "SQL &amp; data quality"),
    ("U4",  "Classical ML"),
    ("U5",  "Model evaluation"),
    ("U6",  "Deep learning"),
    ("U7",  "Transformers &amp; embeddings"),
    ("U8",  "LLMs &amp; prompting"),
    ("U9",  "RAG"),
    ("U10", "Agents &amp; tools"),
    ("U11", "Evaluation &amp; observability"),
    ("U12", "Shipping"),
]

S = []
def s(sid, size, title, org, url, what, sit, given, done, verify, skills, matters):
    S.append(dict(id=sid, unit=sid.split("-")[0], size=size, title=title,
                  org=org, url=url, what=what, situation=sit, given=given,
                  done=done, verify=verify, skills=skills, matters=matters))

# ───────────────────────────────── U1 · First working AI ─────────────────────────────────
s("U1-M01","micro","Name the metric before you build the thing",
  "Honeycomb","https://www.honeycomb.io/blog/we-shipped-ai-product",
  "shipped an LLM query assistant in ~1 month for about $30/month in API cost — and found the real failure was discoverability, not the model",
  "You have one afternoon and a free-tier API key. Before you write any code, your lead asks a single question: how will you know next week whether this helped anyone?",
  "A 5,000-row SQLite dataset, a free-tier LLM key, and a one-page product brief with no metrics in it.",
  ["A natural-language-to-query feature that answers 10 sample questions",
   "An activation metric defined and written down BEFORE the feature was built",
   "Instrumentation that records it, and a measured baseline from the no-feature path"],
  "Harness asserts the metric definition file predates the first feature commit (git timestamps), and that the events table contains both cohorts.",
  ["problem framing","success metrics","instrumentation","free-tier LLM basics"],
  "Honeycomb's feature worked and still under-performed on the free tier — because users never noticed it. No model change fixes that, and only the metric revealed it."),

s("U1-M02","micro","The answer that contradicted the policy page",
  "Air Canada","https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
  "a support chatbot told a grieving passenger he could claim a bereavement fare retroactively; the airline's own published policy said the opposite, and a tribunal held the airline liable",
  "You are handed a 20-page policy corpus and a chatbot that answers from it. Somewhere in that corpus two policies contradict each other. Find the question that makes the bot give a confidently wrong answer.",
  "A 20-document policy corpus containing several deliberate near-miss clauses, and a working ungrounded chatbot.",
  ["At least three questions that produce a confidently wrong answer",
   "For each, the authoritative clause the answer contradicts, cited by page",
   "A one-paragraph note on which of the three would have cost real money"],
  "Hidden test replays your questions against a grounded reference implementation and asserts the answers genuinely diverge.",
  ["grounding","adversarial questioning","source of truth","harm analysis"],
  "Air Canada argued the chatbot was a separate entity responsible for its own statements. The tribunal disagreed. Anything your system says, you said."),

s("U1-B01","build","The five-stage cascade and where it loses accuracy",
  "Microsoft Research India + AI4Bharat (Jugalbandi)","https://news.microsoft.com/source/asia/features/with-help-from-next-generation-ai-indian-villagers-gain-easier-access-to-government-services/",
  "a WhatsApp bot chaining ASR → translation → LLM retrieval → translation → TTS to answer Indian-language questions about government schemes; no per-stage error budget was ever published",
  "You are rebuilding Jugalbandi at laptop scale: a citizen asks in Hindi or Telugu by voice, and gets an answer about a welfare scheme. Five models in a chain. Your job is not to build it — it is to find out which stage is losing you the most accuracy.",
  "20 scheme PDFs, 50 hand-written Hindi/Telugu queries with gold answers, faster-whisper tiny, a distilled translation checkpoint, a free-tier LLM, a free TTS.",
  ["The full five-stage cascade running end to end",
   "Per-stage accuracy measured independently, not just end to end",
   "A written error budget showing where the compounding actually happens",
   "A recommendation on which single stage to fix first, with the number to justify it"],
  "`make eval` scores each stage against its own gold set and asserts the end-to-end number is reconcilable with the per-stage numbers.",
  ["model chaining","error compounding","per-stage evaluation","Indic language handling","ASR","translation"],
  "Microsoft's own write-up concedes the models make mistakes and covers only 171 of roughly 20,000 schemes. Nobody published where in the chain the errors come from. You will."),

# ───────────────────────────────── U2 · Python & data for AI ─────────────────────────────
s("U2-M01","micro","The rows that were never there",
  "Public Health England","https://www.bbc.co.uk/news/technology-54423988",
  "roughly 16,000 COVID-19 cases went unreported because results were held in a legacy spreadsheet format that silently stops at a fixed row limit",
  "Your ingestion job reports success. Downstream counts are wrong and nobody can say why. The loader hit a hard limit and did not raise.",
  "A loader that reads three files, one of which exceeds a format limit, and a downstream count that looks plausible.",
  ["The truncation found and its exact cause named",
   "A row-count reconciliation check that fails loudly on the same input",
   "Proof the check catches it before anything downstream runs"],
  "Hidden test swaps in a differently-sized file and asserts your check still fires.",
  ["silent truncation","row reconciliation","fail loudly","file format limits"],
  "Nobody at PHE wrote a bad model. A file format quietly ate the data and every dashboard downstream looked fine."),

s("U2-M02","micro","95% per word, 44% per document",
  "Dropbox","https://dropbox.tech/machine-learning/creating-a-modern-ocr-pipeline-using-computer-vision-and-deep-learning",
  "mid-90s single-word OCR accuracy produced only about 44% document-level exact match, because of merged words, fragmented words and spurious boxes",
  "You are given an OCR system that scores 95% on individual words. Your manager wants to ship it. Measure what it actually does to a whole document.",
  "200 word-crop images with labels, 30 full documents with ground truth, and a working word-level recogniser.",
  ["Word-level accuracy and document-level exact match both measured",
   "The gap explained by failure class (merged / fragmented / spurious)",
   "A one-page recommendation on which failure class to fix first"],
  "Harness recomputes both metrics from your outputs and asserts you reported the document-level number, not just the word-level one.",
  ["metric selection","aggregation traps","error taxonomy","OCR"],
  "Dropbox shipped only after building confidence thresholds, dictionary validation and a word-reassembly stage. The 95% number was true and useless."),

s("U2-M03","micro","Header fields are easy. Line items are where it dies.",
  "Uber (TextSense)","https://www.uber.com/us/en/blog/advancing-invoice-document-processing-using-genai/",
  "a fine-tuned T5 exceeded 90% on invoice header fields but collapsed on line items, with a considerable accuracy drop from the second line onward — and fine-tuning actively induced hallucinations",
  "Extract structured data from 40 invoices. Report one accuracy number and your reviewer will accept it. Report two and you will find out the system does not work.",
  "40 invoice PDFs across 4 templates, a JSON target schema with header and line-item sections, a free-tier LLM.",
  ["Extraction to the fixed schema",
   "Header-field accuracy and line-item accuracy reported separately",
   "Line-item accuracy broken down by line position (1st, 2nd, 3rd…)"],
  "Hidden test asserts your report contains a per-position line-item breakdown and that it matches recomputed values.",
  ["structured extraction","per-field evaluation","positional degradation","JSON schemas"],
  "Uber tried rules, then RPA, then fine-tuned open models — and still ended up with a mandatory human review stage because line items would not hold."),

s("U2-M04","micro","Two hundred jobs at the top of the hour",
  "Shopify","https://shopify.engineering/lessons-learned-apache-airflow-scale",
  "over 10,000 DAGs and 150,000 task runs a day; jobs clustered on identical cron schedules until randomised, hash-seeded scheduling smoothed the load",
  "Your scheduler has 200 jobs. Half of them are on `0 * * * *`. Everything is slow on the hour and idle the rest of the time.",
  "A local Airflow with a LocalExecutor and 200 generated DAGs, half on the same cron.",
  ["The stall reproduced and measured",
   "A hash-seeded randomised schedule applied",
   "A before/after histogram of task starts across the hour"],
  "Harness parses your DAG definitions and asserts start times are deterministic per DAG but distributed across the window.",
  ["scheduling","thundering herd","load smoothing","orchestration"],
  "Shopify's fix is four lines of hashing. Finding that it was the problem took production degradation nobody could see in the DAG code."),

s("U2-M05","micro","It can read the language. It cannot see the script.",
  "Grab","https://engineering.grab.com/custom-vision-llm-at-grab",
  "LoRA fine-tuning fixed Latin scripts but still failed on Thai and Vietnamese — the diagnosis was that the vision encoder had almost no SEA-script data, while the text decoder knew the languages fine",
  "A multimodal model reads your English documents perfectly and mangles the Devanagari ones. Everyone on your team assumes the model does not know Hindi. Prove them wrong.",
  "The same 30 sentences rendered as images in Latin, Devanagari and Tamil scripts, plus the same sentences as plain text.",
  ["Accuracy measured on image input vs text input for each script",
   "Evidence isolating whether the failure is in reading or in understanding",
   "A one-paragraph conclusion naming which component is at fault"],
  "Hidden test checks you ran both the image and text arms and that your conclusion matches your own numbers.",
  ["multimodal evaluation","ablation design","encoder vs decoder","Indic scripts"],
  "Grab spent four rejected approaches before locating the fault. The diagnosis — text-fluent, visually blind — is invisible unless you ablate."),

s("U2-M06","micro","The cheaper model that cost more",
  "Instacart","https://company.instacart.com/how-its-made/scaling-catalog-attribute-extraction-with-multi-modal-llms",
  "swapping in a cheaper LLM cut cost as expected, and the same post reports a 60% accuracy drop on difficult attributes",
  "Finance wants the model bill down. You have a cheaper model available and a benchmark that says it is nearly as good. The benchmark is averaged.",
  "500 product records with attribute labels, split into easy and hard subsets you are not told about, two model options.",
  ["Both models measured on cost and on accuracy",
   "Accuracy reported split by difficulty, not averaged",
   "A recommendation with the trade stated in both directions"],
  "Harness asserts your report contains a difficulty-stratified breakdown and that the cost saving is quoted against the accuracy loss.",
  ["cost/quality trade-offs","stratified evaluation","averaging traps"],
  "The cost win was real. So was the 60% drop hiding underneath the average. Both are in the same blog post."),

s("U2-M07","micro","Rebuild it from nothing",
  "Uber","https://www.uber.com/us/en/blog/advancing-invoice-document-processing-using-genai/",
  "TextSense was designed so new document types onboard through configuration rather than new code — reproducibility was the design constraint",
  "Your index was built three weeks ago by someone who has left. Rebuild it from the raw files and get byte-identical output. If you cannot, you do not have a pipeline — you have a folder.",
  "A raw document folder, an existing built index, and a broken half-documented build script.",
  ["`make index` rebuilds from raw inputs with no manual steps",
   "Output is deterministic across two runs",
   "A checksum manifest committed alongside"],
  "Harness runs `make index` twice from a clean clone and diffs the artefacts.",
  ["reproducibility","determinism","build automation","checksums"],
  "Every case in this catalogue that recovered from a data incident could rebuild. The ones that could not had to retrain from scratch."),

s("U2-B01","build","Rebuild the words",
  "Dropbox","https://dropbox.tech/machine-learning/creating-a-modern-ocr-pipeline-using-computer-vision-and-deep-learning",
  "the fix for the 44% document accuracy was CTC confidence scoring with three-tier filtering plus a 'Wordinator' that resolved merged and fragmented word boxes",
  "You have the 95%-per-word recogniser from U2-M02 and a document accuracy in the forties. Build the layer that closes the gap.",
  "The recogniser, 30 documents with ground truth, a word list for validation.",
  ["Confidence-based three-tier filtering (accept / reject / validate against lexicon)",
   "A word-reassembly stage handling merged and fragmented boxes",
   "Document-level exact match improved, with the number before and after",
   "A per-failure-class breakdown showing which fix bought what"],
  "`make eval` recomputes document accuracy; hidden documents test generalisation beyond the visible 30.",
  ["confidence calibration","post-processing","lexicon validation","error attribution"],
  "This layer, not the neural net, is what made Dropbox's OCR shippable. It is also the part nobody puts in a tutorial."),

s("U2-B02","build","Invoices that fight back",
  "Uber (TextSense)","https://www.uber.com/us/en/blog/advancing-invoice-document-processing-using-genai/",
  "rule-based systems and RPA were tried first and failed on new vendor formats; fine-tuned open models read the page but could not map onto Uber's data patterns",
  "Fifty supplier invoices across four templates, plus a handful of skewed phone photos. Extract 15 header attributes and every line item into a fixed schema.",
  "50 PDFs (mixed born-digital and scanned), a JSON schema, pdfplumber, Tesseract, a free-tier LLM.",
  ["Born-digital and scanned paths both working, with routing between them",
   "Per-field accuracy for headers, per-position accuracy for line items",
   "A human-review queue that routes exactly the fields below your confidence threshold",
   "Cost per document measured"],
  "Hidden invoices in unseen templates test generalisation; harness asserts the review queue routes by measured confidence, not by a hardcoded list.",
  ["document AI","routing","confidence thresholds","human-in-the-loop","cost per document"],
  "Uber's system reached ~90% overall and still shipped with mandatory human review. Knowing what to send a human is the engineering."),

s("U2-B03","build","Whose job is this?",
  "Shopify","https://shopify.engineering/lessons-learned-apache-airflow-scale",
  "with DAGs deployed from many repos and generated dynamically, nobody could tell which team owned a failing job; accumulated metadata also slowed the UI and made upgrades take hours",
  "A job has been failing for eleven days. The dashboard is red. No one has fixed it because no one knows whose it is.",
  "A local Airflow with 200 DAGs from three simulated repos, no ownership metadata, and a bloated metadata database.",
  ["An enforced ownership manifest that fails CI when a DAG has no owner",
   "A metadata retention job, with the trade-off it costs you documented",
   "Measured UI response time before and after retention"],
  "Harness adds an unowned DAG and asserts CI rejects it; measures metadata table sizes before and after.",
  ["ownership","operational metadata","retention trade-offs","platform CI"],
  "Shopify's retention fix cost them the ability to run long backfills. Every operational fix buys something and sells something."),

s("U2-S01","ship","Ingest sixty documents nobody has cleaned",
  "Uber, Dropbox, Grab (composite)","https://www.uber.com/us/en/blog/advancing-invoice-document-processing-using-genai/",
  "all three cases converge on the same finding: the parsing layer, not the model, decides the ceiling of everything downstream",
  "Sixty real documents. Some are born-digital, some are phone photos, some are scanned at an angle, some are in a script your parser has never seen. Ship a pipeline that turns them into searchable, structured, version-stamped records — and a quality report that tells the truth about what failed.",
  "60 mixed-quality documents, a target schema, and no guidance on which files are the awkward ones.",
  ["Deterministic `make index` from raw files",
   "Routing between text-layer, OCR and multimodal paths based on measured signal",
   "Every record carries source, page, document version and extraction confidence",
   "A quality report naming which documents failed and why, by class",
   "Per-document cost and wall-clock measured",
   "A runbook a non-author can follow to add a new document"],
  "Hidden document set of 15 unseen files; harness asserts the quality report classifies each failure and that the confidence field correlates with actual correctness.",
  ["end-to-end ingestion","format routing","metadata design","quality reporting","reproducibility","cost measurement"],
  "This is the single highest-leverage artifact in the whole curriculum. Every RAG scenario later in U9 stands on it, and every one of them fails if this is weak."),

# ───────────────────────────────── U3 · SQL & data quality ───────────────────────────────
s("U3-M01","micro","A 40% business decline that never happened",
  "LinkedIn","https://www.linkedin.com/blog/engineering/data-management/data-sentinel-automating-data-validation",
  "in October 2018 a silent data defect made reported job views drop 40–60%; it took 5 engineers 8 days to root-cause and 11 more to fix",
  "Job views are down 47% week on week. The executive team wants to know what happened to the business. You suspect the business is fine.",
  "A 10,000-row events table with a segment whose tracking field starts returning null on a specific date.",
  ["The defect located and the affected segment named",
   "Evidence distinguishing a data defect from a real decline",
   "The check that would have caught it on day one"],
  "Harness re-injects the defect on a different date and segment and asserts your check fires within one day of onset.",
  ["data quality","segment analysis","null propagation","incident triage"],
  "The hardest part of this incident was not the fix. It was proving to the business that nothing had gone wrong commercially."),

s("U3-M02","micro","Forty-five days before anyone noticed",
  "Uber","https://www.uber.com/blog/d3-an-automated-system-to-detect-data-drifts/",
  "a fare component was missing from 10% of sessions across major US cities for 45 days before detection; automated drift detection cut time-to-detect from ~45 days to about 2",
  "A column is fine on average and broken for one city. Your aggregate dashboards are all green.",
  "120 days of synthetic daily partitions with per-city breakdown, and a defect injected in one city partway through.",
  ["Per-segment daily statistics computed (null rate, P50, distinct count)",
   "A forecast-based detector that fires on the anomaly",
   "Measured time-to-detect in days"],
  "Hidden run injects the defect on a different city and day; harness asserts detection within 3 days.",
  ["drift detection","time series forecasting","dimensional breakdown","time-to-detect"],
  "Uber's earlier approach was static thresholds. On trending seasonal data they broke constantly, and people stopped reading the alerts."),

s("U3-M03","micro","The detector nobody reads",
  "Uber","https://www.uber.com/en-HK/blog/monitoring-data-quality-at-scale/",
  "rule-based per-metric thresholds generated so much noise that investigation became untenable; the fix was aggregating to one table-level score",
  "Your monitoring fires 340 alerts a day. It is technically correct. Nobody has looked at it in a month.",
  "200 days of per-column daily statistics for a 20-column table, and an existing per-metric alerting rule set.",
  ["Alert volume measured for the current rules",
   "A table-level score replacing per-metric alerts (PCA or equivalent)",
   "Alert volume and detection recall both reported after the change"],
  "Harness injects three real defects and asserts your table-level detector catches them at materially lower alert volume.",
  ["alert fatigue","dimensionality reduction","precision vs recall in monitoring"],
  "A technically correct detector with bad alert ergonomics is a failed detector. Uber's redesign is a concession to that."),

s("U3-M04","micro","The bad data was already in the model",
  "Unity Technologies","https://www.fool.com/earnings/call-transcripts/2022/05/11/unity-software-inc-u-q1-2022-earnings-call-transcr/",
  "Unity ingested bad data from a large customer, it was baked into the trained model, and the company put the business impact at approximately $110 million for 2022",
  "One upstream source has been sending corrupted rows for three weeks. You have already retrained twice. Deleting the rows does not undelete the model.",
  "A trained classifier, its training set, and one source whose rows have a shifted label distribution.",
  ["The poisoned source identified from the data alone",
   "Offline accuracy measured on the poisoned holdout and on a clean holdout",
   "A written explanation of why the offline number looked fine"],
  "Harness retrains from your cleaned set and asserts recovery on the clean holdout.",
  ["data poisoning","train/test contamination","source-level validation","model provenance"],
  "The failure was detected commercially, not technically. By then the corruption was in the weights, and rows could not be un-learned."),

s("U3-M05","micro","Rows scanned is the only number that matters",
  "Zomato","https://www.zomato.com/blog/building-a-cost-effective-logging-platform-using-clickhouse-for-petabyte-scale/",
  "50+ TB of logs a day, 12,000 queries a day; self-hosted Elasticsearch and an S3+Spark+Trino migration were both abandoned before ClickHouse hit a P99 of 10 seconds",
  "The same query takes 40 seconds or 0.4 seconds depending on something you have not looked at yet.",
  "5 million synthetic log rows in DuckDB or clickhouse-local, and six queries of varying selectivity.",
  ["Rows scanned measured for each query",
   "A partitioning or index change applied",
   "Before/after rows scanned and wall-clock for all six"],
  "Harness runs hidden queries and asserts rows-scanned dropped without result changes.",
  ["query optimisation","partitioning","bloom filters","cost per query"],
  "Zomato reported a potential saving of more than USD 1 million. The decision variable throughout was rows scanned."),

s("U3-B01","build","A check that writes itself",
  "LinkedIn + Amazon (Deequ)","https://www.vldb.org/pvldb/vol11/p1781-schelter.pdf",
  "Amazon's constraint-suggestion engine produced two wrong constraints on a real dataset — an over-narrow range check and a spurious rule — which is why suggestions need human review",
  "Writing validation by hand for every table does not scale; LinkedIn's ad-hoc approach left most datasets unchecked. Generate the checks instead — then find out where generation gets it wrong.",
  "A 10,000-row dataset in DuckDB, a YAML check schema, and a defect injector.",
  ["A YAML-to-SQL check generator covering nulls, ranges, uniqueness and distribution",
   "Constraint suggestion from data profiling",
   "At least two suggested constraints that are wrong, identified and explained",
   "The injected defect caught"],
  "Hidden defects of three classes; harness asserts detection and asserts you documented at least two false suggestions.",
  ["data contracts","constraint generation","profiling","false positives in validation"],
  "The paper is unusually honest about its own failures. A suggestion engine you trust blindly will write you a rule that fails every Tuesday."),

s("U3-B02","build","Measure the cost before you design the warehouse",
  "Instacart","https://company.instacart.com/how-its-made/adopting-dbt-as-the-data-transformation-tool-at-instacart",
  "a dedicated warehouse per team was abandoned after they measured 20–40% additional compute cost coming purely from cold starts — found only because query tagging for cost attribution was added first",
  "You are asked to pick a warehouse topology. Two designs look equivalent on paper. One of them is 30% more expensive and you cannot tell which without instrumenting first.",
  "dbt-core with dbt-duckdb, 20 models with refs, and a simulated cold-start cost model.",
  ["20 dbt models with refs, tests and a manifest-driven DAG",
   "Query tagging and cost attribution added BEFORE the topology change",
   "Both topologies measured, with the cold-start cost isolated",
   "A recommendation supported by your own numbers"],
  "Harness parses manifest.json to verify DAG generation and asserts cost attribution exists per model.",
  ["dbt","cost attribution","instrument before optimising","DAG generation"],
  "Instacart only found the 20–40% because they had instrumented cost first. The order of operations is the lesson."),

# ───────────────────────────────── U4 · Classical ML ─────────────────────────────────────
s("U4-M01","micro","Beat the neural net with a tuned baseline",
  "Politecnico di Milano / Univ. Klagenfurt","https://arxiv.org/abs/1907.06902",
  "of 18 neural recommenders from top-tier conferences only 7 could be reproduced, and 6 of those 7 were often beaten by properly tuned simple heuristic baselines",
  "A paper reports a new architecture beating the state of the art by 12%. You have the same dataset and two hours. Tune the boring baseline properly.",
  "MovieLens-100k, an item-kNN implementation, and an undertuned neural recommender.",
  ["The kNN baseline properly tuned with a documented search",
   "Both models evaluated on the same split",
   "A statement of whether the reported gain survives"],
  "Harness re-runs both on a hidden split and asserts your tuning procedure is reproducible from your config.",
  ["baselines","hyperparameter tuning","reproducibility","publication bias"],
  "Once a weak baseline is published it becomes the baseline for the next paper. The error compounds all the way into your production stack."),

s("U4-M02","micro","The label was the bias",
  "Optum, studied by Obermeyer et al.","https://www.science.org/doi/10.1126/science.aax2342",
  "a widely used care-management algorithm was biased because it predicted healthcare cost as a proxy for illness; race was never an input, and correcting the label would have raised Black patients receiving additional help from 17.7% to 46.5%",
  "You have a model with no protected attributes, good accuracy, and a serious fairness problem. The features are fine. Look at what you are predicting.",
  "A dataset where an observed proxy (spend) is a group-biased measurement of a latent target (need).",
  ["The model trained on the proxy, evaluated against the latent truth",
   "Disparity quantified at matched risk scores",
   "The same model retrained on a corrected label, with the disparity re-measured"],
  "Harness recomputes the disparity metric from your predictions on a hidden split.",
  ["proxy labels","fairness","label design","measurement validity"],
  "No fairness metric computed against the cost label could ever have surfaced this. The bug was upstream of every metric anyone was watching."),

s("U4-M03","micro","Where the boosting stops paying",
  "Meta (Facebook)","https://quinonero.net/Publications/predicting-clicks-facebook.pdf",
  "almost all normalized-entropy improvement came from the first 500 trees; the last 1,000 bought under 0.1%, and on a smaller submodel accuracy actually regressed past 1,000 trees",
  "Your GBM improves every time you add trees. Your training time also grows every time you add trees. Find where the trade stops being worth it.",
  "A 50k-row slice of public CTR data and a gradient boosting implementation.",
  ["A tree-count sweep with the metric plotted",
   "The saturation point identified with a number",
   "Evidence of overfitting on a deliberately smaller training subset"],
  "Harness re-runs your sweep config on a hidden slice and asserts the reported saturation point is reproducible.",
  ["model capacity","diminishing returns","overfitting","normalized entropy"],
  "Meta published the exact shape of this curve. Most teams never plot it and pay for the last 1,000 trees forever."),

s("U4-M04","micro","The embedding that could not have worked",
  "Airbnb","https://arxiv.org/abs/1810.09591",
  "listing-ID embeddings gave big training-NDCG gains and none on test — a listing can be booked at most 365 times a year, so per-item data is far too sparse for the obvious approach",
  "You add per-item ID embeddings because every recommender paper does. Training NDCG jumps. Test NDCG does not move. The cause is not your code.",
  "A tabular ranking dataset with a high-cardinality item ID and a per-item interaction count distribution.",
  ["Train and test NDCG both plotted against training steps",
   "The divergence demonstrated",
   "The per-item data volume computed, and the conclusion drawn from it"],
  "Harness asserts you reported per-item interaction counts alongside the divergence.",
  ["high-cardinality features","overfitting","data sparsity","marketplace constraints"],
  "Airbnb calls this section 'Failed Models'. The root cause is physics, not modelling — no architecture fixes 365 observations a year."),

s("U4-M05","micro","Accuracy 99.9%, model useless",
  "Stripe (Radar)","https://stripe.dev/blog/how-we-built-it-stripe-radar",
  "card fraud is roughly 0.1% of transactions and decisions must be made inside the authorization path, so the model is tuned against a fixed false-positive budget rather than accuracy",
  "Your fraud model is 99.9% accurate. So is a model that predicts 'not fraud' every time. Pick the metric that distinguishes them.",
  "10,000 transactions with 0.1% positives.",
  ["A trivial always-negative baseline scored on accuracy",
   "Precision, recall and PR-AUC reported for both models",
   "An operating point chosen against a stated false-positive budget"],
  "Harness recomputes metrics at your chosen threshold on a hidden split.",
  ["class imbalance","precision/recall","operating points","business constraints"],
  "The metric that made Radar shippable was recall at a fixed 0.1% false-positive rate. Accuracy never entered the decision."),

s("U4-M06","micro","The feature importances that changed their mind",
  "Uber","https://www.uber.com/en-BE/blog/productionizing-distributed-xgboost/",
  "JVM XGBoost 0.81 and earlier computed unreliable feature importances, which teams had been using to make feature-selection decisions",
  "You drop the five least important features and your model gets better. You re-run the importance calculation with a different seed and the bottom five are different features.",
  "A tabular dataset with correlated features and a boosting implementation.",
  ["Feature importances computed across several seeds and methods",
   "The instability quantified",
   "A more defensible selection procedure applied, with its result"],
  "Harness re-runs your selection procedure and asserts it produces a stable feature set across seeds.",
  ["feature importance","correlated features","permutation importance","selection stability"],
  "Uber's teams were making real production decisions on numbers that were quietly wrong. The fix is not a better number — it is a procedure that survives re-running."),

s("U4-B01","build","'Reported' is not 'fraud'",
  "PhonePe","https://tech.phonepe.com/building-phonepes-real-time-transaction-model-to-prevent-frauds-a-journey",
  "users could report a transaction as suspicious with one tap, so a large slice of positives were ordinary commercial disputes; training on raw reports poisoned the model until a segmentation step stripped high-false-positive cohorts",
  "You have 50,000 UPI transactions and a label column called `reported`. Everyone on the team is treating it as ground truth. It is not.",
  "50,000 transactions with a noisy `reported` label, cohort attributes, and a small clean-labelled holdout.",
  ["A model trained on the raw label, scored on the clean holdout",
   "Cohort analysis identifying the high-false-positive segments",
   "A cleaned training set with those cohorts handled, and the improvement measured",
   "Extreme class imbalance handled with an explicit operating point"],
  "Hidden clean holdout; harness asserts improvement comes from label treatment and not from threshold tuning alone.",
  ["label noise","proxy labels","cohort analysis","class imbalance","UPI/fintech context"],
  "PhonePe reported a 40% reduction in consumer fraud rate. The unlock was recognising the label meant something different from what it was named."),

s("U4-B02","build","Trees that make features for a linear model",
  "Meta (Facebook)","https://quinonero.net/Publications/predicting-clicks-facebook.pdf",
  "leaf-index features from boosted trees fed into a linear model reduced normalized entropy by more than 3.4% relative — against a background where feature engineering typically moves it by a fraction of a percent",
  "Two model families, each fine on its own. The published result says composing them beats both by a margin that dwarfs anything else in the paper.",
  "A 50k-row CTR slice, a GBM, and a logistic regression.",
  ["GBM and LR baselines each measured",
   "Leaf indices extracted, one-hot encoded, fed to LR",
   "Normalized entropy reported for all three",
   "A per-weight learning-rate comparison showing why the global rate fails"],
  "Harness re-fits your pipeline on a hidden slice and asserts the composed model beats both baselines.",
  ["feature transforms","model composition","normalized entropy","online learning rates"],
  "This is a decade-old paper that still beats most first attempts at tabular CTR, and it costs nothing to run on a laptop."),

s("U4-B03","build","The long tail nobody has data for",
  "Instacart","https://company.instacart.com/tech-innovation/how-instacart-modernized-the-prediction-of-real-time-availability-for-hundreds-of-millions-of-items-while-saving-costs",
  "restricting real-time scoring to the ~1% of items that actually need it cut computation cost by approximately 80%",
  "Five thousand items, ninety days of observations, and most items have fewer than five data points. Scoring all of them in real time is affordable at your scale and would not be at Instacart's.",
  "5,000 items × 90 days of availability observations with a deliberately long tail.",
  ["A long-window frequency component and a short-window signal component built separately",
   "A rule identifying which items actually need real-time scoring",
   "Cost measured for score-everything vs score-the-1%",
   "Accuracy compared for both, especially on the tail"],
  "Hidden item set weighted toward the tail; harness asserts the selective strategy holds accuracy while cutting compute.",
  ["long-tail modelling","sparsity","selective computation","cost/accuracy trade-offs"],
  "The prior batch system was stale and expensive at once. Both problems had the same fix, and it was a routing decision rather than a modelling one."),

s("U4-S01","ship","Train before the shift, act after it",
  "Zillow (Zillow Offers)","https://www.prnewswire.com/news-releases/zillow-group-reports-third-quarter-2021-financial-results--shares-plan-to-wind-down-zillow-offers-operations-301414460.html",
  "Zillow's Q3 2021 results included a ~$304 million inventory write-down because homes were bought above the company's own subsequent estimate of resale value; Zillow Offers was wound down and about 25% of staff were laid off",
  "You have a price model with respectable error on its test set. A business rule turns each prediction into an irreversible purchase. Then the market moves. Show what happens to the balance sheet, not to the RMSE.",
  "A public house-price dataset spanning a regime change, and a buy-rule specification with a margin parameter.",
  ["A model trained strictly on the pre-shift period",
   "Error measured on pre-shift and post-shift holdouts separately",
   "A simulated buy rule acting on point predictions, with cumulative capital position tracked",
   "The error distribution — not just the mean — modelled and shown to widen",
   "A monitoring design that would have halted purchasing, with the trigger it fires on",
   "A written recommendation on what margin the business should have required"],
  "Hidden post-shift period; harness asserts your monitor fires before cumulative loss exceeds a stated threshold.",
  ["distribution shift","irreversible actions","error distributions","drift monitoring","business risk"],
  "The point predictions were not really the problem. Zillow scaled volume as if forecast error were stable, and the error band widened while the business had no hedge."),

# ───────────────────────────────── U5 · Model evaluation ─────────────────────────────────
s("U5-M01","micro","AUC 0.83 or 0.63, depending on when you look",
  "Michigan Medicine / Epic Sepsis Model","https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307",
  "external validation found AUC 0.63 against the vendor's 0.76–0.83; recomputing AUC to include scores up to 3 hours AFTER sepsis onset reproduced the vendor's number at 0.80",
  "The same model, the same data, two AUC numbers 0.20 apart. The difference is entirely in when you allow the prediction to count.",
  "A 10,000-row time-stamped patient event table with onset times.",
  ["The model scored with a strictly pre-onset prediction window",
   "The model scored again including post-onset predictions",
   "Both AUCs reported, and the gap explained in one paragraph"],
  "Harness recomputes both windows from your prediction file and asserts the gap is present and correctly attributed.",
  ["target leakage","prediction windows","temporal validation","vendor claims"],
  "This model was live at hundreds of hospitals before anyone outside the vendor checked. The flaw was in the evaluation, not the model."),

s("U5-M02","micro","Thirty-three percent sensitivity at the shipping threshold",
  "Epic Systems / University of Michigan","https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307",
  "at the recommended threshold: sensitivity 33%, positive predictive value 12%, on a 6.6% sepsis incidence — the model missed 1,709 of 2,552 cases",
  "Your AUC is defensible. Now compute what a clinician actually experiences at the threshold you plan to ship.",
  "An imbalanced tabular dataset at ~6% positive rate and a trained model.",
  ["AUC reported",
   "Sensitivity, specificity and PPV computed at the intended operating threshold",
   "Alerts per 1,000 patients and false alerts per true positive",
   "A one-line verdict on whether the business case survives"],
  "Harness recomputes all operating-point metrics from your predictions and threshold.",
  ["operating points","PPV under low prevalence","alert burden","AUC vs deployment reality"],
  "AUC 0.63 is a bad number. The number that mattered was that clinicians got eight false alerts for every real one."),

s("U5-M03","micro","The model learned which hospital took the photo",
  "Roberts et al. (Cambridge, multi-institution review)","https://arxiv.org/abs/2008.06388",
  "of 2,212 studies reviewed, none of the 61 models assessed in depth were judged of potential clinical use — with 'Frankenstein datasets' and duplicate images across splits among the named failures",
  "You will build a classifier with near-perfect accuracy in twenty minutes. It will be worthless, and you will prove it yourself.",
  "Two small public image sets from different sources, plus a mixed-source holdout.",
  ["A classifier trained on source-A-positive vs source-B-negative",
   "Near-perfect accuracy on the naive split demonstrated",
   "Accuracy on a mixed-source holdout demonstrated to collapse",
   "The mechanism named in one sentence"],
  "Harness evaluates your model on a hidden mixed-source set and asserts the collapse.",
  ["dataset construction","confounds","split design","spurious correlation"],
  "Hundreds of teams published this exact mistake during 2020 with near-perfect reported accuracy. It takes twenty minutes to reproduce and you never forget it."),

s("U5-M04","micro","The surrogate metric with a false constant",
  "Microsoft (Bing, MSN, Office Online)","https://exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf",
  "an Office Online team used clicks × an assumed constant conversion rate as a revenue surrogate; treatment showed a 64% reduction in clicks, but the constant assumption was false and the read was wrong",
  "Your A/B test shows the treatment is catastrophically worse on your surrogate metric. The surrogate contains an assumption nobody has checked since it was written.",
  "A simulated experiment log with a surrogate metric whose conversion assumption breaks in the treatment arm.",
  ["The apparent regression reproduced",
   "The broken assumption located",
   "The corrected read, with the direction of the true effect stated"],
  "Harness re-runs with a different injected assumption break and asserts you locate it.",
  ["surrogate metrics","A/B analysis","assumption auditing","experiment design"],
  "Microsoft's paper is a catalogue of results that were wrong on first read. Every one of them passed a significance test."),

s("U5-M05","micro","Every gate was green",
  "OpenAI (GPT-4o sycophancy)","https://openai.com/index/expanding-on-sycophancy/",
  "offline evals 'generally looked good' and the A/B test showed users preferred the new model — because sycophancy is exactly what short-horizon preference metrics reward; it was rolled back within about four days",
  "Your evaluation set has a blind spot. A change that scores higher on every metric you have is obviously worse on a dimension you never wrote down.",
  "A 30-prompt eval set with a deliberate blind spot, and two model variants.",
  ["Variant B shown to score higher on the existing eval",
   "Variant B shown to be worse on a held-out dimension you define",
   "Three eval items added that would have caught it"],
  "Hidden eval items test whether your additions generalise beyond the specific failure shown.",
  ["eval blind spots","preference metrics","short vs long horizon","release gates"],
  "The most valuable line in OpenAI's postmortem is that expert testers said it felt off before launch, and the green dashboard won."),

s("U5-B01","build","Better offline, no better business",
  "Booking.com","https://dl.acm.org/doi/10.1145/3292500.3330744",
  "across 23 comparisons where a new model beat the old one offline, the correlation between offline gain and business-metric gain was Pearson −0.1 (90% CI −0.45 to 0.27)",
  "Eight model variants, cleanly ranked by AUC. You are about to ship the top one. Simulate what it does to the business metric first.",
  "A 10k-row click/conversion dataset and a business-value function with a deliberately non-monotone relationship to model score.",
  ["8 model variants trained and ranked by offline metric",
   "A simulated business metric computed for each",
   "The correlation between the two rankings reported",
   "At least one of the four Booking mechanisms (saturation, segment saturation, uncanny valley, over-optimisation) demonstrated"],
  "Harness recomputes the rank correlation from your results and asserts you named the mechanism you demonstrated.",
  ["offline/online gap","business metrics","rank correlation","value saturation"],
  "Booking had roughly 150 models in production and enough discipline to publish a negative result about all of them. Most teams never measure this at all."),

s("U5-B02","build","The features were older in production",
  "DoorDash (Ads Quality)","https://arxiv.org/abs/2502.10514",
  "offline and online AUC diverged, traced to feature staleness (the online pipeline lagged 1–2 days) and cached residuals (uploads added keys without evicting stale ones)",
  "Offline AUC says +2%. Online AUC says nothing changed. Both numbers are correct.",
  "A feature table with timestamps, a training pipeline, and a simulated online store with a configurable lag and a cache that never evicts.",
  ["A point-in-time-correct training set built",
   "The skew reproduced by serving with lagged features",
   "The stale-cache failure reproduced separately",
   "Both effects quantified independently"],
  "Harness serves a hidden request set through your pipeline and asserts your reported skew matches the measured one.",
  ["training/serving skew","point-in-time correctness","feature stores","cache invalidation"],
  "Two separate mechanisms produced the same symptom. Teams that fix one and declare victory get to find the other in a month."),

s("U5-B03","build","The reward distribution moved under you",
  "Dream11","https://arxiv.org/abs/2601.14333",
  "off-the-shelf contextual bandits struggled in an environment where reward distributions shift match-to-match; the deployed hierarchical policy showed a 0.4% revenue improvement in A/B, then a further 0.5%",
  "Your bandit converges beautifully. Then the context changes — an IPL final does not behave like a Tuesday league game — and yesterday's optimal arm is today's worst.",
  "A non-stationary bandit simulator with reward distributions that shift every N rounds.",
  ["A flat contextual bandit and a fixed policy both implemented as baselines",
   "A hierarchical or adaptive variant implemented",
   "Cumulative regret plotted for all three across shifts",
   "Cold-start behaviour on a new context measured"],
  "Hidden shift schedule; harness asserts your adaptive policy beats both baselines on cumulative regret.",
  ["contextual bandits","non-stationarity","regret","cold start","exploration"],
  "Dream11's gains are fractions of a percent. At their volume that is the entire business case, and it only exists because the policy adapts."),

s("U5-S01","ship","The evaluation harness you commit before the model",
  "Booking, Epic, OpenAI, Roberts (composite)","https://dl.acm.org/doi/10.1145/3292500.3330744",
  "every evaluation failure in this unit shares one property: the threshold, the window or the metric was decided after seeing results",
  "You are handed a problem, a dataset and no model. Before you train anything, ship the harness that will decide whether the model is good — including the thresholds, the splits, and the questions it must not get wrong.",
  "A tabular dataset with a temporal dimension and a known-but-undisclosed leakage vector.",
  ["A preregistered evaluation plan committed before any model code",
   "Temporally correct splits with the leakage vector defended against",
   "Operating-point metrics, not just ranking metrics, with thresholds fixed in advance",
   "A deliberate blind-spot audit: three ways this eval could pass a bad model",
   "A simulated business-value function and the offline/online correlation reported",
   "Results reported honestly, including where your own model fails"],
  "Harness verifies the eval plan predates model commits by git timestamp, replays your splits for leakage, and scores your model on a hidden set at your preregistered threshold.",
  ["preregistration","split design","leakage defence","operating points","honest reporting"],
  "This is the artifact that separates the U5 unit from a Kaggle notebook. Fixing thresholds after seeing results is the single most common way teams fool themselves."),

# ───────────────────────────────── U6 · Deep learning ────────────────────────────────────
s("U6-M01","micro","The network that would not learn until you scaled the inputs",
  "Airbnb","https://arxiv.org/abs/1810.09591",
  "Airbnb's neural ranking work documents feature normalisation as a concrete failure and fix — unnormalised features left the network in a plateau",
  "Your loss plateaus immediately and stays there. The architecture is fine. Look at the input distributions.",
  "A tabular dataset with features on wildly different scales, and a small MLP.",
  ["The plateau reproduced with raw features",
   "Feature distributions plotted before and after transformation",
   "The paper's transforms applied and the loss curve compared"],
  "Harness trains your config on a hidden split and asserts convergence.",
  ["feature normalisation","input distributions","training dynamics","debugging"],
  "It is the most boring bug in deep learning and it cost a very good team real time. Plot your inputs first."),

s("U6-M02","micro","Twenty-one percent of usable images, rejected",
  "Google Health / Rajavithi Hospital, Thailand","https://research.google/pubs/a-human-centered-evaluation-of-a-deep-learning-system-deployed-in-clinics-for-the-detection-of-diabetic-retinopathy/",
  "a model trained on high-quality scans shipped with a hard gradability gate; in real clinics with poor lighting, more than a fifth of captured images were auto-rejected despite nurses judging them readable, with no override path",
  "Your model has a quality gate. It was calibrated on clean data. Your users work in a room with bad lighting and a queue outside the door.",
  "A small image classifier, a clean test set, and the same images degraded (blur, low light, JPEG artefacts, off-centre crop).",
  ["Rejection rate measured on clean and degraded inputs",
   "Accuracy measured on the images the gate would have rejected",
   "A recommendation on the gate, including whether a human override should exist"],
  "Harness runs a hidden degraded set and asserts you reported accuracy on rejected-but-usable inputs.",
  ["quality gates","deployment distribution","human override","training/serving distribution gap"],
  "The model exported its training distribution as an operating requirement onto rooms that could not meet it. Nurses started editing images to get them accepted."),

s("U6-M03","micro","Your laptop is the median device",
  "Meta (Facebook)","https://research.facebook.com/publications/machine-learning-at-facebook-understanding-inference-at-the-edge/",
  "on the real Android fleet the median GPU is no faster than the CPU, the compute DSP exists on about 5% of targeted SoCs, and 72% of primary CPU cores in use were designed years earlier",
  "The deployment plan says 'run it on the GPU'. Most of your users do not have a useful one. Benchmark honestly on the hardware you actually have.",
  "MobileNetV2 or a small CNN, and a quantisation toolchain.",
  ["Float32 inference latency measured on CPU",
   "Int8 quantised latency and accuracy measured",
   "The accuracy cost of quantisation reported alongside the speedup",
   "A deployment recommendation for a low-end device fleet"],
  "Harness re-runs your benchmark script and asserts both latency and accuracy are reported for both precisions.",
  ["quantisation","CPU inference","device fragmentation","benchmarking discipline"],
  "The constraint that makes this scenario awkward on an 8 GB laptop is exactly the constraint Meta is describing. You are the low-end device."),

s("U6-M04","micro","The sophisticated option that lost",
  "Pinterest","https://arxiv.org/abs/1908.01707",
  "GradNorm adaptive loss weighting — the obvious sophisticated choice — lost to simpler weighting; and converting embeddings to binary caused a significant accuracy drop under the baseline normalisation setup",
  "You have a multi-task model and two ways to weight the losses: an adaptive method with a paper behind it, and a constant you picked in five minutes. Measure both.",
  "Three small embedding heads on three small image sets, with a shared backbone.",
  ["Both weighting schemes trained and evaluated per task",
   "The comparison reported per task, not averaged",
   "A float-to-binary embedding conversion with the accuracy cost measured"],
  "Harness re-runs both configs on a hidden task split.",
  ["multi-task learning","loss weighting","binary embeddings","simple baselines"],
  "Pinterest published both dead ends. The adaptive method is more interesting to read about and lost on their data."),

s("U6-M05","micro","Three models in one step",
  "Spotify","https://engineering.atspotify.com/2023/04/large-scale-generation-of-ml-podcast-previews-at-spotify-with-google-dataflow",
  "packing several models into a single dense processing step created accelerator-memory pressure; median preview latency fell from 111.7 minutes to 3.7 after the pipeline was restructured",
  "Your pipeline loads three models into one processing step and falls over. Splitting them costs you a serialisation boundary. Measure which is worse.",
  "A local Beam DirectRunner pipeline with three small models and 500 elements.",
  ["Per-element latency and peak memory measured with all three models in one step",
   "The same measured with the models split across steps",
   "A recommendation with both numbers stated"],
  "Harness runs both topologies on a hidden element set and asserts memory was actually measured, not estimated.",
  ["pipeline topology","memory pressure","batching","latency measurement"],
  "The 30x improvement was a topology change, not a model change. It is the sort of win that never shows up in a model card."),

s("U6-B01","build","Wake word, two thresholds",
  "Apple (Hey Siri)","https://machinelearning.apple.com/research/hey-siri",
  "early iterations trained on utterances captured after a button press — the wrong acoustic conditions for far-field activation; the shipped design used a small always-on detector cascading to a larger one, with a dual-threshold 'second chance'",
  "An always-on detector must run continuously on a battery and almost never fire by accident. You cannot have both accuracy and cheapness in one model, so build two.",
  "The free Google Speech Commands dataset, CPU-trainable in minutes.",
  ["A small first-stage detector and a larger second-stage detector",
   "The cascade wired with two thresholds",
   "FAR/FRR curves plotted for the small model, the large model and the cascade",
   "Compute cost per hour of audio measured for each"],
  "Hidden audio set including deliberately near-miss utterances; harness asserts the cascade's cost/accuracy point dominates either model alone.",
  ["cascaded models","FAR/FRR trade-offs","always-on constraints","audio features"],
  "Apple's training-data mismatch is the reusable lesson: data collected under the wrong conditions is worse than less data collected under the right ones."),

s("U6-B02","build","Five thousand categories, most of them nearly empty",
  "Shopify","https://shopify.engineering/using-rich-image-text-data-categorize-products",
  "classification into a 7-level, 5,500-category taxonomy where class imbalance was the main modelling obstacle; the multimodal model raised precision by eight percent while coverage almost doubled",
  "Classify products into a deep taxonomy where the head categories have thousands of examples and the tail has three.",
  "A few thousand product records with a short text field and a thumbnail, over a hierarchical taxonomy.",
  ["A text-only baseline and an image+text model both built with frozen pretrained encoders",
   "Precision and coverage reported for both",
   "Head and tail performance reported separately",
   "Class imbalance handled explicitly, with the method stated"],
  "Hidden tail-weighted test set; harness asserts head/tail results are reported separately.",
  ["transfer learning","multimodal fusion","hierarchical classification","long-tail imbalance"],
  "The averaged number hides the taxonomy. A model that is excellent on the head and useless on the tail reads as 'good' until a merchant lists something unusual."),

s("U6-S01","ship","Ten megabytes, in a cotton field, offline",
  "Wadhwani Institute for AI (CottonAce)","https://www.kdd.org/kdd2020/accepted-papers/view/pest-management-in-cotton-farms-an-ai-system-case-study-from-the-global-sou",
  "pest-counting for Indian smallholder cotton farmers, where trap photos vary wildly by phone, light and angle, ground truth is hard to obtain, and conventional ML metrics did not map onto the agricultural decision that mattered",
  "Ship an image model that runs on a cheap Android phone with no connectivity, on photos taken by people who are not photographers, where the output is not a class label but an action recommendation.",
  "A few thousand images of small objects on textured backgrounds, with counts, deliberately varied in lighting and angle.",
  ["A counting model trained on CPU",
   "Pruned and quantised to under 10 MB, with the accuracy cost measured at each step",
   "Robustness measured across lighting and angle variation",
   "A decision layer mapping counts to a recommended action, with its own threshold",
   "Evaluation against the decision, not just against the count",
   "An offline inference path with no network dependency"],
  "Hidden image set from unseen conditions; harness asserts model size is under 10 MB and that decision-level accuracy is reported alongside count accuracy.",
  ["model compression","quantisation","robustness","decision-level evaluation","offline deployment","agritech context"],
  "The paper's honesty is the point: conventional metrics did not map to the agricultural decision. A model that counts well and advises badly has failed."),

# ───────────────────────────────── U7 · Embeddings ───────────────────────────────────────
s("U7-M01","micro","Fine at K=100, broken at K=1000",
  "Etsy","https://arxiv.org/html/2306.04833v2",
  "HNSW lost about 5% recall at K=100 but blew past 10% loss at K=1000, which was the regime Etsy actually retrieved in; they switched to a 4-bit product-quantiser index with 5x over-fetch and re-ranking",
  "Your ANN index benchmarks beautifully. Your benchmark uses K=10. Production retrieves a thousand candidates.",
  "150,000 vectors from a free sentence-transformer, an exact baseline, and an HNSW index.",
  ["Recall measured against exact search at K=10, 100 and 1000",
   "The degradation curve plotted",
   "An over-fetch-and-rerank strategy applied, with recall and latency after"],
  "Harness re-runs your config on a hidden query set at all three K values.",
  ["ANN indexes","recall@K","product quantisation","over-fetch and rerank"],
  "The index was never wrong. The benchmark was measuring a regime the product does not operate in."),

s("U7-M02","micro","Milliseconds to seconds, then a circuit breaker",
  "Uber","https://www.uber.com/en-US/blog/powering-billion-scale-vector-search-with-opensearch/",
  "when the KNN graph was not given enough allocated memory, query time degraded from milliseconds to tens of seconds because of disk I/O, and the memory circuit breaker produced collapse rather than graceful degradation",
  "Your index fits in RAM on your machine. Constrain the memory and watch the failure mode — it is not a gentle slowdown.",
  "A vector index sized to sit just under your available RAM, and a memory limiter.",
  ["Query latency measured with the index resident",
   "Latency measured with memory constrained below index size",
   "The failure characterised: is it degradation or collapse?",
   "A sizing rule derived from your measurements"],
  "Harness runs your sizing rule against a hidden index size and asserts it predicts the cliff.",
  ["memory sizing","latency cliffs","graceful degradation","capacity planning"],
  "This is easier to demonstrate on a small laptop than on a big server, which makes it one of the rare cases where the 8 GB constraint is an advantage."),

s("U7-M03","micro","Better data beat a better model by 5x",
  "DoorDash","https://careersatdoordash.com/blog/doordash-llms-to-build-content-embeddings-for-search-and-recommendations/",
  "upgrading the embedding model on raw metadata gave +5.92% Hit@5; rewriting the input representation gave +31.22%, and stacking the model upgrade on top added only about 6 more points",
  "You can spend your week upgrading the embedding model or cleaning the text you feed it. The published answer is a controlled 2×2 and it is not close.",
  "5,000 listings with messy real text, two embedding models, and a rewriting step.",
  ["All four arms of the 2×2 run (raw/clean × model A/model B)",
   "Hit@5 reported for each arm",
   "The larger lever identified with numbers"],
  "Harness re-runs all four arms on a hidden query set.",
  ["input representation","controlled ablation","embedding model selection","2x2 design"],
  "This is the single most useful ablation in the unit because it is cheap, it is decisive, and it contradicts where most teams put their week."),

s("U7-M04","micro","Semantic search that cannot find an exact term",
  "Spotify","https://engineering.atspotify.com/2022/03/introducing-natural-language-search-for-podcast-episodes",
  "dense retrieval often failed to match traditional IR on exact term matching and cost more per query, which forced it to ship as an additional retrieval source blended with Elasticsearch rather than a replacement",
  "Your semantic search is better on paraphrase and worse on exact names. Build the eval set that shows both, before someone in product finds out the hard way.",
  "A 20,000-document corpus, BM25, and a sentence-transformer.",
  ["An adversarial eval set with paraphrase queries AND exact-term queries",
   "Both retrievers scored on both query classes",
   "A recommendation on replace-vs-blend supported by the split results"],
  "Hidden queries in both classes; harness asserts you reported results split by query class.",
  ["dense vs lexical retrieval","adversarial eval sets","query classes","hybrid rationale"],
  "The averaged number said dense retrieval was better. The split number said replacing lexical search would break every query containing a proper noun."),

s("U7-M05","micro","Popular because the vector is bigger",
  "ShareChat / Moj","https://arxiv.org/abs/2312.15265",
  "roughly 2 million new items a day for 180M+ users; embedding norm growth is entangled with popularity, so a recommender can amplify already-popular content simply because those embeddings have larger norms",
  "Fresh items have unreliable embeddings and popular items have large ones. Your similarity search is quietly a popularity ranker.",
  "MovieLens-25M or a slice, with incremental embedding training and interaction counts.",
  ["L2 norm plotted against interaction count",
   "Cosine drift from the final embedding plotted against interaction count",
   "A maturity threshold derived from your own curves",
   "Retrieval results compared with and without immature items filtered"],
  "Harness recomputes norm/count correlation from your snapshots.",
  ["embedding maturity","popularity bias","cold start","norm effects"],
  "Two million new items a day means most of your catalogue is always immature. The bias is structural, not incidental."),

s("U7-B01","build","Blend, don't replace",
  "Spotify","https://engineering.atspotify.com/2022/03/introducing-natural-language-search-for-podcast-episodes",
  "Spotify shipped dense retrieval as an additional source blended with Elasticsearch, because it could not match lexical search on exact terms and cost more per query",
  "Build the hybrid your U7-M04 results argued for, and prove the blend beats either component on the combined query set.",
  "The same 20,000-document corpus, BM25, a sentence-transformer, and a query set spanning both classes.",
  ["BM25 and dense retrieval both working independently",
   "A fusion strategy implemented (RRF or weighted score normalisation)",
   "Recall and MRR reported for BM25, dense and hybrid separately",
   "Per-query-class results showing the blend does not regress either class",
   "Latency and per-query cost measured for all three"],
  "Hidden query set in both classes; harness asserts hybrid does not regress either class relative to the better single retriever.",
  ["hybrid retrieval","reciprocal rank fusion","score normalisation","per-class regression testing"],
  "The fusion is ten lines. The discipline is refusing to accept an average that hides a regression on one query class."),

s("U7-B02","build","Stage one alone makes it worse",
  "Swiggy","https://bytes.swiggy.com/improving-search-relevance-in-hyperlocal-food-delivery-using-small-language-models-ecda2acc24e6",
  "unsupervised domain adaptation alone improved Precision@1 but LOWERED overall MAP; supervised fine-tuning without domain adaptation also performed worse; only the two stages together won",
  "A two-stage training recipe where either stage on its own makes the system worse than doing nothing. Most teams stop after stage one because Precision@1 goes up.",
  "A 10,000-item food catalogue spanning multiple regional cuisines, all-MiniLM-L6-v2, and a labelled relevance set.",
  ["Baseline, stage-1-only, stage-2-only and both-stages all evaluated",
   "MAP and Precision@1 both reported for all four",
   "The stage-1-only trap demonstrated with numbers",
   "CPU query-encode latency measured against a 100ms budget"],
  "Hidden relevance set spanning cuisines; harness asserts all four arms were run and both metrics reported.",
  ["domain adaptation","fine-tuning stages","metric disagreement","CPU latency budgets"],
  "Precision@1 went up and MAP went down. A team watching one metric ships the worse system and believes they improved it."),

# ───────────────────────────────── U8 · LLMs & prompting ─────────────────────────────────
s("U8-M01","micro","Asking it whether it was lying",
  "Levidow, Levidow & Oberman (Mata v. Avianca)","https://www.law.berkeley.edu/wp-content/uploads/archive/2025/12/Mata-v-Avianca-Inc.pdf",
  "an attorney filed six fabricated cases; when opposing counsel could not find them he asked ChatGPT whether they were real, it said yes, and he swore an affidavit on that basis — $5,000 in Rule 11 sanctions followed",
  "Ask a model for citations in a niche domain. Then ask it to verify its own citations. Then check them against a real index.",
  "A free-tier model and access to a real reference index (CourtListener, Crossref or PubMed).",
  ["20 citations generated in a niche domain",
   "The model's own self-verification result recorded for each",
   "A deterministic existence check against a real index",
   "Fabrication rate reported, and self-verification accuracy reported separately"],
  "Harness re-runs your existence checker against a known set of real and fake identifiers.",
  ["hallucination","self-verification fallacy","external grounding","deterministic checks"],
  "The verification loop was closed inside the system that produced the error. That is the whole lesson and it costs nothing to reproduce."),

s("U8-M02","micro","Ten percent malformed, and re-prompting was the wrong fix",
  "LinkedIn","https://www.linkedin.com/blog/engineering/generative-ai/musings-on-building-a-generative-ai-product",
  "roughly 10% of structured outputs were syntactically or schema-wise invalid; re-prompting cost unacceptable latency, so they wrote a defensive parser and took errors to ~0.01%",
  "One call in ten comes back malformed. The obvious fix is to ask again. Measure what asking again costs you.",
  "A 4–5 field typed schema and a free-tier model.",
  ["300 calls run and every parse failure logged by class",
   "Failure classes counted (invalid syntax, missing field, wrong type, extra field)",
   "Re-prompting implemented and its added latency measured",
   "A defensive parser implemented and its residual error rate measured"],
  "Hidden prompt set; harness asserts both strategies were measured on latency and residual error.",
  ["structured output","schema validation","defensive parsing","latency budgets"],
  "This is the most honest structured-output report any large company has published, and the counter-intuitive part is that the fix is a parser, not a prompt."),

s("U8-M03","micro","One prompt doing three jobs badly",
  "Instacart","https://company.instacart.com/tech-innovation/building-the-intent-engine-how-instacart-is-revamping-query-understanding-with-llms",
  "a single generic rewrite prompt produced valid but useless output ('1% milk' → 'one percent milk') and covered only about half of search traffic; decomposing into three task-specific prompts fixed it",
  "Your rewrite prompt produces output that passes every validity check and helps nobody.",
  "300 real-shaped search queries and a free-tier model.",
  ["Arm A: one generic rewrite prompt",
   "Arm B: three task-specific prompts with distinct objectives",
   "Useful-rewrite rate measured for both, with 'useful' defined in advance",
   "Coverage of the query set reported for both"],
  "Hidden query set; harness asserts your usefulness criterion was defined before the arms were run.",
  ["prompt decomposition","task specificity","usefulness vs validity","coverage"],
  "Valid and useless is the hardest failure mode to catch, because every automated check passes."),

s("U8-M04","micro","Precompute the head of the distribution",
  "Yelp","https://engineeringblog.yelp.com/2025/02/search-query-understanding-with-LLMs.html",
  "up to 100x cost savings versus calling a complex frontier prompt directly, achieved by using a fine-tuned small model for offline precomputation of the head of the query distribution",
  "Your query log is Zipf-distributed. A small fraction of distinct queries covers most of your traffic. You are paying frontier prices for all of it.",
  "A 10,000-query log with a realistic long tail, and two model tiers.",
  ["The head/tail split measured (what % of traffic is covered by what % of distinct queries)",
   "A precompute-the-head, live-serve-the-tail strategy implemented",
   "Total cost measured before and after",
   "Quality on head and tail reported separately"],
  "Harness replays a hidden query log through your router and recomputes cost and coverage.",
  ["cost control","caching","query distributions","model tiering"],
  "This is the cheapest large cost win in the entire curriculum and it requires no model change whatsoever."),

s("U8-M05","micro","Three times the tokens for the same sentence",
  "Krutrim (Ola)","https://arxiv.org/abs/2502.09642",
  "Indic languages are roughly 1% of Common Crawl while India is about 18% of world population; general-purpose tokenizers handle Indic scripts inefficiently and code-mixing poorly",
  "The same meaning costs you three times as many tokens in Hindi as in English. That is a latency bill, a cost bill and a context-window bill at once.",
  "200 parallel sentences in English, Hindi, Tamil and Bengali, plus code-mixed examples, and several tokenizers.",
  ["Tokens-per-sentence measured per language per tokenizer",
   "Fertility ratio computed against English",
   "Cost and context-window impact projected for a realistic workload",
   "Code-mixed behaviour examined separately"],
  "Harness recomputes fertility from your tokenizer configs on a hidden parallel set.",
  ["tokenization","fertility","multilingual cost","code-mixing","Indic NLP"],
  "Every Indian-language product pays this tax. Most teams discover it when the context window overflows in production."),

s("U8-M06","micro","Asking for everything made it worse at everything",
  "Shopify","https://shopify.engineering/leveraging-multimodal-llms",
  "asking the model to predict all fields during fine-tuning led to a loss of generalisability at inference; randomised selective field extraction improved both accuracy and performance",
  "Your extraction prompt asks for all 12 fields every time. It scores worse than a prompt asking for three.",
  "200 messy product listings and a 12-field schema.",
  ["All-fields extraction accuracy measured per field",
   "Selective (randomised subset) extraction accuracy measured per field",
   "The comparison reported per field, not averaged",
   "A conclusion on output-shape overfitting"],
  "Hidden listings and hidden field subsets; harness asserts per-field reporting.",
  ["output shape","overfitting to format","selective extraction","per-field evaluation"],
  "The model was overfitting to the shape of the answer rather than to the content. It is invisible unless you vary the shape."),

s("U8-B01","build","Route the traffic, learn the prices",
  "Ramp","https://builders.ramp.com/post/thompson-sampling-model-routing",
  "over 25% cost savings with no degradation on a 6-second-deadline reranker; the motivating discovery was that their prior assumptions about tier behaviour were wrong, so any hand-written static routing table was already mispriced",
  "Four model endpoints with different cost, latency and failure characteristics. Your static routing table was written from assumptions nobody re-checked.",
  "Four mock models with configurable cost, log-normal latency distributions that deliberately overlap, and failure rates.",
  ["A static routing baseline implemented from stated assumptions",
   "Thompson sampling routing implemented",
   "Cost, deadline-hit rate and error rate measured for both",
   "Caller-error traffic excluded from the reward signal, with the reason documented",
   "Behaviour shown when a provider's latency distribution shifts mid-run"],
  "Hidden provider configuration with a mid-run shift; harness asserts the adaptive router adapts and the static one does not.",
  ["multi-armed bandits","model routing","cost optimisation","deadline constraints","reward design"],
  "The static table is not wrong because it is static. It is wrong because it encodes assumptions that were never measured."),

s("U8-B02","build","Two hundred columns will not fit",
  "Uber (QueryGPT)","https://www.uber.com/en-US/blog/query-gpt/",
  "tables with 200+ columns consumed 40–60K tokens of schema alone and broke calls against a 32K context limit; accuracy also declined as more tables were onboarded because plain similarity search returned irrelevant schemas",
  "Natural language to SQL over 40 tables. Several are 200 columns wide. Several have confusingly similar names. Your first version worked on seven tables and got worse as you added more.",
  "A SQLite warehouse with 40 tables including deliberately wide and confusingly-named ones, plus 40 questions with gold SQL.",
  ["Arm A: all schemas in one prompt — the context overflow demonstrated",
   "Arm B: a schema selection or decomposition step before generation",
   "Exact-result-match accuracy for both arms",
   "Accuracy plotted as table count grows from 7 to 40",
   "Token count per request measured for both"],
  "Hidden question set over the same warehouse; harness asserts the accuracy-vs-table-count curve was measured.",
  ["context windows","schema selection","retrieval before generation","degradation with scale"],
  "The naive version degraded as it succeeded. That is the shape of the problem — it works in the demo and fails as adoption grows."),

# ───────────────────────────────── U9 · RAG ──────────────────────────────────────────────
s("U9-M01","micro","The table that got shredded",
  "Uber (Enhanced Agentic RAG)","https://www.uber.com/us/en/blog/enhanced-agentic-rag/",
  "off-the-shelf PDF loaders destroyed tables spanning 5+ pages with nested cells — cells became isolated text disconnected from their row and column headers, so semantic search could never find the right value",
  "Load a PDF containing a multi-page nested table with a standard loader. Read the output. The numbers are all still there and none of them mean anything.",
  "3 real PDFs containing multi-page nested tables, and a standard PDF loader.",
  ["The shredded output produced and inspected",
   "Five specific questions the shredded text cannot answer, with evidence",
   "A table-aware extraction path that preserves row and column headers",
   "The same five questions answered correctly after"],
  "Hidden PDF with a different table structure; harness asserts your extraction preserves header association.",
  ["PDF parsing","table structure","chunking damage","retrieval failure modes"],
  "This is the single highest-value 40 minutes in the RAG unit. Everyone builds RAG over PDFs. Almost nobody looks at what the loader produced."),

s("U9-M02","micro","Smaller chunks won",
  "Telco-RAG","https://arxiv.org/abs/2404.15939",
  "on dense acronym-saturated technical standards, 125-token chunks beat the standard 500-token default — an inverse relationship between chunk size and accuracy, the opposite of the usual prose intuition",
  "Every tutorial says 500 tokens with overlap. On your corpus that is the worst setting you could have picked.",
  "An acronym-heavy technical corpus (RFCs or an API spec) and a 60-question eval set.",
  ["A chunk-size sweep at 100 / 250 / 500 / 1000 tokens",
   "Retrieval accuracy plotted against chunk size",
   "The best setting identified for THIS corpus",
   "A one-line explanation of why the default is wrong here"],
  "Hidden question set over the same corpus; harness asserts the sweep covered all four sizes.",
  ["chunk sizing","corpus-dependent defaults","technical corpora","parameter sweeps"],
  "There is no correct chunk size. There is a correct chunk size for your corpus, and it takes an hour to find."),

s("U9-M03","micro","It invented a policy to explain a bug",
  "Anysphere (Cursor)","https://www.theregister.com/special-features/2025/04/18/cursor_ai_support_bot_hallucinated_its_own_company_policy/1015579",
  "a race condition was logging users out; asked why, the support AI invented a subscription policy that did not exist, non-deterministically, and users cancelled subscriptions over it",
  "Give a model a knowledge base that deliberately does not cover the question being asked, then ask twenty times and count how many different answers you get.",
  "A 10-document policy KB with a deliberate coverage gap, and a free-tier model.",
  ["The same uncovered question asked 20 times at non-zero temperature",
   "The distinct answers counted and the invented facts listed",
   "An abstain path added",
   "Abstain rate and false-abstain rate both measured after"],
  "Hidden uncovered questions; harness asserts abstention fires on gaps without over-firing on covered questions.",
  ["abstention","hallucination under coverage gaps","non-determinism","support automation"],
  "The bug was a race condition. The damage was the confabulated explanation, and it was different every time it was asked."),

s("U9-M04","micro","A real citation for a claim it does not support",
  "Stanford RegLab & HAI","https://arxiv.org/abs/2405.20362",
  "audited legal RAG products hallucinated between 17% and 33% of the time despite vendor claims of elimination; the new failure mode is a fluent answer with an authoritative-looking citation that does not support the proposition",
  "Every answer has a citation. Every citation is to a real document. Some of those documents do not say what the answer claims.",
  "A 50-document corpus, a working RAG pipeline, and 30 questions including deliberate false-premise ones.",
  ["Retrieval failure and grounding failure scored as separate categories",
   "Each answer's citation checked for whether it actually supports the claim",
   "Rates reported for both failure types",
   "False-premise questions handled and scored separately"],
  "Hidden question set with false premises; harness asserts you scored grounding separately from retrieval.",
  ["grounding vs retrieval","citation verification","false premises","vendor claims"],
  "RAG reduces hallucination and does not remove it, and it introduces a failure mode plain LLMs do not have: confident wrongness wearing a citation."),

s("U9-M05","micro","Chunking destroyed the structure",
  "LinkedIn","https://arxiv.org/abs/2404.17723",
  "flat text chunking destroyed ticket field structure and the duplicate/related links between tickets, so semantically similar but operationally irrelevant fragments were retrieved; a structure-aware approach gave +77.6% MRR",
  "Your documents have structure — fields, sections, links between them. Your chunker turned them into prose soup.",
  "200 structured records (issue tickets or similar) with fields and cross-references.",
  ["Flat 500-token chunking implemented and scored",
   "Three retrieval failures traced to lost structure",
   "A structure-preserving representation built",
   "MRR reported for both"],
  "Hidden query set; harness asserts both representations were scored on the same queries.",
  ["structure-aware retrieval","chunking primitives","MRR","structured documents"],
  "Generic chunking is the wrong primitive for structured data, and structured data is most of what companies actually have."),

s("U9-M06","micro","Two thirds of the failures were the corpus",
  "Digital Green (Farmer.Chat)","https://arxiv.org/abs/2409.08916",
  "of the roughly 25% unanswered queries, 66% were knowledge-base content gaps, 23% out of scope and 11% unsupported crops — two thirds of failures were a corpus problem, not a model problem",
  "Your RAG system fails on a quarter of questions. The instinct is to improve the model. Classify the failures first and the instinct turns out to be wrong.",
  "A RAG pipeline over 100 documents, and 80 realistic user questions with known outcomes.",
  ["Every failure classified into corpus gap / out of scope / unsupported entity / model error",
   "The distribution reported",
   "The single highest-impact fix identified from the distribution",
   "An estimate of what fixing the model alone would buy"],
  "Hidden question set; harness asserts your classifier is applied consistently and that the distribution is reported.",
  ["failure taxonomy","corpus coverage","triage","effort allocation"],
  "This one number reallocates an entire roadmap. Two thirds of your failures are solved by adding documents, not by changing anything technical."),

s("U9-B01","build","Cite it or do not say it",
  "Uber (Genie)","https://www.uber.com/blog/genie-ubers-gen-ai-on-call-copilot/",
  "deployed across 154 Slack channels answering 70,000+ questions, with a self-reported helpfulness rate of 48.9% — meaning roughly half of answers were not useful, which is what drove the follow-on rebuild",
  "Build an on-call assistant over engineering docs where every claim must carry a source URL, and then measure honestly how often it actually helps.",
  "150 markdown/wiki pages, a free-tier model, and 60 realistic on-call questions.",
  ["Retrieval over the corpus with enforced source citation",
   "Answers blocked when no supporting source is retrieved",
   "A helpfulness rubric defined and applied to all 60 questions",
   "Helpfulness rate reported without rounding up",
   "The unhelpful cases classified by cause"],
  "Hidden question set; harness asserts every emitted answer carries a resolvable citation and that blocked answers are counted.",
  ["enforced citation","abstention","helpfulness measurement","honest reporting"],
  "Uber published 48.9%. Most teams would have published '70,000 questions answered' and stopped there."),

s("U9-B02","build","Retrieve the graph, not the fragment",
  "LinkedIn","https://arxiv.org/abs/2404.17723",
  "a knowledge-graph representation of structured tickets gave +77.6% MRR over the text-chunking baseline and a 28.6% reduction in median per-issue resolution time over ~6 months of live deployment",
  "Build both retrievers over the same corpus and let the numbers decide: flat chunks against a structure-preserving graph.",
  "200 structured tickets with fields, duplicate links and related links.",
  ["Retriever A: 500-token flat chunks with embeddings",
   "Retriever B: a graph over entities and their links (NetworkX or SQLite)",
   "MRR and answer-quality both measured for each",
   "The resolution-step preservation checked explicitly",
   "A cost and complexity comparison between the two"],
  "Hidden ticket queries; harness asserts both retrievers ran on identical inputs and that MRR is computed the same way for both.",
  ["graph retrieval","structure preservation","MRR","retrieval architecture comparison"],
  "The +77.6% is not a model improvement. It is the same model given a representation that did not destroy the answer."),

s("U9-B03","build","The cheap screen and the expensive one",
  "DoorDash","https://careersatdoordash.com/blog/path-to-high-quality-llm-based-dasher-support-automation/",
  "a single sophisticated LLM guardrail on every response was cost-prohibitive; a two-tier cascade — cheap similarity screen, LLM evaluation only on flagged responses — delivered a 90% reduction in hallucinations and 99% in severe compliance issues",
  "Guarding every response with a strong evaluator works and costs more than the feature earns. Build the cascade instead.",
  "A 100-article knowledge base, a RAG bot, and 60 generated responses including deliberate policy violations.",
  ["Tier 1: a cheap similarity screen between response sentences and KB content",
   "Tier 2: LLM evaluation applied only to flagged responses",
   "Hallucination and compliance-violation rates before and after",
   "Cost per response for single-tier vs two-tier measured",
   "The tier-1 threshold tuned against a stated escalation budget"],
  "Hidden responses including novel violation types; harness asserts the cascade catches them within the escalation budget.",
  ["guardrails","cascaded evaluation","cost-aware safety","threshold tuning"],
  "The design is a concession to cost, and it outperformed the expensive version on the only metric that matters — the one you can actually afford to run."),

s("U9-B04","build","Preregister the questions you might fail",
  "Stanford RegLab & HAI","https://arxiv.org/abs/2405.20362",
  "the audit's method — a preregistered question set including deliberate false premises, scoring retrieval and grounding failures separately — is what made vendor claims testable",
  "Build the evaluation before you tune anything, and include the questions you would rather not be asked.",
  "A 50-document corpus and a working RAG pipeline.",
  ["A 30-question preregistered set including unanswerable and false-premise questions",
   "Scoring rubric fixed before running anything",
   "Retrieval failure and grounding failure scored separately",
   "Results reported including your own system's worst category",
   "A statement of what accuracy claim your evidence would support"],
  "Harness verifies the question set and rubric predate tuning commits, and rescores your outputs independently.",
  ["preregistration","false premises","failure separation","defensible claims"],
  "The vendors in this audit were not lying so much as never having run this test. The method is the deliverable."),

s("U9-S01","ship","Answer a farmer's question in their language, or say you cannot",
  "Digital Green (Farmer.Chat)","https://arxiv.org/abs/2409.08916",
  "15,000+ users and 300,000+ queries across four countries answering about 75% of questions; answering natively in the source language performed worse than translate → process → back-translate, so they shipped the uglier pipeline",
  "Ship a multilingual agricultural advisory assistant over real extension documents. It must answer in the user's language, refuse when the corpus does not cover the question, and tell you honestly which of those two things it did.",
  "200 Indian agricultural extension PDFs, 100 realistic farmer questions across two languages, free-tier models.",
  ["Ingestion with source, page and document-version metadata",
   "Retrieval measured against a labelled relevance set",
   "Both pipelines built: answer-natively and translate → process → back-translate, with the comparison measured",
   "Enforced citation and an abstain path",
   "Every failure classified into the Farmer.Chat taxonomy, with the distribution published",
   "Answer rate, abstain rate and false-abstain rate all reported",
   "A corpus-gap report telling the operator which documents to add next"],
  "Hidden question set in both languages including uncovered topics; harness asserts the failure taxonomy is applied and that the corpus-gap report names real gaps.",
  ["multilingual RAG","translation pipelines","abstention","failure taxonomy","corpus coverage","Indic languages"],
  "The uglier pipeline won. Shipping the architecture that measured better rather than the one that reads better is the professional move."),

s("U9-S02","ship","Tables, policies, and a golden set that judges you",
  "Uber (Enhanced Agentic RAG)","https://www.uber.com/us/en/blog/enhanced-agentic-rag/",
  "vanilla RAG over 40+ security policy PDFs failed against a 100+ query SME golden set; the rebuild delivered a relative +27% in acceptable answers and a relative −60% in incorrect advice",
  "Forty policy documents full of multi-page nested tables, a hundred expert-written questions, and a system that currently gives wrong advice more often than anyone realised. Rebuild it and prove the improvement against the same golden set.",
  "40 policy PDFs with nested multi-page tables, a 100-question golden set with expert answers.",
  ["Table-aware ingestion preserving row and column header association",
   "A baseline vanilla-RAG measurement against the golden set, published first",
   "Agentic retrieval: query planning, multi-step lookup, self-check",
   "Acceptable-answer rate and incorrect-advice rate both reported, before and after",
   "LLM-as-judge evaluation automated, with the judge itself audited against human labels",
   "Per-query-type breakdown showing which types improved and which regressed",
   "Cost and latency per query measured for both versions"],
  "Hidden golden-set extension with unseen table structures; harness asserts the baseline was measured before the rebuild and that judge/human agreement is reported.",
  ["table-aware ingestion","agentic retrieval","golden sets","LLM-as-judge","judge auditing","regression analysis"],
  "The richest failure record in the whole catalogue. Incorrect advice dropped 60% relative — and the only reason anyone can say that is the golden set existed first."),

# ───────────────────────────────── U10 · Agents & tools ──────────────────────────────────
s("U10-M01","micro","The code freeze that was only a suggestion",
  "Replit (agent incident)","https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/",
  "an agent deleted a production database during an explicit code freeze, destroying records covering 1,200+ executives and 1,190+ companies; the freeze was a natural-language instruction, not an enforced capability boundary",
  "Tell an agent in its prompt not to touch a table. Then watch it touch the table. Then build the thing that actually stops it.",
  "A local agent with a SQLite database and a shell tool.",
  ["The prompt-level prohibition demonstrated to be unenforced",
   "A capability boundary implemented outside the prompt",
   "The same attempt shown to be blocked by the boundary",
   "The agent's own self-report compared against the actual database state"],
  "Hidden attempts including indirect paths to the same table; harness asserts the boundary holds and that self-reports are not trusted.",
  ["capability boundaries","prompt vs enforcement","destructive actions","self-report reliability"],
  "The second failure is worse than the first: the agent's account of what it had done was wrong. Never let an agent grade its own homework against production state."),

s("U10-M02","micro","Thirty tools is worse than five",
  "Grab","https://engineering.grab.com/from-firefighting-to-building",
  "exposing 30+ tools to a single agent degraded selection accuracy; the fix was splitting into specialised sub-agents with focused toolsets",
  "Give an agent five tools and it works. Give it thirty and it picks the wrong one. Find where your curve turns.",
  "A task suite of 20 tasks, and a tool library you can pad with plausible distractors.",
  ["Task success measured with 5 tools",
   "Task success measured with 15 and 30 tools",
   "The degradation curve plotted",
   "A specialisation strategy applied and re-measured"],
  "Hidden task set with a hidden distractor set; harness asserts the curve was measured at all three sizes.",
  ["tool selection","context dilution","agent specialisation","capability scoping"],
  "Every agent framework encourages you to register more tools. The published evidence says the opposite."),

s("U10-M03","micro","Solves it once, fails it eight times running",
  "Sierra (tau-bench)","https://arxiv.org/abs/2406.12045",
  "GPT-4o completed under 50% of tasks overall, and in the retail domain pass^8 fell below 25% — the same agent that solves a task once frequently cannot solve it eight times in a row",
  "Your agent passed the demo. Run the same task eight times and count how many times it passes all eight.",
  "A 5-task toy domain over a SQLite orders table with four tools.",
  ["pass@1 measured across the task set",
   "pass^k measured for k = 2, 4, 8",
   "The gap between pass@1 and pass^8 reported",
   "The dominant failure class identified (rule-following, memory, or tool arguments)"],
  "Hidden task variants; harness recomputes pass^k from your run logs.",
  ["reliability vs capability","pass^k","multi-turn agents","failure classification"],
  "Commercially, pass^8 is the number that matters. A support agent that is right 90% of the time is wrong for one customer in ten, every day."),

s("U10-M04","micro","Fifty subagents for a simple question",
  "Anthropic","https://www.anthropic.com/engineering/multi-agent-research-system",
  "the lead agent spawned 50 subagents for simple queries and kept searching after it had enough, until explicit complexity-scaling rules were written into the prompt; agents used roughly 4x the tokens of chat, and multi-agent about 15x",
  "Your orchestrator has no idea how hard the question is, so it treats everything like the hardest thing it has ever seen.",
  "A lead agent, 2–3 subagents with two tools each, and a 10-query eval set of mixed difficulty.",
  ["Tokens per query logged and the multiplier against a single-agent baseline computed",
   "Subagent count per query recorded against query difficulty",
   "Explicit complexity-scaling rules added",
   "Token cost re-measured after, with quality checked for regression"],
  "Hidden queries of mixed difficulty; harness asserts token accounting exists per run and that quality did not regress.",
  ["effort calibration","token accounting","orchestration cost","complexity scaling"],
  "Token usage explained 80% of performance variance in Anthropic's own eval. Spending is the mechanism, which is exactly why it needs a governor."),

s("U10-M05","micro","A document that gave the agent orders",
  "Microsoft 365 Copilot / Aim Security","https://arxiv.org/abs/2509.10540",
  "CVE-2025-32711 (CVSS 9.3): a single crafted email could make Copilot read internal files and exfiltrate them with no user interaction — every individual defence held and the chain still succeeded",
  "Plant a document in the corpus that contains instructions addressed to the model. Watch your assistant follow them.",
  "A small RAG assistant over a local document folder, with one planted document.",
  ["The injection demonstrated: the model following instructions from retrieved content",
   "An exfiltration path demonstrated (a rendered link or image request)",
   "A defence implemented",
   "The defence bypassed by a variant, and the bypass documented"],
  "Hidden injection variants; harness asserts at least one variant defeats your first defence.",
  ["indirect prompt injection","untrusted content","exfiltration","defence in depth"],
  "The instructive part is that every single defence Microsoft had worked as designed. They were composed, not layered, and the chain went straight through."),

s("U10-B01","build","Tool calls that hold their shape",
  "LinkedIn","https://www.linkedin.com/blog/engineering/generative-ai/musings-on-building-a-generative-ai-product",
  "tool calling failed about 10% of the time with schema-violating or invalid output; re-prompting cost too much latency, so a defensive parser took failures to ~0.01%",
  "Five tools with typed schemas. Two hundred calls. One in ten comes back in a shape your code cannot use.",
  "Five tool schemas and a free-tier model.",
  ["200 tool calls executed and every schema violation logged",
   "Violations classified by error shape",
   "A defensive parser handling the observed shapes",
   "Residual error rate and added latency both measured",
   "Behaviour on an unseen violation shape tested"],
  "Hidden prompts producing novel violation shapes; harness asserts your parser degrades safely rather than corrupting data.",
  ["tool calling","schema enforcement","defensive parsing","error taxonomy"],
  "0.01% is not a prompt achievement. It is a parser that knows the specific ways models break the shape."),

s("U10-B02","build","Retry with the error, not a better prompt",
  "Airbnb","https://airbnb.tech/infrastructure/accelerating-large-scale-test-migration-with-llms/",
  "the team's instinct was to perfect the prompt; what actually moved the number was feeding real validation errors back into a retry loop and choosing the right related files as context — 75% of ~3,500 files migrated in 4 hours, rising to 97%",
  "Thirty files need a mechanical-but-not-regex migration. You have a real test suite as an oracle. Spend your time on the loop, not the wording.",
  "30 files needing migration, and a test suite that validates each one.",
  ["A per-file state machine with real validation gates",
   "A retry loop feeding actual error output back to the model",
   "Arm A: prompt refinement only. Arm B: retry loop. Both measured.",
   "Context selection varied and its effect measured separately",
   "Completion rate and per-file attempt count reported"],
  "Hidden files requiring the same migration; harness asserts migrated files pass the real test suite.",
  ["validation loops","oracles","context selection","prompt engineering limits"],
  "Two wrong instincts documented in one post: polish the prompt, and treat context selection as secondary. Both were backwards."),

s("U10-B03","build","Six systems, ninety seconds",
  "Razorpay (Project Viveka)","https://www.zenml.io/llmops-database/ai-powered-incident-investigation-for-payment-infrastructure",
  "on-call engineers spent 20–40 minutes per incident correlating six disconnected systems; the agent reduced mean-time-to-investigate by about 80%, and as of the write-up was still running in shadow mode with no documented failure analysis",
  "Build an incident investigation agent over fixture data standing in for six systems — and then do the part Razorpay's write-up does not: characterise when it is confidently wrong.",
  "Fixture files for logs, metrics, deployments, cluster state and database health, plus 15 seeded incidents with known root causes.",
  ["An agent correlating across all six sources",
   "Root-cause accuracy measured against the known causes",
   "Time-to-investigation measured against a manual baseline",
   "Confidently-wrong cases identified and characterised",
   "A shadow-mode design that does not act, only reports"],
  "Hidden incidents including two with no determinable root cause; harness asserts the agent abstains rather than inventing one.",
  ["incident investigation","multi-source correlation","shadow deployment","confident wrongness"],
  "The write-up reports 80% MTTI reduction and no failure analysis. Your version has to answer the question theirs did not."),

s("U10-S01","ship","Text to SQL that survives forty tables",
  "Uber (QueryGPT)","https://www.uber.com/en-CA/blog/query-gpt/",
  "v1 did kNN similarity search on the raw prompt against schema samples and Uber's own verdict was that simple similarity search on the user's prompt does not return relevant results — accuracy declined as more tables were onboarded",
  "Ship a natural-language-to-SQL agent over a 40-table warehouse where similar table names, 200-column tables and ambiguous questions are all deliberately present. It must get better as tables are added, not worse.",
  "A SQLite warehouse of 40 tables including wide and confusingly-named ones, and 50 questions with gold SQL.",
  ["A v1 vanilla-similarity baseline built and measured first",
   "Intent classification and schema selection before generation",
   "Exact-result-match accuracy measured as table count grows from 7 to 40",
   "Ambiguous questions handled with clarification rather than a guess",
   "Generated SQL validated before execution, with a read-only boundary enforced outside the prompt",
   "Token cost per query measured for v1 and v2",
   "A user-facing explanation of which tables were used and why"],
  "Hidden questions over unseen table subsets; harness asserts the v1 baseline was measured, the accuracy-vs-scale curve improves, and no generated SQL can write.",
  ["schema retrieval","intent classification","agentic SQL","scale degradation","execution boundaries"],
  "The demo works at seven tables. Getting better rather than worse as the corpus grows is the entire engineering problem."),

s("U10-S02","ship","An orchestrator that knows what it costs",
  "Anthropic + Grab (composite)","https://www.anthropic.com/engineering/multi-agent-research-system",
  "Anthropic documented effort mis-calibration, duplicated subagent work and a ~15x token multiplier; Grab documented context blowup and tool overload, fixed with summarisation, RAG-based context pruning and agent specialisation",
  "Ship an orchestrator-worker agent system with a hard token budget, a tool boundary it cannot cross, and honest reporting of what every query cost.",
  "A task suite of 20 mixed-difficulty tasks, a tool library including distractors, and a free-tier model.",
  ["A lead agent delegating to specialised workers with focused toolsets",
   "Complexity-scaled effort: subagent count justified by measured task difficulty",
   "Duplicate-work detection between workers",
   "Context pruning or summarisation between hops, with its effect measured",
   "A hard token budget enforced, with graceful degradation when hit",
   "Token cost and quality both reported per task, and the multiplier against single-agent stated",
   "Capability boundaries enforced outside the prompt for any destructive tool"],
  "Hidden tasks including one designed to induce runaway delegation; harness asserts the budget holds and that the boundary cannot be talked past.",
  ["orchestration","effort calibration","context management","cost governance","capability boundaries"],
  "Multi-agent beat single-agent by 90.2% on Anthropic's eval and cost about 15x the tokens. Both halves of that sentence belong in your report."),

# ───────────────────────────────── U11 · Evaluation & observability ──────────────────────
s("U11-M01","micro","The benchmark that could not see the bug",
  "Anthropic","https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
  "standard benchmarks missed the degradation partly because the model often recovers well from isolated mistakes, so aggregate scores hid intermittent output corruption; evals also ran periodically rather than continuously",
  "Route 5% of traffic to a subtly broken configuration. Your aggregate benchmark mean will not move.",
  "A small model behind two simulated server pools with different configs, and an aggregate benchmark.",
  ["The aggregate mean shown not to move at a 5% corruption rate",
   "A detection method that does fire (per-request distribution, percentile, or segment)",
   "The minimum corruption rate your aggregate metric can detect, measured",
   "Sticky routing added to show how it concentrates impact on some users"],
  "Hidden corruption rates; harness asserts your detector fires below the aggregate's detection floor.",
  ["aggregate blindness","percentile monitoring","segment analysis","continuous vs periodic eval"],
  "Users reported it for weeks while every dashboard stayed green. Robustness in the model became invisibility in the metrics."),

s("U11-M02","micro","Audit the judge",
  "GitHub (Copilot evals)","https://github.blog/ai-and-ml/generative-ai/how-we-evaluate-models-for-github-copilot/",
  "GitHub names judge drift directly: it is a challenge to keep the evaluating LLM aligned with human reviewers and performing consistently, so the judge itself has to be routinely audited",
  "Your LLM-as-judge scores 200 answers. Nobody has checked whether it agrees with a human.",
  "200 answers, an LLM judge, and 50 human-labelled reference judgements.",
  ["Judge/human agreement measured on the labelled subset",
   "Systematic judge biases identified (length, formatting, confidence)",
   "Agreement re-measured after a judge prompt revision",
   "A recurring audit procedure specified"],
  "Hidden human labels; harness asserts agreement is reported with a confidence interval, not a point estimate.",
  ["LLM-as-judge","inter-rater agreement","evaluator drift","meta-evaluation"],
  "The evaluator is another production model that can silently regress. If you do not audit it, your entire eval is unmonitored."),

s("U11-M03","micro","Look at the histogram",
  "Booking.com","https://www.kdd.org/kdd2019/accepted-papers/view/150-successful-machine-learning-models-6-lessons-learned-at-booking.com",
  "Response Distribution Analysis — plotting the distribution of predicted probabilities — is Booking's cheap diagnostic for spotting a broken model that still scores acceptably",
  "Two models, similar AUC. One of them is broken in a way a single number cannot show you. Plot the predictions.",
  "A 10k-row tabular dataset and several trained models, one deliberately degenerate.",
  ["Predicted-probability distributions plotted for every model",
   "The degenerate model identified from its distribution alone",
   "The pathology named",
   "A distribution-based check added to your evaluation"],
  "Hidden models including a differently-degenerate one; harness asserts your check flags it.",
  ["response distribution analysis","calibration","diagnostic plots","cheap checks"],
  "It is a histogram. It costs one line of code and it catches a class of failure that AUC is structurally unable to see."),

s("U11-M04","micro","Thirty dollars a month",
  "Honeycomb","https://www.honeycomb.io/blog/we-shipped-ai-product",
  "the shipped Query Assistant cost roughly $30/month in OpenAI fees plus about $100/month per Redis node — while free-tier adoption of 39% was the actual disappointment",
  "Everyone assumes the LLM bill is the constraint. Measure it against the thing that actually limited adoption.",
  "A small NL-to-query feature with usage instrumentation, and a simulated user population.",
  ["Actual token cost per active user computed",
   "Total monthly cost projected at three adoption levels",
   "Adoption and discoverability instrumented separately from quality",
   "A written verdict on which is the real constraint"],
  "Harness recomputes cost from your token logs and asserts adoption is measured separately from quality.",
  ["cost modelling","unit economics","adoption vs quality","instrumentation"],
  "The model cost thirty dollars. The problem was that free-tier users never saw the feature. No model change would have fixed that."),

s("U11-B01","build","An eval suite that runs in CI",
  "GitHub (Copilot evals)","https://github.blog/ai-and-ml/generative-ai/how-we-evaluate-models-for-github-copilot/",
  "4,000+ offline tests in CI, ~100 containerised eval repositories, 1,000+ chat evaluation questions and daily production regression runs — plus a documented inverted-metric trap where higher latency sometimes correlated with better outcomes",
  "Build the harness that decides whether a model swap is allowed to ship, and run it automatically on every change.",
  "Five small Python repos with passing pytest suites, and a mutation script that breaks them.",
  ["A mutation-based eval: break tests, score the model on repairing them",
   "The suite running in CI with results posted per change",
   "A regression gate with thresholds fixed in advance",
   "A judge-agreement audit included in the suite",
   "At least one metric shown to be inverted or misleading, and handled"],
  "Hidden mutations of unseen classes; harness asserts the gate blocks a deliberately regressed model.",
  ["CI for ML","mutation testing","regression gates","automated evaluation"],
  "The gate is what makes the number matter. An eval you run when you remember to is not a gate."),

s("U11-B02","build","Fifty-four percent to ninety-three",
  "Swiggy (Hermes V3)","https://bytes.swiggy.com/hermes-v3-building-swiggys-conversational-ai-analyst-a41057a2279d",
  "V1 broke on niche metrics and derived business logic, had no conversational context, gave no explainability and produced inconsistent output across semantically identical prompts; accuracy went from 54% to 93% on ~100 manually tagged queries, with 'table not found' errors common enough to be a named failure class",
  "A text-to-SQL assistant that works in the demo and fails on the business's actual vocabulary. Measure it properly, then fix the top failure class.",
  "A 15-table synthetic food-delivery schema in DuckDB, and 40 natural-language questions with gold SQL.",
  ["Exact-result-match accuracy measured for a V1 baseline",
   "Failures classified, including invented tables and derived-metric misunderstanding",
   "Consistency measured: the same question asked five different ways",
   "A semantic layer or metric definitions added for derived business logic",
   "Accuracy and consistency both re-measured, with the improvement attributed to specific changes"],
  "Hidden question set including paraphrases and derived metrics; harness asserts consistency is measured across paraphrases.",
  ["text-to-SQL evaluation","failure classification","semantic layers","output consistency"],
  "Inconsistency across semantically identical prompts is the failure users notice first and evaluation sets almost never test."),

s("U11-S01","ship","Observability that would have caught all three",
  "Anthropic, GitHub, Booking (composite)","https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
  "three independent bugs went undetected because evals were periodic not continuous, aggregates hid intermittent corruption, and privacy controls limited access to the failing outputs",
  "Ship the observability layer for an LLM service: continuous evaluation, per-segment monitoring, cost tracking, and drift detection. Then have someone inject a fault and see whether you find it.",
  "A small LLM service with a request path, plus a fault injector you do not control.",
  ["Continuous evaluation running against production traffic, not on a schedule",
   "Per-segment and percentile monitoring, not only aggregate means",
   "Cost per request tracked and alertable",
   "Output-distribution drift detection with a defined baseline",
   "An audit trail sufficient to debug a complaint without needing raw user data",
   "A demonstrated detection of an injected fault, with time-to-detect measured",
   "A written statement of the smallest fault your system cannot detect"],
  "Harness injects faults of three classes at rates from 20% down to 1% and measures your detection floor and time-to-detect.",
  ["continuous evaluation","segment monitoring","drift detection","cost observability","detection floors"],
  "The last requirement is the one that matters. Every monitoring system has a floor below which it is blind, and most teams have never measured theirs."),

# ───────────────────────────────── U12 · Shipping ────────────────────────────────────────
s("U12-M01","micro","Latency picked the architecture",
  "Uber (DeepETA)","https://www.uber.com/blog/deepeta-how-uber-predicts-arrival-times/",
  "seven architectures were evaluated; the standard Transformer was the most accurate and was rejected because it could not meet the serving latency budget, so a linear-attention variant shipped",
  "Three models, ranked by accuracy. Now rank them again under a hard p99 latency budget and watch the order change.",
  "A 50k-row tabular regression task and a stated p99 budget.",
  ["Three models of different capacity trained",
   "Accuracy and p99 latency measured for each on CPU",
   "The accuracy/latency frontier plotted",
   "The model chosen under the budget, with the accuracy sacrificed stated"],
  "Harness enforces the p99 budget on a hidden request set and asserts your chosen model meets it.",
  ["latency budgets","accuracy/latency frontiers","serving constraints","architecture selection"],
  "The winning architecture was picked on a constraint, not a leaderboard. That is what production model selection actually looks like."),

s("U12-M02","micro","Cache the prefix",
  "Character.AI","https://blog.character.ai/optimizing-ai-inference-at-character-ai-2/",
  "over 20,000 queries per second with an average of 180 messages of history; a 95% cache hit rate between conversation turns and a >20x KV cache reduction contributed to a 33x serving cost reduction since late 2022",
  "Every turn of a conversation re-processes the entire history. Most of that work is identical to the last turn.",
  "A local model, a chatbot loop, and 50 multi-turn conversations.",
  ["Per-turn latency and compute measured without caching",
   "Prefix hashing and an LRU cache implemented",
   "Cache hit rate measured across turns",
   "Latency and cost measured after, with the saving attributed"],
  "Hidden conversation set with varying prefix overlap; harness asserts hit rate is measured, not assumed.",
  ["prefix caching","KV cache","conversational serving","cost per turn"],
  "A 95% hit rate is not an optimisation detail. At their volume it is the difference between the product existing and not."),

s("U12-M03","micro","The concurrency curve",
  "Meesho (BharatMLStack)","https://meesho.github.io/BharatMLStack/blog/",
  "Meesho serves price-sensitive users on low-end devices and rebuilt its stack around cost per inference, replacing Cassandra, Redis and Java services after each failed on latency, skew or memory at scale",
  "Throughput and latency trade against each other, and the curve has a knee. Find yours before a sale event does.",
  "A local model server or mock service, and a load generator.",
  ["Latency percentiles measured across a concurrency sweep",
   "The knee of the curve identified with a number",
   "Throughput at the knee reported",
   "A capacity recommendation with the assumption stated"],
  "Harness re-runs your sweep and asserts p50, p95 and p99 were all reported, not just the mean.",
  ["load testing","concurrency","latency percentiles","capacity planning"],
  "Meesho hit 1M QPS during a sale event. The number that let them plan for it was this curve, measured beforehand."),

s("U12-M04","micro","The gate that overrode the humans",
  "OpenAI","https://openai.com/index/expanding-on-sycophancy/",
  "expert human testers reported the model behaviour felt slightly off before launch, and that qualitative signal was overridden by green quantitative gates; the release was rolled back within about four days",
  "You have a release checklist. Every quantitative gate is green. One human tester says something feels wrong. Design the process that does not ignore them.",
  "A release checklist, two model variants where B scores higher and behaves worse, and three tester reports.",
  ["The release decision reproduced as the checklist currently specifies",
   "The qualitative signal shown to be correct",
   "A revised gate giving qualitative reports blocking power, with the escalation path defined",
   "The revised gate applied to a second scenario to check it does not block everything"],
  "Hidden scenario pair; harness asserts your revised gate blocks the bad release without blocking a good one.",
  ["release gates","qualitative signals","process design","false-block rates"],
  "The dashboard was not wrong. It was measuring the wrong thing, and the process gave it authority over the people who noticed."),

s("U12-B01","build","Every defence held and the chain went through",
  "Microsoft 365 Copilot / Aim Security","https://arxiv.org/abs/2509.10540",
  "the XPIA classifier was evaded by addressing instructions to a human reader, link redaction was bypassed with reference-style Markdown, and CSP was defeated by routing through an already-allowlisted first-party proxy",
  "Build the attack, then build the defences, then break your own defences. The lesson is not any single control — it is what happens when controls are composed instead of layered.",
  "A small RAG assistant over a local 'email' folder, and a free-tier or local model.",
  ["The zero-click injection and exfiltration chain reproduced end to end",
   "An injection classifier implemented, then evaded, with the evasion documented",
   "Output link redaction implemented, then bypassed",
   "An egress allowlist implemented, then bypassed via an allowlisted path",
   "A layered design proposed where breaking one control does not complete the chain",
   "The residual risk stated plainly"],
  "Hidden injection variants across all three bypass classes; harness asserts your layered design blocks the full chain even when one control fails.",
  ["prompt injection","exfiltration","defence in depth","control composition","threat modelling"],
  "CVSS 9.3, zero-click, and every control worked exactly as designed. Composition is the vulnerability."),

s("U12-B02","build","Four formats, eight sites, no admin rights",
  "Qure.ai + PATH (Nagpur TB screening)","https://journals.plos.org/digitalhealth/article?id=10.1371%2Fjournal.pdig.0000404",
  "lab owners refused admin rights forcing a two-system architecture in 6 of 8 labs; several X-ray machines silently saved images in non-DICOM formats the model could not read — almost none of the deployment failures were about the model",
  "Your model works. Now deploy it to eight sites you do not control, where the file formats vary silently and you cannot install anything.",
  "A working image classifier, and site fixtures producing DICOM plus three non-DICOM variants, two of them silently malformed.",
  ["An ingestion path handling all four formats, failing loudly on the malformed ones",
   "A no-admin-rights deployment path designed and documented",
   "Offline operation with deferred sync",
   "A per-site health check the operator can run without you",
   "Every failure mode from the paper mapped to a control in your design"],
  "Hidden site fixture with a fifth unexpected format; harness asserts it fails loudly rather than silently producing wrong output.",
  ["deployment constraints","format handling","offline operation","field operability","failing loudly"],
  "The most instructive deployment failure list in the catalogue, and almost none of it is about machine learning."),

s("U12-B03","build","Two versions of the same policy",
  "Air Canada (Moffatt v. Air Canada)","https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
  "the tribunal held that the chatbot is still just part of Air Canada's website and the airline is responsible for all information on it, whether from a static page or a chatbot",
  "Your corpus contains a current policy and a superseded one that contradicts it. Your bot is confidently citing the wrong one.",
  "A policy corpus containing two versions of the same policy with dates, and a working RAG bot.",
  ["The bot demonstrated answering from the stale version",
   "Version and effective-date metadata added to every chunk",
   "Version-aware retrieval preferring current policy",
   "Answers surfacing the effective date to the user",
   "A superseded-content check that fails ingestion when two active versions conflict",
   "A regression test covering all contradiction pairs"],
  "Hidden contradiction pairs including one where the newer document is not the correct one; harness asserts your rule handles it or escalates.",
  ["version awareness","temporal metadata","content governance","liability"],
  "The correct information existed on the same website. That defence failed in a tribunal, and it will fail with your users too."),

s("U12-S01","ship","Migrate thirty files you did not write",
  "Airbnb","https://airbnb.tech/infrastructure/accelerating-large-scale-test-migration-with-llms/",
  "75% of ~3,500 files migrated in the first 4-hour run, rising to 97% after a sample/tune/sweep loop, with the last 3% taking one engineer a further period by hand",
  "Ship an LLM-driven migration over a real codebase with a real test suite as the oracle. It must be safe to run unattended, and it must know when to give up.",
  "A repo of 30 files needing a mechanical-but-not-regex migration, with a passing test suite.",
  ["A per-file state machine with real validation gates",
   "A retry loop feeding actual error output back, with a bounded attempt count",
   "A sample/tune/sweep loop measured across iterations",
   "Completion rate reported per iteration",
   "Files that cannot be migrated flagged rather than silently corrupted",
   "Every migrated file passing the real test suite, verified in CI",
   "Token cost per migrated file measured"],
  "Hidden files including two that cannot be migrated correctly; harness asserts they are flagged, not corrupted.",
  ["migration automation","validation oracles","bounded retries","knowing when to stop","CI verification"],
  "The 3% it could not do is the part that matters. A migration tool that silently corrupts the hard cases is worse than none."),

s("U12-S02","ship","Serve it under a budget you did not choose",
  "Character.AI + Meesho (composite)","https://blog.character.ai/optimizing-ai-inference-at-character-ai-2/",
  "Character.AI reports a 95% inter-turn cache hit rate and a 33x serving cost reduction; Meesho rebuilt its stack around cost per inference for low-end-device users",
  "You are handed a hard p99 latency budget and a hard cost-per-query cap. Neither is negotiable. Ship a service that meets both and prove it under load.",
  "A local model, a service skeleton, a load generator, and stated p99 and cost limits.",
  ["The service meeting both constraints under sustained load",
   "Prefix caching implemented with hit rate measured",
   "A concurrency sweep with the operating point justified",
   "Cost per query measured, not estimated, with the token accounting shown",
   "Graceful degradation when the budget is hit, rather than failure",
   "A capacity plan stating what breaks first as load doubles",
   "Load test results committed as a reproducible artifact"],
  "Harness runs a hidden load profile including a burst and asserts both constraints hold and degradation is graceful.",
  ["latency budgets","cost caps","caching","load testing","graceful degradation","capacity planning"],
  "Both constraints at once is the realistic case. Meeting either one alone is an exercise; meeting both is the job."),

s("U12-S03","ship","Ship it, break it, roll it back",
  "OpenAI, Anthropic, Cursor (composite)","https://openai.com/index/expanding-on-sycophancy/",
  "OpenAI rolled back within about four days after every gate passed; Anthropic's three bugs went undetected because evals were periodic; Cursor's support bot invented a policy and users cancelled over it",
  "The final artifact. Take any system you have built in this unit and ship it properly: eval-gated CI, monitoring that would catch a 2% regression, a rollback you have actually executed, and an incident you have actually handled.",
  "Any prior scenario artifact of your choosing, plus a fault injector operated by someone else.",
  ["Deployed and reachable, inside a stated cost cap",
   "CI eval gate that blocks a deliberately regressed version",
   "Continuous monitoring with a measured detection floor",
   "A rollback procedure executed for real, with time-to-rollback measured",
   "An injected incident handled in the correct order: detect, communicate, mitigate, diagnose, fix, verify",
   "A blameless postmortem with two concrete prevention actions",
   "An abstain path and enforced citations wherever the system makes claims",
   "A runbook another person can follow without asking you anything"],
  "Harness injects a regression through CI, a runtime fault in production, and a novel question class; asserts the gate blocks, the monitor fires, and the rollback restores service within your stated objective.",
  ["release gates","monitoring","rollback","incident response","postmortems","runbooks"],
  "Everything in the preceding 101 scenarios is a component. This is the one where they have to work together while something is going wrong."),

# ═══════════════════════════════════ generation ═══════════════════════════════════
def esc(x): return html.escape(str(x), quote=False)

def main():
    assert len(S) == 102, f"expected 102 scenarios, found {len(S)}"
    ids = [x["id"] for x in S]
    assert len(set(ids)) == 102, "duplicate scenario ids"
    by_size = collections.Counter(x["size"] for x in S)
    assert by_size["micro"] == 60 and by_size["build"] == 30 and by_size["ship"] == 12, by_size

    hours = round(sum(SIZES[x["size"]][2] for x in S))
    by_unit = collections.Counter(x["unit"] for x in S)
    orgs = sorted({x["org"] for x in S})

    meta = dict(version=VERSION, total=len(S), hours=hours,
                bySize=dict(by_size), byUnit=dict(by_unit), organisations=len(orgs))
    json.dump({"meta": meta, "units": [{"id": u, "name": n} for u, n in UNITS], "scenarios": S},
              open(os.path.join(HERE, f"scenarios-v{VERSION}.json"), "w", encoding="utf-8"),
              indent=1, ensure_ascii=False)

    # ── HTML ──
    P = []
    a = P.append
    a(f"""<!doctype html><html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>102 Practice Scenarios v{VERSION} — Anvi Innovate AI Academy</title><style>
:root{{--ink:#0B1F3A;--accent:#2563EB;--surface:#f8fafc;--card:#fff;--text:#0f172a;--muted:#475569;
--border:#e2e8f0;--ok:#15803d;--warn:#b45309;--micro:#0891b2;--build:#2563EB;--ship:#7c3aed;
--shadow:0 1px 3px rgba(15,23,42,.05),0 8px 24px rgba(15,23,42,.05);--radius:12px}}
*{{box-sizing:border-box}}
body{{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
background:var(--surface);color:var(--text);line-height:1.6;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
main{{max-width:1180px;margin:0 auto;padding:44px 24px 90px}}
h1,h2,h3,h4{{color:var(--ink);line-height:1.22;letter-spacing:-.02em}}
h1{{font-size:2.3rem;margin:.1em 0 .2em}}
h2{{font-size:1.5rem;margin:0 0 .35em;padding-bottom:8px;border-bottom:2px solid var(--border)}}
section{{margin-top:50px}} p{{max-width:88ch}} a{{color:var(--accent)}}
.hero{{background:radial-gradient(1100px 420px at 15% -25%,#1e40af 0%,#0B1F3A 62%);color:#fff;
border-radius:20px;padding:40px 34px;box-shadow:var(--shadow)}}
.hero h1{{color:#fff}} .hero p{{color:#c7d2fe;max-width:78ch;font-size:1.05rem}}
.pill{{display:inline-block;padding:3px 11px;border-radius:999px;background:#eff6ff;color:var(--accent);
font-size:12px;font-weight:600;margin:0 4px 4px 0}}
.hero .pill{{background:rgba(255,255,255,.13);color:#c7d2fe}}
.card{{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow)}}
.grid{{display:grid;gap:16px}} .g4{{grid-template-columns:repeat(4,1fr)}} .g3{{grid-template-columns:repeat(3,1fr)}}
@media(max-width:900px){{.g4,.g3{{grid-template-columns:1fr 1fr}}}}
@media(max-width:640px){{.g4,.g3{{grid-template-columns:1fr}}}}
.muted{{color:var(--muted)}}
.tw{{overflow-x:auto;border:1px solid var(--border);border-radius:var(--radius);background:var(--card);
box-shadow:var(--shadow);margin-top:14px}}
table{{border-collapse:collapse;width:100%;font-size:13.4px;min-width:560px}}
th,td{{text-align:left;padding:9px 12px;border-bottom:1px solid var(--border);vertical-align:top}}
thead th{{background:#f1f5f9;font-weight:700;color:var(--ink)}}
tbody tr:last-child td{{border-bottom:none}} tbody tr:nth-child(even){{background:#fbfdff}}
code{{background:#f1f5f9;padding:1px 6px;border-radius:5px;font-size:12.4px;
font-family:ui-monospace,SFMono-Regular,Menlo,monospace}}
.note{{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;font-size:13.6px;color:#1e3a8a;margin-top:14px}}
.warnbox{{background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:13px 16px;font-size:13.6px;color:#713f12;margin-top:14px}}
.okbox{{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:13px 16px;font-size:13.6px;color:#14532d;margin-top:14px}}
ul.tight{{margin:7px 0;padding-left:21px}} ul.tight li{{margin:4px 0}}
.sc{{background:var(--card);border:1px solid var(--border);border-left:4px solid var(--border);
border-radius:var(--radius);padding:18px 20px;margin-top:16px;box-shadow:var(--shadow);break-inside:avoid}}
.sc.micro{{border-left-color:var(--micro)}} .sc.build{{border-left-color:var(--build)}} .sc.ship{{border-left-color:var(--ship)}}
.sc h3{{margin:6px 0 2px;font-size:1.12rem}}
.sid{{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;font-weight:700;color:var(--muted)}}
.tag{{display:inline-block;font-size:11px;font-weight:700;padding:2px 8px;border-radius:5px;
letter-spacing:.03em;text-transform:uppercase;margin-left:8px}}
.tag.micro{{background:#ecfeff;color:#155e75}} .tag.build{{background:#eff6ff;color:#1e40af}} .tag.ship{{background:#f5f3ff;color:#5b21b6}}
.prov{{background:#fffbeb;border:1px solid #fde68a;border-radius:9px;padding:10px 13px;font-size:12.8px;color:#713f12;margin:11px 0}}
.prov b{{color:#78350f}}
.lbl{{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);margin-top:12px;display:block}}
.chip{{display:inline-block;background:#f1f5f9;color:#334155;font-size:11.5px;font-weight:500;padding:2px 9px;border-radius:6px;margin:3px 3px 0 0}}
.printbtn{{position:fixed;right:20px;bottom:20px;background:var(--accent);color:#fff;border:none;
padding:12px 20px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer;
box-shadow:0 8px 24px rgba(37,99,235,.35);z-index:99}}
footer{{margin-top:60px;padding-top:22px;border-top:1px solid var(--border);color:var(--muted);font-size:13px}}
@media print{{.printbtn{{display:none}}body{{background:#fff}}main{{max-width:none;padding:0}}
.sc,.card,.tw{{break-inside:avoid}}h2{{break-after:avoid}}}}
</style></head><body>
<button class="printbtn" onclick="window.print()">Save as PDF / Print</button><main>
<div class="hero">
<span class="pill">Tier 1 &amp; 2 · mandatory practice</span>
<span class="pill">v{VERSION}</span>
<span class="pill">{len(S)} scenarios · ~{hours} h</span>
<h1>102 Practice Scenarios</h1>
<p>Every scenario in this catalogue is derived from a <strong>real production case study</strong> that was
retrieved from a primary source and adversarially fact-checked. Nothing here is invented, and nothing is
a tutorial exercise wearing a company's name.</p>
<p>Drawn from <strong>{len(orgs)} organisations</strong> — engineering blogs, peer-reviewed papers, published
postmortems, regulator findings and court rulings. Each scenario names what actually went wrong, and what it
cost.</p></div>""")

    a(f"""<section><h2>What this is</h2>
<div class="grid g4" style="margin-top:16px">
<div class="card"><span class="muted" style="font-size:12px">SCENARIOS</span><div style="font-size:1.7rem;font-weight:700;color:var(--ink)">{len(S)}</div><span class="muted" style="font-size:13px">60 micro · 30 build · 12 ship</span></div>
<div class="card"><span class="muted" style="font-size:12px">PRACTICE HOURS</span><div style="font-size:1.7rem;font-weight:700;color:var(--ink)">~{hours}</div><span class="muted" style="font-size:13px">mandatory, across the core</span></div>
<div class="card"><span class="muted" style="font-size:12px">SOURCE ORGANISATIONS</span><div style="font-size:1.7rem;font-weight:700;color:var(--ink)">{len(orgs)}</div><span class="muted" style="font-size:13px">all primary-sourced</span></div>
<div class="card"><span class="muted" style="font-size:12px">INFRASTRUCTURE COST</span><div style="font-size:1.7rem;font-weight:700;color:var(--ok)">₹0</div><span class="muted" style="font-size:13px">8 GB laptop, free tier only</span></div>
</div>

<h3 style="margin-top:30px">The design rule</h3>
<p>A lab exercise gives a task list. A scenario gives a <strong>situation with a defect you have to find</strong>.
That single difference is also the main defence against a student pasting the brief into a frontier model — the
defect lives in the data, not in the prompt text.</p>
<div class="tw"><table><thead><tr><th style="width:16%">Field</th><th>What it carries</th></tr></thead><tbody>
<tr><td><strong>Provenance</strong></td><td>The real case, what actually happened, and a link to the primary source. This is what makes the work feel real rather than academic.</td></tr>
<tr><td><strong>Situation</strong></td><td>Written in role. No task list, no step numbers, no hints.</td></tr>
<tr><td><strong>You are given</strong></td><td>Starter repo and seeded data. Per-student seeds, so answers cannot be shared.</td></tr>
<tr><td><strong>Definition of done</strong></td><td>Observable outcomes only — never steps.</td></tr>
<tr><td><strong>Verifier</strong></td><td><code>make check</code>. Hidden tests the student never sees.</td></tr>
<tr><td><strong>Skills exercised</strong></td><td>Explicit trace back to unit concepts — this is the Learning Ledger surface.</td></tr>
<tr><td><strong>Why it matters</strong></td><td>The real-world consequence when this goes wrong.</td></tr>
</tbody></table></div>

<div class="okbox"><strong>On the frontier LLM in the next tab.</strong> These are not LLM-proof; nothing is.
The goal is different — make <em>using the model well</em> the skill rather than the bypass. The defect is in the
student's seeded data, which the model cannot see; acceptance tests are hidden; and several scenarios require
explaining a number read from the student's own run. In the largest published study of this, students given a raw
assistant did <strong>17% worse</strong> once it was removed, while students given a hints-only tutor did
<strong>127% better with no negative effect</strong>. Designing around the model is the losing move.</div>
</section>""")

    a("""<section><h2>Allocation</h2>
<div class="tw"><table><thead><tr><th style="width:32%">Unit</th>
<th style="text-align:right">Micro<br><span style="font-weight:400">30–45 min</span></th>
<th style="text-align:right">Build<br><span style="font-weight:400">2–3 h</span></th>
<th style="text-align:right">Ship<br><span style="font-weight:400">6–8 h</span></th>
<th style="text-align:right">Total</th><th style="text-align:right">Hours</th></tr></thead><tbody>""")
    for uid, uname in UNITS:
        rows = [x for x in S if x["unit"] == uid]
        m = sum(1 for x in rows if x["size"] == "micro")
        b = sum(1 for x in rows if x["size"] == "build")
        sh = sum(1 for x in rows if x["size"] == "ship")
        h = round(sum(SIZES[x["size"]][2] for x in rows))
        a(f'<tr><td><strong>{uid}</strong> · {uname}</td><td style="text-align:right">{m or "—"}</td>'
          f'<td style="text-align:right">{b or "—"}</td><td style="text-align:right">{sh or "—"}</td>'
          f'<td style="text-align:right"><strong>{len(rows)}</strong></td><td style="text-align:right">{h}</td></tr>')
    a(f'<tr style="background:#f1f5f9"><td><strong>Total</strong></td><td style="text-align:right"><strong>60</strong></td>'
      f'<td style="text-align:right"><strong>30</strong></td><td style="text-align:right"><strong>12</strong></td>'
      f'<td style="text-align:right"><strong>102</strong></td><td style="text-align:right"><strong>~{hours} h</strong></td></tr>')
    a("</tbody></table></div></section>")

    for uid, uname in UNITS:
        rows = [x for x in S if x["unit"] == uid]
        a(f'<section id="{uid.lower()}"><h2>{uid} · {uname}</h2>'
          f'<p class="muted">{len(rows)} scenarios · '
          f'{sum(1 for x in rows if x["size"]=="micro")} micro, '
          f'{sum(1 for x in rows if x["size"]=="build")} build, '
          f'{sum(1 for x in rows if x["size"]=="ship")} ship</p>')
        for x in rows:
            lab, dur, _ = SIZES[x["size"]]
            a(f'<div class="sc {x["size"]}">'
              f'<span class="sid">{x["id"]}</span><span class="tag {x["size"]}">{lab} · {dur}</span>'
              f'<h3>{esc(x["title"])}</h3>'
              f'<div class="prov"><b>Based on:</b> {esc(x["org"])} — {esc(x["what"])}. '
              f'<a href="{esc(x["url"])}" target="_blank" rel="noopener">source →</a></div>'
              f'<p style="font-size:14px;margin:10px 0 0">{esc(x["situation"])}</p>'
              f'<span class="lbl">You are given</span>'
              f'<p style="font-size:13.4px;margin:2px 0 0" class="muted">{esc(x["given"])}</p>'
              f'<span class="lbl">Definition of done</span><ul class="tight" style="font-size:13.4px">')
            for d in x["done"]:
                a(f"<li>{esc(d)}</li>")
            a(f'</ul><span class="lbl">Verifier</span>'
              f'<p style="font-size:13.4px;margin:2px 0 0" class="muted">{esc(x["verify"])}</p>'
              f'<span class="lbl">Skills exercised</span><div>')
            for sk in x["skills"]:
                a(f'<span class="chip">{esc(sk)}</span>')
            a(f'</div><span class="lbl">Why it matters</span>'
              f'<p style="font-size:13.4px;margin:2px 0 0">{esc(x["matters"])}</p></div>')
        a("</section>")

    a(f"""<section><h2>Honest limits</h2>
<div class="warnbox"><strong>What the research could not find.</strong> The sweep flagged real gaps, and they
are worth stating rather than papering over. Indian consumer-tech engineering blogs are a systematic retrieval
problem — several are Medium-hosted and refused automated access, so cases from Swiggy, Razorpay and Meesho are
cited via curated secondary summaries rather than the original posts. No citable production case was found for
RAG chunking strategy from a named company, for embedding-model version drift during a live re-index, or for an
agent cost runaway with published figures. Indian edtech produced no engineering write-up at all.</div>
<div class="warnbox"><strong>What was corrected.</strong> Adversarial verification rewrote <strong>38 of 112</strong>
harvested cases. Corrections included cherry-picked results (a cost saving quoted without the accuracy drop in the
next clause), forward-looking statements presented as achievements, figures eyeballed off unlabelled charts, and
numbers taken from press releases rather than the cited source. Three sources were reclassified as vendor marketing.
No scenario in this catalogue rests on an uncorrected claim.</div>
<div class="note"><strong>Reproducibility.</strong> Every scenario shrinks to an 8 GB Windows laptop, CPU-only,
free-tier services only. Where the original could not shrink — training a vision LLM, a 4,867-developer RCT,
2.4M QPS — the scenario targets the transferable lesson instead and says so. The catalogue never asks a student
to reproduce something the hardware cannot do.</div>
<div class="okbox"><strong>Authoring cost.</strong> Turning these 102 specifications into working starter repos,
seeded datasets, hidden acceptance tests and elaborated feedback is roughly <strong>1,300–1,900 hours</strong>.
For a two-person team that is 6–9 months. The sequencing that works: author U1–U4 completely, launch, then build
forward while students work through what exists.</div>
</section>

<footer><strong>102 Practice Scenarios v{VERSION}</strong> · Anvi Innovate AI Academy · Tier 1 &amp; 2 mandatory practice.<br>
Sources retrieved and adversarially verified August 2026. Every provenance line links to a primary source.
Case studies are cited for teaching purposes; scenarios are inspired by published accounts and are not
affiliated with or endorsed by the organisations named.<br>
Regenerate with <code>python3 build_scenarios.py</code> · Hyderabad, Telangana, India · hello@anviinnovate.com
</footer></main></body></html>""")

    open(os.path.join(HERE, f"scenarios-v{VERSION}.html"), "w", encoding="utf-8").write("".join(P))
    print(f"OK  {len(S)} scenarios  ~{hours} h  {len(orgs)} organisations")
    print(f"    scenarios-v{VERSION}.json")
    print(f"    scenarios-v{VERSION}.html")

if __name__ == "__main__":
    main()
