import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrandHeader } from './components/BrandHeader';
import { Button } from './components/Button';
import { CategoryTabs } from './components/CategoryTabs';
import { FormField } from './components/FormField';
import { MenuItemCard } from './components/MenuItemCard';
import { MobileShell } from './components/MobileShell';
import { OrderSummary } from './components/OrderSummary';
import { StickyAction } from './components/StickyAction';
import { TopBar } from './components/TopBar';

const meta = { title: 'Ordering Flow/Composed Screens' } satisfies Meta;
export default meta;
type Story = StoryObj;

function MenuSelectionScreen() {
  const [selected, setSelected] = useState(['Cheese', 'Pepperoni', 'All Dressed']);
  const items = [
    ['Cheese', 'Pizza sauce & mozzarella · From $15.15'],
    ['Pepperoni', 'Pepperoni & mozzarella · From $17.30'],
    ['All Dressed', 'Pepperoni, mushrooms, green peppers & mozzarella · From $18.55'],
  ];
  const toggle = (name: string) => setSelected((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);

  return (
    <MobileShell>
      <BrandHeader logoSrc="/GigiLogo.png" />
      <CategoryTabs active="Pizza" />
      <main className="gigi-screen-content">
        <h1>Pizza</h1>
        <p>Select one or more pizza types to customize.</p>
        {items.map(([name, description]) => (
          <MenuItemCard
            key={name}
            heading={name}
            description={description}
            selected={selected.includes(name)}
            actionLabel={selected.includes(name) ? 'Selected' : 'Select'}
            onAction={() => toggle(name)}
          />
        ))}
      </main>
      <StickyAction>Customize {selected.length} pizza {selected.length === 1 ? 'type' : 'types'}</StickyAction>
    </MobileShell>
  );
}

function ContinueOrderingScreen() {
  return (
    <MobileShell>
      <BrandHeader logoSrc="/GigiLogo.png" />
      <CategoryTabs active="Pizza" />
      <main className="gigi-screen-content">
        <h1>Pizza added</h1>
        <p>Your customized pizzas are saved. Continue ordering from any category or review your cart.</p>
        <MenuItemCard heading="3 × All Dressed" description="2 Large · 1 Medium · $94.80" selected />
        <div className="gigi-choice-grid">
          <Button fullWidth variant="neutral">Continue with Subs</Button>
          <Button fullWidth variant="neutral">Continue with Pasta</Button>
        </div>
      </main>
      <StickyAction>View cart · 3 items · $94.80</StickyAction>
    </MobileShell>
  );
}

function CartScreen() {
  return (
    <MobileShell>
      <TopBar title="Your cart" />
      <main className="gigi-screen-content">
        <h1>Review your order</h1>
        <MenuItemCard heading="2 × All Dressed · Large" description="Item 1: well done · Item 2: no green peppers" actionLabel="Edit" />
        <MenuItemCard heading="1 × Steak & Capicollo · 10”" description="$15.15 · Dressing on the side" actionLabel="Edit" />
        <OrderSummary lines={[
          { label: 'Subtotal', value: '$83.75' },
          { label: 'Delivery', value: '$4.00' },
          { label: 'Taxes', value: '$13.14' },
          { label: 'Total', value: '$100.89', emphasized: true },
        ]} />
        <p>Delivery minimum and zones confirmed at checkout.</p>
      </main>
      <StickyAction secondaryLabel="＋ Add more items">Continue to checkout · $100.89</StickyAction>
    </MobileShell>
  );
}

function CheckoutScreen() {
  const [method, setMethod] = useState<'Delivery' | 'Pickup'>('Delivery');
  return (
    <MobileShell>
      <TopBar title="Checkout" />
      <main className="gigi-screen-content">
        <h1>How would you like it?</h1>
        <Button fullWidth variant={method === 'Delivery' ? 'primary' : 'neutral'} onClick={() => setMethod('Delivery')}>✓&nbsp; Delivery &nbsp; 35–50 min</Button>
        <Button fullWidth variant={method === 'Pickup' ? 'primary' : 'neutral'} onClick={() => setMethod('Pickup')}>Pickup &nbsp; 20–30 min</Button>
        <FormField label="Name" defaultValue="Alex Martin" />
        <FormField label="Delivery address" defaultValue="123 Lakeshore Rd, Pointe-Claire" />
        <FormField label="Phone" defaultValue="514 555 0137" inputMode="tel" />
        <h2 style={{ margin: 0, fontSize: 18 }}>Payment</h2>
        <Button fullWidth variant="neutral">✓&nbsp; Pay at the door · Card or cash</Button>
      </main>
      <StickyAction>Place order · $100.89</StickyAction>
    </MobileShell>
  );
}

function ConfirmationScreen() {
  return (
    <MobileShell>
      <TopBar title="Order received" />
      <main className="gigi-screen-content gigi-confirmation">
        <img className="gigi-confirmation__logo" src="/GigiLogo.png" alt="Gigi Pizzeria" />
        <h1>Thank you, Alex!</h1>
        <p>Your delivery is estimated in 35–50 minutes.</p>
        <p>We’ll call if we need to confirm anything.</p>
        <MenuItemCard heading="Order #1042 · $100.89" description="3 items · Delivery · Pay at door" />
        <p className="gigi-help">Need help? Call (514) 697-4587</p>
        <Button fullWidth variant="neutral">Back to menu</Button>
      </main>
    </MobileShell>
  );
}

export const MultipleItemSelection: Story = { render: () => <MenuSelectionScreen /> };
export const ContinueOrdering: Story = { render: () => <ContinueOrderingScreen /> };
export const Cart: Story = { render: () => <CartScreen /> };
export const Checkout: Story = { render: () => <CheckoutScreen /> };
export const Confirmation: Story = { render: () => <ConfirmationScreen /> };
