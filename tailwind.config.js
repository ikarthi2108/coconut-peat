/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#8B5A2B',
            DEFAULT: '#7B4F24',
            dark: '#6B441F',
          },
          secondary: {
            light: '#4CAF50',
            DEFAULT: '#388E3C',
            dark: '#2E7D32',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          heading: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  