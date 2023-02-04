/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        "custom": "#171B29"
      },
      height:{
        '128': '60rem',
      }
    },
  },
  plugins: [],
}
