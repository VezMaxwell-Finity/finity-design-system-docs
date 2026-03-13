'use client';

import { useState } from 'react';
import { Section, CodeBlock } from '@/app/_components/doc';
import { PinCodeField } from '@/components/pin-code-field';

export default function PinCodeFieldPage() {
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
              Pin code
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              A segmented OTP/PIN input with automatic focus advancement, backspace navigation, and paste support.
            </p>
          </div>
          <div className="flex-none w-[340px] rounded-2xl bg-[var(--color-base-white)] border border-[var(--color-border-subtle)] p-[var(--spacing-48)] flex items-center justify-center min-h-[180px] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <PinCodeField length={6} value={liveValue} onChange={setLiveValue} />
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="States" description="The pin code field supports validation and helper text states.">
          <div className="grid grid-cols-2 gap-[var(--spacing-32)]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Default</p>
              <PinCodeField length={6} value="" onChange={() => {}} />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Helper text</p>
              <PinCodeField length={6} value="" onChange={() => {}} helperText="Enter the 6-digit code from your authenticator app" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Error</p>
              <PinCodeField length={6} value="123" onChange={() => {}} errorMessage="Incorrect code, please try again" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Disabled</p>
              <PinCodeField length={6} value="123456" onChange={() => {}} disabled />
            </div>
          </div>
        </Section>

        <Section title="Lengths" description="The number of digits can be configured via the length prop.">
          <div className="flex flex-col gap-[var(--spacing-32)]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">6 digits (default)</p>
              <PinCodeField length={6} value="" onChange={() => {}} />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">4 digits</p>
              <PinCodeField length={4} value="" onChange={() => {}} />
            </div>
          </div>
        </Section>

        <Section title="Sizes" description="Two sizes to suit different contexts and layouts.">
          <div className="flex flex-col gap-[var(--spacing-32)]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Large — 56px</p>
              <PinCodeField length={6} size="large" value="" onChange={() => {}} />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Medium — 48px</p>
              <PinCodeField length={6} size="medium" value="" onChange={() => {}} />
            </div>
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { PinCodeField } from '@finity/design-system';

const [pin, setPin] = useState('');

<PinCodeField
  length={6}
  value={pin}
  onChange={setPin}
/>

// 4-digit PIN
<PinCodeField length={4} value={pin} onChange={setPin} />

// Large size
<PinCodeField length={6} size="large" value={pin} onChange={setPin} />

// Error state
<PinCodeField
  length={6}
  value={pin}
  onChange={setPin}
  errorMessage="Incorrect code, please try again"
/>`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
