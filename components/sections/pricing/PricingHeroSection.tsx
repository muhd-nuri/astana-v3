"use client";

import { PageHero } from "@/components/shared/PageHero";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function PricingHeroSection() {
  const { t } = useLocale();
  const p = t.pricingPage;
  return (
    <PageHero
      eyebrow={p.eyebrow}
      headingPart1={p.headingPart1}
      headingAccent={p.headingAccent}
      headingPart2={p.headingPart2}
      body={p.body}
    />
  );
}
