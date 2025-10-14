import { type ReactNode } from "react";

type CardProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
  icon?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function Card({
  title,
  eyebrow,
  description,
  children,
  icon,
  footer,
  className = "",
}: CardProps) {
  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-[color:var(--color-neutral-border)] bg-white/85 p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] ${className}`}
    >
      <header aria-hidden={!title && !eyebrow && !icon}>
        <div className="flex items-center gap-3">
          {icon ? (
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-neutral-soft)]">
              {icon}
            </span>
          ) : null}
          <div>
            {eyebrow ? (
              <p className="text-[var(--color-brand-primary)] text-xs font-semibold uppercase tracking-[0.22em]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h3 className="text-lg">{title}</h3>
            ) : null}
          </div>
        </div>
      </header>
      {description ? (
        <p className="text-sm text-[color:var(--color-neutral-body)]">
          {description}
        </p>
      ) : null}
      {children}
      {footer ? <footer className="mt-auto text-sm">{footer}</footer> : null}
    </article>
  );
}
