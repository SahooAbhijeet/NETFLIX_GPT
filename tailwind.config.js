/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        bebasneue: ["Bebas-Neue"]
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],}

