/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
      fontFamily: {
        'playwrite': ['"Playwrite HR"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 4px 30px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
}




