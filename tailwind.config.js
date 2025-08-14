/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    extend: {
      colors:{
        primaryColor:"#222831",
        secondColor:"#393E46",
        thirdColor:"#948979",
        textColor:"#DFD0B8"
      }
    },
  plugins: [],
}

