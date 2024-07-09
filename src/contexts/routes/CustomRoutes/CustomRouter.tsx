import { Route, Routes } from "react-router-dom";
import { customRoutes } from "./routes";

export default function FeatureRoutes() {
  return (
    <Routes>
      <Route path={customRoutes.dashboard._} element={<>dashboard</>} />
    </Routes>
  );
}
