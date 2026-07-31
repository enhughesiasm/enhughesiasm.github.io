import { describe, expect, it } from 'vitest';

import { clamp, lerp, toTitleCase } from './helpers';

describe('lerp', () => {
	it('interpolates between two values', () => {
		expect(lerp(10, 20, 0)).toBe(10);
		expect(lerp(10, 20, 0.5)).toBe(15);
		expect(lerp(10, 20, 1)).toBe(20);
	});
});

describe('clamp', () => {
	it('keeps a value within the supplied range', () => {
		expect(clamp(-1, 0, 10)).toBe(0);
		expect(clamp(5, 0, 10)).toBe(5);
		expect(clamp(11, 0, 10)).toBe(10);
	});
});

describe('toTitleCase', () => {
	it('replaces hyphens and preserves minor words inside a title', () => {
		expect(toTitleCase('the-shop-before-life')).toBe('The Shop Before Life');
		expect(toTitleCase('walking-on-custard-and-the-meaning-of-life')).toBe(
			'Walking on Custard and the Meaning of Life',
		);
	});
});
