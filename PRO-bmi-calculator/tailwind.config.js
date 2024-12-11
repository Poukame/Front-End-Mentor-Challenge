/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			colors: {
				'main-blue': 'hsl(227, 92%, 58%)',
				'main-gunmetal': 'hsl(215, 31%, 21%)',
				'main-dark-blue': 'hsl(215, 17%, 45%)'
			},
			boxShadow: {
				'card': '12px 32px 56px 0 #8faecf3b'
			}
		}
	},
	plugins: []
};
