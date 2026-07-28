import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrandHeader } from './components/BrandHeader';
import { CategoryTabs } from './components/CategoryTabs';
import { MobileShell } from './components/MobileShell';

const meta = { title: 'Components/Navigation', component: BrandHeader } satisfies Meta<typeof BrandHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = { args: { logoSrc: '/GigiLogo.png' }, decorators: [(Story) => <div style={{ width: 390 }}><Story /></div>] };
export const MenuNavigation: Story = {
  render: () => <MobileShell><BrandHeader logoSrc="/GigiLogo.png" /><CategoryTabs active="Pizza" /><div className="gigi-screen-content" /></MobileShell>,
};
