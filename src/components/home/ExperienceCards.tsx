import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    title: "Highland Cow Farm Tours",
    description:
      "Get up close with our gentle Highland Cows, Icelandic Sheep, White Peacocks, and African Grey Geese. A private 60-minute experience your family will never forget.",
    cta: "Book a Farm Tour",
    href: "/farm-tours",
    image: "/images/farm/highland-cows-hero.jpg",
    alt: "Highland Cows at Highland Farms Oregon",
  },
  {
    title: "Nordic Forest Spa",
    description:
      "Soak in cedar hot tubs nestled among towering evergreens. Unwind with the sounds of the forest in our private 60-minute spa sessions.",
    cta: "Book a Spa Session",
    href: "/nordic-spa",
    image: "/images/spa/forest-spa-1.jpg",
    alt: "Cedar soaking tub in the forest at Highland Farms",
  },
];

export function ExperienceCards() {
  return (
    <section id="experiences" className="py-20 lg:py-28 bg-warm-white">
      <Container>
        <SectionHeading
          eyebrow="Experience the Farm"
          title="More Than a Venue"
          subtitle="Highland Farms isn't just for weddings. Explore our farm tours and Nordic spa."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-medium text-charcoal">
                  {exp.title}
                </h3>
                <p className="mt-3 text-base text-muted leading-relaxed font-sans">
                  {exp.description}
                </p>
                <div className="mt-6">
                  <Button href={exp.href} variant="outline">
                    {exp.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
