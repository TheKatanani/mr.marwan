/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next", "next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/no-unescaped-entities": "warn"
  }
};
