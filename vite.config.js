import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const entry = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [react()],
  // Absolute base. The legal pages live two directories deep (/legal/privacy/),
  // and a relative base would resolve their asset URLs — including the logo
  // built from import.meta.env.BASE_URL — against that nested path instead of
  // the site root. The site is served from the root of its custom domain, so
  // "/" is correct; moving it to a subpath means setting that subpath here.
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: entry('./index.html'),
        privacy: entry('./legal/privacy/index.html'),
        terms: entry('./legal/terms/index.html'),
        deleteAccount: entry('./legal/delete-account/index.html'),
      },
    },
  },
});
