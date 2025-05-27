import astroPlugin from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
  },
  // ignore
  {
    ignores: ["node_modules/", "public/", "dist/", ".astro/", ".vscode/", ".github/"],
  },

  // plugins
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,

  // rules
  // eslint core
  {
    files: ["src/**/*"],
    rules: {
      "no-console": "error",
    },
  },

  // typescript
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
    },
  },
];

export default config;
