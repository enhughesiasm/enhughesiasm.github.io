import { cacheLocal } from './cache_local';
import type { WPCategory } from './category';
import { fetchWP } from './fetch_wp';

export async function getCategories(): Promise<WPCategory[]> {
	const categories = await cacheLocal('categories', () => fetchCategories());

	return categories;
}

async function fetchCategories() {
	return await fetchWP<WPCategory[]>('categories', `categories/`);
}
