/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        "clr-orange": "hsl(26, 100%, 55%)",
        "clr-pale-orange": "hsl(25, 100%, 94%)",
        "clr-very-dark-blue": "hsl(220, 13%, 13%)",
        "clr-dark-grayish-blue": "hsl(219, 9%, 45%)",
        "clr-grayish-blue": "hsl(220, 14%, 75%)",
        "clr-light-grayish-blue": "hsl(223, 64%, 98%)",
        "clr-white": "hsl(0, 0%, 100%)",
        "clr-black": "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
}
