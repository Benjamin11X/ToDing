/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      'fontFamily': {
        'notoSans' : ['Noto Sans', 'sans-serif'],
      },
      'screens': {
        'xs' : '520px',
      }
    },
  },
  plugins: [],
}

