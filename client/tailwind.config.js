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
      },
      colors: {
        'primary': {
          '50': '#f1f3ff',
          '100': '#e6eaff',
          '200': '#d0d8ff',
          '300': '#abb7ff',
          '400': '#7b87ff',
          '500': '#464dff',
          '600': '#2420ff',
          '700': '#140ef3',
          '800': '#100bcc',
          '900': '#100ca6',
          '950': '#03045e',
        },   
        'light': {
          '50': '#f6f6f7',
          '100': '#e0e5e7',
          '200': '#c2c9cd',
          '300': '#9ba7ad',
          '400': '#76828b',
          '500': '#5b6871',
          '600': '#485159',
          '700': '#3c4349',
          '800': '#33373c',
          '900': '#2d3034',
          '950': '#212529',
        },
        'dark': {
          '50': '#fff729',
          '100': '#ffba0a',
          '200': '#faa405',
          '300': '#f48d06',
          '400': '#e75b04',
          '500': '#de2e02',
          '600': '#d10000',
          '700': '#9c0207',
          '800': '#6c040e',
          '900': '#370617',
          '950': '#03071c',
        },      
      }
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}

