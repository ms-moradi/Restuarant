/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/restuarant/src/analytics/image/bghero.jpg')",
      },
      animation:{
        'spin-slow': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
}
