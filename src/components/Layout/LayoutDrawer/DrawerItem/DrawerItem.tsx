import { useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import styles from "./DrawerItem.module.css";
import { DrawerContext } from "@/src/contexts/providers";
import { styleHide, styleTransparently } from "@/src/utils";
import { IconType } from "react-icons";

export default function DrawerItem({
  label,
  url,
  ...item
}: {
  label: string;
  url: string;
  icon: IconType;
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
        <div className={current ? styles.itemCurrent : styles.item}>
          <item.icon color={current ? styles.iconCurrent : styles.icon} />
        </div>
        <span
          className={current ? styles.spanCurrent : styles.span}
          /* NOTE: hide label on collapse */
          style={styleHide(expanded)}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
