/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBankAccount = /* GraphQL */ `
  query GetBankAccount($id: ID!) {
    getBankAccount(id: $id) {
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
export const getBankTransfer = /* GraphQL */ `
  query GetBankTransfer($id: ID!) {
    getBankTransfer(id: $id) {
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
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listBankAccounts = /* GraphQL */ `
  query ListBankAccounts(
    $filter: ModelBankAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBankAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        accountNumber
        bankName
        createdAt
        id
        isDeleted
        owner
        routingNumber
        updatedAt
        userProfileId
        uuid
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listBankTransfers = /* GraphQL */ `
  query ListBankTransfers(
    $filter: ModelBankTransferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBankTransfers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        amount
        createdAt
        id
        owner
        source
        transactionId
        type
        updatedAt
        userProfileId
        uuid
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        transactionId
        updatedAt
        userProfileId
        uuid
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        contactUseProfileId
        createdAt
        id
        owner
        updatedAt
        userProfileId
        uuid
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        owner
        transactionId
        updatedAt
        userProfileId
        uuid
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
