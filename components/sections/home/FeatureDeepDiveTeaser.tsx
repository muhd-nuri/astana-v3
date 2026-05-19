"use client";

import { ArrowRight, Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { DashboardMockup } from "@/components/shared/DashboardMockup";
import { CTAButton } from "@/components/shared/CTAButton";

export function FeatureDeepDiveTeaser() {
  const { t } = useLocale();
  return (
    <SectionWrapper id="feature-deep-dive" tone="page">
      <div
        aria-hidden="true"
        className="mb-16 h-px w-full bg-[var(--color-border-hairline)]"
      />
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
        <div className="col-span-12 md:col-span-6 md:pr-6">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            {t.featureDeepDive.eyebrow}
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontSize: "var(--text-display-lg)", lineHeight: "var(--text-display-lg--line-height)" }}
          >
            {t.featureDeepDive.heading}
          </h2>
          <ul className="mt-8 flex flex-col gap-3">
            {t.featureDeepDive.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[0.95rem] leading-[1.6] text-[var(--color-ink)]">
                  {b}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton
              href="/features"
              variant="ghost"
              trailingIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />}
            >
              {t.featureDeepDive.cta}
            </CTAButton>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[40%] opacity-60"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 50%, color-mix(in oklab, var(--color-brand-primary) 18%, transparent) 0%, transparent 70%)",
                filter: "blur(36px)",
              }}
            />
            <DashboardMockup variant="mini" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
