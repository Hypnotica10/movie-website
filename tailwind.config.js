/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E50914',
        'blue': '#0071EB',
        'dark-gray': '#6A6868',
        'secondary-black': '#333'
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        
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