import { rkey } from "@avaelus/super-project-utils";
import { useContext, useMemo } from "react";
import styles from "./Footer.module.css";
import FooterLink from "./FooterLink";
import { FooterContext } from "@/src/contexts/providers/ProviderLayout/ProviderLayout";
import { ROUTES } from "@/src/contexts/routes";
import { styleDisplay } from "@/src/utils";
import { COPYRIGHT } from "@/env/env.api";
import { Link } from "@aws-amplify/ui-react";

export default function Footer() {
  const {
    state: { visible },
  } = useContext(FooterContext);

  const footerLinks = useMemo(
    () => ({
      About: ROUTES.about._,
      "Privacy Policy": ROUTES.privacy._,
      "Terms of Service": ROUTES.tos._,
    }),
    []
  );
  return (
    <div className={styles.main} style={styleDisplay(visible)}>
      <footer className={styles.footer}>
        <div className={styles.div}>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <div className={styles.div4}>
                <Link href={ROUTES.contact._}>
                  © {COPYRIGHT} {new Date().getFullYear()}
                </Link>
              </div>
            </div>
            <div className={styles.div5}>
              <ul className={styles.ul}>
                {Object.entries(footerLinks).map(([label, url], i) => (
                  <FooterLink label={label} url={url} key={rkey(i, label)} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
