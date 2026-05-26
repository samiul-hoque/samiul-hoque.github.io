import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://samiulmakes.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  integrations: [sitemap()],
});
