import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomePage } from './pages/HomePage';

const meta = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const LandingPage: Story = {};
