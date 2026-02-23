import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const categories = [
  {
    title: "Weddings & Elopements",
    href: "/weddings",
    image: "/images/weddings/ceremony.jpg",
    alt: "Wedding ceremony at Highland Farms",
  },
  {
    title: "Gatherings & Retreats",
    href: "/celebrations",
    image: "/images/farm/events-retreats.jpg",
    alt: "Group gathering at Highland Farms",
  },
  {
    title: "Photoshoots & Productions",
    href: "/contact",
    image: "/images/farm/agritourism-stay.jpg",
    alt: "Photoshoot at Highland Farms",
  },
];

export function EventCategoryCards() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors" />

              <div className="relative z-10 flex h-full items-end p-6">
                <div>
                  <h3 className="text-xl font-medium text-white sm:text-2xl">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-white/80 font-sans">
                    Learn More &rarr;
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
