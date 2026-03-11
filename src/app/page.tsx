import Link from 'next/link';
import { Button } from '@/components/button';
import { Add, ChevronRight, Settings } from '@/components/icons';

const FOUNDATIONS = [
  { href: '/colors',  title: 'Colours',  description: 'Palette and semantic colour tokens used across all Finity interfaces.' },
  { href: '/spacing', title: 'Spacing',  description: 'A consistent spacing scale for margins, padding, and gaps.' },
  { href: '/icons',   title: 'Icons',    description: 'Over 40 icons across arrows, general, and feedback categories.' },
];

const COMPONENTS = [
  { href: '/components/button',              title: 'Button',          description: 'Triggers actions or navigation. Five variants, three sizes.' },
  { href: '/components/tabs',                title: 'Tabs',            description: 'Switch between related views within a single surface.' },
  { href: '/components/text-field',          title: 'Text field',      description: 'Single-line input for short-form text.' },
  { href: '/components/text-area',           title: 'Text area',       description: 'Multi-line input for longer free-form text.' },
  { href: '/components/search-field',        title: 'Search field',    description: 'Keyword input for filtering and finding content.' },
  { href: '/components/helper-text',         title: 'Helper text',     description: 'Guidance and validation messages below form fields.' },
  { href: '/components/checkbox',            title: 'Checkbox',        description: 'Select one or more options from a set.' },
  { href: '/components/date-of-birth-field', title: 'Date of birth',   description: 'Segmented day / month / year input with auto-advance.' },
  { href: '/components/mobile-number-field', title: 'Mobile number',   description: 'Telephone input with configurable dial code prefix.' },
  { href: '/components/pin-code-field',      title: 'Pin code',        description: 'OTP/PIN input with paste support and auto-advance.' },
];

export default function IndexPage() {
  return (
    <main>

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-subtle)] px-[var(--spacing-64)] py-[var(--spacing-64)] min-h-[480px] flex items-center">
        <div className="flex gap-[var(--spacing-64)] items-center w-full">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">
              Finity Design System
            </p>
            <h1 className="text-[5rem] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-text-default)] mb-[var(--spacing-24)]">
              Build with<br />confidence
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              A shared component library and design token system for building consistent, accessible Finity products at speed.
            </p>
          </div>
          <div className="flex-none w-[340px] rounded-2xl bg-white border border-[var(--color-border-subtle)] p-[var(--spacing-48)] flex flex-col items-center justify-center gap-[var(--spacing-12)] min-h-[220px] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <Button variant="primary" size="large" iconLeft={<Add size={18} />}>Add employee</Button>
            <Button variant="secondary" size="large" iconRight={<ChevronRight size={18} />}>View payroll</Button>
            <Button variant="tertiary" size="large" iconOnly><Settings size={18} /></Button>
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        {/* ─── Foundations ───────────────────────────────────────── */}
        <section className="mb-[var(--spacing-96)]">
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text-default)] mb-[var(--spacing-8)]">
            Foundations
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-[var(--spacing-32)]">
            Design tokens that define the visual language — colour, spacing, and iconography.
          </p>
          <div className="grid grid-cols-3 gap-[var(--spacing-16)]">
            {FOUNDATIONS.map(item => (
              <Link key={item.href} href={item.href} className="group block rounded-xl border border-[var(--color-border-subtle)] p-[var(--spacing-24)] hover:border-[var(--color-border-default)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all">
                <h3 className="text-[15px] font-semibold text-[var(--color-text-default)] mb-[var(--spacing-8)] group-hover:text-[var(--color-coral-500)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Components ────────────────────────────────────────── */}
        <section>
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text-default)] mb-[var(--spacing-8)]">
            Components
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-[var(--spacing-32)]">
            Accessible, composable UI components ready to drop into any Finity product.
          </p>
          <div className="grid grid-cols-2 gap-[var(--spacing-16)]">
            {COMPONENTS.map(item => (
              <Link key={item.href} href={item.href} className="group flex items-start gap-[var(--spacing-16)] rounded-xl border border-[var(--color-border-subtle)] p-[var(--spacing-24)] hover:border-[var(--color-border-default)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-semibold text-[var(--color-text-default)] mb-[var(--spacing-4)] group-hover:text-[var(--color-coral-500)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <ChevronRight size={16} color="var(--color-text-tertiary)" className="shrink-0 mt-[3px]" />
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
