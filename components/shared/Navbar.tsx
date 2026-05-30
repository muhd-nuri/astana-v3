"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { LanguageToggle } from "./LanguageToggle";
import { CTAButton } from "./CTAButton";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_KEYS = ["features", "industries", "pricing", "about", "blog", "contact"] as const;
type NavKey = (typeof NAV_KEYS)[number];

const HREFS: Record<NavKey, string> = {
  features: "/features",
  industries: "/industries",
  pricing: "/pricing",
  about: "/about",
  blog: "/blog",
  contact: "/contact",
};

export function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "bg-[var(--color-page-bg)]/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <AnimatePresence>
        {scrolled ? (
          <motion.div
            key="hairline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[var(--color-border-hairline)]"
          />
        ) : null}
      </AnimatePresence>

      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" aria-label="Astana POS — beranda">
          <Image src="/logo.png" alt="Astana POS" width={131} height={28} className="h-7 w-auto" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={HREFS[key]}
              className="text-[0.9rem] font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <CTAButton
            href="https://hub.astanabiz.com"
            external
            variant="primary"
            icon={<LogIn className="h-4 w-4" strokeWidth={2.25} />}
          >
            {t.nav.cta}
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <a
            href="https://hub.astanabiz.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.cta}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-hairline)] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-tint)]"
          >
            <LogIn className="h-5 w-5" strokeWidth={2} />
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={t.nav.menuOpen}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-hairline)] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-tint)]"
              >
                <Menu className="h-5 w-5" strokeWidth={2} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full max-w-sm flex-col bg-[var(--color-page-bg)] p-0 text-[var(--color-ink)]"
            >
              <SheetHeader className="flex flex-row items-center justify-between border-b border-[var(--color-border-hairline)] px-6 py-4">
                <SheetTitle>
                  <Image src="/logo.png" alt="Astana POS" width={131} height={28} className="h-7 w-auto" />
                </SheetTitle>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.nav.menuClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetHeader>
              <nav className="flex flex-1 flex-col gap-1 px-6 py-6" aria-label="Mobile primary">
                {NAV_KEYS.map((key) => (
                  <Link
                    key={key}
                    href={HREFS[key]}
                    onClick={() => setOpen(false)}
                    className="-mx-2 rounded-lg px-2 py-3 font-display text-2xl font-medium tracking-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand-primary)]"
                  >
                    {t.nav[key]}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-[var(--color-border-hairline)] px-6 py-5">
                <CTAButton
                  href="https://hub.astanabiz.com"
                  external
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<LogIn className="h-4 w-4" strokeWidth={2.25} />}
                >
                  {t.nav.cta}
                </CTAButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
