import { __ } from "@avaelus/super-project-utils";

const topLevelRoutes = {
  user: {
    ":userId": __,
  },
  pages: {
    about: __,
    contact: __,
    license: __,
    tos: __,
    privacy: __,
  },
  admin: __,
};

export default topLevelRoutes;
