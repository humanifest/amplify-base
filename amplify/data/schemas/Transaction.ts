import { a } from "@aws-amplify/backend";
import { DefaultPrivacyLevel } from "./UserProfile";
import { m } from "../models";

export const TransactionStatus = a.enum(["pending", "accepted", "rejected"]);

export const Transaction = a
  .model({
    uuid: a.string().required(),
    source: a.string(), // Empty if Payment or Request; Populated with BankAccount ID
    amount: a.float().required(),
    description: a.string().required(),
    privacyLevel: DefaultPrivacyLevel,
    receiverId: a.id(),
    receiver: a.belongsTo(m.UserProfile, "receiverId"),
    senderId: a.id(),
    sender: a.belongsTo(m.UserProfile, "senderId"),
    balanceAtCompletion: a.float().required(),
    status: TransactionStatus,
    requestResolvedAt: a.date(),
    comments: a.hasMany(m.Comment, "transactionId"),
    likes: a.hasMany(m.Like, "transactionId"),
  })
  .authorization((allow) => [allow.owner()]);
