'use client';

import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'emphasis' | 'danger';
export type ButtonSize = 'large' | 'medium' | 'small';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconOnly?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

const sizeStyles: Record<ButtonSize, string> = {
  large: 'h-[var(--spacing-48)] px-[var(--spacing-16)] text-base gap-[var(--spacing-8)]',
  medium: 'h-[var(--spacing-40)] px-[var(--spacing-12)] text-sm gap-[var(--spacing-8)]',
  small: 'h-[var(--spacing-32)] px-[var(--spacing-8)] text-sm gap-[var(--spacing-4)]',
};

const iconOnlySizeStyles: Record<ButtonSize, string> = {
  large: 'h-[var(--spacing-48)] w-[var(--spacing-48)]',
  medium: 'h-[var(--spacing-40)] w-[var(--spacing-40)]',
  small: 'h-[var(--spacing-32)] w-[var(--spacing-32)]',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-grey-900)] text-[var(--color-base-white)]
    hover:bg-[var(--color-grey-800)]
    active:bg-[var(--color-base-black)]
    focus-visible:ring-2 focus-visible:ring-[var(--color-grey-900)] focus-visible:ring-offset-2
  `,
  secondary: `
    bg-[var(--color-base-white)] text-[var(--color-grey-900)] border border-[var(--color-grey-300)]
    hover:bg-[var(--color-grey-50)] hover:border-[var(--color-grey-400)]
    active:bg-[var(--color-grey-100)]
    focus-visible:ring-2 focus-visible:ring-[var(--color-grey-400)] focus-visible:ring-offset-2
  `,
  tertiary: `
    bg-transparent text-[var(--color-grey-900)]
    hover:bg-[var(--color-grey-100)]
    active:bg-[var(--color-grey-200)]
    focus-visible:ring-2 focus-visible:ring-[var(--color-grey-400)] focus-visible:ring-offset-2
  `,
  emphasis: `
    bg-[var(--color-coral-500)] text-[var(--color-base-white)]
    hover:bg-[var(--color-coral-600)]
    active:bg-[var(--color-coral-700)]
    focus-visible:ring-2 focus-visible:ring-[var(--color-coral-500)] focus-visible:ring-offset-2
  `,
  danger: `
    bg-[var(--color-red-500)] text-[var(--color-base-white)]
    hover:bg-[var(--color-red-600)]
    active:bg-[var(--color-red-700)]
    focus-visible:ring-2 focus-visible:ring-[var(--color-red-500)] focus-visible:ring-offset-2
  `,
};

const disabledStyles = `
  bg-[var(--color-grey-200)] text-[var(--color-grey-400)]
  cursor-not-allowed border-transparent
`;

function LoadingSpinner({ size }: { size: ButtonSize }) {
  const spinnerSize = size === 'small' ? 14 : size === 'medium' ? 16 : 18;
  return (
    <svg
      className="animate-spin"
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function Button({
  variant = 'primary',
  size = 'medium',
  iconLeft,
  iconRight,
  iconOnly = false,
  loading = false,
  disabled = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-full
    transition-colors duration-150
    focus:outline-none
    whitespace-nowrap
  `;

  const sizeStyle = iconOnly ? iconOnlySizeStyles[size] : sizeStyles[size];
  const variantStyle = isDisabled ? disabledStyles : variantStyles[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyle} ${variantStyle} ${className}`.replace(/\s+/g, ' ').trim()}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <LoadingSpinner size={size} />
      ) : (
        <>
          {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
          {iconOnly ? (
            <span className="flex-shrink-0">{children}</span>
          ) : (
            children && <span>{children}</span>
          )}
          {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
        </>
      )}
    </button>
  );
}
