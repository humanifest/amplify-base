import { a } from "@aws-amplify/backend";
import { DefaultPrivacyLevel } from "./userProfile";

export const TransactionStatus = a.enum(["pending", "accepted", "rejected"]);

export const Transaction = a
  .model({
    uuid: a.id().required(),
    source: a.string(), // Empty if Payment or Request; Populated with BankAccount ID
    amount: a.float().required(),
    date: a.date().required(),
    description: a.string().required(),
    privacyLevel: DefaultPrivacyLevel,
    category: a.string().required(),
    account: a.ref("BankAccount"),
    receiver: a.ref("User"),
    sender: a.ref("User"),
    balanceAtCompletion: a.float().required(),
    status: TransactionStatus,
    requestResolvedAt: a.date(),
  })
  .authorization((allow) => [allow.owner()]);
