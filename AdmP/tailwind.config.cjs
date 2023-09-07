/** @type {import('tailwindcss').Config} */
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
      
    }
  },
  plugins: [],
}


