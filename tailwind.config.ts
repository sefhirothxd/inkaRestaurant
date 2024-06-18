import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				fontPrincipal: ['MiFuente', 'sans-serif'],
				fontPrincipal2: ['MiFuente2', 'sans-serif'],
				fontSecundario: ['segunda', 'sans-serif'],
			},
			colors: {
				primary: '#2d5d2a',
				secondary: '#4c4c4c',
			},
		},
	},
	plugins: [],
};
export default config;
