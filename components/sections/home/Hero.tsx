"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { BrowserChrome } from "@/components/shared/BrowserChrome";
import { SalesChartMock } from "@/components/shared/BrowserChromeMocks";
import { links } from "@/lib/links";

const checks = [
  "Unlimited reports & features",
  "Cloud + offline sync",
  "1-month free trial — no card",
];

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 items-center gap-y-12 px-6 md:gap-x-10 md:px-10">
        <div className="col-span-12 lg:col-span-6">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-body text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] align-middle" />
            Point of Sale · Cloud + Offline · LHDN E-Invoice ready
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-5 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-xl)",
              lineHeight: "var(--text-display-xl--line-height)",
            }}
          >
            Empower your business{" "}
            <span className="text-gradient-brand">without limit</span>
            <span className="text-[var(--color-brand-primary)]">.</span>
            <br className="hidden md:block" />
            Anywhere, anytime.
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-6 max-w-[34rem] text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]"
          >
            Manage and monitor sales, inventory, and employees from one cloud
            POS. Download and register now to get free unlimited access to all
            reports and features.
          </motion.p>

          <motion.ul
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-6 flex flex-col gap-2 text-[0.92rem] text-[var(--color-ink-soft)]"
          >
            {checks.map((c) => (
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
            className="mt-8 flex flex-wrap items-center gap-3"
          >
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
              Get started — free
            </CTAButton>
            <CTAButton
              href="https://astanabiz.com/pricing"
              external
              variant="secondary"
              size="lg"
            >
              See pricing
            </CTAButton>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative col-span-12 lg:col-span-6"
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
          <BrowserChrome url="app.astanabiz.com/dashboard">
            <SalesChartMock
              trendLabel="Today — across 4 stores"
              total="RM 12,480"
              delta="+18.2%"
              caption="Best hour: 2pm — RM 1,820"
            />
          </BrowserChrome>
        </motion.div>
      </div>
    </section>
  );
}
