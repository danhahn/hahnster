export const siteName = 'Hahnster';

export function rgbToHex(rgb = ''): string {
	const rgbValues = rgb.match(/\d+/g).map((value) => parseInt(value));
	return (
		'#' +
		rgbValues.reduce((acc, num) => {
			let hex = num.toString(16);
			if (hex.length === 1) {
				hex = '0' + hex;
			}
			return acc + hex;
		}, '')
	);
}

export type IconName = 'github' | 'instagram' | 'twitter' | 'hahnster' | 'linkedin';

export type Navigation = {
	url: string;
	text: string;
	icon?: IconName;
};

export const navigation: Navigation[] = [
	{ url: '/', text: 'Home' },
	{ url: '/about', text: 'About' }
];

export const social: Navigation[] = [
	{
		url: 'https://twitter.com/danhahn86',
		icon: 'instagram',
		text: 'instagram'
	},
	{
		url: 'https://github.com/danhahn',
		icon: 'github',
		text: 'github'
	},
	{
		url: 'https://www.instagram.com/danhahn/',
		icon: 'twitter',
		text: 'twitter'
	},
	{
		url: 'https://www.linkedin.com/in/dan-hahn-3796b84/',
		icon: 'linkedin',
		text: 'linkedin'
	}
];
