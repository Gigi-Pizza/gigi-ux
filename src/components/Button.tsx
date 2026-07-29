import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'neutral' | 'subtle';
export type ButtonSize = 'small' | 'medium';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Button({
  variant = 'neutral',
  size = 'medium',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`gigi-button gigi-button--${variant} gigi-button--${size}${fullWidth ? ' gigi-button--full' : ''} ${className}`.trim()}
      {...props}
    >
      {leadingIcon && <span aria-hidden="true">{leadingIcon}</span>}
      <span className="gigi-button__label">{children}</span>
      {trailingIcon && <span aria-hidden="true">{trailingIcon}</span>}
    </button>
  );
}
