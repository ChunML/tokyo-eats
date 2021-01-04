module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        endOfLine: "auto",
        printWidth: 80,
      },
    ],
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "react/prop-types": "off",
  },
};