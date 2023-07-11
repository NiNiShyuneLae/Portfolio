/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1280px',
          xl: '1350px'
        }
      },
      fontFamily: {
        'Jost': 'Jost',
      },
      colors: {
        primary : '#ea580c',
        secondary : '#0f172a',
        textColor : '#0F172A',
        caution : '#facc15',
        danger : '#ca8a04'
      }
    },
  },
  plugins: [],
}