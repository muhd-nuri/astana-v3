"use client";

import { PageHero } from "@/components/shared/PageHero";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function AboutHeroSection() {
  const { t } = useLocale();
  const a = t.aboutPage;
  return (
    <PageHero
      eyebrow={a.eyebrow}
      headingPart1={a.headingPart1}
      headingAccent={a.headingAccent}
      headingPart2={a.headingPart2}
      body={a.body}
    />
  );
}
