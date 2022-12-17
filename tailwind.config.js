/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      blackdark: '#000000',
      darkblue: '#0D28A6',
      limegreen: '#3D7B3F',
      lightblue: '#F1F3FF',
      limegreenlight: '#5CB85F',
    },
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
};
