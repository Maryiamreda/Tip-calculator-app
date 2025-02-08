/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(183, 100%, 15%)',
        strongcyan: 'hsl(172, 67%, 45%)',
        darkgrayishcyan: 'hsl(186, 14%, 43%)',
        grayishcyan: 'hsl(184, 14%, 56%)'
      }
    },
  },
  plugins: [],
}

