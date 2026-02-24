import Image from "next/image";
import Link from "next/link";
import { Users, BedDouble, Bath } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, StaggerItem } from "@/components/ui/StaggerChildren";
import { properties } from "@/data/properties";

export function AccommodationsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          eyebrow="Stay With Us"
          title="The Accommodations"
          subtitle="Rest in the heart of the forest. Each space has been thoughtfully designed for comfort and connection."
        />

        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <StaggerItem key={property.slug} className="w-full">
              <Link
                href={property.bookingUrl}
                className="group flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.imageSrc}
                    alt={property.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                      property.slug === "whole-farm"
                        ? "object-[center_60%]"
                        : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-normal text-charcoal font-display">
                    {property.name}
                  </h3>
                  <p className="mt-1 text-sm italic text-muted font-sans">
                    {property.tagline}
                  </p>

                  <div className="mt-3 flex items-center gap-4 text-xs text-muted font-sans">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{property.guests} guests</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{property.bedrooms} beds</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{property.baths} baths</span>
                    </span>
                  </div>

                  <p className="mt-auto pt-4 text-sm font-light text-forest group-hover:text-forest-light transition-colors font-sans tracking-wide">
                    View &amp; Book &rarr;
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
