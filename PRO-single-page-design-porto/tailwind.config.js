/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				jakarta: ['Plus Jakarta Sans, sans-serif']
			},
			colors: {
				'main-black': 'hsl(0, 0%, 1%)',
				'main-red': 'hsl(7, 77%, 66%)',
				'main-white': 'hsl(28, 100%, 97%)',
        'sec-orange': 'hsl(28, 89%, 67%)',
        'sec-pink': 'hsl(0, 78%, 79%)',
        'sec-green': 'hsl(172, 46%, 57%)',
        'sec-purple': 'hsl(314, 45%, 23%)',
        'sec-gray': 'hsl(30, 5%, 45%)',
        'sec-blue': 'hsl(252, 66%, 62%)',
			},
			boxShadow: {
				'card': '12px 32px 56px 0 #8faecf3b'
			}
		}
	},
	plugins: []
};