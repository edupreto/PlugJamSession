/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
    colors: {
      green: {
        300: '#4BE789',          
      },
      blue: {
        500: '#00A4C8',
      },
      orange: {
        500: '#EE9919',
      },
      red: {
        500: '#F75A68',
      },
      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#8D8D99',
        500: '#323238',
        600: '#29292E',
        700: '#121214',
        900: '#09090A',
      }  
    },
    extend: {},
  },
  plugins: [],
}
