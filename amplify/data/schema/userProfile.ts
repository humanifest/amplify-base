import { a } from "@aws-amplify/backend";

export const DefaultPrivacyLevel = a.enum(["public", "private", "contacts"]);

export const UserProfile = a
  .model({
    email: a.string(),
    profileOwner: a.string(),
    balance: a.float(),
    avatar: a.string(),
    defaultPrivacyLevel: DefaultPrivacyLevel,
  })
  .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]);
