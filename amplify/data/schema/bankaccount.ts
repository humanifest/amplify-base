import { a } from "@aws-amplify/backend";

export const BankAccount = a
  .model({
    uuid: a.id().required(),
    user: a.ref("User"),
    bankName: a.string(),
    accountNumber: a.integer(),
    routingNumber: a.integer(),
    isDeleted: a.boolean(),
  })
  .authorization((allow) => [allow.owner()]);
