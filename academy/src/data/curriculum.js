// Single source of truth for the Anvi Innovate AI Academy curriculum.
// Every page is generated from this file. Course material attaches per module:
// add `content` to a module (markdown/HTML path, video, lab repo) and the module
// page will render it — no page or route changes required.

export const meta = {
  version: "2026.1",
  totalHours: 1050,
  taughtHours: 960,
  ojtHours: 90,
  weeksFullTime: 24,
  weeksPartTime: 44,
  passMark: 70,
  qp: {
    code: "SSC/Q8113",
    title: "AI - Machine Learning Engineer",
    version: "2.0",
    nsqfLevel: 7,
    awardingBody: "IT-ITeS Sector Skill Council (NASSCOM)",
    nco: "NCO-2015 / 2512",
    sector: "IT-ITeS / Future Skills",
    occupation: "Artificial Intelligence & Big Data Analytics",
  },
  statutory: { theory: 144, practical: 246, ojt: 90, total: 480, modelCurriculumVersion: "3.0" },
};

export const nos = [
  { code: "SSC/N8121", title: "Evaluate technical performance of algorithmic models", theory: 30, practical: 70, weight: 25, type: "technical", delivered: "C02" },
  { code: "SSC/N8122", title: "Develop software code to support deployment of algorithmic models", theory: 25, practical: 75, weight: 25, type: "technical", delivered: "C05" },
  { code: "SSC/N9001", title: "Manage your work to meet requirements", theory: 25, practical: 75, weight: 10, type: "generic", delivered: "P01" },
  { code: "SSC/N9002", title: "Work effectively with colleagues", theory: 20, practical: 80, weight: 10, type: "generic", delivered: "P01, F02" },
  { code: "SSC/N9004", title: "Provide data/information in standard formats", theory: null, practical: null, weight: null, type: "generic", delivered: "P01, F03, F05" },
  { code: "SSC/N9006", title: "Build and maintain relationships in a workplace", theory: null, practical: null, weight: null, type: "generic", delivered: "P01" },
  { code: "SSC/N9014", title: "Maintain an inclusive, environmentally sustainable workplace", theory: 10, practical: 20, weight: null, type: "generic", delivered: "P02" },
];

export const stages = [
  { id: "A", name: "Foundations", weeks: "1–6", hours: 240, gate: "Gate 1 — Foundations examination", blurb: "Programming, data, mathematics, databases, systems and the software discipline every AI role depends on." },
  { id: "B", name: "Core AI", weeks: "7–12", hours: 240, gate: "Gate 2 — NOS 8121 / 8122 practical", blurb: "Classical machine learning, deep learning, transformers, and the two statutory subjects that carry half the qualification weight." },
  { id: "C", name: "Applied GenAI", weeks: "13–18", hours: 240, gate: "Gate 3 — RAG/agent system with evaluations", blurb: "Language models, retrieval-augmented generation, agents, evaluation and responsible AI — the layer employers hire for." },
  { id: "D", name: "Specialisation", weeks: "19–22", hours: 160, gate: "Gate 4 — deployed track project", blurb: "One of six role tracks, taken to production depth." },
  { id: "E", name: "Capstone & OJT", weeks: "23–24", hours: 170, gate: "Gate 5 — capstone defence", blurb: "An owned, defended, end-to-end system plus 90 hours of supervised industry work." },
  { id: "P", name: "Professional (parallel)", weeks: "1–24", hours: 90, gate: "Continuous evaluation", blurb: "Employability, workplace conduct, inclusion and sustainability — delivered alongside technical stages." },
];

