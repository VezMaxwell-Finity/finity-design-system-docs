'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Tabs } from '@/components/tabs';

const NAV_ITEMS = [
  { id: '/', label: 'Overview' },
  { id: '/colors', label: 'Colours' },
  { id: '/spacing', label: 'Spacing' },
  { id: '/icons', label: 'Icons' },
  { id: '/components/button', label: 'Button' },
  { id: '/components/tabs', label: 'Tabs' },
  { id: '/components/text-field', label: 'Text Field' },
  { id: '/components/helper-text', label: 'Helper Text' },
  { id: '/components/search-field', label: 'Search Field' },
  { id: '/components/text-area', label: 'Text Area' },
  { id: '/components/checkbox', label: 'Checkbox' },
  { id: '/components/date-of-birth-field', label: 'Date of Birth' },
  { id: '/components/mobile-number-field', label: 'Mobile Number' },
  { id: '/components/pin-code-field', label: 'Pin Code' },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Tabs
      items={NAV_ITEMS}
      value={pathname}
      onChange={(id) => router.push(id)}
      className=""
    />
  );
}
