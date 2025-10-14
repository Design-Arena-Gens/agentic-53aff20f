import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Install & connect",
    copy: "Clamp VoltSense to mains, connect inverter & battery, then pair with the app in under 10 minutes.",
  },
  {
    number: "02",
    title: "Train the model",
    copy: "Machine learning observes daily rhythms, grid tariffs, and weather to predict the cleanest energy mix.",
  },
  {
    number: "03",
    title: "Automate savings",
    copy: "Adaptive schedules push and pull energy intelligently while reports surface clear insights every morning.",
  },
];

const featureBullets = [
  "Real-time inverter & grid monitoring",
  "Battery-friendly charge/discharge logic",
  "Home Assistant via MQTT, out of the box",
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-6 sm:gap-24">
      <section className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--color-neutral-border)] bg-white/80 px-6 py-12 shadow-[0_24px_60px_rgba(12,44,84,0.12)] backdrop-blur sm:px-10 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-neutral-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-brand-primary)]">
              Energy Reimagined
            </span>
            <h1 className="text-[var(--color-foreground)] text-[var(--text-display)]">
              Control your energy. Save every month.
            </h1>
            <p className="text-[color:var(--color-neutral-body)] text-[var(--text-lg)] max-w-xl">
              VoltSense learns your home’s patterns to cut waste without
              cutting comfort. From solar arrays to heat pumps, it balances
              every source seamlessly.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact">Get Started</ButtonLink>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-primary)] transition hover:text-[color:var(--color-brand-muted)]"
              >
                Explore features
                <span aria-hidden className="text-lg">
                  →
                </span>
              </Link>
            </div>
            <dl className="mt-4 grid gap-6 text-sm text-[color:var(--color-neutral-body)] sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-[color:var(--color-foreground)]">
                  Avg. savings
                </dt>
                <dd>22% reduction in monthly energy spend</dd>
              </div>
              <div>
                <dt className="font-semibold text-[color:var(--color-foreground)]">
                  Live sensors
                </dt>
                <dd>Inverter, grid, storage, and micro-meters</dd>
              </div>
              <div>
                <dt className="font-semibold text-[color:var(--color-foreground)]">
                  Integrations
                </dt>
                <dd>Works with 40+ OEMs & automation hubs</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[color:var(--color-brand-primary)] opacity-20 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-neutral-border)] bg-white shadow-[var(--vs-shadow-glow)]">
              <Image
                src="/images/volt-sense-dashboard.svg"
                alt="VoltSense home energy dashboard mockup"
                width={640}
                height={480}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[var(--text-2xl)] text-[color:var(--color-foreground)]">
            Trusted by emerging energy innovators
          </h2>
          <p className="max-w-lg text-[color:var(--color-neutral-body)]">
            Installed in 12k homes across the globe with utility-grade
            compliance and 24/7 monitoring.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { src: "/logos/gridpulse.svg", alt: "GridPulse logo" },
            { src: "/logos/amplyhome.svg", alt: "AmplyHome logo" },
            { src: "/logos/homeverse.svg", alt: "HomeVerse logo" },
          ].map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white/70 px-6 py-4 shadow-[0_16px_30px_rgba(12,44,84,0.08)]"
            >
              <Image src={logo.src} alt={logo.alt} width={132} height={38} />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="text-[var(--text-kicker)] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-brand-primary)]">
            How it works
          </span>
          <h2 className="text-[var(--text-2xl)] text-[color:var(--color-foreground)]">
            The savings loop automates itself
          </h2>
          <p className="max-w-xl text-[color:var(--color-neutral-body)]">
            VoltSense pairs edge compute with cloud-scale intelligence so you
            see every watt, adjust quickly, and stay comfortable even when the
            grid is strained.
          </p>
        </div>
        <div className="grid gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-2 overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white/80 px-6 py-5 shadow-[0_12px_30px_rgba(12,44,84,0.12)]"
            >
              <span className="text-sm font-semibold text-[color:var(--color-brand-primary)]">
                {step.number}
              </span>
              <h3 className="text-lg text-[color:var(--color-foreground)]">
                {step.title}
              </h3>
              <p className="text-sm text-[color:var(--color-neutral-body)]">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <Card
          eyebrow="Feature highlight"
          title="Predictive dispatch that pays you back"
          description="VoltSense orchestrates solar, batteries, and grid imports to ensure every circuit has the right energy at the right moment."
          className="gap-6 px-8 py-8"
          footer={
            <ul className="grid gap-3 text-[color:var(--color-neutral-body)]">
              {featureBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--color-brand-primary)]"
                  />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          }
        >
          <div className="rounded-[var(--radius-sm)] border border-dashed border-[color:var(--color-neutral-border)] bg-[color:var(--color-neutral-soft)]/80 px-4 py-3 text-sm text-[color:var(--color-neutral-body)]">
            Visibility dashboards pulse every 5 seconds with auto-prioritized
            events. Personalized nudges make energy literacy effortless for
            everyone in the household.
          </div>
        </Card>
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[color:var(--color-brand-primary)] blur-[120px] opacity-25"></div>
          <div className="relative w-full overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-neutral-border)] bg-white shadow-[0_18px_45px_rgba(12,44,84,0.16)]">
            <Image
              src="/images/volt-sense-dashboard.svg"
              alt="VoltSense predictive dispatch visualization"
              width={640}
              height={480}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
