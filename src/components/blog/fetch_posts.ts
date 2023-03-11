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

export async function getArticles(page: number, perPage: number) {
	const url = `${API_URL}/${`posts/?page=${page}&per_page=${perPage}`}`;

	const res = await fetch(url);

	if (res.ok) {
		return (await res.json()) as Post[];
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
