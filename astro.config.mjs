import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
// import sitemap from 'astro-sitemap';
import partytown from '@astrojs/partytown'; 


const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://maxwapp.de',
  base: '/',
  build: {
    outDir: 'dist',
  },
  integrations: [
   partytown({   
     config: {
       forward: ["dataLayer.push"],  
     },
   }),

    tailwind(),
    icon({
      include: {
        fa: ["github","instagram", "linkedin"], 
      },
    }),
    // sitemap({
    //   filter: (page) =>
    //     !page.includes('/thank-you') &&
    //     !page.includes('/datenschutz') &&
    //     !page.includes('/impressum'),
    //   i18n: false,
    //   customPages: [],
    //   changefreq: "monthly",
    //   priority: 0.8,
    // }),
  ],
});