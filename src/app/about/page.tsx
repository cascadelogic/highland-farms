import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bed, UtensilsCrossed, Wifi, Car, Users, TreePine, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImageCarousel } from "@/components/gallery/ImageCarousel";
import { EventCategoryCards } from "@/components/shared/EventCategoryCards";

export const metadata: Metadata = {
  title: "About The Farm — Highland Farms Brightwood, Oregon",
  description:
    "The story of Highland Farms — from a California ranch dream to a five-acre forest property at the base of Mt. Hood. Scottish Highland Cows, forest lodging for 24 guests, Nordic spa, and unforgettable experiences in Brightwood, Oregon.",
  alternates: { canonical: "/about" },
};

const amenities = [
  { icon: Bed, label: "Lodging for 24", description: "Three unique accommodations across the property" },
  { icon: UtensilsCrossed, label: "3 Full Kitchens", description: "In the Lodge, Cottage, and Airstream Camp" },
  { icon: Wifi, label: "WiFi Access", description: "Stay connected throughout the property" },
  { icon: Car, label: "Event Parking", description: "Ample parking for guests and vendors" },
];

const galleryImages = [
  { src: "/images/farm/farm-grounds.jpg", alt: "Highland Farms property grounds and forest" },
  { src: "/images/farm/ranch-view.jpg", alt: "View of the ranch at Highland Farms" },
  { src: "/images/farm/mountain-view.jpg", alt: "Mt. Hood visible from Highland Farms" },
  { src: "/images/farm/farm-garden.jpg", alt: "Garden and grounds at Highland Farms" },
  { src: "/images/farm/agritourism.jpg", alt: "Highland Farms agritourism experience" },
  { src: "/images/farm/cows.jpg", alt: "Highland Cow mama and calf near the barn" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-[var(--header-h,120px)]">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-[url('/images/farm/about-hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-white/80 font-sans">
            Our Story
          </p>
          <h1 className="text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
            About The Farm
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 leading-relaxed font-sans font-light italic">
            &ldquo;We created Highland Farms with the intention of providing a space
            where loved ones can come together to reconnect with nature and each other.&rdquo;
          </p>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-normal italic text-sage tracking-wide font-display mb-3">
                The Story of a Farm
              </p>
              <h2 className="text-3xl font-normal sm:text-4xl">
                From a California Ranch to Mt. Hood
              </h2>
              <p className="mt-5 text-base text-muted leading-relaxed font-sans">
                Every farm has a story — that of Highland Farms begins on a ranch
                600 miles south of Mount Hood, located halfway between the fertile
                fields of the Central Valley and the Pacific Ocean. The Church ranch
                in Salinas, California, cultivated a deep love and passion for farm
                life, the smells of the earth, and the cowboy lifestyle in Connor
                McWilliams.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                This passion coupled itself with an enterprising plan: hang a shingle
                as a general contractor until that career could yield a farm and
                livestock of his own. Work in the construction industry naturally led
                to experience in hospitality and design, and being a natural dreamer,
                Connor couldn&apos;t imagine owning a property without creating an
                experience to share with the world.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/farm/farm-life.jpg"
                alt="Connor with a Highland Cow calf at Highland Farms"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* The Vision */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container className="max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-normal italic text-sage tracking-wide font-display mb-3">
              The Vision
            </p>
            <h2 className="text-3xl font-normal sm:text-4xl">
              Uncovering the Potential
            </h2>
          </div>
          <p className="mt-6 text-base text-muted leading-relaxed font-sans text-center">
            This vision led to the creation of Highland Farms — an overgrown property
            uncovered from decades of nature&apos;s re-wilding at the base of Mt. Hood.
            Highland Farms needed someone with a dream to see its full potential:
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                icon: TreePine,
                text: "The potential of its old-growth trees fringing the property, draped in moss and quiet.",
              },
              {
                icon: Heart,
                text: "The potential of its natural spring-fed pond, a sanctuary for rest, retreat, and rejuvenation.",
              },
              {
                icon: Users,
                text: "The potential of its perfect location, tucked between Mt. Hood and Oregon's Rose City.",
              },
              {
                icon: TreePine,
                text: "The potential of its field and forest, where Highland cattle forage amongst the trees and welcome calves in the front pastures.",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shrink-0">
                  <item.icon className="h-5 w-5 text-forest" />
                </div>
                <p className="text-sm text-charcoal leading-relaxed font-sans italic">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 text-center">
            <p className="text-xl font-normal leading-relaxed text-charcoal sm:text-2xl font-display">
              &ldquo;The potential to be a place for man, a place for nature,
              a place for everything and everything in its place. This is Highland Farms.&rdquo;
            </p>
          </blockquote>
        </Container>
      </section>

      {/* The Farm & Animals */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:order-1">
              <Image
                src="/images/farm/farm-animals.jpg"
                alt="Guests petting Highland Cows in the barn at Highland Farms"
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
              <p className="mt-5 text-base text-muted leading-relaxed font-sans">
                Curate an event you won&apos;t forget by incorporating the creatures
                of Highland Farms. Whether taking wedding photos beside Highland Cows
                or having your leadership team meet San Clemente Goats, farm
                proprietor Connor McWilliams and his team of guides help visitors
                get up close to the animals that call the farm home.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                Our gentle Scottish Highland Cows are the stars, but they share the
                property with Icelandic Sheep, White Peacocks, African Grey Geese,
                and San Clemente Goats. Whether you&apos;re here for a wedding, a farm
                tour, or a weekend stay — the animals are always there to brighten
                your day.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/farm-tours" variant="outline" size="sm">
                  Book a Farm Tour
                </Button>
                <Button href="/nordic-spa" variant="outline" size="sm">
                  Book a Spa Session
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Property Amenities */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <SectionHeading
            eyebrow="The Lay of the Land"
            title="Property Amenities"
          />

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.label} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream">
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

      {/* Accommodations */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container>
          <SectionHeading
            eyebrow="Stay With Us"
            title="The Accommodations"
            subtitle="Three unique spaces designed for comfort and connection."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "The Lodge",
                tagline: "Relax & Reminisce",
                description:
                  "Your home base for the perfect gathering. Sleeps 8 with four bedrooms, a spacious family room, dining room, and an outdoor deck overlooking the farm and surrounding forest.",
                href: "/stay/lodge",
              },
              {
                name: "The Cottage",
                tagline: "Retreat & Converse",
                description:
                  "A perfect space to continue dinner conversations into the night. Located a stone's throw from The Lodge with its own full kitchen, three bedrooms, and a patio with Adirondack chairs overlooking the farm.",
                href: "/stay/cottage",
              },
              {
                name: "The Camp",
                tagline: "Recenter & Connect",
                description:
                  "A forest camping experience you won't forget. Sleeps 6 between the iconic Airstream and two queen-bed canvas tents. The Airstream features a full kitchen, bath, WiFi, and TV.",
                href: "/stay/camp",
              },
            ].map((acc) => (
              <Link
                key={acc.name}
                href={acc.href}
                className="group block rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-normal text-charcoal font-display">
                  {acc.name}
                </h3>
                <p className="mt-1 text-sm italic text-sage font-display">
                  {acc.tagline}
                </p>
                <p className="mt-3 text-sm text-muted leading-relaxed font-sans">
                  {acc.description}
                </p>
                <p className="mt-4 text-sm font-light text-forest group-hover:text-forest-light transition-colors font-sans tracking-wide">
                  View &amp; Book &rarr;
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* The Forest Valley */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-normal italic text-sage tracking-wide font-display mb-3">
            Explore &amp; Engage
          </p>
          <h2 className="text-3xl font-normal sm:text-4xl">
            The Forest Valley
          </h2>
          <p className="mt-5 text-base text-muted leading-relaxed font-sans">
            Brightwood, Oregon, sits in a forested valley midway between Mount Hood
            and the fertile Willamette Valley. Perched on a sloping foothill above
            the confluence of the Sandy and Salmon Rivers, Highland Farms shares the
            same views witnessed by the fur traders and trappers that established
            the infamous Oregon Trail.
          </p>
          <p className="mt-4 text-base text-muted leading-relaxed font-sans">
            Just 50 minutes from Portland and 20 minutes from Mt. Hood, Highland
            Farms is accessible yet feels worlds away from the city. Experience the
            Mount Hood Territory at your doorstep.
          </p>
        </Container>
      </section>

      {/* Property Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <SectionHeading title="The Property" subtitle="Five acres of forest, farm, and magic." />
          <ImageCarousel images={galleryImages} aspectRatio="video" />
        </Container>
      </section>

      <EventCategoryCards />
    </>
  );
}
