'use client';

import { type InputHTMLAttributes, type ReactNode, forwardRef, useId } from 'react';
import { Close } from '../icons';
import { HelperText } from '../helper-text';

export type TextFieldSize = 'large' | 'medium';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  prefix?: string;
  suffix?: string;
  suffixIcon?: ReactNode;
  size?: TextFieldSize;
  onClear?: () => void;
}

const heights: Record<TextFieldSize, string> = {
  large: 'h-[var(--spacing-48)]',
  medium: 'h-[var(--spacing-40)]',
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  {
    label,
    helperText,
    errorMessage,
    prefix,
    suffix,
    suffixIcon,
    size = 'large',
    onClear,
    disabled = false,
    className = '',
    id,
    value,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const hasError = !!errorMessage;
  const hasClear = !!onClear && !!value;
  const hasSuffix = !!suffix || (!!suffixIcon && !hasClear);

  const borderClass = hasError
    ? 'border-[var(--color-red-600)]'
    : disabled
    ? 'border-[var(--color-border-subtle)]'
    : 'border-[var(--color-border-subtle)] focus-within:border-[var(--color-text-default)]';

  return (
    <div className={`flex flex-col gap-[var(--spacing-8)] w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-base font-medium leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)] text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
      )}

      <div
        className={`
          flex items-center overflow-hidden rounded-lg border border-solid
          transition-colors duration-150
          ${heights[size]}
          ${borderClass}
          ${disabled ? 'bg-[var(--color-grey-100)]' : 'bg-white'}
        `}
      >
        {prefix && (
          <div
            className={`
              flex items-center justify-center shrink-0 h-full px-[var(--spacing-12)]
              bg-[var(--color-grey-100)] border-r border-[var(--color-border-subtle)]
              text-base font-medium leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)]
              text-[var(--color-text-secondary)]
            `}
          >
            {prefix}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          value={value}
          disabled={disabled}
          className={`
            flex-1 min-w-0 h-full bg-transparent outline-none px-[var(--spacing-12)]
            text-base font-normal leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)]
            text-[var(--color-text-default)]
            placeholder:text-[var(--color-text-disabled)]
            disabled:cursor-not-allowed disabled:text-[var(--color-text-disabled)]
          `}
          {...props}
        />

        {hasClear && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear input"
            tabIndex={-1}
            className={`
              flex items-center justify-center shrink-0 h-full
              ${size === 'large' ? 'w-[var(--spacing-48)]' : 'w-[var(--spacing-40)]'}
              text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]
              transition-colors duration-150
            `}
          >
            <Close size={20} />
          </button>
        )}

        {hasSuffix && (
          <div
            className={`
              flex items-center justify-center shrink-0 h-full px-[var(--spacing-12)]
              border-l border-[var(--color-border-subtle)]
              text-base font-medium leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)]
              text-[var(--color-text-secondary)]
            `}
          >
            {suffix || suffixIcon}
          </div>
        )}
      </div>

      {(helperText || errorMessage) && (
        <HelperText type={hasError ? 'error' : 'default'}>
          {errorMessage || helperText}
        </HelperText>
      )}
    </div>
  );
});
