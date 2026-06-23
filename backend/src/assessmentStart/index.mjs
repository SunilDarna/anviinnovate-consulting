// POST /assessment/start
// Auth-gated. Rejects during cooldown; resumes an in-flight attempt or builds a
// fresh stratified 30-question set (3 per core category, options shuffled).
import { GetCommand, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, json, unauthorized, getCookie } from "../lib/response.mjs";
import { buildAttempt } from "../lib/questions.mjs";
import { EXAM_DURATION_SEC } from "../lib/config.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);
  const userId = claims.sub; // "USER#<googleSub>"
  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();

  // 1. Cooldown gate (compare timestamps; don't rely on TTL deletion timing).
  const cool = await ddb.send(new GetCommand({
    TableName: TABLE, Key: { PK: userId, SK: "COOLDOWN" },
  }));
  if (cool.Item?.cooldownUntil && cool.Item.cooldownUntil > nowIso) {
    return json(event, 403, {
      ok: false, error: "cooldown",
      cooldownUntil: cool.Item.cooldownUntil,
      message: `Your next attempt unlocks on ${cool.Item.cooldownUntil}.`,
    });
  }

  // 2. Resume a still-valid in-flight attempt instead of reshuffling.
  const recent = await ddb.send(new QueryCommand({
    TableName: TABLE,
    KeyConditionExpression: "PK = :pk AND begins_with(SK, :p)",
    ExpressionAttributeValues: { ":pk": userId, ":p": "ATTEMPT#" },
    ScanIndexForward: false, Limit: 1,
  }));
  const last = recent.Items?.[0];
  if (last && last.status === "in_progress" && last.expiresAt > nowIso) {
    return ok(event, {
      ok: true, resumed: true,
      attemptId: last.SK.replace("ATTEMPT#", ""),
      startedAt: last.startedAt, expiresAt: last.expiresAt,
      durationSec: EXAM_DURATION_SEC,
      questions: last.clientQuestions,
    });
  }

  // 3. Build a new attempt.
  let built;
  try { built = await buildAttempt(); }
  catch (e) { console.error("buildAttempt failed", e?.message); return json(event, 503, { ok: false, error: "question bank unavailable" }); }

  const ts = String(nowMs);
  const expiresAt = new Date(nowMs + EXAM_DURATION_SEC * 1000).toISOString();
  await ddb.send(new PutCommand({
    TableName: TABLE,
    Item: {
      PK: userId, SK: `ATTEMPT#${ts}`,
      GSI1PK: "ATTEMPTS", GSI1SK: nowIso,
      status: "in_progress",
      email: claims.email, name: claims.name,
      selectedQuestionIds: built.selectedQuestionIds,
      answerKey: built.answerKey,
      clientQuestions: built.clientQuestions,
      startedAt: nowIso, expiresAt,
    },
  }));

  return ok(event, {
    ok: true, resumed: false,
    attemptId: ts, startedAt: nowIso, expiresAt,
    durationSec: EXAM_DURATION_SEC,
    questions: built.clientQuestions,
  });
};
