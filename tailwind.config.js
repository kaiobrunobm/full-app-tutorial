/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#00df9a",
      white: "#fff",
      blackPrimary: "#000300",
      gray: "#6b7280",
      grayBorder: "#111827",
    },
  },
  plugins: [],
};
