# gigi-ux

React component library and Storybook for the Gigi Pizzeria ordering experience.

## Run the landing page

```bash
npm install
npm run site
```

Create its production build with `npm run build-site`.

## Run Storybook

```bash
npm install
npm run storybook
```

## Build the library

```bash
npm run typecheck
npm run build
npm run build-storybook
```

Import components and the bundled design tokens:

```tsx
import { Button, QuantityControl } from 'gigi-ux';
import 'gigi-ux/styles.css';
```

The CSS expects DM Sans and includes a Google Fonts import for Storybook. Applications that self-host fonts can override `--gigi-font`.

`HomePage` accepts asset URL props for the logo, pizza imagery, menu pages, and menu PDF. The bundled demonstration site serves these from `public/`.
