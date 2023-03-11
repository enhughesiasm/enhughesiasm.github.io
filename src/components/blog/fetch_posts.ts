import fs from 'node:fs';
import type { Post } from './post';

const API_URL = import.meta.env.PUBLIC_WP_API_URL;

export async function fetchAPI(query = '') {
	const url = `${API_URL}/${query}`;

	const res = await fetch(url);

	if (res.ok) {
		return { ...res.json(), pageCount: res.headers.get('x-wp-totalpages') };
	} else {
		const error = await res.json();

		throw new Error(
			'❗ Failed to fetch API for ' +
				query +
				'\n' +
				'Code: ' +
				error.code +
				'\n' +
				'Message: ' +
				error.message +
				'\n'
		);
	}
}

export async function getArticles(
	page: number,
	perPage: number
): Promise<Post[]> {
	const cache = './public/.cache';

	if (!fs.existsSync(cache)) {
		fs.mkdirSync(cache, { recursive: true });
	}
	// Check if "caching" file exists
	if (fs.existsSync('./public/.cache/local.json')) {
		console.log('🥳 Cache hit!');
		const raw = fs.readFileSync('./public/.cache/local.json');
		return JSON.parse(raw as unknown as string);
	} else {
		console.log('😢 Cache miss!');

		const response = await fetchArticles(page, perPage);

		// Write projects to "caching" file
		fs.writeFileSync(
			'./public/.cache/local.json',
			JSON.stringify(response)
		);

		return response;
	}
}

async function fetchArticles(page: number, perPage: number) {
	const url = `${API_URL}/${`posts/?page=${page}&per_page=${perPage}`}`;

	const res = await fetch(url);

	if (res.ok) {
		const cachedArticles = (await res.json()) as Post[];
		return cachedArticles;
	} else {
		const error = await res.json();

		throw new Error(
			'❗ Failed to fetch articles. ' +
				'\n' +
				'Code: ' +
				error.code +
				'\n' +
				'Message: ' +
				error.message +
				'\n'
		);
	}
}

export async function getTotalPageNumber(perPage: number) {
	const url = `${API_URL}/${`posts/?per_page=${perPage}`}`;

	const res = await fetch(url);

	if (res.ok) {
		const pageCount = res.headers.get('x-wp-totalpages');
		return Number(pageCount);
	} else {
		const error = await res.json();

		throw new Error(
			'❗ Failed to fetch articles. ' +
				'\n' +
				'Code: ' +
				error.code +
				'\n' +
				'Message: ' +
				error.message +
				'\n'
		);
	}
}
