import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const DefaultPrivacyLevel = a.enum(["public", "private", "contacts"]);

export const UserProfile = a
  .model({
    uuid: a.string().required(),
    email: a.string(),
    profileOwner: a.string(),
    balance: a.float(),
    avatar: a.string(),
    defaultPrivacyLevel: DefaultPrivacyLevel,
    bankAccounts: a.hasMany(m.BankAccount, "userProfileId"),
    bankTransfers: a.hasMany(m.BankTransfer, "userProfileId"),
    transactionsReceiver: a.hasMany(m.Transaction, "receiverId"),
    transactionsSender: a.hasMany(m.Transaction, "senderId"),
    comments: a.hasMany(m.Comment, "userProfileId"),
    contacts: a.hasMany(m.Contact, "userProfileId"),
    isContactRef: a.hasMany(m.Contact, "contactUseProfileId"), // reference for another user's contact list
    likes: a.hasMany(m.Like, "userProfileId"),
  })
  .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]);
