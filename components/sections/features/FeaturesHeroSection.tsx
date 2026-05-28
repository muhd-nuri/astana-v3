"use client";

import { PageHero } from "@/components/shared/PageHero";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function FeaturesHeroSection() {
  const { t } = useLocale();
  const f = t.featuresPage;
  return (
    <PageHero
      eyebrow={f.eyebrow}
      headingPart1={f.headingPart1}
      headingAccent={f.headingAccent}
      headingPart2={f.headingPart2}
      body={f.body}
    />
  );
}
