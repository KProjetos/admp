/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "principal": "#FFA800",
      "secundaria": "#FFC147",
      "terciaria": "#d9d9d9",
      "white": "#ffff",
      "black": "#000",
      "red": "#F70021",
      "div-login": "rgba(255, 255, 255, 0.45)",
      
    },
    backgroundImage: {
      "login": "url('/src/assets/Login.png')",
      "none": "url('')",
      
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    }
  },
  plugins: [plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  })],
}


