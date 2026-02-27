import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Dancing_Script } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { StructuredData } from "@/components/layout/StructuredData";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/layout/GoogleTagManager";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    "farm wedding Oregon",
    "Mt Hood wedding venue",
    "Highland Cow farm tour Portland",
    "Nordic spa Oregon",
    "farm stay Oregon",
    "Brightwood Oregon wedding",
    "Portland wedding venue",
    "forest wedding Oregon",
    "intimate wedding venue Oregon",
    "destination wedding Mt Hood",
    "Highland Farms Oregon",
    "Brightwood farm stay",
    "Scottish Highland Cow farm tour",
    "cedar hot tub Oregon",
    "farm wedding near Portland",
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
    <html lang="en" className="overflow-x-hidden">
      <head>
        <StructuredData />
      </head>
      <body className={`${cormorant.variable} ${lora.variable} ${dancingScript.variable} antialiased overflow-x-hidden`}>
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
