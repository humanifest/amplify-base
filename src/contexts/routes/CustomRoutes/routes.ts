import { __, mMap } from "@avaelus/super-project-utils";

const CUSTOM_ROUTES_BLUEPRINTS = {
  todo: {
    ":todoId": __,
  },
};

export const customRoutes = mMap(CUSTOM_ROUTES_BLUEPRINTS);

export default CUSTOM_ROUTES_BLUEPRINTS;
