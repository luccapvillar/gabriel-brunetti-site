// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// O domínio ainda não foi definido (ver docs/BRIEFING.md, pendência 6).
// Quando existir, basta colocar PUBLIC_SITE_URL no .env: canonical, Open Graph e JSON-LD passam a usar o endereço completo.
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

export default defineConfig({
  site: PUBLIC_SITE_URL || undefined,
  // Sem domínio definido, não gera sitemap com endereço inventado.
  integrations: PUBLIC_SITE_URL ? [sitemap()] : [],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
    format: 'file',
  },
  devToolbar: { enabled: false },
});
