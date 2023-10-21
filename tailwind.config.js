/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'primary-blue': '#195bff', // Replace with your custom color code
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

