import { Section, CodeBlock } from '@/app/_components/doc';
import { MobileNumberField } from '@finity/design-system';

export default function MobileNumberFieldPage() {
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
              Mobile number
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              A telephone input with a fixed dial code prefix, optimised for mobile number entry across different regions.
            </p>
          </div>
          <div className="flex-none w-[300px] rounded-2xl bg-[var(--color-base-white)] border border-[var(--color-border-subtle)] p-[var(--spacing-48)] flex items-center justify-center min-h-[180px] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <MobileNumberField placeholder="07700 900000" className="w-full" />
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="States" description="The mobile number field supports the same validation states as other form inputs.">
          <div className="grid grid-cols-2 gap-[var(--spacing-24)] max-w-[600px]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Default</p>
              <MobileNumberField placeholder="07700 900000" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Helper text</p>
              <MobileNumberField placeholder="07700 900000" helperText="We'll only use this to contact you" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Error</p>
              <MobileNumberField defaultValue="0770" errorMessage="Enter a valid UK mobile number" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-12)]">Disabled</p>
              <MobileNumberField defaultValue="07700 900000" disabled />
            </div>
          </div>
        </Section>

        <Section title="Dial codes" description="The dial code prefix can be customised for international numbers.">
          <div className="flex gap-[var(--spacing-24)] flex-wrap">
            {['+44', '+1', '+61', '+353'].map((code) => (
              <div key={code} className="flex flex-col gap-[var(--spacing-8)]">
                <p className="text-[12px] text-[var(--color-text-tertiary)]">{code}</p>
                <MobileNumberField dialCode={code} placeholder="Mobile number" />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { MobileNumberField } from '@finity/design-system';

// Default (UK +44)
<MobileNumberField
  placeholder="07700 900000"
  onChange={(e) => setPhone(e.target.value)}
/>

// Custom dial code
<MobileNumberField dialCode="+1" placeholder="Mobile number" />

// With validation
<MobileNumberField
  value={phone}
  errorMessage="Enter a valid UK mobile number"
/>

// Disabled
<MobileNumberField defaultValue="07700 900000" disabled />`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
