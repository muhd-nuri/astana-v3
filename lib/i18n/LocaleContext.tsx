"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { ms, type Dictionary } from "./ms";
import { en } from "./en";

export type Locale = "ms" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Dictionary;
};

const dictionaries: Record<Locale, Dictionary> = { ms, en };

const STORAGE_KEY = "astanapos-locale";
const listeners = new Set<() => void>();

function readStored(): Locale {
  if (typeof window === "undefined") return "ms";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ms" || stored === "en") return stored;
  } catch {
    // localStorage may be disabled (private mode, sandbox)
  }
  return "ms";
}

const localeStore = {
  subscribe(cb: () => void): () => void {
    listeners.add(cb);
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) cb();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(cb);
      window.removeEventListener("storage", onStorage);
    };
  },
  getSnapshot(): Locale {
    return readStored();
  },
  getServerSnapshot(): Locale {
    return "ms";
  },
  set(value: Locale) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage may be disabled
    }
    document.documentElement.lang = value;
    listeners.forEach((l) => l());
  },
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    localeStore.subscribe,
    localeStore.getSnapshot,
    localeStore.getServerSnapshot,
  );

  const setLocale = useCallback((next: Locale) => {
    localeStore.set(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}
