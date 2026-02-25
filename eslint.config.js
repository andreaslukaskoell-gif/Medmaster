import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "**/_backup_FEBRUARY_18/**"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  // Data/content files: allow @ts-nocheck, irregular whitespace in strings, regex escapes
  {
    files: ["src/data/bmsKapitel/**/*.ts", "src/data/figurenGenerator.ts", "src/data/kff*.ts"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "no-irregular-whitespace": "off",
      "no-useless-escape": "off",
      "no-constant-condition": "off",
    },
  },
]);
