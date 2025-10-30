/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gofast: {
          blueDeep: '#0E1A36',
          blueMid: '#1B2D5A',
          blue: '#2F5EEA',
          blueDark: '#243B7B',
          orange: '#FA3E3E',
          offWhite: '#F9FAFB',
        },
      },
    },
  },
  plugins: [],
}


