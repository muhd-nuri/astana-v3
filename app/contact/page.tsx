import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { ContactOptions } from "@/components/sections/contact/ContactOptions";
import { PartnershipCTA } from "@/components/sections/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "Contact — Astana POS",
  description:
    "Chat on WhatsApp, register an account, or visit our office. We're ready to help your business grow.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <ContactHeroSection />
      <ContactOptions />
      <PartnershipCTA />
    </main>
  );
}
