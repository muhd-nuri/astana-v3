"use client";

import {
  BadgeCheck,
  Globe2,
  Shield,
  Link2,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { links } from "@/lib/links";

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck,
  Globe2,
  Shield,
  Link2,
};

export function TrustBlock() {
  const { t } = useLocale();
  return (
    <SectionWrapper id="trust" tone="tint">
      <ul className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.trust.items.map((item, i) => {
          const Icon = ICONS[item.icon] ?? BadgeCheck;
          const isLastWithLink = i === t.trust.items.length - 1;
          const Wrapper: React.ElementType = isLastWithLink ? "a" : "div";
          const wrapperProps = isLastWithLink
            ? {
                href: links.mcbiz(),
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "group/trust block transition-colors hover:text-[var(--color-brand-primary)]",
              }
            : { className: "" };
          return (
            <li key={item.title}>
              <Wrapper {...wrapperProps}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-page-bg)] text-[var(--color-brand-primary)] ring-1 ring-[var(--color-border-hairline)]">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-[1.05rem] font-bold tracking-tight text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-[1.55] text-[var(--color-ink-soft)]">
                  {item.body}
                </p>
              </Wrapper>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
}
