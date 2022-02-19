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
        accentColorLight: '#112D4E',
        typescript: '#2276C8',
        javascript: '#F7E026',
        dotnet: '#5027D5',
        csharp: '#953DAC',
        cplusplus: '#0E4283',
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  plugins: [],
}
