import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  PizzaPreferenceControls,
  type PizzaPreferenceId,
  type PizzaPreferenceValues,
} from './components/PizzaPreferenceControls';

const meta = {
  title: 'Components/Pizza Preference Controls',
  component: PizzaPreferenceControls,
  decorators: [(Story) => <div style={{ width: 354 }}><Story /></div>],
} satisfies Meta<typeof PizzaPreferenceControls>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveExample({ lang = 'en' }: { lang?: 'en' | 'fr' }) {
  const [values, setValues] = useState<PizzaPreferenceValues>({});
  const change = (id: PizzaPreferenceId, value: string | null) => {
    setValues((current) => ({ ...current, [id]: value }));
  };
  return <PizzaPreferenceControls lang={lang} values={values} onChange={change} />;
}

export const Interactive: Story = {
  render: () => <InteractiveExample />,
};

export const French: Story = {
  render: () => <InteractiveExample lang="fr" />,
};
