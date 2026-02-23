export interface Property {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  guests: number;
  bedrooms: number;
  baths: number;
  imageSrc: string;
  bookingUrl: string;
  hospitable_widget_url?: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  category: string;
  imageSrc: string;
  externalUrl: string;
  soldOut?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  imageSrc?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
