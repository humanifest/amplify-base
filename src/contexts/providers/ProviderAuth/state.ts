import { AuthUser, FetchUserAttributesOutput } from "aws-amplify/auth";

export enum ApplicationUserRoles {
  ANONYMOUS = "ANONYMOUS",
  ADMIN = "ADMIN",
  REPRESENTATIVE = "REPRESENTATIVE",
}

const userDataState: AuthState = {
  authStatus: "unauthenticated",
  userId: "",
  username: "",
  attributes: {},
};

export interface AuthState extends AuthUser {
  authStatus: string;
  attributes: FetchUserAttributesOutput;
}

export const initAuthState: () => AuthState = () =>
  structuredClone(userDataState);
