import tailwindcss from "./tailwindcss/tailwind.config.mjs";

export default {
  plugins: {
    tailwindcss: { config: tailwindcss },
    autoprefixer: {},
  },
};
