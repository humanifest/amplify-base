import { Schema } from "@/data-schema";
import { generateClient } from "aws-amplify/data";
import { PropsWithChildren, createContext } from "react";

const client = generateClient<Schema>();

export const ProviderClientContext = createContext(client);

export default function ProviderClient(props: PropsWithChildren) {
  return (
    <div id="<|ProviderClient|>">
      <ProviderClientContext.Provider value={client} {...props} />
    </div>
  );
}
