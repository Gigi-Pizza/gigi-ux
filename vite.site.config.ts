import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Allow importing the shared CSS from the sibling gigi-static (Option A: the CSS
// source of truth lives there). The umbrella is this repo's parent directory.
const umbrella = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Standalone site preview (dev + build-site). Components import the shared
// "@esm.sh/react" specifier (resolved via the import map in production); here
// there is no import map, so alias it to the local react so everything resolves.
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@esm.sh/react-dom/client': 'react-dom/client',
      '@esm.sh/react': 'react',
    },
  },
  server: { fs: { allow: [umbrella] } },
  build: {
    outDir: 'site-dist',
    emptyOutDir: true,
  },
});
