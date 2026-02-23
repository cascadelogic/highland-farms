"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Instagram, Play, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const instagramPosts = [
  {
    url: "https://www.instagram.com/reel/DUjsovNjzjf/",
    image: "/images/farm/cow-2.jpg",
    alt: "Highland Cow up close — viral LivePDX reel",
    label: "As Seen On LivePDX",
    isReel: true,
  },
  {
    url: "https://www.instagram.com/p/DCyQfgYy_ac/",
    image: "/images/weddings/hannah-max/01.jpg",
    alt: "Wedding couple with Highland Cow in the forest",
    isReel: false,
  },
  {
    url: "https://www.instagram.com/p/DClXNVhyBqf/",
    image: "/images/spa/spa-1.jpg",
    alt: "Nordic spa cedar tubs nestled in the forest",
    isReel: false,
  },
];

export function InstagramEmbed() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Follow Along"
          title="See Highland Farms on Instagram"
          subtitle="Join 10K+ followers for daily farm life, forest weddings, and Highland Cow moments."
        />

        {/* Instagram profile card */}
        <div className="mx-auto mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-xl bg-white p-5 shadow-sm max-w-lg">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shrink-0">
            <Instagram className="h-7 w-7 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-base font-normal text-charcoal font-sans">
              {CONTACT.instagramHandle}
            </p>
            <p className="text-sm text-muted font-sans font-light">
              Highland Cows, forest weddings &amp; farm life
            </p>
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#0095f6] px-5 py-2 text-sm font-normal text-white hover:bg-[#1877f2] transition-colors"
          >
            Follow
          </a>
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl aspect-square"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Reel indicator */}
              {post.isReel && (
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                  <Play className="h-3 w-3 text-white fill-white" />
                  <span className="text-[10px] font-light text-white tracking-wide">Reel</span>
                </div>
              )}

              {/* Label */}
              {post.label && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
                  <p className="text-xs font-light tracking-[0.15em] uppercase text-white/90 font-sans">
                    {post.label}
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* View more CTA */}
        <div className="mt-10 text-center">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white px-6 py-3 text-sm font-light text-charcoal hover:border-charcoal/40 hover:shadow-sm transition-all font-sans tracking-wide"
          >
            <Instagram className="h-4 w-4" />
            View More on Instagram
            <ExternalLink className="h-3 w-3 text-muted" />
          </a>
        </div>
      </Container>
    </section>
  );
}
