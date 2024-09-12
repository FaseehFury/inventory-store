// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#003366',  // Dark Blue
        secondary: '#F4F4F4', // Light Gray
        accent: '#009688',   // Teal
        text: '#333333',     // Dark Gray
      },
    },
  },
  plugins: [],
}
