import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { BuildOptions, ConfigEnv, defineConfig, loadEnv } from "vite";
// https://vitejs.dev/guide/api-javascript.html#resolvedconfig

const resolve = (destination: string) => {
  return fileURLToPath(new URL("./" + destination, import.meta.url));
};

function hoistEnv(mode: string) {
  // load the app level env variables and add them to the Node level env variables
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
}

const scopedName = "[hash:base64:5]";

const buildConfig = {
  exclude: [resolve("./src/_DEV")],
} as BuildOptions;

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  hoistEnv(mode);
  const port = parseInt(process.env.VITE_SUPER_CLIENT_PORT || "5173");

  return defineConfig({
    build: buildConfig,
    css: {
      modules: {
        generateScopedName:
          mode === "production"
            ? scopedName
            : `[name]__[local]___${scopedName}`,
      },
    },
    esbuild: {
      logOverride: { "this-is-undefined-in-esm": "silent" },
    },
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@", replacement: resolve(".") },
        { find: "_tw", replacement: resolve("./tailwindcss") },
      ],
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true, // needed for the Docker Container port mapping to work
      hmr: {
        clientPort: port,
      },
      port,
    },
  });
};
