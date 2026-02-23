import { Star, Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function SocialProofBar() {
  return (
    <section className="bg-warm-white py-4 border-b border-cream-light/50">
      <Container>
        {/* Desktop: horizontal row with dividers */}
        <div className="hidden sm:flex items-center justify-center gap-8 text-charcoal/75">
          <a
            href="https://share.google/jrLOI4AhnpzbPPBpF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-charcoal transition-colors"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xs font-light tracking-wide font-sans">
              4.9 on Google &middot; 146+ reviews
            </span>
          </a>

          <div className="h-3 w-px bg-charcoal/10" />

          <a
            href="https://traveloregon.com/plan-your-trip/places-to-stay/farm-ranch-stays/highland-farms/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-light tracking-wide font-sans hover:text-charcoal transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#6B9E3C]" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            Featured on Travel Oregon
          </a>

          <div className="h-3 w-px bg-charcoal/10" />

          <a
            href="https://www.instagram.com/highlandfarmsor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-light tracking-wide font-sans hover:text-charcoal transition-colors"
          >
            <Instagram className="h-3.5 w-3.5 text-charcoal/50" />
            18K+ followers on Instagram
          </a>
        </div>

        {/* Mobile: compact badge row */}
        <div className="flex sm:hidden items-center justify-center gap-2 flex-wrap">
          <a
            href="https://share.google/jrLOI4AhnpzbPPBpF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-cream/60 px-3 py-1.5"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-2.5 w-2.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-[11px] font-light text-charcoal/80 font-sans">
              4.9 &middot; 146+
            </span>
          </a>

          <a
            href="https://traveloregon.com/plan-your-trip/places-to-stay/farm-ranch-stays/highland-farms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-cream/60 px-3 py-1.5"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-[#6B9E3C]" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-[11px] font-light text-charcoal/80 font-sans">
              Travel Oregon
            </span>
          </a>

          <a
            href="https://www.instagram.com/highlandfarmsor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-cream/60 px-3 py-1.5"
          >
            <Instagram className="h-2.5 w-2.5 text-charcoal/60" />
            <span className="text-[11px] font-light text-charcoal/80 font-sans">
              18K+ followers
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
