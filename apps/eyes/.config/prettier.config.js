// prettier.config.js
module.exports = {
  tailwindConfig: './tailwind.config.js',
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  plugins: [
    require('prettier-plugin-organize-imports'),
    require('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: false,
};
