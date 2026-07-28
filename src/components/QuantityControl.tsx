import { Button } from './Button';

export interface QuantityControlProps {
  label: string;
  price: number;
  quantity: number;
  currency?: string;
  onChange?: (quantity: number) => void;
}

const money = (value: number, currency: string) =>
  new Intl.NumberFormat('en-CA', { style: 'currency', currency }).format(value);

export function QuantityControl({ label, price, quantity, currency = 'CAD', onChange }: QuantityControlProps) {
  const itemLabel = `${label} · ${money(price, currency)}`;

  return (
    <div className="gigi-quantity-control">
      <div className="gigi-quantity-control__label">{itemLabel}</div>
      {quantity === 0 ? (
        <Button className="gigi-quantity-control__add" variant="primary" onClick={() => onChange?.(1)}>＋ Add</Button>
      ) : (
        <div className="gigi-quantity-control__stepper" aria-label={`${label} quantity`}>
          <Button variant="neutral" aria-label={`Remove one ${label}`} onClick={() => onChange?.(Math.max(0, quantity - 1))}>−</Button>
          <output aria-live="polite">{quantity}</output>
          <Button variant="neutral" aria-label={`Add one ${label}`} onClick={() => onChange?.(quantity + 1)}>＋</Button>
        </div>
      )}
    </div>
  );
}
