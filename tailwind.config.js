/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040404",
        secondary: "#de8c9d",
        third: "#fe2858",
        fourth: "#2af0ea",
        fifty: "#2af0ea",
      },
    },
  },
  plugins: [require("daisyui")],
};
