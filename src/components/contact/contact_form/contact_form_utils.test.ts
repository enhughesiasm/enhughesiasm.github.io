import { describe, expect, it } from 'vitest';

import {
	JSON_to_URLEncoded,
	isValidEmail,
	isValidMessage,
	isValidName,
} from './contact_form_utils';

describe('contact form validation', () => {
	it('requires meaningful names and messages', () => {
		expect(isValidName(' N ')).toBe(false);
		expect(isValidName(' Neil ')).toBe(true);
		expect(isValidMessage(' ')).toBe(false);
		expect(isValidMessage(' Hello ')).toBe(true);
	});

	it('accepts plausible email addresses', () => {
		expect(isValidEmail('neil@example.com')).toBe(true);
		expect(isValidEmail('neil+site@example.co.uk')).toBe(true);
		expect(isValidEmail('neil@example')).toBe(false);
		expect(isValidEmail('neil @example.com')).toBe(false);
	});
});

describe('JSON_to_URLEncoded', () => {
	it('encodes form values without losing punctuation or spaces', () => {
		const encoded = JSON_to_URLEncoded({
			name: 'Neil Hughes',
			message: 'Custard & anxiety?',
		});
		const params = new URLSearchParams(encoded);

		expect(params.get('name')).toBe('Neil Hughes');
		expect(params.get('message')).toBe('Custard & anxiety?');
	});
});
