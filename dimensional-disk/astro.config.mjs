// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lukaspitrik.cz',
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true
  }
});
