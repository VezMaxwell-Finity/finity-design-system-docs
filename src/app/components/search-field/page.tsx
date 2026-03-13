'use client';

import { useState } from 'react';
import { Section, CodeBlock } from '@/app/_components/doc';
import { SearchField } from '@/components/search-field';

export default function SearchFieldPage() {
  const [liveValue, setLiveValue] = useState('');

  return (
    <main>

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-subtle)] px-[var(--spacing-64)] py-[var(--spacing-64)] min-h-[480px] flex items-center">
        <div className="flex gap-[var(--spacing-64)] items-center w-full">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">
              Component · Form
            </p>
            <h1 className="text-[5rem] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-text-default)] mb-[var(--spacing-24)]">
              Search field
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              A single-line input for entering keywords or phrases to find matching content within a system.
            </p>
          </div>
          <div className="flex-none w-[340px] rounded-2xl bg-[var(--color-base-white)] border border-[var(--color-border-subtle)] p-[var(--spacing-48)] flex flex-col items-center justify-center min-h-[180px] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <SearchField
              placeholder="Search employees…"
              value={liveValue}
              onChange={(e) => setLiveValue(e.target.value)}
              onClear={() => setLiveValue('')}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="States" description="The search field has three visual states depending on interaction.">
          <div className="flex flex-col gap-[var(--spacing-32)] max-w-[460px]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Default</p>
              <SearchField placeholder="Search by ID, candidate, or NI number" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Focus</p>
              <SearchField placeholder="Search by ID, candidate, or NI number" autoFocus />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Active — with value</p>
              <SearchField value="Olivia Harrison" onChange={() => {}} onClear={() => {}} />
            </div>
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { SearchField } from '@finity/design-system';

<SearchField
  placeholder="Search by ID, candidate, or NI number"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onClear={() => setQuery('')}
/>`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
