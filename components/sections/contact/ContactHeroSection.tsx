"use client";

import { PageHero } from "@/components/shared/PageHero";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function ContactHeroSection() {
  const { t } = useLocale();
  const c = t.contactPage;
  return (
    <PageHero
      eyebrow={c.eyebrow}
      headingPart1={c.heading}
      body={c.body}
    />
  );
}
