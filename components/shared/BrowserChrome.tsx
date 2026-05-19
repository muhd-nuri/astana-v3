"use client";

import { type ReactNode } from "react";
import { Search, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

type BrowserChromeProps = {
  /** URL shown in the address bar. Defaults to "app.astanabiz.com". */
  url?: string;
  /** Show a lock icon (https) before the URL. Defaults to true. */
  secure?: boolean;
  /** Wrapper element classes (border, shadow, radius). */
  className?: string;
  /** Inner content area classes (padding, background). */
  bodyClassName?: string;
  /** Tone variant. "light" = white surface (default). "dark" = night gradient chrome. */
  tone?: "light" | "dark";
  /** Optional aria-label for the whole frame (passed to role="img"). */
  ariaLabel?: string;
  children: ReactNode;
};

/**
 * BrowserChrome — a macOS-style browser frame used as a reusable placeholder
 * wrapper for dashboards, charts, lists, screenshots, etc. Replicates the
 * three-dot traffic lights + centered URL bar pattern from the original
 * dashboard mock.
 */
export function BrowserChrome({
  url = "app.astanabiz.com",
  secure = true,
  className,
  bodyClassName,
  tone = "light",
  ariaLabel,
  children,
}: BrowserChromeProps) {
  const isDark = tone === "dark";
  return (
    <div
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border",
        isDark
          ? "border-white/10 text-white shadow-[0_24px_60px_-20px_rgba(10,22,35,0.6)]"
          : "border-[var(--color-border-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)] shadow-[0_24px_60px_-20px_rgba(31,109,166,0.18)]",
        className,
      )}
      style={
        isDark ? { background: "var(--gradient-night)" } : undefined
      }
    >
      <ChromeBar url={url} secure={secure} tone={tone} />
      <div className={cn(isDark ? "bg-[#0f1f2e]" : "", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}

function ChromeBar({
  url,
  secure,
  tone,
}: {
  url: string;
  secure: boolean;
  tone: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b px-3.5 py-2.5",
        isDark
          ? "border-white/10 bg-white/[0.03]"
          : "border-[var(--color-border-hairline)] bg-[var(--color-surface-tint)]/60",
      )}
    >
      <div className="flex items-center gap-1.5">
        <span className="block h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
        <span className="block h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
        <span className="block h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-[0.7rem] ring-1",
            isDark
              ? "bg-white/5 text-white/70 ring-white/10"
              : "bg-[var(--color-page-bg)] text-[var(--color-ink-soft)] ring-[var(--color-border-hairline)]",
          )}
        >
          {secure ? (
            <Lock className="h-3 w-3" strokeWidth={2.5} />
          ) : (
            <Search className="h-3 w-3" />
          )}
          {url}
        </div>
      </div>
      <span className="w-[42px]" />
    </div>
  );
}
