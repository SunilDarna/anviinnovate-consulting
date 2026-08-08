#!/usr/bin/env node
// Generates dist/sitemap.xml from the built output. Runs after `astro build`.
// robots.txt already advertises the sitemap, so this closes that loop.
// (@astrojs/sitemap was removed earlier — it crashed on redirect routes.)
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const SITE = "https://ai.anviinnovate.com";
const DIST = new URL("../dist", import.meta.url).pathname;

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (e === "index.html") out.push(p);
  }
  return out;
}

// Deeper pages are less important; the homepage is the anchor.
const priority = (route) => {
  if (route === "/") return "1.0";
  const depth = route.split("/").filter(Boolean).length;
  if (depth === 1) return "0.8";
  return "0.6";
};

const routes = walk(DIST)
  .map((f) => {
    const r = "/" + relative(DIST, f).split(sep).slice(0, -1).join("/");
    return r === "/" ? "/" : r + "/";
  })
  .filter((r) => !r.startsWith("/404"))
  .sort((a, b) => a.length - b.length || a.localeCompare(b));

const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (r) =>
        `  <url><loc>${SITE}${r}</loc><lastmod>${today}</lastmod>` +
        `<changefreq>${r === "/" ? "weekly" : "monthly"}</changefreq>` +
        `<priority>${priority(r)}</priority></url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync(join(DIST, "sitemap.xml"), xml);
console.log(`sitemap.xml — ${routes.length} routes`);
