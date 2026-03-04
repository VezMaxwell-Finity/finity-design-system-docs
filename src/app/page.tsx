'use client';

import { useState } from 'react';
import { Button } from '@/components/button';
import { Tabs } from '@/components/tabs';
import { TextField } from '@/components/text-field';
import {
  HeadingXL, HeadingLG, HeadingMD, HeadingSM,
  BodySemibold, BodyMedium, Body, CompactMedium,
} from '@/components/typography';
import {
  Add, Search, Download, Settings, ChevronRight,
  Mail, User, Home, Check, Close,
  ErrorFilled, SuccessFilled, WarningFilled, InfoFilled,
} from '@/components/icons';

const tabItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'employees', label: 'Employees', badge: 24 },
  { id: 'payroll', label: 'Payroll' },
  { id: 'settings', label: 'Settings' },
];

const greySwatches = ['#FAFAFA', '#F5F5F5', '#E5E5E5', '#D4D4D4', '#A3A3A3', '#737373', '#525252', '#404040', '#262626', '#171717'];
const coralSwatches = ['#FFF4ED', '#FEE6D6', '#FCC8AC', '#FAA277', '#F77445', '#F44C1B', '#E53311', '#BE2310', '#971D15', '#7A1B14'];

function isDark(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5;
}

export default function IndexPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [emailValue, setEmailValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  return (
    <main>

      {/* Header */}
      <header className="mb-16">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-2">
          Finity Design System
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-4">
          All components
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          The shared component library and design tokens for building Finity products.
        </p>
      </header>

      {/* ─── FOUNDATIONS ─────────────────────────────────────────── */}

      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <HeadingLG>Typography</HeadingLG>
          <a href="/" className="text-compact-medium text-[var(--color-coral-500)] hover:underline">View all →</a>
        </div>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-6">
          <div className="grid md:grid-cols-[140px_1fr] gap-4 items-baseline pb-5 border-b border-[var(--color-border-subtle)]">
            <span className="text-compact-medium text-[var(--color-text-tertiary)]">text-heading-xl</span>
            <HeadingXL>Heading Extra Large</HeadingXL>
          </div>
          <div className="grid md:grid-cols-[140px_1fr] gap-4 items-baseline pb-5 border-b border-[var(--color-border-subtle)]">
            <span className="text-compact-medium text-[var(--color-text-tertiary)]">text-heading-lg</span>
            <HeadingLG>Heading Large</HeadingLG>
          </div>
          <div className="grid md:grid-cols-[140px_1fr] gap-4 items-baseline pb-5 border-b border-[var(--color-border-subtle)]">
            <span className="text-compact-medium text-[var(--color-text-tertiary)]">text-heading-md</span>
            <HeadingMD>Heading Medium</HeadingMD>
          </div>
          <div className="grid md:grid-cols-[140px_1fr] gap-4 items-baseline pb-5 border-b border-[var(--color-border-subtle)]">
            <span className="text-compact-medium text-[var(--color-text-tertiary)]">text-heading-sm</span>
            <HeadingSM>Heading Small</HeadingSM>
          </div>
          <div className="grid md:grid-cols-[140px_1fr] gap-4 items-baseline pb-5 border-b border-[var(--color-border-subtle)]">
            <span className="text-compact-medium text-[var(--color-text-tertiary)]">text-body-semibold</span>
            <BodySemibold>Body Semibold</BodySemibold>
          </div>
          <div className="grid md:grid-cols-[140px_1fr] gap-4 items-baseline pb-5 border-b border-[var(--color-border-subtle)]">
            <span className="text-compact-medium text-[var(--color-text-tertiary)]">text-body-medium</span>
            <BodyMedium>Body Medium</BodyMedium>
          </div>
          <div className="grid md:grid-cols-[140px_1fr] gap-4 items-baseline">
            <span className="text-compact-medium text-[var(--color-text-tertiary)]">text-body-regular</span>
            <Body>Body Regular</Body>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <HeadingLG>Colours</HeadingLG>
          <a href="/colors" className="text-compact-medium text-[var(--color-coral-500)] hover:underline">View all →</a>
        </div>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">
          <div>
            <CompactMedium className="text-[var(--color-text-tertiary)] mb-3 block">Grey / Neutral</CompactMedium>
            <div className="flex gap-2">
              {greySwatches.map((hex) => (
                <div key={hex} className="flex-1">
                  <div
                    className="rounded-md w-full h-10 border border-[var(--color-border-subtle)]"
                    style={{ backgroundColor: hex }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <CompactMedium className="text-[var(--color-text-tertiary)] mb-3 block">Coral</CompactMedium>
            <div className="flex gap-2">
              {coralSwatches.map((hex) => (
                <div key={hex} className="flex-1">
                  <div
                    className="rounded-md w-full h-10 border border-[var(--color-border-subtle)]"
                    style={{ backgroundColor: hex }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <CompactMedium className="text-[var(--color-text-tertiary)] mb-3 block">Semantic</CompactMedium>
            <div className="flex gap-3">
              {[
                { label: 'Error', color: '#EF4444' },
                { label: 'Warning', color: '#EAB308' },
                { label: 'Success', color: '#22C55E' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="rounded-full w-4 h-4" style={{ backgroundColor: color }} />
                  <span className="text-compact-medium text-[var(--color-text-secondary)]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <HeadingLG>Icons</HeadingLG>
          <a href="/icons" className="text-compact-medium text-[var(--color-coral-500)] hover:underline">View all →</a>
        </div>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Home size={24} />, name: 'Home' },
              { icon: <Search size={24} />, name: 'Search' },
              { icon: <User size={24} />, name: 'User' },
              { icon: <Mail size={24} />, name: 'Mail' },
              { icon: <Settings size={24} />, name: 'Settings' },
              { icon: <Add size={24} />, name: 'Add' },
              { icon: <Check size={24} />, name: 'Check' },
              { icon: <Close size={24} />, name: 'Close' },
              { icon: <Download size={24} />, name: 'Download' },
              { icon: <ChevronRight size={24} />, name: 'ChevronRight' },
              { icon: <ErrorFilled size={24} />, name: 'ErrorFilled' },
              { icon: <SuccessFilled size={24} />, name: 'SuccessFilled' },
              { icon: <WarningFilled size={24} />, name: 'WarningFilled' },
              { icon: <InfoFilled size={24} />, name: 'InfoFilled' },
            ].map(({ icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-2 w-[60px]">
                {icon}
                <span className="text-[10px] text-[var(--color-text-tertiary)] text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPONENTS ───────────────────────────────────────────── */}

      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <HeadingLG>Button</HeadingLG>
          <a href="/components/button" className="text-compact-medium text-[var(--color-coral-500)] hover:underline">View all →</a>
        </div>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">

          <div>
            <p className="text-compact-semibold text-[var(--color-text-secondary)] mb-4">Variants</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="emphasis">Emphasis</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          <div>
            <p className="text-compact-semibold text-[var(--color-text-secondary)] mb-4">With icons</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" iconLeft={<Add size={18} />}>Add employee</Button>
              <Button variant="secondary" iconRight={<ChevronRight size={18} />}>Continue</Button>
              <Button variant="secondary" iconOnly><Download size={18} /></Button>
              <Button variant="primary" loading>Processing</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>

          <div>
            <p className="text-compact-semibold text-[var(--color-text-secondary)] mb-4">Sizes</p>
            <div className="flex flex-wrap items-end gap-4">
              <Button variant="primary" size="large">Large</Button>
              <Button variant="primary" size="medium">Medium</Button>
              <Button variant="primary" size="small">Small</Button>
            </div>
          </div>

        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <HeadingLG>Tabs</HeadingLG>
          <a href="/components/tabs" className="text-compact-medium text-[var(--color-coral-500)] hover:underline">View all →</a>
        </div>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">
          <div>
            <p className="text-compact-semibold text-[var(--color-text-secondary)] mb-4">Medium (default)</p>
            <Tabs items={tabItems} value={activeTab} onChange={setActiveTab} />
          </div>
          <div>
            <p className="text-compact-semibold text-[var(--color-text-secondary)] mb-4">Small</p>
            <Tabs items={tabItems} value={activeTab} onChange={setActiveTab} size="small" />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <HeadingLG>Text field</HeadingLG>
          <a href="/components/text-field" className="text-compact-medium text-[var(--color-coral-500)] hover:underline">View all →</a>
        </div>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-[700px]">

            <TextField
              label="Email address"
              placeholder="you@example.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onClear={() => setEmailValue('')}
              helperText="We'll never share your email."
            />

            <TextField
              label="Search"
              placeholder="Search employees…"
              suffixIcon={<Search size={20} />}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClear={() => setSearchValue('')}
            />

            <TextField
              label="Amount"
              placeholder="0.00"
              prefix="£"
              value=""
              onChange={() => {}}
            />

            <TextField
              label="Invalid input"
              placeholder="Enter value"
              value="bad value"
              onChange={() => {}}
              errorMessage="This field contains an error."
            />

            <TextField
              label="With suffix"
              placeholder="Enter percentage"
              suffix="%"
              value=""
              onChange={() => {}}
            />

            <TextField
              label="Disabled"
              placeholder="Not editable"
              value=""
              onChange={() => {}}
              disabled
            />

          </div>
        </div>
      </section>

    </main>
  );
}
