import { Authenticator } from "@aws-amplify/ui-react";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  children: React.ReactNode;
}

export default function ProviderAmplifyAuthenticator({ ...props }: Props) {
  return <Authenticator.Provider {...props} />;
}
