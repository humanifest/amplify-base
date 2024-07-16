import { useContext, useMemo } from "react";
import { AuthContext } from "../providers";

export interface ClickableNavUtil {
  onClick: VoidFunction;
  "data-test": string;
}

export default function useNavUtils(): Record<string, ClickableNavUtil> {
  const { state: authState, logout } = useContext(AuthContext);

  return useMemo(() => {
    const authUtils = {
      Logout: {
        onClick: () => {
          logout();
        },
        "data-test": "logout-button",
      },
    };

    let result = {};
    result = authState?.userId ? { ...result, ...authUtils } : result;
    return result;
  }, [authState?.userId, logout]);
}
