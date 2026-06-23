// POST /candidate-apply — requires an authenticated Google session.
// Links the candidate profile to the signed-in user (USER#<sub>).
import { randomUUID } from "node:crypto";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, badRequest, unauthorized, getCookie } from "../lib/response.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);

  let b;
  try { b = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }
  if (!b.fullName || !b.education) return badRequest(event, "missing required fields");
  // TODO: full validation, honeypot + reCAPTCHA, resume presigned-URL handling, confirmation email.

  const candId = randomUUID();
  const createdAt = new Date().toISOString();
  await ddb.send(new PutCommand({
    TableName: TABLE,
    Item: {
      PK: `CAND#${candId}`, SK: "PROFILE",
      GSI1PK: `EMAIL#${claims.email}`, GSI1SK: `CAND#${candId}`,
      userId: claims.sub, // links to USER#<sub>
      fullName: b.fullName, email: claims.email, phone: b.phone,
      education: b.education, graduationYear: b.graduationYear, degree: b.degree,
      skills: b.skills || [], linkedin: b.linkedin, createdAt,
    },
  }));
  return ok(event, { ok: true, candidateId: candId });
};
