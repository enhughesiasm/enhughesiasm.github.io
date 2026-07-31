import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://walkingoncustard.com',
	base: '/',
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
