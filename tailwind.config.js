/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1300px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBlue: '#020c1b',
        darkLighterBlue: '#020c1b',
        greenIsh: '#61f8d5',
        fromLogo: '#e50155',
        violet: '#970556',
        lightButton: 'hsl(338, 99%, 45%, 0.2)'
        
      }
    },
  },
  plugins: [],
}
