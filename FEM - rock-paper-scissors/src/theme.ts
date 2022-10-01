// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config

const fonts = {
	fonts: {
		body: 'Barlow Semi Condensed, sans-serif',
	},
};

const breakpoints = {
	sm: '38em',
};

const colors = {
	colors: {
		scoreText: 'hsl(229, 64%, 46%)',
		darkText: 'hsl(229, 25%, 31%)',
		headerOutline: 'hsl(217, 16%, 45%)',
		bgWhite: '#fafbf8',
		bgColor: { 50: 'hsl(214, 47%, 23%)', 100: 'hsl(237, 49%, 15%)' },
		scissors: {
			50: 'hsl(39, 89%, 49%)',
			100: 'hsl(40, 84%, 53%)',
		},
		paper: {
			50: 'hsl(230, 89%, 62%)',
			100: 'hsl(230, 89%, 65%)',
		},
		rock: {
			50: 'hsl(349, 71%, 52%)',
			100: 'hsl(349, 70%, 56%)',
		},
		lizard: {
			50: 'hsl(261, 73%, 60%)',
			100: 'hsl(261, 72%, 63%)',
		},
		spock: {
			50: 'hsl(189, 59%, 53%)',
			100: 'hsl(189, 58%, 57%)',
		},
	},
};

const body = {
	styles: {
		global: {
			'html, body': {
				minHeight: '100vh',
			},
		},
	},
};


// // 3. extend the theme
const theme = extendTheme({ breakpoints }, fonts, body, colors);
console.log('file: theme.ts ~ line 57 ~ theme', theme);

export default theme;
