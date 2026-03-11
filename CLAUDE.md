# Finity Design System — Claude Instructions

## Design Tokens

Always use design tokens from `src/tokens/` when building components. Never hardcode colour, spacing, or typography values.

Tokens are available as CSS variables defined in `src/app/globals.css` and as TypeScript exports from `src/tokens/`:

- `src/tokens/colors.ts` — colour palette and semantic aliases (`--color-grey-900`, `--color-text-secondary`, `--color-border-subtle`, etc.)
- `src/tokens/spacing.ts` — spacing scale (`--spacing-4`, `--spacing-8`, `--spacing-12`, …, `--spacing-48`)
- `src/tokens/typography.ts` — font sizes, line heights, letter spacing

### Tailwind v4 Spacing Caveat

This project uses Tailwind CSS v4 with `@theme inline`. The custom `--spacing-*` tokens override Tailwind's numeric utilities for all defined values. Always use the explicit CSS variable syntax to avoid conflicts:

```tsx
// WRONG — h-12 resolves to 12px, not 48px
className="h-12 px-4"

// CORRECT
className="h-[var(--spacing-48)] px-[var(--spacing-16)]"
```

### CSS Variable Usage in Tailwind

```tsx
// Colours
className="bg-[var(--color-grey-900)] text-[var(--color-text-secondary)]"

// Spacing
className="gap-[var(--spacing-8)] p-[var(--spacing-16)]"
```

---

## Existing Components

Always check `src/components/` before creating a new component. Reuse and extend existing components rather than duplicating logic.

| Component | Path | Notes |
|-----------|------|-------|
| `Button` | `src/components/button/Button.tsx` | Variants: `primary`, `secondary`, `tertiary`, `emphasis`, `danger`. Sizes: `large`, `medium`, `small`. Supports `iconLeft`, `iconRight`, `iconOnly`, `loading`, `disabled`. |
| `TextField` | `src/components/text-field/TextField.tsx` | Sizes: `large`, `medium`. Supports `label`, `helperText`, `errorMessage`, `prefix`, `suffix`, `suffixIcon`, `onClear`. |
| `Tabs` | `src/components/tabs/Tabs.tsx` | Used for navigation. Props: `items`, `value`, `onChange`. |
| `Typography` | `src/components/typography/Text.tsx` | Heading and body text components. |
| `Icons` | `src/components/icons/` | Icon components by category: `arrows.tsx`, `general.tsx`, `feedback.tsx`. Always use these — do not add new icon packages. |
| `HelperText` | `src/components/helper-text/HelperText.tsx` | Types: `default`, `error`, `success`, `warning`. Renders an icon + message row. |
| `Nav` | `src/components/nav/Nav.tsx` | Legacy tab nav — no longer used in layout. |
| `Sidebar` | `src/components/sidebar/Sidebar.tsx` | Global dark sidebar navigation, included in `src/app/layout.tsx`. Add new routes to the `NAV` array here, not in Nav.tsx. Sections: Foundations, Components. |
| `SearchField` | `src/components/search-field/SearchField.tsx` | Single-line search input. Props: `value`, `onChange`, `onClear`, `placeholder`. Shows clear button when value is non-empty. |
| `TextArea` | `src/components/text-area/TextArea.tsx` | Multi-line text input. Props: `label`, `helperText`, `errorMessage`, `maxLength` (shows character counter), `readOnly`. |
| `Checkbox` | `src/components/checkbox/Checkbox.tsx` | Checkbox input. Props: `label` (ReactNode), `checked`, `onChange`, `indeterminate`, `error`, `disabled`. Supports controlled and uncontrolled usage. |

---

## Project Structure

```
src/
  app/              # Next.js App Router pages (documentation site)
  components/       # Reusable design system components
  tokens/           # Design token definitions (TS + CSS variables)
  index.ts          # Library entry point — exports all components
```

## Component Conventions

- All components live in `src/components/<name>/` with a matching `index.ts` barrel export
- New components must be exported from `src/index.ts`
- Use `forwardRef` for input/form components
- Mark files `'use client'` only when they use hooks or browser APIs
- Component files follow the pattern: `ComponentName.tsx` + `index.ts`

Whenever you create a new component:
1. Add it to the component table in this file with its path and key props
2. Add a route entry to the `NAV` array in `src/components/sidebar/Sidebar.tsx` under the Components section
3. Create a documentation page at `src/app/components/<name>/page.tsx`
