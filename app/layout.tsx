import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { quote } from "@/lib/quote";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `Quote ${quote.meta.quoteId} | ${quote.hero.title} — ${quote.meta.company}`,
  description:
    "Confidential quote from Eyevinn Technology: a fixed-fee NDA-protected streaming service discovery workshop with optional T&M advisory.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
