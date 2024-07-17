import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  FetchUserAttributesOutput,
  fetchUserAttributes,
} from "aws-amplify/auth";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import ProviderAmplifyAuthenticator from "./ProviderAmplifyAuthenticator";
import { initAuthState, AuthState } from "./state";
import { unsafePlaceholder } from "@/src/utils";

type AuthContextType = {
  state: AuthState;
  logout: VoidFunction;
};

const useAuth = (): AuthContextType => {
  const [attributes, setAttributes] = useState<FetchUserAttributesOutput>({});

  const { user, signOut, authStatus } = useAuthenticator((context) => [
    context.user,
    context.authStatus,
  ]);
  const [state, setAuthState] = useState<AuthState>(initAuthState());

  const logout = useCallback(() => {
    signOut();
    setAuthState(initAuthState());
  }, [signOut, setAuthState]);

  const login = useCallback(() => {
    setAuthState((u) => ({ ...u, ...user }));
  }, [user]);

  const userAttributes = async () => {
    const attributes = await fetchUserAttributes();
    setAttributes(attributes);
  };

  useEffect(() => {
    if (user?.userId != state?.userId) {
      user?.signInDetails?.loginId ? login() : logout();
    }
  }, [state?.userId, user, login, logout]);

  useEffect(() => {
    setAuthState((prev) => ({ ...prev, attributes, authStatus }));
  }, [attributes, user, authStatus]);

  useEffect(() => {
    user?.signInDetails && userAttributes();
  }, [user?.signInDetails]);

  return {
    state,
    logout,
  };
};

export const AuthContext = createContext<AuthContextType>({
  state: initAuthState(),
  logout: unsafePlaceholder,
});

interface AuthInnerProps extends PropsWithChildren {}

const ProviderAuthInner = ({ ...props }: AuthInnerProps) => {
  return <AuthContext.Provider value={useAuth()} {...props} />;
};

export default function ProviderAuth(props: PropsWithChildren) {
  return (
    <ProviderAmplifyAuthenticator>
      <ProviderAuthInner {...props} />
    </ProviderAmplifyAuthenticator>
  );
}
