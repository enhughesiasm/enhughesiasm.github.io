import { describe, expect, it } from 'vitest';

import { friendlyDate } from './friendly_date';

describe('friendlyDate', () => {
	it('formats dates for a British audience', () => {
		expect(friendlyDate(new Date(2024, 0, 5))).toBe('5 Jan 2024');
	});

	it('accepts serialised dates and missing values', () => {
		expect(friendlyDate('2024-01-05T12:00:00')).toBe('5 Jan 2024');
		expect(friendlyDate(undefined)).toBe('');
	});
});
