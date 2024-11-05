//  NOTE: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html

import { UserAttributes } from "aws-cdk-lib/aws-iam";

type AttributeObject = {
  [key: string]: {
    order: number;
    required: boolean;
    mutable: boolean;
  };
};

const immutable = ["email"]; // List of immutable attributes
const required = ["givenName", "familyName", "email"];

function createdAttributes(attributes: string[]): AttributeObject {
  return attributes.reduce((result, attribute, index) => {
    result[attribute] = {
      order: index + 1,
      required: required.includes(attribute),
      mutable: !immutable.includes(attribute), // Set mutable to false if in immutable array
    };
    return result;
  }, {} as AttributeObject);
}

export const attributes = [
  "givenName",
  "nickname",
  "middleName",
  "familyName",
  "email",
  "phone_number",
  "profile",
  "picture",
  "website",
  "gender",
  "birthdate",
  "address",
];

export default createdAttributes(attributes) as Partial<UserAttributes>;
