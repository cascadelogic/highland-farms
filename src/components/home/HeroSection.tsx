import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image placeholder - replace with actual wedding photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />
      <div className="absolute inset-0 bg-[url('/images/hero/wedding-hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/80">
          Brightwood, Oregon &middot; At the Base of Mt. Hood
        </p>

        <h1 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Oregon&apos;s Premier Farm &amp; Forest Wedding Venue
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85 leading-relaxed sm:text-xl font-sans">
          All-inclusive weddings surrounded by towering evergreens, Highland Cows,
          and the breathtaking beauty of the Pacific Northwest.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/weddings" size="lg" className="bg-white text-charcoal hover:bg-cream">
            Plan Your Wedding
          </Button>
          <Button
            href="#experiences"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 hover:text-white"
          >
            Explore the Farm
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
