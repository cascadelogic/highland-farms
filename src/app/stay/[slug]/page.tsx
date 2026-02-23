import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Users, BedDouble, Bath, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageCarousel } from "@/components/gallery/ImageCarousel";
import { HospitableWidget } from "@/components/stay/HospitableWidget";
import { properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const property = properties.find((p) => p.slug === slug);
    if (!property) return { title: "Not Found" };

    return {
      title: `${property.name} — Farm Stay`,
      description: property.description,
    };
  });
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) notFound();

  const propertyGallery: Record<string, { src: string; alt: string }[]> = {
    "whole-farm": [
      { src: "/images/properties/whole-farm.jpg", alt: "The Whole Farm aerial view" },
      { src: "/images/properties/lodge.jpg", alt: "The Lodge at Highland Farms" },
      { src: "/images/properties/cottage.jpg", alt: "The Cottage at Highland Farms" },
      { src: "/images/properties/camp.jpg", alt: "The Camp at Highland Farms" },
    ],
    lodge: [
      { src: "/images/properties/lodge.jpg", alt: "The Lodge exterior" },
      { src: "/images/properties/lodge-interior.jpg", alt: "The Lodge interior" },
      { src: "/images/properties/gallery-1.jpg", alt: "The Lodge living area" },
      { src: "/images/properties/gallery-3.jpg", alt: "The Lodge bedroom" },
    ],
    cottage: [
      { src: "/images/properties/cottage.jpg", alt: "The Cottage exterior" },
      { src: "/images/properties/cottage-interior.jpg", alt: "The Cottage interior" },
      { src: "/images/properties/gallery-2.jpg", alt: "The Cottage living space" },
      { src: "/images/properties/gallery-4.jpg", alt: "The Cottage bedroom" },
    ],
    camp: [
      { src: "/images/properties/camp.jpg", alt: "The Camp glamping setup" },
      { src: "/images/properties/gallery-5.jpg", alt: "The Camp surroundings" },
      { src: "/images/properties/gallery-6.jpg", alt: "The Camp Airstream" },
      { src: "/images/properties/gallery-7.jpg", alt: "The Camp forest setting" },
    ],
  };

  const carouselImages = propertyGallery[property.slug] || [
    { src: property.imageSrc, alt: `${property.name}` },
  ];

  return (
    <>
      {/* Back link + Hero */}
      <section className="pt-24 pb-4 bg-background">
        <Container>
          <Link
            href="/stay"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-forest transition-colors font-sans"
          >
            <ArrowLeft className="h-4 w-4" />
            All Accommodations
          </Link>
        </Container>
      </section>

      {/* Gallery */}
      <section className="pb-12 bg-background">
        <Container>
          <ImageCarousel images={carouselImages} aspectRatio="video" />
        </Container>
      </section>

      {/* Property Details + Booking Widget */}
      <section className="py-12 bg-background">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: Details */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-medium sm:text-4xl">
                {property.name}
              </h1>
              <p className="mt-2 text-lg italic text-muted font-sans">
                {property.tagline}
              </p>

              {/* Stats */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-charcoal font-sans">
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-forest" />
                  {property.guests} Guests
                </span>
                <span className="flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4 text-forest" />
                  {property.bedrooms} Bedrooms
                </span>
                <span className="flex items-center gap-1.5">
                  <Bath className="h-4 w-4 text-forest" />
                  {property.baths} Baths
                </span>
              </div>

              <div className="mt-6 h-px bg-cream-dark" />

              <p className="mt-6 text-base text-muted leading-relaxed font-sans">
                {property.description}
              </p>

              {/* Highlights */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal font-sans mb-3">
                  Highlights
                </h3>
                <ul className="space-y-2">
                  {property.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted font-sans flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 h-px bg-cream-dark" />

              {/* Activities */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal font-sans mb-3">
                  While You&apos;re Here
                </h3>
                <div className="space-y-2">
                  <Button href="/farm-tours" variant="ghost" className="w-full justify-start text-sm px-0">
                    Highland Cow Farm Tours &rarr;
                  </Button>
                  <Button href="/nordic-spa" variant="ghost" className="w-full justify-start text-sm px-0">
                    Nordic Forest Spa &rarr;
                  </Button>
                  <Button href="/weddings" variant="ghost" className="w-full justify-start text-sm px-0">
                    Weddings &amp; Events &rarr;
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Booking Widget */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-sm border border-cream-dark bg-white p-1">
                  <div className="bg-forest text-white text-center py-3 rounded-sm mb-1">
                    <p className="text-sm font-medium tracking-wide font-sans">
                      Book Direct — Best Rate Guaranteed
                    </p>
                  </div>
                  <HospitableWidget
                    widgetUrl={property.hospitable_widget_url || ""}
                    propertyName={property.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Properties */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container>
          <h2 className="text-center text-2xl font-medium mb-10 sm:text-3xl">
            Explore Other Accommodations
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties
              .filter((p) => p.slug !== property.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={p.bookingUrl}
                  className="group overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.imageSrc}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-charcoal font-sans">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted font-sans">
                      {p.guests} Guests &middot; {p.bedrooms} Beds &middot; {p.baths} Baths
                    </p>
                    <p className="mt-3 text-sm font-medium text-forest group-hover:text-forest-light transition-colors font-sans">
                      View &amp; Book &rarr;
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
