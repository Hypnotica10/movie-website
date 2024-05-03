/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'priamry': '#E50914',
        'blue': '#0071EB',
        'dark-gray': '#6A6868 '
      },
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'xs': '10px',
        'sm': '15px',
        'base': '16px',
        'lg': '20px',
        'h1': '50px' 
      },
      borderRadius: {

      },
      backgroundImage: {
        'sign-in': "url('./assets/images/bg-signin.png')"
      }  
    },
  },
  plugins: [],
}