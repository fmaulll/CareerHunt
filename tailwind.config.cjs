/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#403F63",
        primary: "#42A7C3",
        primaryDark: "#2f7487",
        bright: "#5bcceb"
      }
    },
  },
  plugins: [],
}