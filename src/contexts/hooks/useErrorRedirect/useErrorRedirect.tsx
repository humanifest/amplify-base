import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "@/src/contexts/providers/ProviderAlert/ProviderAlert";
import { ErrorBoundaryContext } from "@/src/contexts/providers/ProviderErrorBoundary/ProviderErrorBoundary";
import { ROUTES } from "@/src/contexts/routes";
import { FeatureFlagContext } from "../../providers";

export default function useErrorRedirect() {
  // This represents a UI response to an application-wide error
  const { hasError } = useContext(ErrorBoundaryContext);
  const [, setAlert] = useContext(AlertContext);
  const { showDevOpts } = useContext(FeatureFlagContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasError) {
      // TODO: alert sentry
      console.error(hasError);

      if (!showDevOpts) {
        navigate(ROUTES._);
      }

      setAlert({
        show: true,
        alert: {
          variation: "error",
          heading: "Error",
          isDismissible: true,
          children: "Please reload",
        },
      });
    }
  }, [hasError, navigate, setAlert, showDevOpts]);
}
