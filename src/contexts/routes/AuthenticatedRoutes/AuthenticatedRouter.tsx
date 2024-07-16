import { Authenticator } from "@aws-amplify/ui-react";
import { Outlet, Route, Routes } from "react-router-dom";
import { accessRoutes } from "./routes";

export default function AuthenticatedRouter() {
  return (
    <Routes>
      (
      <Route
        path={accessRoutes._}
        element={
          <Authenticator>
            <Outlet />
          </Authenticator>
        }
      >
        <Route
          index
          path={accessRoutes.dashboard._}
          element={<>dashboard</>}
        ></Route>
        <Route path={accessRoutes.profile._} element={<>profile</>}></Route>
      </Route>
      )
    </Routes>
  );
}
