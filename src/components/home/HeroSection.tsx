import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/weddings/hannah-max/01.jpg"
        alt="Wedding couple with Highland Cow in the forest at Highland Farms Oregon"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        {/* Logo mark */}
        <Image
          src="/images/logo/HF-logo-white.png"
          alt=""
          width={80}
          height={47}
          className="mx-auto mb-5 h-10 w-auto opacity-90 sm:h-12"
          aria-hidden="true"
        />

        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/80 font-sans sm:text-sm">
          Brightwood, Oregon &middot; At the Base of Mt. Hood
        </p>

        <h1 className="text-3xl font-medium leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Oregon&apos;s Premier Farm &amp; Forest Wedding Venue
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-white/85 leading-relaxed sm:text-base lg:text-lg font-sans">
          All-inclusive weddings surrounded by towering evergreens, Highland Cows,
          and the breathtaking beauty of the Pacific Northwest.
        </p>

        {/* Social proof inline */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80">
          <a
            href="https://share.google/jrLOI4AhnpzbPPBpF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-sans hover:text-white transition-colors"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-medium">4.9</span>
            <span className="text-white/60">(146+ reviews)</span>
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            href="https://traveloregon.com/plan-your-trip/places-to-stay/farm-ranch-stays/highland-farms/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-sans hover:text-white transition-colors"
          >
            Featured on Travel Oregon
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/weddings" size="lg" className="w-full sm:w-auto bg-white text-charcoal hover:bg-cream">
            Plan Your Wedding
          </Button>
          <Button
            href="#experiences"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white"
          >
            Explore the Farm
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="h-10 w-6 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
