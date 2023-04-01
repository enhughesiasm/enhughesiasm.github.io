import { WP_API_POSTS_PER_PAGE } from '../../../data/definitions';
import { cacheLocal } from './cache_local';
import { fetchWP } from './fetch_wp';
import type { Post } from './post';

export async function getArticles(): Promise<Post[]> {
	const pageCount = await getTotalPageNumber(WP_API_POSTS_PER_PAGE);
	let allPosts: Post[] = [];
	for (let i = 1; i <= pageCount; i++) {
		allPosts = allPosts.concat(
			await cacheLocal('articles-page-' + i, () =>
				fetchArticles(i, WP_API_POSTS_PER_PAGE)
			)
		);
	}

	return allPosts;
}

async function fetchArticles(page: number, perPage: number) {
	return await fetchWP<Post[]>(
		'articles',
		`posts/?page=${page}&per_page=${perPage}`
	);
}

async function fetchTotalPageNumber(pageSize: number) {
	return await fetchWP<number>(
		'page_number',
		`posts/?per_page=${pageSize}`,
		async (res) => {
			return await Number(res.headers.get('x-wp-totalpages') ?? -1);
		}
	);
}

export async function getTotalPageNumber(pageSize: number) {
	const number = await cacheLocal('total-pages-for-size-' + pageSize, () =>
		fetchTotalPageNumber(pageSize)
	);

	return number;
}
