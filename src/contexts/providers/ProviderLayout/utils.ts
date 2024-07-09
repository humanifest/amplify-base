import { createContext, useState } from "react";
import { unsafePlaceholder } from "@/src/utils";

export interface LayoutFeatureStateType {
  visible: boolean;
  expanded: boolean;
}

interface LayoutFeatureContextType {
  state: LayoutFeatureStateType;
  setVisibility: (update: boolean) => void;
  setExpansion: (update: boolean) => void;
}

const layoutFeatureState = {
  visible: false,
  expanded: false,
};

export const initialStateLayoutFeature = () =>
  structuredClone(layoutFeatureState);

export const useLayoutFeature = (stateOverride?: LayoutFeatureStateType) => {
  const [state, setState] = useState(
    stateOverride || initialStateLayoutFeature()
  );

  const setVisibility = (update: boolean) =>
    setState((s) => ({ ...s, visible: update }));

  const setExpansion = (update: boolean) => {
    setState((s) => ({ ...s, expanded: update }));
  };

  return { state, setVisibility, setExpansion };
};

export const createLayoutFeatureContext = () => {
  return createContext<LayoutFeatureContextType>({
    state: initialStateLayoutFeature(),
    setVisibility: unsafePlaceholder,
    setExpansion: unsafePlaceholder,
  });
};
