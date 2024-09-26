import { useContext } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import { DevStage } from "@/src/_DEV";
import { FeatureFlagContext } from "@/src/contexts/providers";
import DevEffects from "@/src/_DEV/DevStage/DevEffects";
import { devRoutes } from "./routes";
import { ROUTES } from "@/src/contexts/routes";
import DevTodos from "@/src/_DEV/DevStage/DevTodos";
import TodoUpdateForm from "@/src/components/generated/TodoUpdateForm";
import EntityUpdate from "@/src/_DEV/EntityList/EntityUpdate";
import { TransactionUpdateForm } from "@/src/components";
import DevTransactions from "@/src/_DEV/DevStage/DevTransactions";

export default function DevRouter() {
  const { showDevOpts } = useContext(FeatureFlagContext);
  const nav = useNavigate();

  return (
    <Routes>
      {showDevOpts ? (
        <>
          <Route path={devRoutes._} element={<DevStage />}>
            <Route index path={devRoutes.effects._} element={<DevEffects />} />
          </Route>
        </>
      ) : (
        <Route element={<Navigate to={ROUTES._} />} />
      )}

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
            <Route path={devRoutes.transaction._}>
              <Route index element={<DevTransactions />} />
              <Route
                path={devRoutes.transaction[":transactionId"]._}
                element={
                  <EntityUpdate
                    Component={TransactionUpdateForm}
                    prefix="transactionId"
                    onSubmit={() => nav(ROUTES.dev.transaction._)}
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
