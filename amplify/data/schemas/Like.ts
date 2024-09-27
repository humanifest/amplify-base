import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const Like = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    transactionId: a.id(),
    transaction: a.belongsTo(m.Transaction, "transactionId"),
  })
  .authorization((allow) => [
    allow.owner(),
    allow.authenticated().to(["read"]),
  ]);
