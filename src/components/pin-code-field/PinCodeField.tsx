'use client';

import { useRef } from 'react';
import { HelperText } from '../helper-text';

export type PinCodeSize = 'large' | 'medium';

export interface PinCodeFieldProps {
  length?: 4 | 6;
  size?: PinCodeSize;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  helperText?: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

export function PinCodeField({
  length = 6,
  size = 'large',
  value,
  onChange,
  errorMessage,
  helperText,
  disabled = false,
  readOnly = false,
  className = '',
}: PinCodeFieldProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const hasError = !!errorMessage;
  const digits = Array.from({ length }, (_, i) => value[i] || '');

  const slotDimension = size === 'large' ? 'w-[56px] h-[56px]' : 'w-[48px] h-[48px]';

  const getSlotClass = () => {
    if (hasError) {
      return `${slotDimension} rounded-lg border-2 border-solid border-[var(--color-red-600)] bg-[var(--color-base-white)]`;
    }
    if (disabled || readOnly) {
      return `${slotDimension} rounded-lg border border-solid border-[var(--color-border-subtle)] bg-[var(--color-grey-100)]`;
    }
    return `${slotDimension} rounded-lg border border-solid border-[var(--color-border-default)] bg-[var(--color-base-white)] focus:border-[3px] focus:border-[var(--color-text-default)] outline-none`;
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const char = e.target.value.replace(/\D/g, '').slice(-1);
    const newDigits = [...digits];
    newDigits[index] = char;
    onChange(newDigits.join(''));
    if (char && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      const newDigits = [...digits];
      newDigits[index - 1] = '';
      onChange(newDigits.join(''));
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    onChange(pasted);
    const focusIndex = Math.min(pasted.length, length - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const sharedInputClass = `
    ${getSlotClass()}
    flex items-center justify-center
    text-center font-semibold text-[20px] leading-[28px] tracking-[var(--letter-spacing-tight)]
    text-[var(--color-text-default)]
    transition-colors duration-150
    ${disabled || readOnly ? 'cursor-not-allowed' : ''}
  `;

  const slots = digits.map((digit, i) => (
    <input
      key={i}
      ref={(el) => { inputRefs.current[i] = el; }}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={digit}
      disabled={disabled}
      readOnly={readOnly}
      className={sharedInputClass}
      onChange={(e) => handleChange(i, e)}
      onKeyDown={(e) => handleKeyDown(i, e)}
      onPaste={handlePaste}
    />
  ));

  const slotsWithDivider = length === 6
    ? [
        ...slots.slice(0, 3),
        <div
          key="divider"
          className="w-[8px] h-0 border-t border-[var(--color-border-default)] self-center"
        />,
        ...slots.slice(3),
      ]
    : slots;

  return (
    <div className={`flex flex-col gap-[var(--spacing-4)] items-start ${className}`}>
      <div className="flex items-center gap-[var(--spacing-8)]">
        {slotsWithDivider}
      </div>

      {(helperText || errorMessage) && (
        <HelperText type={hasError ? 'error' : 'default'}>
          {errorMessage || helperText}
        </HelperText>
      )}
    </div>
  );
}
