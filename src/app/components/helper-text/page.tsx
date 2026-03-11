import { Section, DemoTable, CodeBlock } from '@/app/_components/doc';
import { HelperText } from '@/components/helper-text';
import { TextField } from '@/components/text-field';

const VARIANTS = [
  { type: 'default',  label: 'Default'  },
  { type: 'error',    label: 'Error'    },
  { type: 'success',  label: 'Success'  },
  { type: 'warning',  label: 'Warning'  },
] as const;

export default function HelperTextPage() {
  return (
    <main>

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-subtle)] px-[var(--spacing-64)] py-[var(--spacing-64)] min-h-[480px] flex items-center">
        <div className="flex gap-[var(--spacing-64)] items-center w-full">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">
              Component · Display
            </p>
            <h1 className="text-[5rem] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-text-default)] mb-[var(--spacing-24)]">
              Helper text
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              Brief guidance or context below a field to help users understand what information is needed or how it will be used.
            </p>
          </div>
          <div className="flex-none w-[340px] rounded-2xl bg-white border border-[var(--color-border-subtle)] p-[var(--spacing-48)] flex flex-col items-start justify-center gap-[var(--spacing-16)] min-h-[220px] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <HelperText>We&apos;ll never share your email.</HelperText>
            <HelperText type="error">This field is required.</HelperText>
            <HelperText type="success">Changes saved successfully.</HelperText>
            <HelperText type="warning">This action cannot be undone.</HelperText>
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="Variants" description="Four semantic variants to communicate different types of guidance or feedback.">
          <DemoTable
            cols={[{ key: 'example', label: 'Example' }]}
            rows={VARIANTS.map(v => ({
              label: v.label,
              cells: [<HelperText key={v.type} type={v.type}>Helper text message</HelperText>],
            }))}
          />
        </Section>

        <Section title="In context" description="Helper text is automatically rendered by form components like TextField when errorMessage or helperText props are provided.">
          <div className="flex flex-col gap-[var(--spacing-24)] max-w-[320px]">
            <TextField
              label="Email address"
              placeholder="you@example.com"
              helperText="We'll never share your email."
            />
            <TextField
              label="NI number"
              defaultValue="AB 12 34 56 Z"
              errorMessage="Please enter a valid NI number."
            />
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { HelperText } from '@finity/design-system';

<HelperText>We'll never share your email.</HelperText>
<HelperText type="error">This field is required.</HelperText>
<HelperText type="success">Changes saved successfully.</HelperText>
<HelperText type="warning">This action cannot be undone.</HelperText>`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
