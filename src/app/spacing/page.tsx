import { HeadingLG } from '@/components/typography';

const spacingScale = [
  { token: '2', px: '2px', rem: '0.125rem' },
  { token: '4', px: '4px', rem: '0.25rem' },
  { token: '8', px: '8px', rem: '0.5rem' },
  { token: '12', px: '12px', rem: '0.75rem' },
  { token: '16', px: '16px', rem: '1rem' },
  { token: '20', px: '20px', rem: '1.25rem' },
  { token: '24', px: '24px', rem: '1.5rem' },
  { token: '32', px: '32px', rem: '2rem' },
  { token: '40', px: '40px', rem: '2.5rem' },
  { token: '48', px: '48px', rem: '3rem' },
  { token: '56', px: '56px', rem: '3.5rem' },
  { token: '64', px: '64px', rem: '4rem' },
  { token: '80', px: '80px', rem: '5rem' },
  { token: '96', px: '96px', rem: '6rem' },
  { token: '128', px: '128px', rem: '8rem' },
  { token: '160', px: '160px', rem: '10rem' },
  { token: '208', px: '208px', rem: '13rem' },
];

export default function SpacingPage() {
  return (
    <main>
      {/* Header */}
      <header className="mb-16">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-2">
          Foundation
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-4">
          Spacing
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          A consistent spacing scale helps maintain visual rhythm and hierarchy throughout the interface.
        </p>
      </header>

      {/* Spacing Scale */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Spacing Scale</HeadingLG>
        <p className="text-body-medium text-[var(--color-text-secondary)] mb-8">
          Use these spacing tokens for margins, padding, gaps, and other layout properties.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <div className="space-y-4">
            {spacingScale.map((space) => (
              <div
                key={space.token}
                className="grid grid-cols-[100px_1fr_100px_100px] gap-4 items-center py-3 border-b border-[var(--color-border-subtle)]"
              >
                <span className="text-compact-semibold">
                  {space.token}
                </span>
                <div className="flex items-center gap-4">
                  <div
                    className="h-6 bg-[var(--color-coral-400)] rounded"
                    style={{ width: `var(--spacing-${space.token})` }}
                  />
                </div>
                <span className="text-compact-medium text-[var(--color-text-secondary)]">
                  {space.px}
                </span>
                <span className="text-compact-medium text-[var(--color-text-tertiary)]">
                  {space.rem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Usage</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-6">
          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Using CSS variables`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`/* Direct usage */
padding: var(--spacing-16);
margin-bottom: var(--spacing-24);
gap: var(--spacing-8);

/* In component styles */
.card {
  padding: var(--spacing-24);
  margin-bottom: var(--spacing-32);
}

.button-group {
  display: flex;
  gap: var(--spacing-12);
}`}
            </pre>
          </div>

          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Using Tailwind classes`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`{/* With arbitrary values referencing CSS variables */}
<div className="p-[var(--spacing-24)] mb-[var(--spacing-32)]">
  Card content
</div>

<div className="flex gap-[var(--spacing-12)]">
  <Button>Save</Button>
  <Button>Cancel</Button>
</div>

{/* Or use standard Tailwind spacing which aligns with the scale */}
<div className="p-6 mb-8">  {/* 24px, 32px */}
  Card content
</div>`}
            </pre>
          </div>

          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Using TypeScript tokens`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`import { spacing } from '@/tokens/spacing';

// Direct values
const cardPadding = spacing[24];  // "24px"

// In inline styles
<div style={{ padding: spacing[16], gap: spacing[8] }}>
  Content
</div>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Token Reference Table */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Token Reference</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[var(--color-border-default)]">
                  <th className="text-compact-semibold py-3 pr-4">Token</th>
                  <th className="text-compact-semibold py-3 pr-4">CSS Variable</th>
                  <th className="text-compact-semibold py-3 pr-4">Pixels</th>
                  <th className="text-compact-semibold py-3">Rem</th>
                </tr>
              </thead>
              <tbody>
                {spacingScale.map((space) => (
                  <tr key={space.token} className="border-b border-[var(--color-border-subtle)]">
                    <td className="text-compact-medium py-3 pr-4">{space.token}</td>
                    <td className="text-compact-medium py-3 pr-4 text-[var(--color-text-secondary)]">
                      --spacing-{space.token}
                    </td>
                    <td className="text-compact-medium py-3 pr-4">{space.px}</td>
                    <td className="text-compact-medium py-3 text-[var(--color-text-tertiary)]">{space.rem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
