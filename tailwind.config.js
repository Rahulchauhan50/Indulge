/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-transparent': 'rgba(217, 217, 217, 0)', // for transparency
        'custom-dark': 'rgba(29, 37, 43, 0.65)', // dark color with opacity
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0) -12.09%, rgba(29, 37, 43, 0.65) 100%)',
      },
    },
  },
  plugins: [],
}