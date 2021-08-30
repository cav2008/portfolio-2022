const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        violet: colors.violet,
        teal: colors.teal,
        warmGray: colors.warmGray,
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1921px',
      },
      backgroundImage: {
        'bt-screenshot': 'url("/images/bt-screenshot.png")',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
};
