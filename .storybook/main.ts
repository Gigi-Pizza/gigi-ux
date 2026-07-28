import type { StorybookConfig } from '@storybook/react-vite';

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
  // local react so components resolve normally in the design environment.
  viteFinal: async (cfg) => {
    cfg.resolve = cfg.resolve ?? {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias ?? {}),
      '@esm.sh/react-dom/client': 'react-dom/client',
      '@esm.sh/react': 'react',
    };
    return cfg;
  },
};

export default config;
