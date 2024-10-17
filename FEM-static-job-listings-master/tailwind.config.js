/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'sans': ['"League Spartan"'],
      },
      colors: {
        'cyan-light-bg': '#EFFAFA',
        'cyan-light-filter': '#EEF6F6',
        'cyan-dark': '#7B8E8E',
        'cyan-dark-gray': '#2C3A3A',
        'cyan-primary': '#5BA4A4',
      },
    },
  },
  plugins: [],
}

