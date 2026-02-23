import Link from "next/link";
import { Container } from "@/components/ui/Container";

const categories = [
  {
    title: "Weddings & Elopements",
    href: "/weddings",
    imagePlaceholder: "Wedding ceremony photo",
  },
  {
    title: "Gatherings & Retreats",
    href: "/celebrations",
    imagePlaceholder: "Group gathering photo",
  },
  {
    title: "Photoshoots & Productions",
    href: "/contact",
    imagePlaceholder: "Photoshoot photo",
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
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream-dark to-charcoal/30" />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors" />

              {/* Content */}
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
