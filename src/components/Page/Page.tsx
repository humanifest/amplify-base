import { PropsWithChildren } from "react";
import styles from "./Page.module.css";
interface PageProps extends PropsWithChildren {
  id: string;
}

export default function Page({ id, ...props }: PageProps) {
  return (
    <div id="<|Page|>" className={styles.Page}>
      <div id={id} {...props} />
    </div>
  );
}
