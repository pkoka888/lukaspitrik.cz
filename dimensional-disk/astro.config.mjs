// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lukaspitrik.cz',
  integrations: [tailwind(), sitemap()],
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true
  },
  markdown: {
    // Support frontmatter for collections
  },
  // Content collections configuration (Astro 6)
  contentCollections: {
    pages: {
      type: 'content',
      schema: ({ z }) => z.object({
        title: z.string(),
        description: z.string().optional()
      })
    }
  }
});
