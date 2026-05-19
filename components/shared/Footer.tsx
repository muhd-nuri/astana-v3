"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { DottedGridAtmosphere } from "./DottedGridAtmosphere";
import { resolveFooterHref, links } from "@/lib/links";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer
      className="relative isolate overflow-hidden text-[var(--color-page-bg)]"
      style={{ background: "var(--gradient-night)" }}
    >
      <DottedGridAtmosphere
        scope="absolute"
        color="#ffffff"
        opacity={0.06}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 100% 0%, #2da3a72e, transparent 60%), radial-gradient(50% 50% at 0% 100%, #37b34a26, transparent 60%)",
        }}
      />

      <div className="pointer-events-none absolute inset-y-0 right-[-3vw] hidden select-none items-center md:flex">
        <span
          aria-hidden="true"
          className="font-display font-bold leading-[0.78] tracking-[-0.04em] text-[var(--color-brand-mid)]/15"
          style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}
        >
          astana
          <br />
          pos
          <span className="text-[var(--color-brand-light)]/25">.</span>
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-20 pb-10 md:px-10 md:pt-24 md:pb-12">
        <p className="max-w-2xl font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] tracking-tight text-[var(--color-page-bg)]">
          {t.footer.manifesto}
        </p>

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {t.footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-light)]/80">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => {
                  const { href, external } = resolveFooterHref(l.href);
                  if (external) {
                    return (
                      <li key={l.label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[var(--color-page-bg)]/85 transition-colors hover:text-[var(--color-brand-light)]"
                        >
                          {l.label}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={l.label}>
                      <Link
                        href={href}
                        className="text-sm text-[var(--color-page-bg)]/85 transition-colors hover:text-[var(--color-brand-light)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-page-bg)]/12 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.78rem] text-[var(--color-page-bg)]/65">
            {t.footer.copyright}
          </p>
          <a
            href={links.mcbiz()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-[var(--color-page-bg)]/15 bg-[var(--color-page-bg)]/5 px-3.5 py-1.5 text-[0.78rem] text-[var(--color-page-bg)]/85 transition-colors hover:border-[var(--color-brand-light)] hover:text-[var(--color-brand-light)] md:self-auto"
          >
            {t.footer.siblingPill}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
