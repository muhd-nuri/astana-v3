import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { cn } from "@/lib/utils";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import { DottedGridAtmosphere } from "@/components/shared/DottedGridAtmosphere";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display-local",
  display: "swap",
  preload: true,
});

const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-body-local",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astana POS — Sistem Juruwang Cloud untuk PKS Malaysia",
  description:
    "Sistem POS cloud yang tidak menghadkan pertumbuhan anda. Jualan tanpa had, stok tanpa had, laporan tanpa had — dipercayai oleh 7,000+ kedai di Malaysia.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      suppressHydrationWarning
      className={cn(cabinetGrotesk.variable, generalSans.variable)}
    >
      <body className="font-body antialiased">
        <LocaleProvider>
          <DottedGridAtmosphere />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
        </LocaleProvider>
      </body>
    </html>
  );
}
