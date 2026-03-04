'use client';

import { useState } from 'react';
import { TextField } from '@/components/text-field';
import { HeadingLG, HeadingSM } from '@/components/typography';

export default function TextFieldPage() {
  const [emailValue, setEmailValue] = useState('user@finity.co.uk');
  const [niValue, setNiValue] = useState('AB 12 34 56 Z');
  const [bankRef, setBankRef] = useState('');
  const [focusValue, setFocusValue] = useState('Value');

  return (
    <main>
      {/* Header */}
      <header className="mb-[64px]">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-[8px]">Component → Form</p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-[16px]">Text field</h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          A single-line input field for capturing concise, short-form textual data.
        </p>
      </header>

      {/* Live example */}
      <section className="mb-[64px] p-[48px] bg-[var(--color-bg-subtle)] rounded-xl flex flex-col gap-[16px] items-center">
        <div className="w-[280px] flex flex-col gap-[16px]">
          <TextField
            label="Email address"
            placeholder="you@example.com"
            prefix="£"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            onClear={() => setEmailValue('')}
          />
          <TextField
            label="NI number"
            placeholder="AB 12 34 56 Z"
            prefix="£"
            value={niValue}
            onChange={(e) => setNiValue(e.target.value)}
            onClear={() => setNiValue('')}
          />
          <TextField
            label="Bank reference (Optional)"
            placeholder=""
            prefix="£"
            value={bankRef}
            onChange={(e) => setBankRef(e.target.value)}
            onClear={() => setBankRef('')}
          />
        </div>
      </section>

      {/* States */}
      <section className="mb-[64px]">
        <HeadingLG className="mb-[24px]">States</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-[32px]">
          <div className="grid grid-cols-2 gap-[24px] max-w-[600px]">

            <div>
              <HeadingSM className="mb-[16px]">Default</HeadingSM>
              <TextField label="Label" placeholder="Placeholder" prefix="£" value="" onChange={() => {}} onClear={() => {}} />
            </div>

            <div>
              <HeadingSM className="mb-[16px]">Focus</HeadingSM>
              <TextField label="Label" prefix="£" value={focusValue} onChange={(e) => setFocusValue(e.target.value)} onClear={() => setFocusValue('')} autoFocus />
            </div>

            <div>
              <HeadingSM className="mb-[16px]">Error</HeadingSM>
              <TextField label="Label" prefix="£" value="Value" onChange={() => {}} onClear={() => {}} errorMessage="Error message" />
            </div>

            <div>
              <HeadingSM className="mb-[16px]">Disabled</HeadingSM>
              <TextField label="Label" placeholder="Placeholder" prefix="£" value="" onChange={() => {}} disabled />
            </div>

            <div>
              <HeadingSM className="mb-[16px]">Helper text</HeadingSM>
              <TextField label="Label" prefix="£" value="Value" onChange={() => {}} onClear={() => {}} helperText="Optional helper text" />
            </div>

            <div>
              <HeadingSM className="mb-[16px]">Suffix</HeadingSM>
              <TextField label="Label" placeholder="Placeholder" value="" onChange={() => {}} suffix="%" />
            </div>

          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-[64px]">
        <HeadingLG className="mb-[24px]">Sizes</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-[32px]">
          <div className="flex flex-col gap-[24px] max-w-[280px]">
            <div>
              <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-[8px]">Large (48px)</p>
              <TextField label="Label" placeholder="Placeholder" prefix="£" value="" size="large" onChange={() => {}} />
            </div>
            <div>
              <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-[8px]">Medium (40px)</p>
              <TextField label="Label" placeholder="Placeholder" prefix="£" value="" size="medium" onChange={() => {}} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
