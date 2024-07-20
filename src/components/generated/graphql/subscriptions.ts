/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBankAccount = /* GraphQL */ `
  subscription OnCreateBankAccount(
    $filter: ModelSubscriptionBankAccountFilterInput
    $owner: String
  ) {
    onCreateBankAccount(filter: $filter, owner: $owner) {
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
`;
export const onCreateBankTransfer = /* GraphQL */ `
  subscription OnCreateBankTransfer(
    $filter: ModelSubscriptionBankTransferFilterInput
    $owner: String
  ) {
    onCreateBankTransfer(filter: $filter, owner: $owner) {
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
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onCreateContact(filter: $filter, owner: $owner) {
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
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onCreateLike(filter: $filter, owner: $owner) {
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
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onCreateTransaction(filter: $filter, owner: $owner) {
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
`;
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
`;
export const onDeleteBankAccount = /* GraphQL */ `
  subscription OnDeleteBankAccount(
    $filter: ModelSubscriptionBankAccountFilterInput
    $owner: String
  ) {
    onDeleteBankAccount(filter: $filter, owner: $owner) {
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
`;
export const onDeleteBankTransfer = /* GraphQL */ `
  subscription OnDeleteBankTransfer(
    $filter: ModelSubscriptionBankTransferFilterInput
    $owner: String
  ) {
    onDeleteBankTransfer(filter: $filter, owner: $owner) {
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
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onDeleteContact(filter: $filter, owner: $owner) {
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
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onDeleteLike(filter: $filter, owner: $owner) {
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
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onDeleteTransaction(filter: $filter, owner: $owner) {
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
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
`;
export const onUpdateBankAccount = /* GraphQL */ `
  subscription OnUpdateBankAccount(
    $filter: ModelSubscriptionBankAccountFilterInput
    $owner: String
  ) {
    onUpdateBankAccount(filter: $filter, owner: $owner) {
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
`;
export const onUpdateBankTransfer = /* GraphQL */ `
  subscription OnUpdateBankTransfer(
    $filter: ModelSubscriptionBankTransferFilterInput
    $owner: String
  ) {
    onUpdateBankTransfer(filter: $filter, owner: $owner) {
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
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onUpdateContact(filter: $filter, owner: $owner) {
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
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onUpdateLike(filter: $filter, owner: $owner) {
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
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onUpdateTransaction(filter: $filter, owner: $owner) {
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
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
`;
