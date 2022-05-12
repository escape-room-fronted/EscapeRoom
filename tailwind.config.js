module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#242424',
        'dark': '#1B1B1B',
        'yellow': '#FFC300',
        'light': '#717171',
      },
      backgroundImage: {
        'hero': "url('https://github.com/DanielaTob/img/blob/main/footer.jpg?raw=true')",
      }
    },
    fontFamily: {
        'hind': ['Hind'],
        'monserrat': ['Montserrat']
    }
  },
  plugins: [],
}