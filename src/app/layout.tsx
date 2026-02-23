import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { StructuredData } from "@/components/layout/StructuredData";
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
  metadataBase: new URL("https://highlandfarmsoregon.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Oregon wedding venue",
    "farm wedding",
    "Mt Hood wedding",
    "Highland Cow farm tour",
    "Nordic spa Oregon",
    "farm stay Oregon",
    "Brightwood Oregon",
    "Portland wedding venue",
    "forest wedding Oregon",
    "intimate wedding venue",
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
  twitter: {
    card: "summary_large_image",
    title: "Highland Farms | Oregon's Premier Farm Wedding Venue",
    description:
      "All-inclusive farm and forest weddings at the base of Mt. Hood.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <GoogleTagManager />
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <GoogleTagManagerNoScript />
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
