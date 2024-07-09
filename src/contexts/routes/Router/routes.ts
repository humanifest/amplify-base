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
  },
  admin: __,
};

//TODO: change to avoid structuredClone
export default structuredClone(topLevelRoutes);
