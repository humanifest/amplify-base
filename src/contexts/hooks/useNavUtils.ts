import { useContext, useMemo } from "react";
import { AuthContext } from "../providers";
import { AiOutlineLogout } from "react-icons/ai";
import { IconType } from "react-icons";

export interface ClickableNavUtil {
  icon: IconType;
  onClick: VoidFunction;
  "data-test": string;
}

export default function useNavUtils(): Record<string, ClickableNavUtil> {
  const { state: authState, logout } = useContext(AuthContext);

  return useMemo(() => {
    const authUtils: Record<string, ClickableNavUtil> = {
      Logout: {
        icon: AiOutlineLogout,
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