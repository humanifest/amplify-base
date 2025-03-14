import { Amplify } from "aws-amplify";
import amplifyOutputs from "../../amplify_outputs.json" assert { type: "json" };
import { AtgCognito } from "./atg-cognito.mjs";

// Configure Amplify with the outputs
Amplify.configure(amplifyOutputs);

const atgCognito = new AtgCognito(amplifyOutputs);

async function setupCognitoUsers() {
  // ✅ Use `readCredentialsFile` from AtgCognito
  const testCredentials = await atgCognito.readCredentialsFile(
    new URL("./.atg.tester.json", import.meta.url)
  );

  if (testCredentials.length > 0) {
    for (const cred of testCredentials) {
      const { username, password, givenName, familyName } = cred;
      console.log("✅", JSON.stringify(cred));

      try {
        await atgCognito.deleteUser(username);
        await atgCognito.createUser(username, password, givenName, familyName);
        await atgCognito.verifyUserEmail(username);
        await atgCognito.confirmUser(username);
      } catch (error) {
        console.error(`❌ Error creating or confirming user: ${error}`);
        process.exit(1);
      }
    }
  } else {
    console.warn("⚠️ No test users found!");
  }
}

setupCognitoUsers();
