/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#065f46",
        secondary: "#d97706",
        lgray: "#e2e8f0",
        dgray: "#4b5563",
      },
    },
  },
  plugins: [],
};
