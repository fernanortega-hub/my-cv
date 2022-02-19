module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColorLight: '#DBE2EF',
        secondaryColorLight: '#3F72AF',
        accentColorLight: '#112D4E'
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  plugins: [],
}
