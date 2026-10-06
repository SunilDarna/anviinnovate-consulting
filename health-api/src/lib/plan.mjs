// Loads the compiled plan artifacts (bundled with the function) once per container,
// and builds a tiny lexical index over the chunks for retrieval.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const dataDir = join(dirname(fileURLToPath(import.meta.url)), "..", "data");
export const PLAN = JSON.parse(readFileSync(join(dataDir, "plan.json"), "utf8"));
export const SAFETY = JSON.parse(readFileSync(join(dataDir, "safety.json"), "utf8"));
const CHUNKS = JSON.parse(readFileSync(join(dataDir, "chunks.json"), "utf8"));

const tokenize = (s) => (s.toLowerCase().match(/[a-z0-9§.]+/g) || []).filter(t => t.length > 2);
const df = new Map();
const docs = CHUNKS.map((c) => {
  const tf = new Map();
  for (const t of tokenize(c.h3 + " " + c.title + " " + c.text)) tf.set(t, (tf.get(t) || 0) + 1);
  for (const t of tf.keys()) df.set(t, (df.get(t) || 0) + 1);
  return { c, tf };
});
export function retrieve(query, k = 4) {
  const q = tokenize(query);
  const N = docs.length;
  return docs
    .map((d) => {
      let s = 0;
      for (const t of q) {
        const f = d.tf.get(t);
        if (f) s += (1 + Math.log(f)) * Math.log(N / (1 + (df.get(t) || 0)));
        if (d.c.h3.toLowerCase().includes(t)) s += 2; // heading boost
      }
      return { s, c: d.c };
    })
    .sort((a, b) => b.s - a.s)
    .slice(0, k)
    .filter((x) => x.s > 0)
    .map((x) => x.c);
}
