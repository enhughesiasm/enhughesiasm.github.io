import type { WPTag } from './tag';
import { WP_API_POSTS_PER_PAGE } from '../../../data/definitions';
import { cacheLocal } from './cache_local';
import { fetchWP } from './fetch_wp';

export async function getTags(): Promise<WPTag[]> {
	const pageCount = await getTotalPageNumber(WP_API_POSTS_PER_PAGE);
	let allWPTags: WPTag[] = [];
	for (let i = 1; i <= pageCount; i++) {
		allWPTags = allWPTags.concat(
			await cacheLocal('tags-page-' + i, () =>
				fetchTags(i, WP_API_POSTS_PER_PAGE)
			)
		);
	}

	return allWPTags;
}

async function fetchTags(page: number, perPage: number) {
	return await fetchWP<WPTag[]>(
		'tags',
		`tags/?page=${page}&per_page=${perPage}`
	);
}

async function fetchTotalPageNumber(pageSize: number) {
	return await fetchWP<number>(
		'page_number',
		`tags/?per_page=${pageSize}`,
		async (res) => {
			return await Number(res.headers.get('x-wp-totalpages') ?? -1);
		}
	);
}

export async function getTotalPageNumber(pageSize: number) {
	const number = await cacheLocal(
		'total-tags-pages-for-size-' + pageSize,
		() => fetchTotalPageNumber(pageSize)
	);

	return number;
}
