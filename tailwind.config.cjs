/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // transparent: "transparent",
        // current: "currentColor",
        "light-red": "#e06c75",
        "dark-red": "#be5046",
        green: "#98c379",
        "light-yellow": "#e5c07b",
        "dark-yellow": "#d19a66",
        blue: "#61afef",
        magenta: "#c678dd",
        cyan: "#56b6c2",
        "gutter-grey": "#4b5263",
        "comment-grey": "#5c6370",
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
  },
  plugins: [
    require("@tailwindcss/typography")],
}
