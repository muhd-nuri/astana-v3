import { Hero } from "@/components/sections/home/Hero";
import { TrustStats } from "@/components/sections/home/TrustStats";
import { ApproachGrid } from "@/components/sections/home/ApproachGrid";
import {
  FeatureSalesAnalytics,
  FeatureInventory,
  FeatureMultiStore,
  FeaturePayments,
} from "@/components/sections/home/FeatureBlocks";
import { BrandPillars } from "@/components/sections/home/BrandPillars";
import { Industries } from "@/components/sections/home/Industries";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { PartnershipCTA } from "@/components/sections/home/PartnershipCTA";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustStats />
      <ApproachGrid />
      <FeatureSalesAnalytics />
      <FeatureInventory />
      <FeatureMultiStore />
      <FeaturePayments />
      <BrandPillars />
      <Industries />
      <Testimonials />
      <PartnershipCTA />
    </main>
  );
}
