# VoltSense Marketing Site

Responsive, accessible marketing experience for VoltSense – a fictional smart home energy monitor. Built with Next.js App Router, TypeScript, and Tailwind CSS 4 tokens.

## Getting Started

```bash
npm install
npm run dev
```

- App runs at `http://localhost:3000`
- Pages: `/`, `/features`, `/contact`, `/docs/design-system`

### Build & Lint

```bash
npm run lint
npm run build
npm start
```

## Design System ↔︎ Code Map

| Token group | Defined in | Used via |
|-------------|------------|----------|
| Colors, typography, spacing, radii, shadows | `src/app/globals.css` and `src/lib/design-system.ts` | Tailwind arbitrary values (`bg-[color:var(--color-brand-primary)]`, `rounded-[var(--radius-md)]`) |
| Buttons | `src/components/ui/button.tsx` | CTA on every page, handles disabled interaction |
| Cards | `src/components/ui/card.tsx` | Feature grids, highlight cards |
| Form fields | `src/components/forms/contact-form.tsx` | Contact form controls + validation states |
| Layout primitives | `src/components/layout/site-header.tsx`, `src/components/layout/site-footer.tsx` | Global navigation and footer |

View the live system at `/docs/design-system` for token swatches and usage guidance.

## Architecture

- **App Router** organizes public pages + the `/api/contact` endpoint.
- **Tailwind CSS 4 inline theme** provides a lightweight token layer mapped to CSS variables.
- **Functional components** compose reusable UI primitives (header, button, cards, form controls).
- **Static assets** live in `public/` (`logos/`, `icons/`, `images/`, `design/`).

## Contact API

`POST /api/contact`

- Payload: `{ name, email, company, message, timeline }`
- Validates required fields and email format.
- Logs submission metadata to the server console.
- Returns `{ message: "Submission received." }` on success.

## Design Deliverables

- Mini design system: `src/lib/design-system.ts` + `/docs/design-system` route.
- High-fidelity mockups: `public/design/*.svg` (desktop & mobile for Home, Features, Contact).
- Exported assets: `public/voltsense-logo.svg`, `public/logos/*.svg`, `public/icons/*.svg`, custom favicon at `src/app/icon.svg`.

## Deployment

Project is ready for Vercel: `npm run build` uses the default Next.js production build. Use the provided `vercel deploy --prod` command with the configured `VERCEL_TOKEN`.

