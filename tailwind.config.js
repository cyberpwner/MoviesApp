/** @type {import('tailwindcss').Config} */

const defaultColors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      // include the default colors
      ...defaultColors,

      // add my custom colors
      'primary-blue': '#040e1e',
      'secondary-blue': '#061c45',
      'secondary-yellow': '#fcc409',
      'dark-gray': 'rgb(174, 174, 176)',
      'light-gray': 'rgb(220, 220, 220)',
    },
  },
  plugins: [],
};
