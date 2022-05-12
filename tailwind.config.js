module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#242424",
        yellow: "#FFC300",
        light: "#717171",
        dark: "#1B1B1B",
      },
      backgroundImage: (theme) => ({
        haker: "url('/src/assets/bg-haker.jpg')",
      }),
    },
    fontFamily: {
      hind: ["Hind"],
      monserrat: ["Montserrat"],
    },
  },
  plugins: [],
};
