import { PropsWithChildren } from "react";
import styles from "./StageMain.module.css";

const VARIATIONS = {
  DEFAULT: styles.Main,
  WIDE: styles.Wide,
};

interface StageMainProps extends PropsWithChildren {
  variation?: keyof typeof VARIATIONS;
}
export default function StageMain({
  variation = "DEFAULT",
  ...props
}: StageMainProps) {
  return (
    <main id="<|StageMain|>" className={VARIATIONS[variation]} {...props} />
  );
}
