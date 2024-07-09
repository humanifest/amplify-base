import { Link } from "react-router-dom";
import styles from "./HeaderLogo.module.css";
import logo from "@/src/assets/images/avaelusLogo.jpg";
import { useHydratedUrls } from "@/src/contexts/hooks";
import { styleHide } from "@/src/utils";
import { Divider } from "@aws-amplify/ui-react";

export default function HeaderLogo({ isExpanded }: { isExpanded: boolean }) {
  const routes = useHydratedUrls();

  return (
    <>
      <div className={styles.div}>
        <Link className={styles.Link} to={routes._}>
          <img
            src={import.meta.env.VITE_LOGO_SRC || logo}
            className={styles.img}
            alt={"main logo"}
          />
          <span className={styles.span} style={styleHide(isExpanded)}>
            {import.meta.env.VITE_APP_TITLE}
          </span>
        </Link>
      </div>
      <Divider />
    </>
  );
}
