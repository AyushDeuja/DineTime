/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF8800",
        secondary: "#1F2937",
        lightText: "#1F2937",
        darkText: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
