import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const UserContacts = a;

export const Contact = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    contactUseProfileId: a.id(),
    contactuserProfile: a.belongsTo(m.UserProfile, "contactUseProfileId"),
  })
  .authorization((allow) => [allow.owner()]);
