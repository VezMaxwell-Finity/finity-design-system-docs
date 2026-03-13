import { Button } from '@finity/design-system';
import { Add, ChevronRight, Settings } from '@finity/design-system';
import { Section, DemoTable, CodeBlock } from '@/app/_components/doc';

const VARIANTS = [
  { id: 'primary',   label: 'Primary' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'tertiary',  label: 'Tertiary' },
  { id: 'emphasis',  label: 'Emphasis' },
  { id: 'danger',    label: 'Danger' },
] as const;

const SIZES = [
  { id: 'large',  label: 'Large',  sub: '48px' },
  { id: 'medium', label: 'Medium', sub: '40px' },
  { id: 'small',  label: 'Small',  sub: '32px' },
] as const;

export default function ButtonPage() {
  return (
    <main>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-subtle)] px-[var(--spacing-64)] py-[var(--spacing-64)] min-h-[480px] flex items-center">
        <div className="flex gap-[var(--spacing-64)] items-center w-full">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">
              Component · Action
            </p>
            <h1 className="text-[5rem] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-text-default)] mb-[var(--spacing-24)]">
              Button
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              Buttons trigger actions or navigate users to another page. They come in multiple styles to guide users and emphasise key actions in a flow.
            </p>
          </div>
          <div className="flex-none w-[340px] rounded-2xl bg-[var(--color-base-white)] border border-[var(--color-border-subtle)] p-[var(--spacing-48)] flex flex-col items-center justify-center gap-[var(--spacing-12)] min-h-[220px] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <Button variant="primary" size="large">Process payroll</Button>
            <Button variant="secondary" size="large">Add employee</Button>
          </div>
        </div>
      </section>

      {/* ─── Content ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        {/* ─── Variants ─────────────────────────────────────────── */}
        <Section title="Variants" description="Five semantic variants to communicate intent and visual hierarchy across different contexts.">
          <DemoTable
            cols={SIZES.map(s => ({ key: s.id, label: s.label, sub: s.sub }))}
            rows={VARIANTS.map(v => ({
              label: v.label,
              cells: SIZES.map(s => (
                <Button key={s.id} variant={v.id} size={s.id}>Button</Button>
              )),
            }))}
          />
        </Section>

        {/* ─── Icons ────────────────────────────────────────────── */}
        <Section title="With icons" description="Buttons support leading icons, trailing icons, or icon-only variants for compact actions.">
          <DemoTable
            cols={[
              { key: 'left',  label: 'Icon left' },
              { key: 'right', label: 'Icon right' },
              { key: 'only',  label: 'Icon only' },
            ]}
            rows={VARIANTS.map(v => ({
              label: v.label,
              cells: [
                <Button key="l" variant={v.id} iconLeft={<Add size={18} />}>Button</Button>,
                <Button key="r" variant={v.id} iconRight={<ChevronRight size={18} />}>Button</Button>,
                <Button key="o" variant={v.id} iconOnly><Settings size={18} /></Button>,
              ],
            }))}
          />
        </Section>

        {/* ─── States ───────────────────────────────────────────── */}
        <Section title="States" description="Each variant supports loading and disabled states that preserve visual weight.">
          <DemoTable
            cols={[
              { key: 'default',  label: 'Default' },
              { key: 'loading',  label: 'Loading' },
              { key: 'disabled', label: 'Disabled' },
            ]}
            rows={VARIANTS.map(v => ({
              label: v.label,
              cells: [
                <Button key="d" variant={v.id}>Button</Button>,
                <Button key="l" variant={v.id} loading>Button</Button>,
                <Button key="x" variant={v.id} disabled>Button</Button>,
              ],
            }))}
          />
        </Section>

        {/* ─── Usage ────────────────────────────────────────────── */}
        <Section title="Usage" last>
          <CodeBlock>{`import { Button } from '@finity/design-system';
import { Add, ChevronRight } from '@finity/design-system';

<Button variant="primary">Process payroll</Button>
<Button variant="secondary">Add employee</Button>
<Button variant="tertiary">Learn more</Button>
<Button variant="emphasis">Get started</Button>
<Button variant="danger">Delete</Button>

<Button size="large">Large</Button>
<Button size="medium">Medium</Button>
<Button size="small">Small</Button>

<Button iconLeft={<Add size={18} />}>Add item</Button>
<Button iconRight={<ChevronRight size={18} />}>Continue</Button>
<Button iconOnly><Settings size={18} /></Button>

<Button loading>Saving…</Button>
<Button disabled>Unavailable</Button>`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
