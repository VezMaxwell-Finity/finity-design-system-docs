import { Button } from '@/components/button';
import { HeadingLG } from '@/components/typography';
import { Add, ChevronRight, Download, Settings } from '@/components/icons';

const VARIANTS = [
  { id: 'primary',   label: 'Primary' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'tertiary',  label: 'Tertiary' },
  { id: 'emphasis',  label: 'Emphasis' },
  { id: 'danger',    label: 'Danger' },
] as const;

const SIZES = [
  { id: 'large',  label: 'Large (48px)' },
  { id: 'medium', label: 'Medium (40px)' },
  { id: 'small',  label: 'Small (32px)' },
] as const;

export default function ButtonPage() {
  return (
    <main>
      {/* Header */}
      <header className="mb-[64px]">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-[8px]">Component → Action</p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-[16px]">Button</h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          Buttons trigger actions or navigate users to another page. They come in multiple styles to guide users and emphasise key actions in a flow.
        </p>
      </header>

      {/* Live preview */}
      <section className="mb-[64px] p-[48px] bg-[var(--color-bg-subtle)] rounded-xl flex items-center justify-center gap-4">
        <Button variant="secondary">Add employee</Button>
        <Button variant="primary">Process payroll</Button>
      </section>

      {/* Variants × Sizes grid */}
      <section className="mb-[64px]">
        <HeadingLG className="mb-6">Variants</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-[32px] overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)]">
                <th className="text-compact-semibold text-left py-3 pr-8 w-[120px]"></th>
                {SIZES.map(s => (
                  <th key={s.id} className="text-compact-semibold text-left py-3 pr-8">{s.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VARIANTS.map(v => (
                <tr key={v.id} className="border-b border-[var(--color-border-subtle)]">
                  <td className="text-compact-medium text-[var(--color-text-secondary)] py-5 pr-8 align-middle">{v.label}</td>
                  {SIZES.map(s => (
                    <td key={s.id} className="py-5 pr-8 align-middle">
                      <Button variant={v.id} size={s.id}>Button</Button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* With icons */}
      <section className="mb-[64px]">
        <HeadingLG className="mb-6">With icons</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-[32px]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)]">
                <th className="text-compact-semibold text-left py-3 pr-8 w-[120px]"></th>
                <th className="text-compact-semibold text-left py-3 pr-8">Icon left</th>
                <th className="text-compact-semibold text-left py-3 pr-8">Icon right</th>
                <th className="text-compact-semibold text-left py-3">Icon only</th>
              </tr>
            </thead>
            <tbody>
              {VARIANTS.map(v => (
                <tr key={v.id} className="border-b border-[var(--color-border-subtle)]">
                  <td className="text-compact-medium text-[var(--color-text-secondary)] py-5 pr-8 align-middle">{v.label}</td>
                  <td className="py-5 pr-8 align-middle">
                    <Button variant={v.id} iconLeft={<Add size={18} />}>Button</Button>
                  </td>
                  <td className="py-5 pr-8 align-middle">
                    <Button variant={v.id} iconRight={<ChevronRight size={18} />}>Button</Button>
                  </td>
                  <td className="py-5 align-middle">
                    <Button variant={v.id} iconOnly><Settings size={18} /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* States */}
      <section className="mb-[64px]">
        <HeadingLG className="mb-6">States</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-[32px] overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)]">
                <th className="text-compact-semibold text-left py-3 pr-8 w-[120px]"></th>
                <th className="text-compact-semibold text-left py-3 pr-8">Default</th>
                <th className="text-compact-semibold text-left py-3 pr-8">Loading</th>
                <th className="text-compact-semibold text-left py-3">Disabled</th>
              </tr>
            </thead>
            <tbody>
              {VARIANTS.map(v => (
                <tr key={v.id} className="border-b border-[var(--color-border-subtle)]">
                  <td className="text-compact-medium text-[var(--color-text-secondary)] py-5 pr-8 align-middle">{v.label}</td>
                  <td className="py-5 pr-8 align-middle"><Button variant={v.id}>Button</Button></td>
                  <td className="py-5 pr-8 align-middle"><Button variant={v.id} loading>Button</Button></td>
                  <td className="py-5 align-middle"><Button variant={v.id} disabled>Button</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-[64px]">
        <HeadingLG className="mb-6">Usage</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-[32px]">
          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`import { Button } from '@finity/design-system';
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
<Button iconOnly><Download size={18} /></Button>

<Button loading>Saving…</Button>
<Button disabled>Unavailable</Button>`}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}
