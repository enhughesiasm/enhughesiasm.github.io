import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://walkingoncustard.com',
  base: '/',
  integrations: [react(), tailwind(), sitemap()]
});