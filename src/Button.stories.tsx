import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Add to cart', variant: 'primary', size: 'medium' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'neutral', 'subtle'] },
    size: { control: 'inline-radio', options: ['small', 'medium'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const FullWidth: Story = { args: { fullWidth: true } };
