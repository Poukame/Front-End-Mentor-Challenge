/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
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
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-30%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 500ms ease-in',
        slideInRight: 'slideInRight 500ms ease-in',
      },
    },
    
  },
  plugins: [],
}

