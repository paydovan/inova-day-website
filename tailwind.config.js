/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Urbanist", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-fast': 'spin 3s linear infinite',
        'spin-super-slow': 'spin 20s linear infinite'
      }
    },
  },
  plugins: [],
}
