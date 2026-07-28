import type { ReactNode } from 'react';

export interface MobileShellProps {
  children: ReactNode;
  className?: string;
}

export function MobileShell({ children, className = '' }: MobileShellProps) {
  return <div className={`gigi-mobile-shell ${className}`.trim()}>{children}</div>;
}
