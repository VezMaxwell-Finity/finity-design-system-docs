import { HeadingLG } from '@/components/typography';
import * as Icons from '@/components/icons';

const arrowIcons = [
  { name: 'ArrowUp', component: Icons.ArrowUp },
  { name: 'ArrowDown', component: Icons.ArrowDown },
  { name: 'ArrowLeft', component: Icons.ArrowLeft },
  { name: 'ArrowRight', component: Icons.ArrowRight },
  { name: 'ArrowUpRight', component: Icons.ArrowUpRight },
  { name: 'ChevronUp', component: Icons.ChevronUp },
  { name: 'ChevronDown', component: Icons.ChevronDown },
  { name: 'ChevronLeft', component: Icons.ChevronLeft },
  { name: 'ChevronRight', component: Icons.ChevronRight },
  { name: 'CaretUp', component: Icons.CaretUp },
  { name: 'CaretDown', component: Icons.CaretDown },
  { name: 'CaretLeft', component: Icons.CaretLeft },
  { name: 'CaretRight', component: Icons.CaretRight },
];

const generalIcons = [
  { name: 'Add', component: Icons.Add },
  { name: 'AddSquare', component: Icons.AddSquare },
  { name: 'Bank', component: Icons.Bank },
  { name: 'Calendar', component: Icons.Calendar },
  { name: 'Check', component: Icons.Check },
  { name: 'CheckCircle', component: Icons.CheckCircle },
  { name: 'Clock', component: Icons.Clock },
  { name: 'Close', component: Icons.Close },
  { name: 'Delete', component: Icons.Delete },
  { name: 'Download', component: Icons.Download },
  { name: 'Edit', component: Icons.Edit },
  { name: 'File', component: Icons.File },
  { name: 'Filter', component: Icons.Filter },
  { name: 'Globe', component: Icons.Globe },
  { name: 'Home', component: Icons.Home },
  { name: 'Help', component: Icons.Help },
  { name: 'Info', component: Icons.Info },
  { name: 'Lock', component: Icons.Lock },
  { name: 'Mail', component: Icons.Mail },
  { name: 'Menu', component: Icons.Menu },
  { name: 'Pin', component: Icons.Pin },
  { name: 'Search', component: Icons.Search },
  { name: 'Settings', component: Icons.Settings },
  { name: 'Star', component: Icons.Star },
  { name: 'Upload', component: Icons.Upload },
  { name: 'User', component: Icons.User },
  { name: 'Users', component: Icons.Users },
  { name: 'Wallet', component: Icons.Wallet },
  { name: 'Warning', component: Icons.Warning },
];

const feedbackIcons = [
  { name: 'ErrorFilled', component: Icons.ErrorFilled },
  { name: 'InfoFilled', component: Icons.InfoFilled },
  { name: 'SuccessFilled', component: Icons.SuccessFilled },
  { name: 'WarningFilled', component: Icons.WarningFilled },
  { name: 'CloseFilled', component: Icons.CloseFilled },
];

export default function IconsPage() {
  return (
    <main>
      {/* Header */}
      <header className="mb-16">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-2">
          Foundation
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-4">
          Icons
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          Icons are visual symbols designed to quickly convey actions, concepts, and categories,
          making it easier for users to understand and navigate an interface.
        </p>
      </header>

      {/* Arrow Icons */}
      <section className="mb-16">
        <HeadingLG className="mb-4">Arrows</HeadingLG>
        <p className="text-body-medium text-[var(--color-text-secondary)] mb-6">
          Used to indicate direction, navigation, or progression. They appear in buttons, dropdowns, paginations, and other navigational elements to guide user flow.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <IconGrid icons={arrowIcons} />
        </div>
      </section>

      {/* General Icons */}
      <section className="mb-16">
        <HeadingLG className="mb-4">General</HeadingLG>
        <p className="text-body-medium text-[var(--color-text-secondary)] mb-6">
          Widely used across our platforms to visually represent general functions and menu options.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <IconGrid icons={generalIcons} />
        </div>
      </section>

      {/* Feedback Icons */}
      <section className="mb-16">
        <HeadingLG className="mb-4">Feedback / Helper</HeadingLG>
        <p className="text-body-medium text-[var(--color-text-secondary)] mb-6">
          These icons indicate action status or system response and are consistently used in alerts, toasts, and notifications for clarity.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <IconGrid icons={feedbackIcons} />
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <HeadingLG className="mb-4">Sizes</HeadingLG>
        <p className="text-body-medium text-[var(--color-text-secondary)] mb-6">
          Icons can be rendered at different sizes using the size prop.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <div className="flex items-end gap-8">
            {[16, 20, 24, 32, 40, 48].map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Icons.Home size={size} />
                <span className="text-compact-medium text-[var(--color-text-tertiary)]">{size}px</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Usage</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-6">
          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Import and use icons`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`import { Home, Search, ChevronRight, ErrorFilled } from '@/components/icons';

// Default size (24px), inherits color
<Home />

// Custom size
<Search size={20} />

// Custom color
<ChevronRight color="var(--color-coral-500)" />

// Feedback icons have semantic colors by default
<ErrorFilled />  {/* Red */}
<SuccessFilled />  {/* Green */}`}
            </pre>
          </div>

          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Adding custom icons from Figma`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`// 1. Export SVG from Figma (24x24 viewBox)
// 2. Use createIcon helper:

import { createIcon } from '@/components/icons';

export const MyIcon = createIcon(
  <path d="M12 2L2 7l10 5 10-5-10-5z" />,
  'MyIcon'
);

// 3. Or create a custom component for filled icons`}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}

function IconGrid({ icons }: { icons: { name: string; component: React.ComponentType<Icons.IconProps> }[] }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
      {icons.map(({ name, component: IconComponent }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-[var(--color-bg-muted)] transition-colors"
        >
          <IconComponent size={24} />
          <span className="text-[10px] text-[var(--color-text-tertiary)] text-center truncate w-full">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
