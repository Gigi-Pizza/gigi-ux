import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomizationPanel, type CustomizationPanelProps } from './components/CustomizationPanel';
import type { InstructionItem, SizeOption } from './types';

function InteractivePanel(args: CustomizationPanelProps) {
  const [options, setOptions] = useState(args.options);
  const [values, setValues] = useState<Record<string, string>>({});
  const instructions = useMemo(() => args.instructions.map((item) => ({ ...item, value: values[item.id] ?? '' })), [args.instructions, values]);
  return (
    <CustomizationPanel
      {...args}
      options={options}
      instructions={instructions}
      onOptionChange={(id, quantity) => setOptions((current) => current.map((option) => option.id === id ? { ...option, quantity } : option))}
      onInstructionChange={(id, value) => setValues((current) => ({ ...current, [id]: value }))}
    />
  );
}

const pizzaOptions: SizeOption[] = [
  { id: 'small', label: 'Small 10"', price: 18.55, quantity: 0 },
  { id: 'medium', label: 'Medium 12"', price: 26.2, quantity: 1 },
  { id: 'large', label: 'Large 14"', price: 34.3, quantity: 2 },
  { id: 'xl', label: 'X-Large 16"', price: 41.7, quantity: 0 },
];

const pizzaInstructions: InstructionItem[] = [
  { id: 'large-1', label: '1 - Large 14" special instructions', placeholder: 'e.g. well done, light sauce' },
  { id: 'large-2', label: '2 - Large 14" special instructions', placeholder: 'e.g. no green peppers' },
  { id: 'medium-1', label: '3 - Medium 12" special instructions', placeholder: 'e.g. light sauce' },
];

const meta = {
  title: 'Patterns/Customization Panel',
  component: CustomizationPanel,
  render: (args) => <InteractivePanel {...args} />,
  args: {
    topBarTitle: 'Customize pizza',
    eyebrow: 'Pizza type 1 of 3',
    title: 'All Dressed',
    description: 'Pepperoni, mushrooms, green peppers and mozzarella cheese.',
    options: pizzaOptions,
    instructions: pizzaInstructions,
    totalLabel: 'Quantity 3 Pizzas',
    actionLabel: 'Save · Next: Customize Pepperoni',
  },
} satisfies Meta<typeof CustomizationPanel>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Pizza: Story = {};
export const Submarine: Story = {
  args: {
    topBarTitle: 'Customize submarine', eyebrow: 'Submarine', title: 'Steak & Capicollo',
    description: 'Lettuce, tomatoes, onions, oregano, Gigi dressing and melted cheese.',
    options: [
      { id: '7', label: '7"', price: 11.65, quantity: 0 },
      { id: '10', label: '10"', price: 15.15, quantity: 2 },
      { id: '14', label: '14"', price: 18.9, quantity: 1 },
    ],
    instructions: [
      { id: 'sub-1', label: '1 - 10" special instructions', placeholder: 'e.g. dressing on the side' },
      { id: 'sub-2', label: '2 - 10" special instructions', placeholder: 'e.g. no onions' },
      { id: 'sub-3', label: '3 - 14" special instructions', placeholder: 'e.g. extra toasted' },
    ],
    totalLabel: 'Quantity 3 Subs', actionLabel: 'Add 3 subs to cart · $49.20',
  },
};
export const Pasta: Story = {
  args: {
    topBarTitle: 'Customize pasta', eyebrow: 'Pasta', title: 'Baked Spaghetti',
    description: 'Spaghetti, meat sauce and mozzarella cheese.', selectionLabel: 'Choose quantity',
    options: [{ id: 'pasta', label: 'Baked Spaghetti', price: 17.95, quantity: 2 }],
    instructions: [
      { id: 'pasta-1', label: '1 - Baked Spaghetti special instructions', placeholder: 'e.g. extra cheese' },
      { id: 'pasta-2', label: '2 - Baked Spaghetti special instructions', placeholder: 'e.g. light sauce' },
    ],
    totalLabel: 'Quantity 2 Pastas', actionLabel: 'Add 2 pastas to cart · $35.90',
  },
};
