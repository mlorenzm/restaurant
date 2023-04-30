/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        noto: "Noto Serif Display",
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
