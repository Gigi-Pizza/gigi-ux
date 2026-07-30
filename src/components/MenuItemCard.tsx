import { useEffect, useState, type HTMLAttributes } from 'react';

export interface MenuItemCardProps extends HTMLAttributes<HTMLElement> {
  heading: string;
  description: string;
  /** Optional price line (e.g. "From $17.30") rendered under the description. */
  price?: string;
  /** Compact, localized status shown beside the heading (e.g. "1 in your order"). */
  statusLabel?: string;
  /** Optional menu-item image. Falls back to the text-only layout if loading fails. */
  imageSrc?: string;
  /** Keep empty when the adjacent heading already identifies the item. */
  imageAlt?: string;
  selected?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

export function MenuItemCard({
  heading,
  description,
  price,
  statusLabel,
  imageSrc,
  imageAlt = '',
  selected = false,
  actionLabel,
  onAction,
  className = '',
  ...props
}: MenuItemCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => setImageFailed(false), [imageSrc]);

  const showImage = Boolean(imageSrc) && !imageFailed;

  return (
    <article className={`gigi-menu-card${selected ? ' gigi-menu-card--selected' : ''} ${className}`.trim()} {...props}>
      <button className={`gigi-menu-card__content${showImage ? ' gigi-menu-card__content--with-image' : ''}`} type="button" aria-pressed={selected} onClick={onAction}>
        {showImage && (
          <span className="gigi-menu-card__media" aria-hidden={imageAlt === '' ? 'true' : undefined}>
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
            />
          </span>
        )}
        <span className="gigi-menu-card__body">
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
        </span>
      </button>
      {actionLabel && (
        <button className={`gigi-menu-card__action${selected ? ' is-selected' : ''}`} type="button" onClick={onAction}>
          {selected ? '✓ ' : ''}{actionLabel}
        </button>
      )}
    </article>
  );
}
