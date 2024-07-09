import { useEffect } from "react";

export default function useAlertTimeout(
  cb: VoidFunction,
  condition: boolean,
  ttl: number = 5500
) {
  useEffect(() => {
    if (condition) {
      setTimeout(() => cb(), ttl);
    }
  }, [condition, cb, ttl]);
}
