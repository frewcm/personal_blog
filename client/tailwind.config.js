/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1f2023",
      secondary: "#1f1f1f",
      teritiary: "#ffd73e",
      white: "#ffffff",
      red: "#ff0000",
    },
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "san serif"],
        freeroad: ["freeroad", "san serif"],
      },
    },
  },
  plugins: [],
};
