// Session JWT — same mechanism as backend/src/lib/session.mjs, DIFFERENT issuer
// and DIFFERENT SSM key so health sessions and main-site sessions never cross.
import jwt from "jsonwebtoken";
import { getSecret } from "./ssm.mjs";
const KEY_PARAM = process.env.SESSION_KEY_PARAM || "/anviinnovate-health/auth/session_jwt_secret";
const TTL = 60 * 60 * 24 * 30;
export async function issueSession(user) {
  const key = await getSecret(KEY_PARAM);
  return jwt.sign({ sub: user.id, email: user.email, name: user.name }, key,
    { expiresIn: TTL, issuer: "anviinnovate-health" });
}
export async function verifySession(token) {
  if (!token) return null;
  try { return jwt.verify(token, await getSecret(KEY_PARAM), { issuer: "anviinnovate-health" }); }
  catch { return null; }
}
export function readCookie(event, name = "hs_session") {
  const jar = event.cookies || [];
  for (const c of jar) { const i = c.indexOf("="); if (c.slice(0, i) === name) return c.slice(i + 1); }
  return null;
}
export function sessionCookie(token, maxAge = TTL) {
  return `hs_session=${token}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}
