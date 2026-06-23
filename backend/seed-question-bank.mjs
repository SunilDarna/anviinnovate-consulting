// Seed backend/data/question-bank.json into the DynamoDB table.
// Items: PK=Q#<id>, SK=META, GSI1PK=CAT#<category>, GSI1SK=Q#<id>.
// Usage: AWS_REGION=us-east-1 TABLE_NAME=AnviInnovate node scripts/seed-question-bank.mjs
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TABLE = process.env.TABLE_NAME || "AnviInnovate";
const REGION = process.env.AWS_REGION || "us-east-1";

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }), {
  marshallOptions: { removeUndefinedValues: true },
});

const bank = JSON.parse(readFileSync(resolve(root, "backend/data/question-bank.json"), "utf8"));
console.log(`Seeding ${bank.length} questions into ${TABLE} (${REGION})...`);

const items = bank.map((q) => ({
  PutRequest: {
    Item: {
      PK: `Q#${q.id}`, SK: "META",
      GSI1PK: `CAT#${q.category}`, GSI1SK: `Q#${q.id}`,
      id: q.id, category: q.category, question: q.question,
      options: q.options, correct_answer: q.correct_answer, explanation: q.explanation,
    },
  },
}));

// BatchWrite handles 25 at a time; retry unprocessed with simple backoff.
for (let i = 0; i < items.length; i += 25) {
  let batch = items.slice(i, i + 25);
  let attempt = 0;
  while (batch.length) {
    const res = await ddb.send(new BatchWriteCommand({ RequestItems: { [TABLE]: batch } }));
    const un = res.UnprocessedItems?.[TABLE] || [];
    if (!un.length) break;
    batch = un;
    await new Promise((r) => setTimeout(r, 200 * ++attempt));
  }
  process.stdout.write(`  ${Math.min(i + 25, items.length)}/${items.length}\r`);
}
console.log(`\nSeeded ${items.length} questions.`);
