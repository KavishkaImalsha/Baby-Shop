/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      title: ["Matemasie","sans-serif"],
      cardTitle: ["Josefin Sans","sans-serif"],
      desHeader: ["Ubuntu Mono", "monospace"],
    },
  },
  plugins: [],
}

