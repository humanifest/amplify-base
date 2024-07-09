import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function FooterLink({
  label,
  url,
}: {
  label: string;
  url: string;
}) {
  return (
    <li className={styles.li}>
      <Link to={url} className={styles.link}>
        {label}
      </Link>
    </li>
  );
}
