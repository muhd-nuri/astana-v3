import type { Metadata } from "next";
import { IndustriesHeroSection } from "@/components/sections/industries/IndustriesHeroSection";
import { Industries } from "@/components/sections/home/Industries";
import { PartnershipCTA } from "@/components/sections/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "Industries — Astana POS",
  description:
    "Astana POS is built for every type of Malaysian business — restaurants, salons, retail, clinics, hotels, car washes, and more.",
};

export default function IndustriesPage() {
  return (
    <main id="main">
      <IndustriesHeroSection />
      <Industries />
      <PartnershipCTA />
    </main>
  );
}
