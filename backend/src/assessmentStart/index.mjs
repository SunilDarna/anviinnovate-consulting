// POST /assessment/start — TODO: cooldown check + stratified Fisher-Yates selection.
// Stub returns 501 until the question bank is seeded and selection is implemented.
import { ok, json, unauthorized, getCookie } from "../lib/response.mjs";
import { verifySession } from "../lib/session.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);
  return json(event, 501, { ok: false, error: "assessment engine not yet implemented (Phase 2)" });
};
