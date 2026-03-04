'use client';

import { type ReactNode } from 'react';

export type TabsSize = 'medium' | 'small';

export interface TabItem {
  id: string;
  label: string;
  badge?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  size?: TabsSize;
  /** If true, the tabs take up full width and distribute space evenly */
  fullWidth?: boolean;
  className?: string;
}

export function Tabs({
  items,
  value,
  onChange,
  size = 'medium',
  fullWidth = false,
  className = '',
}: TabsProps) {
  const baseTabClasses = `
    relative inline-flex items-center justify-center
    text-compact-medium
    border-b-2
    transition-colors
    whitespace-nowrap
  `;

  const sizeClasses: Record<TabsSize, string> = {
    medium: 'py-[var(--spacing-16)] px-[var(--spacing-16)] gap-[var(--spacing-8)]',
    small: 'py-[var(--spacing-8)] px-[var(--spacing-16)] gap-[var(--spacing-4)]',
  };

  return (
    <div
      className={`
        border-b border-[var(--color-border-subtle)]
        ${fullWidth ? 'w-full' : 'inline-grid'}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      style={!fullWidth ? { gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` } : undefined}
    >
      {items.map((item) => {
        const isSelected = item.id === value;
        const isDisabled = item.disabled;

        const colorClasses = isDisabled
          ? 'text-[var(--color-text-disabled)] border-transparent cursor-not-allowed'
          : isSelected
          ? 'text-[var(--color-coral-500)] border-[var(--color-coral-500)]'
          : 'text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-default)]';

        return (
          <button
            key={item.id}
            type="button"
            className={`
              ${baseTabClasses}
              ${sizeClasses[size]}
              ${colorClasses}
              ${fullWidth ? 'flex-1' : ''}
            `.replace(/\s+/g, ' ').trim()}
            onClick={() => {
              if (!isDisabled) onChange(item.id);
            }}
            aria-selected={isSelected}
            role="tab"
            disabled={isDisabled}
          >
            <span className="text-compact-semibold">{item.label}</span>
            {item.badge && (
              <span className="inline-flex items-center justify-center rounded-full px-[var(--spacing-4)] py-[2px] text-small-semibold bg-[var(--color-grey-100)] text-[var(--color-text-secondary)]">
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

