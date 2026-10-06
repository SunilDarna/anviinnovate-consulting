// Cached SSM SecureString reads (same idiom as backend/src/lib/ssm.mjs).
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";
const ssm = new SSMClient({});
const cache = new Map();
export async function getSecret(name) {
  if (cache.has(name)) return cache.get(name);
  const r = await ssm.send(new GetParameterCommand({ Name: name, WithDecryption: true }));
  cache.set(name, r.Parameter.Value);
  return r.Parameter.Value;
}
