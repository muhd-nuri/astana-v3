"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  headingPart1: string;
  headingAccent?: string;
  headingPart2?: string;
  body?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  headingPart1,
  headingAccent,
  headingPart2,
  body,
  children,
}: PageHeroProps) {
  const reduced = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, color-mix(in oklab, var(--color-brand-mid) 12%, transparent), transparent 65%)",
        }}
      />
      <div className="mx-auto w-full max-w-[820px] px-6 text-center md:px-10">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-deep)]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-4 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)]"
          style={{
            fontSize: "var(--text-display-xl)",
            lineHeight: "var(--text-display-xl--line-height)",
          }}
        >
          {headingPart1}
          {headingAccent && (
            <>
              {" "}
              <span className="text-gradient-brand">{headingAccent}</span>
            </>
          )}
          {headingPart2 && (
            <>
              {" "}
              {headingPart2}
            </>
          )}
        </motion.h1>
        {body && (
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="mt-5 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]"
          >
            {body}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
