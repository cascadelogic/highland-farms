import type { Metadata } from "next";
import { Clock, Users, Heart, Sparkles, Gift } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageCarousel } from "@/components/gallery/ImageCarousel";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { EventCategoryCards } from "@/components/shared/EventCategoryCards";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { farmTourFAQ } from "@/data/farm-tours";
import { BOOKING_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Highland Cow Farm Tours",
  description:
    "Book a private Highland Cow farm tour in Oregon. Meet our Highland Cows, Icelandic Sheep, White Peacocks, and more. 60-minute private experiences at the base of Mt. Hood.",
};

const galleryImages = [
  { src: "/images/farm/cow-1.jpg", alt: "Highland Cow close-up" },
  { src: "/images/farm/cow-2.jpg", alt: "Guest brushing Highland Cow" },
  { src: "/images/farm/sheep.jpg", alt: "Icelandic Sheep" },
  { src: "/images/farm/peacock.jpg", alt: "White Peacock" },
  { src: "/images/farm/geese.jpg", alt: "African Grey Geese" },
  { src: "/images/farm/goats.jpg", alt: "San Clemente Goats" },
];

const features = [
  {
    icon: Heart,
    title: "Meet the Animals",
    description:
      "Highland Cows, Icelandic Sheep, White Peacocks, African Grey Geese, and San Clemente Goats.",
  },
  {
    icon: Users,
    title: "Private & Personal",
    description:
      "Up to 6 guests per tour. It's just you, your group, and the animals — no crowds.",
  },
  {
    icon: Clock,
    title: "60-Minute Experience",
    description:
      "Plenty of time to brush, pet, and photograph the Highland Cows and explore the farm.",
  },
  {
    icon: Sparkles,
    title: "Perfect for All Ages",
    description:
      "From toddlers to grandparents, everyone falls in love with our gentle Highland Cows.",
  },
];

export default function FarmToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-[url('/images/farm/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80 font-sans">
            Highland Farms Oregon
          </p>
          <h1 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Meet Our Highland Cows
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 leading-relaxed font-sans">
            Book a private farm tour and get up close with our gentle Highland
            Cows, Icelandic Sheep, White Peacocks, and more.
          </p>
          <div className="mt-8">
            <Button
              href={BOOKING_LINKS.farmTour}
              size="lg"
              className="bg-white text-charcoal hover:bg-cream"
              external
            >
              Book Your Private Tour
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container>
          <SectionHeading
            eyebrow="What to Expect"
            title="A Private Farm Experience"
            subtitle="Your 60-minute tour is an intimate, hands-on experience with our animals."
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
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
          <SectionHeading
            title="Life on the Farm"
            subtitle="Get a glimpse of the animals you'll meet on your tour."
          />
          <ImageCarousel images={galleryImages} aspectRatio="photo" />
        </Container>
      </section>

      {/* Pricing & Details */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Book Your Tour"
            title="Tour Details & Pricing"
          />

          <div className="rounded-sm bg-white p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-cream-light pb-4">
                <span className="text-base font-medium text-charcoal font-sans">
                  Private Highland Cow Farm Tour
                </span>
                <span className="text-lg font-semibold text-forest font-sans">
                  Contact for Pricing
                </span>
              </div>
              <ul className="space-y-2.5 text-sm text-muted font-sans">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-forest" />
                  60-minute private experience
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-forest" />
                  Up to 6 guests per tour
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-forest" />
                  Hands-on interaction with all animals
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button
                href={BOOKING_LINKS.farmTour}
                size="lg"
                className="w-full"
                external
              >
                Book Your Tour Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Gift Certificates */}
      <section className="py-20 lg:py-28 bg-background">
        <Container className="max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream mb-6">
            <Gift className="h-6 w-6 text-forest" />
          </div>
          <h2 className="text-3xl font-medium sm:text-4xl">
            Give the Gift of Highland Farms
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted font-sans leading-relaxed">
            Farm tours and spa sessions make unforgettable gifts. Purchase a
            gift certificate for someone special.
          </p>
          <div className="mt-8">
            <Button href={BOOKING_LINKS.giftCertificates} variant="outline" external>
              Purchase Gift Certificates
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our farm tours."
          />
          <FAQAccordion items={farmTourFAQ} />
        </Container>
      </section>

      {/* Social Proof */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container className="max-w-3xl text-center">
          <blockquote>
            <p className="text-2xl font-medium leading-relaxed text-charcoal">
              &ldquo;The Highland Cows were so gentle and friendly. My kids are
              still talking about it weeks later. An absolute must-do when
              visiting Oregon!&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-charcoal font-sans">
            — A Happy Visitor
          </p>
          <p className="mt-1 text-xs text-muted font-sans">
            Replace with real testimonial
          </p>
        </Container>
      </section>

      <EventCategoryCards />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA
        label="Book Your Farm Tour"
        href={BOOKING_LINKS.farmTour}
      />

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
