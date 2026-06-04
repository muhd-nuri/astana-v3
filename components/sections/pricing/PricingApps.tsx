"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const APPS = [
  {
    name: "Astana POS - Point of Sale",
    description: "Seamless Billing, Inventory, CRM and Analytics platform",
    label: "Free Trial 30 Days",
    bg: "#bfcff2",
  },
  {
    name: "Astana Customer Display",
    description: "Customer-facing screen with their order information",
    label: "Free",
    bg: "#dbbef7",
  },
  {
    name: "Astana Kitchen Display",
    description: "Informs kitchen staff of the pending customer orders",
    label: "Free",
    bg: "#fcd1ba",
  },
  {
    name: "Astana Dashboard",
    description: "Provide access to key business information instantly",
    label: "Free",
    bg: "#b1e7f5",
  },
] as const;

export function PricingApps() {
  const reduced = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-2 md:px-10">
      <div className="overflow-hidden rounded-md border border-[var(--color-border-hairline)] bg-white">
        {APPS.map((app, i) => (
          <motion.div
            key={app.name}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            className="flex items-center gap-4 px-5 py-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[var(--color-border-hairline)]"
          >
            {/* Logo with coloured background */}
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md p-1"
              style={{ background: app.bg }}
            >
              <Image
                src="/logo-square.png"
                alt="Astana"
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="font-display text-[0.95rem] font-bold leading-snug tracking-tight text-[var(--color-ink)]">
                {app.name}
              </p>
              <p className="mt-0.5 text-[0.85rem] leading-snug text-[var(--color-ink-soft)]">
                {app.description}
              </p>
            </div>

            {/* Price label */}
            <p className="w-16 shrink-0 text-right text-[0.85rem] font-semibold leading-tight text-[var(--color-brand-forest)]">
              {app.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
