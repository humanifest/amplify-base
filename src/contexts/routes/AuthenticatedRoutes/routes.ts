import { __, mMap } from "@avaelus/super-project-utils";

const ACCESS_ROUTES_BLUE_PRINTS = {
  profile: __,
  dashboard: __,
};

//TODO: change to avoid structuredClone
export const accessRoutes = mMap(structuredClone(ACCESS_ROUTES_BLUE_PRINTS));

export default ACCESS_ROUTES_BLUE_PRINTS;
