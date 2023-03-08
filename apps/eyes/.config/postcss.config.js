// postcss.config.js
module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: { config: './tailwindcss-config.js'},
    autoprefixer: {},
  },
};
