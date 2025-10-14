import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with VoltSense specialists to assess your smart home energy goals, integrations, and deployment timelines.",
};

const stats = [
  {
    label: "Average ROI",
    value: "14 months",
  },
  {
    label: "Support coverage",
    value: "24/7 with regional experts",
  },
  {
    label: "Deployments",
    value: "12k hybrid energy homes",
  },
];

export default function ContactPage() {
  return (
    <div className="grid gap-12 pb-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
      <section className="space-y-6">
        <span className="text-[var(--text-kicker)] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-brand-primary)]">
          Let’s talk energy
        </span>
        <h1 className="text-[var(--text-3xl)] text-[color:var(--color-foreground)]">
          Share your roadmap and we’ll map the volts.
        </h1>
        <p className="text-[color:var(--color-neutral-body)] text-[var(--text-base)]">
          Tell us about existing hardware, automation goals, and the timeline
          you’re targeting. A VoltSense solutions specialist will respond within
          one business day with next steps.
        </p>
        <div className="grid gap-6 rounded-[var(--radius-lg)] border border-[color:var(--color-neutral-border)] bg-white/70 p-6 shadow-[0_18px_40px_rgba(12,44,84,0.12)]">
          <h2 className="text-sm font-semibold text-[color:var(--color-foreground)]">
            What to expect
          </h2>
          <ul className="grid gap-3 text-sm text-[color:var(--color-neutral-body)]">
            <li>⏱️ 30-minute discovery call with an energy engineer.</li>
            <li>📘 Tailored energy playbook summarising opportunities.</li>
            <li>🔐 Optional sandbox access for developer teams.</li>
          </ul>
        </div>

        <dl className="grid gap-4 text-sm text-[color:var(--color-neutral-body)] sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[var(--radius-sm)] border border-[color:var(--color-neutral-border)] bg-white/70 p-4 shadow-[0_12px_28px_rgba(12,44,84,0.1)]">
              <dt className="text-xs uppercase tracking-[0.24em] text-[color:var(--color-brand-primary)]">
                {item.label}
              </dt>
              <dd className="mt-1 text-[color:var(--color-foreground)] text-lg font-semibold">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <ContactForm />
    </div>
  );
}
