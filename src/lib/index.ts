export const siteName = 'Hahnster';

export function rgbToHex(rgb: string): string {
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
