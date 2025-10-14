import Image from "next/image";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the VoltSense feature stack from live sensing and automation to analytics, security, and developer tools.",
};

const featureCards = [
  {
    title: "Live power mesh",
    copy: "Stream inverter, grid, and per-circuit data at 5-second resolution with adaptive sampling.",
    icon: "/icons/pulse.svg",
  },
  {
    title: "Adaptive automations",
    copy: "Scenario engine fine-tunes charge, discharge, and load shedding based on tariff windows.",
    icon: "/icons/automation.svg",
  },
  {
    title: "Open integrations",
    copy: "Native MQTT, Modbus, and REST hooks let VoltSense slot into any smart home stack.",
    icon: "/icons/integration.svg",
  },
  {
    title: "Precision alerts",
    copy: "Predict anomalies with machine learning drift alerts and contextual triage workflows.",
    icon: "/icons/alerts.svg",
  },
  {
    title: "Impact analytics",
    copy: "Granular insight tiles quantify savings, carbon offsets, and household comfort.",
    icon: "/icons/analytics.svg",
  },
  {
    title: "Enterprise-grade security",
    copy: "SOC 2-aligned guardrails with edge encryption and rotating secrets baked in.",
    icon: "/icons/security.svg",
  },
];

const comparisonRows = [
  {
    attribute: "Telemetry refresh",
    voltsense: "5-second adaptive cadence",
    generic: "60-second polling",
  },
  {
    attribute: "Battery intelligence",
    voltsense: "Thermal-aware charge curves",
    generic: "Basic SoC thresholds",
  },
  {
    attribute: "Grid event handling",
    voltsense: "Predictive load shedding",
    generic: "Manual breaker toggles",
  },
  {
    attribute: "Integrations",
    voltsense: "MQTT, Modbus, Webhooks, Home Assistant",
    generic: "CSV exports",
  },
  {
    attribute: "User experience",
    voltsense: "Conversational assistant with quick scenes",
    generic: "Static dashboards",
  },
  {
    attribute: "Security posture",
    voltsense: "Hardware root of trust + SOC 2 Type II",
    generic: "Password-based access",
  },
];

const mqttSample = `topic: voltsense/hubs/483920/telemetry
payload: {
  \"timestamp\": \"2025-03-04T19:28:14.102Z\",
  \"grid\": { \"voltage\": 231.4, \"frequency\": 50.02, \"import_kW\": 1.62 },
  \"solar\": { \"generation_kW\": 4.88 },
  \"battery\": {
    \"soc\": 78,
    \"temperature_c\": 28.4,
    \"cycle_state\": \"charging\",
    \"forecast_autonomy_min\": 186
  },
  \"loads\": [
    { \"name\": \"HVAC\", \"consumption_kW\": 1.9, \"automation\": \"eco\" },
    { \"name\": \"EV Charger\", \"consumption_kW\": 5.2, \"automation\": \"delay\" }
  ]
}`;

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-16 pb-6 sm:gap-20">
      <section className="rounded-[var(--radius-xl)] border border-[color:var(--color-neutral-border)] bg-white/80 px-6 py-12 shadow-[0_24px_60px_rgba(12,44,84,0.12)] backdrop-blur sm:px-10 sm:py-16">
        <div className="max-w-3xl space-y-5">
          <span className="text-[var(--text-kicker)] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-brand-primary)]">
            Feature stack
          </span>
          <h1 className="text-[var(--text-3xl)] text-[color:var(--color-foreground)]">
            Intelligent energy infrastructure for every smart home.
          </h1>
          <p className="text-[color:var(--color-neutral-body)] text-[var(--text-lg)]">
            From live telemetry and resilient automation to developer-ready data
            pipelines, VoltSense brings utility-grade reliability into the
            living room.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-[var(--text-2xl)] text-[color:var(--color-foreground)]">
          Everything you need to measure, automate, and optimise.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.copy}
              className="gap-3"
              icon={
                <Image
                  src={feature.icon}
                  alt=""
                  width={48}
                  height={48}
                  role="presentation"
                />
              }
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-[var(--text-2xl)] text-[color:var(--color-foreground)]">
            Why VoltSense wins against generic monitors
          </h2>
          <p className="max-w-2xl text-[color:var(--color-neutral-body)]">
            Purpose-built for hybrid energy homes, VoltSense combines modern
            orchestration with developer-friendly access so you can respond to
            every usage pattern instantly.
          </p>
        </div>
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-neutral-border)] bg-white shadow-[0_18px_45px_rgba(12,44,84,0.12)]">
          <table className="min-w-full border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="bg-[color:var(--color-neutral-soft)] text-left text-[color:var(--color-foreground)]">
                <th className="px-6 py-4 font-semibold">Capability</th>
                <th className="px-6 py-4 font-semibold text-[color:var(--color-brand-primary)]">
                  VoltSense
                </th>
                <th className="px-6 py-4 font-semibold text-[color:var(--color-neutral-body)]">
                  Generic Monitor X
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.attribute}
                  className={`border-t border-[color:var(--color-neutral-border)] ${
                    index % 2 === 0 ? "bg-white/95" : "bg-white"
                  }`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-left text-[color:var(--color-foreground)]"
                  >
                    {row.attribute}
                  </th>
                  <td className="px-6 py-4 text-[color:var(--color-neutral-body)]">
                    {row.voltsense}
                  </td>
                  <td className="px-6 py-4 text-[color:var(--color-neutral-body)]">
                    {row.generic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div className="space-y-4">
          <h2 className="text-[var(--text-2xl)] text-[color:var(--color-foreground)]">
            Native MQTT bridge keeps developers in the loop
          </h2>
          <p className="text-[color:var(--color-neutral-body)]">
            Subscribe to real-time telemetry streams and orchestrate any scene.
            VoltSense keeps payloads consistent, versioned, and signed so your
            automations never miss a beat.
          </p>
          <ul className="grid gap-3 text-sm text-[color:var(--color-neutral-body)]">
            <li>
              <strong className="text-[color:var(--color-foreground)]">
                Plug & play topics:
              </strong>{" "}
              discovery, telemetry, command, OTA.
            </li>
            <li>
              <strong className="text-[color:var(--color-foreground)]">
                Developer perks:
              </strong>{" "}
              schema evolution metadata and latency budget headers.
            </li>
            <li>
              <strong className="text-[color:var(--color-foreground)]">
                Security:
              </strong>{" "}
              short-lived auth tokens rotating every 30 minutes.
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-neutral-border)] bg-[color:var(--color-neutral-soft)]/80 shadow-[0_16px_40px_rgba(12,44,84,0.16)]">
          <pre className="overflow-auto px-6 py-6 text-[0.92rem] leading-relaxed text-[color:var(--color-neutral-body)]">
            <code>{mqttSample}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
