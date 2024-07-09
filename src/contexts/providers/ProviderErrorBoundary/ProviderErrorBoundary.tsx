import { createContext, Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
type Value = boolean;

export interface ErrorState {
  hasError: Value;
}

const defaultValue = {
  hasError: false,
};

export const ErrorBoundaryContext = createContext<ErrorState>(defaultValue);

export default class ErrorBoundaryProvider extends Component<
  Props,
  ErrorState
> {
  public state: ErrorState = { ...defaultValue };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public static getDerivedStateFromError(_: Error): ErrorState {
    // NOTE: this doesn't catch setTimeout()
    console.error(_);
    return {
      // TODO: Alert Sentry
      hasError: true,
    };
  }

  public render() {
    return (
      <div id="<|ErrorBoundaryContext.Provider|>">
        <ErrorBoundaryContext.Provider value={this.state} {...this.props} />
      </div>
    );
  }
}
