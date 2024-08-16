export function lerp(a: number, b: number, alpha: number) {
	return a + alpha * (b - a);
}

export function clamp(val: number, min: number, max: number) {
	return Math.min(Math.max(val, min), max);
}

export function toTitleCase(str: string): string {
	const minorWords = [
		'a',
		'an',
		'and',
		'as',
		'at',
		'but',
		'by',
		'for',
		'in',
		'nor',
		'of',
		'on',
		'or',
		'so',
		'the',
		'to',
		'up',
		'yet',
		'with',
		'from',
	];

	// Replace hyphens with spaces
	const withSpaces = str.replace(/-/g, ' ');

	return withSpaces
		.toLowerCase()
		.split(' ')
		.map((word, index, arr) => {
			if (
				index === 0 ||
				index === arr.length - 1 ||
				!minorWords.includes(word)
			) {
				return word.charAt(0).toUpperCase() + word.slice(1);
			} else {
				return word; // Keep the minor word in lowercase
			}
		})
		.join(' ');
}
