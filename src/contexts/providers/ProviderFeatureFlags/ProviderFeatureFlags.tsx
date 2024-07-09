import { PropsWithChildren, createContext, useState } from "react";
import initFeatureFlagState from "./state";
import { unsafePlaceholder } from "@/src/utils";

const reference = initFeatureFlagState();
type FeatureFlagState = typeof reference;
type flags = keyof FeatureFlagState;

export interface FeatureFlagContextType extends FeatureFlagState {
  toggleFlag: (flag: flags) => void;
  flags: flags[];
}

const useFeatureFlags = (): FeatureFlagContextType => {
  const [state, setState] = useState<FeatureFlagState>(reference);
  const getFlags = (): flags[] => Object.keys(state) as flags[];
  const toggleFlag = (flag: flags) =>
    setState((prev) => ({ ...prev, [flag]: !prev[flag] }));

  return {
    ...state,
    toggleFlag,
    flags: getFlags(),
  };
};

export const FeatureFlagContext = createContext<FeatureFlagContextType>({
  ...reference,
  toggleFlag: unsafePlaceholder,
  flags: [],
});

export default function ProviderFeatureFlag(props: PropsWithChildren) {
  return <FeatureFlagContext.Provider value={useFeatureFlags()} {...props} />;
}
