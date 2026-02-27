import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { weddingPortfolio } from "@/data/wedding-portfolio";

export function generateStaticParams() {
  return weddingPortfolio.map((couple) => ({ slug: couple.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const couple = weddingPortfolio.find((c) => c.slug === slug);
    if (!couple) return { title: "Not Found" };

    return {
      title: `${couple.names} — Wedding Portfolio`,
      description: `See ${couple.names}'s wedding at Highland Farms, Oregon. Forest ceremony, Highland Cow photos, and celebration at the base of Mt. Hood.`,
      alternates: { canonical: `/wedding-portfolio/${slug}` },
      openGraph: {
        title: `${couple.names} — Highland Farms Wedding`,
        description: `See ${couple.names}'s wedding at Highland Farms, Oregon. Forest ceremony, Highland Cow photos, and celebration at the base of Mt. Hood.`,
        images: [
          {
            url: couple.coverImage,
            width: 1200,
            height: 630,
            alt: `${couple.names} wedding at Highland Farms`,
          },
        ],
      },
    };
  });
}

export default async function WeddingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const couple = weddingPortfolio.find((c) => c.slug === slug);

  if (!couple) notFound();

  const currentIndex = weddingPortfolio.findIndex((c) => c.slug === slug);
  const nextCouple = weddingPortfolio[(currentIndex + 1) % weddingPortfolio.length];
  const prevCouple = weddingPortfolio[(currentIndex - 1 + weddingPortfolio.length) % weddingPortfolio.length];

  return (
    <>
      {/* Back link + Title */}
      <section className="pt-24 pb-8 bg-background">
        <Container>
          <Link
            href="/wedding-portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-forest transition-colors font-sans"
          >
            <ArrowLeft className="h-4 w-4" />
            All Weddings
          </Link>

          <h1 className="mt-6 text-4xl font-normal sm:text-5xl">
            {couple.names}
          </h1>
          <p className="mt-2 text-base text-muted font-sans">
            A Highland Farms wedding in Brightwood, Oregon
          </p>
        </Container>
      </section>

      {/* Gallery */}
      <section className="pb-20 lg:pb-28 bg-background">
        <Container>
          <ImageGallery images={couple.images} columns={3} />
        </Container>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-12 bg-cream">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href={`/wedding-portfolio/${prevCouple.slug}`}
              className="text-sm font-light text-charcoal hover:text-forest transition-colors font-sans"
            >
              &larr; {prevCouple.names}
            </Link>
            <Link
              href="/wedding-portfolio"
              className="text-sm font-light text-muted hover:text-forest transition-colors font-sans"
            >
              All Weddings
            </Link>
            <Link
              href={`/wedding-portfolio/${nextCouple.slug}`}
              className="text-sm font-light text-charcoal hover:text-forest transition-colors font-sans"
            >
              {nextCouple.names} &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl font-normal sm:text-4xl">
            Inspired? Let&apos;s Plan Yours.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted font-sans leading-relaxed">
            Every Highland Farms wedding is unique. Tell us your vision and
            we&apos;ll create the perfect all-inclusive package.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Your Custom Quote</Button>
            <Button href="/weddings" variant="outline">
              Learn About Weddings
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
