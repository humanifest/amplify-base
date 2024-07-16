import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "avaelus",
  retries: {
    runMode: 2,
  },
  env: {
    coverage: false,
    codeCoverage: {
      url: "http://localhost:3001/__coverage__",
      exclude: "cypress/**/*.*",
    },
    defaultPassword: process.env.SEED_DEFAULT_USER_PASSWORD,
    paginationPageSize: process.env.PAGINATION_PAGE_SIZE,

    // Amazon Cognito
    cognito_username: process.env.AWS_COGNITO_USERNAME,
    cognito_password: process.env.AWS_COGNITO_PASSWORD,
    cognito_domain: process.env.AWS_COGNITO_DOMAIN,
    cognito_programmatic_login: false,
    // awsConfig: awsConfig.default,

    // Google
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.VITE_GOOGLE_CLIENTID,
    googleClientSecret: process.env.VITE_GOOGLE_CLIENT_SECRET,
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    viewportHeight: 1000,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,
    setupNodeEvents() {},
  },
});
