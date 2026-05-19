"use client";

import {
  TrendingUp,
  ArrowUpRight,
  AlertCircle,
  Store,
  Package,
  ChartBar,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reusable content blocks designed to live inside <BrowserChrome>.
 * Each block is a self-contained mock that acts as a placeholder image:
 * vary the numbers/labels per section so the same chrome can be reused
 * multiple times across the page without feeling repetitive.
 */

type SalesChartProps = {
  total?: string;
  delta?: string;
  trendLabel?: string;
  points?: number[];
  caption?: string;
};

export function SalesChartMock({
  total = "RM 12,480",
  delta = "+18.2%",
  trendLabel = "Sales — last 30 days",
  points = [8, 12, 9, 15, 14, 19, 16, 22, 24, 28, 26, 34, 31, 38, 42, 48],
  caption = "Best day: Sat — RM 1,820",
}: SalesChartProps) {
  return (
    <div className="p-4 md:p-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            {trendLabel}
          </p>
          <div className="mt-2 flex items-end gap-2">
            <span className="font-display text-[clamp(1.6rem,3.4vw,2.2rem)] font-bold leading-none tracking-tight tabular-nums text-[var(--color-ink)]">
              {total}
            </span>
            <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-[var(--color-brand-pale)] px-2 py-0.5 text-[0.7rem] font-semibold text-[var(--color-brand-forest)]">
              <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
              {delta}
            </span>
          </div>
        </div>
        <ChartBar className="h-4 w-4 text-[var(--color-ink-soft)]" />
      </div>
      <BigChart points={points} className="mt-5 h-40 w-full" />
      <p className="mt-3 text-[0.72rem] text-[var(--color-text-muted)]">
        {caption}
      </p>
    </div>
  );
}

export function InventoryListMock({
  title = "Inventory",
  summary = "412 active SKUs",
  rows = defaultInventoryRows,
}: {
  title?: string;
  summary?: string;
  rows?: Array<{ qty: number; name: string; status: string }>;
}) {
  return (
    <div className="p-4 md:p-6">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-base font-bold tracking-tight text-[var(--color-ink)]">
          {title}
        </h3>
        <span className="text-[0.72rem] text-[var(--color-ink-soft)]">
          {summary}
        </span>
      </div>
      <ul className="mt-4 flex flex-col divide-y divide-[var(--color-border-hairline)] overflow-hidden rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)]">
        {rows.map((row) => (
          <li
            key={row.name}
            className="flex items-center gap-3 px-3.5 py-2.5 text-[0.8rem]"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)] tabular-nums font-semibold">
              {row.qty}
            </span>
            <span className="min-w-0 flex-1 truncate text-[var(--color-ink)]">
              {row.name}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF1E5] px-2 py-0.5 text-[0.7rem] font-medium text-[#7A4A1A]">
              <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
              {row.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const defaultInventoryRows = [
  { qty: 6, name: "Chocolate Cookies 100g", status: "Low stock" },
  { qty: 4, name: "Kopi O Sachet", status: "Low stock" },
  { qty: 9, name: "Condensed Milk 397g", status: "Low stock" },
  { qty: 2, name: "Roti Canai Frozen", status: "Reorder" },
];

export function StoreGridMock({
  stores = defaultStores,
  caption = "All stores — today",
}: {
  stores?: Array<{ name: string; revenue: string; delta: string; trend: "up" | "down" }>;
  caption?: string;
}) {
  return (
    <div className="p-4 md:p-6">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-base font-bold tracking-tight text-[var(--color-ink)]">
          Multi-store snapshot
        </h3>
        <span className="text-[0.72rem] text-[var(--color-ink-soft)]">
          {caption}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {stores.map((store) => (
          <div
            key={store.name}
            className="rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)] p-3"
          >
            <div className="flex items-center gap-2 text-[0.72rem] font-medium text-[var(--color-ink-soft)]">
              <Store className="h-3.5 w-3.5" strokeWidth={2.25} />
              {store.name}
            </div>
            <p className="mt-2 font-display text-[1.05rem] font-bold leading-none tabular-nums tracking-tight text-[var(--color-ink)]">
              {store.revenue}
            </p>
            <p
              className={cn(
                "mt-1.5 inline-flex items-center gap-0.5 text-[0.7rem] font-semibold tabular-nums",
                store.trend === "up"
                  ? "text-[var(--color-brand-forest)]"
                  : "text-[#b75000]",
              )}
            >
              {store.trend === "up" ? (
                <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
              ) : (
                <ArrowUpRight className="h-3 w-3 rotate-90" strokeWidth={2.5} />
              )}
              {store.delta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const defaultStores: Array<{
  name: string;
  revenue: string;
  delta: string;
  trend: "up" | "down";
}> = [
  { name: "Bandar Puncak Alam", revenue: "RM 4,820", delta: "+12.4%", trend: "up" },
  { name: "Shah Alam Seksyen 7", revenue: "RM 3,650", delta: "+8.1%", trend: "up" },
  { name: "Kota Damansara", revenue: "RM 2,940", delta: "+15.8%", trend: "up" },
  { name: "Subang Jaya SS15", revenue: "RM 1,260", delta: "-2.3%", trend: "down" },
];

export function PayoutsMock({
  total = "RM 38,920",
  payouts = [
    { label: "FPX / DuitNow", amount: "RM 18,420", share: 0.47 },
    { label: "Visa / Mastercard", amount: "RM 12,840", share: 0.33 },
    { label: "Cash", amount: "RM 5,260", share: 0.13 },
    { label: "TnG eWallet", amount: "RM 2,400", share: 0.07 },
  ],
}: {
  total?: string;
  payouts?: Array<{ label: string; amount: string; share: number }>;
}) {
  return (
    <div className="p-4 md:p-6">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            Payouts this month
          </p>
          <p className="mt-1.5 font-display text-[clamp(1.5rem,3vw,2rem)] font-bold leading-none tabular-nums tracking-tight text-[var(--color-ink)]">
            {total}
          </p>
        </div>
        <Wallet className="h-4 w-4 text-[var(--color-ink-soft)]" />
      </div>
      <ul className="mt-5 flex flex-col gap-3">
        {payouts.map((p) => (
          <li key={p.label}>
            <div className="flex items-baseline justify-between text-[0.78rem]">
              <span className="text-[var(--color-ink)]">{p.label}</span>
              <span className="tabular-nums text-[var(--color-ink-soft)]">
                {p.amount}
              </span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-border-hairline)]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.round(p.share * 100)}%`,
                  background: "var(--gradient-brand)",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Larger bar/line chart for hero & feature blocks. Pure SVG so it stays
 * crisp at any size and tints from --color-brand-primary.
 */
function BigChart({
  points,
  className,
}: {
  points: number[];
  className?: string;
}) {
  const w = 320;
  const h = 140;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const stepX = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * stepX;
      const y = h - ((p - min) / (max - min || 1)) * (h - 12) - 6;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const areaPath = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="big-spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-brand-mid)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-brand-mid)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="big-spark-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2b80c2" />
          <stop offset="50%" stopColor="#2da3a7" />
          <stop offset="100%" stopColor="#37b34a" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#big-spark-fill)" />
      <path
        d={path}
        fill="none"
        stroke="url(#big-spark-stroke)"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function MockPackageBadge() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-brand-pale)] text-[var(--color-brand-forest)]">
      <Package className="h-3.5 w-3.5" strokeWidth={2.5} />
    </span>
  );
}
