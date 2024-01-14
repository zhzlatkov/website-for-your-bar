/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
    textShadow: {
      default: "1px 1px 1px #efaf03",
      md: "3px 3px 3px #efaf03",
      h1: "1px 1px 1px #a45f04, 0 0 25px #a45f04",
      h2: "1px 1px 1px rgb(255,222,67, 10%), 0 0 25px rgb(255,222,67, 30%)",
      h3: "1px 1px 1px rgb(255,222,67, 20%), 0 0 25px rgb(255,222,67, 30%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        shark: {
          50: "#f6f6f7",
          100: "#e3e3e4",
          200: "#c6c7c9",
          300: "#a1a5a7",
          400: "#7d8184",
          500: "#636669",
          600: "#4e5053",
          700: "#404345",
          800: "#363739",
          900: "#28292a",
          950: "#19191a",
        },
        pirateGold: {
          50: "#fefbe8",
          100: "#fff8c2",
          200: "#ffef88",
          300: "#ffde43",
          400: "#ffc910",
          500: "#efaf03",
          600: "#c88200",
          700: "#a45f04",
          800: "#874a0c",
          900: "#733c10",
          950: "#431e05",
        },
      },
      animation: {
        open: "open 0.5s ease-in-out",
        close: "close 0.35s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideDown: "slideDown 0.5s ease-in-out",
      },
      keyframes: {
        open: {
          "0%": { transform: "translateY(0)", opacity: "0.35" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        close: {
          "0%": { transform: "translateY(7%)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0.35" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-50%)", opacity: "0.25" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
