export const BOOKS_BY_NEIL = [
	'walking-on-custard',
	'shop-before-life',
] as const;

export type WocBook = (typeof BOOKS_BY_NEIL)[0]; // bit gross, but sure 😅
export type SblBook = (typeof BOOKS_BY_NEIL)[1];

export type BookByNeil = (typeof BOOKS_BY_NEIL)[number];

export type BookPage = {
	key: BookByNeil;
	title: string;
	coverImg: any;
	linkUrl: string;
};
