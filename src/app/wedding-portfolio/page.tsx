import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { EventCategoryCards } from "@/components/shared/EventCategoryCards";
import { weddingPortfolio } from "@/data/wedding-portfolio";

export const metadata: Metadata = {
  title: "Wedding Portfolio",
  description:
    "Browse real weddings at Highland Farms, Oregon. See how couples have celebrated their love in our forest and farm setting at the base of Mt. Hood.",
};

export default function WeddingPortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-[url('/images/weddings/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80 font-sans">
            Real Weddings
          </p>
          <h1 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Wedding Portfolio
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 leading-relaxed font-sans">
            Every love story is unique. Browse real celebrations at Highland Farms
            and imagine your own.
          </p>
          <div className="mt-8">
            <Button href="/weddings" size="lg" className="bg-white text-charcoal hover:bg-cream">
              Plan Your Wedding
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <SectionHeading
            eyebrow="Our Couples"
            title="Love Stories at Highland Farms"
            subtitle="Forest ceremonies, Highland Cow photo ops, and celebrations under the trees."
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {weddingPortfolio.map((couple) => (
              <Link
                key={couple.slug}
                href={`/wedding-portfolio/${couple.slug}`}
                className="group block overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={couple.coverImage}
                    alt={`${couple.names} wedding at Highland Farms`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-medium text-white">
                      {couple.names}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-white/80 font-sans">
                      View Gallery &rarr;
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">
            Ready to Write Your Own Story?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted font-sans leading-relaxed">
            Highland Farms weddings are all-inclusive. We handle the venue,
            accommodations, and coordination so you can focus on each other.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/weddings">Learn About Weddings</Button>
            <Button href="/contact" variant="outline">
              Get Your Custom Quote
            </Button>
          </div>
        </Container>
      </section>

      <EventCategoryCards />
    </>
  );
}
