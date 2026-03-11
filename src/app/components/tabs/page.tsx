'use client';

import { useState } from 'react';
import { Section, CodeBlock } from '@/app/_components/doc';
import { Tabs } from '@/components/tabs';

const DEMO_TABS: { id: string; label: string; badge?: number }[] = [
  { id: 'overview',   label: 'Overview' },
  { id: 'employees',  label: 'Employees', badge: 24 },
  { id: 'payroll',    label: 'Payroll' },
  { id: 'settings',   label: 'Settings' },
];

const TAB_CONTENT: Record<string, { title: string; description: string }> = {
  overview:  { title: 'Overview',   description: 'High-level summary of your account, payroll, and employees.' },
  employees: { title: 'Employees',  description: 'Manage employee details, statuses, and onboarding.' },
  payroll:   { title: 'Payroll',    description: 'Track and process payroll runs, payments, and deductions.' },
  settings:  { title: 'Settings',   description: 'Configure company details, pay schedules, and integrations.' },
};

export default function TabsPage() {
  const [heroTab, setHeroTab] = useState('overview');
  const [mdTab,   setMdTab]   = useState('overview');
  const [smTab,   setSmTab]   = useState('overview');

  return (
    <main>

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-subtle)] px-[var(--spacing-64)] py-[var(--spacing-64)] min-h-[480px] flex items-center">
        <div className="flex gap-[var(--spacing-64)] items-center w-full">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">
              Component · Navigation
            </p>
            <h1 className="text-[5rem] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-text-default)] mb-[var(--spacing-24)]">
              Tabs
            </h1>
            <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px]">
              Tabs let users switch between related views while keeping context within a single surface.
            </p>
          </div>
          <div className="flex-none w-[400px] rounded-2xl bg-white border border-[var(--color-border-subtle)] p-[var(--spacing-32)] flex flex-col gap-[var(--spacing-16)] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <Tabs items={DEMO_TABS} value={heroTab} onChange={setHeroTab} />
            <div className="rounded-lg border border-[var(--color-border-subtle)] p-[var(--spacing-20)]">
              <p className="text-[14px] font-semibold text-[var(--color-text-default)] mb-[var(--spacing-4)]">
                {TAB_CONTENT[heroTab].title}
              </p>
              <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                {TAB_CONTENT[heroTab].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="Sizes" description="Tabs come in two sizes to suit different density requirements.">
          <div className="flex flex-col gap-[var(--spacing-48)]">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">Medium (default)</p>
              <Tabs items={DEMO_TABS} value={mdTab} onChange={setMdTab} />
            </div>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">Small</p>
              <Tabs items={DEMO_TABS} value={smTab} onChange={setSmTab} size="small" />
            </div>
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { Tabs } from '@finity/design-system';

const items = [
  { id: 'overview',  label: 'Overview' },
  { id: 'employees', label: 'Employees', badge: 24 },
  { id: 'payroll',   label: 'Payroll' },
];

<Tabs
  items={items}
  value={activeTab}
  onChange={setActiveTab}
/>

// Small size
<Tabs items={items} value={activeTab} onChange={setActiveTab} size="small" />`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
