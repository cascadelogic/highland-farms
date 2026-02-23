"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Instagram } from "lucide-react";
import { CONTACT } from "@/lib/constants";

interface InstagramEmbedProps {
  /** Show the featured LivePDX viral reel */
  showFeaturedReel?: boolean;
  /** Additional post URLs to embed */
  additionalPosts?: string[];
}

const DEFAULT_POSTS = [
  "https://www.instagram.com/reel/DUjsovNjzjf/", // LivePDX viral reel
  "https://www.instagram.com/p/DCyQfgYy_ac/",
  "https://www.instagram.com/p/DClXNVhyBqf/",
];

export function InstagramEmbed({
  showFeaturedReel = true,
  additionalPosts,
}: InstagramEmbedProps) {
  const scriptLoaded = useRef(false);
  const posts = additionalPosts || DEFAULT_POSTS;

  useEffect(() => {
    if (scriptLoaded.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).instgrm?.Embeds?.process?.();
      return;
    }
    const existing = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
    scriptLoaded.current = true;
  }, []);

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
            <p className="text-sm text-muted font-sans">
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

        {/* Featured viral reel + additional posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {showFeaturedReel && (
            <div className="md:col-span-1">
              <p className="mb-2 text-center text-xs font-normal uppercase tracking-widest text-forest font-sans">
                As Seen On LivePDX
              </p>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={posts[0]}
                data-instgrm-version="14"
                data-instgrm-captioned
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "8px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0 auto",
                  maxWidth: "540px",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              />
            </div>
          )}

          {/* Additional posts */}
          {posts.slice(1).map((url) => (
            <div key={url} className="md:col-span-1">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "8px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0 auto",
                  maxWidth: "540px",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              />
            </div>
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
          </a>
        </div>
      </Container>
    </section>
  );
}
