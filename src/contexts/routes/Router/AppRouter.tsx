import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevRouter from "@/src/contexts/routes/DevRoutes/DevRouter";

import { FullPage } from "@/src/components/Page/variants";
import { ROUTES } from "../";
import CustomRouter from "../CustomRoutes/CustomRouter";

export default function AppRouter() {
  return (
    <div id="<|AppRouter|>">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<FullPage />}>
            <Route path={"/"} element={<>home</>} />
            <Route path={ROUTES.feature._ + "/*"} element={<CustomRouter />} />
            <Route path={ROUTES.dev._ + "/*"} element={<DevRouter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
