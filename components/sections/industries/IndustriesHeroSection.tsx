"use client";

import { PageHero } from "@/components/shared/PageHero";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function IndustriesHeroSection() {
  const { t } = useLocale();
  const ind = t.industriesPage;
  return (
    <PageHero
      eyebrow={ind.eyebrow}
      headingPart1={ind.headingPart1}
      headingAccent={ind.headingAccent}
      headingPart2={ind.headingPart2}
      body={ind.body}
    />
  );
}
