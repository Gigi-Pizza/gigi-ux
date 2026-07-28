import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Umbrella = gigi-ux's parent, so Storybook may serve the shared CSS from the
// sibling gigi-static (Option A).
const umbrella = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: { autodocs: 'tag' },
  // Components import the shared "@esm.sh/react" singleton (resolved via the
  // import map in production). Storybook has no import map, so alias it to the
  // local react; and allow serving the sibling gigi-static CSS.
  viteFinal: async (cfg) => {
    cfg.resolve = cfg.resolve ?? {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias ?? {}),
      '@esm.sh/react-dom/client': 'react-dom/client',
      '@esm.sh/react': 'react',
    };
    cfg.server = cfg.server ?? {};
    cfg.server.fs = {
      ...(cfg.server.fs ?? {}),
      allow: [...(cfg.server.fs?.allow ?? []), umbrella],
    };
    return cfg;
  },
};

export default config;