// ---------------------------------------------------------------- subjects
// module.content is intentionally absent for now; add it later to publish material.
export const subjects = [
  // ---------------- Stage A
  {
    code: "F01", stage: "A", name: "Programming Foundations with Python", hours: 48, theory: 16, practical: 32,
    prereq: "None", outcome: "Writes tested, modular, idiomatic Python for data and AI workloads.",
    stack: ["Python 3.11+", "uv/pip", "pytest", "ruff", "mypy"],
    scenario: "You inherit an undocumented data-pull script that fails silently every third night. Reproduce the failure, add structured logging and typed interfaces, write regression tests that capture the bug, fix it, and raise a pull request with a written root-cause note.",
    assessment: "Auto-graded coding challenge (40) · lab portfolio rubric (40) · code-review participation (20)",
    modules: [
      { n: "M1", hours: 6, title: "Interpreter, environments and project setup", topics: ["Interpreter and runtime model", "Virtual environments (venv/uv)", "Package management and pinning", "Project layout", "PEP 8", "Editors and debuggers"], lab: "Provision a reproducible project skeleton with pinned dependencies" },
      { n: "M2", hours: 8, title: "Types and collections", topics: ["Numeric and string types", "f-strings", "list/tuple/dict/set", "Comprehensions", "Slicing", "Mutability semantics"], lab: "Data-transformation kata set (12 problems)" },
      { n: "M3", hours: 8, title: "Functions and control flow", topics: ["Control flow", "Functions, arguments and defaults", "Scope and closures", "Decorators", "Generators and iterators", "Context managers"], lab: "Build a retry decorator and a streaming file reader" },
      { n: "M4", hours: 8, title: "Object-oriented design", topics: ["Classes and inheritance", "Composition over inheritance", "Dunder methods", "Dataclasses", "Protocols", "Module and package design"], lab: "Design a plug-in class hierarchy for data loaders" },
      { n: "M5", hours: 6, title: "Errors, logging and typing", topics: ["Exceptions and custom exceptions", "Structured logging", "Defensive programming", "Type hints", "Static checking with mypy"], lab: "Add typing and structured logging to an existing script" },
      { n: "M6", hours: 6, title: "File and network I/O", topics: ["CSV, JSON, JSONL, Parquet, YAML", "HTTP with requests", "Pagination", "Retries and backoff", "Rate limits"], lab: "Build a resilient API-ingest client with backoff" },
      { n: "M7", hours: 6, title: "Testing and code quality", topics: ["pytest fundamentals", "Fixtures and parametrisation", "Mocking", "Coverage measurement", "Linting with ruff"], lab: "Achieve ≥80% coverage on the ingest client" },
    ],
  },
  {
    code: "F02", stage: "A", name: "Software Engineering, Git & Collaboration", hours: 28, theory: 10, practical: 18,
    prereq: "F01", outcome: "Collaborates on a shared codebase to professional standards.",
    nos: ["SSC/N9002"], stack: ["Git", "GitHub", "GitHub Actions"],
    scenario: "A teammate's pull request breaks the build and mixes three unrelated changes. Review it professionally, request specific changes, help split the commits, and get the pipeline green without a direct push to main.",
    assessment: "PR review rubric · CI pipeline practical",
    modules: [
      { n: "M1", hours: 7, title: "Version control model", topics: ["Repositories and commits", "Branching strategies (trunk-based, GitFlow)", "Merge versus rebase", "Conflict resolution"], lab: "Resolve a deliberately conflicted merge" },
      { n: "M2", hours: 7, title: "Collaboration workflow", topics: ["Pull requests", "Review etiquette", "Commit hygiene", "Semantic versioning", "Changelogs", "Issue tracking"], lab: "Two-person PR exchange with mandatory review comments" },
      { n: "M3", hours: 7, title: "Standards and documentation", topics: ["Coding standards and checklists", "Low-level design conventions", "Docstrings", "README and architecture documentation"], lab: "Author a repository standard and enforce it via linting" },
      { n: "M4", hours: 7, title: "Continuous integration", topics: ["GitHub Actions", "Automated test and lint gates", "Branch protection", "Secrets handling"], lab: "CI pipeline that blocks merge on test or lint failure" },
    ],
  },
  {
    code: "F03", stage: "A", name: "Data Handling, Wrangling & Visualisation", hours: 36, theory: 12, practical: 24,
    prereq: "F01", outcome: "Turns raw, imperfect data into a trustworthy analysis table.",
    nos: ["SSC/N9004"], stack: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    scenario: "Business reports a revenue dashboard is wrong. Trace the discrepancy through the join logic, discover duplicate keys inflating totals, quantify the impact, correct the pipeline, and write the incident summary for a non-technical stakeholder.",
    assessment: "Notebook rubric · data-quality practical",
    modules: [
      { n: "M1", hours: 8, title: "NumPy", topics: ["ndarray and dtypes", "Broadcasting", "Vectorisation", "Axis semantics", "Memory layout", "Random number generation"], lab: "Replace loops with vectorised operations; benchmark the speed-up" },
      { n: "M2", hours: 10, title: "Pandas", topics: ["Series and DataFrame", "Indexing and selection", "Joins and merges", "Group-by aggregation", "Reshaping", "Time series", "Categoricals"], lab: "Join four heterogeneous sources into one analysis table" },
      { n: "M3", hours: 8, title: "Data quality", topics: ["Missing values", "Duplicates", "Outliers", "Type coercion", "Encoding issues", "Validation rules", "Data contracts"], lab: "Build a validation layer that quarantines bad rows" },
      { n: "M4", hours: 10, title: "Exploratory analysis and visualisation", topics: ["EDA workflow", "Matplotlib and Seaborn", "Chart selection", "Communicating uncertainty"], lab: "Produce a decision-oriented EDA report" },
    ],
  },
  {
    code: "F04", stage: "A", name: "Mathematics & Statistics for AI", hours: 40, theory: 18, practical: 22,
    prereq: "None", outcome: "Reasons quantitatively about models and evidence.",
    statutory: "Model Curriculum Bridge Module 3", stack: ["NumPy", "SciPy"],
    scenario: "A stakeholder claims a new feature lifted conversion by 12%. Determine whether the sample supports the claim, compute the confidence interval, identify the confound, and present a defensible verdict.",
    assessment: "Quiz + derivation set · applied statistics practical",
    modules: [
      { n: "M1", hours: 10, title: "Linear algebra", topics: ["Vectors and matrices", "Matrix multiplication", "Transpose and inverse", "Identity and rank", "Eigenvalues and eigenvectors", "Norms", "Dot product and cosine similarity"], lab: "Implement matrix operations and cosine similarity from first principles" },
      { n: "M2", hours: 8, title: "Calculus for optimisation", topics: ["Derivatives and partial derivatives", "Chain rule", "Gradients", "Convexity", "Gradient descent and variants"], lab: "Implement batch and stochastic gradient descent; visualise convergence" },
      { n: "M3", hours: 8, title: "Descriptive statistics", topics: ["Mean, median, mode", "Dispersion and variance", "Standard deviation", "Skew and percentiles", "Statistical anomalies: missing values, bias, outliers"], lab: "Statistical profile of a raw production dataset" },
      { n: "M4", hours: 7, title: "Probability", topics: ["Sample spaces", "Conditional probability", "Bayes' theorem", "Independence", "Normal, binomial and Poisson distributions", "Central limit theorem"], lab: "Bayesian update exercise on a classification prior" },
      { n: "M5", hours: 7, title: "Inferential statistics", topics: ["Sampling", "Confidence intervals", "Hypothesis testing", "p-values", "Type I and II error", "Statistical power", "Correlation versus causation"], lab: "Design and analyse a controlled comparison" },
    ],
  },
  {
    code: "F05", stage: "A", name: "Databases & SQL for AI Systems", hours: 28, theory: 10, practical: 18,
    prereq: "F01", outcome: "Models, queries and tunes relational data for AI workloads.",
    nos: ["SSC/N9004"], stack: ["PostgreSQL", "SQLAlchemy"],
    scenario: "A nightly aggregation job has grown from 4 minutes to 90 minutes. Read the execution plan, identify the missing composite index and the accidental cross join, fix both, and document the before and after.",
    assessment: "SQL challenge set · query-tuning practical",
    modules: [
      { n: "M1", hours: 7, title: "Relational modelling", topics: ["Relational model", "Keys", "Normalisation", "Schema design", "Data types", "Constraints", "Indexing fundamentals"], lab: "Design a normalised schema for a transactional domain" },
      { n: "M2", hours: 9, title: "SQL", topics: ["SELECT and filtering", "Joins (inner, outer, self)", "Aggregation", "GROUP BY and HAVING", "Subqueries", "CTEs", "Window functions"], lab: "Analytical query set of 20 graded problems" },
      { n: "M3", hours: 6, title: "Query performance", topics: ["Execution plans", "Index selection", "Cardinality", "Partitioning", "Avoiding N+1 access patterns"], lab: "Reduce a slow query's runtime by an order of magnitude" },
      { n: "M4", hours: 6, title: "Programmatic access", topics: ["SQLAlchemy and drivers", "Connection pooling", "Transactions and isolation", "NoSQL and vector-store preview"], lab: "Parameterised, pooled data-access layer" },
    ],
  },
  {
    code: "F06", stage: "A", name: "Linux, Networking & Cloud Fundamentals", hours: 24, theory: 8, practical: 16,
    prereq: "None", outcome: "Operates confidently on the systems AI workloads run on.",
    nos: ["SSC/N8121 KU15"], stack: ["Linux/Ubuntu", "bash", "Docker", "Cloud (AWS/Azure/GCP)"],
    scenario: "A model service works locally but returns 502 in the cloud. Work down the stack — container port binding, security group, IAM permission, secret injection — and produce a runbook so the next engineer resolves it in minutes.",
    assessment: "Systems troubleshooting practical",
    modules: [
      { n: "M1", hours: 8, title: "Linux", topics: ["Filesystem and permissions", "Processes", "Package managers", "Shell scripting", "SSH", "cron and systemd basics", "Working across Linux and Windows"], lab: "Automate a scheduled data job on a Linux VM" },
      { n: "M2", hours: 6, title: "Networking", topics: ["TCP/IP", "DNS", "HTTP/HTTPS and TLS", "Ports and firewalls", "Proxies", "REST semantics and status codes", "Latency versus throughput"], lab: "Diagnose a failing service call end to end" },
      { n: "M3", hours: 6, title: "Cloud fundamentals", topics: ["Regions and availability zones", "IAM and least privilege", "Compute", "Object storage", "Managed databases", "Secrets management", "Cost model"], lab: "Provision least-privilege storage and compute for a workload" },
      { n: "M4", hours: 4, title: "Containers", topics: ["Images and layers", "Dockerfile", "Registries", "Volumes", "Port mapping"], lab: "Containerise a Python service" },
    ],
  },
  {
    code: "F07", stage: "A", name: "AI & Big Data Analytics — Industry Landscape", hours: 12, theory: 4, practical: 8,
    prereq: "None", outcome: "Places AI work in industry and occupational context.",
    statutory: "Model Curriculum Bridge Module 1",
    assessment: "Use-case teardown · role-mapping exercise",
    modules: [
      { n: "M1", hours: 4, title: "Definitions and lifecycle", topics: ["AI, ML, deep learning and generative AI boundaries", "The AI project lifecycle", "Data-to-value chain"], lab: "Map a business problem to an AI solution pattern" },
      { n: "M2", hours: 4, title: "Industry use cases", topics: ["BFSI, healthcare, retail, manufacturing, telecom, public services", "Build versus buy", "Failure patterns"], lab: "Use-case teardown of a deployed industry system" },
      { n: "M3", hours: 4, title: "Occupational roles", topics: ["AI engineer, ML engineer, data scientist, data engineer, MLOps, solutions architect, annotator", "Responsibilities and interfaces", "Career ladders"], lab: "Role-mapping exercise against live job descriptions" },
    ],
  },
  {
    code: "F08", stage: "A", name: "Product Engineering & SDLC Basics", hours: 24, theory: 8, practical: 16,
    prereq: "None", outcome: "Works inside a delivery process and writes the documents it requires.",
    statutory: "Model Curriculum Bridge Module 2", nos: ["SSC/N9001"],
    scenario: "The client changes a requirement mid-sprint. Assess the impact on scope, timeline and dependencies, update the SRS and risk register, and communicate the revised commitment in writing.",
    assessment: "SRS and design documentation rubric · sprint participation",
    modules: [
      { n: "M1", hours: 7, title: "Delivery methods", topics: ["SDLC models", "Agile and Scrum: sprints, backlog, estimation, stand-ups, retrospectives", "Kanban and WIP limits"], lab: "Run a two-week simulated sprint with ceremonies" },
      { n: "M2", hours: 7, title: "Requirements engineering", topics: ["Elicitation", "User stories", "Acceptance criteria", "Functional versus non-functional requirements", "Traceability"], lab: "Convert an ambiguous business ask into a written SRS" },
      { n: "M3", hours: 6, title: "Design documentation", topics: ["High-Level Design: solution rationale, assumptions, constraints, dependencies, interfaces", "Low-Level Design: structures, standards, checklists"], lab: "Produce HLD and LLD for a model-serving feature" },
      { n: "M4", hours: 4, title: "Release and risk", topics: ["Release planning", "Timelines", "Dependency management", "Risk registers", "Definition of done", "Stakeholder communication"], lab: "Build a delivery plan with a risk register" },
    ],
  },

  // ---------------- Stage B
  {
    code: "C01", stage: "B", name: "Classical Machine Learning", hours: 56, theory: 20, practical: 36,
    prereq: "F01, F03, F04", outcome: "Frames, builds and validates supervised and unsupervised models without leakage.",
    stack: ["scikit-learn", "XGBoost", "LightGBM", "Optuna"],
    scenario: "Your model scores 0.94 AUC offline and fails in production. Discover that a feature was computed using post-event information, rebuild the feature set with a strict point-in-time join, and requantify honest performance.",
    assessment: "Tabular modelling project with evaluation report",
    modules: [
      { n: "M1", hours: 8, title: "Learning paradigms and framing", topics: ["Supervised, unsupervised, semi-supervised, reinforcement", "Problem framing", "Train/validation/test discipline", "Overfitting and underfitting", "Bias–variance decomposition"], lab: "Construct leakage-free splits for a temporal dataset" },
      { n: "M2", hours: 8, title: "Regression", topics: ["Linear and polynomial regression", "Ridge, Lasso, ElasticNet", "Assumptions and diagnostics", "Residual analysis"], lab: "Regularisation sweep with learning curves" },
      { n: "M3", hours: 10, title: "Classification", topics: ["Logistic regression", "k-NN", "Naïve Bayes", "Support vector machines and kernels", "Decision boundaries", "Class imbalance"], lab: "Imbalanced classification with resampling and threshold tuning" },
      { n: "M4", hours: 10, title: "Trees and ensembles", topics: ["Decision trees", "Bagging and random forests", "Gradient boosting, XGBoost, LightGBM", "Stacking", "Feature importance"], lab: "Tune a gradient-boosted model against a baseline" },
      { n: "M5", hours: 10, title: "Unsupervised learning", topics: ["k-means", "Hierarchical clustering", "DBSCAN", "Silhouette analysis", "PCA and dimensionality reduction", "Anomaly detection"], lab: "Segment customers and justify the cluster count" },
      { n: "M6", hours: 10, title: "Feature engineering and pipelines", topics: ["Encoding and scaling", "Binning and interactions", "Temporal features", "Target leakage", "Pipelines and column transformers", "Hyperparameter search"], lab: "End-to-end reproducible pipeline object" },
    ],
  },
  {
    code: "C02", stage: "B", name: "Model Evaluation & Performance Engineering", hours: 90, theory: 40, practical: 50,
    prereq: "C01", outcome: "Measures, profiles and optimises a model to fit real system constraints, and documents the trade-off.",
    statutory: "Model Curriculum Module 5 — delivers SSC/N8121 in full", nos: ["SSC/N8121"], flagship: true,
    stack: ["cProfile", "line_profiler", "memory_profiler", "PyTorch profiler", "ONNX"],
    scenario: "Production inference must run within 200 ms at p95 on a 4-core CPU instance with 8 GB RAM, but the current model averages 850 ms. Establish the baseline, profile to locate the bottleneck, apply quantisation and batching, verify accuracy remains within the agreed tolerance, document the change in the model card, and formally report the trade-off to the data-science team.",
    assessment: "Theory 30 marks · Practical 70 marks (mirrors the statutory split). Practical is graded on measured before/after evidence, not narrative.",
    modules: [
      { n: "M1", hours: 18, title: "Define model parameters", pc: "PC1, PC2", topics: ["Technical specifications and limitations of the host system", "CPU/GPU architecture, cores, clock, cache hierarchy", "RAM and VRAM ceilings", "Storage I/O", "OS constraints", "Data flows and structures: tensors, batches, feature stores", "Serialisation formats", "Precision (fp32/fp16/int8)", "Interface contracts and schema definition"], lab: "Author a formal specification sheet documenting host limits and the model's data-flow graph" },
      { n: "M2", hours: 20, title: "Runtime, speed and memory analysis", pc: "PC3", topics: ["Algorithmic complexity and Big-O notation", "Time and space trade-offs", "Profiling tools", "Latency percentiles (p50/p95/p99)", "Throughput and cold start", "Memory leaks, fragmentation, garbage collection", "Batch-size versus memory curves"], lab: "Profile a model end to end; produce a flame graph and a bottleneck report ranked by impact" },
      { n: "M3", hours: 18, title: "Parallel programming constraints", pc: "PC4", topics: ["Flynn's taxonomy: SISD, SIMD, MISD, MIMD", "Threads versus processes", "The Python GIL", "Multiprocessing and vectorisation", "BLAS threading", "GPU execution model, kernels, occupancy, memory bandwidth", "Data versus model parallelism", "Amdahl's law", "Synchronisation, race conditions, deadlock"], lab: "Parallelise an inference workload; measure scaling efficiency against Amdahl's prediction" },
      { n: "M4", hours: 20, title: "Optimise to fit constraints", pc: "PC5", topics: ["Quantisation (post-training and quantisation-aware)", "Pruning", "Knowledge distillation", "Operator fusion and graph optimisation", "ONNX export", "Batching strategies", "Caching", "Mixed precision", "Accuracy-versus-resource trade-off analysis", "Regression testing after optimisation"], lab: "Reduce model latency and memory to a stated budget while holding accuracy within tolerance; present the trade-off curve" },
      { n: "M5", hours: 14, title: "Document and feed back", pc: "PC6, PC7", topics: ["Model cards", "Evaluation reports", "Versioned documentation", "Reproducibility metadata", "Anomaly identification and referral", "Structured performance feedback to the design team", "Organisational documentation and data-sharing policy", "Escalation paths"], lab: "Publish a model card and deliver a formal performance-feedback review to the modelling team" },
    ],
  },
  {
    code: "C03", stage: "B", name: "Deep Learning", hours: 48, theory: 16, practical: 32,
    prereq: "C01", outcome: "Trains, diagnoses and adapts neural networks.",
    stack: ["PyTorch", "torchvision", "Weights & Biases"],
    scenario: "A training run plateaus at chance accuracy. Systematically eliminate causes — data pipeline, initialisation, learning rate, loss definition — and document the diagnosis path.",
    assessment: "Training diagnostics practical · transfer-learning project",
    modules: [
      { n: "M1", hours: 10, title: "Network fundamentals", topics: ["Neurons and activation functions", "Feed-forward networks", "Loss functions", "Backpropagation derivation", "Computational graphs", "Autograd"], lab: "Implement a two-layer network and backprop manually, then in PyTorch" },
      { n: "M2", hours: 10, title: "Training dynamics", topics: ["Initialisation", "Optimisers: SGD, momentum, RMSProp, Adam, AdamW", "Learning-rate schedules", "Batch size", "Gradient clipping", "Vanishing and exploding gradients"], lab: "Diagnose and repair a non-converging training run" },
      { n: "M3", hours: 10, title: "Regularisation and generalisation", topics: ["Dropout", "Batch and layer normalisation", "Weight decay", "Early stopping", "Data augmentation", "Transfer learning and fine-tuning"], lab: "Transfer-learn a pretrained backbone to a small dataset" },
      { n: "M4", hours: 10, title: "Convolutional networks", topics: ["Convolution and pooling", "Stride and padding", "Receptive field", "Classic architectures", "Image pipelines"], lab: "Train and evaluate an image classifier with augmentation" },
      { n: "M5", hours: 8, title: "Sequence models", topics: ["RNN, LSTM, GRU", "Sequence-to-sequence", "Teacher forcing", "Limitations that motivate attention"], lab: "Sequence model on time-series or text; compare to a transformer baseline" },
    ],
  },
  {
    code: "C04", stage: "B", name: "Transformers & Representation Learning", hours: 26, theory: 10, practical: 16,
    prereq: "C03", outcome: "Explains and implements the architecture underlying modern language models.",
    stack: ["PyTorch", "Hugging Face Transformers", "tokenizers"],
    assessment: "From-scratch attention implementation · embedding probe report",
    modules: [
      { n: "M1", hours: 10, title: "Attention", topics: ["Query, key, value", "Scaled dot-product attention and the √d rationale", "Softmax weighting", "Multi-head attention", "Self versus cross attention", "Causal masking"], lab: "Implement scaled dot-product and multi-head attention from scratch" },
      { n: "M2", hours: 8, title: "Transformer architecture", topics: ["Encoder and decoder stacks", "Residual connections", "Layer normalisation", "Feed-forward blocks", "Positional encoding: absolute, learned, rotary", "Quadratic complexity in sequence length"], lab: "Assemble a minimal transformer block and verify shapes and gradients" },
      { n: "M3", hours: 8, title: "Representation learning", topics: ["Tokenisation: BPE, WordPiece, SentencePiece", "Vocabulary", "Embeddings", "Contextual versus static embeddings", "Embedding geometry", "Cosine similarity", "Pretraining objectives: causal and masked LM"], lab: "Train a tokeniser; probe embedding similarity behaviour" },
    ],
  },
  {
    code: "C05", stage: "B", name: "Software Code Development for Model Deployment", hours: 120, theory: 40, practical: 80,
    prereq: "F02, C01", outcome: "Turns a model into specified, tested, documented, deployable software.",
    statutory: "Model Curriculum Module 6 — delivers SSC/N8122 in full", nos: ["SSC/N8122"], flagship: true,
    stack: ["FastAPI", "Pydantic", "Docker", "pytest", "locust"],
    scenario: "Data science delivers a notebook model that must go live in three weeks under a 99.5% availability target. Write the SRS and HLD, refactor the notebook into a tested, containerised, schema-validated service, load-test it, remediate the defects found, document it, and take it through code review and release approval.",
    assessment: "Theory 25 · Practical 75. Deliverables: SRS, HLD, LLD, running service, test suite with coverage report, defect log, approved PR.",
    modules: [
      { n: "M1", hours: 22, title: "Define requirements", pc: "PC1, PC2", topics: ["Software Requirements Specification", "Functional and non-functional requirements: latency, throughput, availability, security, cost", "Technical specifications and limitations of the target system", "Evaluating the design of data flows and structures", "Interface and schema contracts", "Traceability matrix"], lab: "Produce a complete SRS and reviewed data-flow design for a model-serving system" },
      { n: "M2", hours: 22, title: "Evaluate model and concurrency design", pc: "PC3, PC4", topics: ["Reviewing core algorithmic model design for deployability", "High-Level Design: solution and rationale, assumptions, constraints, dependencies, interfaces", "Parallel programming constraints of the target system", "Concurrency models", "Thread safety", "Statelessness and idempotency"], lab: "Write and defend an HLD including a concurrency and constraint analysis" },
      { n: "M3", hours: 34, title: "Convert specifications into reusable code", pc: "PC5, PC6, PC7", topics: ["Low-Level Design: programming structures, coding standards, checklists", "Modular and reusable component design", "Determining component reuse suitability", "Serving with FastAPI", "Request/response schemas with Pydantic", "Configuration and secrets", "Dependency injection", "Packaging and containerisation", "Code-generation tooling", "Stakeholder documentation and validation walkthroughs"], lab: "Implement a documented, containerised, schema-validated inference service and validate it with stakeholders" },
      { n: "M4", hours: 28, title: "Unit testing and defect management", pc: "PC8, PC9, PC10", topics: ["Test design and the test pyramid", "Unit test case creation and execution", "Fixtures, mocking, parametrisation", "Coverage measurement", "Performance and load testing", "Defect taxonomy and triage", "Root-cause analysis", "Corrective action", "Recording corrective actions to improve future design", "Refactoring for performance"], lab: "Build a test suite with a coverage gate; log, classify and remediate seeded defects; optimise the hot path" },
      { n: "M5", hours: 14, title: "Approval and release", pc: "PC11", topics: ["Organisational approval process for code designs", "Pull-request and sign-off workflow", "Release notes and versioning", "Deployment readiness checklist", "Handover documentation"], lab: "Submit optimised, tested code through a formal approval gate to release" },
    ],
  },

  // ---------------- Stage C
  {
    code: "G01", stage: "C", name: "Large Language Models & Prompt Engineering", hours: 44, theory: 16, practical: 28,
    prereq: "C04", outcome: "Builds reliable, schema-valid applications on top of language models.",
    stack: ["OpenAI API", "Anthropic API", "Pydantic", "LiteLLM"],
    scenario: "A customer-facing summariser occasionally invents policy numbers. Build a reproducible failure set, add grounding and schema validation, define refusal behaviour, and demonstrate a measured reduction in fabricated fields.",
    assessment: "Prompt library with regression cases · structured-output service",
    modules: [
      { n: "M1", hours: 8, title: "LLM landscape", topics: ["Pretraining", "Instruction tuning", "Alignment (RLHF/RLAIF)", "Model families", "Proprietary versus open-weights", "Context windows", "Capability and limitation profiles", "Model selection criteria"], lab: "Benchmark three models on one task for quality, latency and cost" },
      { n: "M2", hours: 8, title: "Inference mechanics", topics: ["Tokenisation and token accounting", "Temperature, top-p, top-k", "Stop sequences", "Determinism", "Max tokens", "Streaming", "Context-window management and truncation strategy"], lab: "Token-budget calculator and sampling sensitivity study" },
      { n: "M3", hours: 10, title: "Prompt engineering", topics: ["Zero-shot and few-shot", "Chain-of-thought", "Role and system prompts", "Delimiters", "Output contracts", "Self-consistency", "Decomposition", "Prompt templating and versioning", "Anti-patterns"], lab: "Build a versioned prompt library with regression cases" },
      { n: "M4", hours: 10, title: "Structured outputs and integration", topics: ["JSON mode", "Schema enforcement with Pydantic", "Function and tool calling", "Validation and repair loops", "Error taxonomy", "Retries and idempotency", "Provider SDKs and gateways"], lab: "Service returning strictly schema-valid structured output with repair" },
      { n: "M5", hours: 8, title: "Hallucination", topics: ["Causes", "Detection", "Grounding strategies", "Refusal design", "Confidence signalling", "Citation requirements"], lab: "Measure and reduce unsupported-claim rate on a fixed task set" },
    ],
  },
  {
    code: "G02", stage: "C", name: "Retrieval-Augmented Generation", hours: 56, theory: 18, practical: 38,
    prereq: "G01, F05", outcome: "Builds and measures a grounded retrieval system end to end.",
    stack: ["LangChain", "LlamaIndex", "pgvector", "Qdrant", "Unstructured", "sentence-transformers"],
    scenario: "An internal policy assistant answers confidently from outdated documents. Add document versioning and recency metadata, implement hybrid retrieval with reranking, enforce citations, and prove the improvement with retrieval and answer metrics on a fixed evaluation set.",
    assessment: "Retrieval-tuning study with measured metrics · grounded answering service",
    modules: [
      { n: "M1", hours: 8, title: "RAG architecture", topics: ["Why retrieval", "Indexing versus query pipeline", "Grounding and citation", "Failure modes", "When RAG is the wrong tool"], lab: "Baseline RAG implementation end to end" },
      { n: "M2", hours: 10, title: "Ingestion and parsing", topics: ["Document loaders", "PDF/HTML/DOCX and table extraction", "OCR", "Layout preservation", "Metadata extraction", "Incremental sync", "Deduplication", "Refresh scheduling"], lab: "Ingest a heterogeneous corpus including scanned and tabular documents" },
      { n: "M3", hours: 10, title: "Chunking strategy", topics: ["Fixed, recursive, semantic, parent-document and hierarchical chunking", "Overlap", "Chunk size versus recall", "Metadata design for filtering"], lab: "Controlled chunking experiment measured on retrieval metrics" },
      { n: "M4", hours: 12, title: "Embeddings and vector stores", topics: ["Embedding model selection and benchmarking", "Dimensionality", "Normalisation", "Index types: flat, HNSW, IVF", "Distance metrics", "Filtering and hybrid metadata queries", "Upserts", "Sharding and scale"], lab: "Build and tune a vector index for recall and latency" },
      { n: "M5", hours: 10, title: "Retrieval quality", topics: ["Dense versus sparse (BM25)", "Hybrid fusion", "Reranking with cross-encoders", "Query rewriting and expansion", "Multi-hop retrieval", "Top-k selection", "Context assembly and ordering"], lab: "Raise recall@k and precision with hybrid search plus reranking" },
      { n: "M6", hours: 6, title: "Generation layer", topics: ["Grounded prompting", "Citation enforcement", "Context-window packing", "Conflicting-source handling", "Answerability and abstention"], lab: "Citation-enforced answering with abstention on insufficient evidence" },
    ],
  },
  {
    code: "G03", stage: "C", name: "AI Agents & Tool Orchestration", hours: 48, theory: 16, practical: 32,
    prereq: "G02", outcome: "Builds controllable, recoverable agents that act safely on real systems.",
    stack: ["LangGraph", "CrewAI", "MCP", "Redis"],
    scenario: "An agent authorised to issue refunds must never act alone above a threshold. Implement permission scoping, a human approval gate, idempotent tool calls, cost caps and a complete audit trail; then demonstrate correct behaviour under retry and partial-failure conditions.",
    assessment: "Stateful agent with approval gate and recovery behaviour",
    modules: [
      { n: "M1", hours: 8, title: "Agent foundations", topics: ["The agent loop", "Reasoning and acting patterns", "Planning versus reactive execution", "When an agent is unnecessary", "Cost and latency implications"], lab: "Single-tool agent with explicit termination conditions" },
      { n: "M2", hours: 10, title: "Tool design", topics: ["Tool schemas and descriptions", "Function calling", "Argument validation", "Side-effect classification", "Idempotency", "Tool errors and recovery", "Model Context Protocol servers"], lab: "Build and expose a tool set including a stateful external action" },
      { n: "M3", hours: 12, title: "Orchestration", topics: ["Graph and state-machine execution", "Durable state and checkpointing", "Resumability", "Branching and conditional edges", "Subgraphs", "Multi-agent patterns: supervisor, hierarchical", "Handoffs"], lab: "Stateful multi-step workflow that resumes after induced failure" },
      { n: "M4", hours: 8, title: "Memory", topics: ["Short-term context", "Conversation summarisation", "Long-term memory stores", "Retrieval-backed memory", "Memory hygiene and privacy"], lab: "Add scoped, expiring memory to an assistant" },
      { n: "M5", hours: 10, title: "Control and safety", topics: ["Human-in-the-loop approval gates", "Permission scoping and least privilege for tools", "Loop and cost caps", "Timeouts", "Sandboxing", "Audit trails"], lab: "Approval-gated agent with enforced spend and iteration ceilings" },
    ],
  },
  {
    code: "G04", stage: "C", name: "LLM Evaluation, Observability & Cost", hours: 44, theory: 16, practical: 28,
    prereq: "G02", outcome: "Proves whether an AI system is good enough to ship, with evidence.",
    nos: ["SSC/N8121"], stack: ["RAGAS", "DeepEval", "LangSmith", "MLflow"],
    scenario: "Leadership asks whether a prompt change may ship. Run the regression suite, separate retrieval from generation effects, quantify quality delta with confidence, report cost and latency impact, and issue a go/no-go recommendation with evidence.",
    assessment: "Evaluation harness · calibrated judge · cost-reduction practical",
    modules: [
      { n: "M1", hours: 8, title: "Evaluation strategy", topics: ["What to measure", "Offline versus online", "Golden datasets", "Dataset curation and maintenance", "Annotation guidelines", "Inter-annotator agreement", "Test-set contamination"], lab: "Construct a governed golden dataset with an annotation guide" },
      { n: "M2", hours: 8, title: "Retrieval metrics", topics: ["recall@k", "precision@k", "MRR", "NDCG", "Hit rate", "Context precision and recall", "Evaluating retrieval independently of generation"], lab: "Retrieval-only evaluation harness with dashboards" },
      { n: "M3", hours: 10, title: "Generation metrics", topics: ["Faithfulness and groundedness", "Answer relevance", "Correctness and completeness", "Toxicity and safety", "Deterministic assertions", "LLM-as-a-judge design", "Judge bias and calibration", "Human agreement"], lab: "Build and calibrate a judge against human labels" },
      { n: "M4", hours: 6, title: "Agent and multi-turn evaluation", topics: ["Trajectory evaluation", "Tool-call correctness", "Task completion", "Conversation quality", "Regression suites"], lab: "Trajectory evaluation for the G03 agent" },
      { n: "M5", hours: 6, title: "Observability", topics: ["Tracing and spans", "Prompt and version logging", "Latency and token dashboards", "Error taxonomies", "Sampling live traffic", "User feedback capture", "Drift detection"], lab: "Instrument a live pipeline with end-to-end tracing" },
      { n: "M6", hours: 6, title: "Cost and performance engineering", topics: ["Token accounting", "Prompt compression", "Exact and semantic caching", "Model routing and tiering", "Batching", "Streaming", "Budget alarms", "Unit economics per request"], lab: "Halve cost per query at constant measured quality" },
    ],
  },
  {
    code: "G05", stage: "C", name: "Responsible AI, Security & Data Governance", hours: 48, theory: 18, practical: 30,
    prereq: "G01", outcome: "Ships AI that withstands attack, protects data and satisfies governance.",
    nos: ["SSC/N9014"], stack: ["guardrails", "presidio", "Fairlearn"],
    scenario: "Red-team an assistant that has tool access to a customer database. Find and document the exfiltration path through indirect prompt injection, implement layered mitigations, and re-test to show the bypass rate falls.",
    assessment: "Red-team report · guardrail bypass-rate measurement · policy artefacts",
    modules: [
      { n: "M1", hours: 12, title: "AI security", topics: ["Prompt injection: direct and indirect", "Jailbreaks", "Data exfiltration through tools and retrieval", "RAG corpus poisoning", "Insecure output handling", "Supply-chain risk in models and packages", "Agent permission escalation"], lab: "Red-team a deployed assistant and document exploit paths" },
      { n: "M2", hours: 10, title: "Guardrails", topics: ["Input and output filtering", "Allow/deny policies", "Refusal design", "Output validation", "Escalation thresholds", "Content classification", "Defence in depth", "Fail-safe defaults"], lab: "Implement layered guardrails and measure bypass rate before and after" },
      { n: "M3", hours: 10, title: "Privacy and data protection", topics: ["PII identification and redaction", "Data minimisation", "Retention and deletion", "Consent and purpose limitation", "Cross-border and residency considerations", "Digital Personal Data Protection Act 2023 obligations", "Audit logging"], lab: "Build a PII-redaction and retention layer with an audit trail" },
      { n: "M4", hours: 10, title: "Fairness and transparency", topics: ["Bias sources across data, labels and feedback loops", "Fairness metrics", "Disparate impact testing", "Explainability", "Model cards and datasheets", "Documentation duties"], lab: "Bias audit of a deployed classifier with mitigation proposal" },
      { n: "M5", hours: 6, title: "Governance and assurance", topics: ["Acceptable-use policy", "Model risk management", "Approval workflows", "Incident response for AI failures", "Human oversight design", "Vendor and third-party assessment"], lab: "Draft an AI acceptable-use and incident-response policy" },
    ],
  },

  // ---------------- Stage P
  {
    code: "P01", stage: "P", name: "Professional Practice & Employability", hours: 60, theory: 24, practical: 36,
    prereq: "None", outcome: "Operates as a professional colleague and enters the job market prepared.",
    statutory: "DGT/VSQ/N0102 Employability Skills (60 h)", nos: ["SSC/N9001", "SSC/N9002", "SSC/N9004", "SSC/N9006"],
    scenario: "You are behind on a committed deliverable because an upstream dependency slipped. Renegotiate scope with the appropriate people in writing, inform affected colleagues, protect confidential client information in the communication, and record the revised commitment.",
    assessment: "Continuous behavioural rubric · portfolio and mock interview",
    modules: [
      { n: "M1", hours: 1.5, title: "Introduction to Employability Skills", topics: ["World of work", "Employer expectations", "Workplace norms"] },
      { n: "M2", hours: 1.5, title: "Constitutional Values — Citizenship", topics: ["Rights and duties", "Civic responsibility", "Workplace ethics"] },
      { n: "M3", hours: 2.5, title: "Becoming a Professional in the 21st Century", topics: ["Professionalism", "Accountability", "Adaptability", "Lifelong learning"] },
      { n: "M4", hours: 10, title: "Basic English Skills", topics: ["Workplace reading and writing", "Speaking and listening", "Technical English"] },
      { n: "M5", hours: 2, title: "Career Development & Goal Setting", topics: ["Career mapping", "Goal setting", "Self-assessment"] },
      { n: "M6", hours: 5, title: "Communication Skills", topics: ["Clear, concise and accurate communication", "Written reporting", "Active listening", "Conflict handling"] },
      { n: "M7", hours: 2.5, title: "Diversity & Inclusion", topics: ["Respectful workplaces", "Inclusive behaviour", "Bias awareness"] },
      { n: "M8", hours: 5, title: "Financial and Legal Literacy", topics: ["Personal finance", "Contracts", "Workplace legal basics", "Confidentiality"] },
      { n: "M9", hours: 10, title: "Essential Digital Skills", topics: ["Productivity tooling", "Collaboration platforms", "Digital hygiene", "Cyber-safety"] },
      { n: "M10", hours: 7, title: "Entrepreneurship", topics: ["Opportunity identification", "Value proposition", "Venture literacy"] },
      { n: "M11", hours: 5, title: "Customer Service", topics: ["Stakeholder and client orientation", "Expectation management"] },
      { n: "M12", hours: 8, title: "Getting Ready for Apprenticeship & Jobs", topics: ["Résumé", "Portfolio", "GitHub profile", "Mock interviews", "Offer navigation"] },
    ],
  },
  {
    code: "P02", stage: "P", name: "Inclusive & Environmentally Sustainable Workplace", hours: 30, theory: 10, practical: 20,
    prereq: "None", outcome: "Works to the inclusion and sustainability standards required at work.",
    statutory: "Model Curriculum Module 12 — delivers SSC/N9014", nos: ["SSC/N9014"],
    assessment: "Practical audit tasks",
    modules: [
      { n: "M1", hours: 8, title: "Resource efficiency", topics: ["Optimising electricity, energy, materials and water usage", "Energy-aware computing", "Efficient resource scheduling", "Measuring consumption"], lab: "Energy and resource audit of a compute workload with reduction plan" },
      { n: "M2", hours: 6, title: "Waste management", topics: ["Segregating recyclable, non-recyclable and hazardous waste", "E-waste policy and practice"], lab: "Workplace waste segregation and e-waste disposal procedure" },
      { n: "M3", hours: 8, title: "Diversity policy and communication", topics: ["Organisational diversity policy", "Internal and external communication", "PwD-inclusive policies for an adaptable, equitable environment"], lab: "Review a workplace policy for inclusivity gaps and propose amendments" },
      { n: "M4", hours: 8, title: "Inclusive practice", topics: ["Inclusive recruitment practices", "PwD-friendly infrastructure and job design", "Advocating appropriate verbal and non-verbal communication", "Schemes and benefits", "Accessibility in digital products"], lab: "Accessibility review of a delivered AI interface" },
    ],
  },

  // ---------------- Stage E
  {
    code: "X01", stage: "E", name: "Capstone Project", hours: 80, theory: 10, practical: 70,
    prereq: "Gate 4", outcome: "Owns and defends an end-to-end system built to a real constraint.",
    assessment: "100-mark rubric: framing 10 · design 15 · implementation 20 · evaluation rigour 20 · engineering & operations 15 · safety & governance 10 · communication & defence 10",
    modules: [
      { n: "P1", hours: 10, title: "Scoping", topics: ["Problem selection", "Stakeholder definition", "Success metrics", "Constraints: latency, cost, safety", "Risk register"], lab: "Approved project charter and SRS" },
      { n: "P2", hours: 10, title: "Design", topics: ["High-level and low-level design", "Data flows", "Interface contracts", "Evaluation plan defined before building"], lab: "HLD, LLD and evaluation plan" },
      { n: "P3", hours: 30, title: "Build", topics: ["Sprint delivery", "Version control", "Code review", "Continuous integration"], lab: "Working system in a reviewed repository" },
      { n: "P4", hours: 14, title: "Evaluate", topics: ["Execute the evaluation plan", "Quality, latency and cost measurement", "Error analysis", "Evidence-driven iteration"], lab: "Evaluation report with baseline comparison" },
      { n: "P5", hours: 10, title: "Harden", topics: ["Guardrails", "Security review", "Failure handling", "Observability", "Documentation and runbook"], lab: "Hardened deployment and operations documentation" },
      { n: "P6", hours: 6, title: "Defend", topics: ["Written report", "Demonstration", "Panel defence of design rationale and trade-offs"], lab: "Report, demo and defence" },
    ],
  },
  {
    code: "X02", stage: "E", name: "On-the-Job Training / Industry Immersion", hours: 90, theory: 0, practical: 90,
    prereq: "Gate 5", outcome: "Delivers supervised work inside a real engineering team.",
    statutory: "Mandatory OJT (90 h)", nos: ["SSC/N9001", "SSC/N9002", "SSC/N9004", "SSC/N9006"],
    assessment: "Signed logbook · supervisor evaluation against NOS behaviours · ≥3 merged contributions · exit review",
    modules: [
      { n: "M1", hours: 6, title: "Induction", topics: ["Host organisation orientation", "Tooling access", "Security and confidentiality briefing", "Working agreement"] },
      { n: "M2", hours: 60, title: "Supervised delivery", topics: ["Assigned to a live team backlog", "Tickets delivered under a named supervisor", "Code review participation"] },
      { n: "M3", hours: 14, title: "Operational exposure", topics: ["Stand-ups and sprint ceremonies", "Incident observation", "Release participation", "Stakeholder interaction"] },
      { n: "M4", hours: 10, title: "Reflection and assessment", topics: ["Logbook", "Supervisor evaluation against NOS behaviours", "Exit review"] },
    ],
  },
];

