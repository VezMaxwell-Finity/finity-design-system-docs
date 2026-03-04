import { HeadingLG } from '@/components/typography';

const colorScales = {
  grey: {
    label: 'Neutral',
    description: 'Greys are neutral colours and make up the backgrounds, text, dividers, and other elements throughout the interface.',
    colors: [
      { shade: '50',  value: '#FAFAFA' },
      { shade: '100', value: '#F5F5F5' },
      { shade: '200', value: '#E5E5E5' },
      { shade: '300', value: '#D4D4D4' },
      { shade: '400', value: '#A3A3A3' },
      { shade: '500', value: '#737373' },
      { shade: '600', value: '#525252' },
      { shade: '700', value: '#404040' },
      { shade: '800', value: '#262626' },
      { shade: '900', value: '#171717' },
    ],
  },
  coral: {
    label: 'Coral',
    accent: { name: 'Finity Coral', value: '#FF885D' },
    colors: [
      { shade: '50',  value: '#FFF4ED' },
      { shade: '100', value: '#FEE6D6' },
      { shade: '200', value: '#FCC8AC' },
      { shade: '300', value: '#FAA277' },
      { shade: '400', value: '#F77445' },
      { shade: '500', value: '#F44C1B' },
      { shade: '600', value: '#E53311' },
      { shade: '700', value: '#BE2310' },
      { shade: '800', value: '#971D15' },
      { shade: '900', value: '#7A1B14' },
    ],
  },
  teal: {
    label: 'Teal',
    accent: { name: 'Finity Teal', value: '#8FBDBE' },
    colors: [
      { shade: '50',  value: '#F4F9F9' },
      { shade: '100', value: '#D9EEEC' },
      { shade: '200', value: '#B3DCDA' },
      { shade: '300', value: '#85C3C2' },
      { shade: '400', value: '#5AA3A4' },
      { shade: '500', value: '#42888A' },
      { shade: '600', value: '#336B6E' },
      { shade: '700', value: '#2C5659' },
      { shade: '800', value: '#274548' },
      { shade: '900', value: '#102023' },
    ],
  },
  red: {
    label: 'Red / Error',
    description: 'Red represents an error state and is used for destructive, invalid, or negative scenarios. For example, it can be used in the border of a failed entry.',
    colors: [
      { shade: '50',  value: '#FEF2F2' },
      { shade: '100', value: '#FEE2E2' },
      { shade: '200', value: '#FECACA' },
      { shade: '300', value: '#FCA5A5' },
      { shade: '400', value: '#F87171' },
      { shade: '500', value: '#EF4444' },
      { shade: '600', value: '#DC2626' },
      { shade: '700', value: '#B91C1C' },
      { shade: '800', value: '#991B1B' },
      { shade: '900', value: '#7F1D1D' },
    ],
  },
  yellow: {
    label: 'Yellow / Warning',
    description: 'Yellow is used to represent situations that are potentially destructive or that may need the attention of the user. These colors can be used in system notifications or general user guidance.',
    colors: [
      { shade: '50',  value: '#FEFCE8' },
      { shade: '100', value: '#FEF9C3' },
      { shade: '200', value: '#FEF08A' },
      { shade: '300', value: '#FDE047' },
      { shade: '400', value: '#FACC15' },
      { shade: '500', value: '#EAB308' },
      { shade: '600', value: '#CA8A04' },
      { shade: '700', value: '#A16207' },
      { shade: '800', value: '#854D0E' },
      { shade: '900', value: '#713F12' },
    ],
  },
  green: {
    label: 'Green / Success',
    description: 'Applies when there is a positive action, current state, or successful confirmation.',
    colors: [
      { shade: '50',  value: '#F0FDF4' },
      { shade: '100', value: '#DCFCE7' },
      { shade: '200', value: '#BBF7D0' },
      { shade: '300', value: '#86EFAC' },
      { shade: '400', value: '#4ADE80' },
      { shade: '500', value: '#22C55E' },
      { shade: '600', value: '#16A34A' },
      { shade: '700', value: '#15803D' },
      { shade: '800', value: '#166534' },
      { shade: '900', value: '#14532D' },
    ],
  },
};

function isDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

function ColorSwatch({ shade, value }: { shade: string; value: string }) {
  return (
    <div className="flex flex-col gap-[var(--spacing-8)]">
      <div
        className="rounded-lg border border-[var(--color-border-subtle)] w-full"
        style={{ backgroundColor: value, height: '80px' }}
      />
      <div className="flex flex-col gap-[var(--spacing-2)]">
        <span className="text-compact-semibold">{shade}</span>
        <span className="text-compact-medium text-[var(--color-text-tertiary)]">{value}</span>
      </div>
    </div>
  );
}

