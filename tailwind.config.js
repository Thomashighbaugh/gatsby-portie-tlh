/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundOpacity: {
        05: "0.05",
        10: "0.10",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
      },
      colors: {
        gray: {
          50: "#f9fafb",
          100: "#d6d6d6",
          200: "#adadad",
          300: "#848484",
          400: "#5b5b5b",
          500: "#323232",
          600: "#282828",
          700: "#1e1e1e",
          800: "#141414",
          900: "#0a0a0a",
        },
        primary: {
          100: "#d6d6d6",
          200: "#adadad",
          300: "#848484",
          400: "#5b5b5b",
          500: "#323232",
          600: "#282828",
          700: "#1e1e1e",
          800: "#141414",
          900: "#0a0a0a",
        },
      },
    },
  },
  variants: {},
  plugins: [import("@tailwindcss/typography"), import("daisyui")],
};
