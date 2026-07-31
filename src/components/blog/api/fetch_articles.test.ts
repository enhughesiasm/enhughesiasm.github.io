import { describe, expect, it } from 'vitest';

import { parseFrontMatter } from './fetch_articles';

describe('parseFrontMatter', () => {
	it('parses scalar and array metadata', () => {
		const result = parseFrontMatter(`---
title: "A title: with punctuation"
categories:
  - "anxiety"
  - experiments
slug: a-title
---
Article body.`);

		expect(result.metadata).toEqual({
			title: 'A title: with punctuation',
			categories: ['anxiety', 'experiments'],
			slug: 'a-title',
		});
		expect(result.content).toBe('Article body.');
	});

	it('preserves front-matter delimiters inside article content', () => {
		const result = parseFrontMatter('---\ntitle: Test\n---\nBefore---after');

		expect(result.content).toBe('Before---after');
	});

	it('rejects content without front matter', () => {
		expect(() => parseFrontMatter('Just an article')).toThrow(
			'Invalid front matter format',
		);
	});
});
