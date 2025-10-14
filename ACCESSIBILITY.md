# Accessibility Checklist

- **Semantic landmarks**: Header, main, and footer are present across pages via the shared layout.
- **Descriptive headings**: Each section uses a logical heading hierarchy (`h1` followed by `h2`/`h3`).
- **Accessible forms**: The contact form uses `<label>` for every control, inline validation messaging with `aria-describedby`, and clear error text.
- **Keyboard support**: Focus-visible outlines rely on a custom focus shadow token to maintain contrast. Buttons and links include `hover` + `focus-visible` states.
- **Alt text & aria**: Informative images include descriptive `alt` copy. Decorative icons (`role="presentation"`) are hidden from assistive tech.
- **Color contrast**: Foreground/background pairings pass WCAG AA (tested against #0F62FE brand color and neutral surfaces).
- **Motion reduction**: No motion effects beyond subtle hover elevation; nothing auto-animates on load.
- **ARIA feedback**: Form success/error states render `role="status"`/`role="alert"` regions for screen reader announcements.
