import { mMap } from "@avaelus/super-project-utils";
import CUSTOM_ROUTES_BLUEPRINTS from "./CustomRoutes/routes";
import DEFAULT_ROUTES_BLUEPRINTS from "./Router/routes";
import ACCESS_ROUTES_BLUE_PRINTS from "./AuthenticatedRoutes/routes";
import DEV_ROUTES_BLUEPRINTS from "@/src/_DEV/DevRoutes/routes";

const ROUTE_BLUEPRINTS = {
  ...DEFAULT_ROUTES_BLUEPRINTS,
  feature: CUSTOM_ROUTES_BLUEPRINTS,
  dev: DEV_ROUTES_BLUEPRINTS,
  access: ACCESS_ROUTES_BLUE_PRINTS,
};

export const ROUTES = mMap(ROUTE_BLUEPRINTS);
export type AppRoutes = typeof ROUTES;

export { AppRouter } from "./Router";
