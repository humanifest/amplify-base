import { useContext } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import { DevStage } from "@/src/_DEV";
import { FeatureFlagContext } from "@/src/contexts/providers";
import { ROUTES } from "..";
import DevTodos from "@/src/_DEV/DevStage/DevTodos";
import DevEffects from "@/src/_DEV/DevStage/DevEffects";
import TodoUpdateForm from "@/src/components/generated/TodoUpdateForm";
import EntityUpdate from "@/src/_DEV/EntityList/EntityUpdate";
import { devRoutes } from "./routes";

export default function DevRouter() {
  const { showDevOpts } = useContext(FeatureFlagContext);
  const nav = useNavigate();

  return (
    <Routes>
      {showDevOpts ? (
        <>
          <Route path={devRoutes._} element={<DevStage />}>
            <Route index path={devRoutes.effects._} element={<DevEffects />} />
            <Route path={devRoutes.todo._}>
              <Route index element={<DevTodos />} />
              <Route
                path={devRoutes.todo[":todoId"]._}
                element={
                  <EntityUpdate
                    Component={TodoUpdateForm}
                    prefix="todoId"
                    onSubmit={() => nav(ROUTES.dev.todo._)}
                  />
                }
              />
            </Route>
          </Route>
        </>
      ) : (
        <Route element={<Navigate to={ROUTES._} />} />
      )}
    </Routes>
  );
}
