export type Post = {
	id: string;
	date: Date;
	date_gmt: Date;
	modified: Date;
	modified_gmt: Date;
	slug: string;
	status: 'publish';
	link: string;
	author: string;
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
		description: string;
		canonical: string;
		og_locale: string;
		og_description: string;
		og_url: string;
		og_image: {
			url: string;
			width: string;
			height: string;
			type: string;
		};
		og_site_name: string;
		article_published_time: string;
		article_modified_time: string;
		twitter_misc: {
			'Written by': string;
			'Estimated reading time': string;
		};
	};
};

export type PostV2 = {
	title: string;
	date: Date;
	categories: string[];
	tags: string[];
	coverImage: string;
	excerpt: string;
	id: string;
	slug: string;
	content: string;
	estimatedReadingTime: string;
	filePath: string;
};
