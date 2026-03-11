'use client';

import { useState } from 'react';
import { Section, CodeBlock } from '@/app/_components/doc';
import { DateOfBirthField, type DateOfBirthValue } from '@/components/date-of-birth-field';

const empty: DateOfBirthValue = { day: '', month: '', year: '' };

export default function DateOfBirthFieldPage() {
  const [liveValue,    setLiveValue]    = useState<DateOfBirthValue>({ day: '14', month: '03', year: '1990' });
  const [defaultValue, setDefaultValue] = useState<DateOfBirthValue>(empty);
  const [errorValue,   setErrorValue]   = useState<DateOfBirthValue>({ day: '32', month: '13', year: '20' });

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
              Date of birth
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              A segmented input for capturing day, month, and year separately, with automatic focus advancement between fields.
            </p>
          </div>
          <div className="flex-none w-[340px] rounded-2xl bg-white border border-[var(--color-border-subtle)] p-[var(--spacing-48)] flex items-center justify-center min-h-[180px] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <DateOfBirthField value={liveValue} onChange={setLiveValue} />
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="States" description="The date of birth field supports the same validation states as other form inputs.">
          <div className="grid grid-cols-2 gap-[var(--spacing-32)]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Default</p>
              <DateOfBirthField value={defaultValue} onChange={setDefaultValue} />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Helper text</p>
              <DateOfBirthField value={empty} onChange={() => {}} helperText="Enter your date of birth as shown on your ID" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Error</p>
              <DateOfBirthField value={errorValue} onChange={setErrorValue} errorMessage="Please enter a valid date of birth" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Disabled</p>
              <DateOfBirthField value={{ day: '14', month: '03', year: '1990' }} onChange={() => {}} disabled />
            </div>
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { DateOfBirthField } from '@finity/design-system';

const [dob, setDob] = useState({ day: '', month: '', year: '' });

<DateOfBirthField
  value={dob}
  onChange={setDob}
/>

// With validation
<DateOfBirthField
  value={dob}
  onChange={setDob}
  errorMessage="Please enter a valid date of birth"
/>

// Helper text
<DateOfBirthField
  value={dob}
  onChange={setDob}
  helperText="Enter your date of birth as shown on your ID"
/>`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
