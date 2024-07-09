import { defineAuth } from "@aws-amplify/backend";
import { postConfirmation } from "../functions/post-confirmation/resource";
import userAttributes from "./userAttributes";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes,
  triggers: {
    postConfirmation,
  },
});
