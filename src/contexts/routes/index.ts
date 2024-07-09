import { mMap } from "@avaelus/super-project-utils";
import CUSTOM_ROUTES_BLUEPRINTS from "./CustomRoutes/routes";
import DEV_ROUTES_BLUEPRINTS from "./DevRoutes/routes";
import DEFAULT_ROUTES_BLUEPRINTS from "./Router/routes";

const ROUTE_BLUEPRINTS = {
  ...DEFAULT_ROUTES_BLUEPRINTS,
  feature: { ...CUSTOM_ROUTES_BLUEPRINTS },
  dev: {
    ...DEV_ROUTES_BLUEPRINTS,
  },
};

export const ROUTES = mMap(structuredClone(ROUTE_BLUEPRINTS));
export type AppRoutes = typeof ROUTES;

export { AppRouter } from "./Router";
