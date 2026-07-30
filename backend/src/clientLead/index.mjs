// POST /client-lead — validate, store a client demand lead, email confirmation + internal notify.
import { randomUUID } from "node:crypto";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { ok, badRequest, getCookie } from "../lib/response.mjs";
import { verifySession } from "../lib/session.mjs";
import { sendEmail } from "../lib/ses.mjs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TIMELINES = ["Immediate", "2–4 wks", "1–3 mo", "Flexible"];
const str = (v) => (typeof v === "string" ? v.trim() : "");

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  let b;
  try { b = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }

  // Honeypot: silently accept (look successful to the bot) without storing.
  if (str(b.website)) return ok(event, { ok: true });

  const company = str(b.company), name = str(b.name), email = str(b.email);
  const phone = str(b.phone), skills = str(b.skills), notes = str(b.notes);
  const timeline = str(b.timeline);
  const resourceCount = Number.parseInt(b.resourceCount, 10);

  const errors = [];
  if (company.length < 2 || company.length > 120) errors.push("company");
  if (name.length < 2 || name.length > 80) errors.push("name");
  if (!EMAIL_RE.test(email)) errors.push("email");
  if (phone && (phone.length < 5 || phone.length > 30)) errors.push("phone");
  if (skills.length < 2 || skills.length > 500) errors.push("skills");
  if (!Number.isInteger(resourceCount) || resourceCount < 1 || resourceCount > 999) errors.push("resourceCount");
  if (timeline && !TIMELINES.includes(timeline)) errors.push("timeline");
  if (notes.length > 2000) errors.push("notes");
  if (errors.length) return badRequest(event, `invalid fields: ${errors.join(", ")}`);

  const leadId = randomUUID();
  const createdAt = new Date().toISOString();

  // If the client is signed in, store the demand under their partition so it shows
  // in their account and is editable. Otherwise keep it as an anonymous lead.
  const claims = await verifySession(getCookie(event, "anvi_session"));
  const base = {
    company, name, email, phone, skills, resourceCount,
    timeline: timeline || "Flexible", notes, status: "Open", createdAt,
    GSI1PK: "LEADS", GSI1SK: createdAt,
  };
  const Item = claims
    ? { PK: claims.sub, SK: `LEAD#${leadId}`, userId: claims.sub, ...base }
    : { PK: `LEAD#${leadId}`, SK: "PROFILE", ...base };
  await ddb.send(new PutCommand({ TableName: TABLE, Item }));

  // Confirmation to the client + internal notification (best-effort).
  await sendEmail({
    to: email,
    subject: "We've received your request — Anvi Innovate",
    html: `<p>Hi ${name}, thank you for reaching out to Anvi Innovate.</p>
           <p>We've received your request for <b>${resourceCount}</b> resource(s) in <b>${skills}</b> with a <b>${timeline || "Flexible"}</b> timeline.
           Our team will review your requirements and get back to you shortly at ${email}.</p>`,
  });
  const internal = process.env.INTERNAL_NOTIFY_EMAIL;
  if (internal) {
    await sendEmail({
      to: internal,
      subject: `New client lead: ${company} (${resourceCount} × ${skills})`,
      html: `<p><b>${company}</b> — ${name} &lt;${email}&gt; ${phone}</p>
             <p>Resources: ${resourceCount} · Timeline: ${timeline || "Flexible"}</p>
             <p>Skills: ${skills}</p><p>Notes: ${notes || "—"}</p><p>Lead ID: ${leadId}</p>`,
    });
  }

  return ok(event, { ok: true, leadId });
};
