import { useContext, useMemo } from "react";
import { useHydratedUrls } from "..";
import { AuthContext, FeatureFlagContext } from "@/src/contexts/providers";
import { useFeaturePaths } from "../useFeaturePaths";

export interface ClickableNav {
  url: string;
  "data-test": string;
}

export function useSecretPaths() {
  const { showDevOpts } = useContext(FeatureFlagContext);
  const routes = useHydratedUrls();

  return useMemo(() => {
    const devPaths = {
      _sandbox: {
        url: routes.dev._,
      },
      Dashboard: {
        url: routes.feature.dashboard._,
      },
    };

    let result = {};

    result = showDevOpts ? { ...result, ...devPaths } : result;

    return result;
  }, [showDevOpts, routes]);
}

export default function useClickableNavigation(): Record<string, ClickableNav> {
  const { state: authState } = useContext(AuthContext);

  const secretPaths = useSecretPaths();
  const featurePaths = useFeaturePaths();

  return useMemo(() => {
    const authPaths = {};

    let result = { ...secretPaths, ...featurePaths };
    result = authState?.userId ? { ...authPaths, ...result } : result;
    return result;
  }, [authState, secretPaths, featurePaths]);
}
