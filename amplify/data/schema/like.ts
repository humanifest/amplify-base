import { a } from "@aws-amplify/backend";

export const Like = a
  .model({
    uuid: a.id().required(),
    user: a.ref("User"),
    transaction: a.ref("Transaction"),
  })
  .authorization((allow) => [
    allow.owner(),
    allow.authenticated().to(["read"]),
  ]);
