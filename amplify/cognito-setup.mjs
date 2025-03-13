import { Amplify } from "aws-amplify";
import amplifyOutputs from "../amplify_outputs.json" assert { type: "json" };
import { AtgCognito, TestCredential } from "./atg-cognito";
// import { ExplicitAuthFlowsType } from '@aws-sdk/client-cognito-identity-provider';

// Configure Amplify with the outputs
Amplify.configure(amplifyOutputs);

const atgCognito = new AtgCognito(amplifyOutputs);

const testCredentials = await atgCognito.readCredentialsFile(
  "./auth/.atg.tester.json"
);

async function setupCognitoUsers() {
  if (testCredentials.length != 0) {
    for (const cred of testCredentials) {
      console.log("✅", JSON.stringify(cred));
      // Just in case. You can safely ignore error here
      // TODO - fail silently? Some failures (e.g. token expired) suggest not.
      let userId = "";
      try {
        await atgCognito.deleteUser(cred.username);
        userId = await atgCognito.createUser(cred.username, cred.password);
        await atgCognito.verifyUserEmail(cred.username);
        await atgCognito.confirmUser(cred.username);
      } catch (error) {
        console.error(`❌ Error creating or confirming user: ${error}`);
        process.exit(1);
      }
    }
  } else {
    console.warn("No test users found!");
  }
}

setupCognitoUsers();
