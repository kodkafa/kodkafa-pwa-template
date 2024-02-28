import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
const random = Math.random();
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd()));
  return defineConfig({
    plugins: [
      react(),
      VitePWA({
        srcDir: 'src',
        filename: 'prompt-sw.ts',
        strategies: 'injectManifest',
        injectManifest: {
          minify: false,
          enableWorkboxModulesLogs: true,
        },
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        injectRegister: 'script-defer',
        registerType: 'prompt',
        manifest: {
          background_color: '#000000',
          theme_color: '#000000',
          lang: 'en',
          scope: '/',
          id: '/',
          start_url: '/',
          display_override: ['window-controls-overlay', 'fullscreen', 'minimal-ui'],
          display: 'standalone',
          categories: ['games'],
          dir: 'ltr',
          orientation: 'portrait',
          launch_handler: {
            client_mode: 'navigate-existing',
          },
          prefer_related_applications: false,
          shortcuts: [
            {
              name: 'APP',
              url: '/app',
              description: '',
            },
          ],
          icons: [
            {
              src: 'pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png',
            },
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
          screenshots: [
            {
              src: `/screenshot-wide.png?${random}`,
              sizes: '2560x1440',
              type: 'image/png',
              form_factor: 'wide',
              label: 'Landing',
            },
            {
              src: `/screenshot-wide-app.png?${random}`,
              sizes: '2560x1440',
              type: 'image/png',
              form_factor: 'wide',
              label: 'App',
            },
            {
              src: `/screenshot-narrow.png?${random}`,
              sizes: '750x1440',
              type: 'image/png',
              form_factor: 'narrow',
              label: 'Landing',
            },
            {
              src: `/screenshot-narrow-app.png?${random}`,
              sizes: '750x1440',
              type: 'image/png',
              form_factor: 'narrow',
              label: 'App',
            },
          ],
          protocol_handlers: [
            {
              protocol: 'web+kodkafapwa',
              url: '/%s',
            },
          ],
        },
        workbox: {
          clientsClaim: true,
          skipWaiting: true,
          sourcemap: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
          navigateFallbackDenylist: [/^\/backoffice/],
        },
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      port: parseInt(process.env.VITE_PORT),
      host: true,
    },
    preview: {
      host: '0.0.0.0',
      port: 4174,
    },
  });
};
