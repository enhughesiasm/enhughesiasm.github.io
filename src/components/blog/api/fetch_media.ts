import { cacheLocal } from './cache_local';
import { fetchWP } from './fetch_wp';
import type { WPMedia } from './media';

export async function getMedia(): Promise<WPMedia[]> {
	// TODO this may break if > 100, we may have to paginate like with the articles

	const media = await cacheLocal('media', () => fetchMedia());

	return media;
}

async function fetchMedia() {
	return await fetchWP<WPMedia[]>('media', `media/`);
}

export async function getMediaById(id: number) {
	return (await getMedia()).find((m) => m.id === id);
}
