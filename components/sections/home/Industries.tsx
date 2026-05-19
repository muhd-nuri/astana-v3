"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UtensilsCrossed,
  Scissors,
  BedDouble,
  ShoppingBag,
  Wrench,
  Car,
  type LucideIcon,
} from "lucide-react";

const industries: Array<{
  icon: LucideIcon;
  title: string;
  examples: string;
  features: string;
}> = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant, Cafe, Kiosk",
    examples: "F&B",
    features:
      "QR menu · table ordering · printer kitchen · reservation · split order · customer display · buzzer queue.",
  },
  {
    icon: Scissors,
    title: "Barber, Salon, Outlet",
    examples: "Beauty",
    features:
      "Staff commission · membership · reservation calendar · shift management · notes.",
  },
  {
    icon: BedDouble,
    title: "Hotel, Pet Shop, Gym, Clinic",
    examples: "Bookings",
    features:
      "Appointment · booking schedule · membership · staff attendance · repeat customers.",
  },
  {
    icon: ShoppingBag,
    title: "Retail, Pharmacy, Grocery",
    examples: "Retail",
    features:
      "Purchase order · receiving · inventory value · supplier · transfer · expiry date · low-inventory alerts.",
  },
  {
    icon: Wrench,
    title: "Services, Car/Motor Repair, Dealer, Laundry",
    examples: "Services",
    features:
      "Credit sales · appointment calendar · debtor management · estimate · invoice · price level.",
  },
  {
    icon: Car,
    title: "Car Wash, Detailing, Boutique",
    examples: "Specialty",
    features:
      "Loyalty card · customer notes · reservation · discount plan · CRM · membership.",
  },
];

export function Industries() {
  const reduced = useReducedMotion();
  return (
    <section
      id="industries"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
      style={{ background: "var(--gradient-surface-sky)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            By industry
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
            }}
          >
            The best{" "}
            <span className="text-gradient-brand">144 features</span>
            {" "}to reach your business goals.
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]">
            Whatever you sell, Astana has a tailored toolkit out of the box.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((it, i) => (
            <motion.div
              key={it.title}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.05,
              }}
              className="card-mcbiz group/ind flex flex-col p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                  <it.icon className="h-4.5 w-4.5" strokeWidth={2.25} />
                </span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                  {it.examples}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[1.05rem] font-bold tracking-tight text-[var(--color-ink)]">
                {it.title}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-ink-soft)]">
                {it.features}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
