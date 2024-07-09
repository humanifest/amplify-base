import { AlertVariations } from "@aws-amplify/ui-react";

export interface AlertProps {
  variation?: AlertVariations;
  heading: string;
  isDismissible?: boolean;
  hasIcon?: boolean;
  children?: string;
}

export interface AlertState {
  show?: boolean;
  alert: null | AlertProps;
}

export const initAlertState: () => AlertState = () => ({
  show: false,
  alert: null,
});

export const alertVariations: Array<AlertVariations | undefined> = [
  undefined,
  "info",
  "success",
  "warning",
  "error",
];
