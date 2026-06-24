// POST /assessment/submit  body: { attemptId, answers: { [qid]: "A".."D" } }
// Scores server-side against the stored answer key, records the result, emails it,
// and on fail sets a 30-day cooldown (TTL). Idempotent: re-submitting returns the result.
import { GetCommand, UpdateCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, json, badRequest, unauthorized, getCookie } from "../lib/response.mjs";
import { sendEmail } from "../lib/ses.mjs";
import { PASS_THRESHOLD, COOLDOWN_DAYS, isCooldownBypassed } from "../lib/config.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);
  const userId = claims.sub;

  let b;
  try { b = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }
  if (!b.attemptId) return badRequest(event, "missing attemptId");
  const answers = b.answers && typeof b.answers === "object" ? b.answers : {};

  const got = await ddb.send(new GetCommand({
    TableName: TABLE, Key: { PK: userId, SK: `ATTEMPT#${b.attemptId}` },
  }));
  const attempt = got.Item;
  if (!attempt) return json(event, 404, { ok: false, error: "attempt not found" });

  // Idempotent: already scored → return the stored result.
  if (attempt.status === "submitted") {
    return ok(event, {
      ok: true, alreadySubmitted: true,
      score: attempt.scorePct, correct: attempt.correct, total: attempt.total,
      pass: attempt.pass, cooldownUntil: attempt.cooldownUntil || null,
    });
  }

  const key = attempt.answerKey || {};
  const ids = attempt.selectedQuestionIds || Object.keys(key);
  const total = ids.length;
  let correct = 0;
  for (const qid of ids) if (answers[qid] && answers[qid] === key[qid]) correct++;

  const score = total ? correct / total : 0;
  const scorePct = Math.round(score * 100);
  const pass = score >= PASS_THRESHOLD;
  const nowMs = Date.now();
  const submittedAt = new Date(nowMs).toISOString();
  const expired = attempt.expiresAt && submittedAt > attempt.expiresAt;

  let cooldownUntil = null;
  if (!pass && !isCooldownBypassed(claims.email)) {
    cooldownUntil = new Date(nowMs + COOLDOWN_DAYS * 86400 * 1000).toISOString();
    const cooldownTtl = Math.floor(nowMs / 1000) + COOLDOWN_DAYS * 86400;
    await ddb.send(new PutCommand({
      TableName: TABLE,
      Item: { PK: userId, SK: "COOLDOWN", cooldownUntil, ttl: cooldownTtl, attemptId: b.attemptId },
    }));
  }

  // Mark attempt submitted.
  await ddb.send(new UpdateCommand({
    TableName: TABLE, Key: { PK: userId, SK: `ATTEMPT#${b.attemptId}` },
    UpdateExpression: "SET #st = :s, correct = :c, #tot = :t, scorePct = :p, #pass = :pass, submittedAt = :sa, #exp = :ex, submittedAnswers = :ans, cooldownUntil = :cu",
    ExpressionAttributeNames: { "#st": "status", "#tot": "total", "#pass": "pass", "#exp": "expired" },
    ExpressionAttributeValues: {
      ":s": "submitted", ":c": correct, ":t": total, ":p": scorePct, ":pass": pass,
      ":sa": submittedAt, ":ex": !!expired, ":ans": answers, ":cu": cooldownUntil,
    },
  }));

  // Result record.
  await ddb.send(new PutCommand({
    TableName: TABLE,
    Item: {
      PK: userId, SK: `RESULT#${nowMs}`,
      attemptId: b.attemptId, scorePct, correct, total, pass,
      email: claims.email, name: claims.name, submittedAt, cooldownUntil,
    },
  }));

  // Result email (best-effort).
  const name = claims.name || "there";
  if (pass) {
    await sendEmail({
      to: claims.email,
      subject: "AI/ML Foundations Assessment — Result: Passed",
      html: `<p>Dear ${name},</p>
             <p>Congratulations. You have <b>passed</b> the Anvi Innovate AI/ML Foundations Assessment with a score of <b>${scorePct}%</b> (passing score: 85%).</p>
             <p>Our team will be in touch shortly with the next steps for training and deployment.</p>
             <p>We look forward to working with you.</p>
             <p>Warm regards,<br/>The Anvi Innovate Team</p>`,
    });
  } else {
    const retryLine = cooldownUntil
      ? `<p>You are welcome to try again after <b>${COOLDOWN_DAYS} days</b>. Your next attempt unlocks on <b>${new Date(cooldownUntil).toDateString()}</b>.</p>`
      : `<p>You are welcome to prepare and try the assessment again.</p>`;
    await sendEmail({
      to: claims.email,
      subject: "AI/ML Foundations Assessment — Result",
      html: `<p>Dear ${name},</p>
             <p>Thank you for completing the Anvi Innovate AI/ML Foundations Assessment. Your score was <b>${scorePct}%</b>; the passing score is 85%, so you have not cleared the assessment on this attempt.</p>
             ${retryLine}
             <p>In the meantime, we encourage you to prepare using our training and certification path, offered in collaboration with ai-certify.in.</p>
             <p>Best regards,<br/>The Anvi Innovate Team</p>`,
    });
  }

  return ok(event, { ok: true, score: scorePct, correct, total, pass, cooldownUntil, expired: !!expired });
};
