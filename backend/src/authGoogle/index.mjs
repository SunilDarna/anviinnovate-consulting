// POST /auth/google
// Body: { code } — authorization code from GIS code model (PKCE handled by GIS).
// Exchanges the code, verifies the ID token, upserts the user, sets session cookie.
import { OAuth2Client } from "google-auth-library";
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { getSecret } from "../lib/ssm.mjs";
import { issueSession } from "../lib/session.mjs";
import { ok, badRequest, unauthorized, json, sessionCookie } from "../lib/response.mjs";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET_PARAM = process.env.GOOGLE_SECRET_PARAM || "/anviinnovate/google/client_secret";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  let body;
  try { body = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }
  const code = body.code;
  if (!code) return badRequest(event, "missing code");

  const clientSecret = await getSecret(CLIENT_SECRET_PARAM);
  // 'postmessage' is the redirect_uri used by the GIS popup code model.
  const client = new OAuth2Client(CLIENT_ID, clientSecret, "postmessage");

  let tokens;
  try {
    ({ tokens } = await client.getToken(code));
  } catch (e) {
    console.error("token exchange failed", e?.message);
    return unauthorized(event, "code exchange failed");
  }

  let payload;
  try {
    const ticket = await client.verifyIdToken({ idToken: tokens.id_token, audience: CLIENT_ID });
    payload = ticket.getPayload();
  } catch (e) {
    console.error("id token verify failed", e?.message);
    return unauthorized(event, "id token verification failed");
  }

  if (!payload?.email_verified) return unauthorized(event, "email not verified");

  const now = new Date().toISOString();
  const user = {
    id: `USER#${payload.sub}`,
    email: payload.email,
    name: payload.name || payload.email,
    picture: payload.picture || null,
  };

  // Upsert: create profile on first login, else just bump lastLoginAt.
  await ddb.send(new UpdateCommand({
    TableName: TABLE,
    Key: { PK: user.id, SK: "PROFILE" },
    UpdateExpression:
      "SET email = :e, emailVerified = :ev, #nm = :n, picture = :p, provider = :pr, " +
      "GSI1PK = :g1, GSI1SK = :g2, lastLoginAt = :now, createdAt = if_not_exists(createdAt, :now)",
    ExpressionAttributeNames: { "#nm": "name" },
    ExpressionAttributeValues: {
      ":e": user.email, ":ev": true, ":n": user.name, ":p": user.picture,
      ":pr": "google", ":g1": `EMAIL#${user.email}`, ":g2": user.id, ":now": now,
    },
  }));

  const session = await issueSession(user);
  return json(event, 200, { ok: true, user }, { "Set-Cookie": sessionCookie(session) });
};
