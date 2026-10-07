#!/usr/bin/env node
// Fail the build rather than ship a bundle that silently calls the wrong host.
//
// api.js falls back to "" when PUBLIC_API_BASE is unset, which produces a build
// that posts to /auth/google on the site's own origin and 404s on every
// authenticated call. That shipped once (Oct 2026) and broke sign-in, because a
// plain `npm run build` looks successful — the bundle is valid, it just points
// nowhere. So: check loudly, here.
import { existsSync, readFileSync } from "node:fs";

const REQUIRED = ["PUBLIC_API_BASE", "PUBLIC_GOOGLE_CLIENT_ID"];
const DOTENVS = [".env", ".env.local", ".env.production"];

// Astro loads .env itself, so a var may legitimately live there rather than in
// the shell. Honour both, but require a non-empty value either way.
const inDotEnv = (key) =>
  DOTENVS.some((f) => existsSync(f) && new RegExp(`^\\s*${key}\\s*=\\s*\\S`, "m").test(readFileSync(f, "utf8")));

const missing = REQUIRED.filter((k) => !process.env[k] && !inDotEnv(k));

if (missing.length) {
  console.error("\n  BUILD BLOCKED — missing required public config:\n");
  for (const k of missing) console.error(`    ${k}`);
  if (missing.includes("PUBLIC_API_BASE")) {
    console.error(`
  PUBLIC_API_BASE must be the API origin, not blank. Without it every
  authenticated call goes to the site's own origin and returns 404.`);
  }
  console.error(`
  Build via the deploy script, which resolves it from the stack:

      ./scripts/deploy-site.sh
`);
  process.exit(1);
}

const src = (k) => (process.env[k] ? process.env[k] : "(from .env)");
console.log(`  env ok — PUBLIC_API_BASE=${src("PUBLIC_API_BASE")}, PUBLIC_GOOGLE_CLIENT_ID=${process.env.PUBLIC_GOOGLE_CLIENT_ID ? "set" : "(from .env)"}`);
