import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FullPage } from "@/src/components/Page/variants";
import { ROUTES } from "../";
import FeatureRouter from "../CustomRoutes/CustomRouter";
import AuthenticatedRouter from "../AuthenticatedRoutes/AuthenticatedRouter";
import TermsOfService from "@/src/components/Inlet/InletTermsOfService";
import PrivacyPolicy from "@/src/components/Inlet/InletPrivacy";
import PageAbout from "@/src/components/Inlet/InletAbout";
import PageContact from "@/src/components/Inlet/InletContact";
import Welcome from "@/src/components/Page/Welcome/Welcome";
import DevRouter from "@/src/_DEV/DevRoutes/DevRouter";

export default function AppRouter() {
  return (
    <div id="<|AppRouter|>">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES._} element={<FullPage />}>
            <Route index element={<Welcome />} />
            <Route path={ROUTES.about._} element={<PageAbout />} />
            <Route path={ROUTES.contact._} element={<PageContact />} />
            <Route path={ROUTES.privacy._} element={<PrivacyPolicy />} />
            <Route path={ROUTES.tos._} element={<TermsOfService />} />

            <Route path={ROUTES.feature._ + "/*"} element={<FeatureRouter />} />
            <Route
              path={ROUTES.access._ + "/*"}
              element={<AuthenticatedRouter />}
            />
            <Route path={ROUTES.dev._ + "/*"} element={<DevRouter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
