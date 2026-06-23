// Sign/verify our own session JWT. Key comes from SSM (cached).
import jwt from "jsonwebtoken";
import { getSecret } from "./ssm.mjs";

const SESSION_KEY_PARAM = process.env.SESSION_KEY_PARAM || "/anviinnovate/auth/session_jwt_secret";
const TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

export async function issueSession(user) {
  const key = await getSecret(SESSION_KEY_PARAM);
  return jwt.sign(
    { sub: user.id, email: user.email, name: user.name },
    key,
    { expiresIn: TTL_SECONDS, issuer: "anviinnovate" }
  );
}

export async function verifySession(token) {
  if (!token) return null;
  try {
    const key = await getSecret(SESSION_KEY_PARAM);
    return jwt.verify(token, key, { issuer: "anviinnovate" });
  } catch {
    return null;
  }
}
