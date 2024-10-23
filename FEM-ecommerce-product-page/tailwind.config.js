/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Kumbh Sans", sans-serif'],
      },
      colors: {
        'main-orange': 'hsl(26, 100%, 55%)',
        'main-pale-orange': 'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-gray-blue': 'hsl(219, 9%, 45%)',
        'gray-blue': 'hsl(220, 14%, 75%)',
        'light-gray-blue': 'hsl(223, 64%, 98%)',
      },
    },
  },
  plugins: [],
}

