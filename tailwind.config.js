/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        xl: '92px',
      },
      spacing: {
        '26rem': '26rem',
        '120px': '120px',
        700: '700px',
        880: '880px',
        1400: '1400px',
      }
    },
  },
  plugins: [],
}
