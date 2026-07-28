import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrderSummary } from './components/OrderSummary';

const meta = {
  title: 'Components/Order Summary',
  component: OrderSummary,
  decorators: [(Story) => <div style={{ width: 354 }}><Story /></div>],
  args: {
    lines: [
      { label: 'Subtotal', value: '$83.75' },
      { label: 'Delivery', value: '$4.00' },
      { label: 'Taxes', value: '$13.14' },
      { label: 'Total', value: '$100.89', emphasized: true },
    ],
  },
} satisfies Meta<typeof OrderSummary>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
