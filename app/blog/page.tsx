import type { Metadata } from "next";
import Script from "next/script";
import { BlogHeroSection } from "@/components/sections/blog/BlogHeroSection";

export const metadata: Metadata = {
  title: "Blog — Astana POS",
  description:
    "Tips, guides and updates to help Malaysian SME owners run a smarter business with Astana POS.",
};

export default function BlogPage() {
  return (
    <main id="main">
      <BlogHeroSection />
      <section className="mx-auto w-full max-w-[1280px] px-6 pb-24 md:px-10">
        <div id="soro-blog" />
      </section>
      <Script
        src="https://app.trysoro.com/api/embed/dccafc0a-6c4a-4847-b54e-82e36f95e6a0"
        strategy="afterInteractive"
      />
    </main>
  );
}
