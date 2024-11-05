const userAttributes = {
  givenName: { order: 1, required: true, mutable: true },
  familyName: { order: 2, required: true, mutable: true },
  email: { order: 3, required: true },
  phoneNumber: { order: 4, required: false },
};

export const extendedUserAttributeOptions = [
  "name",
  "family_name",
  "given_name",
  "middle_name",
  "nickname",
  "preferred_username",
  "profile",
  "picture",
  "website",
  "gender",
  "birthdate",
  "zoneinfo",
  "locale",
  "updated_at",
  "address",
  "email",
  "phone_number",
  "sub",
];

export default userAttributes;
