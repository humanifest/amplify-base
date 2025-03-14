import {
  CognitoIdentityProviderClient,
  AdminConfirmSignUpCommand,
  AdminUpdateUserAttributesCommand,
  AdminDeleteUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";

import { signUp } from "aws-amplify/auth";

import { promises as fs } from "fs";

export class AtgCognito {
  cognito;
  amplifyOutputs;

  constructor(amplifyOutputs) {
    this.amplifyOutputs = amplifyOutputs;
    this.cognito = new CognitoIdentityProviderClient({
      region: this.amplifyOutputs.auth.aws_region,
    });
    console.log(
      "AtgCognito initialized with region:",
      this.amplifyOutputs.auth.aws_region
    );
  }

  async createUser(username, password, givenName, familyName) {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: [
          { name: "email", value: username },
          { name: "given_name", value: givenName },
          { name: "family_name", value: familyName },
        ],
      },
    });

    console.log(`isSignUpComplete: ${JSON.stringify(isSignUpComplete)}`);
    console.log(`userId: ${JSON.stringify(userId)}`);
    console.log(`nextStep: ${JSON.stringify(nextStep)}`);

    return String(userId);
  }

  async deleteUser(username) {
    const params = {
      UserPoolId: this.amplifyOutputs.auth.user_pool_id,
      Username: username,
    };

    const command = new AdminDeleteUserCommand(params);

    try {
      await this.cognito.send(command);
      console.log(`User ${username} has been deleted successfully.`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  async confirmUser(username) {
    const params = {
      UserPoolId: this.amplifyOutputs.auth.user_pool_id,
      Username: username,
    };
    const command = new AdminConfirmSignUpCommand(params);

    console.log("Sending AdminConfirmSignUpCommand with:", params);
    try {
      await this.cognito.send(command);
      console.log(`User ${username} has been confirmed successfully.`);
    } catch (error) {
      console.error("Error confirming user:", error);
    }
  }

  async verifyUserEmail(username) {
    const params = {
      UserPoolId: this.amplifyOutputs.auth.user_pool_id,
      Username: username,
      UserAttributes: [
        {
          Name: "email_verified",
          Value: "true",
        },
      ],
    };
    const command = new AdminUpdateUserAttributesCommand(params);

    console.log("Sending AdminUpdateUserAttributesCommand with:", params);
    try {
      await this.cognito.send(command);
      console.log(`Email for user ${username} has been verified successfully.`);
    } catch (error) {
      console.error("Error verifying email:", error);
    }
  }

  async readCredentialsFile(filePath) {
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      return JSON.parse(fileContent);
    } catch (error) {
      console.error(
        `Failed to read the credentials file. Error: ${error.message}`
      );
      return [];
    }
  }
}
