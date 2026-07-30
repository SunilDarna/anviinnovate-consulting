// POST /client-lead/update — edit or change the status of a demand the signed-in
// client owns. Ownership is inherent: the lead lives under the user's partition.
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, badRequest, json, unauthorized, getCookie } from "../lib/response.mjs";

const STATUSES = ["Open", "Filled", "Cancelled"];
const str = (v) => (typeof v === "string" ? v.trim() : "");

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);

  let b;
  try { b = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }
  const leadId = str(b.leadId);
  if (!leadId) return badRequest(event, "missing leadId");

  const sets = [], names = {}, values = {};
  const add = (nameKey, name, val) => { names[nameKey] = name; values[`:${name.replace(/[^a-zA-Z]/g, "")}`] = val; sets.push(`${nameKey} = :${name.replace(/[^a-zA-Z]/g, "")}`); };

  if (b.status !== undefined) {
    if (!STATUSES.includes(b.status)) return badRequest(event, "invalid status");
    names["#st"] = "status"; values[":st"] = b.status; sets.push("#st = :st");
  }
  if (b.skills !== undefined) { const v = str(b.skills); if (v.length < 2 || v.length > 500) return badRequest(event, "invalid skills"); values[":sk"] = v; sets.push("skills = :sk"); }
  if (b.resourceCount !== undefined) { const n = Number.parseInt(b.resourceCount, 10); if (!Number.isInteger(n) || n < 1 || n > 999) return badRequest(event, "invalid resourceCount"); values[":rc"] = n; sets.push("resourceCount = :rc"); }
  if (b.timeline !== undefined) { values[":tl"] = str(b.timeline); sets.push("timeline = :tl"); }
  if (b.notes !== undefined) { const v = str(b.notes); if (v.length > 2000) return badRequest(event, "notes too long"); values[":no"] = v; sets.push("notes = :no"); }
  if (!sets.length) return badRequest(event, "no fields to update");

  values[":now"] = new Date().toISOString(); sets.push("updatedAt = :now");

  try {
    const res = await ddb.send(new UpdateCommand({
      TableName: TABLE, Key: { PK: claims.sub, SK: `LEAD#${leadId}` },
      UpdateExpression: "SET " + sets.join(", "),
      ConditionExpression: "attribute_exists(SK)",
      ...(Object.keys(names).length ? { ExpressionAttributeNames: names } : {}),
      ExpressionAttributeValues: values,
      ReturnValues: "ALL_NEW",
    }));
    const l = res.Attributes || {};
    return ok(event, { ok: true, lead: { leadId, company: l.company, skills: l.skills, resourceCount: l.resourceCount, timeline: l.timeline, notes: l.notes || "", status: l.status || "Open" } });
  } catch (e) {
    if (e.name === "ConditionalCheckFailedException") return json(event, 404, { ok: false, error: "demand not found" });
    throw e;
  }
};
