import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap' // <--- Add this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Add the Sitemap plugin configuration below
    Sitemap({
      hostname: 'https://globalultratech.com', // <--- CRITICAL: Your production domain
      dynamicRoutes: [
        '/services',
        '/scrap-value',
        '/about',
        '/contact',
        '/policy-compliance',
        '/faq'
      ],
      robots: [{
        userAgent: '*',
        allow: '/',
        crawlDelay: 2
      }]
    }),
  ],
})