'use client';

import { useState } from 'react';
import { Section, CodeBlock } from '@/app/_components/doc';
import { TextArea } from '@/components/text-area';

export default function TextAreaPage() {
  const [liveValue,    setLiveValue]    = useState('');
  const [activeValue,  setActiveValue]  = useState('Payroll handles employee pay, taxes, and deductions to ensure accurate, on-time compensation.');
  const [counterValue, setCounterValue] = useState('Payroll handles employee pay, taxes, and deductions to ensure accurate, on-time compensation.');

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
              Text area
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              A multi-line input field for longer, free-form text entry — ideal for comments, messages, or detailed descriptions.
            </p>
          </div>
          <div className="flex-none w-[300px] rounded-2xl bg-[var(--color-base-white)] border border-[var(--color-border-subtle)] p-[var(--spacing-32)] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <TextArea
              label="Note"
              placeholder="Add a note…"
              value={liveValue}
              onChange={(e) => setLiveValue(e.target.value)}
              maxLength={300}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="States" description="Text areas adapt visually to different interaction and validation states.">
          <div className="grid grid-cols-2 gap-[var(--spacing-32)] max-w-[700px]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Default</p>
              <TextArea label="Label" placeholder="Placeholder" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Focus</p>
              <TextArea label="Label" placeholder="Placeholder" autoFocus />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Active</p>
              <TextArea label="Label" value={activeValue} onChange={(e) => setActiveValue(e.target.value)} />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Error</p>
              <TextArea label="Label" defaultValue="Some invalid content" errorMessage="This field contains an error" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Helper text</p>
              <TextArea label="Label" placeholder="Placeholder" helperText="Optional helper text" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Read-only</p>
              <TextArea label="Label" defaultValue="Payroll handles employee pay, taxes, and deductions." readOnly />
            </div>
          </div>
        </Section>

        <Section title="Character counter" description="Add a maxLength prop to show a live character count below the field.">
          <div className="max-w-[380px]">
            <TextArea
              label="Note"
              value={counterValue}
              onChange={(e) => setCounterValue(e.target.value)}
              maxLength={300}
            />
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { TextArea } from '@finity/design-system';

<TextArea
  label="Note"
  placeholder="Add a note…"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  maxLength={300}
/>

// Error state
<TextArea
  label="Description"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  errorMessage="This field is required."
/>

// Read-only
<TextArea label="Summary" value={summary} readOnly />`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
