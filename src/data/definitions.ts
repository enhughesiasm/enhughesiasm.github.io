export const SITE_BASE_URL = '/enhughesiasm-astro/';

export const TED_TALK_VIEWS = 340_000;

export const WP_API_URL = 'https://walkingoncustard.com/wp-json/wp/v2';

export const RECAPTCHA_SITE_KEY = import.meta.env.DEV
	? '6Lf_CMgUAAAAAPLAjc_8rZ_hO7xGZ6PK9ldjjCVr'
	: '6LeoBsgUAAAAAN9yL0uxns-G4Jvl1q2wQz1Ld2cX';

export const WP_API_POSTS_PER_PAGE = 50;

export const DEFAULT_WP_MEDIA_ID = 3601;

// all featured images in WP should have this aspect ratio
export const FEATURED_WP_IMAGE_WIDTH = 800;
export const FEATURED_WP_IMAGE_HEIGHT = 600;
