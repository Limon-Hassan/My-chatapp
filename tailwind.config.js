/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'popi': ['"Poppins"','"sans-serif"'],
        'robo': ['"Roboto"','"sans-serif"'],
      },
    },
  },
  plugins: [],
}