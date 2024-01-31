/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/hero-image-wr.jpg')",
      },
      colors: {
        'color-base': '#1B1D1F',
        'color-texto': '#D2D5DA',
        'bg-info' : '#282B30'
      },
    },
  },
  plugins: [],
}