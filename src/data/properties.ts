import type { Property } from "@/lib/types";

export const properties: Property[] = [
  {
    slug: "whole-farm",
    name: "The Whole Farm",
    tagline: "The full Highland Farms experience",
    description:
      "Reserve the entire property for your group. Perfect for weddings, retreats, and large gatherings with exclusive access to all accommodations, the farm, and the forest.",
    guests: 24,
    bedrooms: 8,
    baths: 4,
    imageSrc: "/images/properties/whole-farm.jpg",
    bookingUrl: "/stay/whole-farm",
    highlights: [
      "Exclusive property access",
      "All accommodations included",
      "Perfect for weddings & events",
      "Up to 24 guests",
    ],
  },
  {
    slug: "lodge",
    name: "The Lodge",
    tagline: "Relax & reminisce",
    description:
      "Our historic cedar mill lodge sleeps 8 guests across four bedrooms with a spacious family room, dining area, and an outdoor deck overlooking the forest.",
    guests: 8,
    bedrooms: 4,
    baths: 2,
    imageSrc: "/images/properties/cottage.jpg",
    bookingUrl: "/stay/lodge",
    highlights: [
      "Historic cedar mill",
      "Forest deck views",
      "Full kitchen",
      "4 bedrooms",
    ],
  },
  {
    slug: "cottage",
    name: "The Cottage",
    tagline: "Retreat & converse",
    description:
      "A cozy retreat near The Lodge with a full kitchen and three bedrooms. Perfect for families or a peaceful getaway in the forest.",
    guests: 8,
    bedrooms: 3,
    baths: 1,
    imageSrc: "/images/properties/lodge.jpg",
    bookingUrl: "/stay/cottage",
    highlights: [
      "Cozy & private",
      "Full kitchen",
      "Near The Lodge",
      "3 bedrooms",
    ],
  },
  {
    slug: "camp",
    name: "The Camp",
    tagline: "Recenter & connect",
    description:
      "A unique glamping experience featuring a restored Airstream trailer and canvas tent camping under the towering evergreens.",
    guests: 4,
    bedrooms: 1,
    baths: 1,
    imageSrc: "/images/properties/camp.jpg",
    bookingUrl: "/stay/camp",
    highlights: [
      "Airstream trailer",
      "Glamping tents",
      "Under the stars",
      "WiFi & kitchen access",
    ],
  },
];
