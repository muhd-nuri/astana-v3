"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
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

const PARTNER_SUB = [
  { label: "Reseller", href: "https://mcbiz.astanabiz.com/en/partner" },
  { label: "Distributor", href: "https://partner.astanabiz.com/registration_form?type=DISTRIBUTOR" },
  {
    label: "Affiliate",
    href: "https://api.whatsapp.com/send/?phone=601159918214&text=Hai+Astanabiz%21+Saya+berminat+untuk+menyertai+program+Affiliate.+Boleh+kongsikan+maklumat+lanjut%3F&type=phone_number&app_absent=0",
  },
  { label: "Developer", href: "https://developer.astanabiz.com" },
] as const;

const linkClass =
  "text-[0.9rem] font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]";

const mobileLinkClass =
  "-mx-2 rounded-lg px-2 py-3 font-display text-2xl font-medium tracking-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand-primary)]";

export function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [mobilePartnerOpen, setMobilePartnerOpen] = useState(false);
  const partnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (partnerRef.current && !partnerRef.current.contains(e.target as Node)) {
        setPartnerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
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

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <Link href="/features" className={linkClass}>{t.nav.features}</Link>
          <Link href="/industries" className={linkClass}>{t.nav.industries}</Link>
          <Link href="/pricing" className={linkClass}>{t.nav.pricing}</Link>
          <a
            href="https://mcbiz.astanabiz.com"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {t.nav.about}
          </a>

          {/* Partner dropdown */}
          <div ref={partnerRef} className="relative">
            <button
              type="button"
              onClick={() => setPartnerOpen((v) => !v)}
              className={cn(linkClass, "inline-flex items-center gap-1")}
            >
              {t.nav.partner}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  partnerOpen && "rotate-180",
                )}
                strokeWidth={2.25}
              />
            </button>
            <AnimatePresence>
              {partnerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)] py-1 shadow-lg"
                >
                  {PARTNER_SUB.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setPartnerOpen(false)}
                      className="block px-4 py-2.5 text-[0.875rem] font-medium text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-surface-tint)] hover:text-[var(--color-ink)]"
                    >
                      {sub.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blog" className={linkClass}>{t.nav.blog}</Link>
          <Link href="/contact" className={linkClass}>{t.nav.contact}</Link>
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

        {/* Mobile controls */}
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
              showCloseButton={false}
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
                <Link href="/features" onClick={() => setOpen(false)} className={mobileLinkClass}>{t.nav.features}</Link>
                <Link href="/industries" onClick={() => setOpen(false)} className={mobileLinkClass}>{t.nav.industries}</Link>
                <Link href="/pricing" onClick={() => setOpen(false)} className={mobileLinkClass}>{t.nav.pricing}</Link>
                <a
                  href="https://mcbiz.astanabiz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass}
                >
                  {t.nav.about}
                </a>
                {/* Partner accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobilePartnerOpen((v) => !v)}
                    className="-mx-2 flex w-full items-center justify-between rounded-lg px-2 py-3 font-display text-2xl font-medium tracking-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand-primary)]"
                  >
                    {t.nav.partner}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        mobilePartnerOpen && "rotate-180",
                      )}
                      strokeWidth={2}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobilePartnerOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 flex flex-col border-l border-[var(--color-border-hairline)] pl-4 pb-2">
                          {PARTNER_SUB.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpen(false)}
                              className="py-2 text-[1.1rem] font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand-primary)]"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link href="/blog" onClick={() => setOpen(false)} className={mobileLinkClass}>{t.nav.blog}</Link>
                <Link href="/contact" onClick={() => setOpen(false)} className={mobileLinkClass}>{t.nav.contact}</Link>
              </nav>
              <div className="border-t border-[var(--color-border-hairline)] px-6 py-5">
                <CTAButton
                  href="https://hub.astanabiz.com"
                  external
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
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
