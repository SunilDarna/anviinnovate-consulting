// Stratified Fisher-Yates question selection + per-attempt option shuffling.
// Correct answers never leave the server; the attempt stores its own answer key.
import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "./dynamo.mjs";
import { CORE_CATEGORIES, QUESTIONS_PER_CATEGORY } from "./config.mjs";

// In-place Fisher-Yates shuffle (unbiased).
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// All questions in one category via GSI1 (GSI1PK = CAT#<category>).
async function fetchCategory(category) {
  const out = await ddb.send(new QueryCommand({
    TableName: TABLE,
    IndexName: "GSI1",
    KeyConditionExpression: "GSI1PK = :pk",
    ExpressionAttributeValues: { ":pk": `CAT#${category}` },
  }));
  return out.Items || [];
}

// Build a unique 30-question set: 3 per core category, options shuffled per question.
// Returns { clientQuestions, answerKey, selectedQuestionIds }.
//  - clientQuestions: safe to send (id, category, question, options{A..D}) — NO correct answer.
//  - answerKey: { [qid]: "A".."D" } mapping to the *shuffled* correct letter for this attempt.
export async function buildAttempt() {
  const perCat = await Promise.all(CORE_CATEGORIES.map(fetchCategory));

  const picked = [];
  perCat.forEach((items, i) => {
    if (items.length < QUESTIONS_PER_CATEGORY) {
      throw new Error(`category "${CORE_CATEGORIES[i]}" has only ${items.length} questions`);
    }
    picked.push(...shuffle([...items]).slice(0, QUESTIONS_PER_CATEGORY));
  });

  shuffle(picked); // randomize presentation order across categories

  const answerKey = {};
  const clientQuestions = picked.map((q) => {
    // Shuffle the four options and reassign letters A..D for this attempt.
    const entries = shuffle(Object.entries(q.options)); // [[origLetter, text], ...]
    const letters = ["A", "B", "C", "D"];
    const options = {};
    let correctLetter = null;
    entries.forEach(([origLetter, text], idx) => {
      const newLetter = letters[idx];
      options[newLetter] = text;
      if (origLetter === q.correct_answer) correctLetter = newLetter;
    });
    answerKey[q.id] = correctLetter;
    return { id: q.id, category: q.category, question: q.question, options };
  });

  return {
    clientQuestions,
    answerKey,
    selectedQuestionIds: picked.map((q) => q.id),
  };
}
