import { PropsWithChildren, useState } from "react";
import { AlertState, initAlertState } from "./state";
import { createHybridContext } from "@/src/utils";
import { AlertSystem } from "./AlertSystem";

export const AlertContext = createHybridContext<AlertState>(initAlertState());

export default function ProviderAlert({
  children,
  ...props
}: PropsWithChildren) {
  const state = useState<AlertState>(initAlertState());

  return (
    <AlertContext.Provider value={state} {...props}>
      {children}
      <AlertSystem state={state} />
    </AlertContext.Provider>
  );
}
