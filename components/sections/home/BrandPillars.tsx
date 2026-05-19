"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Monitor, Wrench, Cpu } from "lucide-react";

const pillars = [
  {
    name: "Astana POS",
    tagline: "Software",
    icon: Monitor,
    body: "Point-of-sale and business management software for small and medium-sized businesses. Start with a 1-month trial, pay only when you're satisfied, and terminate anytime.",
    href: "https://astanabiz.com",
    accent: "var(--color-brand-deep)",
  },
  {
    name: "Astana Biz",
    tagline: "Services",
    icon: Wrench,
    body: "Installation, configuration, training and warranty for over 10,000 deployments. A wide range of innovative services dedicated to making sure every client has the best solution for their needs.",
    href: "https://astanabiz.com/about",
    accent: "var(--color-brand-mid)",
  },
  {
    name: "MCBIZ",
    tagline: "Hardware",
    icon: Cpu,
    body: "Hardware brand for the small business. High-quality terminals, printers and peripherals at the lowest price — more than 10,000 sold online with exceptional customer service.",
    href: "https://mcbiz.astanabiz.com",
    accent: "var(--color-brand-primary)",
  },
];

export function BrandPillars() {
  const reduced = useReducedMotion();
  return (
    <section
      id="brands"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            Our brands
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
            }}
          >
            One ecosystem.{" "}
            <span className="text-gradient-brand">Three pillars.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="card-mcbiz group/pillar relative flex flex-col p-7"
            >
              <div className="flex items-start justify-between">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{ background: p.accent }}
                >
                  <p.icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                  {p.tagline}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[1.4rem] font-bold tracking-tight text-[var(--color-ink)]">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                {p.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-[0.85rem] font-semibold text-[var(--color-brand-deep)]">
                Visit {p.name}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/pillar:translate-x-0.5 group-hover/pillar:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
