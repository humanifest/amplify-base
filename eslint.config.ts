import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: [
      "dist",
      ".eslintrc.cjs",
      "src/_DEV",
      "api/client/graphql",
      "src/components/generated",
      "cypress",
      ".amplify",
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: tsParser,
      globals: {
        // Browser Globals
        window: "readonly",
        document: "readonly",
        HTMLElement: "readonly",
        HTMLAnchorElement: "readonly",
        KeyboardEvent: "readonly",
        WheelEvent: "readonly",
        AbortController: "readonly",

        // Node.js Globals
        process: "readonly",
        global: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        console: "readonly",
        URL: "readonly",
        structuredClone: "readonly",
        Buffer: "readonly",

        // CommonJS Globals
        module: "readonly",
        exports: "readonly",
        require: "readonly",

        // React & JSX
        React: "readonly",
        JSX: "readonly",
        VoidFunction: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      "@typescript-eslint": ts,
      "react-hooks": reactHooks,
      tailwindcss: tailwindcss,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Avoid unexpected expression errors
      "@typescript-eslint/no-unused-expressions": "off",

      // Allow unused vars for debugging
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // Fix unsafe optional chaining errors
      "no-unsafe-optional-chaining": "off",

      // Require break statements in switch cases
      "no-fallthrough": "error",
    },
  },
];
