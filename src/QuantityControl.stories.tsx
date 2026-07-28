import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QuantityControl, type QuantityControlProps } from './components/QuantityControl';

function InteractiveQuantity(args: QuantityControlProps) {
  const [quantity, setQuantity] = useState(args.quantity);
  return <div style={{ width: 354 }}><QuantityControl {...args} quantity={quantity} onChange={setQuantity} /></div>;
}

const meta = {
  title: 'Components/Quantity Control',
  component: QuantityControl,
  render: (args) => <InteractiveQuantity {...args} />,
  args: { label: 'Large 14"', price: 34.3, quantity: 2 },
} satisfies Meta<typeof QuantityControl>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Selected: Story = {};
export const NotSelected: Story = { args: { label: 'Small 10"', price: 18.55, quantity: 0 } };
export const Pasta: Story = { args: { label: 'Baked Spaghetti', price: 17.95, quantity: 2 } };
