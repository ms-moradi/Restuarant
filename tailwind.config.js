/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    safelist:['animate-[fade-in-left_1s_ease-in-out]','animate-[slide-in-up_1s_ease-in-out]','animate[fade-in_1s_ease-in-out]','animate[spinner-grow_1s_ease-in-out]'],
    extend: {
      boxShadow:{
        '3xl': '5px 5px 40px 5px rgba(0, 0, 0, 0.1)'
      },
      animation:{
        'spin-slow': 'spin 30s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, .2, 1) infinite',
        'fade-in-left': 'fade-in-left 1s ease-in-out',
        'slide-in-up': 'fade-in-up 2s ease-in-out',
        'fade-in': 'fade-in 2s ease-in-out 4s',
        'spinner-grow': 'spinner-grow 2s ease-in-out 4s',
      },
      keyframes:{
        ping:{
          '95% , 100%': {transform: 'scale(1)', opacity: '0'}
        }
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
