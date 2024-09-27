import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const BankTransferType = a.enum(["withdrawal", "deposit"]);

export const BankTransfer = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    source: a.string(),
    amount: a.float(),
    type: BankTransferType,
    transactionId: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
