const react = require('eslint-plugin-react');
const babel = require('@babel/core')
const reactRecommended = require('eslint-plugin-react/configs/recommended');
const globals = require('globals');
const typescriptEslint = require("@typescript-eslint/eslint-plugin")
const typescriptEslintParser = require("@typescript-eslint/parser");
const prettier = require("prettier");

module.exports = [
  {
    ignores: ["**/*.test.{js,jsx,ts,tsx}"]
  },
  {
    files: ['src/app/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ignores: [".config/*"],
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
    plugins: {
      babel,
      react,
      typescriptEslint,
      prettier,
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.serviceworker,
      },
      parser: typescriptEslintParser,
    },
    settings: {
      react: {
        version: "detect",
      }
    }
  }
]
