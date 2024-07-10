import { a } from "@aws-amplify/backend";

export const BankTransferType = a.enum(["withdrawal", "deposit"]);

export const BankTransfer = a
  .model({
    uuid: a.id().required(),
    user: a.ref("User"),
    source: a.string(),
    amount: a.float(),
    type: BankTransferType,
    transactionId: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
