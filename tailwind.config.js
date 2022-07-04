const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.indigo[400],
        secondary: colors.amber[300],
        accent: colors.emerald[300],
      },
    },
  },
}
