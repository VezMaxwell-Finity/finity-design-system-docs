import { Section, CodeBlock } from '@/app/_components/doc';
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
  { name: 'Flag', component: Icons.Flag },
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

function IconGrid({ icons }: { icons: { name: string; component: React.ComponentType<Icons.IconProps> }[] }) {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-[var(--spacing-4)]">
      {icons.map(({ name, component: IconComponent }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-[var(--spacing-8)] p-[var(--spacing-12)] rounded-lg hover:bg-[var(--color-bg-subtle)] transition-colors"
        >
          <IconComponent size={24} />
          <span className="text-[10px] text-[var(--color-text-tertiary)] text-center leading-tight truncate w-full">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function IconsPage() {
  return (
    <main>

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-subtle)] px-[var(--spacing-64)] py-[var(--spacing-64)] min-h-[480px] flex items-center">
        <div className="w-full">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">
            Foundation
          </p>
          <h1 className="text-[5rem] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-text-default)] mb-[var(--spacing-24)]">
            Icons
          </h1>
          <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[560px]">
            Visual symbols that quickly convey actions, concepts, and categories — making it easier for
            users to understand and navigate an interface at a glance.
          </p>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="Arrows" description="Used to indicate direction, navigation, or progression. They appear in buttons, dropdowns, and other navigational elements.">
          <IconGrid icons={arrowIcons} />
        </Section>

        <Section title="General" description="Widely used across platforms to visually represent general functions and menu options.">
          <IconGrid icons={generalIcons} />
        </Section>

        <Section title="Feedback" description="Indicate action status or system response. Consistently used in alerts, helper text, and notifications.">
          <IconGrid icons={feedbackIcons} />
        </Section>

        <Section title="Sizes" description="Icons can be rendered at different sizes using the size prop.">
          <div className="flex items-end gap-[var(--spacing-32)]">
            {[16, 20, 24, 32, 40, 48].map((size) => (
              <div key={size} className="flex flex-col items-center gap-[var(--spacing-12)]">
                <Icons.Home size={size} />
                <span className="text-[11px] text-[var(--color-text-tertiary)]">{size}px</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Usage" last>
          <CodeBlock>{`import { Home, Search, ChevronRight, ErrorFilled } from '@finity/design-system';

// Default size (24px), inherits currentColor
<Home />

// Custom size
<Search size={20} />

// Custom color
<ChevronRight color="var(--color-coral-500)" />

// Feedback icons have semantic colors by default
<ErrorFilled />    // Red
<SuccessFilled />  // Green
<WarningFilled />  // Yellow
<InfoFilled />     // Grey`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
