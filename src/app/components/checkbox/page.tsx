'use client';

import { useState } from 'react';
import { Section, DemoTable, CodeBlock } from '@/app/_components/doc';
import { Checkbox } from '@/components/checkbox';

const STATES = [
  { key: 'default',       label: 'Default',       props: {} },
  { key: 'checked',       label: 'Checked',       props: { checked: true, onChange: () => {} } },
  { key: 'indeterminate', label: 'Indeterminate', props: { indeterminate: true } },
  { key: 'error',         label: 'Error',         props: { error: true } },
  { key: 'disabled',      label: 'Disabled',      props: { disabled: true } },
] as const;

export default function CheckboxPage() {
  const [updates,  setUpdates]  = useState(true);
  const [products, setProducts] = useState(true);
  const [promos,   setPromos]   = useState(false);
  const [agreed,   setAgreed]   = useState(false);

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
              Checkbox
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              Checkboxes allow users to select one or more items from a set, supporting checked, unchecked, and indeterminate states.
            </p>
          </div>
          <div className="flex-none w-[340px] rounded-2xl bg-[var(--color-base-white)] border border-[var(--color-border-subtle)] p-[var(--spacing-32)] flex flex-col gap-[var(--spacing-12)] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <p className="text-[14px] font-medium text-[var(--color-text-secondary)] mb-[var(--spacing-4)]">Select newsletters to receive:</p>
            <Checkbox label="Company updates and announcements" checked={updates} onChange={(e) => setUpdates(e.target.checked)} />
            <Checkbox label="Product news and feature releases" checked={products} onChange={(e) => setProducts(e.target.checked)} />
            <Checkbox label="Promotions and special offers" checked={promos} onChange={(e) => setPromos(e.target.checked)} />
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="States" description="Five states covering the full range of selection and validation scenarios.">
          <DemoTable
            cols={[{ key: 'example', label: 'Example' }]}
            rows={STATES.map(s => ({
              label: s.label,
              cells: [<Checkbox key={s.key} label="Label" {...s.props} />],
            }))}
          />
        </Section>

        <Section title="Rich label" description="The label prop accepts any ReactNode, allowing links and formatted text alongside the checkbox.">
          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            label={
              <span>
                I agree to the{' '}
                <a href="#" className="text-[var(--color-coral-400)] underline font-medium">Terms and Conditions</a>
                {' '}and{' '}
                <a href="#" className="text-[var(--color-coral-400)] underline font-medium">Privacy Policy</a>
              </span>
            }
          />
        </Section>

        <Section title="Multi-line label" description="When text spans multiple lines the checkbox box aligns to the top of the label.">
          <div className="max-w-[500px]">
            <Checkbox
              defaultChecked
              label="I agree to receive company updates, promotional content, and product information via email. I understand that I can unsubscribe or change my preferences at any time through my account settings or by using the unsubscribe link in any email."
            />
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { Checkbox } from '@finity/design-system';

// Uncontrolled
<Checkbox label="Remember me" defaultChecked />

// Controlled
<Checkbox
  label="Agree to terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

// States
<Checkbox label="Label" indeterminate />
<Checkbox label="Label" error />
<Checkbox label="Label" disabled />`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