function ColorScale({
  scale,
}: {
  scale: {
    label: string;
    description?: string;
    accent?: { name: string; value: string };
    colors: { shade: string; value: string }[];
  };
}) {
  return (
    <div>
      <h3 className="text-compact-semibold mb-[var(--spacing-4)]">{scale.label}</h3>
      {scale.description && (
        <p className="text-compact-medium text-[var(--color-text-secondary)] mb-[var(--spacing-16)]">
          {scale.description}
        </p>
      )}
      <div className="grid grid-cols-5 gap-[var(--spacing-12)]">
        {scale.colors.map((color) => (
          <ColorSwatch key={color.shade} shade={color.shade} value={color.value} />
        ))}
      </div>
      {scale.accent && (
        <div className="mt-[var(--spacing-24)] flex items-center gap-[var(--spacing-16)]">
          <div
            className="rounded-lg border border-[var(--color-border-subtle)] shrink-0"
            style={{ backgroundColor: scale.accent.value, width: '80px', height: '80px' }}
          />
          <div className="flex flex-col gap-[var(--spacing-2)]">
            <span className="text-compact-semibold">{scale.accent.name}</span>
            <span className="text-compact-medium text-[var(--color-text-tertiary)]">
              {scale.accent.value}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ColorsPage() {
  return (
    <main>
      {/* Header */}
      <header className="mb-[var(--spacing-48)]">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-[var(--spacing-8)]">
          Foundation
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-[var(--spacing-16)]">
          Colours
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          Bringing the result of headline stories and groups, we use a defined colour palette
          throughout our interfaces.
        </p>
      </header>

      {/* Primary colours */}
      <section className="mb-[var(--spacing-48)]">
        <HeadingLG className="mb-[var(--spacing-16)]">Primary colours</HeadingLG>
        <p className="text-compact-medium text-[var(--color-text-secondary)] mb-[var(--spacing-32)]">
          These are the main colours within the style guide that make up the majority of the UI designs.
          They are applied to support visual elements like elements, buttons icons, dividers, and for
          backgrounds and fills.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-[var(--spacing-32)] space-y-[var(--spacing-32)]">

          {/* Base colour */}
          <div>
            <h3 className="text-compact-semibold mb-[var(--spacing-16)]">Base colour</h3>
            <div className="flex gap-[var(--spacing-16)]">
              {[
                { label: 'Black', value: '#000000' },
                { label: 'White', value: '#FFFFFF' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-[var(--spacing-8)]">
                  <div
                    className="rounded-lg border border-[var(--color-border-subtle)]"
                    style={{ backgroundColor: value, width: '120px', height: '80px' }}
                  />
                  <div className="flex flex-col gap-[var(--spacing-2)]">
                    <span className="text-compact-semibold">{label}</span>
                    <span className="text-compact-medium text-[var(--color-text-tertiary)]">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral */}
          <ColorScale scale={colorScales.grey} />
        </div>
      </section>

      {/* Accent colours */}
      <section className="mb-[var(--spacing-48)]">
        <HeadingLG className="mb-[var(--spacing-16)]">Accent colours</HeadingLG>
        <p className="text-compact-medium text-[var(--color-text-secondary)] mb-[var(--spacing-32)]">
          Accent colours are used in complement to the primary colours within the UI, primarily for
          interactive buttons. These colors should be applied sparingly as an accent alongside the primary colours.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-[var(--spacing-32)] space-y-[var(--spacing-32)]">
          <ColorScale scale={colorScales.coral} />
          <ColorScale scale={colorScales.teal} />
        </div>
      </section>

      {/* Semantic colours */}
      <section className="mb-[var(--spacing-48)]">
        <HeadingLG className="mb-[var(--spacing-16)]">Semantic colours</HeadingLG>
        <p className="text-compact-medium text-[var(--color-text-secondary)] mb-[var(--spacing-32)]">
          Semantic colours can be used to communicate various statuses across the UI.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-[var(--spacing-32)] space-y-[var(--spacing-32)]">
          <ColorScale scale={colorScales.red} />
          <ColorScale scale={colorScales.yellow} />
          <ColorScale scale={colorScales.green} />
        </div>
      </section>
    </main>
  );
}
