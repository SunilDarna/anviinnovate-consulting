// POST /candidate-apply — create/update the candidate profile for the signed-in user.
// Stores skills, role preferences and an (optional) uploaded resume key. Upsert:
// keyed by the user, so re-submitting updates the same profile.
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, badRequest, unauthorized, getCookie } from "../lib/response.mjs";
import { sendEmail } from "../lib/ses.mjs";

const EDUCATION = ["Fresher", "Experienced"];
const str = (v) => (typeof v === "string" ? v.trim() : "");

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);

  let b;
  try { b = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }

  const fullName = str(b.fullName), education = str(b.education);
  const phone = str(b.phone), linkedin = str(b.linkedin), preferences = str(b.preferences);
  const resumeKey = str(b.resumeKey), resumeName = str(b.resumeName);
  const gradYear = b.graduationYear ? Number.parseInt(b.graduationYear, 10) : null;
  const skills = Array.isArray(b.skills)
    ? b.skills.map(str).filter(Boolean).slice(0, 50)
    : (str(b.skills) ? str(b.skills).split(",").map((s) => s.trim()).filter(Boolean) : []);

  const errors = [];
  if (fullName.length < 2 || fullName.length > 100) errors.push("fullName");
  if (!EDUCATION.includes(education)) errors.push("education");
  if (gradYear !== null && (gradYear < 1970 || gradYear > 2100)) errors.push("graduationYear");
  if (errors.length) return badRequest(event, `invalid fields: ${errors.join(", ")}`);

  const now = new Date().toISOString();
  const isFirst = { firstApply: false };

  // Upsert candidate profile under the user's partition (single profile per user).
  await ddb.send(new UpdateCommand({
    TableName: TABLE,
    Key: { PK: claims.sub, SK: "CANDIDATE_PROFILE" },
    UpdateExpression:
      "SET fullName = :fn, email = :e, phone = :ph, education = :ed, graduationYear = :gy, " +
      "linkedin = :li, skills = :sk, preferences = :pr, #st = :status, updatedAt = :now, " +
      "createdAt = if_not_exists(createdAt, :now)" +
      (resumeKey ? ", resumeKey = :rk, resumeName = :rn" : ""),
    ExpressionAttributeNames: { "#st": "status" },
    ExpressionAttributeValues: {
      ":fn": fullName, ":e": claims.email, ":ph": phone, ":ed": education, ":gy": gradYear,
      ":li": linkedin, ":sk": skills, ":pr": preferences, ":status": "applied", ":now": now,
      ...(resumeKey ? { ":rk": resumeKey, ":rn": resumeName || "resume" } : {}),
    },
  }));

  // Also mark the user's role as candidate.
  await ddb.send(new UpdateCommand({
    TableName: TABLE, Key: { PK: claims.sub, SK: "PROFILE" },
    UpdateExpression: "SET #r = if_not_exists(#r, :cand)",
    ExpressionAttributeNames: { "#r": "role" },
    ExpressionAttributeValues: { ":cand": "candidate" },
  }));

  await sendEmail({
    to: claims.email,
    subject: "Profile received — Anvi Innovate",
    html: `<p>Dear ${fullName},</p>
           <p>Thank you — your candidate profile has been received. Our team will review it and get back to you about deployment opportunities.</p>
           <p>To strengthen your foundations, explore courses and certifications with our partner <a href="https://bxup.in/">bxup.in</a>.</p>
           <p>Best regards,<br/>The Anvi Innovate Team</p>`,
  });

  return ok(event, { ok: true, status: "applied" });
};
