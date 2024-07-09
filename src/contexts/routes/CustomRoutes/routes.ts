import { __, mMap } from "@avaelus/super-project-utils";

const CUSTOM_ROUTES_BLUEPRINTS = {
  dashboard: __,
  todo: {
    ":todoId": __,
  },
};

export const customRoutes = mMap(structuredClone(CUSTOM_ROUTES_BLUEPRINTS));

export default CUSTOM_ROUTES_BLUEPRINTS;
