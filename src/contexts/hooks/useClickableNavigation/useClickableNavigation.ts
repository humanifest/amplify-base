import { useContext, useMemo } from "react";
import { useHydratedUrls } from "..";
import { AuthContext, FeatureFlagContext } from "@/src/contexts/providers";
import { useFeaturePaths } from "../useFeaturePaths";
import { IconType } from "react-icons";
// import { AiFillHome } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillTool } from "react-icons/ai";

export interface ClickableNav {
  url: string;
  icon: IconType;
  "data-test": string;
}

export function useSecretPaths() {
  const { showDevOpts } = useContext(FeatureFlagContext);
  const routes = useHydratedUrls();

  return useMemo(() => {
    const devPaths = {
      _sandbox: {
        url: routes.dev._,
        icon: AiFillTool,
        "data-test": "sandbox-button",
      },
    };

    let result = {};

    result = showDevOpts ? { ...result, ...devPaths } : result;

    return result;
  }, [showDevOpts, routes]);
}

export default function useClickableNavigation(): Record<string, ClickableNav> {
  const { state: authState } = useContext(AuthContext);
  const routes = useHydratedUrls();

  const secretPaths = useSecretPaths();
  const featurePaths = useFeaturePaths();

  return useMemo(() => {
    const authPaths: Record<string, ClickableNav> = {
      Dashboard: {
        icon: AiFillDashboard,
        url: routes.access.dashboard._,
        "data-test": "dashboard-button",
      },
    };

    let result = { ...secretPaths, ...featurePaths };
    result = authState?.userId ? { ...result, ...authPaths } : result;
    return result;
  }, [routes.access.dashboard._, secretPaths, featurePaths, authState?.userId]);
}
