import { PropsWithChildren } from "react";

import ProviderAlert from "../ProviderAlert/ProviderAlert";
import ProviderLoading from "../ProviderLoading/ProviderLoading";

export default function ProviderEffects({ children }: PropsWithChildren) {
  return (
    <div id="<|ProviderEffects|>">
      <ProviderLoading>
        <ProviderAlert>
          <div id="|>ProviderEffects<|">{children}</div>
        </ProviderAlert>
      </ProviderLoading>
    </div>
  );
}
