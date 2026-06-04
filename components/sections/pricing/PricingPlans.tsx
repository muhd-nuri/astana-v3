"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Users, Boxes, type LucideIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
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
      <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
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

        {/* All-in-one card */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border-hairline)] bg-white shadow-sm"
        >
          {/* Card header: price left, toggle right */}
          <div className="flex flex-col gap-5 border-b border-[var(--color-border-hairline)] px-7 py-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-end gap-2">
                <span className="font-display text-[2.6rem] font-bold leading-none tracking-[-0.03em] text-[var(--color-ink)]">
                  RM {cycle === "monthly" ? "79" : "790"}
                </span>
                <div className="mb-0.5 flex flex-col leading-snug">
                  <span className="text-[0.82rem] text-[var(--color-ink-soft)]">
                    / {cycle === "monthly" ? p.billingMonthly.toLowerCase() : p.billingAnnual.toLowerCase()}
                  </span>
                  <span className="text-[0.82rem] text-[var(--color-ink-soft)]">{p.perStore}</span>
                </div>
              </div>
              <span className="chip-mint mt-3 inline-block text-[0.68rem] font-semibold uppercase tracking-[0.1em]">
                {p.trialNote}
              </span>
            </div>

            {/* Billing toggle */}
            <div className="inline-flex gap-1 self-start rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface-tint)] p-1">
              <button
                type="button"
                onClick={() => setCycle("monthly")}
                className={cn(
                  "rounded-full px-5 py-2 text-[0.85rem] font-medium transition-all duration-200",
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
                  "inline-flex items-center gap-2 rounded-full px-5 py-2 text-[0.85rem] font-medium transition-all duration-200",
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

          {/* Feature rows */}
          {p.addons.map((addon, i) => {
            const Icon = addonIcons[i];
            return (
              <div
                key={addon.name}
                className={cn(
                  "flex items-start gap-5 px-7 py-5",
                  i < p.addons.length - 1 && "border-b border-[var(--color-border-hairline)]",
                )}
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-display text-[0.95rem] font-bold tracking-tight text-[var(--color-ink)]">
                    {addon.name}
                  </p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--color-ink-soft)]">
                    {addon.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* CTA */}
          <div className="border-t border-[var(--color-border-hairline)] px-7 py-5">
            <CTAButton
              href={links.whatsapp()}
              external
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              {p.subscribeCta}
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
