import type { Metadata } from "next";
import { Check, Users, TreePine, Camera, UtensilsCrossed, Music, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageCarousel } from "@/components/gallery/ImageCarousel";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Farm & Forest Weddings",
  description:
    "All-inclusive farm and forest weddings at Highland Farms, Oregon. Exchange vows under towering evergreens with Highland Cows, on-site lodging for 24 guests, at the base of Mt. Hood.",
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
  { src: "/images/weddings/ceremony.jpg", alt: "Forest ceremony setup" },
  { src: "/images/weddings/couple.jpg", alt: "Couple with Highland Cows" },
  { src: "/images/weddings/reception.jpg", alt: "Outdoor reception" },
  { src: "/images/weddings/details.jpg", alt: "Wedding details" },
  { src: "/images/weddings/guests.jpg", alt: "Guests enjoying the farm" },
  { src: "/images/weddings/sunset.jpg", alt: "Sunset at Highland Farms" },
];

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-[url('/images/weddings/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80 font-sans">
            All-Inclusive Wedding Venue
          </p>
          <h1 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Your Dream Wedding in the Forest
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 leading-relaxed font-sans">
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
              className="border-white text-white hover:bg-white/10 hover:text-white"
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
                className="flex items-start gap-4 rounded-sm bg-white p-5 shadow-sm"
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
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted mb-3 font-sans">
                The Venue
              </p>
              <h2 className="text-3xl font-medium sm:text-4xl">
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

            {/* Image placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br from-cream to-cream-dark">
              <div className="absolute inset-0 flex items-center justify-center text-sm text-muted font-sans">
                Venue overview photo
              </div>
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
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-background">
        <Container className="max-w-3xl text-center">
          <blockquote>
            <p className="text-2xl font-medium leading-relaxed text-charcoal">
              &ldquo;Highland Farms was beyond anything we could have imagined.
              The forest ceremony, the Highland Cows, the lodge — every detail
              was perfect. Our guests are still talking about it.&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-charcoal font-sans">
            — A Happy Couple
          </p>
          <p className="mt-1 text-xs text-muted font-sans">
            Replace with real testimonial
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-forest text-white text-center">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-medium sm:text-4xl">
            Ready to Start Planning?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80 font-sans leading-relaxed">
            Every wedding at Highland Farms is unique. Tell us about your vision
            and we&apos;ll create a custom package for your special day.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" className="bg-white text-charcoal hover:bg-cream">
              Get Your Custom Quote
            </Button>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-sm text-white/80 hover:text-white transition-colors font-sans"
            >
              Or call us at {CONTACT.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
