import type { HTMLAttributes } from 'react';

export interface MenuItemCardProps extends HTMLAttributes<HTMLElement> {
  heading: string;
  description: string;
  /** Optional price line (e.g. "From $17.30") rendered under the description. */
  price?: string;
  selected?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

export function MenuItemCard({
  heading,
  description,
  price,
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
        {description && <span>{description}</span>}
        {price && <span className="gigi-menu-card__price">{price}</span>}
      </button>
      {actionLabel && (
        <button className={`gigi-menu-card__action${selected ? ' is-selected' : ''}`} type="button" onClick={onAction}>
          {selected ? '✓ ' : ''}{actionLabel}
        </button>
      )}
    </article>
  );
}
