import { PropsWithChildren } from "react";
import styles from "./Inlet.module.css";

interface InletProps extends PropsWithChildren {
  id: string;
}

export default function Inlet({ id, ...props }: InletProps) {
  return <section id={id} className={styles.Inlet} {...props} />;
}
