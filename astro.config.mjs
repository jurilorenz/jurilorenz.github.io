import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from 'astro-sitemap';
// import partytown from '@astrojs/partytown'; 


const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://maxwapp.de',
  base: '/',
  build: {
    outDir: 'dist',
  },
  integrations: [
  // partytown({   <-- Удалить
  //   config: {
  //     forward: ["dataLayer.push"],  <-- Это относится к GA
  //   },
  // }),

    tailwind(),
    icon({
      include: {
        fa: ["github","instagram", "linkedin"], 
      },
    }),
     sitemap(),
  ],
});