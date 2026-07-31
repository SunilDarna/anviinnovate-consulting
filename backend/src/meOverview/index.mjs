// GET /me/overview — role-based account data in one call:
//  - user profile (incl. role)
//  - candidate profile (skills, preferences, resume, status) — for candidates
//  - owned client demands — for clients
import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, unauthorized, getCookie } from "../lib/response.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);
  const userId = claims.sub;

  // One query over the user's partition returns PROFILE, CANDIDATE_PROFILE, LEAD#*.
  const part = await ddb.send(new QueryCommand({
    TableName: TABLE,
    KeyConditionExpression: "PK = :pk",
    ExpressionAttributeValues: { ":pk": userId },
  }));
  const items = part.Items || [];
  const profile = items.find((i) => i.SK === "PROFILE") || {};
  const cand = items.find((i) => i.SK === "CANDIDATE_PROFILE") || null;
  const leads = items.filter((i) => i.SK.startsWith("LEAD#"))
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  // Role: explicit on profile, else inferred (candidate if a candidate profile
  // exists, client if they have demands), else null (prompt the user to choose).
  const role = profile.role || (cand ? "candidate" : (leads.length ? "client" : null));

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
      role,
    },
    candidate: cand ? {
      status: cand.status || "applied",
      fullName: cand.fullName, education: cand.education,
      graduationYear: cand.graduationYear || null,
      skills: cand.skills || [], preferences: cand.preferences || "",
      resumeName: cand.resumeName || null, hasResume: !!cand.resumeKey,
      linkedin: cand.linkedin || null, updatedAt: cand.updatedAt,
    } : null,
    leads: leads.map((l) => ({
      leadId: l.SK.replace("LEAD#", ""),
      company: l.company, skills: l.skills, resourceCount: l.resourceCount,
      timeline: l.timeline, notes: l.notes || "", status: l.status || "Open",
      createdAt: l.createdAt,
    })),
  });
};
