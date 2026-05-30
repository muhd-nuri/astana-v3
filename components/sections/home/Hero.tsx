"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { PlayStoreBadge } from "@/components/shared/PlayStoreBadge";
import { links } from "@/lib/links";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Hero() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const h = t.heroSection;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-8 pb-12 md:pt-20 md:pb-28"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 items-center gap-y-6 px-6 md:gap-x-10 md:gap-y-10 md:px-10">
        {/* Text column — appears below video on mobile, left on desktop */}
        <div className="col-span-12 order-2 text-center lg:order-1 lg:col-span-6 lg:text-left">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display font-bold tracking-[-0.025em] text-[var(--color-ink)]"
            style={{
              fontSize: "clamp(1.875rem, 6vw, 4.5rem)",
              lineHeight: "var(--text-display-xl--line-height)",
            }}
          >
            {h.headingPart1}{" "}
            <span className="text-gradient-brand">{h.headingAccent}</span>
            <span className="text-[var(--color-brand-primary)]">.</span>{" "}
            {h.headingPart2}
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mx-auto mt-4 hidden max-w-[34rem] text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)] md:block lg:mx-0"
          >
            {h.body}
          </motion.p>

          <motion.ul
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-4 flex flex-col items-center gap-1.5 text-[0.88rem] text-[var(--color-ink-soft)] lg:items-start lg:gap-2 lg:text-[0.92rem]"
          >
            {h.checks.map((c) => (
              <li key={c} className="flex items-center gap-2.5">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:mt-8 lg:justify-start"
          >
            <PlayStoreBadge href={links.playStore()} />
          </motion.div>
        </div>

        {/* Video column — appears above text on mobile, right on desktop */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative col-span-12 order-1 lg:order-2 lg:col-span-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[40%]"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 45%, color-mix(in oklab, var(--color-brand-mid) 35%, transparent) 0%, transparent 70%)",
              filter: "blur(48px)",
            }}
          />
          <video
            src="/Hero-Video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full rounded-2xl shadow-xl"
            aria-label={t.a11y.decorativeDashboard}
          />
        </motion.div>
      </div>
    </section>
  );
}
