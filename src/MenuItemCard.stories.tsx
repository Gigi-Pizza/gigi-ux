import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuItemCard } from './components/MenuItemCard';

const meta = {
  title: 'Components/Menu Item Card',
  component: MenuItemCard,
  decorators: [(Story) => <div style={{ width: 354 }}><Story /></div>],
  args: {
    heading: 'All Dressed',
    description: 'Pepperoni, mushrooms, green peppers & mozzarella · From $18.55',
    actionLabel: 'Select',
  },
} satisfies Meta<typeof MenuItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { selected: true, actionLabel: 'Selected' } };
