import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="mb-12 rounded-[var(--radius-lg)] border border-[color:var(--color-neutral-border)] bg-white/70 px-5 py-4 shadow-[0_18px_40px_rgba(12,26,44,0.08)] backdrop-blur-lg sm:px-7">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--color-neutral-soft)]/70 px-4 py-2 transition md:px-5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-brand-primary)] text-white shadow-[0_12px_30px_rgba(15,98,254,0.35)] transition group-hover:scale-105">
            VS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-brand-primary)]">
              VoltSense
            </span>
            <span className="text-[0.82rem] text-[color:var(--color-neutral-body)]">
              Smart energy monitor
            </span>
          </span>
        </Link>

        <nav className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:gap-6">
          <ul className="flex flex-1 items-center gap-4 sm:flex-none sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[var(--color-neutral-body)] transition hover:text-[color:var(--color-brand-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(10,70,180,0.4)] transition hover:bg-[color:var(--color-brand-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-brand-primary)]"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
