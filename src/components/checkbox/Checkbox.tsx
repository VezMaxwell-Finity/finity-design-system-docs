'use client';

import { type InputHTMLAttributes, type ReactNode, forwardRef, useEffect, useRef, useState } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  indeterminate?: boolean;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      indeterminate = false,
      error = false,
      disabled = false,
      checked,
      defaultChecked,
      onChange,
      className = '',
      ...props
    },
    forwardedRef
  ) {
    const isControlled = checked !== undefined;
    const [localChecked, setLocalChecked] = useState(defaultChecked ?? false);
    const isChecked = isControlled ? !!checked : localChecked;
    const isActive = indeterminate || isChecked;

    const innerRef = useRef<HTMLInputElement>(null);

    const setRefs = (el: HTMLInputElement | null) => {
      (innerRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
      if (typeof forwardedRef === 'function') forwardedRef(el);
      else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
    };

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setLocalChecked(e.target.checked);
      onChange?.(e);
    };

    const boxClass = [
      'relative shrink-0 size-[20px] rounded-[4px] border border-solid',
      'flex items-center justify-center',
      'transition-colors duration-100',
      // Focus ring (shown via peer when input is focused by keyboard)
      'peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-[var(--color-text-default)] peer-focus-visible:rounded-[6px]',
      disabled
        ? 'bg-[var(--color-grey-200)] border-[var(--color-border-default)]'
        : isActive
        ? 'bg-[var(--color-coral-400)] border-[var(--color-coral-400)]'
        : error
        ? 'bg-white border-2 border-[var(--color-red-600)]'
        : 'bg-white border-[var(--color-border-default)] group-hover:border-2 group-hover:border-[var(--color-text-default)]',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label
        className={`group inline-flex gap-[var(--spacing-8)] items-start ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      >
        <input
          ref={setRefs}
          type="checkbox"
          checked={isControlled ? checked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          disabled={disabled}
          onChange={handleChange}
          className="peer sr-only"
          {...props}
        />

        {/* Custom visual box */}
        <div className={boxClass}>
          {isChecked && !indeterminate && (
            <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true">
              <path
                d="M1.5 6L4.5 9L10.5 3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {indeterminate && (
            <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true">
              <path d="M1.5 6H10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
        </div>

        {label && (
          <span
            className={`flex-1 text-base font-normal leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)] mt-[1px] ${
              disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-default)]'
            }`}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);
