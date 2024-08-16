import * as fs from 'fs';
import * as path from 'path';

import type { PostV2 } from './post';

export function parseFrontMatter(fileContent: string): {
	metadata: any;
	content: string;
} {
	const parts = fileContent.split('---');

	// parts[0] is empty, parts[1] is metadata, parts[2] is the content
	if (parts.length < 3) {
		throw new Error('Invalid front matter format');
	}

	const metadataSection = parts[1].trim();
	const content = parts.slice(2).join('---').trim(); // Join the rest in case there are "---" in the content

	const metadata: any = {};
	const lines = metadataSection.split('\n');

	let currentKey: string | null = null;
	let isArray = false;

	lines.forEach((line) => {
		line = line.trim();

		if (line.startsWith('- ')) {
			// Handle array items for categories and tags
			if (currentKey && isArray) {
				const value = line
					.replace(/^- /, '')
					.replace(/^["']|["']$/g, '')
					.trim(); // Remove leading '- ' and surrounding quotes
				metadata[currentKey].push(value);
			}
		} else {
			const [key, ...rest] = line.split(':');
			const value = rest
				.join(':')
				.trim()
				.replace(/^["']|["']$/g, '')
				.trim(); // Remove surrounding quotes

			if (value === '') {
				// If the value is empty, this is the start of an array
				currentKey = key.trim();
				metadata[currentKey] = [];
				isArray = true;
			} else {
				metadata[key.trim()] = value;
				currentKey = null;
				isArray = false;
			}
		}
	});

	return { metadata, content };
}

export function getBlogPosts(): PostV2[] {
	const basePath = './src/data/blog/output/post/';
	const blogPosts: PostV2[] = [];

	const files = fs
		.readdirSync(basePath)
		.filter((file) => file.endsWith('.md'));

	files.forEach((file) => {
		const filePath = path.join(basePath, file);
		const fileContent = fs.readFileSync(filePath, 'utf8');

		const { metadata, content } = parseFrontMatter(fileContent);

		const blogPost: PostV2 = {
			title: metadata.title || '',
			date: new Date(metadata.date) || '',
			categories: metadata.categories || [],
			tags: metadata.tags || [],
			coverImage: metadata.coverImage || '',
			excerpt: metadata.excerpt || '',
			id: metadata.id || '',
			slug: metadata.slug || '',
			content,
			estimatedReadingTime: `${estimateReadingTime(content)} minutes`,
			filePath: filePath,
		};

		blogPosts.push(blogPost);
	});

	return blogPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function estimateReadingTime(content: string): number {
	const wordsPerMinute = 200; // Average reading speed of an adult in words per minute
	const wordCount = content.split(/\s+/).length;
	const readingTime = Math.ceil(wordCount / wordsPerMinute);
	return readingTime;
}
