import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import { DottedGridAtmosphere } from "@/components/shared/DottedGridAtmosphere";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-local",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={cn(bricolageGrotesque.variable, inter.variable)}
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
