import { Dispatch, SetStateAction, createContext } from "react";
import { unsafePlaceholder } from ".";

export type ContextStateType<S> = [
  state: S,
  setState: Dispatch<SetStateAction<S>>
];

export const createInitialContextState = <state>(
  initalState: state
): [state, Dispatch<SetStateAction<state>>] =>
  [initalState, unsafePlaceholder as Dispatch<SetStateAction<state>>] as const;

export const createHybridContext = <state>(initialState?: state) =>
  createContext(createInitialContextState(initialState as state));
