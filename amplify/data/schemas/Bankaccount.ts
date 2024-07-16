import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const BankAccount = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    bankName: a.string(),
    accountNumber: a.integer(),
    routingNumber: a.integer(),
    isDeleted: a.boolean(),
  })
  .authorization((allow) => [allow.owner()]);
