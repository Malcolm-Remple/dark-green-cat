/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      workSans: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
