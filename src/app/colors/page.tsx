import { Section } from '@/app/_components/doc';

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
    description: 'Red represents an error state and is used for destructive, invalid, or negative scenarios.',
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
    description: 'Yellow is used to represent situations that are potentially destructive or that may need the attention of the user.',
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

function ColorSwatch({ shade, value }: { shade: string; value: string }) {
  return (
    <div className="flex flex-col gap-[var(--spacing-8)]">
      <div
        className="rounded-lg border border-[var(--color-border-subtle)] w-full"
        style={{ backgroundColor: value, height: '80px' }}
      />
      <div className="flex flex-col gap-[var(--spacing-2)]">
        <span className="text-[13px] font-semibold text-[var(--color-text-default)]">{shade}</span>
        <span className="text-[12px] text-[var(--color-text-tertiary)]">{value}</span>
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
      <h3 className="text-[15px] font-semibold text-[var(--color-text-default)] mb-[var(--spacing-4)]">{scale.label}</h3>
      {scale.description && (
        <p className="text-[14px] text-[var(--color-text-secondary)] mb-[var(--spacing-16)] leading-relaxed">
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
          <div className="flex flex-col gap-[var(--spacing-4)]">
            <span className="text-[13px] font-semibold text-[var(--color-text-default)]">{scale.accent.name}</span>
            <span className="text-[12px] text-[var(--color-text-tertiary)]">{scale.accent.value}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ColorsPage() {
  return (
    <main>

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-subtle)] px-[var(--spacing-64)] py-[var(--spacing-64)] min-h-[480px] flex items-center">
        <div className="w-full">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-[var(--spacing-16)]">
            Foundation
          </p>
          <h1 className="text-[5rem] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-text-default)] mb-[var(--spacing-24)]">
            Colours
          </h1>
          <p className="text-[1.125rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[560px]">
            A defined colour palette brings consistency across all Finity products, from backgrounds and
            text to interactive elements and semantic states.
          </p>
        </div>
      </section>

      {/* ─── Content ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-[var(--spacing-64)] py-[var(--spacing-80)]">

        <Section title="Primary colours" description="The main colours that make up the majority of UI designs, applied to backgrounds, buttons, icons, and dividers.">
          <div className="space-y-[var(--spacing-32)]">
            <div>
              <h3 className="text-[15px] font-semibold text-[var(--color-text-default)] mb-[var(--spacing-16)]">Base colour</h3>
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
                    <div className="flex flex-col gap-[var(--spacing-4)]">
                      <span className="text-[13px] font-semibold text-[var(--color-text-default)]">{label}</span>
                      <span className="text-[12px] text-[var(--color-text-tertiary)]">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ColorScale scale={colorScales.grey} />
          </div>
        </Section>

        <Section title="Accent colours" description="Used to complement primary colours, primarily for interactive elements. Apply sparingly alongside primary colours.">
          <div className="space-y-[var(--spacing-48)]">
            <ColorScale scale={colorScales.coral} />
            <ColorScale scale={colorScales.teal} />
          </div>
        </Section>

        <Section title="Semantic colours" description="Communicate status and feedback across the interface." last>
          <div className="space-y-[var(--spacing-48)]">
            <ColorScale scale={colorScales.red} />
            <ColorScale scale={colorScales.yellow} />
            <ColorScale scale={colorScales.green} />
          </div>
        </Section>

      </div>
    </main>
  );
}
