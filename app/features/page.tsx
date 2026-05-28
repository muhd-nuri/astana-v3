import type { Metadata } from "next";
import { FeaturesHeroSection } from "@/components/sections/features/FeaturesHeroSection";
import {
  FeatureSalesAnalytics,
  FeatureInventory,
  FeatureMultiStore,
  FeaturePayments,
} from "@/components/sections/home/FeatureBlocks";
import { ApproachGrid } from "@/components/sections/home/ApproachGrid";
import { PartnershipCTA } from "@/components/sections/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "Features — Astana POS",
  description:
    "144 features built for Malaysian SMEs. Sales analytics, inventory, multi-store management, financial reporting — all in one cloud POS.",
};

export default function FeaturesPage() {
  return (
    <main id="main">
      <FeaturesHeroSection />
      <FeatureSalesAnalytics />
      <FeatureInventory />
      <FeatureMultiStore />
      <FeaturePayments />
      <ApproachGrid />
      <PartnershipCTA />
    </main>
  );
}
