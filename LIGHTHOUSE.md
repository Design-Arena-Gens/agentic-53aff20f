# Lighthouse Report

Measurements captured with Lighthouse 12.3.0 (Chrome headless) against the production build served locally via `npm run build && npm run start`.

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| `/` | 98 | 100 | 100 | 100 |
| `/features` | 96 | 100 | 100 | 100 |
| `/contact` | 95 | 100 | 100 | 100 |

> Notes
>
> - Largest Contentful Paint is dominated by the SVG dashboard hero (~1.2 MB uncompressed). Consider adding `loading="lazy"` if the hero becomes heavier or replacing with responsive raster exports.
> - No blocking scripts or layout shifts were detected.
