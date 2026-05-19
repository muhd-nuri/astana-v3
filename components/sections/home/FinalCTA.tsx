"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight, Play } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { CTAButton } from "@/components/shared/CTAButton";
import { DottedGridAtmosphere } from "@/components/shared/DottedGridAtmosphere";
import { links } from "@/lib/links";

export function FinalCTA() {
  const { t } = useLocale();
  const reduced = useReducedMotion();
  const playStoreUrl = links.playStore();

  return (
    <section
      id="final-cta"
      className="relative isolate overflow-hidden bg-[var(--color-brand-deep)] py-[clamp(5rem,10vw,9rem)] text-[var(--color-page-bg)]"
    >
      <DottedGridAtmosphere
        scope="absolute"
        color="var(--color-page-bg)"
        opacity={0.08}
      />

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex w-full max-w-[820px] flex-col items-center px-6 text-center md:px-10"
      >
        <h2
          className="font-display font-bold tracking-[-0.02em] text-[var(--color-page-bg)]"
          style={{
            fontSize: "var(--text-display-lg)",
            lineHeight: "var(--text-display-lg--line-height)",
          }}
        >
          {t.finalCta.heading}
        </h2>
        <p className="mt-5 max-w-[36rem] text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-page-bg)]/80">
          {t.finalCta.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <CTAButton
            href={links.whatsapp()}
            external
            variant="primary"
            size="lg"
            icon={<MessageCircle className="h-4 w-4" strokeWidth={2.25} />}
            trailingIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />}
          >
            {t.finalCta.ctaPrimary}
          </CTAButton>
          <CTAButton
            href={links.calendly() || "/contact"}
            external={Boolean(links.calendly())}
            variant="secondary"
            size="lg"
            className="border-[var(--color-page-bg)]/25 text-[var(--color-page-bg)] hover:border-[var(--color-brand-light)] hover:text-[var(--color-brand-light)]"
            icon={<Calendar className="h-4 w-4" strokeWidth={2.25} />}
          >
            {t.finalCta.ctaSecondary}
          </CTAButton>
        </div>

        {playStoreUrl ? (
          <div className="mt-6">
            <Link
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-[var(--color-page-bg)]/75 transition-colors hover:text-[var(--color-brand-light)]"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              {t.finalCta.ctaPlayStore}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
