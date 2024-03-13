/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor1: '#03101fe1',
        headerColor2: '#04254be1',
        lightBg1: '#ffffff',
        lightBg2: '#706f6f',
        darkBlue: '#111c3f',
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

