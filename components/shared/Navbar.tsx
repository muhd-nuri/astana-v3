"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, LogIn, Menu, X } from "lucide-react";
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

function NavCard({
  title,
  desc,
  isDropdown = false,
  chevronOpen = false,
}: {
  title: string;
  desc: string;
  isDropdown?: boolean;
  chevronOpen?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-[var(--color-border-hairline)] bg-white px-4 py-3.5 transition-colors active:bg-gray-50">
      <div className="flex-1 text-left">
        <p className="font-display text-[0.97rem] font-bold text-[var(--color-ink)]">{title}</p>
        <p className="mt-0.5 text-[0.82rem] leading-snug text-[var(--color-ink-soft)]">{desc}</p>
      </div>
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-hairline)]">
        {isDropdown ? (
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 text-[var(--color-ink-soft)] transition-transform duration-200",
              chevronOpen && "rotate-180",
            )}
            strokeWidth={2.5}
          />
        ) : (
          <ArrowRight className="h-3.5 w-3.5 text-[var(--color-ink-soft)]" strokeWidth={2.5} />
        )}
      </div>
    </div>
  );
}

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
          <a
            href="https://town.astanabiz.com"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {t.nav.town}
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
              className="flex !w-full !max-w-full flex-col p-0 text-[var(--color-ink)]"
              style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #f8fafc 55%, #ffffff 100%)" }}
            >
              {/* Header */}
              <SheetHeader className="flex flex-row items-center justify-between border-b border-[var(--color-border-hairline)] bg-white px-5 py-4">
                <SheetTitle>
                  <Image src="/logo.png" alt="Astana POS" width={120} height={26} className="h-6 w-auto" />
                </SheetTitle>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.nav.menuClose}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-hairline)] text-[var(--color-ink-soft)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </SheetHeader>

              {/* Nav cards */}
              <nav
                className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-4"
                aria-label="Mobile primary"
              >
                <Link href="/features" onClick={() => setOpen(false)}>
                  <NavCard title={t.nav.features} desc={t.nav.descFeatures} />
                </Link>

                <Link href="/industries" onClick={() => setOpen(false)}>
                  <NavCard title={t.nav.industries} desc={t.nav.descIndustries} />
                </Link>

                <Link href="/pricing" onClick={() => setOpen(false)}>
                  <NavCard title={t.nav.pricing} desc={t.nav.descPricing} />
                </Link>

                <a
                  href="https://mcbiz.astanabiz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <NavCard title={t.nav.about} desc={t.nav.descAbout} />
                </a>

                <a
                  href="https://town.astanabiz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <NavCard title={t.nav.town} desc={t.nav.descTown} />
                </a>

                {/* Partner accordion card */}
                <div>
                  <button
                    type="button"
                    className="w-full"
                    onClick={() => setMobilePartnerOpen((v) => !v)}
                  >
                    <NavCard
                      title={t.nav.partner}
                      desc={t.nav.descPartner}
                      isDropdown
                      chevronOpen={mobilePartnerOpen}
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
                        <div className="mt-2 flex flex-col gap-1.5 pl-3">
                          {PARTNER_SUB.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between rounded-xl border border-[var(--color-border-hairline)] bg-white/80 px-4 py-3"
                            >
                              <span className="text-[0.9rem] font-medium text-[var(--color-ink)]">
                                {sub.label}
                              </span>
                              <ArrowRight className="h-3.5 w-3.5 text-[var(--color-ink-soft)]" strokeWidth={2.5} />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/blog" onClick={() => setOpen(false)}>
                  <NavCard title={t.nav.blog} desc={t.nav.descBlog} />
                </Link>

                <Link href="/contact" onClick={() => setOpen(false)}>
                  <NavCard title={t.nav.contact} desc={t.nav.descContact} />
                </Link>
              </nav>

              {/* CTA */}
              <div className="border-t border-[var(--color-border-hairline)] px-5 py-5">
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
