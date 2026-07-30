import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './Button';

export interface CycleButtonOption {
  id: string;
  label: ReactNode;
  /** Plain-text version used in the button's accessible name. */
  ariaLabel?: string;
}

export interface CycleButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onChange' | 'value'> {
  label: ReactNode;
  ariaLabel: string;
  value: string | null;
  originalLabel: ReactNode;
  originalAriaLabel?: string;
  options: readonly CycleButtonOption[];
  onChange?: (value: string | null) => void;
}

/**
 * A single button that advances through Original → each option → Original.
 * `null` represents the original/default preparation.
 */
export function CycleButton({
  label,
  ariaLabel,
  value,
  originalLabel,
  originalAriaLabel = 'Original',
  options,
  onChange,
  className = '',
  disabled,
  ...props
}: CycleButtonProps) {
  const values: Array<string | null> = [null, ...options.map((option) => option.id)];
  const currentIndex = Math.max(0, values.indexOf(value));
  const nextValue = values[(currentIndex + 1) % values.length] ?? null;
  const currentOption = value === null ? null : options.find((option) => option.id === value);
  const nextOption = nextValue === null ? null : options.find((option) => option.id === nextValue);
  const currentLabel = currentOption?.label ?? originalLabel;
  const currentAriaLabel = currentOption?.ariaLabel ?? originalAriaLabel;
  const nextAriaLabel = nextOption?.ariaLabel ?? originalAriaLabel;

  return (
    <Button
      {...props}
      fullWidth
      disabled={disabled}
      variant={value === null ? 'neutral' : 'primary'}
      className={`gigi-choice-button gigi-cycle-button ${className}`.trim()}
      aria-label={`${ariaLabel}: ${currentAriaLabel}. Next: ${nextAriaLabel}`}
      data-state={value ?? 'original'}
      onClick={() => onChange?.(nextValue)}
    >
      <span className="gigi-choice-button__text">{label}</span>
      <span className="gigi-choice-button__price">{currentLabel}&nbsp; ↻</span>
    </Button>
  );
}
