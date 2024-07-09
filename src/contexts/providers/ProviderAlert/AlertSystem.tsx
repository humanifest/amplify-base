import { useEffect, useMemo, useState } from "react";

import styles from "./AlertSystem.module.css";
import useTimeout from "@/src/contexts/hooks/useTimeout/useTimeout";
import { ContextStateType } from "@/src/utils";
import { AlertState, initAlertState } from "./state";
import { Alert } from "@aws-amplify/ui-react";
import { alertTimeout } from "@/src/assets";

const defaultState = initAlertState();

export const AlertSystem = ({
  state,
}: {
  state: ContextStateType<AlertState>;
}) => {
  const [alertState, setAlertState] = state;
  const { alert } = alertState;
  const [show, setShow] = useState(false);
  const handleClose = useMemo(
    () => () => {
      setShow(false);
      setTimeout(() => setAlertState(defaultState), alertTimeout);
    },
    [setAlertState]
  );

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        handleClose();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [handleClose]);

  useEffect(() => {
    setShow(!!alertState.alert);
  }, [alertState]);

  useTimeout(handleClose, !!alert);

  return (
    <div id={styles.snackbar} className={styles.show}>
      {show && <Alert {...alert} data-test={`${alert?.variation}-alert`} />}
    </div>
  );
};
