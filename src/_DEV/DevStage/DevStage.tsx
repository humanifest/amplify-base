import { FeatureFlagContext } from "@/src/contexts/providers";

import { useContext } from "react";

import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "@/src/contexts/routes";
import { rkey } from "@avaelus/super-project-utils";
import { Divider } from "@aws-amplify/ui-react";
export default function DevStage() {
  const { showDevOpts } = useContext(FeatureFlagContext);
  return (
    showDevOpts && (
      <div>
        <ul>
          {Object.entries(ROUTES.dev).map(([k, r], i) => (
            <li key={rkey(i, k)}>
              <Link to={typeof r === "string" ? r : r?._}>{k}</Link>
            </li>
          ))}
        </ul>
        <h2>Dev</h2>
        <Divider />
        <Outlet />
      </div>
    )
  );
}
