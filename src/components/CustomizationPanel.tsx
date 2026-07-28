import type { InstructionItem, SizeOption } from '../types';
import { FormField } from './FormField';
import { MobileShell } from './MobileShell';
import { QuantityControl } from './QuantityControl';
import { StickyAction } from './StickyAction';
import { TopBar } from './TopBar';

export interface CustomizationPanelProps {
  topBarTitle: string;
  eyebrow: string;
  title: string;
  description: string;
  options: SizeOption[];
  instructions: InstructionItem[];
  totalLabel: string;
  actionLabel: string;
  selectionLabel?: string;
  onBack?: () => void;
  onOptionChange?: (id: string, quantity: number) => void;
  onInstructionChange?: (id: string, value: string) => void;
  onAction?: () => void;
}

export function CustomizationPanel({
  topBarTitle,
  eyebrow,
  title,
  description,
  options,
  instructions,
  totalLabel,
  actionLabel,
  selectionLabel = options.length > 1 ? 'Choose sizes and quantities' : 'Choose quantity',
  onBack,
  onOptionChange,
  onInstructionChange,
  onAction,
}: CustomizationPanelProps) {
  return (
    <MobileShell>
      <TopBar title={topBarTitle} onBack={onBack} />
      <main className="gigi-customization">
        <span className="gigi-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>{selectionLabel}</h2>
        <div className="gigi-size-list">
          {options.map((option) => (
            <QuantityControl
              key={option.id}
              label={option.label}
              price={option.price}
              quantity={option.quantity}
              onChange={(quantity) => onOptionChange?.(option.id, quantity)}
            />
          ))}
        </div>
        <h2>{totalLabel}</h2>
        <div className="gigi-instruction-list">
          {instructions.map((item) => (
            <FormField
              key={item.id}
              label={item.label}
              placeholder={item.placeholder}
              value={item.value}
              onChange={(event) => onInstructionChange?.(item.id, event.target.value)}
            />
          ))}
        </div>
      </main>
      <StickyAction onClick={onAction}>{actionLabel}</StickyAction>
    </MobileShell>
  );
}
