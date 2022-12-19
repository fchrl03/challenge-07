/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/daisyui/dist/**/*.js'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        blackdark: '#000000',
        darkblue: '#0D28A6',
        limegreen: '#3D7B3F',
        lightblue: '#F1F3FF',
        limegreenlight: '#5CB85F',
        yellowcard: '#F9CC00',
        whitedark: '#FFFFFF',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
};
