import { cacheLocal } from './cache_local';
import { fetchWP } from './fetch_wp';
import type { WPMedia } from './media';
import { WP_API_POSTS_PER_PAGE } from '../../../data/definitions';

export async function getMedia(): Promise<WPMedia[]> {
	const pageCount = await getTotalPageNumber(WP_API_POSTS_PER_PAGE);
	let allMedia: WPMedia[] = [];
	for (let i = 1; i <= pageCount; i++) {
		allMedia = allMedia.concat(
			await cacheLocal('media-page-' + i, () =>
				fetchMedia(i, WP_API_POSTS_PER_PAGE)
			)
		);
	}

	return allMedia;
}

async function fetchTotalPageNumber(pageSize: number) {
	return await fetchWP<number>(
		'page_number',
		`media/?per_page=${pageSize}`,
		async (res) => {
			return await Number(res.headers.get('x-wp-totalpages') ?? -1);
		}
	);
}

export async function getTotalPageNumber(pageSize: number) {
	const number = await cacheLocal(
		'total-media-pages-for-size-' + pageSize,
		() => fetchTotalPageNumber(pageSize)
	);

	return number;
}

async function fetchMedia(page: number, perPage: number) {
	return await fetchWP<WPMedia[]>(
		'articles',
		`media/?page=${page}&per_page=${perPage}`
	);
}

export async function getMediaById(id: number) {
	return (await getMedia()).find((m) => m.id === id);
}
