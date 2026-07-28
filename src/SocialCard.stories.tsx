import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialCard } from './components/SocialCard';

const meta = {
  title: 'Marketing/Social Card',
  component: SocialCard,
  parameters: {
    layout: 'padded',
  },
  args: {
    logoSrc: '/GigiLogo.png',
    photoSrc: '/Gigi-pizza-menu2-2025.jpg',
  },
  argTypes: {
    locale: {
      control: 'inline-radio',
      options: ['en', 'fr'],
    },
  },
} satisfies Meta<typeof SocialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  args: {
    locale: 'en',
  },
};

export const French: Story = {
  args: {
    locale: 'fr',
  },
};

export const CustomCopy: Story = {
  args: {
    locale: 'fr',
    tagline: ['UNE TRADITION DEPUIS 1970', 'À POINTE-CLAIRE'],
    phone: '(514) 697-4587',
  },
};
