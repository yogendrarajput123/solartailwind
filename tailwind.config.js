/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      s: "320px",
      m: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1440px",
      xl3: "2560px",
    },
    extend: {},
  },
  plugins: [],
};
