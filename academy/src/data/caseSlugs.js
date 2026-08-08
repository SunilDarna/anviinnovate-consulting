// Single source of truth for case-study slugs, so scenario pages and case-study
// pages can never drift apart. Same org can appear twice in a unit (Uber in U3,
// Zillow in U4), so collisions get a numeric suffix in stable array order.
import cases from "./case-studies.json";

// Lowercase throughout: S3 + CloudFront paths are case-sensitive, and scenario
// URLs are already lowercase, so mixed case here would be a trap.
const base = (c) =>
  `${c.unit}-${c.org}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80)
    .replace(/-$/, "");

const seen = new Map();
const bySlug = new Map();
const byIndex = [];

for (const c of cases.cases) {
  const b = base(c);
  const n = (seen.get(b) || 0) + 1;
  seen.set(b, n);
  const slug = n === 1 ? b : `${b}-${n}`;
  byIndex.push(slug);
  bySlug.set(slug, c);
}

export const allCases = cases.cases;
export const gaps = cases.gaps;
export const caseMeta = cases.meta;
export const slugFor = (c) => byIndex[cases.cases.indexOf(c)];
export const caseEntries = cases.cases.map((c, i) => ({ slug: byIndex[i], c }));

// Resolve the case a scenario was built from. Source URL is the join key, but the
// same URL can back several cases; prefer one in the same unit.
export function caseForScenario(s) {
  const hits = caseEntries.filter((e) => e.c.sourceUrl === s.url);
  if (!hits.length) return null;
  return hits.find((e) => e.c.unit === s.unit) || hits[0];
}
