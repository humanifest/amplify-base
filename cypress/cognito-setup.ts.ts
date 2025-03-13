import { Amplify } from "aws-amplify";
import amplifyOutputs from "../amplify_outputs.json" assert { type: "json" };
import { AtgCognito, TestCredential } from "./atg-cognito";
// import { ExplicitAuthFlowsType } from '@aws-sdk/client-cognito-identity-provider';

// Configure Amplify with the outputs
Amplify.configure(amplifyOutputs);

const atgCognito: AtgCognito = new AtgCognito(amplifyOutputs);

const testCredentials = await atgCognito.readCredentialsFile(
  "../amplify/auth/.atg.tester.json"
);

if (testCredentials.length != 0) {
  for (const cred of testCredentials) {
    console.log(JSON.stringify(cred));
    // Just in case. You can safely ignore error here
    // TODO - fail silently? Some failures (e.g. token expired) suggest not.
    let userId: String = "";
    try {
      await atgCognito.deleteUser(cred.username);
      userId = await atgCognito.createUser(cred.username, cred.password);
      await atgCognito.verifyUserEmail(cred.username);
      await atgCognito.confirmUser(cred.username);
    } catch (error) {
      console.error(`Error creating or confirming user: ${error}`);
      process.exit(1);
    }
  }
} else {
  console.warn("No test users found!");
}

// async function setupCognitoUsers() {
//     try {
//         const testCredentials = [
//             {
//                 username: process.env.TEST_USER_EMAIL || "avael.us+1@gmail.com",
//                 password: process.env.TEST_USER_PASSWORD || "Test123!",
//                 kind: "test"
//             }
//         ];

//         for (const cred of testCredentials) {
//             console.log(`Processing test user: ${cred.username}`);

//             await atgCognito.deleteUser(cred.username);
//             await atgCognito.createUser(cred.username, cred.password);
//             await atgCognito.verifyUserEmail(cred.username);
//             await atgCognito.confirmUser(cred.username);

//             console.log(`✅ User ${cred.username} created and confirmed.`);
//         }
//     } catch (error) {
//         console.error("❌ Cognito setup failed:", error);
//         process.exit(1); // Fail fast
//     }
// }

// setupCognitoUsers();
