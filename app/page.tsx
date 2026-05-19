import { HeroNumbers } from "@/components/sections/home/HeroNumbers";
import { IndustryStrip } from "@/components/sections/home/IndustryStrip";
import { WhyAstanaPos } from "@/components/sections/home/WhyAstanaPos";
import { FeatureDeepDiveTeaser } from "@/components/sections/home/FeatureDeepDiveTeaser";
import { TrustBlock } from "@/components/sections/home/TrustBlock";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <main id="main">
      <HeroNumbers />
      <IndustryStrip />
      <WhyAstanaPos />
      <FeatureDeepDiveTeaser />
      <TrustBlock />
      <FinalCTA />
    </main>
  );
}
