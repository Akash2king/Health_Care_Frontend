/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mongodb': {
          50: '#F3FAF7',
          100: '#DEF7EC',
          200: '#00ED64',
          300: '#01C853',
          400: '#00B04C',
          500: '#00A344',
          600: '#00843B',
          700: '#016536',
          800: '#014B29',
          900: '#013220',
        }
      }
    },
  },
  plugins: [],
};