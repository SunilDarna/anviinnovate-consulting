// Parse the pipe-delimited questions out of the compass spec markdown into
// backend/data/question-bank.json. Reproducible: re-run whenever the spec bank grows.
//   node scripts/build-question-bank.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const specPath = resolve(root, "compass_artifact_wf-67aa6997-b6ca-4bc9-80da-9aae486e08b0_text_markdown.md");
const outPath = resolve(root, "backend/data/question-bank.json");

// Map the short per-line category labels to canonical category keys.
const CATEGORY_MAP = {
  "Math & Statistics": "Math & Statistics",
  "Core ML": "Core ML",
  "Supervised": "Supervised Learning",
  "Unsupervised": "Unsupervised Learning",
  "Evaluation": "Model Evaluation",
  "Neural Nets": "Neural Networks",
  "NLP": "NLP",
  "GenAI/LLM": "GenAI & LLM",
  "Prompt Eng": "Prompt Engineering",
  "Transformers": "Transformers & Attention",
  "Ethics": "AI Ethics",
  "Preprocessing": "Data Preprocessing",
};

// The 10 CORE categories the 30-question exam draws 3 each from.
const CORE = new Set([
  "Math & Statistics", "Core ML", "Supervised Learning", "Unsupervised Learning",
  "Model Evaluation", "Neural Networks", "NLP", "GenAI & LLM",
  "Prompt Engineering", "Transformers & Attention",
]);

const lines = readFileSync(specPath, "utf8").split("\n");
const questions = [];
const seenIds = new Set();

for (const raw of lines) {
  const line = raw.trim();
  // Question lines look like: "12 | Category | Q | A) .. | B) .. | C) .. | D) .. | C | explanation"
  if (!/^\d+\s*\|/.test(line)) continue;
  // Split on " | " (space-pipe-space) so literal pipes like P(A|B) survive.
  const parts = line.split(/\s+\|\s+/).map((s) => s.trim());
  if (parts.length < 9) continue;
  const [id, rawCat, question, a, b, c, d, correct, ...rest] = parts;
  const explanation = rest.join(" | ").trim();
  const category = CATEGORY_MAP[rawCat];
  if (!category) { console.warn(`skip: unknown category "${rawCat}" (id ${id})`); continue; }
  if (!/^[A-D]$/.test(correct)) { console.warn(`skip: bad correct "${correct}" (id ${id})`); continue; }
  if (seenIds.has(id)) { console.warn(`skip: dup id ${id}`); continue; }
  seenIds.add(id);
  const strip = (s) => s.replace(/^[A-D]\)\s*/, "").trim();
  questions.push({
    id: `q${String(id).padStart(4, "0")}`,
    category,
    question,
    options: { A: strip(a), B: strip(b), C: strip(c), D: strip(d) },
    correct_answer: correct,
    explanation,
  });
}

// Report coverage per category.
const byCat = {};
for (const q of questions) byCat[q.category] = (byCat[q.category] || 0) + 1;
console.log(`Parsed ${questions.length} questions across ${Object.keys(byCat).length} categories:`);
for (const [cat, n] of Object.entries(byCat).sort()) {
  const tag = CORE.has(cat) ? (n >= 3 ? "ok" : "TOO FEW") : "bonus";
  console.log(`  ${cat.padEnd(26)} ${String(n).padStart(3)}  [${tag}]`);
}
const coreMissing = [...CORE].filter((c) => !byCat[c] || byCat[c] < 3);
if (coreMissing.length) {
  console.error(`\nERROR: core categories with <3 questions: ${coreMissing.join(", ")}`);
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(questions, null, 2) + "\n");
console.log(`\nWrote ${questions.length} questions -> ${outPath}`);
