"use client";

import { motion, useReducedMotion } from "framer-motion";
import { UserPlus, MapPin, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { links } from "@/lib/links";

type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const iconMap: Record<string, IconComponent> = {
  WhatsApp: WhatsAppIcon,
  UserPlus,
  MapPin,
};

function resolveHref(token: string): { href: string; external: boolean } {
  switch (token) {
    case "whatsapp":
      return { href: links.whatsapp(), external: true };
    case "hub-register":
      return { href: links.hubRegister(), external: true };
    case "maps":
      return {
        href: "https://maps.google.com/?q=No+19A+Jalan+Astana+Alam+E13%2FE+Bandar+Puncak+Alam+42300+Selangor",
        external: true,
      };
    default:
      return { href: token, external: false };
  }
}

export function ContactOptions() {
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const c = t.contactPage;

  return (
    <section
      id="contact-options"
      className="relative isolate py-[clamp(3rem,6vw,5rem)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {c.options.map((opt, i) => {
            const Icon = iconMap[opt.icon] ?? WhatsAppIcon;
            const { href, external } = resolveHref(opt.href);
            return (
              <motion.div
                key={opt.title}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="card-mcbiz flex flex-col p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-display text-[1.15rem] font-bold tracking-tight text-[var(--color-ink)]">
                  {opt.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {opt.body}
                </p>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group/link mt-6 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-[var(--color-brand-deep)] transition-colors hover:text-[var(--color-brand-primary)]"
                >
                  {opt.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
