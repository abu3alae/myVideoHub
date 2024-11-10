/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        textOne: "#1C1C1C",
        textTwo: "#4D4D4D",
      },
      backgroundColor: {
        bgOne: "#F0F0F0",
        bgTwo: "#E0E0E0",
        bgThree: "#B3B3B3",
        bgFour: "#333333",
        bgFive: "#000000",
      },
      animation: {
        "scale-pulse": "scalePulse 2s infinte ease-in-out"
      },
      keyframes: {
        scalePulse: {
          "0%, 100%": {transform: "scale(1)"},
          "50%": {transform: "scale(1.2)"},
        }
      }
    },
  },
  plugins: [],
}