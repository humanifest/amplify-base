import { type Schema } from "./schemas";

// Enum of models on schema
export enum m {
  BankAccount = "BankAccount",
  BankTransfer = "BankTransfer",
  Comment = "Comment",
  Contact = "Contact",
  Like = "Like",
  Todo = "Todo",
  Transaction = "Transaction",
  UserProfile = "UserProfile",
}

// Define an object that maps m keys to their respective types
type SchemaTypeMap = {
  [Key in m]: Schema[Key]["type"];
};

// Extract the types for each m key
export type Models = {
  [Key in keyof SchemaTypeMap]: SchemaTypeMap[Key];
};

export type _BankAccount = Models[m.BankAccount];
export type _BankTransfer = Models[m.BankTransfer];
export type _Comment = Models[m.Comment];
export type _Contact = Models[m.Contact];
export type _Like = Models[m.Like];
export type _Todo = Models[m.Todo];
export type _Transaction = Models[m.Transaction];
export type _UserProfile = Models[m.UserProfile];
