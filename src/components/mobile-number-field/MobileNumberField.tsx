'use client';

import { type InputHTMLAttributes, forwardRef } from 'react';
import { HelperText } from '../helper-text';

export interface MobileNumberFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string;
  dialCode?: string;
  helperText?: string;
  errorMessage?: string;
}

export const MobileNumberField = forwardRef<HTMLInputElement, MobileNumberFieldProps>(
  function MobileNumberField(
    {
      label = 'Mobile number',
      dialCode = '+44',
      helperText,
      errorMessage,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) {
    const hasError = !!errorMessage;

    const borderClass = hasError
      ? 'border-2 border-[var(--color-red-600)]'
      : disabled
      ? 'border border-[var(--color-border-subtle)]'
      : 'border border-[var(--color-border-default)] focus-within:border-[3px] focus-within:border-[var(--color-text-default)]';

    return (
      <div className={`flex flex-col gap-[var(--spacing-8)] w-full ${className}`}>
        {label && (
          <label className="text-base font-medium leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)] text-[var(--color-text-secondary)]">
            {label}
          </label>
        )}

        <div
          className={`
            flex items-center overflow-hidden rounded-lg border-solid
            h-[var(--spacing-48)]
            transition-colors duration-150
            ${borderClass}
            ${disabled ? 'bg-[var(--color-grey-100)]' : 'bg-white'}
          `}
        >
          <div className="flex items-center justify-center shrink-0 h-full px-[var(--spacing-12)] bg-[var(--color-grey-100)] border-r border-[var(--color-border-default)]">
            <span className="text-base font-medium leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)] text-[var(--color-text-secondary)] w-[var(--spacing-32)] text-center">
              {dialCode}
            </span>
          </div>

          <input
            ref={ref}
            type="tel"
            inputMode="numeric"
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
        </div>

        {(helperText || errorMessage) && (
          <HelperText type={hasError ? 'error' : 'default'}>
            {errorMessage || helperText}
          </HelperText>
        )}
      </div>
    );
  }
);
