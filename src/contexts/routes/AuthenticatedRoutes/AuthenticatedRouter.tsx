import { Authenticator } from "@aws-amplify/ui-react";
import { Outlet, Route, Routes } from "react-router-dom";
import { accessRoutes } from "./routes";
import Dashboard from "@/src/components/Page/Dashboard/Dashboard";
import { UserProfile } from "@/src/components";

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
        <Route index path={accessRoutes.dashboard._} element={<Dashboard />} />
        <Route path={accessRoutes.profile._} element={<UserProfile />}></Route>
      </Route>
      )
    </Routes>
  );
}
