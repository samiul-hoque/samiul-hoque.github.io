import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

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
  integrations: [
    mdx(),
    sitemap({
      // Keep unlisted/experimental pages out of the sitemap.
      filter: (page) => !page.includes('/robot-kinematics') && !page.includes('/sandbox/'),
    }),
  ],
});
