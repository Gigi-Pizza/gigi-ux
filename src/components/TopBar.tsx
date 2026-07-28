import { Button } from './Button';

export interface TopBarProps {
  title: string;
  onBack?: () => void;
  backLabel?: string;
}

export function TopBar({ title, onBack, backLabel = 'Back' }: TopBarProps) {
  return (
    <header className="gigi-top-bar">
      <Button variant="subtle" size="small" onClick={onBack}>‹&nbsp; {backLabel}</Button>
      <strong>{title}</strong>
    </header>
  );
}
