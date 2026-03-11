import { Section, CodeBlock } from '@/app/_components/doc';

const spacingScale = [
  { token: '2',   px: '2px',   rem: '0.125rem' },
  { token: '4',   px: '4px',   rem: '0.25rem' },
  { token: '8',   px: '8px',   rem: '0.5rem' },
  { token: '12',  px: '12px',  rem: '0.75rem' },
  { token: '16',  px: '16px',  rem: '1rem' },
  { token: '20',  px: '20px',  rem: '1.25rem' },
  { token: '24',  px: '24px',  rem: '1.5rem' },
  { token: '32',  px: '32px',  rem: '2rem' },
  { token: '40',  px: '40px',  rem: '2.5rem' },
  { token: '48',  px: '48px',  rem: '3rem' },
  { token: '56',  px: '56px',  rem: '3.5rem' },
  { token: '64',  px: '64px',  rem: '4rem' },
  { token: '80',  px: '80px',  rem: '5rem' },
  { token: '96',  px: '96px',  rem: '6rem' },
  { token: '128', px: '128px', rem: '8rem' },
  { token: '160', px: '160px', rem: '10rem' },
  { token: '208', px: '208px', rem: '13rem' },
];

export default function SpacingPage() {
  return (
    <main>

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-subtle)] px-[var(--spacing-64)] py-[var(--spacing-64)] min-h-[480px] flex items-center">
        <div className="w-full">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">
            Foundation
          </p>
          <h1 className="text-[5rem] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-text-default)] mb-[var(--spacing-24)]">
            Spacing
          </h1>
          <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[560px]">
            A consistent spacing scale maintains visual rhythm and hierarchy across all Finity interfaces.
            Use tokens instead of arbitrary values to stay aligned with the system.
          </p>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="Spacing scale" description="Use these tokens for margins, padding, gaps, and other layout properties.">
          <div className="rounded-xl border border-[var(--color-border-subtle)] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--color-bg-subtle)] border-b border-[var(--color-border-subtle)]">
                  <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-20)] text-[13px] font-semibold text-[var(--color-text-default)] w-[80px]">Token</th>
                  <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-20)] text-[13px] font-semibold text-[var(--color-text-default)]">Visual</th>
                  <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-20)] text-[13px] font-semibold text-[var(--color-text-default)] w-[80px]">Pixels</th>
                  <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-20)] text-[13px] font-semibold text-[var(--color-text-default)] w-[80px]">Rem</th>
                </tr>
              </thead>
              <tbody>
                {spacingScale.map((space, i) => (
                  <tr key={space.token} className={i < spacingScale.length - 1 ? 'border-b border-[var(--color-border-subtle)]' : ''}>
                    <td className="py-[var(--spacing-12)] px-[var(--spacing-20)] align-middle">
                      <span className="text-[13px] font-mono font-medium text-[var(--color-text-default)]">{space.token}</span>
                    </td>
                    <td className="py-[var(--spacing-12)] px-[var(--spacing-20)] align-middle">
                      <div
                        className="h-[var(--spacing-16)] bg-[var(--color-coral-400)] rounded-sm"
                        style={{ width: `var(--spacing-${space.token})`, maxWidth: '100%' }}
                      />
                    </td>
                    <td className="py-[var(--spacing-12)] px-[var(--spacing-20)] align-middle">
                      <span className="text-[13px] text-[var(--color-text-secondary)]">{space.px}</span>
                    </td>
                    <td className="py-[var(--spacing-12)] px-[var(--spacing-20)] align-middle">
                      <span className="text-[13px] text-[var(--color-text-tertiary)]">{space.rem}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { Button } from '@finity/design-system';

// Always use CSS variable syntax in Tailwind v4
<div className="p-[var(--spacing-24)] mb-[var(--spacing-32)]">
  <div className="flex gap-[var(--spacing-12)]">
    <Button>Save</Button>
    <Button variant="secondary">Cancel</Button>
  </div>
</div>

// Or in plain CSS
.card {
  padding: var(--spacing-24);
  margin-bottom: var(--spacing-32);
  gap: var(--spacing-12);
}`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
