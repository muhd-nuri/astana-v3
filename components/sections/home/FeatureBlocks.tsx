"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { BrowserChrome } from "@/components/shared/BrowserChrome";
import {
  SalesChartMock,
  InventoryListMock,
  StoreGridMock,
  PayoutsMock,
} from "@/components/shared/BrowserChromeMocks";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { cn } from "@/lib/utils";

type FeatureBlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageLeft?: boolean;
  mock: React.ReactNode;
};

function FeatureBlock({
  id,
  eyebrow,
  title,
  body,
  bullets,
  ctaLabel,
  ctaHref,
  imageLeft = false,
  mock,
}: FeatureBlockProps) {
  const reduced = useReducedMotion();
  return (
    <section
      id={id}
      className="relative isolate py-[clamp(3.5rem,7vw,5.5rem)]"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 items-center gap-y-12 px-6 md:gap-x-12 md:px-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: imageLeft ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "col-span-12 lg:col-span-6",
            imageLeft && "lg:order-2",
          )}
        >
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">
            {eyebrow}
          </p>
          <h2
            className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{
              fontSize: "var(--text-display-md)",
              lineHeight: "var(--text-display-md--line-height)",
            }}
          >
            {title}
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-ink-soft)]">
            {body}
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[0.95rem] text-[var(--color-ink)]">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {ctaLabel && ctaHref ? (
            <a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group/link mt-8 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-[var(--color-brand-deep)] transition-colors hover:text-[var(--color-brand-primary)]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </a>
          ) : null}
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className={cn(
            "relative col-span-12 lg:col-span-6",
            imageLeft && "lg:order-1",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 -z-10"
            style={{
              background: imageLeft
                ? "radial-gradient(50% 50% at 40% 50%, color-mix(in oklab, var(--color-brand-mid) 22%, transparent), transparent 70%)"
                : "radial-gradient(50% 50% at 60% 50%, color-mix(in oklab, var(--color-brand-mid) 22%, transparent), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <BrowserChrome
            url={
              id === "sales-analytics"
                ? "app.astanabiz.com/sales"
                : id === "inventory"
                  ? "app.astanabiz.com/inventory"
                  : id === "multi-store"
                    ? "app.astanabiz.com/stores"
                    : "app.astanabiz.com"
            }
          >
            {mock}
          </BrowserChrome>
        </motion.div>
      </div>
    </section>
  );
}

export function FeatureSalesAnalytics() {
  const { t } = useLocale();
  const fb = t.featureBlocks.salesAnalytics;
  return (
    <FeatureBlock
      id="sales-analytics"
      eyebrow={fb.eyebrow}
      title={fb.title}
      body={fb.body}
      bullets={fb.bullets}
      ctaLabel={fb.cta}
      ctaHref="https://astanabiz.com"
      mock={
        <SalesChartMock
          trendLabel="Revenue — last 30 days"
          total="RM 38,920"
          delta="+22.6%"
          caption="Best item: Nasi Lemak Special — 184 sold"
        />
      }
    />
  );
}

export function FeatureInventory() {
  const { t } = useLocale();
  const fb = t.featureBlocks.inventory;
  return (
    <FeatureBlock
      id="inventory"
      eyebrow={fb.eyebrow}
      title={fb.title}
      body={fb.body}
      imageLeft
      bullets={fb.bullets}
      ctaLabel={fb.cta}
      ctaHref="https://astanabiz.com"
      mock={<InventoryListMock />}
    />
  );
}

export function FeatureMultiStore() {
  const { t } = useLocale();
  const fb = t.featureBlocks.multiStore;
  return (
    <FeatureBlock
      id="multi-store"
      eyebrow={fb.eyebrow}
      title={fb.title}
      body={fb.body}
      bullets={fb.bullets}
      ctaLabel={fb.cta}
      ctaHref="https://astanabiz.com"
      mock={<StoreGridMock />}
    />
  );
}

export function FeaturePayments() {
  const { t } = useLocale();
  const fb = t.featureBlocks.payments;
  return (
    <FeatureBlock
      id="payments"
      eyebrow={fb.eyebrow}
      title={fb.title}
      body={fb.body}
      imageLeft
      bullets={fb.bullets}
      ctaLabel={fb.cta}
      ctaHref="https://astanabiz.com/pricing"
      mock={<PayoutsMock />}
    />
  );
}
