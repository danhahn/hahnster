/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			minHeight: {
				mobile: '-webkit-fill-available'
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#22d3ee',
					secondary: '#10b981',
					accent: '#0e7490',
					neutral: '#d6d3d1',
					'base-100': '#374151',
					info: '#a5f3fc',
					success: '#a3e635',
					warning: '#f87171',
					error: '#fde047'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
