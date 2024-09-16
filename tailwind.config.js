/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#4C8F73",
      secondary: "#FFFFFF",
    },
    fontFamily: {
      heading: ["Caveat Brush", "sans-serif"],
    },
  },
};
export const plugins = [];
