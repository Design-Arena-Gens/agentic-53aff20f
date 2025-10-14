import Link from "next/link";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
  { href: "/docs/design-system", label: "Design System" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 rounded-[var(--radius-lg)] border border-[color:var(--color-neutral-border)] bg-white/80 px-6 py-8 shadow-[0_18px_40px_rgba(12,26,44,0.12)] backdrop-blur">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-brand-primary)]">
            VoltSense
          </span>
          <p className="max-w-xs text-sm text-[color:var(--color-neutral-body)]">
            Control your energy. Save every month. Precision monitoring for
            every kilowatt.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-end gap-4 text-sm text-[color:var(--color-neutral-body)]">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-[color:var(--color-brand-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-6 border-t border-dashed border-[color:var(--color-neutral-border)] pt-4 text-xs text-[color:var(--color-neutral-body)]">
        © {year} VoltSense Inc. All rights reserved.
      </div>
    </footer>
  );
}
