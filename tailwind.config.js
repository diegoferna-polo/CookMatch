/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      white: {
        100: '#FFFFFF',
        200: '#F5F5F5',
        300: '#F0F0F0',
      },
      green: {
        100: '#F0F4C3',
        200: '#DCEDC8',
        300: '#C5E1A5',
        400: '#AED581',
        500: '#8BC34A',
        600: '#7CB342',
        700: '#689F38',
        800: '#558B2F',
        900: '#33691E',
      },
      orange: {
        100: '#FFE0B2',
        200: '#FFCC80',
        300: '#FFB74D',
        400: '#FFA726',
        500: '#F57C00',
        600: '#EF6C00',
        700: '#E65100',
        800: '#D84315',
        900: '#BF360C',
      },
      bluegray: {
        100: '#ECEFF1',
        200: '#CFD8DC',
        300: '#B0BEC5',
        400: '#90A4AE',
        500: '#78909C',
        600: '#607D8B',
        700: '#546E7A',
        800: '#455A64',
        900: '#37474F',
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

