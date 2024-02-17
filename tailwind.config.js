/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      maxWidth: {
        sm: '640px',
        md: '640px',
        lg: '640px',
        xl: '640px',
      }
    }
  },
  plugins: [],
}