import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "AppResources",
  access: (allow) => ({
    "public/*": [allow.authenticated.to(["read"])],
    "auth/*": [allow.authenticated.to(["read", "write"])],
  }),
});
