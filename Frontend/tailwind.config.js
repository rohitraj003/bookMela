/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "cmyk"],
  },
  plugins: [
    require('daisyui'),
  ],
}