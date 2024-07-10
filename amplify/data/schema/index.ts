import { type ClientSchema, a } from "@aws-amplify/backend";
import { postConfirmation } from "../../functions/post-confirmation/resource";
import { UserProfile } from "./userProfile";
import { Contact } from "./contact";
import { Comment } from "./comment";
import { Transaction } from "./transaction";
import { BankAccount } from "./bankaccount";
import { BankTransfer } from "./banktransfer";
import { Like } from "./like";
import { Reaction } from "./reaction";
import { Todo } from "./Todo";

const SCHEMA = a
  .schema({
    BankAccount,
    BankTransfer,
    Comment,
    Contact,
    Like,
    Reaction,
    Todo,
    Transaction,
    UserProfile,
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof SCHEMA>;
export default SCHEMA;
