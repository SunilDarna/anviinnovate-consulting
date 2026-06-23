// Shared HTTP helpers: CORS, JSON responses, cookie parsing.
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ||
  "https://anviinnovate.com,https://www.anviinnovate.com,http://localhost:4321")
  .split(",").map((s) => s.trim());

export function corsHeaders(event) {
  const origin = event?.headers?.origin || event?.headers?.Origin || "";
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Vary": "Origin",
  };
}

export function json(event, statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", ...corsHeaders(event), ...extraHeaders },
    body: JSON.stringify(body),
  };
}

export function ok(event, body, extraHeaders) { return json(event, 200, body, extraHeaders); }
export function badRequest(event, msg) { return json(event, 400, { ok: false, error: msg }); }
export function unauthorized(event, msg = "unauthorized") { return json(event, 401, { ok: false, error: msg }); }

// Read a cookie. HTTP API (payload format 2.0) delivers cookies in the
// `event.cookies` ARRAY — not in event.headers.cookie — so check that first,
// then fall back to the Cookie header for other integrations / local testing.
export function getCookie(event, name) {
  if (Array.isArray(event?.cookies)) {
    for (const c of event.cookies) {
      const idx = c.indexOf("=");
      const k = (idx === -1 ? c : c.slice(0, idx)).trim();
      if (k === name) return decodeURIComponent(c.slice(idx + 1));
    }
  }
  const header = event?.headers?.cookie || event?.headers?.Cookie || "";
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k.trim() === name) return decodeURIComponent(v.join("="));
  }
  return null;
}

// Build a Set-Cookie string for the session cookie (HttpOnly, Secure, SameSite=Lax).
export function sessionCookie(value, { maxAgeSec = 60 * 60 * 24 * 30, clear = false } = {}) {
  const domain = process.env.COOKIE_DOMAIN || "anviinnovate.com";
  const attrs = [
    `anvi_session=${value}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    `Domain=${domain}`,
    `Max-Age=${clear ? 0 : maxAgeSec}`,
  ];
  return attrs.join("; ");
}
