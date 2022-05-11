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
    },
    fontFamily: {
        'hind': ['Hind'],
        'monserrat': ['Montserrat']
    }
  },
  plugins: [],
}