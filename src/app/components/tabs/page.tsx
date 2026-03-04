'use client';

import { useState } from 'react';
import { HeadingLG, HeadingSM } from '@/components/typography';
import { Tabs } from '@/components/tabs';

const accountTabs: { id: string; label: string; badge?: number }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'employees', label: 'Employees', badge: 24 },
  { id: 'payroll', label: 'Payroll' },
  { id: 'settings', label: 'Settings' },
] ;

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  return (
    <main className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="mb-8 flex gap-4 flex-wrap">
        <a href="/" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Typography
        </a>
        <a href="/colors" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Colours
        </a>
        <a href="/spacing" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Spacing
        </a>
        <a href="/icons" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Icons
        </a>
        <a href="/components/button" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Button
        </a>
        <a href="/components/tabs" className="text-compact-semibold text-[var(--color-coral-500)] border-b-2 border-[var(--color-coral-500)] pb-1">
          Tabs
        </a>
      </nav>

      {/* Header */}
      <header className="mb-16">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-2">
          Component &rarr; Navigation
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-4">
          Tabs
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          Tabs let users switch between related views while keeping context in a single surface.
        </p>
      </header>

      {/* Example */}
      <section className="mb-16 p-12 bg-[var(--color-bg-subtle)] rounded-xl">
        <div className="mb-6">
          <Tabs
            items={accountTabs}
            value={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg-default)] p-6">
          <div className="grid">
            <div className={`col-start-1 row-start-1 space-y-2 ${activeTab === 'overview' ? 'visible' : 'invisible'}`}>
              <HeadingSM>Overview</HeadingSM>
              <p className="text-body-medium text-[var(--color-text-secondary)]">
                High-level summary of your account, payroll, and employees.
              </p>
            </div>
            <div className={`col-start-1 row-start-1 space-y-2 ${activeTab === 'employees' ? 'visible' : 'invisible'}`}>
              <HeadingSM>Employees</HeadingSM>
              <p className="text-body-medium text-[var(--color-text-secondary)]">
                Manage employee details, statuses, and onboarding.
              </p>
            </div>
            <div className={`col-start-1 row-start-1 space-y-2 ${activeTab === 'payroll' ? 'visible' : 'invisible'}`}>
              <HeadingSM>Payroll</HeadingSM>
              <p className="text-body-medium text-[var(--color-text-secondary)]">
                Track and process payroll runs, payments, and deductions.
              </p>
            </div>
            <div className={`col-start-1 row-start-1 space-y-2 ${activeTab === 'settings' ? 'visible' : 'invisible'}`}>
              <HeadingSM>Settings</HeadingSM>
              <p className="text-body-medium text-[var(--color-text-secondary)]">
                Configure company details, pay schedules, and integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Sizes</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">
          <div>
            <HeadingSM className="mb-3">Medium (default)</HeadingSM>
            <Tabs
              items={accountTabs}
              value={activeTab}
              onChange={setActiveTab}
            />
          </div>
          <div>
            <HeadingSM className="mb-3">Small</HeadingSM>
            <Tabs
              items={accountTabs}
              value={activeTab}
              onChange={setActiveTab}
              size="small"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

