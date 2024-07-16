import { __, mMap } from "@avaelus/super-project-utils";

const CUSTOM_ROUTES_BLUEPRINTS = {
  todo: {
    ":todoId": __,
  },
};

// TODO change to avoid structuredClone
export const customRoutes = mMap(structuredClone(CUSTOM_ROUTES_BLUEPRINTS));

export default CUSTOM_ROUTES_BLUEPRINTS;
