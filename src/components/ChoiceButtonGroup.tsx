import type { ReactNode } from 'react';
import { Button } from './Button';

export interface ChoiceButtonOption {
  id: string;
  label: ReactNode;
}

export interface ChoiceButtonGroupProps {
  options: readonly ChoiceButtonOption[];
  selectedIds?: readonly string[];
  onSelect?: (optionId: string) => void;
  columns?: 1 | 2;
  ariaLabel?: string;
  showSelectionMark?: boolean;
  className?: string;
}

export function ChoiceButtonGroup({
  options,
  selectedIds = [],
  onSelect,
  columns = 1,
  ariaLabel,
  showSelectionMark = false,
  className = '',
}: ChoiceButtonGroupProps) {
  return (
    <div
      className={`gigi-choice-grid${columns === 2 ? ' gigi-choice-grid--compact' : ''} ${className}`.trim()}
      role="group"
      aria-label={ariaLabel}
    >
      {options.map((option) => {
        const selected = selectedIds.includes(option.id);
        return (
          <Button
            key={option.id}
            fullWidth
            variant={selected ? 'primary' : 'neutral'}
            aria-pressed={selected}
            onClick={() => onSelect?.(option.id)}
          >
            {selected && showSelectionMark ? <span aria-hidden="true">✓ </span> : null}
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
