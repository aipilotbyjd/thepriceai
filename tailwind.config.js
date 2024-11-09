/** @type {import('tailwindcss').Config} */
const { COLORS } = require('./constants/theme');

module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        gray: COLORS.gray,
      },
    },
  },
  plugins: [],
};
