# Half-and-Half UI Components — Integration Handoff

**Added:** 2026-07-29  
**Library:** `@gigi/ux`  
**Initial consumer:** `gigi-ordering/src/screens/Configure.tsx`

## Purpose

The half-and-half pizza configurator needs dense, touch-friendly single and
multiple-choice controls, plus an Add-to-cart action that is visibly disabled
until both required halves are selected. Those capabilities now live in
`gigi-ux` so other ordering flows can reuse them.

## New component: `ChoiceButtonGroup`

Import it from the public library entry point:

```tsx
import { ChoiceButtonGroup } from "@gigi/ux/index.mjs";
```

### Props

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `options` | `readonly { id: string; label: ReactNode }[]` | required | Buttons to render |
| `selectedIds` | `readonly string[]` | `[]` | Controls selected styling and `aria-pressed` |
| `onSelect` | `(optionId: string) => void` | — | Reports the pressed option; the consumer owns selection rules |
| `columns` | `1 \| 2` | `1` | Uses the standard stack or compact two-column layout |
| `ariaLabel` | `string` | — | Accessible name for the button group |
| `showSelectionMark` | `boolean` | `false` | Adds a decorative checkmark to selected buttons |
| `className` | `string` | `""` | Optional layout hook |

The component deliberately does not decide whether selection is single or
multiple. The ordering state machine owns that behavior; this component only
renders controlled state and reports button presses.

### Single-choice example

```tsx
<ChoiceButtonGroup
  ariaLabel="Left half"
  columns={2}
  selectedIds={leftHalf ? [leftHalf] : []}
  options={pizzaOptions}
  onSelect={(optionId) =>
    send({ type: "SET_SINGLE", groupId: "halfLeft", optionId })
  }
/>
```

### Multiple-choice example

```tsx
<ChoiceButtonGroup
  ariaLabel="Left-half extras"
  columns={2}
  selectedIds={extraLeft}
  showSelectionMark
  options={toppingOptions}
  onSelect={(optionId) =>
    send({ type: "TOGGLE_MULTI", groupId: "extraLeft", optionId })
  }
/>
```

## Updated component: `StickyAction`

`StickyAction` now accepts:

```ts
disabled?: boolean
```

It forwards the value to its primary `Button`, providing the existing disabled
visual treatment and native button behavior.

```tsx
<StickyAction disabled={!canConfirm} onClick={addToCart}>
  Add to cart
</StickyAction>
```

## Styling dependency

The RMC setup keeps CSS in the sibling `gigi-static` package. The relevant
styles are in:

```text
gigi-static/src/css/ux.css
```

The compact layout uses `.gigi-choice-grid--compact`. Half-and-half section
cards and the pricing explanation use `.gigi-half-config-section` and
`.gigi-half-price-note`. Consumers outside the umbrella must include the
published Gigi stylesheet before using these components.

## Storybook

`src/ChoiceButtonGroup.stories.tsx` includes:

- a standard single-column group;
- a compact two-column group;
- a multiple-selection presentation with checkmarks.

The existing StickyAction stories continue to exercise its default state. Add a
disabled story if its presentation changes in the future.

## Integration checklist

1. Build `gigi-ux` before `gigi-ordering`.
2. Ensure the runtime import map resolves `@gigi/ux/index.mjs`.
3. Include `gigi-static/src/css/ux.css`.
4. Keep selection controlled in the consuming state machine.
5. Supply a meaningful `ariaLabel`.
6. Disable `StickyAction` while required selections are incomplete.
7. Run `npm run typecheck`, the consumer tests, and a full-app browser pass.
