"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Cloud,
  Wifi,
  Boxes,
  Users,
  Wallet,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";

const icons: LucideIcon[] = [Cloud, Wifi, Boxes, Users, Wallet, Megaphone];

export function ApproachGrid() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const section = t.approachGrid;

  return (
    <section
      id="approach"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
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
            {section.heading}
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]">
            {section.body}
          </p>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-10"
        >
          <Image
            src="/astana-approach.jpg"
            alt="Astana POS powerful modules — dashboard, accounting, marketing, operations, HRM, and administration"
            width={1280}
            height={1280}
            className="mx-auto w-full max-w-[720px] h-auto rounded-2xl"
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.05,
                }}
                className="card-mcbiz group/card p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)] transition-transform duration-300 group-hover/card:scale-105">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-display text-[1.15rem] font-bold tracking-tight text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
