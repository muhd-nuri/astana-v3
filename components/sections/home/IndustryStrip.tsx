"use client";

import {
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  Stethoscope,
  Dumbbell,
  BedDouble,
  Scissors,
  WashingMachine,
  Car,
  Pill,
  PawPrint,
  Shirt,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const ICONS: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  Stethoscope,
  Dumbbell,
  BedDouble,
  Scissors,
  WashingMachine,
  Car,
  Pill,
  PawPrint,
  Shirt,
};

export function IndustryStrip() {
  const { t } = useLocale();
  return (
    <SectionWrapper
      id="industries"
      tone="page"
      className="py-[clamp(2.5rem,5vw,4rem)]"
    >
      <div className="flex flex-col items-center gap-8">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-soft)]">
          {t.industries.eyebrow}
        </p>

        <div className="-mx-6 w-[calc(100%+3rem)] overflow-x-auto md:mx-0 md:w-full md:overflow-visible">
          <ul
            className="flex w-max min-w-full items-stretch gap-1 px-6 md:w-full md:flex-wrap md:justify-center md:gap-2 md:px-0"
            role="list"
          >
            {t.industries.items.map((item) => {
              const Icon = ICONS[item.icon] ?? ShoppingBag;
              return (
                <li key={item.key}>
                  <div className="group/ind inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 transition-colors duration-200 hover:border-[var(--color-border-hairline)] hover:bg-[var(--color-surface-tint)]">
                    <Icon
                      className="h-4 w-4 text-[var(--color-ink-soft)] transition-colors duration-200 group-hover/ind:text-[var(--color-brand-primary)]"
                      strokeWidth={1.75}
                    />
                    <span className="text-[0.85rem] font-medium text-[var(--color-ink)]">
                      {item.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
