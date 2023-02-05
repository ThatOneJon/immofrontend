/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        "custom": "#171B29"
      },
      height:{
        '128': '60rem',
        '120': '50rem',
        '100': '40rem'
      },
      width: {
        '100': '47rem'
      }
    },
  },
  plugins: [],
}
