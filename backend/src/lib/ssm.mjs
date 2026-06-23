// Cached SSM SecureString reader. Values are fetched once per warm container.
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const client = new SSMClient({});
const cache = new Map();

export async function getSecret(name) {
  if (cache.has(name)) return cache.get(name);
  const res = await client.send(new GetParameterCommand({ Name: name, WithDecryption: true }));
  const value = res.Parameter?.Value;
  cache.set(name, value);
  return value;
}
