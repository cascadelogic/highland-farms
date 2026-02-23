import type { Metadata } from "next";
import { Clock, Users, Droplets, TreePine, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageCarousel } from "@/components/gallery/ImageCarousel";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { EventCategoryCards } from "@/components/shared/EventCategoryCards";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { nordicSpaFAQ } from "@/data/nordic-spa";
import { BOOKING_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nordic Forest Spa",
  description:
    "Soak in cedar hot tubs nestled among towering evergreens. Book a private 60-minute Nordic spa session at Highland Farms, Brightwood, Oregon.",
};

const galleryImages = [
  { src: "/images/spa/spa-1.jpg", alt: "Cedar spa deck nestled among old-growth forest" },
  { src: "/images/spa/spa-2.jpg", alt: "Spa deck with cold plunge tub and string lights" },
  { src: "/images/spa/spa-3.jpg", alt: "Guests in robes relaxing on the spa deck" },
  { src: "/images/spa/spa-6.jpg", alt: "Inside the cedar sauna" },
  { src: "/images/spa/spa-7.jpg", alt: "Overhead view of guests in the soaking tub" },
  { src: "/images/spa/spa-8.jpg", alt: "Steam room with chromotherapy lighting" },
];

export default function NordicSpaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-[var(--header-h,80px)]">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-[url('/images/spa/spa-1.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80 font-sans">
            Highland Farms Oregon
          </p>
          <h1 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Soak in the Forest
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 leading-relaxed font-sans">
            Cedar soaking tubs nestled among towering Pacific Northwest
            evergreens. Unwind in nature's embrace.
          </p>
          <div className="mt-8">
            <Button
              href={BOOKING_LINKS.nordicSpa}
              size="lg"
              className="bg-white text-charcoal hover:bg-cream"
              external
            >
              Book Your Spa Session
            </Button>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container>
          <SectionHeading
            eyebrow="The Experience"
            title="Nordic-Inspired Forest Bathing"
            subtitle="Inspired by Scandinavian wellness traditions, our cedar soaking tubs bring you closer to nature."
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: Droplets,
                title: "Cedar Soaking Tubs",
                description:
                  "Hand-built cedar tubs filled with naturally heated water, set among the trees.",
              },
              {
                icon: TreePine,
                title: "Forest Setting",
                description:
                  "Surrounded by towering old-growth evergreens, moss-covered trees, and the sounds of nature.",
              },
              {
                icon: Clock,
                title: "60-Minute Sessions",
                description:
                  "A full hour to soak, relax, and let the forest restore your mind and body.",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream">
                  <feature.icon className="h-6 w-6 text-forest" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal font-sans">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <SectionHeading title="The Spa" subtitle="Where forest meets water." />
          <ImageCarousel images={galleryImages} aspectRatio="video" />
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Book Your Session"
            title="Session Details & Pricing"
          />

          <div className="rounded-sm bg-white p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-cream-light pb-4">
                <span className="text-base font-medium text-charcoal font-sans">
                  Private Nordic Spa Session
                </span>
                <span className="text-lg font-semibold text-forest font-sans">
                  Contact for Pricing
                </span>
              </div>
              <ul className="space-y-2.5 text-sm text-muted font-sans">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-forest" />
                  60-minute private session
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-forest" />
                  Accommodates 6-8 guests
                </li>
                <li className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-forest" />
                  Cedar soaking tub in the forest
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button
                href={BOOKING_LINKS.nordicSpa}
                size="lg"
                className="w-full"
                external
              >
                Book Your Session
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Upsell */}
      <section className="py-20 lg:py-28 bg-background">
        <Container className="max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream mb-6">
            <Sparkles className="h-6 w-6 text-forest" />
          </div>
          <h2 className="text-3xl font-medium sm:text-4xl">
            Combine With a Farm Tour
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted font-sans leading-relaxed">
            Make it a full Highland Farms experience — meet the Highland Cows,
            then unwind in the cedar tubs. Book both and save.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/farm-tours">Book a Farm Tour</Button>
            <Button href={BOOKING_LINKS.giftCertificates} variant="outline" external>
              Gift Certificates
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about the Nordic spa."
          />
          <FAQAccordion items={nordicSpaFAQ} />
        </Container>
      </section>

      {/* Social Proof */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container className="max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Sparkles key={i} className="h-4 w-4 text-accent" />
            ))}
          </div>
          <blockquote>
            <p className="text-xl font-medium leading-relaxed text-charcoal sm:text-2xl">
              &ldquo;We loved walking the property, taking in the peaceful forest
              setting, and soaking in the hot tub under the stars. This was easily
              one of the highlights of our Oregon trip.&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 text-sm text-muted font-sans">
            — Google Review
          </p>
          <a
            href="https://share.google/jrLOI4AhnpzbPPBpF"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest hover:text-forest-light transition-colors font-sans"
          >
            Read all reviews on Google &rarr;
          </a>
        </Container>
      </section>

      <EventCategoryCards />

      <StickyMobileCTA
        label="Book Your Spa Session"
        href={BOOKING_LINKS.nordicSpa}
        external
      />

      <div className="h-20 lg:hidden" />
    </>
  );
}
