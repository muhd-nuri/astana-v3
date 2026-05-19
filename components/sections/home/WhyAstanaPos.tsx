"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";

// Bento layout: 2-1 / 1-2 / 2-1 across a 3-column grid.
const SPAN_CLASSES = [
  "md:col-span-2", // 01 large
  "md:col-span-1", // 02 normal
  "md:col-span-1", // 03 normal
  "md:col-span-2", // 04 large
  "md:col-span-2", // 05 large
  "md:col-span-1", // 06 normal
];

export function WhyAstanaPos() {
  const { t } = useLocale();
  return (
    <SectionWrapper id="why" tone="page">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            {t.whyAstanaPos.eyebrow}
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontSize: "var(--text-display-lg)", lineHeight: "var(--text-display-lg--line-height)" }}
          >
            {t.whyAstanaPos.heading}
          </h2>
        </div>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-x-8">
        {t.whyAstanaPos.features.map((f, i) => (
          <li
            key={f.number}
            className={cn(
              "group/card relative pt-9 pr-2 pb-8 md:pt-10 md:pr-6",
              SPAN_CLASSES[i],
            )}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--color-border-hairline)] transition-all duration-500 group-hover/card:h-[2px] group-hover/card:bg-[var(--color-brand-primary)]" />
            <span className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-primary)] tabular-nums">
              {f.number}
            </span>
            <h3
              className="mt-3 font-display font-bold tracking-tight text-[var(--color-ink)]"
              style={{
                fontSize: SPAN_CLASSES[i].includes("col-span-2")
                  ? "clamp(1.5rem,2.2vw,1.85rem)"
                  : "var(--text-display-sm)",
                lineHeight: 1.2,
              }}
            >
              {f.title}
            </h3>
            <p className="mt-3 max-w-[42ch] text-[0.95rem] leading-[1.6] text-[var(--color-ink-soft)]">
              {f.body}
            </p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
