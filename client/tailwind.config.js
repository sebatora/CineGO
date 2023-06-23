/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        tambaleo: {
          "0%": { transform: "translateX(0) rotate(-2deg)" },
          "50%": { transform: "translateX(10px) rotate(10deg)" },
          "100%": { transform: "translateX(0) rotate(-2deg)" },
        }
      },
      animation: {
        tambaleo: "tambaleo 1.5s infinite"
      }
    },
  },
  plugins: [],
}

