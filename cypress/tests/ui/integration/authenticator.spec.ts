describe("Authenticator:", function () {
  // Step 1: setup the application state
  beforeEach(function () {
    cy.visit("/access");
  });

  describe("Sign In:", () => {
    it("allows a user to signin", () => {
      // Step 2: Take an action (Sign in)
      cy.get(selectors.emailInput).type("avael.us+1@gmail.com");
      cy.get(selectors.signInPasswordInput).type("Test123!");
      cy.get(selectors.signInButton).contains("Sign in").click();

      cy.wait(3000);

      // Step 3: Make an assertion (Check for sign-out text)
      cy.get(selectors.menuButton).click();
      cy.get(selectors.signOutButton).contains("Logout");
    });
  });
});
export const selectors = {
  // Auth component classes
  emailInput: "[id='amplify-id-:r8:']",
  signInPasswordInput: "[id='amplify-id-:re:']",
  signInButton: ".amplify-button",
  signOutButton: "[data-test='logout-button']",
  menuButton: "[data-testid='amplify-menu-trigger-test-id']",
};
