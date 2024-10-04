import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';


const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isGitHubPages ? 'https://jurilorenz.github.io' : 'http://localhost:3000',
  base: '/',
    build: {
    outDir: 'dist',
  },
  integrations: [
    tailwind(),
    icon({
      include: {
        fa: ["github", "linkedin"], 
      },
    }),
  ],
});