/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				'sans':['"Rubik", sans-serif']
			},
      colors: {
        'violet-pale': 'hsl(276, 100%, 81%)',
        'violet-moderate': 'hsl(276, 55%, 52%)',
        'violet-desa': 'hsl(271, 15%, 43%)',
        'violet-gray': 'hsl(271, 36%, 24%)',
        'violet-dark': 'hsl(270, 7%, 64%)',
        'blue-grayish': 'hsl(206, 6%, 79%)',
        'app-bg': 'hsl(270, 20%, 96%)',
        'btn-submit': 'hsl(271, 36%, 24%)',
        'btn-radio': 'hsl(289, 100%, 72%)',
        'gradient-start': 'hsl(293, 100%, 63%)',
        'gradient-end': 'hsl(264, 100%, 61%)',
      },
    },
  },
  plugins: [],
}

