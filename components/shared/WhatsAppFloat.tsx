"use client";

import { MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { links } from "@/lib/links";

export function WhatsAppFloat() {
  const { t } = useLocale();
  return (
    <a
      href={links.whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.a11y.whatsappFloat}
      className="group/wa fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-[var(--color-page-bg)] shadow-[0_18px_38px_-14px_rgba(15,140,92,0.55)] ring-1 ring-[var(--color-brand-deep)]/10 transition-transform duration-200 hover:bg-[var(--color-brand-mid)] hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-[var(--color-page-bg)] md:right-8 md:bottom-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.25} />
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[var(--color-brand-primary)]/30 blur-xl opacity-0 transition-opacity duration-300 group-hover/wa:opacity-100" />
    </a>
  );
}
