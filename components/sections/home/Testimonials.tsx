"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Testimonials() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const section = t.testimonials;

  return (
    <section
      id="testimonials"
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
            {section.headingPart1}{" "}
            <span className="text-gradient-brand">{section.headingAccent}</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {section.items.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="card-mcbiz relative flex flex-col p-7"
            >
              <Quote
                className="absolute right-6 top-6 h-7 w-7 text-[var(--color-brand-pale)]"
                strokeWidth={1.5}
              />
              <div className="flex gap-0.5 text-[var(--color-warn)]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                ))}
              </div>
              <h3 className="mt-4 font-display text-[1.05rem] font-bold leading-snug tracking-tight text-[var(--color-ink)]">
                {q.title}
              </h3>
              <blockquote className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
                {q.body}
              </blockquote>
              <figcaption className="mt-6 border-t border-[var(--color-border-hairline)] pt-4">
                <p className="font-display text-[0.95rem] font-bold tracking-tight text-[var(--color-ink)]">
                  {q.name}
                </p>
                <p className="text-[0.78rem] text-[var(--color-ink-soft)]">
                  {q.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
