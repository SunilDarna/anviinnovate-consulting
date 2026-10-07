/**
 * Portal API — one Lambda, internal routing.
 *
 * Deliberately a single function rather than eight: a two-person team deploys
 * and debugs one thing, and every route shares the same auth and role check.
 *
 * Model note: Anvi does NOT employ the engineers. Partners do. Anvi introduces
 * and earns commission, so there is no payroll, no bench cost and no contract
 * labour supply here. The data model reflects that — a Placement records a
 * commission, not a margin on billing.
 *
 * Single-table keys (table: AnviInnovate)
 *   USER#<sub>      PROFILE            role: client | partner | admin
 *   REQ#<id>        META               a client requirement
 *   REQ#<id>        SUB#<subId>        an engineer submitted against it
 *   PARTNER#<sub>   ENG#<id>           an engineer the partner represents
 *   PLACEMENT#<id>  META               a closed placement + commission
 *   GSI1 "REQS"        / <createdAt>   admin: every requirement, newest first
 *   GSI1 "PLACEMENTS"  / <createdAt>   admin: revenue view
 *   GSI1 "OPENREQS"    / <createdAt>   partners: requirements open to the network
 *   GSI1 USER#<sub>    / <createdAt>   that user's own records
 */
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { PutCommand, QueryCommand, UpdateCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { json, getCookie } from "../lib/response.mjs";
import { verifySession } from "../lib/session.mjs";

const ADMINS = (process.env.ADMIN_EMAILS || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
const id = (p) => `${p}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
const now = () => new Date().toISOString();

// Submission lifecycle. Kept deliberately short — every extra state is a status
// nobody updates, and a stale pipeline is worse than a coarse one.
const STATUSES = ["submitted", "shortlisted", "interviewing", "offered", "placed", "rejected"];

async function profileOf(sub) {
  const r = await ddb.send(new GetCommand({ TableName: TABLE, Key: { PK: `USER#${sub}`, SK: "PROFILE" } }));
  return r.Item || null;
}

async function ensureProfile(claims) {
  const existing = await profileOf(claims.sub);
  if (existing) return existing;
  const email = (claims.email || "").toLowerCase();
  const item = {
    PK: `USER#${claims.sub}`, SK: "PROFILE",
    userId: claims.sub, email, name: claims.name || "",
    role: ADMINS.includes(email) ? "admin" : "client",
    createdAt: now(),
  };
  await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));
  return item;
}

const byGsi = async (pk, limit = 100) => {
  const r = await ddb.send(new QueryCommand({
    TableName: TABLE, IndexName: "GSI1",
    KeyConditionExpression: "GSI1PK = :p",
    ExpressionAttributeValues: { ":p": pk },
    ScanIndexForward: false, Limit: limit,
  }));
  return r.Items || [];
};

const subsFor = async (reqId) => {
  const r = await ddb.send(new QueryCommand({
    TableName: TABLE,
    KeyConditionExpression: "PK = :p AND begins_with(SK, :s)",
    ExpressionAttributeValues: { ":p": `REQ#${reqId}`, ":s": "SUB#" },
  }));
  return r.Items || [];
};

