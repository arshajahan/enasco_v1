/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg2': '1100px',
        '2xl': '1536px',
        '3xl': '1920px', 
      },
    },
  },
  plugins: [],
}