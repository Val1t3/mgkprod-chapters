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
        880: '880px',
        1400: '1400px',
      }
    },
  },
  plugins: [],
}
