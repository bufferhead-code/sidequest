import eslintPluginAstro from "eslint-plugin-astro";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.all,
  {
    rules: {
      "astro/sort-attributes": "off",
      "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
    files: ["**/*.{ts,astro,js}"],
    plugins: {
      "unused-imports": unusedImports,
    },
  },
];
