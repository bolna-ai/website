import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
export default defineConfig({
   site: 'https://bolna.dev',
   integrations: [
      tailwind(),
      partytown({
      // Adds dataLayer.push as a forwarding-event.
         config: {
            forward: ["dataLayer.push"],
         }
      }),
   ]
});