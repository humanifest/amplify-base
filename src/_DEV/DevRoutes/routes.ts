import CUSTOM_ROUTES_BLUEPRINTS from "@/src/contexts/routes/CustomRoutes/routes";
import { __, mMap } from "@avaelus/super-project-utils";

const DEV_ROUTES_BLUEPRINTS = {
  effects: __,
  ...CUSTOM_ROUTES_BLUEPRINTS,
};

export const devRoutes = mMap(DEV_ROUTES_BLUEPRINTS);

export default DEV_ROUTES_BLUEPRINTS;
