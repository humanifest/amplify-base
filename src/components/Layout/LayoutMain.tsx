import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Drawer from "@/src/components/Layout/LayoutDrawer/Drawer";
import Footer from "@/src/components/Layout/LayoutFooter/Footer";
import NavBar from "@/src/components/Layout/LayoutNavBar/NavBar";
import StageMain from "@/src/components/StageMain/StageMain";

export default function LayoutMain() {
  return (
    <div id="<|LayoutMain|>" className={styles.Layout}>
      <NavBar />
      <Drawer />
      <div id="|>LayoutMain<|" className={styles.StageWrapper}>
        <StageMain>
          <Outlet />
        </StageMain>
      </div>
      <Footer />
    </div>
  );
}
