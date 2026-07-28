import type { SummaryLine } from '../types';

export interface OrderSummaryProps {
  lines: SummaryLine[];
}

export function OrderSummary({ lines }: OrderSummaryProps) {
  return (
    <dl className="gigi-order-summary">
      {lines.map((line) => (
        <div key={line.label} className={line.emphasized ? 'is-emphasized' : ''}>
          <dt>{line.label}</dt>
          <dd>{line.value}</dd>
        </div>
      ))}
    </dl>
  );
}
