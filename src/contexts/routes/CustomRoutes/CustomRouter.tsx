import { Route, Routes } from "react-router-dom";
import { customRoutes } from "./routes";
import { UserProfile } from "@/src/components";

export default function FeatureRoutes() {
  return (
    <Routes>
      <Route path={customRoutes.userProfile._} element={<UserProfile />} />
    </Routes>
  );
}
