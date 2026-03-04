import {
  HeadingXL,
  HeadingLG,
  HeadingMD,
  HeadingSM,
  BodySemibold,
  BodyMedium,
  Body,
  CompactSemibold,
  CompactMedium,
  SmallSemibold,
} from '@/components/typography';

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16 max-w-4xl mx-auto">
      {/* Navigation */}
      <nav className="mb-8 flex gap-4 flex-wrap">
        <a href="/" className="text-compact-semibold text-[var(--color-coral-500)] border-b-2 border-[var(--color-coral-500)] pb-1">
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
        <a href="/import-mapper" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Import Mapper
        </a>
      </nav>

      {/* Header */}
      <header className="mb-16">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-2">
          Foundation
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-4">
          Typography
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          Our typography is flexible and modular, with a focus on legibility and accessibility.
        </p>
      </header>

      {/* Font Family */}
      <section className="mb-16 pb-8 border-b border-[var(--color-text-tertiary)]/20">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-2">
          Font family
        </p>
        <p className="text-[3.5rem] font-medium mb-6">
          PP Neue Montreal
        </p>
        <p className="text-body-medium text-[var(--color-text-secondary)]">
          Note: You&apos;ll need to obtain and install the PP Neue Montreal font for the design system to render correctly.
          <br />
          The system falls back to system-ui if the font is not available.
        </p>
      </section>

      {/* Headings */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Headings</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">
          <TypographyRow
            token="text-heading-xl"
            specs="32px / 40px / 0.2px / Semibold"
          >
            <HeadingXL>Heading Extra Large / Semibold</HeadingXL>
          </TypographyRow>

          <TypographyRow
            token="text-heading-lg"
            specs="24px / 32px / 0.2px / Semibold"
          >
            <HeadingLG>Heading Large / Semibold</HeadingLG>
          </TypographyRow>

          <TypographyRow
            token="text-heading-md"
            specs="20px / 28px / 0.2px / Semibold"
          >
            <HeadingMD>Heading Medium / Semibold</HeadingMD>
          </TypographyRow>

          <TypographyRow
            token="text-heading-sm"
            specs="18px / 25px / 0.2px / Semibold"
          >
            <HeadingSM>Heading Small / Semibold</HeadingSM>
          </TypographyRow>
        </div>
      </section>

      {/* Body */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Body</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">
          <TypographyRow
            token="text-body-semibold"
            specs="16px / 22px / 0.35px / Semibold"
          >
            <BodySemibold>Body / Semibold</BodySemibold>
          </TypographyRow>

          <TypographyRow
            token="text-body-medium"
            specs="16px / 22px / 0.35px / Medium"
          >
            <BodyMedium>Body / Medium</BodyMedium>
          </TypographyRow>

          <TypographyRow
            token="text-body-regular"
            specs="16px / 22px / 0.35px / Regular"
          >
            <Body>Body / Regular</Body>
          </TypographyRow>
        </div>
      </section>

      {/* Compact */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Compact</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">
          <TypographyRow
            token="text-compact-semibold"
            specs="14px / 20px / 0.3px / Semibold"
          >
            <CompactSemibold>Compact / Semibold</CompactSemibold>
          </TypographyRow>

          <TypographyRow
            token="text-compact-medium"
            specs="14px / 20px / 0.3px / Medium"
          >
            <CompactMedium>Compact / Medium</CompactMedium>
          </TypographyRow>
        </div>
      </section>

      {/* Small */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Small</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">
          <TypographyRow
            token="text-small-semibold"
            specs="12px / 16px / 0.3px / Semibold"
          >
            <SmallSemibold>Small / Semibold</SmallSemibold>
          </TypographyRow>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Usage Examples</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-6">
          <div className="p-6 bg-[var(--foreground)]/5 rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Using CSS utility classes`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`<h1 className="text-heading-xl">Page Title</h1>
<p className="text-body-medium">Body text content</p>
<span className="text-compact-semibold">Label</span>`}
            </pre>
          </div>

          <div className="p-6 bg-[var(--foreground)]/5 rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Using React components`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`import { HeadingXL, BodyMedium, CompactSemibold } from '@/components/typography';

<HeadingXL>Page Title</HeadingXL>
<BodyMedium>Body text content</BodyMedium>
<CompactSemibold>Label</CompactSemibold>`}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}

function TypographyRow({
  token,
  specs,
  children,
}: {
  token: string;
  specs: string;
  children: React.ReactNode;
}) {
  // Parse specs string like "32px / 40px / 0.2px / Semibold"
  const [fontSize, lineHeight, letterSpacing, weight] = specs.split(' / ');

  return (
    <div className="grid md:grid-cols-[180px_1fr_200px] gap-4 md:gap-8 items-center pb-6 border-b border-[var(--foreground)]/10">
      {/* Token badge */}
      <div>
        <span className="inline-block bg-[var(--foreground)]/10 px-3 py-1.5 rounded-full text-compact-medium">
          {token}
        </span>
      </div>

      {/* Preview */}
      <div>{children}</div>

      {/* Specs */}
      <div className="text-compact-medium text-[var(--color-text-secondary)] space-y-0.5">
        <div className="flex justify-between gap-4">
          <span className="text-[var(--color-text-tertiary)]">Size</span>
          <span>{fontSize}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-[var(--color-text-tertiary)]">Line height</span>
          <span>{lineHeight}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-[var(--color-text-tertiary)]">Tracking</span>
          <span>{letterSpacing}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-[var(--color-text-tertiary)]">Weight</span>
          <span>{weight}</span>
        </div>
      </div>
    </div>
  );
}
