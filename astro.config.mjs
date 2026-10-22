import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://clicktap.app',
  integrations: [{
    name: 'clicktap-local-supabase-check',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command === 'dev') {
          injectRoute({
            pattern: '/prueba-supabase',
            entrypoint: './src/dev/prueba-supabase.astro',
            prerender: false,
          });
        }
      },
    },
  }],
});
