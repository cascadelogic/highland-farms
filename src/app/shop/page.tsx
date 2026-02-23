import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BOOKING_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Farm Store",
  description:
    "Shop Highland Farms merchandise, weighted Highland Cow plushies, farm-fresh eggs, Highland beef, and Mangalitsa pork. Gift certificates available.",
};

const products = [
  { name: "Highland Farms Camo Trucker Hat", price: 35.0, category: "Apparel", imagePlaceholder: "Camo trucker hat" },
  { name: "The Dream Hoodie", price: 49.95, category: "Apparel", imagePlaceholder: "Highland Farms hoodie" },
  { name: "The Dream T-Shirt", price: 29.95, category: "Apparel", imagePlaceholder: "Highland Farms t-shirt" },
  { name: "Princess Fiona — White Highland Cow Plush", price: 65.0, category: "Plush", imagePlaceholder: "White Highland Cow plush" },
  { name: "Mr. Finley — Red Highland Cow Plush", price: 65.0, category: "Plush", imagePlaceholder: "Red Highland Cow plush" },
  { name: "Farm Fresh Eggs (Dozen)", price: 8.0, category: "Farm Products", imagePlaceholder: "Dozen eggs" },
  { name: "Highland Top Sirloin Ground Beef (1 lb)", price: 9.0, category: "Meat", imagePlaceholder: "Ground beef package" },
  { name: "S'mores Kit for 1", price: 2.0, category: "Amenities", imagePlaceholder: "S'mores kit" },
  { name: "Firewood & Kindling", price: 9.0, category: "Amenities", imagePlaceholder: "Firewood bundle" },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-background">
        <Container>
          <SectionHeading
            eyebrow="Highland Farms"
            title="Farm Store"
            subtitle="Merchandise, farm-fresh products, and gifts from Highland Farms."
          />
        </Container>
      </section>

      {/* Gift Certificate Banner */}
      <section className="bg-cream">
        <Container className="py-8 text-center">
          <h2 className="text-xl font-medium sm:text-2xl">
            Gift Certificates Available
          </h2>
          <p className="mt-2 text-sm text-muted font-sans">
            Give the gift of a farm tour, spa session, or farm stay.
          </p>
          <div className="mt-4">
            <Button href={BOOKING_LINKS.giftCertificates} variant="outline" external>
              Purchase Gift Certificates
            </Button>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square bg-gradient-to-br from-cream to-cream-dark overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-muted font-sans p-2 text-center">
                    {product.imagePlaceholder}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted uppercase tracking-wider font-sans">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-sm font-medium text-charcoal font-sans leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-forest font-sans">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted font-sans">
              Products available for purchase on-site or by contacting us directly.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
