import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, StaggerItem } from "@/components/ui/StaggerChildren";

const highlights = [
  {
    title: "All-Inclusive Packages",
    description: "Venue, on-site lodging for 24, event coordination, setup and teardown — we handle everything.",
    image: "/images/weddings/ceremony-2.jpg",
    alt: "Elegant outdoor dining setup at Highland Farms wedding",
  },
  {
    title: "Highland Cow Photo Ops",
    description: "Unforgettable photos with our gentle Highland Cows against the Pacific Northwest backdrop.",
    image: "/images/weddings/ceremony-1.jpg",
    alt: "Wedding couple posing with Highland Cow at Highland Farms",
  },
  {
    title: "Forest Ceremonies",
    description: "Exchange vows under towering old-growth trees draped in moss, beside a spring-fed pond.",
    image: "/images/weddings/couple.jpg",
    alt: "Ceremony setup with wooden arch and chairs in the forest",
  },
  {
    title: "Stay On-Site",
    description: "Your closest family and friends stay together in our Lodge, Cottage, and Camp.",
    image: "/images/properties/lodge.jpg",
    alt: "The Cottage at Highland Farms",
  },
];

export function WeddingHighlights() {
  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <Container>
        <SectionHeading
          eyebrow="The Experience"
          title="A Wedding Venue Like No Other"
          subtitle="Five acres of forest, farm, and magic at the base of Mt. Hood."
        />

        <StaggerChildren className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <StaggerItem key={item.title} className="w-full">
              <Link
                href="/weddings"
                className="group block h-full overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-display font-normal text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed font-sans font-light">
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
