// Assessment + business rules in one place so they're trivially changeable.
export const PASS_THRESHOLD = 0.85;          // 85% to pass
export const QUESTIONS_PER_CATEGORY = 3;     // 3 per core category
export const EXAM_DURATION_SEC = 30 * 60;    // 30-minute server-enforced timer
export const COOLDOWN_DAYS = 30;             // unified 30-day cooldown on fail

// The 10 CORE categories the exam draws from (3 each = 30 questions).
// Must match the `category` values seeded from question-bank.json.
export const CORE_CATEGORIES = [
  "Math & Statistics",
  "Core ML",
  "Supervised Learning",
  "Unsupervised Learning",
  "Model Evaluation",
  "Neural Networks",
  "NLP",
  "GenAI & LLM",
  "Prompt Engineering",
  "Transformers & Attention",
];

export const TOTAL_QUESTIONS = CORE_CATEGORIES.length * QUESTIONS_PER_CATEGORY; // 30
