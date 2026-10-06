// Response helpers for HTTP API payload v2. First-party behind CloudFront: no CORS needed.
export const json = (status, body, cookies) => ({
  statusCode: status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  ...(cookies ? { cookies } : {}),
  body: JSON.stringify(body),
});
export const ok = (b, c) => json(200, b, c);
export const bad = (m) => json(400, { error: m });
export const unauth = (m = "sign in required") => json(401, { error: m });
export const notFound = () => json(404, { error: "not found" });
export const oops = (m = "internal error") => json(500, { error: m });
