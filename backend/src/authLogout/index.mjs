// POST /auth/logout — clear the session cookie.
import { json, ok, sessionCookie } from "../lib/response.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  return json(event, 200, { ok: true }, { "Set-Cookie": sessionCookie("", { clear: true }) });
};
