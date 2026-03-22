/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.astro",
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.vue",
    "./src/**/*.svelte"
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#3245ff",
        secondary: "#bc52ee",
        accent: "#f041ff"
      }
    }
  },
  plugins: []
};
