'use client';

// Simple, fixed example that mirrors the Figma tab frame as closely as possible.
// This is intentionally not generic so we can get the spacing and layout feeling right.

const tabs = [
  'Overview',
  'Employees',
  'Payroll',
  'Settings',
] as const;

export function FigmaTabs() {
  const active = 'Overview';

  return (
    <div className="inline-flex border-b border-[var(--color-border-subtle)] gap-6">
      {tabs.map((label) => {
        const isActive = label === active;
        return (
          <button
            key={label}
            type="button"
            className={[
              'inline-flex items-center justify-center',
              'h-10 rounded-none',
              // Padding tuned to create clear breathing room around the text
              'px-6', // 24px
              'text-compact-medium',
              isActive
                ? 'text-[var(--color-coral-500)] border-b-2 border-[var(--color-coral-500)]'
                : 'text-[var(--color-text-secondary)] border-b-2 border-transparent hover:text-[var(--color-text-default)]',
            ].join(' ')}
          >
            <span className="text-compact-semibold">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

