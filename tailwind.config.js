/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A1E76",
        secondary: "#43115B",
        player1: "#48D2FE",
        player2: "#E2BE00",
        draw: "#BCDBF9",
      },
    },
  },
  plugins: [],
};
