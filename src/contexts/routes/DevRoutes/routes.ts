import { __, mMap } from "@avaelus/super-project-utils";
import CUSTOM_ROUTES_BLUEPRINTS from "../CustomRoutes/routes";

const DEV_ROUTES_BLUEPRINTS = {
  effects: __,
  ...CUSTOM_ROUTES_BLUEPRINTS,
};

export const devRoutes = mMap(DEV_ROUTES_BLUEPRINTS);

export default DEV_ROUTES_BLUEPRINTS;
