export function friendlyDate(date: Date | string | undefined) {
	if (date === undefined) return '';
	if (!(date instanceof Date)) {
		date = new Date(date);
	}

	return date.toLocaleDateString('en-gb', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}
