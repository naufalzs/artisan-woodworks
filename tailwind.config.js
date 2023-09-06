/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#CCCCCC",
        primary: "#8B4513",
        secondary: "#003366",
        accent: {
          green: "#228B22",
          red: "#8B0000",
        },
        text: "#333333",
        highlight: "#FFD700",
        hover: "#008080",
      },
    },
  },
  plugins: [],
};
