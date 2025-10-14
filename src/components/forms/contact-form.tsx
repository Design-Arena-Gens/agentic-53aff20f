'use client';

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<string, string>>;
};

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    startTransition(async () => {
      setState({ status: "idle", message: "" });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = await response.json();
      if (!response.ok) {
        setState({
          status: "error",
          message: payload.message ?? "Something went wrong.",
          fieldErrors: payload.errors,
        });
        return;
      }

      form.reset();
      setState({
        status: "success",
        message: "Thanks! A VoltSense specialist will reach out within one business day.",
      });
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-[var(--radius-lg)] border border-[color:var(--color-neutral-border)] bg-white/85 px-6 py-8 shadow-[0_20px_45px_rgba(12,44,84,0.14)]"
    >
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-[color:var(--color-foreground)]" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          className="rounded-[var(--radius-sm)] border border-[color:var(--color-neutral-border)] bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] shadow-[0_12px_30px_rgba(12,44,84,0.12)] placeholder:text-[color:var(--color-neutral-body)]"
          placeholder="Avery Johnson"
        />
        {state.fieldErrors?.name ? (
          <p id="name-error" className="text-xs text-red-600">
            {state.fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-[color:var(--color-foreground)]" htmlFor="email">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          className="rounded-[var(--radius-sm)] border border-[color:var(--color-neutral-border)] bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] shadow-[0_12px_30px_rgba(12,44,84,0.12)] placeholder:text-[color:var(--color-neutral-body)]"
          placeholder="avery@company.com"
          autoComplete="email"
        />
        {state.fieldErrors?.email ? (
          <p id="email-error" className="text-xs text-red-600">
            {state.fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-[color:var(--color-foreground)]" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          aria-describedby={state.fieldErrors?.company ? "company-error" : undefined}
          className="rounded-[var(--radius-sm)] border border-[color:var(--color-neutral-border)] bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] shadow-[0_12px_30px_rgba(12,44,84,0.12)] placeholder:text-[color:var(--color-neutral-body)]"
          placeholder="BrightGrid Co."
        />
        {state.fieldErrors?.company ? (
          <p id="company-error" className="text-xs text-red-600">
            {state.fieldErrors.company}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-[color:var(--color-foreground)]" htmlFor="message">
          What are you solving?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          className="rounded-[var(--radius-sm)] border border-[color:var(--color-neutral-border)] bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] shadow-[0_12px_30px_rgba(12,44,84,0.12)] placeholder:text-[color:var(--color-neutral-body)]"
          placeholder="Share your energy goals, existing hardware, or integration needs."
        />
        {state.fieldErrors?.message ? (
          <p id="message-error" className="text-xs text-red-600">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-[color:var(--color-foreground)]" htmlFor="timeline">
          Implementation timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          defaultValue=""
          required
          aria-describedby={state.fieldErrors?.timeline ? "timeline-error" : undefined}
          className="rounded-[var(--radius-sm)] border border-[color:var(--color-neutral-border)] bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] shadow-[0_12px_30px_rgba(12,44,84,0.12)]"
        >
          <option value="" disabled>
            Choose a window
          </option>
          <option value="0-3 months">0-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6+ months">6+ months</option>
        </select>
        {state.fieldErrors?.timeline ? (
          <p id="timeline-error" className="text-xs text-red-600">
            {state.fieldErrors.timeline}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Sending…" : "Send message"}
      </Button>

      {state.status === "success" ? (
        <div role="status" className="rounded-[var(--radius-sm)] border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {state.message}
        </div>
      ) : null}
      {state.status === "error" ? (
        <div role="alert" className="rounded-[var(--radius-sm)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      ) : null}
    </form>
  );
}
