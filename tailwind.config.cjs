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
	plugins: []
};
