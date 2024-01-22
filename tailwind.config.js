/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        bebasneue: ["Bebas-Neue","Open-Sans"],
        monte:["Montserrat"],
        
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],}

