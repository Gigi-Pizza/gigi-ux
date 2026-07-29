import type { HTMLAttributes } from 'react';

export interface MenuItemCardProps extends HTMLAttributes<HTMLElement> {
  heading: string;
  description: string;
  /** Optional price line (e.g. "From $17.30") rendered under the description. */
  price?: string;
  /** Compact, localized status shown beside the heading (e.g. "1 in your order"). */
  statusLabel?: string;
  selected?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

export function MenuItemCard({
  heading,
  description,
  price,
  statusLabel,
  selected = false,
  actionLabel,
  onAction,
  className = '',
  ...props
}: MenuItemCardProps) {
  return (
    <article className={`gigi-menu-card${selected ? ' gigi-menu-card--selected' : ''} ${className}`.trim()} {...props}>
      <button className="gigi-menu-card__content" type="button" aria-pressed={selected} onClick={onAction}>
        <span className="gigi-menu-card__heading-row">
          <strong>{heading}</strong>
          {statusLabel && (
            <span className="gigi-menu-card__status">
              <span className="gigi-menu-card__status-mark" aria-hidden="true">✓</span>
              {statusLabel}
            </span>
          )}
        </span>
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
