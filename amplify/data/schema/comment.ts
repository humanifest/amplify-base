import { a } from "@aws-amplify/backend";

export const Comment = a
  .model({
    uuid: a.id().required(),
    content: a.string(),
    user: a.ref("User"),
    transactionId: a.string(),
  })
  .authorization((allow) => [allow.publicApiKey()]);
