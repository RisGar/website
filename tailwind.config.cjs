/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#282c34",
      white: "#abb2bf",
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
    transitionDuration: {
      DEFAULT: "200ms",
    },
    transitionTimingFunction: {
      DEFAULT: "linear",
    },
  },
}
