import { Amplify } from "aws-amplify";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import outputs from "../amplify_outputs.json";
import { App } from "@/src/components";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const root = document?.getElementById("root") as HTMLElement;
const title = document?.getElementById("appTitle");
const icon = document?.getElementById("appFavicon") as HTMLAnchorElement;

if (root && title && icon) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  title.innerHTML = import.meta.env.VITE_APP_TITLE;
  icon.href = import.meta.env.VITE_FAV_ICON_URL;
} else {
  // TODO: alert sentry
  throw new Error("React Root does not exist, please load HTML first.");
}
