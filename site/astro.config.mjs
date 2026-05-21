import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://samiul-hoque.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
