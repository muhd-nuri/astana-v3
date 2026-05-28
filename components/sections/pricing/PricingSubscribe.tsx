"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { links } from "@/lib/links";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function PricingSubscribe() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const p = t.pricingPage;

  return (
    <section className="relative isolate py-[clamp(3.5rem,6vw,5rem)]">
      <div className="mx-auto w-full max-w-[820px] px-6 md:px-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="card-mcbiz flex flex-col items-center gap-5 p-10 text-center md:flex-row md:justify-between md:text-left"
        >
          <div>
            <h2
              className="font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
              style={{ fontSize: "var(--text-display-md)", lineHeight: "var(--text-display-md--line-height)" }}
            >
              {p.subscribeHeading}
            </h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
              {p.subscribeBody}
            </p>
          </div>
          <CTAButton
            href={links.whatsapp()}
            external
            variant="primary"
            size="lg"
            className="shrink-0"
            icon={<MessageCircle className="h-4 w-4" strokeWidth={2.25} />}
            trailingIcon={
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
            }
          >
            {p.subscribeCta}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
