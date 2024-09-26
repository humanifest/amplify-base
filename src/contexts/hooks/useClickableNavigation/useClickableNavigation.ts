import { useContext, useMemo } from "react";
import { useHydratedUrls } from "..";
import { AuthContext, FeatureFlagContext } from "@/src/contexts/providers";
import { useFeaturePaths } from "../useFeaturePaths";
import { IconType } from "react-icons";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillTool } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";

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
  const {
    state: { authStatus },
  } = useContext(AuthContext);
  const routes = useHydratedUrls();

  const secretPaths = useSecretPaths();
  const featurePaths = useFeaturePaths();

  return useMemo(() => {
    const authPaths: Record<string, ClickableNav> = {
      Profile: {
        icon: AiOutlineUser,
        url: routes.access.profile._,
        "data-test": "profile-button",
      },
      Dashboard: {
        icon: AiFillDashboard,
        url: routes.access.dashboard._,
        "data-test": "dashboard-button",
      },
    };

    const unauthPaths: Record<string, ClickableNav> = {
      Home: {
        icon: AiFillHome,
        url: routes._,
        "data-test": "home-button",
      },
      Login: {
        icon: AiOutlineLogin,
        url: routes.access.dashboard._,
        "data-test": "login-button",
      },
    };

    let result = {
      ...secretPaths,
      ...featurePaths,
    };
    result =
      authStatus === "authenticated"
        ? { ...authPaths, ...result }
        : { ...unauthPaths, ...result };
    return result;
  }, [routes, secretPaths, featurePaths, authStatus]);
}
