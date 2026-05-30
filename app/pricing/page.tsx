import type { Metadata } from "next";
import { PricingHeroSection } from "@/components/sections/pricing/PricingHeroSection";
import { PricingPlans } from "@/components/sections/pricing/PricingPlans";
import { PricingFAQ } from "@/components/sections/pricing/PricingFAQ";
import { PartnershipCTA } from "@/components/sections/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "Pricing — Astana POS",
  description:
    "Subscribe to the modules you need — Unlimited Sales History, Employee Management, and Inventory Management. RM79/month or RM790/year per store. 30-day free trial.",
};

export default function PricingPage() {
  return (
    <main id="main">
      <PricingHeroSection />
      <PricingPlans />
      <PricingFAQ />
      <PartnershipCTA />
    </main>
  );
}
