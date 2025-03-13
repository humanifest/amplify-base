import {
  CognitoIdentityProviderClient,
  AdminConfirmSignUpCommand,
  AdminUpdateUserAttributesCommand,
  AdminDeleteUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";

import { signUp } from "aws-amplify/auth";

import * as fs from "fs/promises";

export interface TestCredential {
  username: string;
  password: string;
  kind: string;
}

export class AtgCognito {
  cognito: CognitoIdentityProviderClient;
  amplifyOutputs: any;

  constructor(amplifyOutputs: any) {
    this.amplifyOutputs = amplifyOutputs;
    this.cognito = new CognitoIdentityProviderClient({
      region: this.amplifyOutputs.auth.aws_region,
    });
    console.log(
      "AtgCognito initialized with region:",
      this.amplifyOutputs.auth.aws_region
    );
  }

  async createUser(username: string, password: string): Promise<String> {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: username,
      password: password,
      options: {
        userAttributes: {
          email: username,
        },
      },
    });

    console.log(`isSignUpComplete: ${JSON.stringify(isSignUpComplete)}`);
    console.log(`userId: ${JSON.stringify(userId)}`);
    console.log(`nextStep: ${JSON.stringify(nextStep)}`);

    return String(userId);
  }

  async deleteUser(username: string) {
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
  async confirmUser(username: string) {
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

  async verifyUserEmail(username: string) {
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

  async readCredentialsFile(filePath: string): Promise<TestCredential[]> {
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      return JSON.parse(fileContent) as TestCredential[];
    } catch (error: any) {
      console.error(
        `Failed to read the credentials file. Error: ${error.message}`
      );
      return [];
    }
  }
}
