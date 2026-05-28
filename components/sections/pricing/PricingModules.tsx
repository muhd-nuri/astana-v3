"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Megaphone,
  Boxes,
  Users,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";

const moduleIcons: LucideIcon[] = [
  LayoutDashboard,
  BookOpen,
  Megaphone,
  Boxes,
  Users,
  ClipboardList,
];

export function PricingModules() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const p = t.pricingPage;

  return (
    <section
      id="modules"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
      style={{ background: "var(--gradient-surface-sky)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            {p.modulesEyebrow}
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
            }}
          >
            {p.modulesHeading}
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]">
            {p.modulesBody}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.modules.map((mod, i) => {
            const Icon = moduleIcons[i];
            return (
              <motion.div
                key={mod.name}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className="card-mcbiz flex flex-col p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <span className="chip-mint text-[0.65rem] font-bold uppercase tracking-[0.12em]">
                    Free
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1.1rem] font-bold tracking-tight text-[var(--color-ink)]">
                  {mod.name}
                </h3>
                <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {mod.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
