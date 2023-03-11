export function friendlyDate(date: Date) {
	if (date === undefined) return '';
	if (typeof date.toLocaleDateString !== 'function') {
		date = new Date(date);
	}

	return date.toLocaleDateString('en-gb', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}
