import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://samiulmakes.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
