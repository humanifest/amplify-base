/** @type {import('tailwindcss').Config} */

import { themeOptions, addenda } from "./extendedOptions/extendedOptions.mjs";

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: ({ colors }) => {
      const cooler = colors.teal;
      const warmer = colors.fuchsia;

      return {
        lights: {
          primary: cooler[50],
          secondary: warmer[50],
        },
        mids: {
          primary: cooler[600],
          secondary: warmer[600],
        },
        darks: {
          primary: cooler[900],
          secondary: warmer[900],
        },
        primary: cooler,
        secondary: warmer,
        ...colors,
      };
    },
    ...themeOptions,
  },

  ...addenda,
  plugins: [],
};
