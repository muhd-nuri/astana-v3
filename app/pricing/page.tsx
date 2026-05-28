import type { Metadata } from "next";
import { PricingHeroSection } from "@/components/sections/pricing/PricingHeroSection";
import { PricingModules } from "@/components/sections/pricing/PricingModules";
import { PricingSubscribe } from "@/components/sections/pricing/PricingSubscribe";
import { PricingFAQ } from "@/components/sections/pricing/PricingFAQ";
import { PartnershipCTA } from "@/components/sections/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "Pricing — Astana POS",
  description:
    "One plan, every feature, no surprises. Start with a full 1-month free trial — all 6 modules included, no credit card required.",
};

export default function PricingPage() {
  return (
    <main id="main">
      <PricingHeroSection />
      <PricingModules />
      <PricingSubscribe />
      <PricingFAQ />
      <PartnershipCTA />
    </main>
  );
}
