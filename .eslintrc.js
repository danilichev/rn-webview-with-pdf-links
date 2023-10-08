module.exports = {
  root: true,
  extends: ["@react-native", "plugin:prettier/recommended", "prettier"],
  plugins: ["prettier", "simple-import-sort", "import"],
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [["^\\u0000"], ["^@?\\w"], ["^src/"], ["^\\."]],
          },
        ],
      },
    },
  ],
};
