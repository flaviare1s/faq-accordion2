/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        light_pink: 'hsl(275, 100%, 97%)',
        grayish_purple: 'hsl(292, 16%, 49%)',
        dark_purple: 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        'Work_Sans': ['Work Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

