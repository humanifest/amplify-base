import { PropsWithChildren } from "react";

import {
  LayoutFeatureStateType,
  createLayoutFeatureContext,
  useLayoutFeature,
} from "./utils";
import { useErrorRedirect } from "@/src/contexts/hooks";

const useDrawer = (state?: LayoutFeatureStateType) => useLayoutFeature(state);
const useFooter = (state?: LayoutFeatureStateType) => useLayoutFeature(state);
const useNavbar = (state?: LayoutFeatureStateType) => useLayoutFeature(state);

export const NavbarContext = createLayoutFeatureContext();
export const FooterContext = createLayoutFeatureContext();
export const DrawerContext = createLayoutFeatureContext();

interface ProviderLayoutProps extends PropsWithChildren {
  nav?: LayoutFeatureStateType;
  drawer?: LayoutFeatureStateType;
  footer?: LayoutFeatureStateType;
}

export default function ProviderLayout({
  nav,
  drawer,
  footer,
  ...props
}: ProviderLayoutProps) {
  useErrorRedirect();

  return (
    <div id="<|ProviderLayout|>">
      <NavbarContext.Provider value={useNavbar(nav)}>
        <DrawerContext.Provider value={useDrawer(drawer)}>
          <FooterContext.Provider value={useFooter(footer)}>
            <div {...props} id="|>ProviderLayout<|" />
          </FooterContext.Provider>
        </DrawerContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
}
