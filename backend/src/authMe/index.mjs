// GET /auth/me — validate the session cookie and return the current user.
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { verifySession } from "../lib/session.mjs";
import { ok, unauthorized, getCookie } from "../lib/response.mjs";

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") return ok(event, {});
  const claims = await verifySession(getCookie(event, "anvi_session"));
  if (!claims) return unauthorized(event);

  const res = await ddb.send(new GetCommand({
    TableName: TABLE, Key: { PK: claims.sub, SK: "PROFILE" },
  }));
  if (!res.Item) return unauthorized(event);

  return ok(event, {
    ok: true,
    user: { id: res.Item.PK, email: res.Item.email, name: res.Item.name, picture: res.Item.picture },
  });
};
