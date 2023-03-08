/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  prefix: 'mf-',
  important: true,
  content: {
    relative: false,
    files: [
      './src/index.tsx',
      './src/app/base/**/*.{html,ts,tsx}',
      './src/app/components/**/*.{html,ts,tsx}',
      './src/app/modules/**/*.{html,ts,tsx}',
    ],
  },
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
    tabSize: {
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.2xl') },
        h3: { fontSize: theme('fontSize.xl') },
        h4: { fontSize: theme('fontSize.base') },
        h5: { fontSize: theme('fontSize.sm') },
        h6: { fontSize: theme('fontSize.xs') },
      });
    }),
  ],
};
