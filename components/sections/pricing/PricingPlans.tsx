"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Users, Boxes, MessageCircle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/shared/CTAButton";
import { links } from "@/lib/links";
import { useLocale } from "@/lib/i18n/LocaleContext";

type BillingCycle = "monthly" | "annual";

const addonIcons: LucideIcon[] = [BarChart3, Users, Boxes];

export function PricingPlans() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const p = t.pricingPage;
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section
      id="pricing-plans"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
      style={{ background: "var(--gradient-surface-sky)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            {p.plansEyebrow}
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
            }}
          >
            {p.plansHeading}
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]">
            {p.plansBody}
          </p>
        </div>

        {/* Billing cycle toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex gap-1 rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface-tint)] p-1">
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className={cn(
                "rounded-full px-6 py-2 text-[0.875rem] font-medium transition-all duration-200",
                cycle === "monthly"
                  ? "bg-white text-[var(--color-ink)] shadow-sm"
                  : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]",
              )}
            >
              {p.billingMonthly}
            </button>
            <button
              type="button"
              onClick={() => setCycle("annual")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-6 py-2 text-[0.875rem] font-medium transition-all duration-200",
                cycle === "annual"
                  ? "bg-white text-[var(--color-ink)] shadow-sm"
                  : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]",
              )}
            >
              {p.billingAnnual}
              <span className="chip-mint text-[0.62rem] font-bold uppercase tracking-[0.1em]">
                {p.annualSavings}
              </span>
            </button>
          </div>
        </div>

        {/* Add-on cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {p.addons.map((addon, i) => {
            const Icon = addonIcons[i];
            return (
              <motion.div
                key={addon.name}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="card-mcbiz flex flex-col p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>

                <h3 className="mt-5 font-display text-[1.1rem] font-bold tracking-tight text-[var(--color-ink)]">
                  {addon.name}
                </h3>
                <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {addon.description}
                </p>

                {/* Price display */}
                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-[2.75rem] font-bold leading-none tracking-[-0.03em] text-[var(--color-ink)]">
                    RM {cycle === "monthly" ? "79" : "790"}
                  </span>
                  <div className="mb-1 flex flex-col leading-snug">
                    <span className="text-[0.8rem] text-[var(--color-ink-soft)]">
                      / {cycle === "monthly" ? p.billingMonthly.toLowerCase() : p.billingAnnual.toLowerCase()}
                    </span>
                    <span className="text-[0.8rem] text-[var(--color-ink-soft)]">{p.perStore}</span>
                  </div>
                </div>

                <span className="chip-mint mt-3 w-fit text-[0.68rem] font-semibold uppercase tracking-[0.1em]">
                  {p.trialNote}
                </span>

                <CTAButton
                  href={links.whatsapp()}
                  external
                  variant="primary"
                  size="lg"
                  className="mt-6 w-full justify-center"
                  icon={<MessageCircle className="h-4 w-4" strokeWidth={2.25} />}
                >
                  {p.subscribeCta}
                </CTAButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
