import { useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import styles from "./DrawerItem.module.css";
import { DrawerContext } from "@/src/contexts/providers";
import { styleHide, styleTransparently } from "@/src/utils";

export default function DrawerItem({
  label,
  url,
}: {
  label: string;
  url: string;
}) {
  const current = useMatch(url);
  const {
    state: { expanded },
  } = useContext(DrawerContext);

  return (
    <li className={styles.li} data-test={`DrawerItem`}>
      <Link
        className={current ? styles.LinkCurrent : styles.Link}
        style={styleTransparently(expanded)}
        to={url}
        data-test={`DrawerItem-${label}`}
      >
        <span
          className={current ? styles.spanCurrent : styles.span}
          style={styleHide(expanded)}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
