import type { HTMLAttributes } from 'react';

export interface MenuItemCardProps extends HTMLAttributes<HTMLElement> {
  heading: string;
  description: string;
  selected?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

export function MenuItemCard({
  heading,
  description,
  selected = false,
  actionLabel,
  onAction,
  className = '',
  ...props
}: MenuItemCardProps) {
  return (
    <article className={`gigi-menu-card${selected ? ' gigi-menu-card--selected' : ''} ${className}`.trim()} {...props}>
      <button className="gigi-menu-card__content" type="button" aria-pressed={selected} onClick={onAction}>
        <strong>{heading}</strong>
        <span>{description}</span>
      </button>
      {actionLabel && (
        <button className={`gigi-menu-card__action${selected ? ' is-selected' : ''}`} type="button" onClick={onAction}>
          {selected ? '✓ ' : ''}{actionLabel}
        </button>
      )}
    </article>
  );
}
