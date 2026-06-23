// POST /client-lead — store a client demand lead + (TODO) SES emails.
import { randomUUID } from "node:crypto";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { ok, badRequest } from "../lib/response.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  let b;
  try { b = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }

  // Honeypot: if filled, silently accept without storing.
  if (b.website) return ok(event, { ok: true });
  if (!b.company || !b.name || !b.email || !b.skills) return badRequest(event, "missing required fields");
  // TODO: reCAPTCHA v3 verification, fuller validation, SES confirmation + internal notify.

  const leadId = randomUUID();
  const createdAt = new Date().toISOString();
  await ddb.send(new PutCommand({
    TableName: TABLE,
    Item: {
      PK: `LEAD#${leadId}`, SK: "PROFILE", GSI1PK: "LEADS", GSI1SK: createdAt,
      company: b.company, name: b.name, email: b.email, phone: b.phone,
      skills: b.skills, resourceCount: b.resourceCount, timeline: b.timeline,
      notes: b.notes, createdAt,
    },
  }));
  return ok(event, { ok: true, leadId });
};
