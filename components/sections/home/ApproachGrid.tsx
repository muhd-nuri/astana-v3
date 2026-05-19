"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Cloud,
  Wifi,
  Boxes,
  Users,
  Wallet,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

const approaches: Array<{
  icon: LucideIcon;
  title: string;
  body: string;
}> = [
  {
    icon: Cloud,
    title: "Cloud Services",
    body: "Monitor and manage unlimited sales, employees, inventory, reports and multiple stores.",
  },
  {
    icon: Wifi,
    title: "Work Offline",
    body: "Keep recording sales and run operations even when offline; database syncs to cloud once back online.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    body: "Create purchase orders, goods receive notes, estimates, inventory history reports and manage stock.",
  },
  {
    icon: Users,
    title: "Employee Management",
    body: "Create users, set staff commissions, manage access rights, login alerts and sales by employee.",
  },
  {
    icon: Wallet,
    title: "Financial Management",
    body: "Automated sales summary with unrestricted date filters — calculate net profit before COGS, overheads and opex.",
  },
  {
    icon: Megaphone,
    title: "Marketing Management",
    body: "Identify best-selling items, analyze customer behavior and use redemption points to foster loyalty.",
  },
];

export function ApproachGrid() {
  const reduced = useReducedMotion();
  return (
    <section
      id="approach"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            Our approach
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
            }}
          >
            One system. Every part of your shop.
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]">
            Six modules that operate as one — built for small business owners
            who run lean and grow fast.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {approaches.map((a, i) => (
            <motion.div
              key={a.title}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.05,
              }}
              className="card-mcbiz group/card p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)] transition-transform duration-300 group-hover/card:scale-105">
                <a.icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <h3 className="mt-5 font-display text-[1.15rem] font-bold tracking-tight text-[var(--color-ink)]">
                {a.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                {a.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
