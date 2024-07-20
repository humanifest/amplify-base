/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBankAccount = /* GraphQL */ `mutation CreateBankAccount(
  $condition: ModelBankAccountConditionInput
  $input: CreateBankAccountInput!
) {
  createBankAccount(condition: $condition, input: $input) {
    accountNumber
    bankName
    createdAt
    id
    isDeleted
    owner
    routingNumber
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBankAccountMutationVariables,
  APITypes.CreateBankAccountMutation
>;
export const createBankTransfer = /* GraphQL */ `mutation CreateBankTransfer(
  $condition: ModelBankTransferConditionInput
  $input: CreateBankTransferInput!
) {
  createBankTransfer(condition: $condition, input: $input) {
    amount
    createdAt
    id
    owner
    source
    transactionId
    type
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBankTransferMutationVariables,
  APITypes.CreateBankTransferMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
    content
    createdAt
    id
    transaction {
      amount
      balanceAtCompletion
      createdAt
      description
      id
      owner
      privacyLevel
      receiverId
      requestResolvedAt
      senderId
      source
      status
      updatedAt
      uuid
      __typename
    }
    transactionId
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const createContact = /* GraphQL */ `mutation CreateContact(
  $condition: ModelContactConditionInput
  $input: CreateContactInput!
) {
  createContact(condition: $condition, input: $input) {
    contactUseProfileId
    contactuserProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    createdAt
    id
    owner
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactMutationVariables,
  APITypes.CreateContactMutation
>;
export const createLike = /* GraphQL */ `mutation CreateLike(
  $condition: ModelLikeConditionInput
  $input: CreateLikeInput!
) {
  createLike(condition: $condition, input: $input) {
    createdAt
    id
    owner
    transaction {
      amount
      balanceAtCompletion
      createdAt
      description
      id
      owner
      privacyLevel
      receiverId
      requestResolvedAt
      senderId
      source
      status
      updatedAt
      uuid
      __typename
    }
    transactionId
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLikeMutationVariables,
  APITypes.CreateLikeMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const createTransaction = /* GraphQL */ `mutation CreateTransaction(
  $condition: ModelTransactionConditionInput
  $input: CreateTransactionInput!
) {
  createTransaction(condition: $condition, input: $input) {
    amount
    balanceAtCompletion
    comments {
      nextToken
      __typename
    }
    createdAt
    description
    id
    likes {
      nextToken
      __typename
    }
    owner
    privacyLevel
    receiver {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    receiverId
    requestResolvedAt
    sender {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    senderId
    source
    status
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTransactionMutationVariables,
  APITypes.CreateTransactionMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
    avatar
    balance
    bankAccounts {
      nextToken
      __typename
    }
    bankTransfers {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    contacts {
      nextToken
      __typename
    }
    createdAt
    defaultPrivacyLevel
    email
    id
    isContactRef {
      nextToken
      __typename
    }
    likes {
      nextToken
      __typename
    }
    profileOwner
    transactionsReceiver {
      nextToken
      __typename
    }
    transactionsSender {
      nextToken
      __typename
    }
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteBankAccount = /* GraphQL */ `mutation DeleteBankAccount(
  $condition: ModelBankAccountConditionInput
  $input: DeleteBankAccountInput!
) {
  deleteBankAccount(condition: $condition, input: $input) {
    accountNumber
    bankName
    createdAt
    id
    isDeleted
    owner
    routingNumber
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBankAccountMutationVariables,
  APITypes.DeleteBankAccountMutation
>;
export const deleteBankTransfer = /* GraphQL */ `mutation DeleteBankTransfer(
  $condition: ModelBankTransferConditionInput
  $input: DeleteBankTransferInput!
) {
  deleteBankTransfer(condition: $condition, input: $input) {
    amount
    createdAt
    id
    owner
    source
    transactionId
    type
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBankTransferMutationVariables,
  APITypes.DeleteBankTransferMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
    content
    createdAt
    id
    transaction {
      amount
      balanceAtCompletion
      createdAt
      description
      id
      owner
      privacyLevel
      receiverId
      requestResolvedAt
      senderId
      source
      status
      updatedAt
      uuid
      __typename
    }
    transactionId
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const deleteContact = /* GraphQL */ `mutation DeleteContact(
  $condition: ModelContactConditionInput
  $input: DeleteContactInput!
) {
  deleteContact(condition: $condition, input: $input) {
    contactUseProfileId
    contactuserProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    createdAt
    id
    owner
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactMutationVariables,
  APITypes.DeleteContactMutation
>;
export const deleteLike = /* GraphQL */ `mutation DeleteLike(
  $condition: ModelLikeConditionInput
  $input: DeleteLikeInput!
) {
  deleteLike(condition: $condition, input: $input) {
    createdAt
    id
    owner
    transaction {
      amount
      balanceAtCompletion
      createdAt
      description
      id
      owner
      privacyLevel
      receiverId
      requestResolvedAt
      senderId
      source
      status
      updatedAt
      uuid
      __typename
    }
    transactionId
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLikeMutationVariables,
  APITypes.DeleteLikeMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const deleteTransaction = /* GraphQL */ `mutation DeleteTransaction(
  $condition: ModelTransactionConditionInput
  $input: DeleteTransactionInput!
) {
  deleteTransaction(condition: $condition, input: $input) {
    amount
    balanceAtCompletion
    comments {
      nextToken
      __typename
    }
    createdAt
    description
    id
    likes {
      nextToken
      __typename
    }
    owner
    privacyLevel
    receiver {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    receiverId
    requestResolvedAt
    sender {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    senderId
    source
    status
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTransactionMutationVariables,
  APITypes.DeleteTransactionMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
    avatar
    balance
    bankAccounts {
      nextToken
      __typename
    }
    bankTransfers {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    contacts {
      nextToken
      __typename
    }
    createdAt
    defaultPrivacyLevel
    email
    id
    isContactRef {
      nextToken
      __typename
    }
    likes {
      nextToken
      __typename
    }
    profileOwner
    transactionsReceiver {
      nextToken
      __typename
    }
    transactionsSender {
      nextToken
      __typename
    }
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateBankAccount = /* GraphQL */ `mutation UpdateBankAccount(
  $condition: ModelBankAccountConditionInput
  $input: UpdateBankAccountInput!
) {
  updateBankAccount(condition: $condition, input: $input) {
    accountNumber
    bankName
    createdAt
    id
    isDeleted
    owner
    routingNumber
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBankAccountMutationVariables,
  APITypes.UpdateBankAccountMutation
>;
export const updateBankTransfer = /* GraphQL */ `mutation UpdateBankTransfer(
  $condition: ModelBankTransferConditionInput
  $input: UpdateBankTransferInput!
) {
  updateBankTransfer(condition: $condition, input: $input) {
    amount
    createdAt
    id
    owner
    source
    transactionId
    type
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBankTransferMutationVariables,
  APITypes.UpdateBankTransferMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
    content
    createdAt
    id
    transaction {
      amount
      balanceAtCompletion
      createdAt
      description
      id
      owner
      privacyLevel
      receiverId
      requestResolvedAt
      senderId
      source
      status
      updatedAt
      uuid
      __typename
    }
    transactionId
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const updateContact = /* GraphQL */ `mutation UpdateContact(
  $condition: ModelContactConditionInput
  $input: UpdateContactInput!
) {
  updateContact(condition: $condition, input: $input) {
    contactUseProfileId
    contactuserProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    createdAt
    id
    owner
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactMutationVariables,
  APITypes.UpdateContactMutation
>;
export const updateLike = /* GraphQL */ `mutation UpdateLike(
  $condition: ModelLikeConditionInput
  $input: UpdateLikeInput!
) {
  updateLike(condition: $condition, input: $input) {
    createdAt
    id
    owner
    transaction {
      amount
      balanceAtCompletion
      createdAt
      description
      id
      owner
      privacyLevel
      receiverId
      requestResolvedAt
      senderId
      source
      status
      updatedAt
      uuid
      __typename
    }
    transactionId
    updatedAt
    userProfile {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLikeMutationVariables,
  APITypes.UpdateLikeMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const updateTransaction = /* GraphQL */ `mutation UpdateTransaction(
  $condition: ModelTransactionConditionInput
  $input: UpdateTransactionInput!
) {
  updateTransaction(condition: $condition, input: $input) {
    amount
    balanceAtCompletion
    comments {
      nextToken
      __typename
    }
    createdAt
    description
    id
    likes {
      nextToken
      __typename
    }
    owner
    privacyLevel
    receiver {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    receiverId
    requestResolvedAt
    sender {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    senderId
    source
    status
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTransactionMutationVariables,
  APITypes.UpdateTransactionMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
    avatar
    balance
    bankAccounts {
      nextToken
      __typename
    }
    bankTransfers {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    contacts {
      nextToken
      __typename
    }
    createdAt
    defaultPrivacyLevel
    email
    id
    isContactRef {
      nextToken
      __typename
    }
    likes {
      nextToken
      __typename
    }
    profileOwner
    transactionsReceiver {
      nextToken
      __typename
    }
    transactionsSender {
      nextToken
      __typename
    }
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
