import { Amplify } from "aws-amplify";
import amplifyOutputs from "../../amplify_outputs.json" assert { type: "json" };
import { AtgCognito } from "./atg-cognito.mjs";
import testCredentials from "./.atg.tester.json" assert { type: "json" };

// Configure Amplify with the outputs
Amplify.configure(amplifyOutputs);

const atgCognito = new AtgCognito(amplifyOutputs);

async function setupCognitoUsers() {
  if (testCredentials.length != 0) {
    for (const cred of testCredentials) {
      console.log("✅", JSON.stringify(cred));
      // Just in case. You can safely ignore error here
      // TODO - fail silently? Some failures (e.g. token expired) suggest not.

      try {
        await atgCognito.deleteUser(cred.username);
        await atgCognito.createUser(
          cred.username,
          cred.password,
          cred.givenName,
          cred.familyName
        );
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
