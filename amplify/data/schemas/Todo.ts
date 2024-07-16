import { a } from "@aws-amplify/backend";

export const Todo = a
  .model({
    content: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
