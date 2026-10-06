// Model tier + guardrail wrapper. Model IDs are env-configurable (pre-mortem #8).
import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";
const br = new BedrockRuntimeClient({});
const LITE = process.env.MODEL_LITE || "us.amazon.nova-lite-v1:0";
const PRO = process.env.MODEL_PRO || "us.amazon.nova-pro-v1:0";
const GUARDRAIL = process.env.GUARDRAIL_ID || "";

export async function converse({ system, messages, tier = "lite", maxTokens = 500 }) {
  const cmd = new ConverseCommand({
    modelId: tier === "pro" ? PRO : LITE,
    system: [{ text: system }],
    messages,
    inferenceConfig: { maxTokens, temperature: 0.4 },
    ...(GUARDRAIL ? { guardrailConfig: { guardrailIdentifier: GUARDRAIL, guardrailVersion: process.env.GUARDRAIL_VERSION || "DRAFT" } } : {}),
  });
  const r = await br.send(cmd);
  return {
    text: r.output?.message?.content?.map(c => c.text || "").join("") || "",
    stop: r.stopReason,
    usage: r.usage || {},
    blocked: r.stopReason === "guardrail_intervened",
  };
}

// Post-checker — Layer 4: forbid dosage/prescription patterns that slip through.
const FORBIDDEN = /\b(\d+\s?(mg|mcg|µg|iu|units)\b.*\b(take|dose|daily|twice)\b|\b(prescrib|dosage of)\b)/i;
export function postCheck(text) {
  if (FORBIDDEN.test(text)) return { ok: false, reason: "dosage-pattern" };
  return { ok: true };
}
export const DISCLAIMER = "\n\n_Coach, not clinician — for anything medical, your doctor decides (plan §15)._";
