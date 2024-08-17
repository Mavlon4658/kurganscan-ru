/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*', './css/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue-0': '#03244A',
        'blue-1': '#184A7B',
        'blue-2': '#456F95',
        'blue-3': '#7593B0',
        'blue-4': '#A3B7C9',
        'blue-5': '#D1DCE4',
        'blue-6': '#E7EEF4',
        'orange-1': '#ED5B1C',
        'orange-2': '#F6AD8D',
      }
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      montaga: ["Montaga", "serif"],
      caveat: ["Caveat", "cursive"],
    },
  },
  plugins: [],
}

