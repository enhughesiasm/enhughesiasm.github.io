import type { ImageMetadata } from 'astro';

export const BLOG_IMAGE_BASE_URL = '/src/data/blog/output/post/images/';

export const allBlogImages = import.meta.glob<{ default: ImageMetadata }>(
	'/src/data/blog/output/post/images/*.{jpeg,jpg,png,gif}'
);

export const getImage = async (
	imageFileName: string
): Promise<ImageMetadata | null> => {
	if (!allBlogImages[`${BLOG_IMAGE_BASE_URL}${imageFileName}`]) {
		// console.error(
		// 	`"${BLOG_IMAGE_BASE_URL}${imageFileName}" does not exist in glob: "${BLOG_IMAGE_BASE_URL}*.{jpeg,jpg,png,gif}"`
		// );
		return null;
	}

	return (await allBlogImages[`${BLOG_IMAGE_BASE_URL}${imageFileName}`]())
		.default;
};
