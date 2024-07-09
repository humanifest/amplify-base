import { PropsWithChildren, useState } from "react";
import { createHybridContext } from "@/src/utils";

export const LoadingContext = createHybridContext<boolean>(false);

export default function ProviderLoading(props: PropsWithChildren) {
  return (
    <LoadingContext.Provider value={useState<boolean>(false)} {...props} />
  );
}
