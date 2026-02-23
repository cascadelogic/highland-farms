import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/layout/GoogleTagManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Highland Farms | Oregon's Premier Farm Wedding Venue",
    template: "%s | Highland Farms Oregon",
  },
  description:
    "All-inclusive farm and forest weddings at the base of Mt. Hood. Highland Cow farm tours, Nordic spa, and luxury farm stays in Brightwood, Oregon.",
  keywords: [
    "Oregon wedding venue",
    "farm wedding",
    "Mt Hood wedding",
    "Highland Cow farm tour",
    "Nordic spa Oregon",
    "farm stay Oregon",
    "Brightwood Oregon",
  ],
  openGraph: {
    title: "Highland Farms | Oregon's Premier Farm Wedding Venue",
    description:
      "All-inclusive farm and forest weddings at the base of Mt. Hood.",
    url: "https://highlandfarmsoregon.com",
    siteName: "Highland Farms Oregon",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager />
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <GoogleTagManagerNoScript />
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
