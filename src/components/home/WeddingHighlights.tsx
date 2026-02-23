import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, StaggerItem } from "@/components/ui/StaggerChildren";

const highlights = [
  {
    title: "All-Inclusive Packages",
    description: "Venue, accommodations, coordinator, setup — everything handled so you can focus on your day.",
    image: "/images/weddings/ceremony.jpg",
    alt: "Wedding ceremony in the forest at Highland Farms",
  },
  {
    title: "Highland Cow Photo Ops",
    description: "Unforgettable wedding photos with our gentle Highland Cows against the Mt. Hood backdrop.",
    image: "/images/weddings/couple.jpg",
    alt: "Couple with Highland Cows at Highland Farms",
  },
  {
    title: "Forest Ceremony Sites",
    description: "Exchange vows under towering old-growth trees draped in moss, beside a spring-fed pond.",
    image: "/images/weddings/details.jpg",
    alt: "Forest ceremony setup at Highland Farms",
  },
  {
    title: "Lodging for 24 Guests",
    description: "Your closest family and friends stay on-site in our Lodge, Cottage, and Camp accommodations.",
    image: "/images/properties/lodge.jpg",
    alt: "The Lodge at Highland Farms",
  },
];

export function WeddingHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <Container>
        <SectionHeading
          eyebrow="Why Highland Farms"
          title="A Wedding Venue Like No Other"
          subtitle="Five acres of forest, farm, and magic at the base of Mt. Hood."
        />

        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href="/weddings"
                className="group block overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-charcoal font-sans">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed font-sans">
                    {item.description}
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
