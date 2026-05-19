"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const quotes = [
  {
    name: "Sophia",
    role: "Business Owner, US",
    title: "User friendly. Easy to use. Responsibility.",
    body: "I have used Astana POS for several shops and they provide us the best point-of-sales solutions and great features. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking to improve their apps.",
  },
  {
    name: "Wati",
    role: "Business Owner, Restaurant",
    title: "Bandingkan harga dan features mereka!",
    body: "Mereka memberikan servis dan pandangan yang baik untuk bisnes saya. Ialah baru buka kedai — mereka menggunakan pengalaman untuk memberikan tawaran harga fleksibel dan sangat murah berbanding di pasaran. Terima kasih Astana POS.",
  },
  {
    name: "Haiqal",
    role: "DNA Dealer · Distributor · Reseller",
    title: "Dependable. Responsive. Professional partner.",
    body: "Astana POS Apps has collaborated with DNA team for several projects — including becoming the top-1 distributor and reseller for their software across over 3,000 clients. We're thrilled to continue our journey with Astana POS.",
  },
];

export function Testimonials() {
  const reduced = useReducedMotion();
  return (
    <section
      id="testimonials"
      className="relative isolate py-[clamp(4rem,8vw,var(--spacing-section))]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            Our clients speak
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--text-display-lg--line-height)",
            }}
          >
            10,000+ owners.{" "}
            <span className="text-gradient-brand">One platform.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
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
