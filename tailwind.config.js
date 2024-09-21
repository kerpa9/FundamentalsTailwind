/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        principal: ["Playfair Display", "serif"],
      },

      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
      },

      backgroundImage: {
        "close-menu": "url('../../assets/images/icon-close.svg')",
        "open-menu": "url('../../assets/images/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
};
