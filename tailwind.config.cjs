/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,vue,tsx}",
      "./stories/**/*.{js,ts,vue,tsx}",
      "./stories/**/**/*.{js,ts,vue,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }