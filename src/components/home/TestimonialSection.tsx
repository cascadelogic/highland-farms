import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function TestimonialSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <Container className="max-w-3xl text-center">
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>

        <blockquote>
          <p className="text-2xl font-medium leading-relaxed text-charcoal sm:text-3xl">
            &ldquo;Highland Farms was beyond anything we could have imagined.
            The forest, the Highland Cows, the lodge — every detail was perfect.
            Our guests are still talking about it.&rdquo;
          </p>
        </blockquote>

        <div className="mt-8">
          <p className="text-base font-semibold text-charcoal font-sans">
            — A Happy Couple
          </p>
          <p className="mt-1 text-sm text-muted font-sans">
            Replace with real testimonial
          </p>
        </div>
      </Container>
    </section>
  );
}
