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
  return (
    <FeatureBlock
      id="sales-analytics"
      eyebrow="Sales Analytics"
      title="See every ringgit move — from phone, tablet or desktop."
      body="Access your reports from a smartphone, tablet or computer anytime, anywhere."
      bullets={[
        "View revenue, average sale and profit at a glance",
        "Track sales trends and react to changes promptly",
        "Determine best-selling items and categories",
        "Full sales history with unlimited date range",
        "Export to spreadsheets in one click",
      ]}
      ctaLabel="Explore reporting"
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
  return (
    <FeatureBlock
      id="inventory"
      eyebrow="Inventory Management"
      title="Never run out of stock again."
      body="Real-time stock visibility across every store with automatic low-stock alerts."
      imageLeft
      bullets={[
        "Track stock levels in real time",
        "Receive automatic low-stock alerts",
        "Send orders to suppliers and track receipts",
        "Transfer stock between your stores",
        "Print barcode labels in seconds",
      ]}
      ctaLabel="See inventory tools"
      ctaHref="https://astanabiz.com"
      mock={<InventoryListMock />}
    />
  );
}

export function FeatureMultiStore() {
  return (
    <FeatureBlock
      id="multi-store"
      eyebrow="Multi-store Management"
      title="Grow from one shop to a hundred."
      body="Manage every item, employee and customer across multiple locations from a single account."
      bullets={[
        "Compare performance of your stores side by side",
        "Centralised items, staff and customers across locations",
        "Scale up your business with automation ERP",
      ]}
      ctaLabel="Explore multi-store"
      ctaHref="https://astanabiz.com"
      mock={<StoreGridMock />}
    />
  );
}

export function FeaturePayments() {
  return (
    <FeatureBlock
      id="payments"
      eyebrow="Financial Management"
      title="Reconcile every payout, automatically."
      body="Automated sales summary with unrestricted date filters — see net profit before COGS, overheads and opex."
      imageLeft
      bullets={[
        "P&L, Balance sheet, AP & AR — built in",
        "EPF, SOCSO, EIS payroll calculations",
        "Profit margin, mark-up and inventory value",
      ]}
      ctaLabel="See financial suite"
      ctaHref="https://astanabiz.com/pricing"
      mock={<PayoutsMock />}
    />
  );
}
