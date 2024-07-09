import { AuthUser, FetchUserAttributesOutput } from "aws-amplify/auth";

export enum ApplicationUserRoles {
  ANONYMOUS = "ANONYMOUS",
  ADMIN = "ADMIN",
  REPRESENTATIVE = "REPRESENTATIVE",
}

const userDataState: AuthState = {
  userId: "0",
  username: "",
  attributes: {},
};

export interface AuthState extends AuthUser {
  attributes: FetchUserAttributesOutput;
}

export const initAuthState: () => AuthState = () =>
  structuredClone(userDataState);
