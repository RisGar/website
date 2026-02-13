/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
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
      animation: {
        rotate: "rotate 20s infinite",
      },
      keyframes: {
        rotate: {
          from: { rotate: "0deg" },
          "50%": { scale: "1 1.5" },
          to: { rotate: "360deg" },
        },
      },
    },
    fontFamily: {
      sans: ["DM Sans Variable", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
  },
  plugins: [],
}
