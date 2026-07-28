import { defineConfig } from 'vite';
import { createRollupExternal } from '@rmc-toolkit/vite';
import { manifest } from '@gigi/runtime-manifest';

// Production build: gigi-ux as a DEPLOYED Runtime Module Composition module
// (the FERRY `web-ui` role). Emits build/ux/index.mjs, uploaded by CI to R2 and
// served at assets.gigipizza.ca/ux/index.mjs (i.e. @gigi/ux/index.mjs).
//
// React (@esm.sh/react) and the automatic JSX runtime (react/jsx-runtime) are
// externalized via the shared manifest, so the browser resolves them through the
// import map — one shared React singleton, never bundled into this module.
//
// Local dev / Storybook use vite.site.config.ts / .storybook (which alias
// @esm.sh/react -> react), so this rmc build config is production-only.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
  // The module is JS + CSS only; static images are served from the site/assets
  // origin separately, not bundled into this module's upload.
  publicDir: false,
  build: {
    outDir: 'build/ux',
    emptyOutDir: true,
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
      fileName: () => 'index.mjs',
    },
    rollupOptions: {
      external: createRollupExternal(manifest),
    },
  },
});
