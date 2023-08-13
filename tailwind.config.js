/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    safelist:['animate-[fade-in-up_1s_ease-in-out]'],
    extend: {
      boxShadow:{
        '3xl': '5px 5px 40px 5px rgba(0, 0, 0, 0.1)'
      },
      animation:{
        'spin-slow': 'spin 30s linear infinite',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
