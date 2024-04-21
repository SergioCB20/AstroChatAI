/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0px 0px 20px 2px rgba(255,255,255,0.76)',
      }
    },
  },
  plugins: [],
}
