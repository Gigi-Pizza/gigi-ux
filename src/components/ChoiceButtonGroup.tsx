import type { ReactNode } from 'react';
import { Button } from './Button';

export interface ChoiceButtonOption {
  id: string;
  label: ReactNode;
  /** Optional amount rendered separately so it can align or wrap independently. */
  price?: ReactNode;
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
            className={`gigi-choice-button${showSelectionMark ? ' gigi-choice-button--with-mark' : ''}`}
            aria-pressed={selected}
            onClick={() => onSelect?.(option.id)}
          >
            {showSelectionMark && (
              <span className="gigi-choice-button__indicator" aria-hidden="true">
                {selected ? '✓' : ''}
              </span>
            )}
            <span className="gigi-choice-button__text">{option.label}</span>
            {option.price != null && <span className="gigi-choice-button__price">{option.price}</span>}
          </Button>
        );
      })}
    </div>
  );
}
