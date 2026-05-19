"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight, Play } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useCountUp } from "@/hooks/use-count-up";
import { CTAButton } from "@/components/shared/CTAButton";
import { DashboardMockup } from "@/components/shared/DashboardMockup";
import { links } from "@/lib/links";

export function HeroNumbers() {
  const { t } = useLocale();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const dashboardY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -60]);

  const stats = t.hero.stats;
  const playStoreUrl = links.playStore();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-y-12 px-6 md:gap-x-10 md:px-10">
        <div className="col-span-12 lg:col-span-7 lg:pt-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-body text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] align-middle" />
            {t.hero.eyebrow}
          </motion.p>

          <div className="mt-6 flex flex-col gap-1 md:mt-8 md:gap-0">
            {stats.map((stat, i) => (
              <StatRow key={stat.label} stat={stat} index={i} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mt-8 max-w-[32rem] text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <CTAButton
              href={links.whatsapp()}
              external
              variant="primary"
              size="lg"
              icon={<MessageCircle className="h-4 w-4" strokeWidth={2.25} />}
              trailingIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />}
            >
              {t.hero.ctaPrimary}
            </CTAButton>
            <CTAButton
              href={links.calendly() || "/contact"}
              external={Boolean(links.calendly())}
              variant="secondary"
              size="lg"
              icon={<Calendar className="h-4 w-4" strokeWidth={2.25} />}
            >
              {t.hero.ctaSecondary}
            </CTAButton>
          </motion.div>

          {playStoreUrl ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="mt-5"
            >
              <Link
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand-primary)]"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                {t.hero.ctaPlayStore}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ) : null}
        </div>

        <div className="relative col-span-12 lg:col-span-5">
          <motion.div
            style={{ y: dashboardY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="relative lg:translate-x-[5%] lg:pt-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[40%]"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 45%, color-mix(in oklab, var(--color-brand-primary) 30%, transparent) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <DashboardMockup variant="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type Stat = (typeof import("@/lib/i18n/ms").ms)["hero"]["stats"][number];

function StatRow({ stat, index }: { stat: Stat; index: number }) {
  const value = useCountUp(stat.value, 1100 + index * 150);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15 + index * 0.08,
      }}
      className="flex items-baseline gap-4 md:gap-6"
    >
      <span
        className="font-display font-bold leading-[0.92] tracking-[-0.03em] tabular-nums text-[var(--color-ink)]"
        style={{ fontSize: "var(--text-hero-stat)" }}
      >
        {value.toLocaleString("en-MY")}
        <span className="text-[var(--color-brand-primary)]">{stat.suffix}</span>
      </span>
      <span className="hidden text-[0.8rem] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-soft)] md:block md:text-[0.85rem]">
        {stat.label}
      </span>
      <span className="block text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[var(--color-ink-soft)] md:hidden">
        {stat.label}
      </span>
    </motion.div>
  );
}
