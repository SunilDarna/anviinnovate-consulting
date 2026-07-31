// GET /me/overview — client account data: user profile + their hiring demands.
import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, unauthorized, getCookie } from "../lib/response.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);
  const userId = claims.sub;

  const part = await ddb.send(new QueryCommand({
    TableName: TABLE,
    KeyConditionExpression: "PK = :pk",
    ExpressionAttributeValues: { ":pk": userId },
  }));
  const items = part.Items || [];
  const profile = items.find((i) => i.SK === "PROFILE") || {};
  const leads = items.filter((i) => i.SK.startsWith("LEAD#"))
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  return ok(event, {
    ok: true,
    user: {
      id: profile.PK || userId,
      email: profile.email || claims.email,
      name: profile.name || claims.name,
      picture: profile.picture || null,
      displayName: profile.displayName || null,
      phone: profile.phone || null,
      company: profile.company || null,
      linkedin: profile.linkedin || null,
    },
    leads: leads.map((l) => ({
      leadId: l.SK.replace("LEAD#", ""),
      company: l.company, skills: l.skills, resourceCount: l.resourceCount,
      timeline: l.timeline, notes: l.notes || "", status: l.status || "Open",
      createdAt: l.createdAt,
    })),
  });
};