// ---------------------------------------------------------------- tracks
export const tracks = [
  {
    id: "ai-engineer", code: "R1", name: "AI Engineer", hours: 160, theory: 48, practical: 112, anchor: true,
    tagline: "Highest 2026 demand — builds and operates production AI features",
    scope: "Applies pre-trained models and existing AI tooling to build and operate production AI features; does not train foundation models.",
    stack: ["Python", "FastAPI", "LangChain", "LangGraph", "LlamaIndex", "pgvector", "Qdrant", "LiteLLM", "Redis", "Docker", "RAGAS", "LangSmith", "GitHub Actions"],
    project: "Enterprise knowledge assistant: RAG over a multi-format corpus with enforced citations, an agentic action with approval gate, layered guardrails, evaluation harness separating retrieval and generation, documented cost and latency budget, deployed via CI/CD with eval gates, tracing and a runbook.",
    exit: "Ships a RAG/agent system end to end and defends design under cost, latency and safety constraints; 4+ repositories; interview-ready on RAG and agent system design, evaluation methodology and inference economics.",
    modules: [
      { n: "M1", hours: 40, title: "Production RAG engineering", topics: ["Query understanding and rewriting", "Multi-hop and recursive retrieval", "Reranker selection and tuning", "Chunk and index experimentation methodology", "Freshness and invalidation", "Multi-tenant corpus isolation"], lab: "Systematic retrieval-tuning study raising recall@k on a fixed corpus with documented method" },
      { n: "M2", hours: 40, title: "Agentic feature delivery", topics: ["Workflow decomposition", "Tool contract design", "Durable state", "Retries and compensating actions", "Partial failure handling", "Human-in-the-loop checkpoints", "Multi-agent supervision"], lab: "Multi-step agent with durable state, approval gate and full recovery behaviour" },
      { n: "M3", hours: 40, title: "Reliability, cost and latency engineering", topics: ["Model routing and fallback chains", "Provider outage handling", "Semantic and exact caching", "Streaming", "Concurrency and backpressure", "Rate-limit management", "Token budgeting", "Unit economics", "SLOs and error budgets"], lab: "Reduce cost per query by ≥50% and p95 latency by ≥30% at held quality" },
      { n: "M4", hours: 40, title: "Ship and operate", topics: ["Service packaging", "Configuration and secrets", "CI/CD with evaluation gates that block regression", "Canary release and rollback", "Tracing and alerting", "On-call runbooks", "Post-incident review"], lab: "Deploy behind an eval-gated pipeline; force a regression and prove the gate blocks it" },
    ],
  },
  {
    id: "genai-engineer", code: "R2", name: "GenAI / LLM Engineer", hours: 160, theory: 48, practical: 112,
    tagline: "Highest-paid specialisation — adapts, serves and evaluates models",
    scope: "Adapts, serves and evaluates language models; owns fine-tuning and inference performance.",
    stack: ["PyTorch", "Hugging Face Transformers", "Datasets", "PEFT", "TRL", "bitsandbytes", "vLLM", "TGI", "DeepEval", "Weights & Biases", "MLflow"],
    project: "Domain-adapted language model: build the dataset, fine-tune with a parameter-efficient method, self-host on an optimised serving stack, and publish a benchmark report versus the base model covering quality, latency, memory and cost, with a documented release recommendation.",
    exit: "Can fine-tune, serve and evaluate models; explains quantisation, batching and KV-cache trade-offs with measured evidence.",
    modules: [
      { n: "M1", hours: 36, title: "Dataset engineering", topics: ["Task definition", "Instruction dataset construction", "Synthetic data generation and filtering", "Quality rubrics", "Deduplication and decontamination", "Train/validation/test hygiene", "Licensing and provenance", "Annotation operations"], lab: "Construct, clean and document an instruction dataset with a held-out evaluation split" },
      { n: "M2", hours: 44, title: "Adaptation techniques", topics: ["Prompt engineering versus RAG versus fine-tuning decision framework", "Supervised fine-tuning", "LoRA and QLoRA: rank, alpha, target modules", "Preference optimisation (DPO)", "Catastrophic forgetting", "Hyperparameter selection", "Compute and memory planning"], lab: "Fine-tune an open-weights model with a parameter-efficient method and version the artefact" },
      { n: "M3", hours: 44, title: "Inference optimisation and serving", topics: ["Quantisation formats and quality impact", "KV-cache mechanics and reuse", "Paged attention", "Continuous batching", "Speculative decoding", "Tensor parallelism", "GPU memory budgeting and utilisation", "Throughput versus latency tuning", "Autoscaling and cold start"], lab: "Serve the tuned model; benchmark tokens/second, p95 latency, memory and cost per million tokens against the baseline" },
      { n: "M4", hours: 36, title: "Rigorous evaluation and release", topics: ["Task-specific benchmark design", "Base-versus-tuned comparison", "Statistical significance", "Safety and regression evaluation", "Model cards", "Staged rollout and rollback criteria"], lab: "Publish a comparative evaluation report supporting a release decision" },
    ],
  },
  {
    id: "mlops-engineer", code: "R3", name: "MLOps / LLMOps Engineer", hours: 160, theory: 48, practical: 112,
    tagline: "9.8× posting growth — owns the path to production",
    scope: "Owns the path to production and the reliability of AI systems in operation.",
    stack: ["Docker", "Kubernetes", "Helm", "MLflow", "DVC", "Airflow", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Evidently"],
    project: "Production ML platform: pipeline, registry, evaluation-gated CI/CD, canary deployment with automated rollback, drift monitoring and alerting, cost dashboard, and an operational runbook — demonstrated through an induced failure and recovery.",
    exit: "Can deploy, monitor and version models in production; cloud associate or ML certification recommended.",
    modules: [
      { n: "M1", hours: 40, title: "Containerisation and orchestration", topics: ["Image design and minimisation", "Multi-stage builds", "Registries and scanning", "Kubernetes objects: pod, deployment, service, ingress, config, secret", "Resource requests and limits", "Autoscaling", "GPU scheduling", "Node pools", "Rollout strategies"], lab: "Deploy a scalable, resource-bounded model service on Kubernetes with autoscaling" },
      { n: "M2", hours: 40, title: "Reproducibility and lineage", topics: ["Experiment tracking", "Model registry and staging transitions", "Dataset and artefact versioning", "Deterministic environments", "Orchestration DAGs", "Scheduling and backfills", "Dependency and failure handling"], lab: "Automated, versioned training-to-registry pipeline with scheduled retraining" },
      { n: "M3", hours: 40, title: "Continuous delivery for AI", topics: ["Test strategy for ML and LLM systems", "Evaluation gates in CI/CD", "Infrastructure as code", "Environment promotion", "Canary and blue-green deployment", "Automated rollback", "Secrets and supply-chain security"], lab: "Pipeline that automatically blocks promotion when evaluation scores regress" },
      { n: "M4", hours: 40, title: "Operations and observability", topics: ["Metrics, logs and traces", "Data, concept and prediction drift", "Performance and cost dashboards", "Alerting and thresholds", "SLO and error-budget management", "Incident response and post-mortems", "Capacity planning"], lab: "Drift detection with alerting plus an incident runbook and simulated incident" },
    ],
  },
  {
    id: "data-scientist", code: "R4", name: "Data Scientist", hours: 160, theory: 56, practical: 104,
    tagline: "Strongest official growth signal — BLS +34% to 2034",
    scope: "Converts business questions into measured, defensible, decision-grade analysis and models.",
    stack: ["Python", "SQL", "scikit-learn", "XGBoost", "statsmodels", "SHAP", "Prophet", "Plotly", "Streamlit", "Power BI/Tableau"],
    project: "End-to-end business analytics engagement: framing, data preparation, calibrated model with interpretability, decision dashboard, quantified recommendation with expected impact and uncertainty, delivered as a stakeholder presentation.",
    exit: "Frames a business problem, models it and communicates a decision; SQL fluency assumed.",
    modules: [
      { n: "M1", hours: 36, title: "Problem framing and metric design", topics: ["Translating business objectives into measurable targets", "Primary versus guardrail metrics", "Proxy-metric risk", "Baselines", "Cost of errors", "Decision thresholds", "Stakeholder alignment"], lab: "Convert an ambiguous business objective into a measurable analytical plan" },
      { n: "M2", hours: 44, title: "Inference and experimentation", topics: ["Sampling and estimation", "Confidence intervals", "Hypothesis testing", "Multiple comparisons", "Power and sample-size calculation", "A/B test design and analysis", "Sequential testing pitfalls", "Quasi-experiments", "Confounding and causal reasoning"], lab: "Design, power and analyse a controlled experiment; write the decision memo" },
      { n: "M3", hours: 44, title: "Advanced modelling and interpretability", topics: ["Regularisation", "Ensembles", "Time-series forecasting and seasonality", "Survival and uplift concepts", "Calibration", "Feature attribution with SHAP", "Partial dependence", "Fairness assessment", "Model limitations"], lab: "Build a calibrated, explained model with a documented limitations section" },
      { n: "M4", hours: 36, title: "Communication and decision support", topics: ["Narrative structure", "Executive summaries", "Visual encoding principles", "Dashboard design", "Uncertainty communication", "Recommendation framing", "Handling challenge from stakeholders"], lab: "Present findings and defend the recommendation to a challenging panel" },
    ],
  },
  {
    id: "data-rag-engineer", code: "R5", name: "Data & RAG Engineer", hours: 160, theory: 48, practical: 112,
    tagline: "The retrieval data layer every AI system depends on",
    scope: "Builds and operates the data and retrieval layer that AI systems depend on.",
    stack: ["Python", "SQL", "Airflow", "dbt", "Unstructured", "pgvector", "Qdrant", "OpenSearch", "sentence-transformers", "Great Expectations"],
    project: "Production retrieval platform: ingestion of a multi-format changing corpus, tested transformation layer, tuned hybrid index with reranking, access-controlled multi-tenant retrieval, evaluation harness reporting recall@k, MRR and faithfulness, plus scheduled refresh and monitoring.",
    exit: "Builds and measures a retrieval layer; defends chunking, embedding and index choices with numbers.",
    modules: [
      { n: "M1", hours: 40, title: "Ingestion at scale", topics: ["Source connectors", "Batch versus streaming", "Change data capture", "Incremental and delta sync", "Complex document parsing: tables, forms, scans", "OCR quality", "Deduplication", "Idempotent loads", "Backfill strategy"], lab: "Production ingestion pipeline over a heterogeneous, frequently changing corpus" },
      { n: "M2", hours: 40, title: "Transformation and modelling", topics: ["Dimensional modelling", "Transformation frameworks", "Testing and data contracts", "Data quality dimensions", "Lineage and cataloguing", "Schema evolution", "PII handling in pipelines"], lab: "Tested transformation layer with enforced data contracts and lineage" },
      { n: "M3", hours: 44, title: "Retrieval engineering", topics: ["Embedding model selection and benchmarking", "Chunking experimentation", "Index type and parameter tuning (HNSW/IVF)", "Metadata filtering", "Hybrid search fusion", "Reranking", "Freshness and TTL", "Multi-tenancy and access control in retrieval"], lab: "Tune an index to meet stated recall and p95 latency targets" },
      { n: "M4", hours: 36, title: "Operating the retrieval layer", topics: ["Retrieval evaluation harness", "Monitoring recall drift", "Corpus growth and re-embedding strategy", "Cost of storage and embedding", "Capacity planning", "Disaster recovery", "Corpus poisoning defence"], lab: "Retrieval evaluation and monitoring suite with scheduled refresh" },
    ],
  },
  {
    id: "solutions-architect", code: "R6", name: "AI Solutions Architect", hours: 160, theory: 64, practical: 96, advanced: true,
    tagline: "Advanced track — designs systems that hold up commercially and legally",
    scope: "Designs AI systems that satisfy functional, economic, security and regulatory constraints.",
    entry: "Gates 1–3 at ≥80% plus demonstrated communication competence.",
    stack: ["AWS Bedrock", "Azure AI", "Google Vertex AI", "Terraform", "API gateways", "LiteLLM", "IAM/KMS"],
    project: "Enterprise AI reference architecture with a working reference implementation: architecture decision records, scaling and resilience plan, quantified cost model, security and governance review, and an executive presentation defending the design.",
    exit: "Designs and defends an AI system end to end; cloud architect or AI certification recommended.",
    modules: [
      { n: "M1", hours: 40, title: "Architecture method", topics: ["Requirements and constraint capture", "Quality attributes", "Trade-off analysis", "Architecture decision records", "Reference architectures", "Build versus buy", "Managed versus self-hosted", "Vendor lock-in and exit strategy"], lab: "Produce an architecture decision record with a defended trade-off analysis" },
      { n: "M2", hours: 40, title: "Designing for scale and resilience", topics: ["Capacity planning", "Throughput modelling", "Quota and rate-limit architecture", "Multi-region and failover", "Graceful degradation", "Fallback model chains", "Queueing and asynchronous patterns", "Disaster recovery objectives"], lab: "Highly available design operating under provider quota limits, with failure-mode analysis" },
      { n: "M3", hours: 40, title: "AI economics", topics: ["Cost drivers and modelling", "Token and inference economics", "Caching tiers", "Right-sizing", "Reserved versus on-demand", "Storage and egress", "Total cost of ownership", "Chargeback and FinOps practice", "Cost guardrails"], lab: "Build a defensible cost model and TCO comparison for a stated workload volume" },
      { n: "M4", hours: 40, title: "Security, compliance and governance architecture", topics: ["Tenancy isolation", "Network and identity design", "Encryption and key management", "Data residency and sovereignty", "DPDP Act obligations", "Auditability", "Model risk governance", "Third-party assessment", "Security review process"], lab: "Complete a security and governance design review against a control checklist" },
    ],
  },
];

// ---------------------------------------------------------------- scenarios
export const scenarioLevels = [
  { level: "L1", name: "Execute", stage: "A", type: "Well-specified ticket with clear acceptance criteria", imperfect: "Nothing — baseline competence", proves: "Follows standards, delivers to specification" },
  { level: "L2", name: "Diagnose", stage: "A–B", type: "Defect report: system behaves incorrectly under specific conditions", imperfect: "Cause unknown; logs incomplete", proves: "Reproduces, isolates, fixes, regression-tests" },
  { level: "L3", name: "Optimise", stage: "B", type: "Working system that violates a stated performance or cost budget", imperfect: "Constraint is binding; naive fixes break accuracy", proves: "Profiles, quantifies trade-offs, optimises to budget (N8121)" },
  { level: "L4", name: "Build", stage: "B–C", type: "Model handed over as a notebook; must become a supported service", imperfect: "No specification, no tests, no error handling", proves: "Writes SRS/HLD/LLD, refactors, tests, deploys (N8122)" },
  { level: "L5", name: "Integrate", stage: "C", type: "Multi-component AI feature spanning retrieval, generation and tools", imperfect: "Sources conflict; upstream data changes mid-build", proves: "Systems thinking, interface contracts, evaluation design" },
  { level: "L6", name: "Operate", stage: "C–D", type: "Live incident: quality regression or outage in production", imperfect: "Under time pressure with partial information", proves: "Triage, mitigation, rollback, root cause, post-mortem" },
  { level: "L7", name: "Decide", stage: "D", type: "Stakeholder requests a change trading quality against cost or timeline", imperfect: "No correct answer; requires defensible judgement", proves: "Evidence-based recommendation and written justification" },
  { level: "L8", name: "Own", stage: "E", type: "Ambiguous business objective with no defined solution", imperfect: "Requirements must be elicited; scope must be negotiated", proves: "End-to-end ownership from ambiguity to defended delivery" },
];

export const assessmentInstruments = [
  { name: "Module quiz", frequency: "Per module", format: "Auto-graded objective, concept-bank driven", weight: 10 },
  { name: "Coding challenge", frequency: "Per module", format: "Auto-graded, hidden test cases, time-boxed", weight: 10 },
  { name: "Lab portfolio", frequency: "Continuous", format: "Rubric-graded artefacts in version control", weight: 15 },
  { name: "Stage gate", frequency: "5 gates", format: "Theory paper + extended practical", weight: 25 },
  { name: "Workplace simulation", frequency: "8 scenarios", format: "Observed performance against behavioural rubric", weight: 10 },
  { name: "Capstone", frequency: "Once", format: "Project + report + panel defence", weight: 25 },
  { name: "Professional conduct", frequency: "Continuous", format: "Punctuality, collaboration, code review, communication", weight: 5 },
];

// --------------------------------------------------------------- helpers
export const subjectsByStage = (id) => subjects.filter((s) => s.stage === id);
export const getSubject = (code) => subjects.find((s) => s.code.toLowerCase() === String(code).toLowerCase());
export const getTrack = (id) => tracks.find((t) => t.id === id);
export const stageOf = (id) => stages.find((s) => s.id === id);
