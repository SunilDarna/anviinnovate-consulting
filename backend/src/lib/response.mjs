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

// Parse a cookie value out of the Cookie header.
export function getCookie(event, name) {
  const header = event?.headers?.cookie || event?.headers?.Cookie || "";
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
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
