import type { Metadata } from "next";
// Importing fonts via next/font for Zero CLS
import { Playfair_Display, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roemah Koffie | Cultivating the Finest Indonesian Coffee Experience",
  description: "A heritage coffee sanctuary where the richness of Indonesian soil meets the precision of technical roasting.",
};

import FloatingDecorators from "@/components/FloatingDecorators";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${robotoMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-rk-cream text-rk-textMain selection:bg-rk-primary selection:text-rk-white overflow-x-hidden font-sans relative">
        <FloatingDecorators />
        {children}
      </body>
    </html>
  );
}
