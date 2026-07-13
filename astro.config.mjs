// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    routing: {
      prefixDefaultLocale: false // English at /, Vietnamese at /vi/
    }
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@legacy-ck': fileURLToPath(new URL('./src/legacy-ck', import.meta.url)),
      },
    },
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: undefined // Prevent code-splitting bloat
        }
      }
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  redirects: {
    '/guides/resume': '/guides/session-recovery',
    '/vi/guides/resume': '/vi/guides/session-recovery',
    '/guides/mobile-coding': '/guides/remote-control',
    '/vi/guides/mobile-coding': '/vi/guides/remote-control'
  }
});
