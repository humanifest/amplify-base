import { ThemeProvider } from "@aws-amplify/ui-react";
import { theme } from "@/src/assets";
import {
  ProviderFeatureFlags,
  ProviderErrorBoundary,
  ProviderEffects,
  ProviderAuth,
} from "@/src/contexts/providers";
import { IconsProvider } from "@aws-amplify/ui-react";

import { AppRouter } from "@/src/contexts/routes";
import "@/src/assets/index.css";
import "@aws-amplify/ui-react/styles/reset.layer.css"; // global CSS reset
import "@aws-amplify/ui-react/styles/base.layer.css"; // base styling needed for Amplify UI
import "@aws-amplify/ui-react/styles/button.layer.css"; // component specific styles

export default function App() {
  return (
    <div id="App">
      <ProviderErrorBoundary>
        <ProviderFeatureFlags>
          <ProviderAuth>
            <ThemeProvider theme={theme} colorMode="light">
              <IconsProvider>
                <ProviderEffects>
                  <AppRouter />
                </ProviderEffects>
              </IconsProvider>
            </ThemeProvider>
          </ProviderAuth>
        </ProviderFeatureFlags>
      </ProviderErrorBoundary>
    </div>
  );
}
