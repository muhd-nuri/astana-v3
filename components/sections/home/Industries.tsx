"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UtensilsCrossed,
  Scissors,
  BedDouble,
  ShoppingBag,
  Wrench,
  Car,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";

const industryIcons: LucideIcon[] = [
  UtensilsCrossed,
  Scissors,
  BedDouble,
  ShoppingBag,
  Wrench,
  Car,
];

export function Industries() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const section = t.industriesGrid;

  return (
    <section
      id="industries"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
      style={{ background: "var(--gradient-surface-sky)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            {section.eyebrow}
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
            }}
          >
            {section.headingPart1}{" "}
            <span className="text-gradient-brand">{section.headingAccent}</span>
            {" "}{section.headingPart2}
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]">
            {section.body}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item, i) => {
            const Icon = industryIcons[i];
            return (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.05,
                }}
                className="card-mcbiz group/ind flex flex-col p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2.25} />
                  </span>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                    {item.examples}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[1.05rem] font-bold tracking-tight text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {item.features}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
