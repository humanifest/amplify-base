import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const Comment = a
  .model({
    uuid: a.string().required(),
    content: a.string(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    transactionId: a.id(),
    transaction: a.belongsTo(m.Transaction, "transactionId"),
  })
  .authorization((allow) => [allow.publicApiKey(), allow.authenticated()]);
