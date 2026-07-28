import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
  build: {
    outDir: 'site-dist',
    emptyOutDir: true,
  },
});
