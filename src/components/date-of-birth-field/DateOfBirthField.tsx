'use client';

import { useRef } from 'react';
import { HelperText } from '../helper-text';

export interface DateOfBirthValue {
  day: string;
  month: string;
  year: string;
}

export interface DateOfBirthFieldProps {
  label?: string;
  value: DateOfBirthValue;
  onChange: (value: DateOfBirthValue) => void;
  errorMessage?: string;
  helperText?: string;
  disabled?: boolean;
  className?: string;
}

export function DateOfBirthField({
  label = 'Date of birth',
  value,
  onChange,
  errorMessage,
  helperText,
  disabled = false,
  className = '',
}: DateOfBirthFieldProps) {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const hasError = !!errorMessage;

  const slotClass = hasError
    ? 'border-2 border-[var(--color-red-600)] bg-white'
    : disabled
    ? 'border border-[var(--color-border-subtle)] bg-[var(--color-grey-100)]'
    : 'border border-[var(--color-border-default)] bg-white focus-within:border-2 focus-within:border-[var(--color-text-default)]';

  const inputClass = `
    w-full h-full bg-transparent outline-none px-[var(--spacing-12)]
    text-base font-normal leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)]
    text-[var(--color-text-default)]
    placeholder:text-[var(--color-text-disabled)]
    disabled:cursor-not-allowed disabled:text-[var(--color-text-disabled)]
  `;

  return (
    <div className={`flex flex-col gap-[var(--spacing-4)] ${className}`}>
      {label && (
        <label className="text-base font-medium leading-[var(--line-height-body)] tracking-[var(--letter-spacing-normal)] text-[var(--color-text-secondary)]">
          {label}
        </label>
      )}

      <div className="flex gap-[var(--spacing-8)] items-start">
        {/* Day */}
        <div className="flex flex-col gap-[var(--spacing-4)]">
          <span className="text-compact-medium text-[var(--color-text-tertiary)]">Day</span>
          <div className={`flex items-center overflow-hidden rounded-lg border-solid h-[var(--spacing-48)] w-[64px] transition-colors duration-150 ${slotClass}`}>
            <input
              type="text"
              inputMode="numeric"
              maxLength={2}
              placeholder="dd"
              value={value.day}
              disabled={disabled}
              className={inputClass}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '');
                onChange({ ...value, day: v });
                if (v.length === 2) monthRef.current?.focus();
              }}
            />
          </div>
        </div>

        {/* Month */}
        <div className="flex flex-col gap-[var(--spacing-4)]">
          <span className="text-compact-medium text-[var(--color-text-tertiary)]">Month</span>
          <div className={`flex items-center overflow-hidden rounded-lg border-solid h-[var(--spacing-48)] w-[64px] transition-colors duration-150 ${slotClass}`}>
            <input
              ref={monthRef}
              type="text"
              inputMode="numeric"
              maxLength={2}
              placeholder="mm"
              value={value.month}
              disabled={disabled}
              className={inputClass}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '');
                onChange({ ...value, month: v });
                if (v.length === 2) yearRef.current?.focus();
              }}
            />
          </div>
        </div>

        {/* Year */}
        <div className="flex flex-col gap-[var(--spacing-4)]">
          <span className="text-compact-medium text-[var(--color-text-tertiary)]">Year</span>
          <div className={`flex items-center overflow-hidden rounded-lg border-solid h-[var(--spacing-48)] w-[80px] transition-colors duration-150 ${slotClass}`}>
            <input
              ref={yearRef}
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="yyyy"
              value={value.year}
              disabled={disabled}
              className={inputClass}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '');
                onChange({ ...value, year: v });
              }}
            />
          </div>
        </div>
      </div>

      {(helperText || errorMessage) && (
        <HelperText type={hasError ? 'error' : 'default'}>
          {errorMessage || helperText}
        </HelperText>
      )}
    </div>
  );
}
