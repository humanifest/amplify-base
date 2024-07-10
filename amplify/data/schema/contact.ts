import { a } from "@aws-amplify/backend";

export const Contact = a
  .model({
    uuid: a.id().required(),
    user: a.ref("User"),
    contactUserId: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
