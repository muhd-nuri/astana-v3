"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function AboutMission() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const a = t.aboutPage;

  const paragraphs = a.missionBody.split("\n\n");

  return (
    <section
      id="mission"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-y-10 px-6 md:gap-x-16 md:px-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-4"
        >
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            {a.missionEyebrow}
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-md)",
              lineHeight: "var(--text-display-md--line-height)",
            }}
          >
            {a.missionHeading}
          </h2>

          <dl className="mt-10 flex flex-col gap-8">
            {[
              { value: "10,000+", label: "shops & businesses" },
              { value: "177", label: "countries on Play Store" },
              { value: "2020", label: "founded" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt
                  className="font-display font-bold leading-none tracking-tight text-[var(--color-ink)] tabular-nums"
                  style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}
                >
                  <span className="text-gradient-brand">{stat.value}</span>
                </dt>
                <dd className="mt-1 text-[0.82rem] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="col-span-12 flex flex-col justify-center gap-6 lg:col-span-8"
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]"
            >
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
