/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./home/**/*.{js,ts,jsx,tsx}",
    "./about/**/*.{js,ts,jsx,tsx}",
    "./projects/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [require("daisyui")],
}

