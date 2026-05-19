"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Tone = "page" | "tint" | "deep";

type SectionWrapperProps = {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  fullBleed?: boolean;
  ariaLabel?: string;
};

const toneClasses: Record<Tone, string> = {
  page: "bg-[var(--color-page-bg)]",
  tint: "bg-[var(--color-surface-tint)]",
  deep: "bg-[var(--color-brand-deep)] text-[var(--color-page-bg)]",
};

export function SectionWrapper({
  id,
  tone = "page",
  children,
  className,
  innerClassName,
  fullBleed = false,
  ariaLabel,
}: SectionWrapperProps) {
  const reduced = useReducedMotion();

  const variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]",
        toneClasses[tone],
        className,
      )}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
        className={cn(
          fullBleed
            ? "w-full"
            : "mx-auto w-full max-w-[1280px] px-6 md:px-10",
          innerClassName,
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}
