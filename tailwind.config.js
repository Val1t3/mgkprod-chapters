/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '32px',
        sm: '40px',
        xl: '92px',
      },
      spacing: {
        '26rem': '26rem',
        40: '40px',
        95: '95px',
        700: '700px',
        800: '850px',
        880: '880px',
        1400: '1400px',
      },
      screens: {
        md: '810px'
      }
    },
  },
  plugins: [],
}
