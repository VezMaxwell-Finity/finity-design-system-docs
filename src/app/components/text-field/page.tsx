'use client';

import { useState } from 'react';
import { Section, CodeBlock } from '@/app/_components/doc';
import { TextField } from '@/components/text-field';

export default function TextFieldPage() {
  const [emailValue, setEmailValue] = useState('user@finity.co.uk');
  const [niValue,    setNiValue]    = useState('AB 12 34 56 Z');
  const [bankRef,    setBankRef]    = useState('');

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
              Text field
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              A single-line input field for capturing concise, short-form textual data.
            </p>
          </div>
          <div className="flex-none w-[300px] rounded-2xl bg-white border border-[var(--color-border-subtle)] p-[var(--spacing-32)] flex flex-col gap-[var(--spacing-16)] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <TextField
              label="Email address"
              placeholder="you@example.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onClear={() => setEmailValue('')}
            />
            <TextField
              label="NI number"
              placeholder="AB 12 34 56 Z"
              value={niValue}
              onChange={(e) => setNiValue(e.target.value)}
              onClear={() => setNiValue('')}
            />
            <TextField
              label="Bank reference (Optional)"
              value={bankRef}
              onChange={(e) => setBankRef(e.target.value)}
              onClear={() => setBankRef('')}
            />
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="States" description="Text fields adapt visually to different interaction and validation states.">
          <div className="grid grid-cols-2 gap-[var(--spacing-24)] max-w-[640px]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Default</p>
              <TextField label="Label" placeholder="Placeholder" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Helper text</p>
              <TextField label="Label" placeholder="Placeholder" helperText="Optional helper text" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Error</p>
              <TextField label="Label" defaultValue="Value" errorMessage="Error message" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Disabled</p>
              <TextField label="Label" placeholder="Placeholder" disabled />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Prefix</p>
              <TextField label="Amount" placeholder="0.00" prefix="£" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Suffix</p>
              <TextField label="Percentage" placeholder="0" suffix="%" />
            </div>
          </div>
        </Section>

        <Section title="Sizes" description="Two sizes to accommodate different layout densities.">
          <div className="flex flex-col gap-[var(--spacing-24)] max-w-[280px]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Large — 48px</p>
              <TextField label="Label" placeholder="Placeholder" size="large" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Medium — 40px</p>
              <TextField label="Label" placeholder="Placeholder" size="medium" />
            </div>
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { TextField } from '@finity/design-system';

<TextField
  label="Email address"
  placeholder="you@example.com"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue('')}
  helperText="We'll never share your email."
/>

// With prefix / suffix
<TextField label="Amount" prefix="£" />
<TextField label="Percentage" suffix="%" />

// Error state
<TextField
  label="NI number"
  value={value}
  errorMessage="Please enter a valid NI number."
/>

// Sizes
<TextField label="Label" size="large" />
<TextField label="Label" size="medium" />`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
