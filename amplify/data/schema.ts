import { type ClientSchema, a } from "@aws-amplify/backend";
import { postConfirmation } from "../functions/post-confirmation/resource";

const Todo = a
  .model({
    content: a.string(),
  })
  .authorization((allow) => [allow.owner()]);

const UserProfile = a
  .model({
    email: a.string(),
    profileOwner: a.string(),
  })
  .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]);

const SCHEMA = a
  .schema({
    Todo,
    UserProfile,
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof SCHEMA>;
export default SCHEMA;
