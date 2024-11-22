/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      }
    },
  },
  plugins: [],
}

