module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "gray-lightest": "#f2f2f2",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
