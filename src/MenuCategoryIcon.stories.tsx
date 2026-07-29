import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuCategoryIcon, type MenuCategoryIconType } from './components/MenuCategoryIcon';

const meta = {
  title: 'Brand/Menu Category Icons',
  component: MenuCategoryIcon,
  parameters: { layout: 'centered' },
  args: {
    type: 'pizza',
    label: 'Pizza',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['pizza', 'submarine', 'pasta', 'extras'],
    },
  },
} satisfies Meta<typeof MenuCategoryIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const iconLabels: Array<{ type: MenuCategoryIconType; label: string }> = [
  { type: 'pizza', label: 'Pizza' },
  { type: 'submarine', label: 'Submarines' },
  { type: 'pasta', label: 'Pasta' },
  { type: 'extras', label: 'Extras' },
];

export const CompleteSet: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
      {iconLabels.map(({ type, label }) => (
        <div key={type} style={{ width: 120, textAlign: 'center' }}>
          <MenuCategoryIcon type={type} label={label} />
          <strong style={{ display: 'block', marginTop: 12 }}>{label}</strong>
        </div>
      ))}
    </div>
  ),
};
