import type { ReactNode } from 'react';
import { Button } from './Button';

export interface StickyActionProps {
  children: ReactNode;
  onClick?: () => void;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
}

export function StickyAction({ children, onClick, secondaryLabel, onSecondaryClick }: StickyActionProps) {
  return (
    <footer className={`gigi-sticky-action${secondaryLabel ? ' gigi-sticky-action--double' : ''}`}>
      {secondaryLabel && <Button fullWidth variant="neutral" onClick={onSecondaryClick}>{secondaryLabel}</Button>}
      <Button fullWidth variant="primary" onClick={onClick}>{children}</Button>
    </footer>
  );
}
