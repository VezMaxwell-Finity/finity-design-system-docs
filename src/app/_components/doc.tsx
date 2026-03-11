import React from 'react';

export function Section({
  title,
  description,
  children,
  last = false,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={last ? '' : 'mb-[var(--spacing-96)]'}>
      <div className="mb-[var(--spacing-32)]">
        <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text-default)]">
          {title}
        </h2>
        {description && (
          <p className="mt-[var(--spacing-8)] text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export function DemoTable({
  cols,
  rows,
}: {
  cols: { key: string; label: string; sub?: string }[];
  rows: { label: string; cells: React.ReactNode[] }[];
}) {
  return (
    <div className="rounded-xl border border-[var(--color-border-subtle)] overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[var(--color-bg-subtle)] border-b border-[var(--color-border-subtle)]">
            <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-20)] w-[120px]" />
            {cols.map(c => (
              <th key={c.key} className="text-left py-[var(--spacing-12)] px-[var(--spacing-20)]">
                <span className="text-[13px] font-semibold text-[var(--color-text-default)]">{c.label}</span>
                {c.sub && <span className="ml-[6px] text-[11px] font-normal text-[var(--color-text-tertiary)]">{c.sub}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i < rows.length - 1 ? 'border-b border-[var(--color-border-subtle)]' : ''}>
              <td className="py-[var(--spacing-20)] px-[var(--spacing-20)] align-middle">
                <span className="text-[13px] font-medium text-[var(--color-text-tertiary)]">{row.label}</span>
              </td>
              {row.cells.map((cell, j) => (
                <td key={j} className="py-[var(--spacing-20)] px-[var(--spacing-20)] align-middle">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <div className="rounded-xl bg-[var(--color-grey-900)] p-[var(--spacing-32)] overflow-x-auto">
      <pre className="text-[13px] text-[var(--color-grey-300)] leading-[1.7] font-mono whitespace-pre">
        {children}
      </pre>
    </div>
  );
}
