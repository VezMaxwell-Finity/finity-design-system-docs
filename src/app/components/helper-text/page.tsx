import { HeadingLG } from '@/components/typography';
import { HelperText } from '@/components/helper-text';
import { TextField } from '@/components/text-field';

const VARIANTS = [
  { type: 'default',  label: 'Neutral'  },
  { type: 'error',    label: 'Negative' },
  { type: 'success',  label: 'Positive' },
  { type: 'warning',  label: 'Warning'  },
] as const;

export default function HelperTextPage() {
  return (
    <main>
      {/* Header */}
      <header className="mb-[var(--spacing-48)]">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-8)]">
          Component → Display
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-[var(--spacing-16)]">
          Helper text
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          Helper text provides brief guidance or context below a field to help users understand what
          information is needed or how it will be used.
        </p>
      </header>

      {/* Live preview */}
      <section className="mb-[var(--spacing-48)] p-[var(--spacing-48)] bg-[var(--color-bg-subtle)] rounded-xl flex flex-col items-center gap-[var(--spacing-32)]">
        <TextField
          label="Email address"
          prefix="£"
          errorMessage="This field is required"
          className="max-w-[450px] w-full"
        />
        <HelperText className="max-w-[450px] w-full">
          This setting controls whether the employee appears in reports
        </HelperText>
      </section>

      {/* Variants */}
      <section className="mb-[var(--spacing-48)]">
        <HeadingLG className="mb-[var(--spacing-24)]">Variants</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-[var(--spacing-32)]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)]">
                <th className="text-compact-semibold text-left py-[var(--spacing-12)] pr-[var(--spacing-32)] w-[120px]" />
                <th className="text-compact-semibold text-left py-[var(--spacing-12)]">Example</th>
              </tr>
            </thead>
            <tbody>
              {VARIANTS.map((v) => (
                <tr key={v.type} className="border-b border-[var(--color-border-subtle)]">
                  <td className="text-compact-medium text-[var(--color-text-secondary)] py-[var(--spacing-20)] pr-[var(--spacing-32)] align-middle">
                    {v.label}
                  </td>
                  <td className="py-[var(--spacing-20)] align-middle">
                    <HelperText type={v.type}>Helper text</HelperText>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-[var(--spacing-48)]">
        <HeadingLG className="mb-[var(--spacing-24)]">Usage</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-[var(--spacing-32)]">
          <div className="p-[var(--spacing-24)] bg-[var(--color-bg-muted)] rounded-lg">
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`import { HelperText } from '@finity/design-system';

<HelperText>This field is required</HelperText>
<HelperText type="error">This field is required</HelperText>
<HelperText type="success">Changes saved successfully</HelperText>
<HelperText type="warning">This action cannot be undone</HelperText>`}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}
