import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutMission } from "@/components/sections/about/AboutMission";
import { BrandPillars } from "@/components/sections/home/BrandPillars";
import { PartnershipCTA } from "@/components/sections/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "About — Astana POS",
  description:
    "Astana POS is part of Astana Group — helping over 10,000 Malaysian businesses grow since 2020.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <AboutHeroSection />
      <AboutMission />
      <BrandPillars />
      <PartnershipCTA />
    </main>
  );
}
