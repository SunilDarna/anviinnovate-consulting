// POST /profile — update a few self-service fields on the user's profile.
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, badRequest, unauthorized, getCookie } from "../lib/response.mjs";

const str = (v) => (typeof v === "string" ? v.trim() : "");
const FIELDS = { displayName: 80, phone: 30, company: 120, linkedin: 200 };

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);

  let b;
  try { b = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }

  const sets = [], names = {}, values = {};
  for (const [f, max] of Object.entries(FIELDS)) {
    if (b[f] === undefined) continue;
    const v = str(b[f]);
    if (v.length > max) return badRequest(event, `${f} too long`);
    names[`#${f}`] = f; values[`:${f}`] = v || null; sets.push(`#${f} = :${f}`);
  }
  if (!sets.length) return badRequest(event, "no fields to update");

  const res = await ddb.send(new UpdateCommand({
    TableName: TABLE, Key: { PK: claims.sub, SK: "PROFILE" },
    UpdateExpression: "SET " + sets.join(", "),
    ExpressionAttributeNames: names, ExpressionAttributeValues: values,
    ReturnValues: "ALL_NEW",
  }));
  const p = res.Attributes || {};
  return ok(event, { ok: true, user: { displayName: p.displayName || null, phone: p.phone || null, company: p.company || null, linkedin: p.linkedin || null } });
};
