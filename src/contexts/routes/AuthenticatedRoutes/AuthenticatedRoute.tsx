import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Route } from "react-router-dom";
import { ReactNode } from "react";

export default function AuthenticatedRoute({
  element,
}: {
  element: ReactNode;
}) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <Route
      element={authStatus !== "authenticated" ? <Authenticator /> : element}
    ></Route>
  );
}
