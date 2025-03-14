import {
  CognitoIdentityProviderClient,
  AdminConfirmSignUpCommand,
  AdminUpdateUserAttributesCommand,
  AdminDeleteUserCommand,
  AdminGetUserCommand,
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
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            // ✅ Fix: Use an object instead of an array
            email: username,
            given_name: givenName,
            family_name: familyName,
          },
        },
      });

      console.log(`✅  isSignUpComplete: ${JSON.stringify(isSignUpComplete)}`);
      console.log(`✅  userId: ${JSON.stringify(userId)}`);
      console.log(`✅  nextStep: ${JSON.stringify(nextStep)}`);

      return String(userId);
    } catch (error) {
      console.error("❌ Error during user signup:", error);
      throw error;
    }
  }

  // async deleteUser(username) {
  //   const params = {
  //     UserPoolId: this.amplifyOutputs.auth.user_pool_id,
  //     Username: username,
  //   };

  //   const command = new AdminDeleteUserCommand(params);

  //   try {
  //     await this.cognito.send(command);
  //     console.log(`User ${username} has been deleted successfully.`);
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  // }
  async deleteUser(username) {
    const params = {
      UserPoolId: this.amplifyOutputs.auth.user_pool_id,
      Username: username,
    };

    try {
      const getUserCommand = new AdminGetUserCommand(params);
      // ✅ Step 1: Check if the user exists
      await this.cognito.send(getUserCommand);

      // ✅ Step 2: If user exists, proceed with deletion
      const deleteCommand = new AdminDeleteUserCommand(params);
      await this.cognito.send(deleteCommand);
      console.log(`🗑️ User ${username} deleted successfully.`);
    } catch (error) {
      if (error.name === "UserNotFoundException") {
        console.warn(`⚠️ User ${username} does not exist. Skipping delete.`);
        return;
      }
      console.error("🚨 Error deleting user:", error);
      throw error; // If it's another error, rethrow it
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
