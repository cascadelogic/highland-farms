import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BOOKING_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Farm Store",
  description:
    "Shop Highland Farms merchandise, weighted Highland Cow plushies, farm-fresh eggs, Highland beef, Mangalitsa pork, and more. Gift certificates available.",
};

const products = [
  // Plush
  { name: "Princess Fiona — White Highland Cow Plush", price: 65.0, category: "Plush", image: "/images/shop/princess-fiona-plush.jpg" },
  { name: "Mr. Finley — Red Highland Cow Plush", price: 65.0, category: "Plush", image: "/images/shop/mr-finley-plush.jpg" },
  // Apparel
  { name: "Highland Farms Camo Trucker Hat", price: 35.0, category: "Apparel", image: "/images/shop/camo-trucker-hat.jpg" },
  { name: "The Dream Hoodie", price: 49.95, category: "Apparel", image: "/images/shop/dream-hoodie.png" },
  { name: "The Dream T-Shirt", price: 29.95, category: "Apparel", image: "/images/shop/dream-tshirt.png" },
  // Farm Products
  { name: "Farm Fresh Eggs (Dozen)", price: 8.0, category: "Farm Products", image: "/images/shop/eggs.jpg" },
  // Highland Beef
  { name: "Highland Top Sirloin Ground Beef (1 lb)", price: 9.0, category: "Highland Beef", image: "/images/shop/ground-beef.jpg" },
  { name: "Highland Beef New York Steak", price: null, category: "Highland Beef", image: "/images/shop/ny-steak.jpg" },
  // Mangalitsa Pork
  { name: "Mangalitsa — Thick Cut Peppered Bacon", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-peppered-bacon.jpg" },
  { name: "Mangalitsa — Thick Cut Bacon", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-thick-cut-bacon.jpg" },
  { name: "Mangalitsa — Peppered Bacon Ends", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-peppered-bacon-ends.jpg" },
  { name: "Mangalitsa — Bacon Ends", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-bacon-ends.jpg" },
  { name: "Mangalitsa — Cured Ham", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-cured-ham.png" },
  { name: "Mangalitsa — Sirloin Roast (2 lb+)", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-sirloin-roast.jpg" },
  { name: "Mangalitsa — Pork Shoulder Roast", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-shoulder-roast.png" },
  { name: "Mangalitsa — Baby Back Ribs", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-baby-back-ribs.jpg" },
  { name: "Mangalitsa — Spare Ribs", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-spare-ribs.jpg" },
  { name: "Mangalitsa — Pork Tenderloin", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-tenderloin.jpg" },
  { name: "Mangalitsa — Pork Chop Boneless", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-chop-boneless.jpg" },
  { name: "Mangalitsa — Pork Chop Bone In", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-chop-bone-in.jpg" },
  { name: "Mangalitsa — Sausage Links (1 lb)", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-sausage-links.png" },
  { name: "Mangalitsa — Breakfast Sausage Ground (1 lb)", price: null, category: "Mangalitsa Pork", image: "/images/shop/mangalitsa-breakfast-sausage.jpg" },
  // Amenities
  { name: "S'mores Kit for 1", price: 2.0, category: "Amenities", image: "/images/shop/smores-kit.jpg" },
  { name: "Firewood & Kindling", price: 9.0, category: "Amenities", image: "/images/shop/firewood.jpg" },
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
          <h2 className="text-xl font-normal sm:text-2xl">
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
                className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-500"
              >
                <div className="relative aspect-square overflow-hidden bg-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted uppercase tracking-wider font-sans">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-sm font-normal text-charcoal font-sans leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-base font-normal text-forest font-sans">
                    {product.price ? `$${product.price.toFixed(2)}` : "Contact for Price"}
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