export const handler = async (event) => {
  const token = getCookie(event, "sid");
  const claims = token && (await verifySession(token));
  if (!claims) return json(event, 401, { error: "not signed in" });

  const me = await ensureProfile(claims);
  const path = (event.rawPath || "").replace(/^\/portal/, "") || "/";
  const method = event.requestContext?.http?.method || "GET";
  let body = {};
  try { body = event.body ? JSON.parse(event.body) : {}; } catch { return json(event, 400, { error: "bad json" }); }

  const isAdmin = me.role === "admin";
  const isPartner = me.role === "partner";

  try {
    // ── who am I ──────────────────────────────────────────────────────────
    if (path === "/me" && method === "GET") return json(event, 200, { profile: me, statuses: STATUSES });

    // ── CLIENT: raise and track requirements ──────────────────────────────
    if (path === "/requirements" && method === "POST") {
      if (!body.role || !body.headcount) return json(event, 400, { error: "role and headcount are required" });
      const reqId = id("req");
      const createdAt = now();
      const item = {
        PK: `REQ#${reqId}`, SK: "META", reqId,
        ownerId: me.userId, ownerEmail: me.email, company: body.company || me.company || "",
        role: String(body.role).slice(0, 160),
        tier: body.tier === "trained" ? "trained" : "fde",
        headcount: Math.max(1, Math.min(50, Number(body.headcount) || 1)),
        engagement: body.engagement || "contract",
        timeline: body.timeline || "flexible",
        location: body.location || "India",
        notes: String(body.notes || "").slice(0, 2000),
        status: "open", createdAt, updatedAt: createdAt,
        GSI1PK: "REQS", GSI1SK: createdAt,
      };
      await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));
      // Mirror for the owner's own list, and for the partner network feed.
      await ddb.send(new PutCommand({ TableName: TABLE, Item: {
        PK: `USER#${me.userId}`, SK: `REQ#${reqId}`, reqId, createdAt,
        GSI1PK: `USER#${me.userId}`, GSI1SK: createdAt } }));
      await ddb.send(new PutCommand({ TableName: TABLE, Item: {
        PK: `OPENREQ#${reqId}`, SK: "META", reqId, role: item.role, tier: item.tier,
        headcount: item.headcount, location: item.location, engagement: item.engagement,
        createdAt, GSI1PK: "OPENREQS", GSI1SK: createdAt } }));
      return json(event, 201, { requirement: item });
    }

    if (path === "/requirements" && method === "GET") {
      if (isAdmin) {
        const reqs = await byGsi("REQS");
        for (const r of reqs) r.submissionCount = (await subsFor(r.reqId)).length;
        return json(event, 200, { requirements: reqs });
      }
      const refs = await byGsi(`USER#${me.userId}`);
      const reqs = [];
      for (const ref of refs.filter((x) => x.reqId)) {
        const r = await ddb.send(new GetCommand({ TableName: TABLE, Key: { PK: `REQ#${ref.reqId}`, SK: "META" } }));
        if (r.Item) { r.Item.submissions = await subsFor(ref.reqId); reqs.push(r.Item); }
      }
      return json(event, 200, { requirements: reqs });
    }

    // Partner-facing feed: open requirements, without client identity attached.
    if (path === "/open-requirements" && method === "GET") {
      if (!isPartner && !isAdmin) return json(event, 403, { error: "partners only" });
      return json(event, 200, { requirements: await byGsi("OPENREQS") });
    }

    if (path === "/requirements/status" && method === "POST") {
      if (!isAdmin) return json(event, 403, { error: "admin only" });
      if (!body.reqId || !["open", "on-hold", "filled", "closed"].includes(body.status))
        return json(event, 400, { error: "reqId and a valid status are required" });
      await ddb.send(new UpdateCommand({
        TableName: TABLE, Key: { PK: `REQ#${body.reqId}`, SK: "META" },
        UpdateExpression: "SET #s = :s, updatedAt = :u",
        ExpressionAttributeNames: { "#s": "status" },
        ExpressionAttributeValues: { ":s": body.status, ":u": now() },
      }));
      return json(event, 200, { ok: true });
    }

    // ── PARTNER: represent engineers, submit them ─────────────────────────
    if (path === "/engineers" && method === "POST") {
      if (!isPartner && !isAdmin) return json(event, 403, { error: "partners only" });
      if (!body.name || !body.years) return json(event, 400, { error: "name and years are required" });
      const engId = id("eng");
      const createdAt = now();
      const item = {
        PK: `PARTNER#${me.userId}`, SK: `ENG#${engId}`, engId,
        partnerId: me.userId, partnerEmail: me.email,
        name: String(body.name).slice(0, 120),
        years: Number(body.years) || 0,
        tier: Number(body.years) >= 2 ? "fde" : "trained",
        skills: Array.isArray(body.skills) ? body.skills.slice(0, 24) : [],
        assessmentScore: body.assessmentScore != null ? Number(body.assessmentScore) : null,
        currentCtc: body.currentCtc != null ? Number(body.currentCtc) : null,
        noticeDays: body.noticeDays != null ? Number(body.noticeDays) : null,
        available: body.available !== false,
        createdAt, GSI1PK: `PARTNER#${me.userId}`, GSI1SK: createdAt,
      };
      await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));
      return json(event, 201, { engineer: item });
    }

    if (path === "/engineers" && method === "GET") {
      if (isAdmin && event.queryStringParameters?.all === "1") {
        return json(event, 200, { engineers: await byGsi("ENGINEERS") });
      }
      if (!isPartner && !isAdmin) return json(event, 403, { error: "partners only" });
      const r = await ddb.send(new QueryCommand({
        TableName: TABLE,
        KeyConditionExpression: "PK = :p AND begins_with(SK, :s)",
        ExpressionAttributeValues: { ":p": `PARTNER#${me.userId}`, ":s": "ENG#" },
      }));
      return json(event, 200, { engineers: r.Items || [] });
    }

    if (path === "/submissions" && method === "POST") {
      if (!isPartner && !isAdmin) return json(event, 403, { error: "partners only" });
      if (!body.reqId || !body.engId) return json(event, 400, { error: "reqId and engId are required" });
      const subId = id("sub");
      const createdAt = now();
      const item = {
        PK: `REQ#${body.reqId}`, SK: `SUB#${subId}`, subId, reqId: body.reqId,
        engId: body.engId, partnerId: me.userId, partnerEmail: me.email,
        engName: String(body.engName || "").slice(0, 120),
        years: Number(body.years) || 0,
        assessmentScore: body.assessmentScore != null ? Number(body.assessmentScore) : null,
        status: "submitted", createdAt, updatedAt: createdAt,
        GSI1PK: `PARTNER#${me.userId}`, GSI1SK: createdAt,
      };
      await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));
      return json(event, 201, { submission: item });
    }

    if (path === "/submissions/status" && method === "POST") {
      // Clients advance their own pipeline; admin can move anything.
      if (!body.reqId || !body.subId || !STATUSES.includes(body.status))
        return json(event, 400, { error: "reqId, subId and a valid status are required" });
      if (!isAdmin) {
        const r = await ddb.send(new GetCommand({ TableName: TABLE, Key: { PK: `REQ#${body.reqId}`, SK: "META" } }));
        if (!r.Item || r.Item.ownerId !== me.userId) return json(event, 403, { error: "not your requirement" });
      }
      await ddb.send(new UpdateCommand({
        TableName: TABLE, Key: { PK: `REQ#${body.reqId}`, SK: `SUB#${body.subId}` },
        UpdateExpression: "SET #s = :s, updatedAt = :u",
        ExpressionAttributeNames: { "#s": "status" },
        ExpressionAttributeValues: { ":s": body.status, ":u": now() },
      }));
      return json(event, 200, { ok: true });
    }

    // ── PLACEMENTS & COMMISSION ───────────────────────────────────────────
    // Commission, not margin: we are paid a percentage of the engineer's CTC
    // (or monthly rate) because we introduced them. No payroll runs through us.
    if (path === "/placements" && method === "POST") {
      if (!isAdmin) return json(event, 403, { error: "admin only" });
      const { reqId, subId, engName, partnerId, annualCtc, commissionPct, engagement } = body;
      if (!reqId || !subId || !annualCtc || commissionPct == null)
        return json(event, 400, { error: "reqId, subId, annualCtc and commissionPct are required" });
      const plId = id("pl");
      const createdAt = now();
      const commission = Math.round((Number(annualCtc) * Number(commissionPct)) / 100);
      const item = {
        PK: `PLACEMENT#${plId}`, SK: "META", plId, reqId, subId,
        engName: engName || "", partnerId: partnerId || "",
        engagement: engagement || "contract",
        annualCtc: Number(annualCtc), commissionPct: Number(commissionPct),
        commission, gst: Math.round(commission * 0.18), invoiceStatus: "draft",
        createdAt, GSI1PK: "PLACEMENTS", GSI1SK: createdAt,
      };
      await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));
      await ddb.send(new UpdateCommand({
        TableName: TABLE, Key: { PK: `REQ#${reqId}`, SK: `SUB#${subId}` },
        UpdateExpression: "SET #s = :s, updatedAt = :u",
        ExpressionAttributeNames: { "#s": "status" },
        ExpressionAttributeValues: { ":s": "placed", ":u": createdAt },
      }));
      return json(event, 201, { placement: item });
    }

    if (path === "/placements" && method === "GET") {
      if (isAdmin) return json(event, 200, { placements: await byGsi("PLACEMENTS") });
      if (isPartner) {
        const all = await byGsi("PLACEMENTS");
        return json(event, 200, { placements: all.filter((p) => p.partnerId === me.userId) });
      }
      return json(event, 403, { error: "not available for this role" });
    }

    if (path === "/placements/invoice" && method === "POST") {
      if (!isAdmin) return json(event, 403, { error: "admin only" });
      if (!body.plId || !["draft", "raised", "paid", "written-off"].includes(body.invoiceStatus))
        return json(event, 400, { error: "plId and a valid invoiceStatus are required" });
      await ddb.send(new UpdateCommand({
        TableName: TABLE, Key: { PK: `PLACEMENT#${body.plId}`, SK: "META" },
        UpdateExpression: "SET invoiceStatus = :s, invoiceRef = :r, updatedAt = :u",
        ExpressionAttributeValues: {
          ":s": body.invoiceStatus, ":r": body.invoiceRef || "", ":u": now() },
      }));
      return json(event, 200, { ok: true });
    }

    // ── ADMIN: one number for the whole business ──────────────────────────
    if (path === "/admin/overview" && method === "GET") {
      if (!isAdmin) return json(event, 403, { error: "admin only" });
      const [reqs, placements] = await Promise.all([byGsi("REQS", 200), byGsi("PLACEMENTS", 200)]);
      let open = 0, submissions = 0;
      const pipeline = Object.fromEntries(STATUSES.map((s) => [s, 0]));
      for (const r of reqs) {
        if (r.status === "open") open++;
        const subs = await subsFor(r.reqId);
        submissions += subs.length;
        for (const s of subs) if (pipeline[s.status] != null) pipeline[s.status]++;
      }
      const billed = placements.reduce((a, p) => a + (p.commission || 0), 0);
      const collected = placements.filter((p) => p.invoiceStatus === "paid")
        .reduce((a, p) => a + (p.commission || 0), 0);
      return json(event, 200, {
        requirements: reqs.length, openRequirements: open, submissions,
        placements: placements.length, pipeline,
        commissionBilled: billed, commissionCollected: collected,
        commissionOutstanding: billed - collected,
      });
    }

    // ── ADMIN: grant a role ───────────────────────────────────────────────
    if (path === "/admin/role" && method === "POST") {
      if (!isAdmin) return json(event, 403, { error: "admin only" });
      if (!body.userId || !["client", "partner", "admin"].includes(body.role))
        return json(event, 400, { error: "userId and a valid role are required" });
      await ddb.send(new UpdateCommand({
        TableName: TABLE, Key: { PK: `USER#${body.userId}`, SK: "PROFILE" },
        UpdateExpression: "SET #r = :r, updatedAt = :u",
        ExpressionAttributeNames: { "#r": "role" },
        ExpressionAttributeValues: { ":r": body.role, ":u": now() },
      }));
      return json(event, 200, { ok: true });
    }

    return json(event, 404, { error: `no route for ${method} ${path}` });
  } catch (err) {
    console.error("portal error", { path, method, err: err?.message, stack: err?.stack });
    return json(event, 500, { error: "server error" });
  }
};
