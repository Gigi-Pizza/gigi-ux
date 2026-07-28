import type { InputHTMLAttributes } from 'react';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  description?: string;
}

export function FormField({ label, error, description, id, className = '', ...props }: FormFieldProps) {
  const inputId = id ?? `gigi-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const messageId = `${inputId}-message`;
  return (
    <label className={`gigi-field ${className}`.trim()} htmlFor={inputId}>
      <span className="gigi-field__label">{label}</span>
      <input id={inputId} aria-invalid={Boolean(error)} aria-describedby={(error || description) ? messageId : undefined} {...props} />
      {(error || description) && <span id={messageId} className={`gigi-field__message${error ? ' is-error' : ''}`}>{error ?? description}</span>}
    </label>
  );
}
