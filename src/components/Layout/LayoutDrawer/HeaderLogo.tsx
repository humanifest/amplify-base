import { Link } from "react-router-dom";
import styles from "./HeaderLogo.module.css";
import logo from "@/src/assets/images/avaelusLogo.jpg";
import { useHydratedUrls } from "@/src/contexts/hooks";
import { styleHide } from "@/src/utils";
import { Divider } from "@aws-amplify/ui-react";
import { APP_TITLE } from "@/env/env.api";

export default function HeaderLogo({ isExpanded }: { isExpanded: boolean }) {
  const routes = useHydratedUrls();

  return (
    <>
      <div className={styles.div}>
        <Link className={styles.Link} to={routes._}>
          <img src={logo} className={styles.img} alt={"main logo"} />
          <span className={styles.span} style={styleHide(isExpanded)}>
            {APP_TITLE}
          </span>
        </Link>
      </div>
      <Divider />
    </>
  );
}
