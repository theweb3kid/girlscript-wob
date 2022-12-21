/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
