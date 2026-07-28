import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './components/FormField';

const meta = {
  title: 'Components/Form Field',
  component: FormField,
  decorators: [(Story) => <div style={{ width: 354 }}><Story /></div>],
  args: { label: '1 - Large 14" special instructions', placeholder: 'e.g. well done, light sauce' },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Instructions: Story = {};
export const CheckoutValue: Story = { args: { label: 'Delivery address', defaultValue: '123 Lakeshore Rd, Pointe-Claire' } };
export const Error: Story = { args: { label: 'Phone', error: 'Enter a valid phone number' } };
