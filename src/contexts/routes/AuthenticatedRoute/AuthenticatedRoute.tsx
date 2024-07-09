import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Route } from "react-router-dom";
import { ReactNode } from "react";

export default function AuthenticatedRoute({
  element,
  ...rest
}: {
  element: ReactNode;
}) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <Route
      {...rest}
      element={authStatus !== "authenticated" ? <Authenticator /> : element}
    />
  );
}
