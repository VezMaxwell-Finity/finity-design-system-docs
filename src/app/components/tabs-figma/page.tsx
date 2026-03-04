'use client';

import { FigmaTabs } from '@/components/tabs/FigmaTabs';

export default function TabsFigmaPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-[3rem] font-semibold leading-tight mb-2">
          Tabs – Figma spacing test
        </h1>
        <p className="text-body-medium text-[var(--color-text-secondary)]">
          This page just shows a fixed version of the tabs, so we can get the padding and layout
          looking exactly like the Figma frame before wiring it into the generic component.
        </p>
      </div>

      <section className="p-12 bg-[var(--color-bg-subtle)] rounded-xl flex items-center justify-start">
        <FigmaTabs />
      </section>
    </main>
  );
}

