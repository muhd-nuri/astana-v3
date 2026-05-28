"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function PricingFAQ() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const p = t.pricingPage;

  return (
    <section
      id="faq"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
    >
      <div className="mx-auto w-full max-w-[760px] px-6 md:px-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            {p.faqEyebrow}
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
            }}
          >
            {p.faqHeading}
          </h2>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {p.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-mcbiz overflow-hidden rounded-xl border-0 px-6"
              >
                <AccordionTrigger className="py-5 text-left font-display text-[1rem] font-bold tracking-tight text-[var(--color-ink)] hover:no-underline [&>svg]:text-[var(--color-brand-mid)]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
