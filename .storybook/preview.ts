import type { Preview } from '@storybook/react-vite';
import '../src/styles.css';

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
