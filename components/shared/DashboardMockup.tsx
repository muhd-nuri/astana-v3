"use client";

import { ArrowUpRight, TrendingUp, AlertCircle, Search } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/utils";

type Variant = "hero" | "mini";

export function DashboardMockup({
  variant = "hero",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const { t } = useLocale();
  return (
    <div
      role="img"
      aria-label={t.a11y.decorativeDashboard}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-[var(--color-border-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)] shadow-[0_24px_60px_-20px_rgba(15,140,92,0.18)]",
        className,
      )}
    >
      <BrowserChrome />
      {variant === "hero" ? <HeroBody /> : <MiniBody />}
    </div>
  );
}

function BrowserChrome() {
  const { t } = useLocale();
  return (
    <div className="flex items-center gap-3 border-b border-[var(--color-border-hairline)] bg-[var(--color-surface-tint)]/60 px-3.5 py-2.5">
      <div className="flex items-center gap-1.5">
        <span className="block h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
        <span className="block h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
        <span className="block h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="inline-flex items-center gap-1.5 rounded-md bg-[var(--color-page-bg)] px-3 py-1 text-[0.7rem] text-[var(--color-ink-soft)] ring-1 ring-[var(--color-border-hairline)]">
          <Search className="h-3 w-3" />
          {t.dashboard.urlBar}
        </div>
      </div>
      <span className="w-[42px]" />
    </div>
  );
}

function HeroBody() {
  const { t } = useLocale();
  const value = useCountUp(t.dashboard.today, 1400);
  const formatted = value.toLocaleString("en-MY");

  return (
    <div className="grid grid-cols-12 gap-3 p-4 md:gap-4 md:p-5">
      <div className="col-span-12 md:col-span-7">
        <div className="rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)] p-4 md:p-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            {t.dashboard.todayLabel}
          </p>
          <div className="mt-2 flex items-end gap-2">
            <span className="font-display text-[clamp(1.75rem,4.4vw,2.6rem)] font-bold leading-none tracking-tight tabular-nums text-[var(--color-ink)]">
              {t.dashboard.todayPrefix}
              {formatted}
            </span>
            <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-[var(--color-brand-pale)] px-2 py-0.5 text-[0.7rem] font-semibold text-[var(--color-brand-deep)]">
              <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
              +12.4%
            </span>
          </div>
          <p className="mt-1 text-[0.72rem] text-[var(--color-text-muted)]">
            {t.dashboard.trendLabel}
          </p>
          <Sparkline className="mt-3 h-14 w-full" />
        </div>
      </div>

      <div className="col-span-12 md:col-span-5">
        <div className="flex h-full flex-col gap-3">
          <div className="rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)] p-3.5">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-pale)] text-[var(--color-brand-deep)]">
                <AlertCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.78rem] font-semibold text-[var(--color-ink)]">
                  {t.dashboard.lowStockLabel}
                </p>
                <p className="text-[0.72rem] text-[var(--color-ink-soft)]">
                  {t.dashboard.lowStockCount} {t.dashboard.lowStockUnit}
                </p>
              </div>
              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-[var(--color-ink-soft)]" />
            </div>
          </div>

          <ul className="flex flex-1 flex-col divide-y divide-[var(--color-border-hairline)] overflow-hidden rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)]">
            {t.dashboard.productList.map((p) => (
              <li
                key={p.name}
                className="flex items-center gap-3 px-3 py-2.5 text-[0.78rem]"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--color-brand-pale)] text-[var(--color-brand-deep)] font-semibold tabular-nums">
                  {p.qty}
                </span>
                <span className="min-w-0 flex-1 truncate text-[var(--color-ink)]">
                  {p.name}
                </span>
                <span className="text-[var(--color-ink-soft)] tabular-nums">
                  {p.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MiniBody() {
  const { t } = useLocale();
  const v = t.dashboard.miniViewInventory;
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-base font-bold tracking-tight text-[var(--color-ink)]">
          {v.title}
        </h3>
        <span className="text-[0.72rem] text-[var(--color-ink-soft)]">
          {v.summary}
        </span>
      </div>
      <ul className="mt-4 flex flex-col divide-y divide-[var(--color-border-hairline)] overflow-hidden rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)]">
        {v.rows.map((row) => (
          <li
            key={row.name}
            className="flex items-center gap-3 px-3.5 py-2.5 text-[0.8rem]"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--color-brand-pale)] text-[var(--color-brand-deep)] tabular-nums font-semibold">
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

function Sparkline({ className }: { className?: string }) {
  const points = [12, 18, 14, 22, 19, 28, 26, 33, 30, 38, 36, 44];
  const w = 320;
  const h = 56;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const stepX = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * stepX;
      const y = h - ((p - min) / (max - min || 1)) * (h - 4) - 2;
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
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#spark-fill)" />
      <path
        d={path}
        fill="none"
        stroke="var(--color-brand-primary)"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
