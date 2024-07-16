/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type BankAccount = {
  __typename: "BankAccount",
  accountNumber?: number | null,
  bankName?: string | null,
  createdAt: string,
  id: string,
  isDeleted?: boolean | null,
  owner?: string | null,
  routingNumber?: number | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  avatar?: string | null,
  balance?: number | null,
  bankAccounts?: ModelBankAccountConnection | null,
  bankTransfers?: ModelBankTransferConnection | null,
  comments?: ModelCommentConnection | null,
  contacts?: ModelContactConnection | null,
  createdAt: string,
  defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
  email?: string | null,
  id: string,
  isContactRef?: ModelContactConnection | null,
  likes?: ModelLikeConnection | null,
  profileOwner?: string | null,
  transactionsReceiver?: ModelTransactionConnection | null,
  transactionsSender?: ModelTransactionConnection | null,
  updatedAt: string,
  uuid: string,
};

export type ModelBankAccountConnection = {
  __typename: "ModelBankAccountConnection",
  items:  Array<BankAccount | null >,
  nextToken?: string | null,
};

export type ModelBankTransferConnection = {
  __typename: "ModelBankTransferConnection",
  items:  Array<BankTransfer | null >,
  nextToken?: string | null,
};

export type BankTransfer = {
  __typename: "BankTransfer",
  amount?: number | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  source?: string | null,
  transactionId?: string | null,
  type?: BankTransferType | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export enum BankTransferType {
  deposit = "deposit",
  withdrawal = "withdrawal",
}


export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  content?: string | null,
  createdAt: string,
  id: string,
  transaction?: Transaction | null,
  transactionId?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type Transaction = {
  __typename: "Transaction",
  amount: number,
  balanceAtCompletion: number,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  description: string,
  id: string,
  likes?: ModelLikeConnection | null,
  owner?: string | null,
  privacyLevel?: TransactionPrivacyLevel | null,
  receiver?: UserProfile | null,
  receiverId?: string | null,
  requestResolvedAt?: string | null,
  sender?: UserProfile | null,
  senderId?: string | null,
  source?: string | null,
  status?: TransactionStatus | null,
  updatedAt: string,
  uuid: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  createdAt: string,
  id: string,
  owner?: string | null,
  transaction?: Transaction | null,
  transactionId?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export enum TransactionPrivacyLevel {
  contacts = "contacts",
  private = "private",
  public = "public",
}


export enum TransactionStatus {
  accepted = "accepted",
  pending = "pending",
  rejected = "rejected",
}


export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type Contact = {
  __typename: "Contact",
  contactUseProfileId?: string | null,
  contactUserProfile?: UserProfile | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export enum UserProfileDefaultPrivacyLevel {
  contacts = "contacts",
  private = "private",
  public = "public",
}


export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  updatedAt: string,
};

export type ModelBankAccountFilterInput = {
  accountNumber?: ModelIntInput | null,
  and?: Array< ModelBankAccountFilterInput | null > | null,
  bankName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isDeleted?: ModelBooleanInput | null,
  not?: ModelBankAccountFilterInput | null,
  or?: Array< ModelBankAccountFilterInput | null > | null,
  owner?: ModelStringInput | null,
  routingNumber?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelBankTransferFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelBankTransferFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelBankTransferFilterInput | null,
  or?: Array< ModelBankTransferFilterInput | null > | null,
  owner?: ModelStringInput | null,
  source?: ModelStringInput | null,
  transactionId?: ModelStringInput | null,
  type?: ModelBankTransferTypeInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelBankTransferTypeInput = {
  eq?: BankTransferType | null,
  ne?: BankTransferType | null,
};

export type ModelCommentFilterInput = {
  and?: Array< ModelCommentFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCommentFilterInput | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  transactionId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelContactFilterInput = {
  and?: Array< ModelContactFilterInput | null > | null,
  contactUseProfileId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelContactFilterInput | null,
  or?: Array< ModelContactFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelLikeFilterInput = {
  and?: Array< ModelLikeFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelLikeFilterInput | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  owner?: ModelStringInput | null,
  transactionId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelTransactionFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  balanceAtCompletion?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTransactionFilterInput | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  privacyLevel?: ModelTransactionPrivacyLevelInput | null,
  receiverId?: ModelIDInput | null,
  requestResolvedAt?: ModelStringInput | null,
  senderId?: ModelIDInput | null,
  source?: ModelStringInput | null,
  status?: ModelTransactionStatusInput | null,
  updatedAt?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelTransactionPrivacyLevelInput = {
  eq?: TransactionPrivacyLevel | null,
  ne?: TransactionPrivacyLevel | null,
};

export type ModelTransactionStatusInput = {
  eq?: TransactionStatus | null,
  ne?: TransactionStatus | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  avatar?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  defaultPrivacyLevel?: ModelUserProfileDefaultPrivacyLevelInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelUserProfileDefaultPrivacyLevelInput = {
  eq?: UserProfileDefaultPrivacyLevel | null,
  ne?: UserProfileDefaultPrivacyLevel | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelBankAccountConditionInput = {
  accountNumber?: ModelIntInput | null,
  and?: Array< ModelBankAccountConditionInput | null > | null,
  bankName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  not?: ModelBankAccountConditionInput | null,
  or?: Array< ModelBankAccountConditionInput | null > | null,
  owner?: ModelStringInput | null,
  routingNumber?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateBankAccountInput = {
  accountNumber?: number | null,
  bankName?: string | null,
  id?: string | null,
  isDeleted?: boolean | null,
  routingNumber?: number | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelBankTransferConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelBankTransferConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelBankTransferConditionInput | null,
  or?: Array< ModelBankTransferConditionInput | null > | null,
  owner?: ModelStringInput | null,
  source?: ModelStringInput | null,
  transactionId?: ModelStringInput | null,
  type?: ModelBankTransferTypeInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateBankTransferInput = {
  amount?: number | null,
  id?: string | null,
  source?: string | null,
  transactionId?: string | null,
  type?: BankTransferType | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelCommentConditionInput = {
  and?: Array< ModelCommentConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCommentConditionInput | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  transactionId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateCommentInput = {
  content?: string | null,
  id?: string | null,
  transactionId?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelContactConditionInput = {
  and?: Array< ModelContactConditionInput | null > | null,
  contactUseProfileId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelContactConditionInput | null,
  or?: Array< ModelContactConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateContactInput = {
  contactUseProfileId?: string | null,
  id?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelLikeConditionInput = {
  and?: Array< ModelLikeConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelLikeConditionInput | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  owner?: ModelStringInput | null,
  transactionId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateLikeInput = {
  id?: string | null,
  transactionId?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  id?: string | null,
};

export type ModelTransactionConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  balanceAtCompletion?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelTransactionConditionInput | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  privacyLevel?: ModelTransactionPrivacyLevelInput | null,
  receiverId?: ModelIDInput | null,
  requestResolvedAt?: ModelStringInput | null,
  senderId?: ModelIDInput | null,
  source?: ModelStringInput | null,
  status?: ModelTransactionStatusInput | null,
  updatedAt?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateTransactionInput = {
  amount: number,
  balanceAtCompletion: number,
  description: string,
  id?: string | null,
  privacyLevel?: TransactionPrivacyLevel | null,
  receiverId?: string | null,
  requestResolvedAt?: string | null,
  senderId?: string | null,
  source?: string | null,
  status?: TransactionStatus | null,
  uuid: string,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  avatar?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  defaultPrivacyLevel?: ModelUserProfileDefaultPrivacyLevelInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  avatar?: string | null,
  balance?: number | null,
  defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
  email?: string | null,
  id?: string | null,
  profileOwner?: string | null,
  uuid: string,
};

export type DeleteBankAccountInput = {
  id: string,
};

export type DeleteBankTransferInput = {
  id: string,
};

export type DeleteCommentInput = {
  id: string,
};

export type DeleteContactInput = {
  id: string,
};

export type DeleteLikeInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type DeleteTransactionInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type UpdateBankAccountInput = {
  accountNumber?: number | null,
  bankName?: string | null,
  id: string,
  isDeleted?: boolean | null,
  routingNumber?: number | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateBankTransferInput = {
  amount?: number | null,
  id: string,
  source?: string | null,
  transactionId?: string | null,
  type?: BankTransferType | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateCommentInput = {
  content?: string | null,
  id: string,
  transactionId?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateContactInput = {
  contactUseProfileId?: string | null,
  id: string,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateLikeInput = {
  id: string,
  transactionId?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
};

export type UpdateTransactionInput = {
  amount?: number | null,
  balanceAtCompletion?: number | null,
  description?: string | null,
  id: string,
  privacyLevel?: TransactionPrivacyLevel | null,
  receiverId?: string | null,
  requestResolvedAt?: string | null,
  senderId?: string | null,
  source?: string | null,
  status?: TransactionStatus | null,
  uuid?: string | null,
};

export type UpdateUserProfileInput = {
  avatar?: string | null,
  balance?: number | null,
  defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
  email?: string | null,
  id: string,
  profileOwner?: string | null,
  uuid?: string | null,
};

export type ModelSubscriptionBankAccountFilterInput = {
  accountNumber?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionBankAccountFilterInput | null > | null,
  bankName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isDeleted?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionBankAccountFilterInput | null > | null,
  owner?: ModelStringInput | null,
  routingNumber?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionBankTransferFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionBankTransferFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionBankTransferFilterInput | null > | null,
  owner?: ModelStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  transactionId?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  transactionId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionContactFilterInput = {
  and?: Array< ModelSubscriptionContactFilterInput | null > | null,
  contactUseProfileId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionContactFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionLikeFilterInput = {
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  owner?: ModelStringInput | null,
  transactionId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  balanceAtCompletion?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  privacyLevel?: ModelSubscriptionStringInput | null,
  receiverId?: ModelSubscriptionIDInput | null,
  requestResolvedAt?: ModelSubscriptionStringInput | null,
  senderId?: ModelSubscriptionIDInput | null,
  source?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  avatar?: ModelSubscriptionStringInput | null,
  balance?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  defaultPrivacyLevel?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type GetBankAccountQueryVariables = {
  id: string,
};

export type GetBankAccountQuery = {
  getBankAccount?:  {
    __typename: "BankAccount",
    accountNumber?: number | null,
    bankName?: string | null,
    createdAt: string,
    id: string,
    isDeleted?: boolean | null,
    owner?: string | null,
    routingNumber?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetBankTransferQueryVariables = {
  id: string,
};

export type GetBankTransferQuery = {
  getBankTransfer?:  {
    __typename: "BankTransfer",
    amount?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    source?: string | null,
    transactionId?: string | null,
    type?: BankTransferType | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    content?: string | null,
    createdAt: string,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    contactUseProfileId?: string | null,
    contactUserProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    createdAt: string,
    id: string,
    owner?: string | null,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    amount: number,
    balanceAtCompletion: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description: string,
    id: string,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    privacyLevel?: TransactionPrivacyLevel | null,
    receiver?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    receiverId?: string | null,
    requestResolvedAt?: string | null,
    sender?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    senderId?: string | null,
    source?: string | null,
    status?: TransactionStatus | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    avatar?: string | null,
    balance?: number | null,
    bankAccounts?:  {
      __typename: "ModelBankAccountConnection",
      nextToken?: string | null,
    } | null,
    bankTransfers?:  {
      __typename: "ModelBankTransferConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
    email?: string | null,
    id: string,
    isContactRef?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    transactionsReceiver?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    transactionsSender?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type ListBankAccountsQueryVariables = {
  filter?: ModelBankAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBankAccountsQuery = {
  listBankAccounts?:  {
    __typename: "ModelBankAccountConnection",
    items:  Array< {
      __typename: "BankAccount",
      accountNumber?: number | null,
      bankName?: string | null,
      createdAt: string,
      id: string,
      isDeleted?: boolean | null,
      owner?: string | null,
      routingNumber?: number | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBankTransfersQueryVariables = {
  filter?: ModelBankTransferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBankTransfersQuery = {
  listBankTransfers?:  {
    __typename: "ModelBankTransferConnection",
    items:  Array< {
      __typename: "BankTransfer",
      amount?: number | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      source?: string | null,
      transactionId?: string | null,
      type?: BankTransferType | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      content?: string | null,
      createdAt: string,
      id: string,
      transactionId?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      contactUseProfileId?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      createdAt: string,
      id: string,
      owner?: string | null,
      transactionId?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateBankAccountMutationVariables = {
  condition?: ModelBankAccountConditionInput | null,
  input: CreateBankAccountInput,
};

export type CreateBankAccountMutation = {
  createBankAccount?:  {
    __typename: "BankAccount",
    accountNumber?: number | null,
    bankName?: string | null,
    createdAt: string,
    id: string,
    isDeleted?: boolean | null,
    owner?: string | null,
    routingNumber?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateBankTransferMutationVariables = {
  condition?: ModelBankTransferConditionInput | null,
  input: CreateBankTransferInput,
};

export type CreateBankTransferMutation = {
  createBankTransfer?:  {
    __typename: "BankTransfer",
    amount?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    source?: string | null,
    transactionId?: string | null,
    type?: BankTransferType | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    content?: string | null,
    createdAt: string,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateContactMutationVariables = {
  condition?: ModelContactConditionInput | null,
  input: CreateContactInput,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    contactUseProfileId?: string | null,
    contactUserProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  condition?: ModelLikeConditionInput | null,
  input: CreateLikeInput,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    createdAt: string,
    id: string,
    owner?: string | null,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  condition?: ModelTransactionConditionInput | null,
  input: CreateTransactionInput,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    amount: number,
    balanceAtCompletion: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description: string,
    id: string,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    privacyLevel?: TransactionPrivacyLevel | null,
    receiver?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    receiverId?: string | null,
    requestResolvedAt?: string | null,
    sender?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    senderId?: string | null,
    source?: string | null,
    status?: TransactionStatus | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    avatar?: string | null,
    balance?: number | null,
    bankAccounts?:  {
      __typename: "ModelBankAccountConnection",
      nextToken?: string | null,
    } | null,
    bankTransfers?:  {
      __typename: "ModelBankTransferConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
    email?: string | null,
    id: string,
    isContactRef?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    transactionsReceiver?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    transactionsSender?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type DeleteBankAccountMutationVariables = {
  condition?: ModelBankAccountConditionInput | null,
  input: DeleteBankAccountInput,
};

export type DeleteBankAccountMutation = {
  deleteBankAccount?:  {
    __typename: "BankAccount",
    accountNumber?: number | null,
    bankName?: string | null,
    createdAt: string,
    id: string,
    isDeleted?: boolean | null,
    owner?: string | null,
    routingNumber?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteBankTransferMutationVariables = {
  condition?: ModelBankTransferConditionInput | null,
  input: DeleteBankTransferInput,
};

export type DeleteBankTransferMutation = {
  deleteBankTransfer?:  {
    __typename: "BankTransfer",
    amount?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    source?: string | null,
    transactionId?: string | null,
    type?: BankTransferType | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    content?: string | null,
    createdAt: string,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteContactMutationVariables = {
  condition?: ModelContactConditionInput | null,
  input: DeleteContactInput,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    contactUseProfileId?: string | null,
    contactUserProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  condition?: ModelLikeConditionInput | null,
  input: DeleteLikeInput,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    createdAt: string,
    id: string,
    owner?: string | null,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  condition?: ModelTransactionConditionInput | null,
  input: DeleteTransactionInput,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    amount: number,
    balanceAtCompletion: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description: string,
    id: string,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    privacyLevel?: TransactionPrivacyLevel | null,
    receiver?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    receiverId?: string | null,
    requestResolvedAt?: string | null,
    sender?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    senderId?: string | null,
    source?: string | null,
    status?: TransactionStatus | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    avatar?: string | null,
    balance?: number | null,
    bankAccounts?:  {
      __typename: "ModelBankAccountConnection",
      nextToken?: string | null,
    } | null,
    bankTransfers?:  {
      __typename: "ModelBankTransferConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
    email?: string | null,
    id: string,
    isContactRef?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    transactionsReceiver?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    transactionsSender?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type UpdateBankAccountMutationVariables = {
  condition?: ModelBankAccountConditionInput | null,
  input: UpdateBankAccountInput,
};

export type UpdateBankAccountMutation = {
  updateBankAccount?:  {
    __typename: "BankAccount",
    accountNumber?: number | null,
    bankName?: string | null,
    createdAt: string,
    id: string,
    isDeleted?: boolean | null,
    owner?: string | null,
    routingNumber?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateBankTransferMutationVariables = {
  condition?: ModelBankTransferConditionInput | null,
  input: UpdateBankTransferInput,
};

export type UpdateBankTransferMutation = {
  updateBankTransfer?:  {
    __typename: "BankTransfer",
    amount?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    source?: string | null,
    transactionId?: string | null,
    type?: BankTransferType | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    content?: string | null,
    createdAt: string,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateContactMutationVariables = {
  condition?: ModelContactConditionInput | null,
  input: UpdateContactInput,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    contactUseProfileId?: string | null,
    contactUserProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  condition?: ModelLikeConditionInput | null,
  input: UpdateLikeInput,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    createdAt: string,
    id: string,
    owner?: string | null,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  condition?: ModelTransactionConditionInput | null,
  input: UpdateTransactionInput,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    amount: number,
    balanceAtCompletion: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description: string,
    id: string,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    privacyLevel?: TransactionPrivacyLevel | null,
    receiver?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    receiverId?: string | null,
    requestResolvedAt?: string | null,
    sender?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    senderId?: string | null,
    source?: string | null,
    status?: TransactionStatus | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    avatar?: string | null,
    balance?: number | null,
    bankAccounts?:  {
      __typename: "ModelBankAccountConnection",
      nextToken?: string | null,
    } | null,
    bankTransfers?:  {
      __typename: "ModelBankTransferConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
    email?: string | null,
    id: string,
    isContactRef?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    transactionsReceiver?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    transactionsSender?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnCreateBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionBankAccountFilterInput | null,
  owner?: string | null,
};

export type OnCreateBankAccountSubscription = {
  onCreateBankAccount?:  {
    __typename: "BankAccount",
    accountNumber?: number | null,
    bankName?: string | null,
    createdAt: string,
    id: string,
    isDeleted?: boolean | null,
    owner?: string | null,
    routingNumber?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateBankTransferSubscriptionVariables = {
  filter?: ModelSubscriptionBankTransferFilterInput | null,
  owner?: string | null,
};

export type OnCreateBankTransferSubscription = {
  onCreateBankTransfer?:  {
    __typename: "BankTransfer",
    amount?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    source?: string | null,
    transactionId?: string | null,
    type?: BankTransferType | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    content?: string | null,
    createdAt: string,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    contactUseProfileId?: string | null,
    contactUserProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    createdAt: string,
    id: string,
    owner?: string | null,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    amount: number,
    balanceAtCompletion: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description: string,
    id: string,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    privacyLevel?: TransactionPrivacyLevel | null,
    receiver?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    receiverId?: string | null,
    requestResolvedAt?: string | null,
    sender?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    senderId?: string | null,
    source?: string | null,
    status?: TransactionStatus | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    avatar?: string | null,
    balance?: number | null,
    bankAccounts?:  {
      __typename: "ModelBankAccountConnection",
      nextToken?: string | null,
    } | null,
    bankTransfers?:  {
      __typename: "ModelBankTransferConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
    email?: string | null,
    id: string,
    isContactRef?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    transactionsReceiver?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    transactionsSender?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnDeleteBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionBankAccountFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBankAccountSubscription = {
  onDeleteBankAccount?:  {
    __typename: "BankAccount",
    accountNumber?: number | null,
    bankName?: string | null,
    createdAt: string,
    id: string,
    isDeleted?: boolean | null,
    owner?: string | null,
    routingNumber?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteBankTransferSubscriptionVariables = {
  filter?: ModelSubscriptionBankTransferFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBankTransferSubscription = {
  onDeleteBankTransfer?:  {
    __typename: "BankTransfer",
    amount?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    source?: string | null,
    transactionId?: string | null,
    type?: BankTransferType | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    content?: string | null,
    createdAt: string,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    contactUseProfileId?: string | null,
    contactUserProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    createdAt: string,
    id: string,
    owner?: string | null,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    amount: number,
    balanceAtCompletion: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description: string,
    id: string,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    privacyLevel?: TransactionPrivacyLevel | null,
    receiver?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    receiverId?: string | null,
    requestResolvedAt?: string | null,
    sender?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    senderId?: string | null,
    source?: string | null,
    status?: TransactionStatus | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    avatar?: string | null,
    balance?: number | null,
    bankAccounts?:  {
      __typename: "ModelBankAccountConnection",
      nextToken?: string | null,
    } | null,
    bankTransfers?:  {
      __typename: "ModelBankTransferConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
    email?: string | null,
    id: string,
    isContactRef?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    transactionsReceiver?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    transactionsSender?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnUpdateBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionBankAccountFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBankAccountSubscription = {
  onUpdateBankAccount?:  {
    __typename: "BankAccount",
    accountNumber?: number | null,
    bankName?: string | null,
    createdAt: string,
    id: string,
    isDeleted?: boolean | null,
    owner?: string | null,
    routingNumber?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateBankTransferSubscriptionVariables = {
  filter?: ModelSubscriptionBankTransferFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBankTransferSubscription = {
  onUpdateBankTransfer?:  {
    __typename: "BankTransfer",
    amount?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    source?: string | null,
    transactionId?: string | null,
    type?: BankTransferType | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    content?: string | null,
    createdAt: string,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    contactUseProfileId?: string | null,
    contactUserProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    createdAt: string,
    id: string,
    owner?: string | null,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      balanceAtCompletion: number,
      createdAt: string,
      description: string,
      id: string,
      owner?: string | null,
      privacyLevel?: TransactionPrivacyLevel | null,
      receiverId?: string | null,
      requestResolvedAt?: string | null,
      senderId?: string | null,
      source?: string | null,
      status?: TransactionStatus | null,
      updatedAt: string,
      uuid: string,
    } | null,
    transactionId?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    amount: number,
    balanceAtCompletion: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description: string,
    id: string,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    privacyLevel?: TransactionPrivacyLevel | null,
    receiver?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    receiverId?: string | null,
    requestResolvedAt?: string | null,
    sender?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      balance?: number | null,
      createdAt: string,
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    senderId?: string | null,
    source?: string | null,
    status?: TransactionStatus | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    avatar?: string | null,
    balance?: number | null,
    bankAccounts?:  {
      __typename: "ModelBankAccountConnection",
      nextToken?: string | null,
    } | null,
    bankTransfers?:  {
      __typename: "ModelBankTransferConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null,
    email?: string | null,
    id: string,
    isContactRef?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    transactionsReceiver?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    transactionsSender?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    uuid: string,
  } | null,
};
