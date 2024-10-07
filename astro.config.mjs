import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';


const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://maxwapp.de',
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