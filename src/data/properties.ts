import type { Property } from "@/lib/types";

export const properties: Property[] = [
  {
    slug: "whole-farm",
    name: "The Whole Farm",
    tagline: "The full Highland Farms experience",
    description:
      "Highland Farms, a hidden glen nestled in the heart of Mt. Hood National Forest, where towering ancient cedars, gentle whispering streams, and our beloved Scottish Highland Cows set the stage for unforgettable gatherings with family, friends, and the people who matter most.",
    guests: 16,
    bedrooms: 7,
    baths: 3.5,
    imageSrc: "/images/properties/whole-farm.jpg",
    bookingUrl: "/stay/whole-farm",
    highlights: [
      "Full farm access",
      "Summer dates open April 1st",
      "Perfect for large family & friend gatherings",
      "2 Cedar Hot Tubs",
    ],
  },
  {
    slug: "lodge",
    name: "William Wallace Lodge",
    tagline: "Relax & reminisce",
    description:
      "Our cedar mill lodge is a warm and inviting retreat where scenic meals, fireside conversations, and lasting memories are made. Gather in the spacious family room and dining area, then step out onto the wrap-around deck to take in sweeping views of the farm and the forest beyond.",
    guests: 8,
    bedrooms: 4,
    baths: 2.5,
    imageSrc: "/images/properties/cottage.jpg",
    bookingUrl: "/stay/lodge",
    highlights: [
      "Cedar Hot Tub",
      "BBQ & Blackstone",
      "Full kitchen",
      "Wood fireplace",
    ],
  },
  {
    slug: "cottage",
    name: "Bonnie Lass Cottage",
    tagline: "Retreat & converse",
    description:
      "Our Bonnie Lass Cottage is a cozy retreat neighboring our barn pasture where the Scottish Highland Cows greet you in the morning and relax with you in the evenings as you enjoy the outdoor patio.",
    guests: 8,
    bedrooms: 3,
    baths: 1,
    imageSrc: "/images/properties/lodge.jpg",
    bookingUrl: "/stay/cottage",
    highlights: [
      "Cedar Hot Tub",
      "BBQ",
      "Kitchenette",
      "Indoor/outdoor living",
    ],
  },
];
