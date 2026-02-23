"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Heart, MessageCircle, Send, Bookmark, Play, MoreHorizontal } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const PROFILE = {
  handle: CONTACT.instagramHandle,
  url: CONTACT.instagram,
  followers: "10.2K",
  following: "847",
  posts: "312",
  bio: "Highland Cows, forest weddings & farm life",
  verified: false,
};

const instagramPosts = [
  {
    url: "https://www.instagram.com/reel/DUjsovNjzjf/",
    image: "/images/farm/cow-2.jpg",
    alt: "Highland Cow up close — viral LivePDX reel",
    caption: "Our sweet Highland Cows are ready for their close-up. Thank you @livepdx for sharing our farm with the world!",
    likes: "4,832",
    comments: "217",
    timeAgo: "3w",
    isReel: true,
    badge: "Featured on LivePDX",
  },
  {
    url: "https://www.instagram.com/p/DCyQfgYy_ac/",
    image: "/images/weddings/hannah-max/01.jpg",
    alt: "Wedding couple with Highland Cow in the forest",
    caption: "When the cows crash the wedding photos and make it even more magical. Congratulations Hannah & Max!",
    likes: "1,247",
    comments: "89",
    timeAgo: "2w",
    isReel: false,
  },
  {
    url: "https://www.instagram.com/p/DClXNVhyBqf/",
    image: "/images/spa/spa-1.jpg",
    alt: "Nordic spa cedar tubs nestled in the forest",
    caption: "Nothing beats a soak in the forest after a long week. Our Nordic spa is open year-round.",
    likes: "986",
    comments: "54",
    timeAgo: "1w",
    isReel: false,
  },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramEmbed() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Follow Along"
          title="See Highland Farms on Instagram"
        />

        {/* Instagram profile header */}
        <div className="mx-auto mb-10 max-w-2xl rounded-2xl bg-white p-6 shadow-sm border border-cream-dark/30">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] p-[3px]">
                <div className="h-full w-full rounded-full bg-white p-[2px]">
                  <div className="relative h-full w-full rounded-full overflow-hidden">
                    <Image
                      src="/images/farm/cow-2.jpg"
                      alt="Highland Farms"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base font-normal text-charcoal font-sans">
                  {PROFILE.handle}
                </span>
              </div>

              {/* Stats */}
              <div className="mt-2 flex items-center gap-5 text-sm font-sans">
                <div>
                  <span className="font-medium text-charcoal">{PROFILE.posts}</span>{" "}
                  <span className="text-muted font-light">posts</span>
                </div>
                <div>
                  <span className="font-medium text-charcoal">{PROFILE.followers}</span>{" "}
                  <span className="text-muted font-light">followers</span>
                </div>
                <div className="hidden sm:block">
                  <span className="font-medium text-charcoal">{PROFILE.following}</span>{" "}
                  <span className="text-muted font-light">following</span>
                </div>
              </div>

              <p className="mt-1.5 text-sm text-muted font-sans font-light hidden sm:block">
                {PROFILE.bio}
              </p>
            </div>

            {/* Follow button */}
            <a
              href={PROFILE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-[#0095f6] px-5 py-2 text-sm font-medium text-white hover:bg-[#1877f2] transition-colors"
            >
              Follow
            </a>
          </div>
        </div>

        {/* Post cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-white border border-cream-dark/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
            >
              {/* Post header */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] shrink-0">
                  <div className="h-full w-full rounded-full bg-white p-[1px]">
                    <div className="relative h-full w-full rounded-full overflow-hidden">
                      <Image
                        src="/images/farm/cow-2.jpg"
                        alt=""
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-charcoal font-sans truncate">
                    highlandfarmsor
                  </p>
                  {post.badge && (
                    <p className="text-[10px] text-muted font-sans font-light truncate">
                      {post.badge}
                    </p>
                  )}
                </div>
                <MoreHorizontal className="h-4 w-4 text-muted/60 shrink-0" />
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {post.isReel && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                    <Play className="h-3 w-3 text-white fill-white" />
                    <span className="text-[10px] font-medium text-white">Reel</span>
                  </div>
                )}
              </div>

              {/* Action bar */}
              <div className="px-3.5 pt-2.5 pb-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Heart className="h-[22px] w-[22px] text-charcoal hover:text-muted transition-colors" />
                    <MessageCircle className="h-[22px] w-[22px] text-charcoal hover:text-muted transition-colors scale-x-[-1]" />
                    <Send className="h-[20px] w-[20px] text-charcoal hover:text-muted transition-colors -rotate-12" />
                  </div>
                  <Bookmark className="h-[22px] w-[22px] text-charcoal hover:text-muted transition-colors" />
                </div>
              </div>

              {/* Likes */}
              <div className="px-3.5 pt-1.5">
                <p className="text-xs font-medium text-charcoal font-sans">
                  {post.likes} likes
                </p>
              </div>

              {/* Caption */}
              <div className="px-3.5 pt-1 pb-1">
                <p className="text-xs text-charcoal font-sans line-clamp-2">
                  <span className="font-medium">highlandfarmsor</span>{" "}
                  <span className="font-light text-charcoal/80">{post.caption}</span>
                </p>
              </div>

              {/* Comments */}
              <div className="px-3.5 pb-2">
                <p className="text-[11px] text-muted font-sans font-light">
                  View all {post.comments} comments
                </p>
              </div>

              {/* Time */}
              <div className="px-3.5 pb-3">
                <p className="text-[10px] text-muted/70 font-sans font-light uppercase tracking-wide">
                  {post.timeAgo}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View more CTA */}
        <div className="mt-10 text-center">
          <a
            href={PROFILE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-charcoal/20 bg-white px-6 py-3 text-sm font-light text-charcoal hover:border-charcoal/40 hover:shadow-sm transition-all font-sans tracking-wide"
          >
            <InstagramIcon className="h-4 w-4" />
            View More on Instagram
          </a>
        </div>
      </Container>
    </section>
  );
}
