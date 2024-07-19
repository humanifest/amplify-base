import { useContext, useState } from "react";
import styles from "./NavBar.module.css";
import NavBarDropDownMenu from "@/src/components/Layout/LayoutNavBar/NavBarDropDown/NavBarDropDownMenu";
import { LoadingContext } from "@/src/contexts/providers";
import { NavbarContext } from "@/src/contexts/providers/ProviderLayout/ProviderLayout";
import { Divider, Loader } from "@aws-amplify/ui-react";
import { styleHide } from "@/src/utils";
export default function NavBar() {
  const {
    state: { visible: isOpen },
  } = useContext(NavbarContext);
  const [loading] = useContext(LoadingContext)!;

  const [isExpanded] = useState(true);

  return (
    <>
      {isOpen && (
        <div className={`${styles.Div} ${styles.Main}`}>
          <nav className={styles.Nav} navbar-scroll="true">
            <div
              className={styles.Div2}
              style={{
                marginTop: isExpanded ? "inherit" : "-10vh",
              }}
            >
              <div className={styles.Div3}>
                <ul className={styles.Ul}>
                  <div className={styles.Li}></div>

                  <NavBarDropDownMenu />
                </ul>
              </div>
            </div>
          </nav>

          <Divider
            size="small"
            style={{
              // NOTE: Prevent overlap of menu
              zIndex: -1,
            }}
          />
          <Loader variation="linear" size="small" style={styleHide(loading)} />
        </div>
      )}
    </>
  );
}
