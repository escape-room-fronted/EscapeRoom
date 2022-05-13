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
        haker: "url('/src/assets/banner__landing.png')",
        banner: "url('/src/assets/banner__img.jpg')",
        hero : "url('https://github.com/DanielaTob/img/blob/main/footer.png?raw=true')",
      }),
    },
    fontFamily: {
      hind: ["Hind"],
      monserrat: ["Montserrat"],
    },
  },
  plugins: [],
};
