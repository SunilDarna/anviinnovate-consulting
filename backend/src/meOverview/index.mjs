// GET /me/overview — everything the account dashboard needs in one call:
// the user profile, candidate application + assessment status, and owned client demands.
import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, unauthorized, getCookie } from "../lib/response.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);
  const userId = claims.sub;

  // One query over the user's partition returns PROFILE, ATTEMPT#*, RESULT#*, LEAD#*, COOLDOWN.
  const part = await ddb.send(new QueryCommand({
    TableName: TABLE,
    KeyConditionExpression: "PK = :pk",
    ExpressionAttributeValues: { ":pk": userId },
  }));
  const items = part.Items || [];
  const profile = items.find((i) => i.SK === "PROFILE") || {};
  const attempts = items.filter((i) => i.SK.startsWith("ATTEMPT#"));
  const results = items.filter((i) => i.SK.startsWith("RESULT#"))
    .sort((a, b) => (a.SK < b.SK ? 1 : -1));
  const cooldown = items.find((i) => i.SK === "COOLDOWN") || null;
  const leads = items.filter((i) => i.SK.startsWith("LEAD#"))
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  // Candidate profile (by verified email via GSI1).
  let candidate = null;
  if (claims.email) {
    const cq = await ddb.send(new QueryCommand({
      TableName: TABLE, IndexName: "GSI1",
      KeyConditionExpression: "GSI1PK = :e",
      ExpressionAttributeValues: { ":e": `EMAIL#${claims.email}` },
    }));
    candidate = (cq.Items || []).find((i) => String(i.PK).startsWith("CAND#") && i.SK === "PROFILE") || null;
  }

  const latestResult = results[0] || null;
  const nowIso = new Date().toISOString();
  const inCooldown = !!(cooldown?.cooldownUntil && cooldown.cooldownUntil > nowIso);

  // Derive a candidate status string for the UI.
  let candidateStatus = null;
  if (candidate || attempts.length || latestResult) {
    if (latestResult?.pass) candidateStatus = "passed";
    else if (latestResult) candidateStatus = inCooldown ? "cooldown" : "retry_available";
    else if (attempts.some((a) => a.status === "in_progress")) candidateStatus = "in_progress";
    else candidateStatus = "applied";
  }

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
    candidate: candidate ? {
      status: candidateStatus,
      fullName: candidate.fullName, education: candidate.education,
      skills: candidate.skills || [], createdAt: candidate.createdAt,
    } : (candidateStatus ? { status: candidateStatus } : null),
    assessment: {
      attempts: attempts.length,
      latest: latestResult ? {
        scorePct: latestResult.scorePct, pass: latestResult.pass,
        submittedAt: latestResult.submittedAt, cooldownUntil: latestResult.cooldownUntil || null,
      } : null,
      inCooldown, cooldownUntil: cooldown?.cooldownUntil || null,
    },
    leads: leads.map((l) => ({
      leadId: l.SK.replace("LEAD#", ""),
      company: l.company, skills: l.skills, resourceCount: l.resourceCount,
      timeline: l.timeline, notes: l.notes || "", status: l.status || "Open",
      createdAt: l.createdAt,
    })),
  });
};
