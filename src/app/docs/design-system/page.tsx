import type { Metadata } from "next";
import { colors, typography, spacingScale, radii, components } from "@/lib/design-system";

type ScaleEntry = [string, number];

type TypographyEntry = [string, string];

type ComponentEntry = [string, Record<string, string | number | Record<string, string | number>>];

export const metadata: Metadata = {
  title: "Design System",
  description: "VoltSense mini design system covering colors, typography, spacing, components, and usage in code.",
};

export default function DesignSystemPage() {
  return (
    <div className="space-y-10 pb-16">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-brand-primary)]">Design System</p>
        <h1 className="text-[var(--text-2xl)] font-semibold text-[color:var(--color-foreground)]">
          VoltSense UI foundations
        </h1>
        <p className="max-w-2xl text-[color:var(--color-neutral-body)]">
          Core tokens bridge Figma and code. Tailwind utility classes reference these CSS variables so any brand refresh stays consistent.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">Colors</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(colors).map(([group, value]) => {
            if (typeof value === "string") {
              return (
                <article key={group} className="rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white/80 p-4 shadow-[0_12px_30px_rgba(12,44,84,0.12)]">
                  <div
                    className="h-16 w-full rounded-[var(--radius-sm)]"
                    style={{ backgroundColor: value }}
                  />
                  <h3 className="mt-3 text-sm font-semibold text-[color:var(--color-foreground)]">{group}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-neutral-body)]">{value}</p>
                </article>
              );
            }

            return Object.entries(value as Record<string, string>).map(([variant, color]) => (
              <article key={`${group}-${variant}`} className="rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white/80 p-4 shadow-[0_12px_30px_rgba(12,44,84,0.12)]">
                <div
                  className="h-16 w-full rounded-[var(--radius-sm)]"
                  style={{ backgroundColor: color }}
                />
                <h3 className="mt-3 text-sm font-semibold text-[color:var(--color-foreground)]">{`${group}.${variant}`}</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-neutral-body)]">{color}</p>
              </article>
            ));
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">Typography scale</h2>
        <table className="w-full overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white text-sm shadow-[0_12px_30px_rgba(12,44,84,0.12)]">
          <thead className="bg-[color:var(--color-neutral-soft)] text-left text-[color:var(--color-foreground)]">
            <tr>
              <th className="px-4 py-3">Token</th>
              <th className="px-4 py-3">CSS Clamp</th>
              <th className="px-4 py-3">Usage</th>
            </tr>
          </thead>
          <tbody>
            {(Object.entries(typography) as TypographyEntry[]).map(([token, value]) => (
              <tr key={token} className="border-t border-[color:var(--color-neutral-border)]">
                <th scope="row" className="px-4 py-3 text-left text-[color:var(--color-foreground)]">
                  {token}
                </th>
                <td className="px-4 py-3 text-[color:var(--color-neutral-body)]">{value.split(" ")[0]}</td>
                <td className="px-4 py-3 text-[color:var(--color-neutral-body)]">
                  {token === "display" && "Hero headline"}
                  {token === "3xl" && "Section headline"}
                  {token === "2xl" && "Key section intro"}
                  {token === "xl" && "Feature subhead"}
                  {token === "lg" && "Body large"}
                  {token === "base" && "Body default"}
                  {token === "sm" && "Fine print"}
                  {token === "kicker" && "Eyebrow text"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">Spacing & radii</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white p-4 shadow-[0_12px_30px_rgba(12,44,84,0.12)]">
            <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Spacing scale</h3>
            <ul className="mt-3 grid gap-2 text-xs text-[color:var(--color-neutral-body)]">
              {(Object.entries(spacingScale) as ScaleEntry[]).map(([token, value]) => (
                <li key={token} className="flex items-center justify-between">
                  <span>{token}</span>
                  <span>{value}px</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white p-4 shadow-[0_12px_30px_rgba(12,44,84,0.12)]">
            <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Corner radii</h3>
            <ul className="mt-3 grid gap-2 text-xs text-[color:var(--color-neutral-body)]">
              {Object.entries(radii).map(([token, value]) => (
                <li key={token} className="flex items-center justify-between">
                  <span>{token}</span>
                  <span>{value}px</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">Component primitives</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {(Object.entries(components) as ComponentEntry[]).map(([name, tokens]) => (
            <article key={name} className="rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white/90 p-4 shadow-[0_12px_30px_rgba(12,44,84,0.12)]">
              <h3 className="text-sm font-semibold text-[color:var(--color-foreground)] capitalize">{name}</h3>
              <dl className="mt-3 grid gap-2 text-xs text-[color:var(--color-neutral-body)]">
                {Object.entries(tokens).map(([tokenKey, tokenValue]) => (
                  <div key={tokenKey} className="flex items-center justify-between gap-3">
                    <dt className="uppercase tracking-[0.18em] text-[color:var(--color-brand-primary)]">
                      {tokenKey}
                    </dt>
                    <dd className="text-right">
                      {typeof tokenValue === "object"
                        ? JSON.stringify(tokenValue)
                        : tokenValue}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">Tailwind mapping</h2>
        <p className="max-w-3xl text-[color:var(--color-neutral-body)]">
          Global CSS variables flow into Tailwind by using utility classes such as <span className="font-mono">bg-[color:var(--color-brand-primary)]</span>, <span className="font-mono">rounded-[var(--radius-md)]</span>, and <span className="font-mono">shadow-[var(--shadow-card)]</span>. This keeps the design tokens single-sourced.
        </p>
      </section>
    </div>
  );
}
