export type Post = {
	id: string;
	date: Date;
	date_gmt: Date;
	modified: Date;
	modified_gmt: Date;
	slug: string;
	status: 'publish';
	link: string;
	title: { rendered: string };
	content: { rendered: string };
	excerpt: { rendered: string };
	featured_media: number;
	comment_status: 'open';
	categories: number[];
	_embedded?: { 'wp:featuredmedia': { source_url: string }[] };
	tags: number[];
	yoast_head_json: {
		title: string;
		og_description: string;
		og_image: unknown;
	};
};
