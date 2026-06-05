"use client";

import Image from "next/image";
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
      afterBody={
        <Image
          src="/astana-features.jpg"
          alt="Astana POS ecosystem integrations diagram"
          width={1200}
          height={1200}
          className="mx-auto w-full max-w-[720px] h-auto rounded-2xl"
          priority
        />
      }
    />
  );
}
