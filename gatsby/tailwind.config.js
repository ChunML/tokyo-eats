module.exports = {
  purge: ["./src/**/*.{.js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        fit: "repeat(auto-fit, minmax(300px, 1fr))",
        fill: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
