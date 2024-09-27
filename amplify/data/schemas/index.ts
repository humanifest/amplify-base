import { type ClientSchema, a } from "@aws-amplify/backend";
import { postConfirmation } from "../../functions/post-confirmation/resource";
import { UserProfile } from "./UserProfile";
import { Contact } from "./Contact";
import { Comment } from "./Comment";
import { Transaction } from "./Transaction";
import { BankAccount } from "./Bankaccount";
import { BankTransfer } from "./Banktransfer";
import { Like } from "./Like";
import { Todo } from "./Todo";

const SCHEMA = a
  .schema({
    BankAccount,
    BankTransfer,
    Comment,
    Contact,
    Like,
    Todo,
    Transaction,
    UserProfile,
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof SCHEMA>;
export default SCHEMA;
