module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/no-children-prop": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    // For styled-components' 'css' prop
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
