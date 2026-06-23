// POST /candidate-apply — requires an authenticated Google session.
// Validates, stores the candidate profile linked to USER#<sub>, emails a confirmation.
import { randomUUID } from "node:crypto";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
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
  const phone = str(b.phone), degree = str(b.degree), linkedin = str(b.linkedin);
  const gradYear = b.graduationYear ? Number.parseInt(b.graduationYear, 10) : null;
  const skills = Array.isArray(b.skills) ? b.skills.map(str).filter(Boolean).slice(0, 50)
    : str(b.skills) ? str(b.skills).split(",").map((s) => s.trim()).filter(Boolean) : [];

  const errors = [];
  if (fullName.length < 2 || fullName.length > 100) errors.push("fullName");
  if (!EDUCATION.includes(education)) errors.push("education");
  if (gradYear !== null && (gradYear < 1970 || gradYear > 2100)) errors.push("graduationYear");
  if (errors.length) return badRequest(event, `invalid fields: ${errors.join(", ")}`);

  const candId = randomUUID();
  const createdAt = new Date().toISOString();
  await ddb.send(new PutCommand({
    TableName: TABLE,
    Item: {
      PK: `CAND#${candId}`, SK: "PROFILE",
      GSI1PK: `EMAIL#${claims.email}`, GSI1SK: `CAND#${candId}`,
      userId: claims.sub, // links to USER#<sub>
      fullName, email: claims.email, phone,
      education, graduationYear: gradYear, degree,
      skills, linkedin, createdAt,
    },
  }));

  await sendEmail({
    to: claims.email,
    subject: "Application received — Anvi Innovate",
    html: `<p>Hi ${fullName}, we've received your application to Anvi Innovate.</p>
           <p><b>Next step:</b> take the AI/ML Foundations Assessment from your account dashboard.
           It's 30 questions, 30 minutes, and you need 85% to pass.</p>`,
  });

  return ok(event, { ok: true, candidateId: candId });
};
