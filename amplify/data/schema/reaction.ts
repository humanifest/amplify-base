import { a } from "@aws-amplify/backend";

export const Reaction = a
  .model({
    uuid: a.id().required(),
    user: a.ref("User"),
    comment: a.ref("Comment"),
  })
  .authorization((allow) => [
    allow.owner(),
    allow.authenticated().to(["read"]),
  ]);
