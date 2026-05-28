"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function TrustStats() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const band = t.trustBand;

  return (
    <section
      aria-label="Trust signals"
      className="relative isolate border-y border-[var(--color-border-hairline)] bg-[var(--color-surface)]/70 py-10 backdrop-blur-sm md:py-14"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          {band.subtitle}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-x-6">
          {band.stats.map((s, i) => (
            <Stat key={s.label} stat={s} index={i} reduced={!!reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  stat,
  index,
  reduced,
}: {
  stat: { value: number; suffix: string; label: string };
  index: number;
  reduced: boolean;
}) {
  const value = useCountUp(stat.value, 900 + index * 120);
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className="text-center"
    >
      <p className="font-display text-[clamp(2.2rem,4.4vw,3rem)] font-bold leading-none tracking-[-0.02em] tabular-nums text-[var(--color-ink)]">
        {value.toLocaleString("en-MY")}
        <span className="text-gradient-brand">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
        {stat.label}
      </p>
    </motion.div>
  );
}
