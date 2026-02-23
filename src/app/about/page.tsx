import type { Metadata } from "next";
import Image from "next/image";
import { Bed, UtensilsCrossed, Wifi, Car } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageCarousel } from "@/components/gallery/ImageCarousel";
import { EventCategoryCards } from "@/components/shared/EventCategoryCards";

export const metadata: Metadata = {
  title: "About The Farm",
  description:
    "The story of Highland Farms — a transformed cedar mill property at the base of Mt. Hood featuring Highland Cows, forest lodging, and unforgettable experiences in Brightwood, Oregon.",
};

const amenities = [
  { icon: Bed, label: "Lodging Available", description: "Sleep up to 24 guests across three accommodations" },
  { icon: UtensilsCrossed, label: "3 Kitchens", description: "Full kitchens in the Lodge, Cottage, and Camp" },
  { icon: Wifi, label: "WiFi Access", description: "Stay connected throughout the property" },
  { icon: Car, label: "Event Parking", description: "Ample parking for guests and vendors" },
];

const galleryImages = [
  { src: "/images/farm/landscape-1.jpg", alt: "Highland Farms aerial view" },
  { src: "/images/farm/landscape-2.jpg", alt: "Forest path on property" },
  { src: "/images/farm/landscape-3.jpg", alt: "Spring-fed pond" },
  { src: "/images/farm/landscape-4.jpg", alt: "Mt. Hood from the farm" },
  { src: "/images/farm/cows.jpg", alt: "Highland Cows grazing" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-[url('/images/farm/about-hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <h1 className="text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
            About The Farm
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75 leading-relaxed font-sans font-light">
            A space where loved ones come together to reconnect with nature and
            each other.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-normal italic text-sage tracking-wide font-display mb-3">
                The Story of a Farm
              </p>
              <h2 className="text-3xl font-normal sm:text-4xl">
                From Cedar Mill to Highland Farms
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                Highland Farms began with a vision — to transform an overgrown
                cedar mill property at the base of Mt. Hood into a place where
                people could reconnect with nature, with animals, and with each
                other.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                Founder Connor McWilliams discovered the property and saw its
                potential: a spring-fed pond, old-growth trees draped in moss,
                and five acres of forest waiting to be brought back to life. What
                followed was years of passionate work to create the Highland Farms
                you see today.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                &ldquo;The potential to be a place for man, a place for nature,
                a place for everything and everything in its place.&rdquo;
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/farm/highland-cows-hero.jpg"
                alt="Highland Cows at Highland Farms Oregon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Amenities */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container>
          <SectionHeading
            eyebrow="The Lay of the Land"
            title="Property Amenities"
          />

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.label} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <amenity.icon className="h-6 w-6 text-forest" />
                </div>
                <h3 className="mt-4 text-base font-normal text-charcoal font-sans">
                  {amenity.label}
                </h3>
                <p className="mt-1 text-sm text-muted font-sans">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Forest Valley */}
      <section className="py-20 lg:py-28 bg-background">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-normal italic text-sage tracking-wide font-display mb-3">
            The Forest Valley
          </p>
          <h2 className="text-3xl font-normal sm:text-4xl">
            Brightwood, Oregon
          </h2>
          <p className="mt-4 text-base text-muted leading-relaxed font-sans">
            Midway between Mount Hood and the fertile Willamette Valley,
            Highland Farms sits in the heart of the Sandy River corridor. The
            area has a rich history — Oregon Trail traders and trappers once
            traversed these very forests. Today, it&apos;s a haven for those seeking
            peace, beauty, and connection with the Pacific Northwest.
          </p>
          <p className="mt-4 text-base text-muted leading-relaxed font-sans">
            Just 50 minutes from Portland and 20 minutes from Mt. Hood, Highland
            Farms is accessible yet feels worlds away from the city.
          </p>
        </Container>
      </section>

      {/* The Farm */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:order-1">
              <Image
                src="/images/farm/farm-animals.jpg"
                alt="Highland Cows and San Clemente Goats at Highland Farms"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-normal italic text-sage tracking-wide font-display mb-3">
                Cultivate &amp; Connect
              </p>
              <h2 className="text-3xl font-normal sm:text-4xl">The Farm</h2>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                At the heart of Highland Farms are our animals. Our gentle
                Highland Cows are the stars, but they share the property with
                Icelandic Sheep, White Peacocks, African Grey Geese, and San
                Clemente Goats.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                Whether you&apos;re here for a wedding, a farm tour, or a weekend
                stay, the animals are always there to brighten your day.
                They&apos;re perfect for photos, for calming the soul, and for
                creating memories that last a lifetime.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <SectionHeading title="The Property" />
          <ImageCarousel images={galleryImages} aspectRatio="video" />
        </Container>
      </section>

      <EventCategoryCards />
    </>
  );
}
