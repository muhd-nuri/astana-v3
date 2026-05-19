"use client";

import { cn } from "@/lib/utils";
import { useLocale, type Locale } from "@/lib/i18n/LocaleContext";

function Segment({
  value,
  label,
  active,
  onSelect,
}: {
  value: Locale;
  label: string;
  active: boolean;
  onSelect: (value: Locale) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-pressed={active}
      className={cn(
        "px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200",
        "first:rounded-l-full last:rounded-r-full",
        active
          ? "bg-[var(--color-brand-primary)] text-[var(--color-page-bg)]"
          : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]",
      )}
    >
      {label}
    </button>
  );
}

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.languageToggle.label}
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)]/60 backdrop-blur-sm",
        className,
      )}
    >
      <Segment
        value="ms"
        label={t.languageToggle.bm}
        active={locale === "ms"}
        onSelect={setLocale}
      />
      <Segment
        value="en"
        label={t.languageToggle.en}
        active={locale === "en"}
        onSelect={setLocale}
      />
    </div>
  );
}
