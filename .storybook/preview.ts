import type { Preview } from '@storybook/react-vite';
// CSS source of truth lives in the sibling gigi-static (Option A). Imported here
// for styled component previews; requires server.fs.allow for the umbrella (see
// .storybook/main.ts). Local dev only — isolated Storybook CI would need the CSS.
import '../../gigi-static/src/css/ux.css';
import '../../gigi-static/src/css/home.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: '#f3f3f3' },
        { name: 'surface', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default preview;
