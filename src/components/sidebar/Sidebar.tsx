'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  {
    section: 'Foundations',
    items: [
      { href: '/', label: 'Overview' },
      { href: '/colors', label: 'Colours' },
      { href: '/spacing', label: 'Spacing' },
      { href: '/icons', label: 'Icons' },
    ],
  },
  {
    section: 'Components',
    items: [
      { href: '/components/button', label: 'Button' },
      { href: '/components/tabs', label: 'Tabs' },
      { href: '/components/text-field', label: 'Text field' },
      { href: '/components/helper-text', label: 'Helper text' },
      { href: '/components/search-field', label: 'Search field' },
      { href: '/components/text-area', label: 'Text area' },
      { href: '/components/checkbox', label: 'Checkbox' },
      { href: '/components/date-of-birth-field', label: 'Date of birth' },
      { href: '/components/mobile-number-field', label: 'Mobile number' },
      { href: '/components/pin-code-field', label: 'PIN code' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-[var(--color-grey-900)] flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-[var(--spacing-8)] h-[72px] px-[var(--spacing-16)] shrink-0">
        <div className="flex items-center justify-center shrink-0 size-[32px] bg-[var(--color-coral-finity)] rounded-[4px]">
          <span className="text-white text-[14px] font-bold leading-none">F</span>
        </div>
        <span className="text-white text-[18px] font-semibold tracking-[var(--letter-spacing-tight)] leading-[var(--line-height-body)]">
          Finity DS
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-[var(--spacing-32)] px-[12px] pb-[var(--spacing-32)] flex-1">
        {NAV.map(({ section, items }) => (
          <div key={section} className="flex flex-col">
            <div className="flex items-center h-[32px] px-[var(--spacing-8)]">
              <span className="text-[12px] font-semibold uppercase tracking-[var(--letter-spacing-wide)] leading-[var(--line-height-small)] text-[var(--color-grey-400)]">
                {section}
              </span>
            </div>
            <div className="flex flex-col">
              {items.map(({ href, label }) => {
                const isActive = href === '/' ? pathname === '/' : pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      flex items-center h-[40px] px-[var(--spacing-8)] rounded-lg
                      text-[14px] tracking-[var(--letter-spacing-wide)] leading-[var(--line-height-compact)]
                      transition-colors duration-100
                      hover:bg-white/5
                      ${isActive
                        ? 'text-[var(--color-coral-400)] font-semibold'
                        : 'text-white font-medium'
                      }
                    `}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Version */}
      <div className="flex items-center justify-center h-[64px] shrink-0 border-t border-[var(--color-grey-600)]">
        <span className="text-[12px] text-[var(--color-grey-400)] tracking-[var(--letter-spacing-wide)]">
          Finity Design System
        </span>
      </div>
    </aside>
  );
}
