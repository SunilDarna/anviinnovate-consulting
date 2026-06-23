// Tiny API client. Always sends cookies (credentials: 'include') so the
// session cookie travels with authenticated requests.
const BASE = import.meta.env.PUBLIC_API_BASE || "";

export async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    credentials: "include",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}
