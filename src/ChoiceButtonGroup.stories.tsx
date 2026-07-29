import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChoiceButtonGroup } from './components/ChoiceButtonGroup';

const pizzaOptions = [
  { id: 'plain', label: 'Plain · $15.15' },
  { id: 'pepperoni', label: 'Pepperoni · $17.30' },
  { id: 'all-dressed', label: 'All Dressed · $18.55' },
  { id: 'deluxe', label: 'Deluxe · $21.00' },
];

const meta = {
  title: 'Components/Choice Button Group',
  component: ChoiceButtonGroup,
  decorators: [(Story) => <div style={{ width: 354 }}><Story /></div>],
  args: {
    options: pizzaOptions,
    selectedIds: ['all-dressed'],
    ariaLabel: 'Left half',
    onSelect: () => undefined,
  },
} satisfies Meta<typeof ChoiceButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleColumn: Story = {};

export const CompactTwoColumn: Story = {
  args: { columns: 2 },
};

export const MultipleSelection: Story = {
  args: {
    columns: 2,
    selectedIds: ['pepperoni', 'deluxe'],
    showSelectionMark: true,
    ariaLabel: 'Left-half extras',
  },
};
