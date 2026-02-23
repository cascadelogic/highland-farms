import type { Metadata } from "next";
import Image from "next/image";
import { Check, Users, TreePine, Camera, UtensilsCrossed, Music, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { ContactForm } from "@/components/forms/ContactForm";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Farm & Forest Weddings — Brightwood, Oregon",
  description:
    "All-inclusive farm and forest weddings at Highland Farms, Brightwood, Oregon. Exchange vows under towering evergreens with Highland Cows, on-site lodging for 24 guests, at the base of Mt. Hood. 50 minutes from Portland.",
  alternates: { canonical: "/weddings" },
  openGraph: {
    title: "Farm & Forest Weddings at Highland Farms Oregon",
    description:
      "All-inclusive wedding venue at the base of Mt. Hood with five acres of forest, Scottish Highland Cows, and on-site lodging for 24 guests.",
    url: "https://highlandfarmsoregon.com/weddings",
    type: "website",
  },
};

const included = [
  { icon: TreePine, text: "Exclusive use of the entire 5-acre property" },
  { icon: Users, text: "On-site lodging for up to 24 guests" },
  { icon: UtensilsCrossed, text: "Full kitchen access for catering" },
  { icon: Camera, text: "Highland Cow photo opportunities" },
  { icon: Music, text: "Ceremony and reception areas" },
  { icon: Heart, text: "Dedicated event coordination" },
];

const galleryImages = [
  { src: "/images/weddings/ceremony.jpg", alt: "Couple at reception table with string lights" },
  { src: "/images/weddings/hannah-max/01.jpg", alt: "Couple kissing with Highland Cow calf in forest" },
  { src: "/images/weddings/couple.jpg", alt: "Forest ceremony setup with wooden arch" },
  { src: "/images/weddings/details.jpg", alt: "Wedding details and florals" },
  { src: "/images/weddings/guests.jpg", alt: "Wedding celebration at Highland Farms" },
  { src: "/images/weddings/sunset.jpg", alt: "Evening reception at Highland Farms" },
];

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden pt-[var(--header-h,120px)]">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-[url('/images/weddings/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-white/80 font-sans">
            All-Inclusive Wedding Venue
          </p>
          <h1 className="text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
            Your Dream Wedding in the Forest
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 leading-relaxed font-sans font-light">
            Exchange vows under towering evergreens, celebrate with Highland Cows,
            and host your closest family and friends on-site at the base of Mt. Hood.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" className="bg-white text-charcoal hover:bg-cream">
              Get Your Custom Quote
            </Button>
            <Button
              href="#gallery"
              variant="outline"
              size="lg"
              className="border-white/60 text-white hover:bg-white/10 hover:border-white/80 hover:text-white"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Why Highland Farms */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Why Highland Farms"
            title="An All-Inclusive Experience"
            subtitle="We take care of everything so you can focus on what matters — each other."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shrink-0">
                  <item.icon className="h-5 w-5 text-forest" />
                </div>
                <p className="text-sm text-charcoal leading-relaxed font-sans">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Venue */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-normal italic text-sage tracking-wide font-display mb-3">
                The Venue
              </p>
              <h2 className="text-3xl font-normal sm:text-4xl">
                Five Acres of Forest &amp; Farm
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                Highland Farms sits on five forested acres at the base of Mt.
                Hood. The property features a historic cedar mill lodge,
                spring-fed pond, old-growth trees draped in moss, and of course —
                our beloved Highland Cows.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                Your wedding party can stay on-site in our Lodge (8 guests),
                Cottage (8 guests), and Camp (4 guests) — making it a true
                destination wedding experience for up to 24 of your closest
                people.
              </p>

              <ul className="mt-6 space-y-2">
                {[
                  "Forest ceremony sites",
                  "Outdoor reception areas",
                  "Highland Cow photo ops",
                  "Nordic cedar soaking tubs",
                  "On-site accommodations for 24",
                  "Full kitchen for catering",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-charcoal font-sans"
                  >
                    <Check className="h-4 w-4 text-forest shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/hero/farm-aerial.jpg"
                alt="Aerial view of Highland Farms wedding venue"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 lg:py-28 bg-cream">
        <Container>
          <SectionHeading
            title="Wedding Gallery"
            subtitle="See real celebrations at Highland Farms."
          />
          <ImageGallery images={galleryImages} columns={3} />
          <div className="mt-10 text-center">
            <Button href="/wedding-portfolio" variant="outline">
              View Full Wedding Portfolio &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-background">
        <Container className="max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Heart key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <blockquote>
            <p className="text-xl font-normal leading-relaxed text-charcoal sm:text-2xl font-display">
              &ldquo;We had our wedding at Highland Farms and I can not recommend
              them highly enough!! An absolutely stunning and unique venue that
              surpassed our wildest dreams! Connor made every part of the process
              so simple and seamless!&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 text-sm text-charcoal font-sans font-normal">
            Hannah M.
          </p>
          <p className="mt-0.5 text-xs text-muted font-sans font-light">
            Google Review — Wedding
          </p>
          <a
            href="https://share.google/jrLOI4AhnpzbPPBpF"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-light text-forest hover:text-forest-light transition-colors font-sans tracking-wide"
          >
            Read all 146+ reviews on Google &rarr;
          </a>
        </Container>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Ready to Start Planning?"
            title="Check Availability for Your Date"
            subtitle="2026 dates are filling quickly. Every wedding at Highland Farms is unique — tell us your vision and we'll create a custom package."
          />
          <div className="mx-auto max-w-xl rounded-xl border border-cream-dark bg-white p-6 sm:p-8 shadow-sm">
            <ContactForm
              defaultEventType="wedding"
              heading=""
              subtitle=""
              ctaText="Check Availability"
            />
          </div>
          <p className="mt-6 text-center text-sm text-muted font-sans">
            Prefer to talk? Call us at{" "}
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-forest font-medium hover:text-forest-light transition-colors">
              {CONTACT.phone}
            </a>
          </p>
        </Container>
      </section>

      {/* Sticky mobile CTA */}
      <StickyMobileCTA
        label="Get Your Custom Quote"
        href="/contact"
      />
      <div className="h-20 lg:hidden" />
    </>
  );
}
