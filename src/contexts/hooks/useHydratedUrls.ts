import { hydrateParams } from "@avaelus/super-project-utils";
import { useMemo } from "react";
import { ROUTES } from "@/src/contexts/routes";

// Defining a type Params which represents an object with string keys and string values
type Params = {
  [paramName: string]: string;
};

// Initializing defaultParams as an empty object of type Params
const defaultParams: Params = {};

// Custom hook useParamList to generate a parameter list for route hydration
export function useParamList(params: Params) {
  // useMemo hook ensures that this computation is memoized based on changes in 'params'
  return useMemo(() => {
    // Initializing an empty object paramList of type Params
    const paramList: Params = {};
    // Iterating over each paramName in the 'params' object
    for (const paramName in params) {
      // Assigning paramName prefixed with ':' as key and corresponding value from 'params'
      paramList[`:${paramName}`] = params[paramName] || "";
    }
    // Returning the generated paramList
    return paramList;
  }, [params]);
}

// Custom hook useHydratedUrls to hydrate ROUTES with paramReplacements
export default function useHydratedUrls(params = defaultParams) {
  // Generating paramReplacements using useParamList custom hook
  const paramReplacements = useParamList(params);

  const hydratedRoutes = useMemo(
    () => hydrateParams(ROUTES, paramReplacements), // hydrateParams replaces route placeholders with actual param values
    [paramReplacements]
  );

  // Returning the hydratedRoutes which contains routes with replaced parameters
  return hydratedRoutes;
}
