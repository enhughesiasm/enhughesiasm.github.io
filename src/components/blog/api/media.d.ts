export type WPMedia = {
	id: number;
	date_gmt: string;
	link: string;
	title: string;
	alt_text: string;
	description: string;
	media_type: string;
	caption: { rendered: string };
	source_url: string;
	mime_type: 'image/jpeg' | 'image/png';
};
