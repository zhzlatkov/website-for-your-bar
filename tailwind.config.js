/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};
