"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: Variant;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  children: ReactNode;
  size?: "md" | "lg";
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "group/cta inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-[var(--color-page-bg)] active:translate-y-px";

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand-primary)] text-[var(--color-page-bg)] shadow-[0_8px_24px_-12px_rgba(15,140,92,0.55)] hover:bg-[var(--color-brand-mid)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),0_10px_28px_-12px_rgba(15,140,92,0.7)]",
  secondary:
    "bg-transparent text-[var(--color-ink)] border border-[var(--color-border-hairline)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] hover:text-[var(--color-brand-primary)]",
};

export function CTAButton(props: LinkProps | ButtonProps) {
  const {
    variant = "primary",
    icon,
    trailingIcon,
    className,
    children,
    size = "md",
  } = props;

  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const isExternal =
      props.external ?? /^https?:\/\//.test(props.href) ?? false;
    if (isExternal) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {icon ? <span className="shrink-0">{icon}</span> : null}
          <span>{children}</span>
          {trailingIcon ? <span className="shrink-0">{trailingIcon}</span> : null}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {icon ? <span className="shrink-0">{icon}</span> : null}
        <span>{children}</span>
        {trailingIcon ? <span className="shrink-0">{trailingIcon}</span> : null}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span className="shrink-0">{trailingIcon}</span> : null}
    </button>
  );
}
