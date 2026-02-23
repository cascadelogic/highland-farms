"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Heart, MessageCircle, Send, Bookmark, Play, MoreHorizontal } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const PROFILE = {
  handle: CONTACT.instagramHandle,
  url: CONTACT.instagram,
  followers: "18.1K",
  following: "544",
  posts: "339",
  location: "Mt Hood, OR",
  bio: "Weddings, Retreats, Celebrations, Nordic Spa, Farm Tours and Farm Stays with Scottish Highland Cows",
  linkText: "Experience Highland Farms",
  verified: false,
};

const PROFILE_AVATAR = "/images/farm/instagram-profile.png";

const instagramPosts = [
  {
    url: "https://www.instagram.com/reel/DG1WGsSSt9e/",
    image: "/images/farm/cow-2.jpg",
    alt: "Highland Cows at Highland Farms Oregon",
    caption: "There's nothing quite like a morning with our Highland Cows at the base of Mt. Hood.",
    likes: "2,841",
    comments: "134",
    timeAgo: "4d",
    isReel: true,
    featured: false,
  },
  {
    url: "https://www.instagram.com/reel/DUjsovNjzjf/",
    image: "/images/farm/goats.jpg",
    alt: "Highland Farms featured on LivePDX",
    caption: "What a wild ride it's been! Thank you @livepdx for sharing our farm with Portland.",
    likes: "4,832",
    comments: "217",
    timeAgo: "2w",
    isReel: true,
    featured: true,
  },
  {
    url: "https://www.instagram.com/reel/C8iizbbv47X/",
    image: "/images/weddings/hannah-max/01.jpg",
    alt: "Forest wedding at Highland Farms",
    caption: "Forest weddings hit different at Highland Farms. Surrounded by old-growth trees, Highland Cows, and the magic of Mt. Hood.",
    likes: "1,563",
    comments: "98",
    timeAgo: "3w",
    isReel: true,
    featured: false,
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
          subtitle="Join 18K+ followers for daily farm life, forest weddings, and Highland Cow moments."
        />

        {/* As Seen On LivePDX banner */}
        <div className="mx-auto mb-8 max-w-2xl">
          <a
            href="https://www.instagram.com/reel/DUjsovNjzjf/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-gradient-to-r from-[#0d9488] to-[#14b8a6] p-[1px] shadow-sm hover:shadow-md transition-all duration-500"
          >
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#0d9488]/10 shrink-0">
                  <Play className="h-4 w-4 text-[#0d9488] fill-[#0d9488]" />
                </div>
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.15em] text-[#0d9488] font-sans">
                    As Seen On
                  </p>
                  <p className="text-lg font-display font-normal text-charcoal">
                    Live<span className="text-[#0d9488]">PDX</span>
                  </p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm text-charcoal/80 font-sans font-light">
                  Featured on Portland&apos;s favorite local guide
                </p>
                <p className="text-xs text-[#0d9488] font-sans mt-0.5 group-hover:underline">
                  Watch the feature &rarr;
                </p>
              </div>
              <div className="block sm:hidden">
                <p className="text-xs text-[#0d9488] font-sans group-hover:underline">
                  Watch &rarr;
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Instagram profile header */}
        <div className="mx-auto mb-10 max-w-2xl rounded-2xl bg-white p-6 shadow-sm border border-cream-dark/30">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] p-[3px]">
                <div className="h-full w-full rounded-full bg-white p-[2px]">
                  <div className="relative h-full w-full rounded-full overflow-hidden">
                    <Image
                      src={PROFILE_AVATAR}
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

              <p className="mt-1 text-xs text-muted font-sans font-light hidden sm:block">
                {PROFILE.location}
              </p>
              <p className="mt-0.5 text-sm text-charcoal/80 font-sans font-light hidden sm:block">
                {PROFILE.bio}
              </p>
              <p className="mt-0.5 text-sm text-[#00376b] font-sans font-normal hidden sm:block">
                {PROFILE.linkText}
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
              className={`group block rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 ${
                post.featured
                  ? "border-2 border-[#0d9488]/40 ring-1 ring-[#0d9488]/10"
                  : "border border-cream-dark/30"
              }`}
            >
              {/* Featured badge */}
              {post.featured && (
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0d9488] to-[#14b8a6] px-3.5 py-2">
                  <Play className="h-3 w-3 text-white fill-white" />
                  <span className="text-xs font-medium text-white tracking-wide font-sans">
                    As Seen on Live<span className="font-semibold">PDX</span>
                  </span>
                </div>
              )}

              {/* Post header */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] shrink-0">
                  <div className="h-full w-full rounded-full bg-white p-[1px]">
                    <div className="relative h-full w-full rounded-full overflow-hidden">
                      <Image
                        src={PROFILE_AVATAR}
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
                {post.isReel && !post.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                    <Play className="h-3 w-3 text-white fill-white" />
                    <span className="text-[10px] font-medium text-white">Reel</span>
                  </div>
                )}
                {post.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-[#0d9488]/90 px-2.5 py-1 backdrop-blur-sm">
                    <Play className="h-3 w-3 text-white fill-white" />
                    <span className="text-[10px] font-medium text-white">Reel</span>
                  </div>
                )}
              </div>

              {/* Action bar */}
              <div className="px-3.5 pt-2.5 pb-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Heart className={`h-[22px] w-[22px] transition-colors ${post.featured ? "text-red-500 fill-red-500" : "text-charcoal hover:text-muted"}`} />
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
