const userAttributes = {
  givenName: { order: 1, required: true, mutable: true },
  familyName: { order: 2, required: true, mutable: true },
  email: { order: 3, required: true },
  phoneNumber: { order: 4, required: false },
};

export default userAttributes;
