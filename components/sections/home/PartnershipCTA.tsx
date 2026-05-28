"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight, Handshake } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { DottedGridAtmosphere } from "@/components/shared/DottedGridAtmosphere";
import { links } from "@/lib/links";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function PartnershipCTA() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const section = t.partnerCta;

  return (
    <section
      id="partnership"
      className="relative isolate overflow-hidden py-[clamp(5rem,10vw,9rem)] text-[var(--color-page-bg)]"
      style={{ background: "var(--gradient-night)" }}
    >
      <DottedGridAtmosphere scope="absolute" color="#ffffff" opacity={0.06} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, #5fc8e833, transparent 55%), radial-gradient(60% 60% at 80% 100%, #37b34a26, transparent 55%)",
        }}
      />

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex w-full max-w-[820px] flex-col items-center px-6 text-center md:px-10"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/80">
          <Handshake className="h-3.5 w-3.5" strokeWidth={2.25} />
          {section.chip}
        </span>
        <h2
          className="mt-6 font-display font-bold tracking-[-0.02em] text-white"
          style={{
            fontSize: "var(--text-display-lg)",
            lineHeight: "var(--text-display-lg--line-height)",
          }}
        >
          {section.heading}
        </h2>
        <p className="mt-5 max-w-[36rem] text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-white/75">
          {section.body}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <CTAButton
            href={links.whatsapp()}
            external
            variant="primary"
            size="lg"
            icon={<MessageCircle className="h-4 w-4" strokeWidth={2.25} />}
            trailingIcon={
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
            }
          >
            {section.ctaPrimary}
          </CTAButton>
          <CTAButton
            href="https://astanabiz.com/about"
            external
            variant="secondary"
            size="lg"
            className="border-white/25 text-white hover:border-[var(--color-brand-light)] hover:text-[var(--color-brand-light)]"
          >
            {section.ctaSecondary}
          </CTAButton>
        </div>
      </motion.div>
    </section>
  );
}
