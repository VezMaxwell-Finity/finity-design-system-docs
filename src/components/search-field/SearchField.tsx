'use client';

import { type InputHTMLAttributes, forwardRef } from 'react';
import { Search, CloseFilled } from '../icons';

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  onClear?: () => void;
  className?: string;
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField({ onClear, value, className = '', ...props }, ref) {
    const hasValue = !!value;

    return (
      <div
        className={`
          flex items-center
          h-[var(--spacing-40)] rounded-lg border border-solid
          bg-[var(--color-bg-subtle)]
          border-[var(--color-border-default)]
          hover:border-2 hover:border-[var(--color-text-default)]
          focus-within:border-[3px] focus-within:border-[var(--color-text-default)]
          transition-colors duration-150
          ${className}
        `}
      >
        <div className="flex items-center justify-center shrink-0 w-[var(--spacing-48)] h-full">
          <Search size={20} color="var(--color-text-tertiary)" />
        </div>

        <input
          ref={ref}
          type="text"
          value={value}
          className="
            flex-1 min-w-0 h-full bg-transparent outline-none
            text-body-regular
            text-[var(--color-text-default)]
            placeholder:text-[var(--color-text-tertiary)]
          "
          {...props}
        />

        {hasValue && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center justify-center shrink-0 w-[var(--spacing-48)] h-full rounded-full"
            aria-label="Clear search"
          >
            <CloseFilled size={16} color="var(--color-text-tertiary)" />
          </button>
        )}
      </div>
    );
  }
);
