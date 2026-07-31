// POST /candidate/resume-url — issue a short-lived presigned S3 PUT URL so the
// candidate uploads their resume directly to a private bucket. Returns { uploadUrl, key }.
import { randomUUID } from "node:crypto";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { verifySession } from "../lib/session.mjs";
import { ok, badRequest, unauthorized, getCookie } from "../lib/response.mjs";

const s3 = new S3Client({});
const BUCKET = process.env.RESUME_BUCKET;

// Accepted resume formats -> canonical extension.
const TYPES = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);

  let b;
  try { b = JSON.parse(event.body || "{}"); } catch { return badRequest(event, "invalid json"); }
  const contentType = String(b.contentType || "");
  const ext = TYPES[contentType];
  if (!ext) return badRequest(event, "unsupported file type (use PDF, DOC or DOCX)");

  const sub = String(claims.sub).replace(/[^A-Za-z0-9#]/g, "");
  const key = `resumes/${sub}/${randomUUID()}.${ext}`;
  const uploadUrl = await getSignedUrl(
    s3,
    new PutObjectCommand({ Bucket: BUCKET, Key: key, ContentType: contentType }),
    { expiresIn: 300 }
  );
  return ok(event, { ok: true, uploadUrl, key });
};
