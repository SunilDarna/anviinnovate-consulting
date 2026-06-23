// POST /assessment/submit — TODO: server-side scoring, result email, cooldown TTL.
import { ok, json, unauthorized, getCookie } from "../lib/response.mjs";
import { verifySession } from "../lib/session.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);
  return json(event, 501, { ok: false, error: "assessment engine not yet implemented (Phase 2)" });
};
