import { type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "secondary";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[color:var(--color-brand-primary)] text-white shadow-[0_18px_40px_rgba(15,98,254,0.35)] hover:bg-[color:var(--color-brand-muted)]",
  secondary:
    "bg-white text-[color:var(--color-brand-primary)] border border-[color:var(--color-neutral-border)] shadow-[0_12px_25px_rgba(9,40,89,0.12)] hover:border-[color:var(--color-brand-primary)] hover:text-[color:var(--color-brand-primary)]",
  ghost:
    "bg-transparent text-[color:var(--color-brand-primary)] hover:bg-[color:var(--color-neutral-soft)]/70",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
};

export function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
      {icon}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
