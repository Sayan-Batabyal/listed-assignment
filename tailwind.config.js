/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        'lato': ['Lato', 'sans-serif'],
        'monte':['Montserrat', 'sans-serif']

      },
      colors: {
        'primary': '#F5F5F5',
    },
  },
},
  plugins: [],
}

