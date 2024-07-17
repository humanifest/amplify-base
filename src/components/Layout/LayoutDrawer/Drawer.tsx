import { rkey } from "@avaelus/super-project-utils";
import { useContext } from "react";
import styles from "./Drawer.module.css";
import HeaderLogo from "./HeaderLogo";
import DrawerItem from "@/src/components/Layout/LayoutDrawer/DrawerItem/DrawerItem";

import useClickableNavigation from "@/src/contexts/hooks/useClickableNavigation/useClickableNavigation";
import { DrawerContext } from "@/src/contexts/providers";
import { styleHide } from "@/src/utils";
import { drawerTimeout } from "@/src/assets";
import { AiOutlineClose } from "react-icons/ai";

export default function SideNav() {
  const {
    state: drawerState,
    setExpansion,
    setVisibility,
  } = useContext(DrawerContext);

  const items = useClickableNavigation();

  return (
    <>
      <aside
        onMouseOver={() => setExpansion(true)}
        onMouseLeave={() => setExpansion(false)}
        onClick={() => setVisibility(true)}
        className={drawerState.expanded ? styles.asideExpanded : styles.aside}
      >
        <HeaderLogo isExpanded={drawerState.expanded} />

        {drawerState.visible && (
          <>
            <div className={styles.div}>
              <ul className={styles.ul}>
                {Object.entries(items).map(([label, item], index) => (
                  <DrawerItem
                    key={rkey(index, label)}
                    label={label}
                    {...item}
                  />
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                // NOTE: use timeout because clicking on the drawer will set the state to true
                setTimeout(() => setVisibility(false), drawerTimeout);
              }}
              className={styles.close}
              style={styleHide(drawerState.expanded)}
            >
              <AiOutlineClose />
            </button>
          </>
        )}
      </aside>
    </>
  );
}
