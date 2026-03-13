'use client';

import { type TextareaHTMLAttributes, forwardRef } from 'react';
import { HelperText } from '../helper-text';

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'readOnly'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  maxLength?: number;
  readOnly?: boolean;
  className?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      label,
      helperText,
      errorMessage,
      maxLength,
      readOnly = false,
      disabled = false,
      value,
      className = '',
      ...props
    },
    ref
  ) {
    const hasError = !!errorMessage;
    const charCount = typeof value === 'string' ? value.length : 0;

    const textareaClass = [
      'w-full min-h-[80px] rounded-lg border border-solid outline-none resize-y',
      'px-[var(--spacing-12)] pt-[var(--spacing-8)] pb-[var(--spacing-8)]',
      'text-body-regular',
      'placeholder:text-[var(--color-text-tertiary)]',
      'transition-colors duration-150',
      hasError
        ? 'border-2 border-[var(--color-red-600)] bg-[var(--color-base-white)] text-[var(--color-text-default)]'
        : readOnly || disabled
        ? 'border border-[var(--color-border-subtle)] bg-[var(--color-grey-100)] text-[var(--color-text-secondary)] resize-none cursor-default'
        : [
            'border-[var(--color-border-default)] bg-[var(--color-base-white)] text-[var(--color-text-default)]',
            'hover:border-2 hover:border-[var(--color-text-default)]',
            'focus:border-[3px] focus:border-[var(--color-text-default)]',
          ].join(' '),
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={`flex flex-col gap-[var(--spacing-4)] ${className}`}>
        {(label || maxLength) && (
          <div className="flex items-center justify-between gap-[var(--spacing-4)]">
            {label && (
              <label className="text-body-medium text-[var(--color-text-secondary)]">
                {label}
              </label>
            )}
            {maxLength && (
              <span className="text-compact-medium text-[var(--color-text-secondary)] tabular-nums">
                {charCount}/{maxLength}
              </span>
            )}
          </div>
        )}

        <textarea
          ref={ref}
          value={value}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          className={textareaClass}
          {...props}
        />

        {(helperText || errorMessage) && (
          <HelperText type={hasError ? 'error' : 'default'}>
            {errorMessage || helperText}
          </HelperText>
        )}
      </div>
    );
  }
);
